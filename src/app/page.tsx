"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why now", href: "#why-now" },
];

const PROBLEMS = [
  {
    stat: "60%",
    label: "of partner time",
    detail: "lost to low-value administrative work",
  },
  {
    stat: "3–4×",
    label: "longer close cycles",
    detail: "than they should be, due to manual reconciliation",
  },
  {
    stat: "$40k+",
    label: "per staff member",
    detail: "in overhead that AI can systematically reduce",
  },
];

const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Audit your workflow",
    body: "We map where time is actually going — across billing, prep, review, and client comms.",
  },
  {
    number: "02",
    title: "Identify leverage points",
    body: "Not every task is a candidate. We find the 20% of work driving 80% of margin drag.",
  },
  {
    number: "03",
    title: "Deploy targeted AI",
    body: "Purpose-built automations that fit inside your existing stack. No rip-and-replace.",
  },
];

function FadeIn({
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border/50">
        <span className="text-base font-semibold tracking-tight text-[var(--forest)]">
          Trimwork
        </span>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--stone)] hover:text-[var(--forest)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#book"
          className="text-sm font-medium px-4 py-2 rounded-full bg-[var(--forest)] text-[var(--cream)] hover:bg-[var(--forest-dark)] transition-colors"
        >
          Book a call
        </a>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Subtle radial gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 40%, oklch(0.62 0.07 148 / 0.13), transparent 70%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border border-[var(--sage)]/40 bg-[var(--sage)]/10 text-[var(--forest)] text-xs font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)] inline-block" />
            Early access — limited spots
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.07] tracking-tight text-[var(--forest-dark)] mb-6">
            10% more margin.
            <br />
            <span className="text-[var(--forest-light)]">No new headcount.</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--stone)] leading-relaxed max-w-xl mx-auto mb-10">
            Trimwork helps accounting firms cut the overhead that AI can handle —
            so your team spends time on work only humans can do.
          </p>

          <a
            href="#book"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--forest)] text-[var(--cream)] font-medium text-base hover:bg-[var(--forest-dark)] transition-all hover:shadow-lg hover:shadow-[var(--forest)]/20 hover:-translate-y-0.5"
          >
            Book a discovery call
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="opacity-70"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--stone)]/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 2v10M3 8l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem stats */}
      <section className="py-24 px-6 bg-[var(--parchment)]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-12 text-center">
              The margin problem
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {PROBLEMS.map((p, i) => (
              <FadeIn key={p.stat} delay={i * 0.1}>
                <div className="bg-[var(--parchment)] p-10 flex flex-col gap-2">
                  <span className="text-5xl font-semibold text-[var(--forest)] tracking-tight">
                    {p.stat}
                  </span>
                  <span className="text-sm font-medium text-[var(--bark)]">
                    {p.label}
                  </span>
                  <p className="text-sm text-[var(--stone)] leading-relaxed mt-1">
                    {p.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-4">
              How it works
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--forest-dark)] mb-16 max-w-lg leading-tight">
              Simple process. Measurable result.
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-0 divide-y divide-border">
            {HOW_IT_WORKS.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.12}>
                <div className="flex items-start gap-8 py-10 group">
                  <span className="text-xs font-mono text-[var(--sage)] pt-1 min-w-[2rem]">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--forest-dark)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[var(--stone)] leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section
        id="why-now"
        className="py-28 px-6 bg-[var(--forest-dark)] text-[var(--cream)]"
      >
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-8">
              Why now
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-8 max-w-2xl">
              The firms that move first will own the clients that stay longest.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-[var(--cream)]/70 leading-relaxed max-w-xl">
              AI in professional services is no longer experimental. It&apos;s
              operational. The question isn&apos;t whether to adopt it — it&apos;s
              whether you do it thoughtfully before your competitors do it at all.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA / Book */}
      <section id="book" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--forest-dark)] mb-5 leading-tight">
              Let&apos;s talk about your firm.
            </h2>
            <p className="text-lg text-[var(--stone)] mb-10 leading-relaxed">
              A 30-minute call. No pitch deck. Just an honest conversation about
              where AI can move the needle for you.
            </p>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--forest)] text-[var(--cream)] font-medium text-base hover:bg-[var(--forest-dark)] transition-all hover:shadow-xl hover:shadow-[var(--forest)]/25 hover:-translate-y-0.5"
            >
              Book a free 30-min call
            </a>
            <p className="mt-6 text-xs text-[var(--stone)]/60">
              No commitment. No sales pressure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm font-medium text-[var(--forest)]">
          Trimwork
        </span>
        <p className="text-xs text-[var(--stone)]/60">
          © {new Date().getFullYear()} Trimwork. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
