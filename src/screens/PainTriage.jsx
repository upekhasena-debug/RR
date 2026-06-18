import React from 'react'
import { useNavigate } from 'react-router-dom'

const areas = [
  {
    id: 'neck',
    title: 'Neck and head',
    sub: 'Base of skull, neck tension, headaches',
    to: '/pain/neck',
    emoji: '🧠',
  },
  {
    id: 'upperback',
    title: 'Upper back and shoulders',
    sub: 'Between shoulder blades, upper traps, periscapular area',
    to: '/pain/upperback',
    emoji: '💪',
  },
  {
    id: 'lower',
    title: 'Lower back',
    sub: 'Lumbar ache, hip tightness, tailbone area',
    to: '/pain/lower/triage',
    emoji: '⬇️',
  },
  {
    id: 'wrist',
    title: 'Wrist and forearm',
    sub: 'Typing fatigue, forearm tightness, finger stiffness',
    to: '/pain/wrist',
    emoji: '✋',
  },
]

export default function PainTriage() {
  const navigate = useNavigate()

  const handleSelect = (area) => {
    localStorage.setItem('rr_niggle_area', area.id)
    navigate(area.to)
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: 80 }}>
      <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2C2C2A', marginBottom: 6 }}>
        Where is the niggle?
      </div>
      <div style={{ color: '#888780', fontSize: '0.875rem', marginBottom: 24 }}>
        Pick the area that's been bothering you most.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {areas.map(area => (
          <button
            key={area.id}
            onClick={() => handleSelect(area)}
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
            <span style={{ fontSize: '2rem', flexShrink: 0 }}>{area.emoji}</span>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#2C2C2A', marginBottom: 4 }}>{area.title}</div>
              <div style={{ fontSize: '0.8rem', color: '#888780', lineHeight: 1.4 }}>{area.sub}</div>
            </div>
            <span style={{ marginLeft: 'auto', color: '#EF4136', fontSize: '1.1rem', flexShrink: 0 }}>›</span>
          </button>
        ))}
      </div>
    </div>
  )
}
