import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event } = body;

    if (!event || typeof event !== "string") {
      return NextResponse.json({ error: "Event name required" }, { status: 400 });
    }

    // Events are logged server-side only (Vercel function logs).
    // No email notifications — use Vercel Web Analytics for engagement data.
    console.log(`[track-event] ${event}`, JSON.stringify(body));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Track event error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
