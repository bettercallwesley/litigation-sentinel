import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const MATURITY_LABELS: Record<number, string> = {
  1: "Foundational",
  2: "Developing",
  3: "Established",
  4: "Advanced",
  5: "Transformative",
};

const QUESTION_LABELS: Record<string, string> = {
  open_visibility: "Open Case Visibility",
  open_intervention: "Intervention & Settlement Readiness",
  closed_outcomes: "Outcome Measurement",
  attorney_value: "Attorney Performance & Selection",
  ai_insight: "On-Demand Intelligence",
  data_capture: "Data Foundation",
};

function buildNotificationHtml(body: {
  name?: string;
  title?: string;
  company?: string;
  email: string;
  source?: string;
  program?: string;
  answers?: Record<string, number>;
}): string {
  const { name, title, company, email, source, program, answers } = body;

  let html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0A0E1A; color: #fff; padding: 24px 32px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 500;">New Briefing Request</h1>
        <p style="margin: 4px 0 0; color: #8B95A5; font-size: 14px;">from LitigationSentinel.com</p>
      </div>
      <div style="background: #f8f8f6; padding: 28px 32px; border: 1px solid #e5e5e0; border-top: none; border-radius: 0 0 12px 12px;">
        <h2 style="font-size: 16px; color: #333; margin: 0 0 16px; border-bottom: 1px solid #e5e5e0; padding-bottom: 8px;">Contact Info</h2>
        <table style="font-size: 14px; color: #444; width: 100%; border-collapse: collapse;">
          ${name ? `<tr><td style="padding: 4px 12px 4px 0; font-weight: 600; width: 100px;">Name</td><td style="padding: 4px 0;">${name}</td></tr>` : ""}
          ${title ? `<tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">Title</td><td style="padding: 4px 0;">${title}</td></tr>` : ""}
          ${company ? `<tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">Company</td><td style="padding: 4px 0;">${company}</td></tr>` : ""}
          <tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">Email</td><td style="padding: 4px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          ${source ? `<tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">Source</td><td style="padding: 4px 0;">${source}</td></tr>` : ""}
          ${program ? `<tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">Program</td><td style="padding: 4px 0; font-weight: 600; color: ${program === "council" ? "#3B82F6" : "#10B981"};">${program.charAt(0).toUpperCase() + program.slice(1)}</td></tr>` : ""}
        </table>`;

  if (answers && Object.keys(answers).length > 0) {
    const scores = Object.values(answers);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    const maturityLevel = Math.min(5, Math.max(1, Math.round(avg)));

    const sorted = Object.entries(answers)
      .map(([id, score]) => ({ id, score, label: QUESTION_LABELS[id] || id }))
      .sort((a, b) => a.score - b.score);
    const topGaps = sorted.slice(0, 3);

    html += `
        <h2 style="font-size: 16px; color: #333; margin: 28px 0 16px; border-bottom: 1px solid #e5e5e0; padding-bottom: 8px;">Assessment Results</h2>
        <p style="font-size: 14px; margin: 0 0 12px;"><strong>Overall Maturity:</strong> Level ${maturityLevel} — ${MATURITY_LABELS[maturityLevel]}</p>
        <table style="font-size: 13px; color: #444; width: 100%; border-collapse: collapse;">
          ${Object.entries(answers)
            .map(
              ([id, score]) =>
                `<tr><td style="padding: 3px 8px 3px 0;">${QUESTION_LABELS[id] || id}</td><td style="padding: 3px 0; font-weight: 600; text-align: center; width: 40px;">${score}/5</td></tr>`
            )
            .join("")}
        </table>
        <p style="font-size: 14px; margin: 16px 0 0; color: #C43030;"><strong>Top Gaps:</strong> ${topGaps.map((g) => `${g.label} (${g.score}/5)`).join(", ")}</p>
        <p style="font-size: 14px; margin: 8px 0 0;"><strong>Recommended Program:</strong> ${avg <= 2.5 ? "Council (90-day advisory)" : "Trial (30-day pilot)"}</p>`;
  }

  html += `
      </div>
    </div>`;

  return html;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, title, company, source, program, answers } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // 1. Send notification email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    const notifyTo = process.env.NOTIFICATION_EMAIL || "wesley@caseglide.com";
    const notifyCc = process.env.NOTIFICATION_CC || "lrodriguez@caseglide.com";

    if (resendKey) {
      const resend = new Resend(resendKey);
      const subject = `[Briefing Request] ${name || "Unknown"} at ${company || "Unknown Company"}${program ? ` — selected ${program}` : ""}`;

      await resend.emails.send({
        from: "Litigation Sentinel <notifications@litigationsentinel.com>",
        to: [notifyTo],
        cc: [notifyCc],
        subject,
        html: buildNotificationHtml({ name, title, company, email, source, program, answers }),
      });
    } else {
      console.warn("RESEND_API_KEY not configured — skipping notification email");
    }

    // 2. Subscribe to Beehiiv newsletter
    const beehiivKey = process.env.BEEHIIV_API_KEY;
    const beehiivPub = process.env.BEEHIIV_PUBLICATION_ID;

    if (beehiivKey && beehiivPub) {
      await fetch(
        `https://api.beehiiv.com/v2/publications/${beehiivPub}/subscriptions`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${beehiivKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            reactivate_existing: true,
            send_welcome_email: true,
            referring_site: "https://www.litigationsentinel.com/briefing",
          }),
        }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Briefing capture error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
