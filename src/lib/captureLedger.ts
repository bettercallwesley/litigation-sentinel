import { put, list } from "@vercel/blob";
import { createHash } from "node:crypto";

/**
 * Durable hand-raiser capture ledger (Objective E).
 *
 * Purpose: give the COS cascade-mvp run one durable, append-only record of
 * EVERY person who handed us their email through a site tool, so the daily
 * readout can report site hand-raisers and flag warm inbound that overlaps the
 * outbound cut. REPORTING ONLY: this never gates, blocks, or alters any send,
 * subscribe, notify, or download behavior. Every call is best-effort and
 * fail-soft - a ledger failure is loud-logged and the caller proceeds unchanged.
 *
 * Authoritative store split (verified 2026-06-24):
 *  - Beehiiv is the authoritative store for every capture that subscribes the
 *    visitor: all /api/subscribe gates, the Command Center assessment
 *    (gate_type=assessment-results) and its schedule request
 *    (gate_type=schedule-modal), and demo newsletter opt-ins
 *    (gate_type=demo-opt-in). COS reads those directly from Beehiiv with
 *    expand[]=custom_fields (probe returned HTTP 200 with gate_type + created).
 *  - This ledger covers the ONE email-submission cohort Beehiiv never sees:
 *    demo requesters who did NOT opt into the newsletter. Those land only in
 *    Vercel function logs today, which COS cannot read. (Asset downloads carry
 *    no submitted email, so they are not a hand-raiser capture point.)
 *
 * Durability status (2026-06-24): this writes to Vercel Blob, the only durable
 * Vercel-native store. It is feature-detected on BLOB_READ_WRITE_TOKEN.
 *   - Token present  -> durable append; COS reads via the Blob list API.
 *   - Token absent    -> NO-OP with a loud TODO log. Capture is not durable
 *                        until a Blob store is provisioned.
 * TODO (wiring, exact steps): in the Vercel project Storage tab, create a Blob
 * store (Private), which injects BLOB_READ_WRITE_TOKEN into the deployment.
 * No code change is then required: the next demo-request write lands durably
 * and COS picks it up. Until then COS reports demo non-opt-in hand-raisers as
 * "not yet on the durable ledger (Beehiiv covers the rest)".
 */

const LEDGER_PREFIX = "capture-ledger/";

/** A single hand-raiser capture event. PII (email) is intentionally retained:
 * the whole point is to let COS dedup against the outbound cut by email. Blob
 * urls are unguessable (random suffix) and never published; COS reads the
 * ledger only via the authenticated Blob list API with the read-write token. */
export interface CaptureEvent {
  /** Lowercased work email the visitor submitted. */
  email: string;
  /** Which site tool captured it, in COS-readable terms.
   * "briefing-completed" (2026-06-29) persists the Executive Briefing COMPLETION
   * (Type 4) so the COS notifications reader can report and email it. */
  tool: "demo-request" | "briefing-completed";
  /** The raw gate/source string for traceability. */
  gate_type: string;
  /** ISO-8601 capture timestamp. */
  ts: string;
  /** Optional firmographics when the gate collected them. */
  company?: string;
  /** Optional UTM/referrer attribution. */
  utm_source?: string;
  utm_campaign?: string;
  referrer_first?: string;
}

/**
 * Append one capture event to the durable ledger. Best-effort and fail-soft:
 * returns false (never throws) so a ledger problem can never fail the request
 * or change send behavior. Each event is its own immutable blob keyed by
 * timestamp + email hash, so COS reads the whole ledger by listing the prefix.
 */
export async function appendCapture(
  event: CaptureEvent,
  opts?: { idempotent?: boolean }
): Promise<boolean> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    // Loud TODO: capture is not durable until a Blob store is provisioned.
    // Email is NOT logged here (Vercel logs are not the ledger).
    console.error(
      `[CAPTURE_LEDGER_TODO] BLOB_READ_WRITE_TOKEN absent; ${event.tool}/${event.gate_type} capture not durably recorded. Provision a Vercel Blob store to enable.`
    );
    return false;
  }
  try {
    const safeEmail = event.email.toLowerCase().trim();
    let key: string;
    let addRandomSuffix: boolean;
    if (opts?.idempotent) {
      // F4 idempotency (briefing-completed, 2026-06-29): a DETERMINISTIC key so a
      // repeat POST (the unseal fires fire-and-forget; React strict-mode / retries
      // double-fire) overwrites the same blob instead of duplicating it. The COS
      // reader then sees ONE completion -> one notification, never N. Key buckets by
      // day so the same person completing twice in a day is one row.
      const day = (event.ts || "").slice(0, 10);
      const dedup = createHash("sha256")
        .update(`${event.tool}|${event.gate_type}|${safeEmail}|${day}`)
        .digest("hex")
        .slice(0, 24);
      key = `${LEDGER_PREFIX}${event.tool}__${dedup}.json`;
      addRandomSuffix = false;
    } else {
      // Default (demo-request): ISO ts + short email tag, random suffix so two
      // same-second captures from the same email don't collide.
      const tag = safeEmail.replace(/[^a-z0-9]/g, "_").slice(0, 40);
      key = `${LEDGER_PREFIX}${event.ts}__${tag}.json`;
      addRandomSuffix = true;
    }
    await put(key, JSON.stringify({ ...event, email: safeEmail }), {
      access: "public",
      addRandomSuffix,
      allowOverwrite: opts?.idempotent === true,
      contentType: "application/json",
      token,
    });
    console.log(`[CAPTURE_LEDGER_OK] tool=${event.tool} gate=${event.gate_type}`);
    return true;
  } catch (err) {
    // Fail-soft: never let a ledger error touch the response path.
    console.error(
      "[CAPTURE_LEDGER_ERROR]",
      err instanceof Error ? err.message : "error"
    );
    return false;
  }
}

/**
 * Read the full capture ledger. COS-side convenience for any Node reader that
 * runs inside the platform; the cascade-mvp script reads the Blob list API
 * directly. Returns [] when no store is configured or on any read failure.
 */
export async function readCaptures(): Promise<CaptureEvent[]> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return [];
  try {
    const out: CaptureEvent[] = [];
    let cursor: string | undefined;
    do {
      const page = await list({ prefix: LEDGER_PREFIX, cursor, token });
      for (const blob of page.blobs) {
        try {
          const res = await fetch(blob.url);
          if (res.ok) out.push((await res.json()) as CaptureEvent);
        } catch {
          // Skip a single unreadable blob; never fail the whole read.
        }
      }
      cursor = page.hasMore ? page.cursor : undefined;
    } while (cursor);
    return out;
  } catch (err) {
    console.error(
      "[CAPTURE_LEDGER_READ_ERROR]",
      err instanceof Error ? err.message : "error"
    );
    return [];
  }
}
