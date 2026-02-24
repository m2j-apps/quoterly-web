import { posts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Quoterly Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      siteName: "Quoterly",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const postIndex = posts.findIndex((p) => p.slug === slug);
  const relatedPosts = posts.filter((_, i) => i !== postIndex).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <header className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[#f59e0b] hover:text-[#d97706] font-medium mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] leading-tight">
            {post.title}
          </h1>
        </header>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#0f172a] rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Stop overpaying for home projects
          </h3>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Quoterly validates contractor quotes against real market data so you
            always know what&apos;s fair.
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <h3 className="text-xl font-bold text-[#0f172a] mb-6">
            More from the blog
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#f59e0b]/50 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <span>
                    {new Date(rp.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>·</span>
                  <span>{rp.readTime}</span>
                </div>
                <h4 className="text-base font-semibold text-[#0f172a] group-hover:text-[#1a365d] mb-2 leading-snug">
                  {rp.title}
                </h4>
                <span className="inline-block mt-2 text-xs font-semibold text-[#f59e0b] group-hover:text-[#d97706]">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
