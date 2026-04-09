import { FEEDBACK_QUESTIONS, MASON_CONTEXT } from "@/lib/questions";

const scoreColors: Record<string, string> = {
  "2/10": "#c0392b",
  "3/10": "#e05c2a",
  "4/10": "#e08c2a",
  "5/10": "#c9a227",
};

export default function Home() {
  return (
    <main style={{ maxWidth: 700, margin: "48px auto", padding: "0 24px" }}>
      {/* Header */}
      <div style={{ background: "#1a1a2e", borderRadius: 10, padding: "28px 32px", marginBottom: 28, color: "#fff" }}>
        <p style={{ margin: "0 0 4px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#7a8aaa" }}>
          {MASON_CONTEXT.firm}
        </p>
        <h1 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 700 }}>Mason Feedback Agent</h1>
        <p style={{ margin: 0, fontSize: 14, color: "#9aabc2" }}>
          Weekly coaching prompts for {MASON_CONTEXT.name} · {MASON_CONTEXT.title} → {MASON_CONTEXT.manager}
        </p>
      </div>

      {/* Schedule card */}
      <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 8, padding: "20px 24px", marginBottom: 20 }}>
        <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#888" }}>
          Cron Schedule
        </p>
        <p style={{ margin: 0, fontSize: 15, color: "#1a1a1a" }}>
          Every <strong>Friday at 9:00 AM ET</strong> &nbsp;·&nbsp;{" "}
          <code style={{ background: "#f0f4ff", borderRadius: 4, padding: "2px 6px", fontSize: 13, color: "#2a7ae0" }}>
            0 14 * * 5
          </code>{" "}
          UTC &nbsp;·&nbsp; Vercel Cron → <code style={{ fontSize: 13 }}>/api/cron</code>
        </p>
      </div>

      {/* Scorecard */}
      <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 8, padding: "20px 24px", marginBottom: 20 }}>
        <p style={{ margin: "0 0 14px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#888" }}>
          Development Scorecard
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Area", "Current", "Target", "Focus"].map((h) => (
                <th key={h} style={{ textAlign: h === "Area" || h === "Focus" ? "left" : "center", padding: "6px 10px", fontSize: 11, color: "#aaa", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid #f0f0f0" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FEEDBACK_QUESTIONS.map((q) => (
              <tr key={q.category}>
                <td style={{ padding: "10px", fontSize: 13, color: "#1a1a1a", fontWeight: 500, borderBottom: "1px solid #f8f8f8" }}>{q.category}</td>
                <td style={{ padding: "10px", textAlign: "center", fontSize: 13, fontWeight: 700, color: scoreColors[q.currentScore] ?? "#e05c2a", borderBottom: "1px solid #f8f8f8" }}>{q.currentScore}</td>
                <td style={{ padding: "10px", textAlign: "center", fontSize: 13, color: "#2a7ae0", borderBottom: "1px solid #f8f8f8" }}>{q.targetScore}</td>
                <td style={{ padding: "10px", fontSize: 12, color: "#666", borderBottom: "1px solid #f8f8f8" }}>{q.improvementArea}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Questions preview */}
      <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 8, padding: "20px 24px", marginBottom: 20 }}>
        <p style={{ margin: "0 0 16px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#888" }}>
          Weekly Email Questions
        </p>
        {FEEDBACK_QUESTIONS.map((q, i) => (
          <div key={q.category} style={{ marginBottom: i < FEEDBACK_QUESTIONS.length - 1 ? 20 : 0, paddingLeft: 14, borderLeft: "3px solid #2a7ae0" }}>
            <p style={{ margin: "0 0 3px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#2a7ae0" }}>
              {i + 1}. {q.category}
            </p>
            <p style={{ margin: 0, fontSize: 14, color: "#333", lineHeight: 1.55 }}>{q.question}</p>
          </div>
        ))}
      </div>

      {/* Setup checklist */}
      <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 8, padding: "20px 24px" }}>
        <p style={{ margin: "0 0 12px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#888" }}>
          Setup Checklist
        </p>
        {[
          { done: false, text: "Add RESEND_API_KEY to Vercel environment variables" },
          { done: false, text: "Add EMAIL_FROM (verified sender domain in Resend)" },
          { done: false, text: "Add EMAIL_TO (your email address)" },
          { done: false, text: "Add CRON_SECRET (random secret, must match Vercel Cron config)" },
          { done: false, text: "Deploy to Vercel — cron activates automatically on Pro plan" },
          { done: false, text: 'Test with: curl -X POST https://your-app.vercel.app/api/send-test' },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8, fontSize: 13, color: "#444" }}>
            <span style={{ marginTop: 1, color: "#bbb", flexShrink: 0 }}>☐</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
