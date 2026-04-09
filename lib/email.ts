import { Resend } from "resend";
import { FEEDBACK_QUESTIONS, MASON_CONTEXT } from "./questions";

function getWeekLabel(): string {
  const now = new Date();
  const weekEnd = new Date(now);
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - 4); // Monday of this week

  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return `Week of ${fmt(weekStart)}–${fmt(weekEnd)}, ${now.getFullYear()}`;
}

function buildEmailHtml(): string {
  const weekLabel = getWeekLabel();

  const scoreboardRows = FEEDBACK_QUESTIONS.map(
    (q) => `
    <tr>
      <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #333;">${q.category}</td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #e05c2a; font-weight: 600; text-align: center;">${q.currentScore}</td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #2a7ae0; text-align: center;">${q.targetScore}</td>
    </tr>
  `
  ).join("");

  const questionBlocks = FEEDBACK_QUESTIONS.map(
    (q, i) => `
    <div style="margin-bottom: 28px; border-left: 3px solid #2a7ae0; padding-left: 16px;">
      <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #2a7ae0;">${q.category} &nbsp;·&nbsp; ${q.currentScore} → ${q.targetScore}</p>
      <p style="margin: 0 0 12px 0; font-size: 15px; font-weight: 600; color: #1a1a1a; line-height: 1.5;">${i + 1}. ${q.question}</p>
      <div style="background: #f8f9fa; border: 1px solid #e8e8e8; border-radius: 6px; padding: 14px; min-height: 56px;">
        <span style="color: #bbb; font-size: 13px; font-style: italic;">Your notes…</span>
      </div>
    </div>
  `
  ).join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin: 0; padding: 0; background: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">
  <div style="max-width: 620px; margin: 32px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background: #1a1a2e; padding: 28px 32px;">
      <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #7a8aaa;">High Bluff Capital Partners</p>
      <h1 style="margin: 0; font-size: 22px; color: #ffffff; font-weight: 700;">Mason Quandt — Weekly Feedback</h1>
      <p style="margin: 6px 0 0 0; font-size: 13px; color: #9aabc2;">${weekLabel}</p>
    </div>

    <!-- Body -->
    <div style="padding: 32px;">

      <!-- Scorecard snapshot -->
      <div style="margin-bottom: 32px;">
        <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #888;">Current Scorecard</p>
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #e8e8e8; border-radius: 6px; overflow: hidden;">
          <thead>
            <tr style="background: #f8f9fa;">
              <th style="padding: 8px 12px; text-align: left; font-size: 11px; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;">Area</th>
              <th style="padding: 8px 12px; text-align: center; font-size: 11px; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;">Current</th>
              <th style="padding: 8px 12px; text-align: center; font-size: 11px; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;">Target</th>
            </tr>
          </thead>
          <tbody>${scoreboardRows}</tbody>
        </table>
      </div>

      <!-- Divider -->
      <hr style="border: none; border-top: 1px solid #f0f0f0; margin: 0 0 28px 0;" />

      <!-- Questions -->
      <p style="margin: 0 0 24px 0; font-size: 14px; color: #555; line-height: 1.6;">
        Reflect on ${MASON_CONTEXT.name}'s performance this week across his five development areas.
        Be specific — concrete examples drive better coaching conversations.
      </p>

      ${questionBlocks}

      <!-- Footer note -->
      <p style="margin: 32px 0 0 0; font-size: 12px; color: #aaa; line-height: 1.6;">
        This feedback prompt is sent every Friday at 9 AM ET by the Mason Feedback Agent.<br/>
        Replies to this email are not monitored.
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function sendFeedbackEmail(): Promise<void> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const weekLabel = getWeekLabel();

  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: process.env.EMAIL_TO!,
    subject: `Mason Quandt Weekly Feedback — ${weekLabel}`,
    html: buildEmailHtml(),
  });

  if (error) {
    throw new Error(`Resend error: ${JSON.stringify(error)}`);
  }
}
