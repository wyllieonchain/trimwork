"use client";

import { FadeIn, SectionCTA, Nav, Footer, BookCTA } from "../components";

/* ─── Data ─── */

const WORKFLOW_STEPS = [
  {
    title: "Collects client documents",
    desc: "W-2s, 1099s, K-1s, expense receipts, brokerage statements, prior-year returns. Your AI junior accountant pulls them from email, client portals, shared drives, or intake forms. It knows what's missing and follows up until the file is complete.",
  },
  {
    title: "Organizes and categorizes everything",
    desc: "Every document gets sorted, labeled, and filed into the right client folder. No more digging through inboxes or renaming files at 11pm. Workpapers are organized and audit-ready from day one.",
  },
  {
    title: "Populates workpapers and drafts returns",
    desc: "Income figures, deductions, and prior-year carryforwards. Your AI pulls the numbers from source documents and populates your workpapers in the format your firm already uses. It carries forward depreciation schedules from prior-year returns and flags new assets or unusual items for your team to review.",
  },
  {
    title: "Flags what needs a human eye",
    desc: "Unusual deductions, missing basis info, inconsistencies between years, potential audit triggers. Your AI doesn't guess. It flags and escalates so your senior staff can make the call.",
  },
  {
    title: "Sends it to your team for review",
    desc: "Every return lands on a senior preparer's desk ready to review, not ready to start. The prep work is done. The docs are attached. The notes are written. You just sign off.",
  },
];

const DEEP_FEATURES = [
  {
    tag: "Document collection",
    title: "Most firms start every season the same way: waiting on client docs.",
    desc: "Your AI junior accountant sends document requests, follows up on missing items, and tracks what's still outstanding across your entire client list. It pulls documents from email attachments, Google Drive, Dropbox, client portals, and intake forms. When a client sends a blurry photo of a W-2, it flags it and asks for a better copy.",
    bullets: [
      "Automated reminders on your schedule (not theirs)",
      "Tracks every client's document status in real time",
      "Handles intake forms, email attachments, and shared drives",
      "Flags incomplete, illegible, or mismatched documents",
    ],
  },
  {
    tag: "Data entry",
    title: "Your team spends hundreds of hours a year on manual data entry. That's weeks of copy-paste.",
    desc: "Your AI reads source documents, extracts the numbers, and enters them into your workpapers and tax software. Bank feeds, brokerage statements, K-1s, 1099s, receipt totals. It handles the volume so your people don't have to.",
    bullets: [
      "Reads and extracts from PDFs, spreadsheets, scanned docs, and photos",
      "Populates workpapers in your firm's existing format",
      "Cross-references entries against source documents automatically",
      "Built-in validation flags discrepancies before they reach your reviewers",
    ],
  },
  {
    tag: "Client communication",
    title: "Your clients don't want to wait. Your staff doesn't have time to reply.",
    desc: "Status updates, document confirmations, deadline reminders, next-step instructions. Your AI handles the routine client communication that eats hours every week. It drafts messages in your firm's voice, sends them on schedule, and keeps a log of every interaction.",
    bullets: [
      "Sends status updates when milestones are hit",
      "Follows up on missing documents automatically",
      "Drafts emails and messages in your firm's tone",
      "Every message is logged and searchable",
    ],
  },
  {
    tag: "Return preparation",
    title: "A business return can take 8 to 40+ hours of prep. Most of that isn't judgment. It's assembly.",
    desc: "Your AI junior accountant handles the assembly. It takes organized source documents, populates workpapers using your firm's templates, carries forward prior-year treatments, and packages everything for senior review. Individual and business returns, with support for additional return types as we build them out for your firm.",
    bullets: [
      "Populates individual and business returns from organized workpapers",
      "Carries forward depreciation schedules and flags new assets for review",
      "Attaches source documents to every line item for easy review",
      "Flags anything that needs a judgment call before filing",
    ],
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Book a discovery call",
    body: "30 minutes. Walk us through your firm: what software you run, how your team preps returns, what keeps falling through the cracks. We'll tell you exactly where an AI junior accountant fits.",
  },
  {
    number: "02",
    title: "We build it around your firm",
    body: "Not a template. Not a demo. We build an AI junior accountant that knows your workpaper format, your client intake process, your review workflow, and the tools you actually use every day.",
  },
  {
    number: "03",
    title: "It goes live alongside your team",
    body: "Your AI junior accountant starts working real client files with your team watching. You see it collect docs, enter data, prep returns, and flag issues. If it's not saving you time, you walk away.",
  },
  {
    number: "04",
    title: "You only pay if it works",
    body: "The first month is free. After that, a flat monthly retainer. No per-seat pricing, no usage caps, no surprises. Cancel anytime.",
  },
];

const TRUST_POINTS = [
  {
    title: "AI models never store your data",
    desc: "We use Claude, OpenAI, and Gemini through their API tiers, which means your client data is never used for model training and is not retained after processing. Your data goes in, the work comes out, nothing stays behind.",
  },
  {
    title: "Humans review everything",
    desc: "Your AI junior accountant does the prep. Your senior staff does the review. Nothing gets filed, sent, or finalized without a human sign-off. The AI handles volume. Your people handle judgment.",
  },
  {
    title: "Built on the leading AI models",
    desc: "We use Claude by Anthropic, OpenAI, and Google Gemini. Not one model for everything. The right model for each task: document reading, number extraction, communication drafting, quality checks.",
  },
  {
    title: "Your firm's process, not ours",
    desc: "Every Trimwork deployment is built around how your firm actually works. Your workpaper templates, your naming conventions, your review checklist. We adapt to you.",
  },
];

/* ─── Page ─── */

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Page hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 text-center">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-4">
            How it works
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.07] tracking-tight text-[var(--forest-dark)] mb-6 max-w-3xl mx-auto">
            From raw documents to review-ready returns.
          </h1>
          <p className="text-lg md:text-xl text-[var(--stone)] leading-relaxed max-w-2xl mx-auto">
            Your AI junior accountant handles the full prep lifecycle. It collects, organizes, enters, prepares, and hands off. Your senior staff picks up where judgment begins.
          </p>
        </FadeIn>
      </section>

      {/* Workflow steps */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[var(--parchment)]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-semibold text-[var(--forest-dark)] mb-16 leading-tight">
              The end-to-end workflow
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-0">
            {WORKFLOW_STEPS.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.08}>
                <div className="flex items-start gap-6 md:gap-10 py-10 border-t border-border group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--forest)]/10 flex items-center justify-center mt-0.5">
                    <span className="text-sm font-display font-bold text-[var(--forest)]">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--forest-dark)] mb-3 group-hover:text-[var(--forest)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[var(--stone)] leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Deep feature sections */}
      {DEEP_FEATURES.map((feature, i) => (
        <section
          key={feature.tag}
          className={`py-16 sm:py-28 px-4 sm:px-6 ${i % 2 === 0 ? "bg-background" : "bg-[var(--parchment)]"}`}
        >
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-4">
                {feature.tag}
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="text-2xl md:text-4xl font-semibold text-[var(--forest-dark)] mb-6 leading-tight max-w-3xl">
                {feature.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-[var(--stone)] leading-relaxed max-w-2xl mb-10">
                {feature.desc}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {feature.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
                      <circle cx="10" cy="10" r="10" fill="var(--sage)" fillOpacity="0.15" />
                      <path d="M6.5 10.5l2.5 2.5 5-5" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[var(--stone)] text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Getting started process */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 bg-[var(--forest-dark)] text-[var(--cream)]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-4">
              Getting started
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-16 max-w-lg">
              From discovery call to working AI in days.
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-0 divide-y divide-[var(--cream)]/10">
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="flex items-start gap-8 py-10 group">
                  <span className="text-xs font-mono text-[var(--sage)] pt-1 min-w-[2rem]">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--cream)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[var(--cream)]/60 leading-relaxed max-w-xl">
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & security */}
      <section className="py-16 sm:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-4 text-center">
              Trust & security
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--forest-dark)] mb-4 leading-tight text-center">
              AI does the prep. Humans make the decisions.
            </h2>
            <p className="text-lg text-[var(--stone)] mb-16 max-w-2xl mx-auto leading-relaxed text-center">
              We built Trimwork for firms that take client trust seriously. Your data is processed through enterprise-grade AI APIs that never retain or train on your information.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {TRUST_POINTS.map((point, i) => (
              <FadeIn key={point.title} delay={i * 0.08}>
                <div className="bg-[var(--parchment)] rounded-2xl p-8 h-full">
                  <h3 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[var(--stone)] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 text-center">
              <SectionCTA />
            </div>
          </FadeIn>
        </div>
      </section>

      <BookCTA />
      <Footer />
    </div>
  );
}
