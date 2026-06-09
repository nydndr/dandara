'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function NavCircle() {
  const pathname = usePathname()
  const isPost = /^\/writings\/.+/.test(pathname)
  const [progress, setProgress] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)
  const [exited, setExited] = useState(false)
  const isComplete = progress >= 1

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    setIsDesktop(mq.matches)
    const onChange = e => setIsDesktop(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!isPost) {
      setExited(false)
      return
    }

    const id = setTimeout(() => {
      setExited(true)
      // Dispatch after animation completes so ReadingProgressCircle pops in right after
      setTimeout(() => window.dispatchEvent(new CustomEvent('dandara-sun-exit')), 500)
    }, 2000)

    return () => clearTimeout(id)
  }, [isPost])

  useEffect(() => {
    if (!isPost) { setProgress(0); return }
    function calculate() {
      const article = document.getElementById('article-content')
      if (!article) return
      const articleTop = article.getBoundingClientRect().top + window.scrollY
      const articleHeight = article.offsetHeight
      const scrollable = articleHeight - window.innerHeight
      if (scrollable <= 0) { setProgress(window.scrollY >= articleTop ? 1 : 0); return }
      setProgress(Math.max(0, Math.min(1, (window.scrollY - articleTop) / scrollable)))
    }
    calculate()
    window.addEventListener('scroll', calculate, { passive: true })
    window.addEventListener('resize', calculate, { passive: true })
    return () => {
      window.removeEventListener('scroll', calculate)
      window.removeEventListener('resize', calculate)
    }
  }, [isPost])

  const showMobileProgress = isPost && !isDesktop
  const useWaterFill = showMobileProgress && !isComplete

  return (
    <Link href="/">
      <div
        // Keep dandara-sun class even when exiting — gives the animation a visible background to fade from
        className={`size-10 rounded-full dandara-sun ${exited ? 'sun-pop-out' : 'sun-wobble'} ${isComplete && showMobileProgress ? 'reading-circle-complete' : ''}`}
        style={useWaterFill ? {
          border: '1px solid var(--dandara)',
          background: `linear-gradient(to top, var(--dandara) ${progress * 100}%, transparent ${progress * 100}%)`,
        } : undefined}
      />
    </Link>
  )
}
