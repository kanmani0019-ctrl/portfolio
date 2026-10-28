import { useEffect, useState } from 'react'

/** Scroll-spy: returns the id of the section currently in the viewport. */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * 0.32
      let current = sections[0].id
      for (const section of sections) {
        if (section.offsetTop <= line) current = section.id
      }
      // Pin the last section when the page is scrolled to the bottom.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = sections[sections.length - 1].id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}
