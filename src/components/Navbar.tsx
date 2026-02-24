"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white tracking-tight">
              Quoterly<span className="text-[#f59e0b]">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</Link>
            <Link href="/#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</Link>
            <Link href="/blog" className="text-sm text-slate-300 hover:text-white transition-colors">Blog</Link>
            <Link href="/#faq" className="text-sm text-slate-300 hover:text-white transition-colors">FAQ</Link>
            <a
              href="/#pricing"
              className="bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f172a] border-t border-white/10 px-4 py-4 space-y-3">
          <Link href="/#features" className="block text-sm text-slate-300 hover:text-white py-1" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/#pricing" className="block text-sm text-slate-300 hover:text-white py-1" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/blog" className="block text-sm text-slate-300 hover:text-white py-1" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/#faq" className="block text-sm text-slate-300 hover:text-white py-1" onClick={() => setOpen(false)}>FAQ</Link>
        </div>
      )}
    </nav>
  );
}
