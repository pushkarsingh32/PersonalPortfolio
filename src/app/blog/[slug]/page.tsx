import { notFound } from "next/navigation";
import Link from "next/link";
import { allPosts } from "../../../../.content-collections/generated";
import { MDXContent } from "@content-collections/mdx/react";
import { Calendar, ArrowLeft, Tag } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post || !post.published) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Pushkar Kathayat`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-50 via-white to-zinc-50 dark:from-violet-950/20 dark:via-zinc-900 dark:to-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <article>
            <header className="space-y-6">
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-900/30 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-600 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-400 bg-clip-text text-transparent leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                    <Calendar className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <span className="text-zinc-300 dark:text-zinc-700">•</span>

                <div className="font-medium text-zinc-700 dark:text-zinc-300">
                  {post.author}
                </div>
              </div>
            </header>
          </article>
        </div>
      </div>

      {/* Post Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 shadow-xl shadow-zinc-100/50 dark:shadow-zinc-900/50">
          <div className="prose prose-zinc dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h1:mb-8 prose-h1:pb-4 prose-h1:border-b prose-h1:border-zinc-200 dark:prose-h1:border-zinc-800
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-violet-900 dark:prose-h2:text-violet-100
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-zinc-800 dark:prose-h3:text-zinc-200
            prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-zinc-700 dark:prose-h4:text-zinc-300
            prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed
            prose-a:text-violet-600 dark:prose-a:text-violet-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100 prose-strong:font-semibold
            prose-code:text-violet-600 dark:prose-code:text-violet-400 prose-code:bg-violet-50 dark:prose-code:bg-violet-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-zinc-50 dark:prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-zinc-800 prose-pre:rounded-xl
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-zinc-600 dark:prose-li:text-zinc-400 prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-violet-500 prose-blockquote:bg-violet-50 dark:prose-blockquote:bg-violet-900/20 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
            prose-hr:border-zinc-200 dark:prose-hr:border-zinc-800 prose-hr:my-12
            prose-table:border prose-table:border-zinc-200 dark:prose-table:border-zinc-800
            prose-thead:bg-zinc-50 dark:prose-thead:bg-zinc-900
            prose-th:border prose-th:border-zinc-200 dark:prose-th:border-zinc-800 prose-th:px-4 prose-th:py-2
            prose-td:border prose-td:border-zinc-200 dark:prose-td:border-zinc-800 prose-td:px-4 prose-td:py-2">
            <MDXContent code={post.mdx} />
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to all posts
          </Link>
        </footer>
      </div>
    </div>
  );
}
