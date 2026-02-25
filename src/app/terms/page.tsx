import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Quoterly",
  description: "Quoterly terms of use and end user license agreement.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-4xl font-bold text-[#0f172a] mb-2">Terms of Use</h1>
        <p className="text-sm text-slate-400 mb-12">Effective Date: February 11, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 text-[15px] leading-relaxed">
          <section>
            <p>
              Welcome to Quoterly. By downloading, installing, or using the Quoterly application (&ldquo;App&rdquo;), you agree
              to be bound by these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">License</h2>
            <p>
              Quoterly grants you a limited, non-exclusive, non-transferable, revocable license to use the App for personal,
              non-commercial purposes in accordance with these Terms and any applicable app store terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Subscriptions</h2>
            <p>
              Quoterly offers auto-renewable subscription plans. Payment is charged through your Apple App Store or Google Play
              account. Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing
              period. You can manage or cancel your subscription through your device&apos;s app store settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Pricing Data Disclaimer</h2>
            <p>
              The pricing data, market comparisons, and validation results provided by Quoterly are for informational purposes
              only. While we strive for accuracy using real market data, pricing can vary based on project specifics, contractor
              expertise, material quality, local conditions, and other factors. Quoterly does not guarantee the accuracy of any
              specific price estimate and should not be used as the sole basis for financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">User Content</h2>
            <p>
              You retain ownership of all content you submit to the App, including quotes, project data, and photos. By using
              the App, you grant us a limited license to process this content solely for the purpose of providing the Service
              to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Prohibited Use</h2>
            <p>You may not:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Use the App to harass, defame, or harm others</li>
              <li>Resell, sublicense, or redistribute the App or its data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Quoterly and M2J Apps shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use of the App, including but not limited to
              financial decisions made based on pricing data provided by the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of material changes through the
              App. Your continued use of the App after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">App Store Terms</h2>
            <p>
              Your use of the App is also subject to the terms and conditions of the platform from which you downloaded it.
              For iOS users, Apple&apos;s standard{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a365d] underline hover:text-[#f59e0b] transition-colors"
              >
                End User License Agreement (EULA)
              </a>{" "}
              applies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Contact Us</h2>
            <p>
              If you have questions about these Terms, contact us at:{" "}
              <a href="mailto:support@quoterly.app" className="text-[#1a365d] underline hover:text-[#f59e0b] transition-colors">
                support@quoterly.app
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
