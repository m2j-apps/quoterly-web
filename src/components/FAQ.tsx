"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <div
          key={i}
          className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="text-base font-semibold text-[#0f172a] pr-4">{faq.q}</span>
            <svg
              className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`grid transition-all duration-200 ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
