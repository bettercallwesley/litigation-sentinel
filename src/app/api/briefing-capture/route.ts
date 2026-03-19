import { NextRequest, NextResponse } from "next/server";

const QUESTION_LABELS: Record<string, string> = {
  open_visibility: "Open Case Visibility",
  open_intervention: "Intervention & Settlement Readiness",
  closed_outcomes: "Outcome Measurement",
  attorney_value: "Attorney Performance & Selection",
  ai_insight: "On-Demand Intelligence",
  data_capture: "Data Foundation",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, title, company, source, program, answers } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Structured log for monitoring (replaces Resend notification)
    const logData: Record<string, unknown> = { email };
    if (name) logData.name = name;
    if (title) logData.title = title;
    if (company) logData.company = company;
    if (source) logData.source = source;
    if (program) logData.program = program;
    if (answers) {
      const scores = Object.values(answers) as number[];
      const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
      logData.maturityLevel = Math.min(5, Math.max(1, Math.round(avg)));
      logData.topGaps = Object.entries(answers)
        .map(([id, score]) => ({ label: QUESTION_LABELS[id] || id, score }))
        .sort((a, b) => (a.score as number) - (b.score as number))
        .slice(0, 3)
        .map((g) => `${g.label} (${g.score}/5)`)
        .join(", ");
    }
    console.log(`[BRIEFING_REQUEST] ${JSON.stringify(logData)} | ${new Date().toISOString()}`);

    // Subscribe to Beehiiv newsletter (source of truth)
    const beehiivKey = process.env.BEEHIIV_API_KEY;
    const beehiivPub = process.env.BEEHIIV_PUBLICATION_ID;

    if (beehiivKey && beehiivPub) {
      const beehiivRes = await fetch(
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
            referring_site: `https://www.litigationsentinel.com/briefing${program ? `?program=${program}` : ""}`,
          }),
        }
      );
      if (!beehiivRes.ok) {
        const errBody = await beehiivRes.json().catch(() => ({}));
        console.error(`[BRIEFING_BEEHIIV_ERROR] status=${beehiivRes.status} email=${email}`, errBody);
      } else {
        console.log(`[BRIEFING_BEEHIIV_OK] email=${email}`);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Briefing capture error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
