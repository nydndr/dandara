# Blog ("Writings") Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a full "Writings" blog section with an index page, individual post pages (sticky ToC for long posts, related posts footer), navbar integration, and a sample post.

**Architecture:** Follow the existing gray-matter + remark + dangerouslySetInnerHTML pattern from the Now page. Posts live in `src/content/blog/`. A utility module `src/lib/blog.js` handles all file reading and parsing. Only the ToC is a client component (needs IntersectionObserver for scroll tracking). Everything else is server components.

**Tech Stack:** Next.js 16 App Router, gray-matter, remark, remark-html, Tailwind CSS v4, @tailwindcss/typography

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/content/blog/designing-in-constrained-environments.mdx` | Create | Sample blog post (3 sections, 2 images) |
| `src/lib/blog.js` | Create | getAllPosts, getPost, getRelatedPosts |
| `src/app/writings/page.js` | Create | Blog index — posts grouped by year |
| `src/app/writings/[slug]/page.js` | Create | Individual post page |
| `src/app/writings/[slug]/TableOfContents.js` | Create | Client ToC (mobile collapsible + desktop sticky) |
| `src/app/layout.js` | Modify | Add "Writings" nav link before "Now" |
| `src/app/globals.css` | Modify | Text selection, blog link colors, image shadow |

---

### Task 1: Sample blog post MDX file

**Files:**
- Create: `src/content/blog/designing-in-constrained-environments.mdx`

- [ ] **Step 1: Create the blog content directory and MDX file**

Create `src/content/blog/designing-in-constrained-environments.mdx`:

```mdx
---
date: 2026/03/20
title: Designing in Constrained Environments
tagline: What years designing for payment terminals taught me about clarity
language: english
tags: design, product-design, fintech
isLong: true
---

## The Smallest Screen

When I joined Stone, I thought I knew what "designing for constraints" meant. Mobile-first, accessible colors, reasonable tap targets — the usual checklist. Then I met the POS terminal: a 5-inch screen running on Android, handling transactions for more than 4.5 million merchants across Brazil every single day.

There was no room for ambiguity. A merchant mid-transaction does not have time to pause and figure out your interface. The feedback loop — tap, confirm, done — had to be instantaneous and unmistakable. If I left any doubt in the design, the doubt would show up in the real world as a failed sale, a confused cashier, a queue that didn't move.

![A Stone POS terminal at work](/stone-pos.png)

The first few months were humbling. Components I designed would get flagged in review because they looked right on a 14-inch Figma canvas but broke entirely on the actual device. I learned to test on hardware from day one, not as a final check but as a design tool.

## When Constraints Become Features

The moment everything changed was during a usability test at a small bakery in São Paulo. We were testing a new app flow for the store's App Store experience. The cashier — a woman in her fifties who had never used a smartphone before working at that bakery — navigated the whole flow without a single error.

When I asked her what helped her, she pointed at the icon size. "It's big," she said. "I can see it."

That was the constraint: limited screen real estate forced us to make every element earn its space. Only the most critical actions got large touch targets. Secondary options were hidden until needed. The result wasn't a simplified interface out of necessity — it was a *clearer* interface by design.

![Fin. — a financial app for youth that won the UI/UX Jr. competition](/fin.png)

The same instinct carried into Fin., a financial app for young Brazilians I designed in fifteen days. No constraint is more honest than a deadline. It forced every decision to be intentional. No decorative elements, no feature creep — just the core loop of checking, spending, and saving, made as intuitive as possible.

## What I Would Tell Myself

If I could go back and tell the version of me who first opened Figma on a POS project anything, it would be: **constraints are not your enemy, they are your brief**.

Every real product lives inside constraints — budget, screen size, cognitive load, time to market. The designer's job is not to wish them away but to understand them deeply enough to make them invisible to the user. When you internalize the constraint, you stop working around it and start working with it.

A few principles I carry with me:

- **Test on the actual device, early.** Figma lies. The device tells the truth.
- **Remove before you add.** Every element that isn't necessary is a distraction.
- **Clarity is not simplicity.** You can have complexity and still be clear. What you cannot have is ambiguity.
- **The constraint is the brief.** A 5-inch screen isn't a problem. It's the most honest description of your user's context you'll ever receive.

The hardest thing to learn was that good design doesn't show. When everything works, users don't notice the design at all — they just complete their task and move on. For a designer, that invisibility is the highest compliment.
```

- [ ] **Step 2: Verify the file parses correctly**

```bash
node -e "
const matter = require('gray-matter');
const fs = require('fs');
const f = fs.readFileSync('src/content/blog/designing-in-constrained-environments.mdx', 'utf8');
console.log(matter(f).data);
"
```

Expected:
```
{
  date: '2026/03/20',
  title: 'Designing in Constrained Environments',
  tagline: 'What years designing for payment terminals taught me about clarity',
  language: 'english',
  tags: 'design, product-design, fintech',
  isLong: true
}
```

- [ ] **Step 3: Commit**

```bash
git add src/content/blog/designing-in-constrained-environments.mdx
git commit -m "content: add sample blog post on constrained design"
```

---

### Task 2: Blog utility library

**Files:**
- Create: `src/lib/blog.js`

- [ ] **Step 1: Create `src/lib/blog.js`**

```js
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
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/blog.js
git commit -m "feat: add blog utility library (getAllPosts, getPost, getRelatedPosts)"
```

---

### Task 3: Add "Writings" to the navbar

**Files:**
- Modify: `src/app/layout.js` (lines 58–65)

- [ ] **Step 1: Update the nav links block in `src/app/layout.js`**

Replace the existing `<div className="flex gap-1">` block (which currently has only the "Now" link) with:

```jsx
<div className="flex gap-1">
  <Link
    className="rounded-md px-4 py-2 whitespace-nowrap opacity-50 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:text-(--foreground) hover:opacity-100"
    href="/writings"
  >
    Writings
  </Link>
  <Link
    className="rounded-md px-4 py-2 whitespace-nowrap opacity-50 transition-all duration-300 ease-in-out hover:bg-(--dandara) hover:text-(--foreground) hover:opacity-100"
    href="/now"
  >
    Now
  </Link>
</div>
```

- [ ] **Step 2: Start the dev server and verify the nav**

```bash
npm run dev
```

Open http://localhost:3000. Confirm "Writings" appears before "Now" in the navbar with the same hover style (yellow background on hover).

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.js
git commit -m "feat: add Writings nav link before Now"
```

---

### Task 4: Blog index page

**Files:**
- Create: `src/app/writings/page.js`

- [ ] **Step 1: Create `src/app/writings/page.js`**

```jsx
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
        <p className="text-xl font-medium md:text-2xl">
          Thoughts on design, product, and practice.
        </p>
      </header>

      <section className="space-y-16">
        {years.map(year => (
          <div key={year} className="space-y-4">
            <h2 className="font-mono text-sm text-gray-700/50">{year}</h2>
            <div className="space-y-1">
              {byYear[year].map(post => (
                <Link
                  key={post.slug}
                  href={`/writings/${post.slug}`}
                  className="group flex items-baseline justify-between border-b border-gray-700/10 py-3 transition-all hover:border-gray-700/30"
                >
                  <div className="space-y-0.5">
                    <p className="font-medium tracking-tight">{post.title}</p>
                    <p className="text-sm text-gray-700/60">{post.tagline}</p>
                  </div>
                  <span className="ml-4 shrink-0 font-mono text-sm text-gray-700/40">
                    {post.formattedDate}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify in the dev server**

Navigate to http://localhost:3000/writings. Confirm: the heading shows "Dandara \ Writings" with the breadcrumb style, the year "2026" is shown in monospace, and the sample post is listed with title, tagline, and formatted date.

- [ ] **Step 3: Commit**

```bash
git add src/app/writings/page.js
git commit -m "feat: add Writings blog index page with year grouping"
```

---

### Task 5: TableOfContents client component

**Files:**
- Create: `src/app/writings/[slug]/TableOfContents.js`

- [ ] **Step 1: Create `src/app/writings/[slug]/TableOfContents.js`**

```jsx
'use client'

import { useState, useEffect } from 'react'

function useTocObserver(headings) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const intersecting = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id)
        }
      },
      { rootMargin: '0px 0px -75% 0px' }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  return activeId
}

export function MobileTableOfContents({ headings }) {
  const activeId = useTocObserver(headings)
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-md border border-gray-700/10 p-4">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex w-full items-center justify-between text-sm font-medium text-gray-700/60 hover:text-gray-700"
      >
        <span>Contents</span>
        <span
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          ▾
        </span>
      </button>
      {open && (
        <nav className="mt-3 flex flex-col gap-1.5 border-l-2 border-gray-700/10 pl-4">
          {headings.map(({ id, text, level }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`text-sm leading-snug transition-colors duration-150 ${
                level > 1 ? 'pl-3' : ''
              } ${
                activeId === id
                  ? 'font-medium text-(--dandara)'
                  : 'text-gray-700/50 hover:text-gray-700'
              }`}
            >
              {text}
            </a>
          ))}
        </nav>
      )}
    </div>
  )
}

export function DesktopTableOfContents({ headings }) {
  const activeId = useTocObserver(headings)

  return (
    <nav className="flex flex-col gap-1.5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-700/30">
        Contents
      </p>
      {headings.map(({ id, text, level }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-sm leading-snug transition-colors duration-150 ${
            level > 1 ? 'pl-3' : ''
          } ${
            activeId === id
              ? 'font-medium text-(--dandara)'
              : 'text-gray-700/40 hover:text-gray-700'
          }`}
        >
          {text}
        </a>
      ))}
    </nav>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/writings/[slug]/TableOfContents.js
git commit -m "feat: add TableOfContents client component with IntersectionObserver"
```

---

### Task 6: Individual post page

**Files:**
- Create: `src/app/writings/[slug]/page.js`

- [ ] **Step 1: Create `src/app/writings/[slug]/page.js`**

```jsx
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
        className="inline-flex items-center gap-1 text-sm text-gray-700/40 transition-colors hover:text-gray-700"
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
          <aside className="hidden w-48 shrink-0 lg:block">
            <div className="sticky top-8">
              <DesktopTableOfContents headings={post.headings} />
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify the full post page**

Navigate to http://localhost:3000/writings/designing-in-constrained-environments. Check:
- "← Back to writings" link above the header
- Title, tagline, "Published on March 20, 2026 by Dandara" in the header
- Article body renders with prose styling; both images appear
- Desktop (≥1024px): sticky ToC on the right with 3 items highlighted as you scroll
- Mobile (<1024px): collapsible "Contents" drawer above the article
- Active ToC item highlights in `--dandara` yellow as you scroll

- [ ] **Step 3: Commit**

```bash
git add src/app/writings/[slug]/page.js
git commit -m "feat: add post page with header, article, ToC layout, and read-next footer"
```

---

### Task 7: Blog-specific global styles

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Append blog styles to `src/app/globals.css`**

Add the following to the end of the file:

```css
/* Text selection — soft yellow across the whole site */
::selection {
  background-color: rgba(255, 204, 0, 0.25);
}

/* Blog prose link colors */
.blog-prose a {
  color: var(--dandara);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.blog-prose a:visited {
  color: #92400e;
}

/* Blog prose image treatment */
.blog-prose img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 24px rgba(53, 53, 53, 0.08),
    0 1px 6px rgba(53, 53, 53, 0.04);
}
```

- [ ] **Step 2: Verify styles in the dev server**

On the post page:
- Select any text — highlight should be a soft yellow
- Click a link inside the article, navigate back — that link should now appear brown
- Images should have a subtle shadow separating them from the page

- [ ] **Step 3: Final smoke-test**

1. http://localhost:3000 — "Writings" appears before "Now" in the navbar
2. http://localhost:3000/writings — sample post listed under year "2026"
3. http://localhost:3000/writings/designing-in-constrained-environments — full post renders correctly on both mobile and desktop

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add blog prose styles (link colors, text selection, image shadow)"
```

---

## Self-Review

### Spec coverage

| Requirement | Covered in |
|-------------|------------|
| MDX with frontmatter (date YYYY/MM/DD, title, tagline, language, tags, isLong) | Task 1 |
| "Writings" nav button before "Now" | Task 3 |
| Blog index lists posts most recent first, grouped by year | Task 4 |
| Post header: big title, tagline, "Published on [date] by Dandara" | Task 6 |
| Long post: sticky ToC on right (desktop), collapsible drawer (mobile) | Tasks 5, 6 |
| ToC tracks active section while scrolling | Task 5 (IntersectionObserver) |
| Links #ffcc00 and underlined | Task 7 |
| Text selection: opaque yellow | Task 7 |
| Visited links: brown | Task 7 |
| Images: centered with shadow | Task 7 |
| Post footer: "Read next" up to 3 tag-matched posts | Task 6 + getRelatedPosts (Task 2) |
| "Back to writings" above post header | Task 6 |
| Prose styling borrows from Now page (prose classes, Work Sans font) | Task 6 |
| Sample post with 3 sections and 2 images | Task 1 |

### Placeholder scan
No TBDs, TODOs, or vague steps.

### Type consistency
- `getAllPosts()` → `{ slug, title, tagline, date, formattedDate, language, tags[], isLong }`
- `getPost(slug)` → same shape + `{ contentHtml, headings[] }`
- `headings[]` → `{ level, text, id }` — consistent between `extractHeadings` (Task 2), `MobileTableOfContents` and `DesktopTableOfContents` (Task 5), and the post page (Task 6)
- `getRelatedPosts(slug, tags[])` → calls `getAllPosts()` — shape consistent throughout
