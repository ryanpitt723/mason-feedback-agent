import { NextResponse } from "next/server";
import { sendFeedbackEmail } from "@/lib/email";

// GET /api/send-test — manually trigger a feedback email (dev/testing only)
// Remove or protect this endpoint before going to production if desired.
export async function GET() {
  try {
    await sendFeedbackEmail();
    return NextResponse.json({ ok: true, message: "Test email sent." });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
