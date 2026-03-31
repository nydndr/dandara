import { getAllPosts } from '@/lib/blog'

const SITE_URL = 'https://dandara.vercel.app'

export async function GET() {
  const posts = getAllPosts()

  const items = posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/writings/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/writings/${post.slug}</guid>
      <description><![CDATA[${post.tagline}]]></description>
      <pubDate>${new Date(post.isoDate).toUTCString()}</pubDate>
      <author>nicolydndr@gmail.com (Dandara)</author>
      ${post.tags.map(t => `<category>${t}</category>`).join('\n      ')}
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dandara — Writings</title>
    <link>${SITE_URL}/writings</link>
    <atom:link href="${SITE_URL}/writings/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Dandara's writings on design, product, and practice.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
