import Link from 'next/link'
import { getPost, getAllPosts } from '@/lib/blog'
import {
  MobileTableOfContents,
  DesktopTableOfContents,
} from './TableOfContents'
import ArticleContent from './ArticleContent'
import ReadingProgressCircle from './ReadingProgressCircle'

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

const SITE_URL = 'https://adandara.com'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  const url = `${SITE_URL}/writings/${slug}`

  return {
    title: post.title,
    description: post.tagline,
    authors: [{ name: 'Dandara', url: SITE_URL }],
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.tagline,
      publishedTime: post.isoDate,
      authors: ['Dandara'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.tagline,
    },
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = await getPost(slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.tagline,
    datePublished: post.isoDate,
    url: `${SITE_URL}/writings/${slug}`,
    author: { '@type': 'Person', name: 'Dandara', url: SITE_URL },
    keywords: post.tags.join(', '),
  }

  return (
    <div className="mx-auto my-24 max-w-6xl font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Mobile ToC — collapsible drawer, visible only below lg breakpoint */}
      {post.isLong && (
        <div className="mt-8 lg:hidden">
          <MobileTableOfContents headings={post.headings} />
        </div>
      )}

      <div className="mt-8 lg:mt-12 lg:flex lg:items-start lg:gap-16">
        {/* Main article column */}
        <div id="article-content" className="min-w-0 flex-1">
          <header className="mb-12 space-y-4">
            <p className="font-mono text-sm text-gray-700/40">
              <time dateTime={post.isoDate}>{post.formattedDate}</time>
            </p>
            <h1 className="text-3xl font-bold tracking-tighter text-stone-700 md:text-6xl md:leading-16">
              {post.title}
            </h1>
            <p className="text-xl font-medium text-gray-700/70 md:text-2xl">
              {post.tagline}
            </p>
          </header>

          <ArticleContent contentHtml={post.contentHtml} />

          <footer className="mt-24 border-t border-gray-700/10 pt-12">
            <div className="flex gap-4 text-gray-700/70">
              <Link href="mailto:nicolydndr@gmail.com" className="underline underline-offset-4 hover:bg-(--dandara)">Email</Link>
              <Link href="https://www.linkedin.com/in/nicolydandara/" className="underline underline-offset-4 hover:bg-(--dandara)">LinkedIn</Link>
              <Link href="https://x.com/amarelodandara" className="underline underline-offset-4 hover:bg-(--dandara)">Twitter</Link>
            </div>
          </footer>
        </div>

        {/* Desktop sidebar — sticky, visible only at lg and above */}
        <aside className="hidden w-64 shrink-0 lg:block sticky top-8 self-start">
          <ReadingProgressCircle />
          {post.isLong && (
            <>
              <div className="mb-6" />
              <DesktopTableOfContents headings={post.headings} />
            </>
          )}
        </aside>
      </div>
    </div>
  )
}
