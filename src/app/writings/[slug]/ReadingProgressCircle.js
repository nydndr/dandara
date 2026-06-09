'use client'

import { useState, useEffect } from 'react'

function useReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function calculate() {
      const article = document.getElementById('article-content')
      if (!article) return
      const articleTop = article.getBoundingClientRect().top + window.scrollY
      const articleHeight = article.offsetHeight
      const scrollable = articleHeight - window.innerHeight
      if (scrollable <= 0) {
        setProgress(window.scrollY >= articleTop ? 1 : 0)
        return
      }
      setProgress(Math.max(0, Math.min(1, (window.scrollY - articleTop) / scrollable)))
    }

    calculate()
    window.addEventListener('scroll', calculate, { passive: true })
    window.addEventListener('resize', calculate, { passive: true })
    return () => {
      window.removeEventListener('scroll', calculate)
      window.removeEventListener('resize', calculate)
    }
  }, [])

  return progress
}

export default function ReadingProgressCircle({ fixed = false }) {
  const progress = useReadingProgress()
  const [visible, setVisible] = useState(false)
  const isComplete = progress >= 1

  // Pop in only after the navbar sun has finished its exit animation
  useEffect(() => {
    const onSunExit = () => setVisible(true)
    window.addEventListener('dandara-sun-exit', onSunExit, { once: true })
    return () => window.removeEventListener('dandara-sun-exit', onSunExit)
  }, [])

  return (
    <div
      className={`sun-wobble size-10 rounded-full ${visible ? 'sun-pop-in' : ''} ${isComplete ? 'dandara-sun reading-circle-complete' : ''}`}
      style={{
        opacity: visible ? undefined : 0,
        ...(fixed && { position: 'fixed', top: '2rem', right: '2rem' }),
        ...(!isComplete && {
          border: '1px solid var(--dandara)',
          background: `linear-gradient(to top, var(--dandara) ${progress * 100}%, transparent ${progress * 100}%)`,
        }),
      }}
    />
  )
}
