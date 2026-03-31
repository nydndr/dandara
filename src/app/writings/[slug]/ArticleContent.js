'use client'

import { useEffect, useRef } from 'react'

const ZOOM = 2.5

export default function ArticleContent({ contentHtml }) {
  const articleRef = useRef(null)

  useEffect(() => {
    const article = articleRef.current
    if (!article) return

    const isTouchDevice = window.matchMedia('(hover: none)').matches
    const images = article.querySelectorAll('img')
    const cleanups = []

    images.forEach(img => {
      if (img.parentElement.classList.contains('img-zoom-wrapper')) return

      // Wrapper handles overflow + border
      const wrapper = document.createElement('div')
      wrapper.className = 'img-zoom-wrapper'

      // Outer figure for centering + label
      const outer = document.createElement('figure')
      outer.className = 'img-zoom-outer'

      const label = document.createElement('figcaption')
      label.className = 'img-zoom-label'
      label.textContent = isTouchDevice ? 'Touch and drag to zoom' : 'Hover to zoom'

      img.parentNode.insertBefore(outer, img)
      outer.appendChild(wrapper)
      wrapper.appendChild(img)
      outer.appendChild(label)

      // Mouse events
      const onMouseEnter = () => {
        img.style.transform = `scale(${ZOOM})`
        wrapper.style.cursor = 'crosshair'
      }
      const onMouseMove = (e) => {
        const rect = wrapper.getBoundingClientRect()
        const x = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1)
        const y = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1)
        img.style.transformOrigin = `${x * 100}% ${y * 100}%`
      }
      const onMouseLeave = () => {
        img.style.transform = 'scale(1)'
        img.style.transformOrigin = 'center center'
        wrapper.style.cursor = 'zoom-in'
      }

      wrapper.addEventListener('mouseenter', onMouseEnter)
      wrapper.addEventListener('mousemove', onMouseMove)
      wrapper.addEventListener('mouseleave', onMouseLeave)

      // Touch events
      let isZoomed = false

      const onTouchStart = (e) => {
        if (e.touches.length !== 1) return
        isZoomed = true
        const rect = wrapper.getBoundingClientRect()
        const x = Math.min(Math.max((e.touches[0].clientX - rect.left) / rect.width, 0), 1)
        const y = Math.min(Math.max((e.touches[0].clientY - rect.top) / rect.height, 0), 1)
        img.style.transformOrigin = `${x * 100}% ${y * 100}%`
        img.style.transform = `scale(${ZOOM})`
      }
      const onTouchMove = (e) => {
        if (!isZoomed || e.touches.length !== 1) return
        e.preventDefault()
        const rect = wrapper.getBoundingClientRect()
        const x = Math.min(Math.max((e.touches[0].clientX - rect.left) / rect.width, 0), 1)
        const y = Math.min(Math.max((e.touches[0].clientY - rect.top) / rect.height, 0), 1)
        img.style.transformOrigin = `${x * 100}% ${y * 100}%`
      }
      const onTouchEnd = () => {
        isZoomed = false
        img.style.transform = 'scale(1)'
        img.style.transformOrigin = 'center center'
      }

      wrapper.addEventListener('touchstart', onTouchStart)
      wrapper.addEventListener('touchmove', onTouchMove, { passive: false })
      wrapper.addEventListener('touchend', onTouchEnd)

      cleanups.push(() => {
        wrapper.removeEventListener('mouseenter', onMouseEnter)
        wrapper.removeEventListener('mousemove', onMouseMove)
        wrapper.removeEventListener('mouseleave', onMouseLeave)
        wrapper.removeEventListener('touchstart', onTouchStart)
        wrapper.removeEventListener('touchmove', onTouchMove)
        wrapper.removeEventListener('touchend', onTouchEnd)
      })
    })

    return () => cleanups.forEach(fn => fn())
  }, [contentHtml])

  return (
    <article
      ref={articleRef}
      className="prose prose-a:no-underline prose-em:text-gray-700/40 prose-h1:tracking-tight prose-headings:font-sans blog-prose font-work"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  )
}
