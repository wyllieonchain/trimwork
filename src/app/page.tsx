"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SectionCTA, Nav, Footer, BookCTA } from "./components";

/* ─── Data ─── */

const CAPABILITIES = [
  {
    title: "Tax return prep",
    desc: "Gathers source docs, populates workpapers, and organizes everything into review-ready packages for your senior staff.",
  },
  {
    title: "Document collection",
    desc: "Pulls W-2s, 1099s, K-1s, and receipts from email, portals, and shared drives. Follows up on what's missing.",
  },
  {
    title: "Data entry",
    desc: "Reads bank feeds, brokerage statements, and scanned docs. Enters numbers into your workpapers. No manual keying.",
  },
  {
    title: "Client communication",
    desc: "Sends status updates, deadline reminders, and document requests in your firm's voice. Logs every interaction.",
  },
  {
    title: "Workpaper organization",
    desc: "Sorts, labels, and files every document into the right client folder. Organized and review-ready from day one.",
  },
  {
    title: "Deadline tracking",
    desc: "Monitors filing deadlines across your entire client list and flags what needs attention before it's too late.",
  },
];

const INTEGRATIONS = [
  { name: "Drake", logo: "/logos/drake.svg" },
  { name: "UltraTax", logo: "/logos/ultratax.svg" },
  { name: "Lacerte", logo: "/logos/lacerte.svg" },
  { name: "QuickBooks", logo: "/logos/quickbooks.svg" },
  { name: "Xero", logo: "/logos/xero.svg" },
  { name: "Gmail", logo: "/logos/gmail.svg" },
  { name: "Outlook", logo: "/logos/outlook.svg" },
  { name: "Google Drive", logo: "/logos/googledrive.svg" },
  { name: "Excel", logo: "/logos/excel.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Dropbox", logo: "/logos/dropbox.svg" },
  { name: "Zapier", logo: "/logos/zapier.svg" },
];

/* ─── Hero Terminal ─── */

const TERMINAL_TASKS = [
  { label: "Pulling 1099-NEC from client email", status: "done" },
  { label: "Pulling 1099-K from payment processor", status: "done" },
  { label: "Flagging missing expense receipts for Q3", status: "flag" },
  { label: "Sending document request to client", status: "done" },
  { label: "Sorting receipts into expense categories", status: "done" },
  { label: "Extracting income from 1099s", status: "done" },
  { label: "Cross-referencing bank deposits to reported income", status: "done" },
  { label: "Populating Schedule C workpaper", status: "done" },
  { label: "Packaging return for senior review", status: "active" },
];

function HeroTerminal() {
  const [cycle, setCycle] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleCount >= TERMINAL_TASKS.length) {
      const timeout = setTimeout(() => {
        setCycle((c) => c + 1);
        setVisibleCount(0);
      }, 2500);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, 1400);
    return () => clearTimeout(timeout);
  }, [visibleCount, cycle]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visibleCount]);

  const tasks = TERMINAL_TASKS.slice(0, visibleCount);

  return (
    <div className="bg-[var(--parchment)] rounded-2xl shadow-xl shadow-[var(--forest)]/8 border border-border overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center gap-3 px-5 py-3.5 bg-background border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--stone)]/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--stone)]/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--stone)]/20" />
        </div>
        <div className="flex items-center gap-2 ml-1">
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-[var(--sage)]"
          />
          <span className="text-xs text-[var(--stone)]/60 font-medium">Trimwork is working...</span>
        </div>
      </div>

      {/* Task list */}
      <div className="relative h-[340px]">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--parchment)] to-transparent z-10 pointer-events-none" />
        <div ref={scrollRef} className="px-5 py-5 h-full overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {tasks.map((task, i) => {
          const isLast = i === tasks.length - 1;
          const isActive = isLast && task.status === "active";
          return (
            <motion.div
              key={`${cycle}-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={`flex items-center gap-3 py-2.5 ${
                !isLast ? "border-b border-border/50" : ""
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                {task.status === "done" && (
                  <div className="w-5 h-5 rounded-full bg-[var(--forest)]/10 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5l2 2 5-5" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                {task.status === "flag" && (
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 3v4M6 9v.5" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
                {task.status === "active" && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-5 h-5 rounded-full bg-[var(--sage)]/20 flex items-center justify-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--sage)]" />
                  </motion.div>
                )}
              </div>

              {/* Label */}
              <span className={`text-sm leading-snug ${
                task.status === "done" ? "text-[var(--stone)]/70" :
                task.status === "flag" ? "text-amber-700 font-medium" :
                "text-[var(--forest-dark)] font-medium"
              }`}>
                {task.label}
              </span>

              {/* Status badge */}
              <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${
                task.status === "done" ? "bg-[var(--forest)]/8 text-[var(--forest)]/60" :
                task.status === "flag" ? "bg-amber-100 text-amber-700" :
                "bg-[var(--sage)]/15 text-[var(--forest)]"
              }`}>
                {task.status === "done" ? "Done" :
                 task.status === "flag" ? "Flagged" :
                 isActive ? "In progress" : "Done"}
              </span>
            </motion.div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative min-h-screen px-4 sm:px-6 pt-24 sm:pt-28 pb-16 overflow-hidden flex items-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 40%, oklch(0.62 0.07 148 / 0.13), transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border border-[var(--sage)]/40 bg-[var(--sage)]/10 text-[var(--forest)] text-xs font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)] inline-block" />
              Free 1 month trial
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.07] tracking-tight mb-6">
              <span className="text-[var(--forest-dark)]">The best Junior Accountant on Earth</span>
              <br />
              <span className="text-[var(--forest-light)]">Works for free.</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--stone)] leading-relaxed max-w-xl mb-10">
              We build AI junior tax accountants custom-fit to your firm.
              They handle the prep work so your senior staff can focus on advisory.
            </p>

            <SectionCTA />
          </motion.div>

          {/* Right — animated terminal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block"
          >
            <HeroTerminal />
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 bg-[var(--forest-dark)] text-[var(--cream)]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-4 text-center">
              What your AI Junior Accountant does
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4 text-center">
              Everything a junior does, without the overhead.
            </h2>
            <p className="text-lg text-[var(--cream)]/60 mb-16 max-w-2xl mx-auto leading-relaxed text-center">
              From document collection to return prep, your AI junior accountant handles the full lifecycle. Your senior staff picks up where judgment begins.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.07}>
                <div className="bg-[var(--cream)]/5 border border-[var(--cream)]/10 rounded-2xl p-7 h-full transition-all duration-300 hover:bg-[var(--cream)]/10 hover:border-[var(--sage)]/30 hover:scale-[1.03] hover:shadow-lg hover:shadow-[var(--sage)]/10 cursor-default group">
                  <h3 className="text-base font-semibold text-[var(--cream)] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[var(--cream)]/60 leading-relaxed transition-colors duration-300 group-hover:text-[var(--cream)]/80">
                    {cap.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-12 text-center">
              <SectionCTA text="See how it works" href="/how-it-works" variant="light" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Comparison strip */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[var(--parchment)]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-4 text-center">
              By the numbers
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[var(--forest-dark)] leading-tight mb-10 sm:mb-16 text-center">
              Junior hire vs. AI Junior Accountant
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <FadeIn delay={0.05}>
              <div className="bg-background border border-border rounded-2xl p-5 sm:p-8">
                <h3 className="text-sm font-semibold text-[var(--stone)]/50 mb-6 uppercase tracking-wide">Traditional junior hire</h3>
                <ul className="space-y-4 text-[var(--stone)] text-sm">
                  <li className="flex justify-between"><span>Annual cost</span><span className="font-semibold text-[var(--forest-dark)]">$65-80k+</span></li>
                  <li className="flex justify-between"><span>Time to productivity</span><span className="font-semibold text-[var(--forest-dark)]">3-6 months</span></li>
                  <li className="flex justify-between"><span>Availability (tax season)</span><span className="font-semibold text-[var(--forest-dark)]">50-60 hrs/wk</span></li>
                  <li className="flex justify-between"><span>Data entry</span><span className="font-semibold text-[var(--forest-dark)]">Manual</span></li>
                  <li className="flex justify-between"><span>Document follow-up</span><span className="font-semibold text-[var(--forest-dark)]">When they remember</span></li>
                  <li className="flex justify-between"><span>Turnover risk</span><span className="font-semibold text-[var(--forest-dark)]">High</span></li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-[var(--forest)]/5 border border-[var(--forest)]/15 rounded-2xl p-5 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Image src="/dark_no_bg.png" alt="Trimwork" width={24} height={24} />
                  <span className="text-sm font-display font-bold text-[var(--forest)] tracking-tight">Trimwork</span>
                </div>
                <ul className="space-y-4 text-[var(--stone)] text-sm">
                  <li className="flex justify-between"><span>First month</span><span className="font-semibold text-[var(--forest)]">Free</span></li>
                  <li className="flex justify-between"><span>Time to productivity</span><span className="font-semibold text-[var(--forest)]">1-2 weeks</span></li>
                  <li className="flex justify-between"><span>Availability</span><span className="font-semibold text-[var(--forest)]">24/7/365</span></li>
                  <li className="flex justify-between"><span>Data entry</span><span className="font-semibold text-[var(--forest)]">Automated with validation</span></li>
                  <li className="flex justify-between"><span>Document follow-up</span><span className="font-semibold text-[var(--forest)]">Automatic, every time</span></li>
                  <li className="flex justify-between"><span>Turnover risk</span><span className="font-semibold text-[var(--forest)]">None</span></li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 sm:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-4">
              Integrates with your stack
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--forest-dark)] mb-4 leading-tight">
              Works with the tools your firm already runs.
            </h2>
            <p className="text-lg text-[var(--stone)] mb-16 max-w-xl mx-auto leading-relaxed">
              Tax prep software, accounting platforms, email, file storage. Your AI junior accountant plugs in without changing how your team works.
            </p>
          </FadeIn>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 sm:gap-8 items-center justify-items-center">
            {INTEGRATIONS.map((integration, i) => (
              <FadeIn key={integration.name} delay={i * 0.05}>
                <div className="flex flex-col items-center gap-3 group">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[var(--parchment)] group-hover:bg-[var(--forest)]/5 transition-all">
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={28}
                      height={28}
                      className="opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="text-xs text-[var(--stone)] font-medium">
                    {integration.name}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-12 text-sm text-[var(--stone)]/70">
              Plus thousands more via Zapier. If it has an API, we can connect it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Book CTA */}
      <BookCTA />
      <Footer />
    </div>
  );
}
