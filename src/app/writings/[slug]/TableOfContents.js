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
                level === 2 ? 'pl-3' : level === 3 ? 'pl-6' : ''
              } ${
                activeId === id
                  ? 'font-medium text-yellow-600'
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
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-700/50">
        Contents
      </p>
      {headings.map(({ id, text, level }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-sm leading-snug transition-colors duration-150 ${
            level === 2 ? 'pl-3' : level === 3 ? 'pl-6' : ''
          } ${
            activeId === id
              ? 'font-medium text-yellow-600'
              : 'text-gray-700/60 hover:text-gray-700'
          }`}
        >
          {text}
        </a>
      ))}
    </nav>
  )
}
