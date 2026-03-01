import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trimwork — AI for Accounting Firms",
  description:
    "Trimwork helps accounting firms increase margins by 10% using AI. Book a call to learn how.",
  openGraph: {
    title: "Trimwork — AI for Accounting Firms",
    description: "Increase your firm's margins by 10% with AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
