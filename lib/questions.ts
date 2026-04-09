export const MASON_CONTEXT = {
  name: "Mason Quandt",
  title: "Associate",
  firm: "High Bluff Capital Partners",
  manager: "Ryan Pitt, PE Principal",
  reviewPeriod: "Annual Review — November 2025",

  strengths: [
    {
      title: "Work Ethic",
      detail:
        "Consistently willing to put in the effort during a challenging year. Made the decision to spend time in Atlanta and brought real dedication to the ARC situation.",
    },
    {
      title: "Beginning Proactive Leadership",
      detail:
        "Starting to independently develop and drive initiatives without relying on Ryan's direction. Proactively spent a full day working through Payroll when the operational process changed. These moments are emerging across other tasks too.",
    },
    {
      title: "Commitment to Learning and Growth",
      detail:
        "Takes feedback seriously and applies it. His athlete background shows — he has a genuine desire to improve in his role.",
    },
  ],

  newTasks: [
    {
      title: "RP/MQ Weekly Catch-Up",
      detail:
        "15-min check-ins at start and end of each week to review upcoming and completed tasks. Ultimate goal is for Mason to participate in the HB Weekly Update similar to Coady and Ryan.",
    },
    {
      title: "New Deals",
      detail:
        "Mason should own all inbound deals from NDA through initial screening. Align with Ryan first, then elevate to AG if promising. Start building deeper relationships with junior bankers.",
    },
    {
      title: "Quarterly Reviews",
      detail:
        "Structured development reviews targeting Senior Associate and ultimately Vice President if aligned with Mason's ambitions.",
    },
  ],
};

export interface FeedbackQuestion {
  category: string;
  currentScore: string;
  targetScore: string;
  improvementArea: string;
  context: string;
  goal: string;
  question: string;
}

export const FEEDBACK_QUESTIONS: FeedbackQuestion[] = [
  {
    category: "Analytical Rigor & First Pass Accuracy",
    currentScore: "5/10",
    targetScore: "8/10",
    improvementArea: "First pass accuracy on analysis",
    context:
      "Must deliver analysis that answers the core question and is correct on first submission. Needs to understand the broader objective, not just the task. He is the final line of defense on numbers — if something doesn't feel right, fix it before sending.",
    goal: "Ryan spends less time giving direct feedback at his computer and Mason executes with less direction.",
    question:
      "How accurate and thorough was Mason's first-pass work this week? Were there errors, gaps, or rework required? Did he understand the broader objective — or stop at the literal task? If something felt off, did he catch it himself before sending?",
  },
  {
    category: "Proactive Leadership, Time Mgmt & Initiative",
    currentScore: "5/10",
    targetScore: "7/10",
    improvementArea: "Anticipating needs and sequencing work without direction",
    context:
      "Needs to better anticipate what needs to be done, take a position on the best path forward, and execute. Ryan often has to help him sequence and prioritize work — this comes from not stepping back to see the bigger picture. If at capacity, must communicate proactively and propose a reasonable timeline.",
    goal: "Mason independently sequences and prioritizes his workload and proactively flags capacity constraints.",
    question:
      "Did Mason step back to see the bigger picture and sequence his work without Ryan having to direct it? Did he proactively surface any capacity issues or competing priorities — and propose a path forward on his own?",
  },
  {
    category: "Written & Verbal Communications",
    currentScore: "4/10",
    targetScore: "7/10",
    improvementArea: "Concise, clear communication",
    context:
      "Distilling complex issues into clear points is essential at High Bluff. Should practice writing more concise emails.",
    goal: "Mason is writing most of the group update emails within 6–9 months.",
    question:
      "Was Mason's communication this week — emails, updates, verbal summaries — concise and clear? Did he distill complexity into sharp points, or was there unnecessary length or ambiguity? Note any standout examples in either direction.",
  },
  {
    category: "Developing a Point of View",
    currentScore: "3/10",
    targetScore: "4/10",
    improvementArea: "Voicing opinions in real time with external parties",
    context:
      "Has strong ideas when sharing them directly with Ryan in 1:1 settings but needs more confidence voicing them in real time with external parties. Needs to share POV in meetings especially on ARC and take ownership of parts of conversations with external parties.",
    goal: "Mason actively contributes his perspective in external meetings and owns portions of those conversations.",
    question:
      "Did Mason voice his point of view in meetings or external conversations this week — not just in 1:1s with Ryan? Did he take ownership of any part of a conversation with an external party, or defer when he could have led?",
  },
  {
    category: "Value Creation Mindset",
    currentScore: "2/10",
    targetScore: "4/10",
    improvementArea: "Evolving from task execution to value creation",
    context:
      "Must evolve from task execution to value creation — identifying opportunities, engaging vendors who can enhance the portfolio, building relationships with lenders and investment banks, and developing strategic insights. Examples Ryan has worked on: real estate monetization, AI initiatives across the portfolio, financing and deal opportunities with investment banks.",
    goal: "Mason is independently identifying and pursuing value creation opportunities across the portfolio.",
    question:
      "Did Mason demonstrate thinking beyond his assigned tasks this week? Did he identify an opportunity, engage a relevant contact, surface a strategic insight, or connect his work to the broader investment thesis — or was the week purely task execution?",
  },
];
