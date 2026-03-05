import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chart-Sensei | AI-Powered Trading Education",
  description: "Master chart reading with AI analysis. Upload any chart, get instant pattern recognition, entry/exit points, and learn proven trading strategies.",
  keywords: ["trading", "chart analysis", "AI trading", "crypto trading", "forex", "stock trading", "trading education", "chart patterns"],
  authors: [{ name: "Chart-Sensei" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Chart-Sensei | AI-Powered Trading Education",
    description: "Upload any chart. Get instant AI analysis with entry/exit points. Learn 19 proven strategies.",
    url: "https://chart-sensei.com",
    siteName: "Chart-Sensei",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chart-Sensei | AI-Powered Trading Education",
    description: "Upload any chart. Get instant AI analysis with entry/exit points. Learn 19 proven strategies.",
  },
  metadataBase: new URL("https://chart-sensei.com"),
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
