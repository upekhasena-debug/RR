import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const tabs = [
  { label: 'Home', path: '/', icon: '⌂' },
  { label: 'My Plan', path: '/pain', icon: '♥' },
  { label: 'Cards', path: '/cards', icon: '▤' },
  { label: 'Products', path: '/products', icon: '◈' },
  { label: 'Track', path: '/tracker', icon: '◎' },
]

export default function BottomNav({ theme }) {
  const navigate = useNavigate()
  const location = useLocation()
  const activeColor = '#EF4136'
  const inactiveColor = '#888780'
  const bgColor = '#FFFFFF'
  const borderColor = '#E0DED8'

  return (
    <nav
      style={{
        backgroundColor: bgColor,
        borderTop: `1px solid ${borderColor}`,
        display: 'flex',
        position: 'sticky',
        bottom: 0,
        zIndex: 50,
      }}
      className="w-full flex-shrink-0"
    >
      {tabs.map(tab => {
        const isActive = location.pathname === tab.path || (tab.path !== '/' && location.pathname.startsWith(tab.path))
        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            style={{
              flex: 1,
              padding: '8px 4px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: isActive ? activeColor : inactiveColor,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{tab.icon}</span>
            <span style={{ fontSize: '0.6rem', fontWeight: isActive ? 800 : 600, letterSpacing: '0.02em' }}>
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
