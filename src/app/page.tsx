import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "I saved thousands on my home renovation. I hate negotiating, but the Negotiation Manager showed me exactly what to say. It was like having a professional negotiator in my pocket.",
    name: "Jennifer V.",
    initials: "JV",
  },
  {
    quote:
      "After using Quoterly to compare quotes, negotiate, and track payments through completion, I saved thousands and countless hours. Every homeowner should use this app for renovations.",
    name: "Mike J.",
    initials: "MJ",
  },
  {
    quote:
      "As a handyman, I use Quoterly to keep my prices competitive and show customers they\u2019re getting treated fairly. My proposals always land in the \u2018Great Value\u2019 range -customers are happy and I close more deals!",
    name: "Mohamed N.",
    initials: "MN",
  },
  {
    quote:
      "Got three quotes for a deck build. Quoterly\u2019s side-by-side comparison showed one contractor was charging 40% more for the same materials. Would have never caught that on my own.",
    name: "Robert K.",
    initials: "RK",
  },
  {
    quote:
      "My contractor tried to slip in a $2,800 change order for \u2018unforeseen conditions.\u2019 The change order analyzer helped me push back with data. Ended up paying $900 -the actual fair price.",
    name: "Sarah C.",
    initials: "SC",
  },
  {
    quote:
      "The payment tracking alone is worth it. I always know exactly what I\u2019ve paid, what\u2019s left, and whether the payment schedule matches the work completed. No more spreadsheet chaos.",
    name: "David L.",
    initials: "DL",
  },
  {
    quote:
      "Scanned my bathroom remodel quote and instantly saw the tile labor was priced 35% above market rate. I sent my contractor that screenshot -he adjusted the price same day.",
    name: "Angela M.",
    initials: "AM",
  },
  {
    quote:
      "We\u2019re flipping our third house this year. Quoterly paid for itself on day one of our first project. Now I won\u2019t start a renovation without it.",
    name: "Tyler W.",
    initials: "TW",
  },
];

const faqs = [
  {
    q: "What are the pricing options?",
    a: "You can choose a one-time scan for $2.99, a monthly plan for $9.99, or an annual plan for $79.99. Most users find a pricing issue within their first scan, so even one saved line item can cover the cost.",
  },
  {
    q: "How does quote scanning work?",
    a: "Take a photo of your contractor\u2019s quote or upload a PDF. We extract every line item automatically -labor, materials, permits, everything. Each item is then validated against regional market data so you know exactly what\u2019s fair.",
  },
  {
    q: "What is price validation?",
    a: "We compare every line item against real pricing data from your area. You\u2019ll see if each item is priced low, fair, or high -plus the typical price range so you can negotiate with confidence.",
  },
  {
    q: "Can I compare multiple quotes?",
    a: "Yes! Add quotes from different contractors and see them side-by-side. We\u2019ll highlight which contractor is cheapest for each line item and flag any suspicious price differences.",
  },
  {
    q: "What\u2019s the Negotiation Manager?",
    a: "When we detect overpriced items, we generate talking points and scripts you can use to negotiate. No more awkward conversations -just data-backed requests for fair pricing.",
  },
  {
    q: "How does change order tracking work?",
    a: "When your contractor requests additional money mid-project, log it in Quoterly. We\u2019ll analyze whether the increase is reasonable, flag suspicious requests, and help you respond appropriately.",
  },
  {
    q: "Can I track payments?",
    a: "Absolutely. Log every payment, see your remaining balance, and make sure your payment schedule aligns with work completed. Never overpay before the work is done.",
  },
  {
    q: "Is my data private?",
    a: "Your project data is encrypted and stored securely. We never share your information with contractors, advertisers, or third parties. Your renovation details stay yours.",
  },
  {
    q: "Do contractors know I\u2019m using Quoterly?",
    a: "Only if you tell them. Many users share their price validation screenshots during negotiations -it\u2019s powerful when a contractor sees you have market data backing your ask.",
  },
  {
    q: "Why do I need this?",
    a: "Contractors have apps and software specifically designed to help them maximize profit on every job. Quoterly levels the playing field -giving you the same pricing intelligence so you can maximize your savings.",
  },
];

const quoteItems = [
  { item: "Quartz Countertops (40 sq ft)", quoted: "$4,800", fair: "$3,200", status: "high" as const },
  { item: "Cabinet Installation Labor", quoted: "$3,200", fair: "$2,100", status: "high" as const },
  { item: "Tile Backsplash (30 sq ft)", quoted: "$1,100", fair: "$1,200", status: "great" as const },
  { item: "Plumbing Rough-in", quoted: "$2,800", fair: "$2,600", status: "fair" as const },
  { item: "Demolition & Disposal", quoted: "$1,500", fair: "$800", status: "high" as const },
];

const statusStyles = {
  high: { dot: "bg-red-500", badge: "bg-red-50 text-red-600", label: "High" },
  fair: { dot: "bg-amber-500", badge: "bg-amber-50 text-amber-600", label: "Fair" },
  great: { dot: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-600", label: "Great" },
};

const categories = [
  "Kitchen Remodel", "Bathroom Renovation", "Roofing", "Flooring",
  "HVAC", "Painting", "Plumbing", "Electrical", "Decking",
  "Fencing", "Windows & Doors", "Siding & Gutters", "Concrete & Driveway",
  "Landscaping", "Pool & Spa", "General Repairs",
];

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.quoterly.app&utm_source=na_Med";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0f172a] pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/50 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(245,158,11,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left -copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                <span className="text-sm text-slate-400">Now live on Google Play - iOS coming soon</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Know what your
                <br />
                renovation
                <br />
                <span className="text-[#f59e0b]">should cost.</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
                Scan contractor quotes. Validate every line item against real
                market data. Negotiate with confidence and save thousands.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-6 py-3 hover:bg-white/[0.15] transition-colors cursor-pointer">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 leading-tight">Download on the</p>
                    <p className="text-sm font-semibold text-white leading-tight">App Store</p>
                  </div>
                </div>
                <Link
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-6 py-3 hover:bg-white/[0.15] transition-colors cursor-pointer"
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5v-17c0-1.1,1.35-1.65,2.12-.87l14.06,8.5c0.77,0.48,0.77,1.48,0,1.96L5.12,21.37C4.35,22.15,3,21.6,3,20.5z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 leading-tight">Get it on</p>
                    <p className="text-sm font-semibold text-white leading-tight">Google Play</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right -phone mockup */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-[#f59e0b]/10 rounded-full blur-3xl -z-10" />
                <div className="bg-[#111] rounded-[3rem] p-3 shadow-2xl shadow-black/50">
                  <div className="rounded-[2.4rem] overflow-hidden w-[280px] h-[600px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/app-screenshot.png"
                      alt="Quoterly app showing a kitchen remodel quote analysis with $3,400 in overcharges detected"
                      width={560}
                      height={1213}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#1a365d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-[#f59e0b]">5-15x</span>
              <span className="text-sm text-slate-300">Average ROI</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-[#f59e0b]">$3,400+</span>
              <span className="text-sm text-slate-300">Avg savings per project</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-[#f59e0b]">60 sec</span>
              <span className="text-sm text-slate-300">To scan your first quote</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wider mb-3">How it works</p>
            <h2 className="text-4xl font-bold text-[#0f172a]">Fair pricing in three steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Scan your quote", desc: "Take a photo or upload a PDF. Every line item -labor, materials, permits -is extracted automatically in seconds." },
              { num: "02", title: "See what\u2019s fair", desc: "Each item is validated against regional market data. See instantly what\u2019s priced fairly, what\u2019s high, and by how much." },
              { num: "03", title: "Negotiate & save", desc: "Use data-backed talking points to push back on overpriced items. Save thousands without the awkward conversations." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-[#0f172a] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#f59e0b] font-bold text-lg">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── See it in action ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wider mb-3">Price Intelligence</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
                See exactly what&apos;s fair - before you sign
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Every line item on your contractor&apos;s quote is validated against real
                pricing data from your area. See instantly if you&apos;re being
                overcharged - and by how much.
              </p>
              <ul className="space-y-4">
                {[
                  { text: "Color-coded ratings: Great Value, Fair, or High" },
                  { text: "Localized data from your ZIP code and metro area" },
                  { text: "Covers 600+ categories across 29 renovation types" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-600 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock quote analysis */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#f59e0b]/10 to-[#1a365d]/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-[#0f172a] px-6 py-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Kitchen Remodel - Quote Analysis</span>
                  <span className="text-xs text-[#f59e0b] font-medium">ABC Renovations</span>
                </div>
                <div className="p-5 space-y-1">
                  {quoteItems.map((item, i) => {
                    const style = statusStyles[item.status];
                    return (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${style.dot}`} />
                          <span className="text-sm text-slate-600 truncate">{item.item}</span>
                        </div>
                        <div className="flex items-center gap-3 ml-4">
                          <span className="text-sm font-semibold text-slate-900">{item.quoted}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${style.badge}`}>
                            {style.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-red-50 px-6 py-4 flex items-center justify-between border-t border-red-100">
                  <span className="text-sm font-medium text-slate-600">Overcharges Detected</span>
                  <span className="text-lg font-bold text-red-600">$3,400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Everything you need to negotiate like a pro</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Contractors have tools to maximize their profits. Now homeowners have tools too.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quote Scanning */}
            <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-200">
              <div className="w-12 h-12 bg-[#0f172a] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#f59e0b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7V4h3M20 7V4h-3M4 17v3h3M20 17v3h-3" />
                  <path d="M8 11h8M8 15h5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Quote Scanning</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Snap a photo or upload a PDF. Every line item - labor, materials, permits - extracted automatically in seconds.
              </p>
            </div>

            {/* Price Intelligence */}
            <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-200">
              <div className="w-12 h-12 bg-[#0f172a] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#f59e0b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20h16" />
                  <path d="M7 20v-8M11 20V8M15 20v-5M19 20v-10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Price Intelligence</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every line item validated against real regional market data. See instantly if each charge is low, fair, or high.
              </p>
            </div>

            {/* Multi-Quote Comparison */}
            <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-200">
              <div className="w-12 h-12 bg-[#0f172a] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#f59e0b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="18" rx="1" />
                  <rect x="14" y="3" width="7" height="18" rx="1" />
                  <path d="M5.5 7h2M5.5 10h2M5.5 13h2M16.5 7h2M16.5 10h2M16.5 13h2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Multi-Quote Comparison</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Add quotes from multiple contractors and compare them side-by-side. Find the best value, not just the lowest price.
              </p>
            </div>

            {/* Red Flag Detection */}
            <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-200">
              <div className="w-12 h-12 bg-[#0f172a] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#f59e0b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Red Flag Detection</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Automatically identifies suspicious pricing patterns, inflated markups, and common contractor overcharging tactics.
              </p>
            </div>

            {/* Change Order Tracking */}
            <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-200">
              <div className="w-12 h-12 bg-[#0f172a] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#f59e0b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="1" />
                  <path d="M9 14l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Change Order Tracking</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                When a contractor asks for more money mid-project, Quoterly analyzes whether the request is legitimate or inflated.
              </p>
            </div>

            {/* Negotiation Manager */}
            <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-200">
              <div className="w-12 h-12 bg-[#0f172a] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#f59e0b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Negotiation Manager</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Get data-backed talking points and scripts to negotiate confidently. No more awkward conversations - just fair pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(245,158,11,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-4xl font-bold text-white">Homeowners love Quoterly</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-8 h-8 bg-[#f59e0b]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#f59e0b] text-xs font-semibold">{t.initials}</span>
                  </div>
                  <span className="text-sm font-medium text-white">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perfect for ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wider mb-3">Versatile</p>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Works with any home project</h2>
          <p className="text-lg text-slate-500 mb-12">Quoterly validates pricing across 600+ renovation categories</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-5 py-2.5 bg-white text-slate-600 text-sm rounded-full font-medium border border-slate-200 hover:border-[#f59e0b]/50 hover:text-[#0f172a] transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-slate-500">One overpriced line item caught = Quoterly pays for itself</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Single Scan */}
            <div className="border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors">
              <h3 className="text-lg font-semibold text-[#0f172a] mb-1">Single Scan</h3>
              <p className="text-slate-500 text-sm mb-6">Perfect for a quick quote check</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-bold text-[#0f172a]">$2.99</span>
                <span className="text-slate-500 mb-1">one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "1 quote scan",
                  "Line-item price validation",
                  "Overpricing flag detection",
                  "Actionable savings insights",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="bg-slate-100 text-slate-500 text-center py-3 rounded-xl text-sm font-medium">Available on Google Play</div>
            </div>

            {/* Monthly */}
            <div className="border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors">
              <h3 className="text-lg font-semibold text-[#0f172a] mb-1">Monthly</h3>
              <p className="text-slate-500 text-sm mb-6">Perfect for a single renovation</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-bold text-[#0f172a]">$9.99</span>
                <span className="text-slate-500 mb-1">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited quote scanning",
                  "Price intelligence & validation",
                  "Multi-quote comparison",
                  "Red flag detection",
                  "Change order tracking",
                  "Negotiation manager",
                  "Payment tracking",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="bg-slate-100 text-slate-500 text-center py-3 rounded-xl text-sm font-medium">Available on Google Play</div>
            </div>

            {/* Annual */}
            <div className="border-2 border-[#f59e0b] rounded-2xl p-8 relative shadow-lg shadow-amber-100/50">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#f59e0b] text-[#0f172a] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Best Value
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-1">Annual</h3>
              <p className="text-slate-500 text-sm mb-6">Best for investors &amp; flippers</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-bold text-[#0f172a]">$79.99</span>
                <span className="text-slate-500 mb-1">/year</span>
              </div>
              <p className="text-emerald-600 text-sm font-medium mb-6">Save 33% vs monthly</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Monthly",
                  "Priority customer support",
                  "Early access to new features",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="bg-slate-100 text-slate-500 text-center py-3 rounded-xl text-sm font-medium">Available on Google Play</div>
            </div>
          </div>
          <p className="text-center text-sm text-slate-400 mt-6">Available on iOS &amp; Android &middot; Cancel anytime</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-4xl font-bold text-[#0f172a]">Frequently asked questions</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to stop overpaying?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Join homeowners who use Quoterly to negotiate fair prices and save
            thousands on every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 rounded-xl px-8 py-4 hover:bg-white/[0.15] transition-colors cursor-pointer">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-slate-400">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </div>
            <Link
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 rounded-xl px-8 py-4 hover:bg-white/[0.15] transition-colors cursor-pointer"
            >
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5v-17c0-1.1,1.35-1.65,2.12-.87l14.06,8.5c0.77,0.48,0.77,1.48,0,1.96L5.12,21.37C4.35,22.15,3,21.6,3,20.5z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-slate-400">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
