import { NextRequest, NextResponse } from "next/server";
import { sendFeedbackEmail } from "@/lib/email";

// Called every Friday at 9 AM ET by Vercel Cron (schedule: "0 14 * * 5" UTC)
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await sendFeedbackEmail();
    const timestamp = new Date().toISOString();
    console.log(`[cron] Feedback email sent at ${timestamp}`);
    return NextResponse.json({ ok: true, sentAt: timestamp });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`[cron] Failed to send feedback email: ${message}`);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
