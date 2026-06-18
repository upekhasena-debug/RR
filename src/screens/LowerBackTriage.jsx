import React from 'react'
import { useNavigate } from 'react-router-dom'

const options = [
  {
    id: 'endday',
    title: 'Builds through the day',
    sub: 'Fine in the morning, worse by afternoon',
    to: '/pain/lower/endday',
    emoji: '📈',
  },
  {
    id: 'morning',
    title: 'Worst in the morning',
    sub: 'Stiff when I first get up or arrive',
    to: '/pain/lower/morning',
    emoji: '🌅',
  },
  {
    id: 'always',
    title: 'Pretty much constant',
    sub: 'There most of the time regardless',
    to: '/pain/lower/always',
    emoji: '🔁',
  },
]

export default function LowerBackTriage() {
  const navigate = useNavigate()

  const handleSelect = (opt) => {
    localStorage.setItem('rr_lower_back_timing', opt.id)
    navigate(opt.to)
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: 80 }}>
      <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2C2C2A', marginBottom: 6 }}>
        When is it worst?
      </div>
      <div style={{ color: '#888780', fontSize: '0.875rem', marginBottom: 24 }}>
        This helps us point you to the right strategies.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {options.map(opt => (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt)}
            style={{
              background: '#FFFFFF',
              border: '1px solid #E0DED8',
              borderRadius: 12,
              padding: '16px',
              textAlign: 'left',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            <span style={{ fontSize: '2rem', flexShrink: 0 }}>{opt.emoji}</span>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#2C2C2A', marginBottom: 4 }}>{opt.title}</div>
              <div style={{ fontSize: '0.8rem', color: '#888780', lineHeight: 1.4 }}>{opt.sub}</div>
            </div>
            <span style={{ marginLeft: 'auto', color: '#EF4136', fontSize: '1.1rem', flexShrink: 0 }}>›</span>
          </button>
        ))}
      </div>
    </div>
  )
}
