import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Inter } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trimwork — AI Junior Accountants for Your Firm",
  description:
    "We build AI junior tax accountants custom-fit to your firm. First month free.",
  metadataBase: new URL("https://trimwork.org"),
  icons: {
    icon: "/dark_no_bg.png",
    apple: "/dark_no_bg.png",
  },
  openGraph: {
    title: "Trimwork — AI Junior Accountants for Your Firm",
    description: "We build AI junior tax accountants custom-fit to your firm. First month free.",
    url: "https://trimwork.org",
    siteName: "Trimwork",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Trimwork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimwork — AI Junior Accountants for Your Firm",
    description: "We build AI junior tax accountants custom-fit to your firm. First month free.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${atkinson.variable} ${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
