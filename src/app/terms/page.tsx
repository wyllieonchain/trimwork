"use client";

import { Nav, Footer } from "../components";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto prose-sm">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--sage)] mb-4">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--forest-dark)] mb-8">Terms of Service</h1>
          <p className="text-xs text-[var(--stone)]/60 mb-12">Last updated: March 28, 2026</p>

          <div className="space-y-8 text-[var(--stone)] leading-relaxed text-sm">
            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">1. Agreement to Terms</h2>
              <p>By accessing or using the services provided by Trimwork (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">2. Description of Services</h2>
              <p>Trimwork provides custom AI-powered junior accountant services for accounting firms. Our services include AI-assisted document collection, data entry, workpaper preparation, client communication, and return preparation support. All AI-generated work product is intended for review and approval by licensed professionals at your firm before any filing or client delivery.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">3. Free Trial</h2>
              <p>We offer a one-month free trial of our services. During the trial period, you will receive full access to your custom AI junior accountant. At the end of the trial period, you may choose to continue with a paid subscription or discontinue use. No credit card is required to begin a trial. We will not charge you without your explicit consent.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">4. User Responsibilities</h2>
              <p>You are responsible for: (a) providing accurate information about your firm and workflows during onboarding; (b) reviewing all AI-generated work product before filing, sending, or acting upon it; (c) maintaining appropriate professional licenses and credentials for tax preparation and accounting services; (d) ensuring compliance with all applicable laws and professional standards governing your practice.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">5. No Professional Advice</h2>
              <p>Trimwork is a technology service provider. We do not provide tax advice, legal advice, or accounting advice. Our AI tools assist with preparation and administrative tasks. All professional judgments, tax positions, and filing decisions remain the sole responsibility of you and your licensed staff.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">6. Data Handling</h2>
              <p>We process your data using third-party AI models (including Claude by Anthropic, OpenAI, and Google Gemini) through their enterprise API tiers. These APIs do not retain your data after processing and do not use your data for model training. For more details, please see our Privacy Policy.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">7. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Trimwork shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising out of or related to your use of our services. Our total liability for any claims arising from these terms or your use of our services shall not exceed the total fees paid by you to Trimwork in the twelve (12) months preceding the claim.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">8. Disclaimer of Warranties</h2>
              <p>Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that our services will be uninterrupted, error-free, or completely accurate.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">9. Termination</h2>
              <p>Either party may terminate the service agreement at any time with 30 days written notice. Upon termination, we will cease processing your data and delete any stored information within 30 days unless otherwise required by law.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">10. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. We will notify you of material changes via email or through our services. Your continued use of our services after such modifications constitutes acceptance of the updated terms.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--forest-dark)] mb-3">11. Contact</h2>
              <p>If you have questions about these Terms of Service, please contact us at malcolm@trimwork.org.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
