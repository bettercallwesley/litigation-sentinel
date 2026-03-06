import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ─── Deduplication: prevent duplicate Resend emails for the same address ───
const recentEmails = new Map<string, number>();
const DEDUP_TTL_MS = 60 * 60 * 1000; // 1 hour

function isDuplicate(email: string): boolean {
  const now = Date.now();
  const normalized = email.toLowerCase().trim();

  // Cleanup expired entries every call (cheap for small maps)
  recentEmails.forEach((ts, key) => {
    if (now - ts > DEDUP_TTL_MS) recentEmails.delete(key);
  });

  if (recentEmails.has(normalized)) return true;
  recentEmails.set(normalized, now);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // 1. Send notification email via Resend (skip if duplicate within 1 hour)
    const resendKey = process.env.RESEND_API_KEY;
    const notifyTo = process.env.NOTIFICATION_EMAIL || "wesley@caseglide.com";
    const duplicate = isDuplicate(email);

    if (resendKey && !duplicate) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "Litigation Sentinel <onboarding@resend.dev>",
        to: [notifyTo],
        subject: "[Litigation Sentinel] New Newsletter Subscriber",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0A0E1A; color: #fff; padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 500;">New Newsletter Subscriber</h1>
              <p style="margin: 4px 0 0; color: #8B95A5; font-size: 14px;">from LitigationSentinel.com</p>
            </div>
            <div style="background: #f8f8f6; padding: 28px 32px; border: 1px solid #e5e5e0; border-top: none; border-radius: 0 0 12px 12px;">
              <p style="font-size: 14px; color: #444; margin: 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            </div>
          </div>
        `,
      });
    } else if (duplicate) {
      console.log(`[subscribe] Skipping duplicate Resend notification for ${email}`);
    } else {
      console.warn("RESEND_API_KEY not configured — skipping notification email");
    }

    // 2. Subscribe to Beehiiv newsletter
    const apiKey = process.env.BEEHIIV_API_KEY;
    const pubId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !pubId) {
      // Graceful fallback when Beehiiv isn't configured yet
      console.warn("Beehiiv not configured — BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID missing");
      return NextResponse.json({ success: true, message: "Subscribed (pending Beehiiv setup)" });
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          referring_site: "https://www.litigationsentinel.com",
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error("Beehiiv API error:", res.status, errorData);
      return NextResponse.json(
        { error: "Subscription failed. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
