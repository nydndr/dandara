import { ImageResponse } from 'next/og'
import { getPost, getAllPosts } from '@/lib/blog'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadManrope(weight) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Manrope:wght@${weight}`,
    { headers: { 'User-Agent': 'Mozilla/5.0' } }
  ).then(r => r.text())
  const url = css.match(/src: url\(([^)]+)\)/)?.[1]
  return fetch(url).then(r => r.arrayBuffer())
}

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export default async function OGImage({ params }) {
  const { slug } = await params
  const [post, fontBold, fontMedium] = await Promise.all([
    getPost(slug),
    loadManrope(800),
    loadManrope(500),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          background: '#fffbef',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'Manrope',
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex' }}>
          <span style={{ color: '#353535', opacity: 0.25, fontSize: 26, fontWeight: 700, letterSpacing: '-0.5px' }}>
            Dandara
          </span>
        </div>

        {/* Title + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#353535',
              lineHeight: 1.05,
              letterSpacing: '-2px',
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              fontSize: 30,
              color: 'rgba(53,53,53,0.55)',
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            {post.tagline}
          </div>
        </div>

        {/* Footer row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              background: '#ffcc00',
              width: 14,
              height: 14,
              borderRadius: '50%',
            }}
          />
          <span style={{ color: 'rgba(53,53,53,0.4)', fontSize: 22, letterSpacing: '0.5px' }}>
            {post.formattedDate}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Manrope', data: fontBold, weight: 800 },
        { name: 'Manrope', data: fontMedium, weight: 500 },
      ],
    }
  )
}
