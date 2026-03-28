"use client";

import { Nav, Footer } from "../components";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto prose-sm">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-4">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--forest-dark)] mb-8">Privacy Policy</h1>
          <p className="text-xs text-[var(--stone)]/60 mb-12">Last updated: March 28, 2026</p>

          <div className="space-y-8 text-[var(--stone)] leading-relaxed text-sm">
            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">1. Introduction</h2>
              <p>Trimwork (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our clients and their customers. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our AI-powered accounting services.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Firm information:</strong> Your firm name, contact details, staff information, and workflow preferences provided during onboarding.</li>
                <li><strong>Client documents:</strong> Tax documents, financial records, and other files you provide for processing by your AI junior accountant. This may include W-2s, 1099s, K-1s, bank statements, receipts, and other tax-related documents.</li>
                <li><strong>Usage data:</strong> Information about how you interact with our services, including task completion data and workflow metrics, used to improve your AI junior accountant&apos;s performance.</li>
                <li><strong>Communication data:</strong> Emails, messages, and other communications sent through or drafted by our services on your behalf.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use collected information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Build and operate your custom AI junior accountant</li>
                <li>Process documents and prepare work products as directed by your firm</li>
                <li>Improve the accuracy and performance of your specific deployment</li>
                <li>Communicate with you about your service</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">4. AI Model Data Processing</h2>
              <p>We use third-party AI models including Claude by Anthropic, OpenAI, and Google Gemini to process your data. We access these models exclusively through their enterprise API tiers. Under these API agreements:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Your data is <strong>not used to train</strong> any AI models</li>
                <li>Your data is <strong>not retained</strong> by the AI providers after processing</li>
                <li>Your data is processed in transit and discarded after the response is generated</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">5. Data Sharing</h2>
              <p className="mb-3">We do not sell your data. We may share information with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>AI model providers:</strong> As described in Section 4, solely for processing tasks on your behalf.</li>
                <li><strong>Service providers:</strong> Third-party tools and platforms that are part of your integrated workflow (e.g., your tax software, email provider, file storage), only as directed by your firm.</li>
                <li><strong>Legal requirements:</strong> When required by law, regulation, or legal process.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">6. Data Security</h2>
              <p>We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, and regular security assessments. However, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">7. Data Retention</h2>
              <p>We retain your data only for as long as necessary to provide our services. Upon termination of your service agreement, we will delete your data within 30 days unless otherwise required by law or requested by you in writing.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">8. Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, please contact us at malcolm@trimwork.org.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">9. Children&apos;s Privacy</h2>
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of material changes via email or through our services. The updated policy will be effective upon posting.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">11. Contact</h2>
              <p>If you have questions about this Privacy Policy, please contact us at malcolm@trimwork.org.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
