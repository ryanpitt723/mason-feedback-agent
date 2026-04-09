import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mason Feedback Agent",
  description: "Weekly feedback prompts for Mason Quandt — High Bluff Capital Partners",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", background: "#f5f5f5" }}>
        {children}
      </body>
    </html>
  );
}
