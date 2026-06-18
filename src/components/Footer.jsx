import React from 'react'

export default function Footer({ theme }) {
  const bgColor = theme === 'coral' ? '#EF4136' : '#2C2C2A'
  const textColor = theme === 'coral' ? '#FFFFFF' : '#EF4136'

  return (
    <footer
      style={{ backgroundColor: bgColor, color: textColor }}
      className="w-full py-3 text-center flex-shrink-0"
    >
      <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        recovery road · physio-designed
      </span>
    </footer>
  )
}
