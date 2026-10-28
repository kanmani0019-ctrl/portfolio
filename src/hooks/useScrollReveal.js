import { useEffect } from 'react'

/**
 * Adds `.is-visible` to every `.reveal` element once it scrolls into view.
 * Runs once on mount and re-scans when `deps` change (e.g. project filter).
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!nodes.length) return

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
