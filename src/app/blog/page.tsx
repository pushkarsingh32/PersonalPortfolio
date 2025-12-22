import Link from "next/link";
import { allPosts } from "../../../.content-collections/generated";
import { Calendar, Tag } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Contact } from "@/components/contact";

export const metadata = {
  title: "Blog | Pushkar Kathayat",
  description:
    "Technical articles about software engineering, system design, and interview preparation.",
};

export default function BlogPage() {
  const sortedPosts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800 mb-6">
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-600 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-400 bg-clip-text text-transparent">
            Technical Insights
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Articles about software engineering, system design, and career growth
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={post.url}
              className="group block rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-xl hover:shadow-violet-100/50 dark:hover:shadow-violet-900/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                <div className="p-1.5 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                  <Calendar className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                </div>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                {post.description}
              </p>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 mb-4">
              <Tag className="h-8 w-8 text-zinc-400" />
            </div>
            <p className="text-zinc-500 dark:text-zinc-400">No blog posts yet.</p>
          </div>
        )}
      </div>
      <Contact />
    </main>
  );
}
