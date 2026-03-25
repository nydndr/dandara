import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog')

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function addHeadingIds(htmlContent) {
  return htmlContent.replace(
    /<(h[1-6])>(.*?)<\/h[1-6]>/gs,
    (_, tag, inner) => {
      const id = slugify(inner.replace(/<[^>]+>/g, ''))
      return `<${tag} id="${id}">${inner}</${tag}>`
    }
  )
}

function extractHeadings(markdownContent) {
  return markdownContent
    .split('\n')
    .filter(line => /^#{1,3} /.test(line))
    .map(line => {
      const match = line.match(/^(#{1,3}) (.+)/)
      if (!match) return null
      const text = match[2].trim()
      return { level: match[1].length, text, id: slugify(text) }
    })
    .filter(Boolean)
}

function parseTags(tagsString) {
  if (!tagsString) return []
  return tagsString.split(',').map(t => t.trim()).filter(Boolean)
}

function formatDate(dateString) {
  // Input: YYYY/MM/DD
  const [year, month, day] = dateString.split('/').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getAllPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(POSTS_DIR, filename)
      const { data } = matter(fs.readFileSync(filePath, 'utf8'))
      return {
        slug,
        title: data.title,
        tagline: data.tagline,
        date: data.date,
        formattedDate: formatDate(data.date),
        language: data.language,
        tags: parseTags(data.tags),
        isLong: data.isLong ?? false,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export async function getPost(slug) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  const processed = await remark().use(html).process(content)
  const contentHtml = addHeadingIds(processed.toString())
  const headings = extractHeadings(content)

  return {
    slug,
    title: data.title,
    tagline: data.tagline,
    date: data.date,
    formattedDate: formatDate(data.date),
    language: data.language,
    tags: parseTags(data.tags),
    isLong: data.isLong ?? false,
    contentHtml,
    headings,
  }
}

export function getRelatedPosts(currentSlug, tags) {
  return getAllPosts()
    .filter(p => p.slug !== currentSlug && p.tags.some(t => tags.includes(t)))
    .slice(0, 3)
}
