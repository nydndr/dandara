import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Writings',
  description: "Dandara's writings on design, product, and practice.",
}

export default function WritingsPage() {
  const posts = getAllPosts()

  const byYear = posts.reduce((acc, post) => {
    const year = post.date.split('/')[0]
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {})

  const years = Object.keys(byYear).sort((a, b) => b - a)

  return (
    <div className="mx-auto my-24 max-w-4xl space-y-12 font-sans">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter text-stone-700 md:text-6xl md:leading-16">
          <Link
            href="/"
            className="text-stone-700/20 transition-all hover:text-stone-700"
          >
            Dandara \
          </Link>{' '}
          Writings
        </h1>
      </header>

      <section className="space-y-16">
        {years.map(year => (
          <div key={year} className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-700/50">{year}</h2>
            <div className="space-y-1">
              {byYear[year].map(post => (
                <Link
                  key={post.slug}
                  href={`/writings/${post.slug}`}
                  className="group block border-b border-gray-700/10 py-3 transition-all hover:border-gray-700/30"
                >
                  <p className="text-lg font-medium tracking-tight"><span className="group-hover:bg-(--dandara)">{post.title}</span></p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
