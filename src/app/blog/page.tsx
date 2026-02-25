import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Quoterly",
  description:
    "Homeowner guides on contractor quotes, renovation costs, negotiation tactics, and how to avoid overpaying on home projects.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#0f172a] mb-3">
            Homeowner Guides
          </h1>
          <p className="text-lg text-slate-500">
            Everything you need to know about contractor quotes, renovation
            costs, and getting a fair deal.
          </p>
        </div>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block bg-white border border-slate-200 rounded-2xl p-8 mb-8 hover:border-[#f59e0b]/50 hover:shadow-lg transition-all duration-200"
        >
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
            <span className="bg-[#f59e0b] text-[#0f172a] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
              Latest
            </span>
            <span>
              {new Date(featured.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{featured.readTime}</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#1a365d] mb-3 leading-snug">
            {featured.title}
          </h2>
          <p className="text-slate-500 leading-relaxed max-w-2xl">
            {featured.excerpt}
          </p>
          <span className="inline-block mt-4 text-sm font-semibold text-[#f59e0b] group-hover:text-[#d97706]">
            Read more →
          </span>
        </Link>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#f59e0b]/50 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-base font-semibold text-[#0f172a] group-hover:text-[#1a365d] mb-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-4 text-xs font-semibold text-[#f59e0b] group-hover:text-[#d97706]">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
