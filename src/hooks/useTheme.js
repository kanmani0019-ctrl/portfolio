import { useEffect, useState } from 'react'

const KEY = 'portfolio-theme'

function initialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const saved = window.localStorage.getItem(KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function useTheme() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(KEY, theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}
