import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Quoterly",
  description:
    "Get help with Quoterly. Contact support, troubleshoot common issues, and learn how to get the most accurate pricing data.",
};

const troubleshooting = [
  {
    q: "My scanned quote has incorrect or missing line items",
    a: "Quote scanning works best with clear, well-formatted documents. Handwritten quotes, low-resolution photos, and unusual layouts can be harder to parse. After scanning, always review the extracted line items and manually correct anything that looks off. You can edit, add, or remove line items at any time.",
  },
  {
    q: "Why do I need to set a category and subcategory for each line item?",
    a: "Categories and subcategories are how Quoterly matches your line items to the correct market pricing data. For example, \"tile installation\" priced as bathroom tile vs. kitchen backsplash vs. floor tile can have very different fair-price ranges. The more specific your category selection, the more accurate your price validation will be. Always double-check that each item is categorized correctly.",
  },
  {
    q: "The pricing data doesn\u2019t seem right for my area",
    a: "Quoterly uses a layered pricing system that pulls data at the community, ZIP code, metro area, state, and national level. If your specific area doesn\u2019t have enough local data, the app falls back to broader regional averages. Pricing can also vary based on the finish level you selected (Budget, Mid-Range, High-End, or Luxury) -make sure your project\u2019s finish level matches what your contractor is quoting.",
  },
  {
    q: "Some imported line items have the wrong category",
    a: "When you scan or import a quote, Quoterly does its best to automatically categorize each line item. However, not all formats are easy to parse and some items may be miscategorized or left uncategorized. It\u2019s always best to review your imported items and correct any categories before relying on the price validation. This takes a minute but makes a big difference in accuracy.",
  },
  {
    q: "My quote didn\u2019t scan at all",
    a: "Some quote formats are difficult for any scanner to read -especially handwritten estimates, quotes embedded in emails, or PDFs with complex table layouts. Try taking a clearer photo with good lighting, or if you have a PDF version, upload that instead. You can also manually enter line items if scanning isn\u2019t working for a particular document.",
  },
  {
    q: "How do I get the most accurate price validation?",
    a: "Three things make the biggest difference: (1) Set the correct project location -pricing varies significantly by region. (2) Choose the right finish level -budget-grade materials have very different pricing than luxury. (3) Make sure every line item has the correct category and subcategory. Taking a minute to verify these settings will give you much more reliable results.",
  },
  {
    q: "Can I change my subscription plan?",
    a: "Yes. Subscriptions are managed through the App Store (iOS) or Google Play (Android). Go to your device\u2019s subscription settings to upgrade, downgrade, or cancel. Changes take effect at the start of your next billing period.",
  },
  {
    q: "How do I delete my account and data?",
    a: "You can delete individual projects within the app at any time. To delete your entire account and all associated data, go to Settings within the app or contact us at support@quoterly.app. Account deletion is permanent and completed within 30 days.",
  },
];

const helpfulLinks = [
  {
    title: "How to Read a Contractor Quote",
    href: "/blog/how-to-read-a-contractor-quote",
    desc: "Understand what every section of a quote means",
  },
  {
    title: "Red Flags in Contractor Quotes",
    href: "/blog/red-flags-in-contractor-quotes",
    desc: "Know when something looks off",
  },
  {
    title: "How to Compare Multiple Quotes",
    href: "/blog/how-to-compare-contractor-quotes",
    desc: "Get the most out of side-by-side comparison",
  },
  {
    title: "Understanding Change Orders",
    href: "/blog/understanding-change-orders",
    desc: "When to approve and when to push back",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-[#0f172a] mb-3">Support</h1>
          <p className="text-lg text-slate-500">
            Have a question or running into an issue? We&apos;re here to help.
            Check the troubleshooting guide below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Troubleshooting */}
            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-2">
                Troubleshooting
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Quick answers to the most common questions.
              </p>
              <div className="space-y-4">
                {troubleshooting.map((item, i) => (
                  <div
                    key={i}
                    className="border border-slate-200 rounded-xl p-6"
                  >
                    <h3 className="text-base font-semibold text-[#0f172a] mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing data accuracy */}
            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-2">
                About our pricing data
              </h2>
              <div className="bg-slate-50 rounded-2xl p-8 space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Quoterly validates quotes against a database of{" "}
                  <strong className="text-slate-800">
                    600+ line item categories across 29 renovation types
                  </strong>
                  , with pricing adjusted for your region, project size, and
                  finish level.
                </p>
                <p>
                  Our pricing data is sourced from regional market analysis and
                  uses a layered lookup system: community-level data first, then
                  ZIP code, metro area, state, and national averages as
                  fallbacks. This means pricing is most accurate in areas with
                  more data available.
                </p>
                <p>
                  Pricing is organized across{" "}
                  <strong className="text-slate-800">
                    four quality tiers
                  </strong>{" "}
                  - Budget/Builder Grade, Mid-Range, High-End, and Luxury
                  - because the same line item can vary dramatically based
                  on material quality. A budget laminate countertop and a luxury
                  marble countertop are not the same price, and your validation
                  should reflect what your contractor is actually quoting.
                </p>
                <p>
                  <strong className="text-slate-800">
                    No pricing database is perfect.
                  </strong>{" "}
                  Actual costs depend on your specific project conditions,
                  contractor expertise, material availability, and local market
                  dynamics. Use Quoterly&apos;s validation as a strong starting
                  point for conversations with your contractor - not as an
                  absolute guarantee of what a line item should cost.
                </p>
              </div>
            </section>

            {/* Helpful blog links */}
            <section>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                Helpful guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {helpfulLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group border border-slate-200 rounded-xl p-5 hover:border-[#f59e0b]/50 hover:shadow-md transition-all duration-200"
                  >
                    <h3 className="text-sm font-semibold text-[#0f172a] group-hover:text-[#1a365d] mb-1">
                      {link.title}
                    </h3>
                    <p className="text-xs text-slate-400">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar -contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact card */}
              <div className="bg-[#0f172a] rounded-2xl p-8">
                <h2 className="text-lg font-bold text-white mb-2">
                  Contact us
                </h2>
                <p className="text-sm text-slate-400 mb-6">
                  Can&apos;t find what you need? Send us a message and
                  we&apos;ll get back to you.
                </p>
                <form
                  action="https://formsubmit.co/support@quoterly.app"
                  method="POST"
                  className="space-y-4"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="Quoterly Support Request"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://quoterly.app/support"
                  />
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-slate-400 mb-1.5"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/50 focus:border-[#f59e0b]/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-slate-400 mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      name="subject_type"
                      id="subject"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/50 focus:border-[#f59e0b]/50"
                    >
                      <option value="general" className="text-slate-900">General question</option>
                      <option value="bug" className="text-slate-900">Bug report</option>
                      <option value="scanning" className="text-slate-900">Quote scanning issue</option>
                      <option value="pricing" className="text-slate-900">Pricing data question</option>
                      <option value="billing" className="text-slate-900">Billing &amp; subscription</option>
                      <option value="feature" className="text-slate-900">Feature request</option>
                      <option value="other" className="text-slate-900">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-slate-400 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      placeholder="Describe your issue or question..."
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/50 focus:border-[#f59e0b]/50 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] font-semibold py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Send message
                  </button>
                </form>
              </div>

              {/* Response time */}
              <div className="border border-slate-200 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-[#0f172a] mb-3">
                  Response times
                </h3>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-700">General questions</strong>{" "}
                      - within 24 hours
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-700">Bug reports</strong>{" "}
                      - within 24 hours
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-700">Billing issues</strong>{" "}
                      - within 12 hours
                    </span>
                  </li>
                </ul>
                <p className="text-xs text-slate-400 mt-4">
                  Annual subscribers receive priority support.
                </p>
              </div>

              {/* Direct email */}
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-1">
                  Or email us directly at
                </p>
                <a
                  href="mailto:support@quoterly.app"
                  className="text-sm font-medium text-[#1a365d] hover:text-[#f59e0b] transition-colors"
                >
                  support@quoterly.app
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
