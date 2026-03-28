"use client";

import { FadeIn, Nav, Footer, BookCTA } from "../components";

/* ─── Data ─── */

const FAQS = [
  {
    q: "Is the AI doing my clients' taxes?",
    a: "No. Your AI junior accountant does the prep work: collecting documents, entering data, organizing workpapers, drafting returns. A licensed human on your team reviews and signs off on everything before it goes anywhere. The AI handles volume. Your people handle judgment.",
  },
  {
    q: "What if my firm has a specific way we do things?",
    a: "That's the whole point. Every Trimwork deployment is built around your firm's actual workflows. Your workpaper templates, your naming conventions, your review process. We don't give you a generic tool and wish you luck. We build it to match how your team already works.",
  },
  {
    q: "How long does setup take?",
    a: "Most firms are up and running within a week of the discovery call. We handle the setup. You don't need to install anything, migrate data, or train your team on new software.",
  },
  {
    q: "What types of returns can it handle?",
    a: "Individual and business returns: 1040s, 1065s, 1120s, and 1120-S. We build your AI junior accountant around the specific return types your firm handles, with support for additional types as we build them out together. The more complex the return, the more prep time it saves you.",
  },
  {
    q: "What happens to my client data?",
    a: "We use AI models through their API tiers, which means your data is never used for training and is not stored after processing. Your documents are processed, the work product is delivered, and nothing is retained on the AI side.",
  },
  {
    q: "How accurate is it?",
    a: "Human review is built into every workflow. Your AI junior accountant flags anything it's unsure about, and your senior staff reviews everything before it moves forward. Nothing gets filed without a human sign-off. The same way you'd review a junior hire's work, you review the AI's. The difference is the prep is done faster and the work is waiting on your desk instead of the other way around.",
  },
  {
    q: "What does it cost after the free month?",
    a: "A flat monthly retainer based on your firm's size and volume. No per-seat fees, no usage caps, no surprise invoices. We'll walk through pricing on the discovery call.",
  },
  {
    q: "Can it handle documents from client intake forms?",
    a: "Yes. If your clients fill out a form, upload documents through a portal, email them in, or share them via Google Drive or Dropbox, your AI junior accountant can pull from all of those sources. It adapts to however your clients send things in.",
  },
  {
    q: "What AI models does Trimwork use?",
    a: "Claude by Anthropic, OpenAI, and Google Gemini. We don't use one model for everything. Different tasks get routed to the model that handles them best: document reading, number extraction, communication drafting, quality checks.",
  },
  {
    q: "Do I need to change my existing software or workflow?",
    a: "No. Trimwork plugs into whatever you already use: QuickBooks, Xero, Drake, UltraTax, Lacerte, Gmail, Google Drive, and more. We adapt to your stack. You don't adapt to ours.",
  },
];

/* ─── Page ─── */

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Page hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 text-center">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-4">
            FAQ
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.07] tracking-tight text-[var(--forest-dark)] mb-6 max-w-3xl mx-auto">
            Common questions
          </h1>
          <p className="text-lg md:text-xl text-[var(--stone)] leading-relaxed max-w-2xl mx-auto">
            Everything firm owners ask before getting started.
          </p>
        </FadeIn>
      </section>

      {/* FAQ list */}
      <section className="pb-16 sm:pb-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, i) => (
            <FadeIn key={faq.q} delay={i * 0.05}>
              <div className="border-t border-border py-8">
                <h3 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">{faq.q}</h3>
                <p className="text-[var(--stone)] leading-relaxed">{faq.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why now */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 bg-[var(--parchment)]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-8">
              Why now
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--forest-dark)] leading-tight mb-8 max-w-2xl">
              Every season you wait, your competitors get further ahead.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={0.15}>
              <div>
                <h3 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">The talent isn&apos;t coming back</h3>
                <p className="text-[var(--stone)] leading-relaxed mb-6">
                  Accounting graduates are declining year over year. CPA exam candidates are at their lowest level in over a decade. The pipeline is broken and it&apos;s not recovering on any timeline that helps you this season.
                </p>
                <h3 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">Your team is already maxed out</h3>
                <p className="text-[var(--stone)] leading-relaxed">
                  Most accountants work 50+ hours a week during busy season. You can&apos;t ask them to do more. But you can take the repetitive work off their plate so they spend those hours on the work that actually requires their license and expertise.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div>
                <h3 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">AI is good enough now</h3>
                <p className="text-[var(--stone)] leading-relaxed mb-6">
                  This wasn&apos;t possible two years ago. The current generation of AI models can read scanned documents, extract numbers from messy PDFs, cross-reference data across multiple sources, and draft client-ready communication. The technology caught up to the need.
                </p>
                <h3 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">First movers win</h3>
                <p className="text-[var(--stone)] leading-relaxed">
                  The firms adopting AI now are taking on more clients without adding headcount. They&apos;re moving senior staff to advisory work. They&apos;re reducing turnaround times. While other firms are posting job listings and hoping, these firms are scaling.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <BookCTA />
      <Footer />
    </div>
  );
}
