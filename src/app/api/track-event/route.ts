import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory session debounce for noisy events
const notifiedSessions = new Map<string, Set<string>>();

// Clean up old sessions every 30 minutes
const SESSION_TTL_MS = 30 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupSessions() {
  const now = Date.now();
  if (now - lastCleanup > SESSION_TTL_MS) {
    notifiedSessions.clear();
    lastCleanup = now;
  }
}

// Events that trigger a notification email
const NOTIFY_EVENTS = new Set([
  "heatmap-subscribe",
  "heatmap-state-click",
  "above-fold-subscribe-visible",
  "gate-cta-visible",
  "briefing-cta-visible",
  "scroll-depth",
]);

// Events that should be debounced (only first per session)
const DEBOUNCE_EVENTS = new Set([
  "heatmap-state-click",
  "above-fold-subscribe-visible",
  "gate-cta-visible",
  "briefing-cta-visible",
  "scroll-depth",
]);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event, data, sessionId } = body;

    if (!event || typeof event !== "string") {
      return NextResponse.json({ error: "Event name required" }, { status: 400 });
    }

    // Skip events we don't care about
    if (!NOTIFY_EVENTS.has(event)) {
      return NextResponse.json({ success: true, notified: false });
    }

    // Debounce check for noisy events
    if (DEBOUNCE_EVENTS.has(event) && sessionId) {
      cleanupSessions();
      const seen = notifiedSessions.get(sessionId);
      if (seen?.has(event)) {
        return NextResponse.json({ success: true, notified: false, reason: "debounced" });
      }
      if (!notifiedSessions.has(sessionId)) {
        notifiedSessions.set(sessionId, new Set());
      }
      notifiedSessions.get(sessionId)!.add(event);
    }

    // Send notification via Resend
    const resendKey = process.env.RESEND_API_KEY;
    const notifyTo = process.env.NOTIFICATION_EMAIL || "wesley@caseglide.com";

    if (!resendKey) {
      console.warn("RESEND_API_KEY not configured — skipping track-event notification");
      return NextResponse.json({ success: true, notified: false });
    }

    const resend = new Resend(resendKey);

    const eventLabel = event.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
    const dataStr = data ? JSON.stringify(data, null, 2) : "No additional data";

    await resend.emails.send({
      from: "Litigation Sentinel <onboarding@resend.dev>",
      to: [notifyTo],
      subject: `[Litigation Sentinel] Engagement: ${eventLabel}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A0E1A; color: #fff; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 500;">Engagement Event</h1>
            <p style="margin: 4px 0 0; color: #8B95A5; font-size: 14px;">from LitigationSentinel.com</p>
          </div>
          <div style="background: #f8f8f6; padding: 28px 32px; border: 1px solid #e5e5e0; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 14px; color: #444; margin: 0 0 12px;"><strong>Event:</strong> ${eventLabel}</p>
            <pre style="font-size: 12px; color: #666; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #e5e5e0; overflow-x: auto;">${dataStr}</pre>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, notified: true });
  } catch (err) {
    console.error("Track event error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
