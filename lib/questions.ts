export const MASON_CONTEXT = {
  name: "Mason Quandt",
  title: "Associate",
  firm: "High Bluff Capital Partners",
  manager: "Ryan Pitt, PE Principal",
};

export interface FeedbackQuestion {
  category: string;
  currentScore: string;
  targetScore: string;
  question: string;
  improvementArea: string;
}

export const FEEDBACK_QUESTIONS: FeedbackQuestion[] = [
  {
    category: "Analytical Rigor",
    currentScore: "5/10",
    targetScore: "8/10",
    improvementArea: "First pass accuracy on analysis",
    question:
      "How accurate and thorough was Mason's first-pass analysis this week? Were there errors, gaps, or rework required — and if so, describe them specifically.",
  },
  {
    category: "Proactive Leadership",
    currentScore: "5/10",
    targetScore: "7/10",
    improvementArea: "Anticipating needs without direction",
    question:
      "Did Mason anticipate what needed to be done and act without being directed? Describe a specific moment where he did or didn't step up proactively.",
  },
  {
    category: "Written & Verbal Communications",
    currentScore: "4/10",
    targetScore: "7/10",
    improvementArea: "Concise communication",
    question:
      "Was Mason's communication — emails, memos, verbal updates — concise and clear this week? Note examples of unnecessary length, ambiguity, or particularly strong communication.",
  },
  {
    category: "Developing a Point of View",
    currentScore: "3/10",
    targetScore: "4/10",
    improvementArea: "Voicing opinions in external meetings",
    question:
      "Did Mason voice his own opinions or recommendations in meetings or discussions, especially with external parties? Did he demonstrate independent thinking or hold back?",
  },
  {
    category: "Value Creation Mindset",
    currentScore: "2/10",
    targetScore: "4/10",
    improvementArea: "Evolving from task execution to value creation",
    question:
      "Did Mason show thinking beyond his assigned tasks toward broader value creation? Did he identify opportunities, flag risks proactively, or connect his work to the investment thesis?",
  },
];
