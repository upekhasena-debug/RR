import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('rr_theme') || 'coral')

  const toggleTheme = () => {
    setTheme(t => {
      const next = t === 'coral' ? 'dark' : 'coral'
      localStorage.setItem('rr_theme', next)
      return next
    })
  }

  return { theme, toggleTheme }
}
