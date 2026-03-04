import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chart-Sensei | AI Trading Coach",
  description: "Learn to read charts like a pro trader. AI-powered trading education for crypto, stocks, and forex.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
