import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * Tracked download route (reconciled plan C3): logging redirect.
 *
 * Every PUBLISHED download link (confirmation page, welcome email 1,
 * newsletter CTA map) goes through /api/download/<asset>. The raw
 * public/downloads/ path is NON-CANONICAL: never published anywhere,
 * retained only as the redirect target. Email-style clicks (no JS, plain
 * GET) still log, which is the whole point.
 *
 * Flow: write the asset-download event to Workstream D's durable sink,
 * fail-loud (500 on sink failure), then 302 to the static PDF. Unknown or
 * not-yet-shipped asset = 404 with grace, sink-logged (covers the pre-PDF
 * window per CONTRARIAN-6).
 */
const ASSETS: Record<string, string> = {
  "buyer-guide": "/downloads/litigation-intelligence-buyer-guide.pdf",
  "carrier-rico-playbook": "/downloads/carrier-rico-playbook.pdf",
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

/**
 * Durable sink write (same rail as /api/track-event: structured rows in the
 * Vercel function logs until the A3 Upstash sink is approved, then this one
 * function swaps to LPUSH). Fail LOUD; the caller returns 500 on throw.
 */
function writeSink(event: string, payload: Record<string, unknown>): void {
  const row = JSON.stringify({ event, ts: new Date().toISOString(), ...payload });
  console.log(`[track-event] ${event} ${row}`);
}

function assetFileExists(publicPath: string): boolean {
  try {
    // Works locally and whenever the function bundle traces public/. If a
    // shipped PDF 404s in production because the bundle excludes public/,
    // replace this check with a static `available` flag in ASSETS.
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}

function gracefulNotice(): NextResponse {
  return new NextResponse(
    "This guide is not available yet. Subscribe at https://litigationsentinel.com/subscribe and it will reach you the week it ships.",
    { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}

export async function GET(req: NextRequest, { params }: { params: { asset: string } }) {
  const asset = params.asset;
  const target = ASSETS[asset];
  const url = req.nextUrl;

  const utm: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = url.searchParams.get(key);
    if (value) utm[key] = value;
  }

  const available = target ? assetFileExists(target) : false;

  // Sink write, fail LOUD.
  try {
    writeSink("asset-download", {
      asset,
      known: Boolean(target),
      available,
      referer: req.headers.get("referer") || undefined,
      ...utm,
    });
  } catch (err) {
    console.error("[DOWNLOAD_SINK_ERROR]", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  if (!target || !available) {
    return gracefulNotice();
  }

  return NextResponse.redirect(new URL(target, url.origin), 302);
}
