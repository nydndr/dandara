import Link from 'next/link'
import { getPost, getRelatedPosts, getAllPosts } from '@/lib/blog'
import {
  MobileTableOfContents,
  DesktopTableOfContents,
} from './TableOfContents'

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  return {
    title: post.title,
    description: post.tagline,
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  const related = getRelatedPosts(post.slug, post.tags)

  return (
    <div className="mx-auto my-24 max-w-6xl font-sans">
      <Link
        href="/writings"
        className="inline-flex items-center gap-1 text-sm text-gray-700/60 transition-colors hover:text-gray-700"
      >
        ← Back to writings
      </Link>

      {/* Mobile ToC — collapsible drawer, visible only below lg breakpoint */}
      {post.isLong && (
        <div className="mt-8 lg:hidden">
          <MobileTableOfContents headings={post.headings} />
        </div>
      )}

      <div
        className={
          post.isLong
            ? 'mt-8 lg:mt-12 lg:flex lg:items-start lg:gap-16'
            : 'mt-8 lg:mt-12'
        }
      >
        {/* Main article column */}
        <div className="min-w-0 flex-1">
          <header className="mb-12 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-stone-700 md:text-6xl md:leading-16">
              {post.title}
            </h1>
            <p className="text-xl font-medium text-gray-700/70 md:text-2xl">
              {post.tagline}
            </p>
            <p className="font-mono text-sm text-gray-700/40">
              Published on {post.formattedDate} by Dandara
            </p>
          </header>

          <article
            className="prose prose-a:underline prose-a:underline-offset-2 prose-em:text-gray-700/40 prose-h1:tracking-tight prose-headings:font-sans blog-prose font-work"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Read next footer — replaces site footer on post pages */}
          {related.length > 0 && (
            <footer className="mt-24 border-t border-gray-700/10 pt-12">
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-700/40">
                Read next
              </h2>
              <div className="space-y-1">
                {related.map(p => (
                  <Link
                    key={p.slug}
                    href={`/writings/${p.slug}`}
                    className="group flex items-baseline justify-between border-b border-gray-700/10 py-3 transition-all hover:border-gray-700/30"
                  >
                    <div className="space-y-0.5">
                      <p className="font-medium tracking-tight">{p.title}</p>
                      <p className="text-sm text-gray-700/60">{p.tagline}</p>
                    </div>
                    <span className="ml-4 shrink-0 font-mono text-sm text-gray-700/40">
                      {p.formattedDate}
                    </span>
                  </Link>
                ))}
              </div>
            </footer>
          )}
        </div>

        {/* Desktop ToC sidebar — sticky, visible only at lg and above */}
        {post.isLong && (
          <aside className="hidden w-48 shrink-0 lg:block sticky top-8 self-start">
            <DesktopTableOfContents headings={post.headings} />
          </aside>
        )}
      </div>
    </div>
  )
}
