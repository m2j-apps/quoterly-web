import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold text-white tracking-tight">
              Quoterly<span className="text-[#f59e0b]">.</span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">
              Stop overpaying for home projects. Quoterly gives homeowners the same pricing intelligence that contractors use.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-sm text-slate-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/#faq" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</Link></li>
              <li><a href="mailto:support@quoterly.app" className="text-sm text-slate-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Quoterly. All rights reserved.</p>
          <p className="text-sm text-slate-500">
            <a href="mailto:support@quoterly.app" className="hover:text-slate-300 transition-colors">support@quoterly.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
