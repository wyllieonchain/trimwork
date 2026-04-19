"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionCTA({ text = "Book a discovery call", href = "https://calendar.app.google/UMRR4TgSVENkvmPo9", variant = "default" }: { text?: string; href?: string; variant?: "default" | "light" }) {
  const isExternal = href.startsWith("http");
  const cls = variant === "light"
    ? "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--cream)] text-[var(--forest-dark)] font-display font-bold text-base hover:bg-white transition-all hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5"
    : "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--forest)] text-[var(--cream)] font-display font-bold text-base hover:bg-[var(--forest-dark)] transition-all hover:shadow-lg hover:shadow-[var(--forest)]/20 hover:-translate-y-0.5";
  const arrow = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-70">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {text}{arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {text}{arrow}
    </Link>
  );
}

const NAV_LINKS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center gap-4 sm:gap-8 px-4 sm:px-8 py-4 sm:py-5 bg-background/80 backdrop-blur-md border-b border-border/50">
      <Link href="/" className="text-base font-display font-bold tracking-tight text-[var(--forest)]">
        Trimwork
      </Link>
      {NAV_LINKS.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={`hidden sm:block text-sm transition-colors ${
            pathname === l.href
              ? "text-[var(--forest)] font-medium"
              : "text-[var(--stone)] hover:text-[var(--forest)]"
          }`}
        >
          {l.label}
        </Link>
      ))}
      <Link
        href="https://calendar.app.google/UMRR4TgSVENkvmPo9"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto text-sm font-display font-bold px-4 py-2 rounded-full bg-[var(--forest)] text-[var(--cream)] hover:bg-[var(--forest-dark)] transition-colors"
      >
        Get 1 month free
      </Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div>
            <Link href="/" className="text-base font-display font-bold text-[var(--forest)]">
              Trimwork
            </Link>
            <p className="text-sm text-[var(--stone)]/60 mt-2 max-w-xs">
              AI junior accountants custom-built for your firm.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 sm:gap-16">
            <div>
              <p className="text-xs font-semibold text-[var(--bark)] uppercase tracking-widest mb-4">Product</p>
              <nav className="flex flex-col gap-2.5">
                {NAV_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="text-sm text-[var(--stone)]/60 hover:text-[var(--stone)] transition-colors">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--bark)] uppercase tracking-widest mb-4">Legal</p>
              <nav className="flex flex-col gap-2.5">
                <Link href="/terms" className="text-sm text-[var(--stone)]/60 hover:text-[var(--stone)] transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="text-sm text-[var(--stone)]/60 hover:text-[var(--stone)] transition-colors">
                  Privacy Policy
                </Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--bark)] uppercase tracking-widest mb-4">Contact</p>
              <nav className="flex flex-col gap-2.5">
                <a href="mailto:malcolm@trimwork.org" className="text-sm text-[var(--stone)]/60 hover:text-[var(--stone)] transition-colors">
                  malcolm@trimwork.org
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--stone)]/40">
            &copy; {new Date().getFullYear()} Trimwork. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-[var(--stone)]/40 hover:text-[var(--stone)]/60 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-[var(--stone)]/40 hover:text-[var(--stone)]/60 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function BookCTA() {
  return (
    <section id="book" className="py-20 sm:py-32 px-6 bg-[var(--forest-dark)] text-[var(--cream)]">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-5 leading-tight">
            Your first month is on us.
          </h2>
          <p className="text-lg text-[var(--cream)]/70 mb-10 leading-relaxed">
            Book a 30-minute call. Tell us what&apos;s burying your team.
            We&apos;ll build you a custom AI junior accountant and you don&apos;t pay
            until you&apos;ve seen it work.
          </p>
          <a
            href="https://calendar.app.google/UMRR4TgSVENkvmPo9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--cream)] text-[var(--forest-dark)] font-display font-bold text-base hover:bg-white transition-all hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5"
          >
            Book a discovery call
          </a>
          <p className="mt-6 text-xs text-[var(--cream)]/40">
            No commitment. No credit card. Just a conversation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
