import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Quoterly",
  description: "Quoterly privacy policy. Learn how we protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-4xl font-bold text-[#0f172a] mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-12">Effective Date: February 11, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 text-[15px] leading-relaxed">
          <section>
            <p>
              Quoterly (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is operated by M2J Apps. This Privacy Policy explains how we collect,
              use, and protect your information when you use the Quoterly mobile application and website (collectively, the &ldquo;Service&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Information We Collect</h2>
            <h3 className="text-base font-semibold text-[#0f172a] mb-2 mt-4">Account Information</h3>
            <p>
              When you create an account, we collect your email address and authentication credentials. We use Firebase Authentication
              to securely manage your account.
            </p>
            <h3 className="text-base font-semibold text-[#0f172a] mb-2 mt-4">Project Data</h3>
            <p>
              When you use Quoterly, you may enter contractor quotes, project details, line items, payment records, and other
              renovation-related data. This information is stored securely in our cloud database to sync across your devices.
            </p>
            <h3 className="text-base font-semibold text-[#0f172a] mb-2 mt-4">Photos and Documents</h3>
            <p>
              If you use our quote scanning feature, you may grant camera or photo library access. Photos are processed to extract
              line item data and are not stored permanently on our servers after processing. Camera and photo access is entirely optional.
            </p>
            <h3 className="text-base font-semibold text-[#0f172a] mb-2 mt-4">Usage Data</h3>
            <p>
              We may collect anonymous usage analytics to improve the Service, such as feature usage patterns, crash reports, and
              general app performance data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, maintain, and improve the Service</li>
              <li>To validate contractor quotes against market pricing data</li>
              <li>To sync your project data across devices</li>
              <li>To process subscription payments (handled by Apple App Store and Google Play)</li>
              <li>To respond to support requests</li>
              <li>To send important service-related communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Data Protection</h2>
            <p>
              Your project data is encrypted and stored securely using industry-standard encryption. We use Firebase/Google Cloud
              infrastructure with enterprise-grade security measures.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Payment Information</h2>
            <p>
              We do not collect, store, or process any credit card or payment information. All subscription payments are handled
              entirely by the Apple App Store or Google Play Store. We use RevenueCat to manage subscription status.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Data Sharing</h2>
            <p>
              We do not sell, trade, or share your personal information with contractors, advertisers, or any third parties.
              Your renovation details, quotes, and project data stay yours. We may share anonymized, aggregated data for
              market pricing analysis that cannot be linked back to individual users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Third-Party Services</h2>
            <p>The Service uses the following third-party services:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Firebase (Google)</strong> &mdash; Authentication and data storage</li>
              <li><strong>RevenueCat</strong> &mdash; Subscription management</li>
              <li><strong>Google Cloud</strong> &mdash; Document processing for quote scanning</li>
              <li><strong>Apple App Store / Google Play</strong> &mdash; Payment processing</li>
            </ul>
            <p className="mt-3">
              Each of these services has their own privacy policies governing their use of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Data Retention</h2>
            <p>
              Your project data is retained as long as your account is active. You may delete individual projects at any time
              within the app. If you delete your account, all associated data will be permanently removed from our systems
              within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Children&apos;s Privacy</h2>
            <p>
              The Service is not intended for use by individuals under the age of 18. We do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the
              new Privacy Policy within the app and updating the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0f172a] mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your data, contact us at:{" "}
              <a href="mailto:privacy@quoterly.app" className="text-[#1a365d] underline hover:text-[#f59e0b] transition-colors">
                privacy@quoterly.app
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
