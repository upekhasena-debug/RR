import React from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
  { id: 'lumbar', name: 'Lumbar Roll', emoji: '🪑' },
  { id: 'backmagic', name: 'BackMagic', emoji: '🔧' },
  { id: 'wristpad', name: 'Wrist Neutraliser Pad', emoji: '⌨️' },
  { id: 'posturedevice', name: 'Posture Device', emoji: '📡' },
  { id: 'neckmassager', name: 'Neck Massager', emoji: '💆' },
  { id: 'theraband', name: 'Therabands', emoji: '🏋️' },
  { id: 'heatpatch', name: 'Heat Patch', emoji: '🔥' },
  { id: 'peanutball', name: 'Peanut Ball', emoji: '⚽' },
]

const experienceCards = [
  { title: 'I have a niggle', sub: 'Find your pain pathway', to: '/pain', emoji: '📍' },
  { title: 'The science behind the ache', sub: 'Why desk work hurts', to: '/science', emoji: '🔬' },
  { title: 'Test yourself', sub: 'Six questions. How much do you know?', to: '/quiz', emoji: '✏️' },
  { title: 'How should I set up my desk?', sub: 'Photo analysis + guide', to: '/desksetup', emoji: '🖥️' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 80 }}>
      <div style={{ padding: '20px 16px 0' }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
            Your experience
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {experienceCards.map(card => (
              <button
                key={card.to}
                onClick={() => navigate(card.to)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E0DED8',
                  borderRadius: 12,
                  padding: '16px 12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{card.emoji}</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#2C2C2A', lineHeight: 1.3 }}>{card.title}</div>
                  <div style={{ fontSize: '0.72rem', color: '#888780', marginTop: 4, lineHeight: 1.4 }}>{card.sub}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
            Your products
          </div>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8, marginRight: -16, paddingRight: 16 }}>
            {products.map(p => (
              <button
                key={p.id}
                onClick={() => navigate(`/product/${p.id}`)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E0DED8',
                  borderRadius: 12,
                  padding: '14px 12px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  width: 100,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 6,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
              >
                <span style={{ fontSize: '1.6rem' }}>{p.emoji}</span>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#2C2C2A', lineHeight: 1.3 }}>{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ background: '#F7F6F2', border: '1px solid #E0DED8', borderRadius: 10, padding: '12px 14px', marginBottom: 16 }}>
          <p style={{ color: '#888780', fontSize: '0.75rem', lineHeight: 1.5, margin: 0 }}>
            Companion to your Recovery Road box. For mild to moderate desk-related pain. If something feels serious, see a physio.
          </p>
        </div>

        <div style={{ textAlign: 'center', paddingBottom: 8 }}>
          <button
            onClick={() => navigate('/recheck')}
            style={{
              background: 'none',
              border: 'none',
              color: '#888780',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Things not going the way you planned?
          </button>
        </div>
      </div>
    </div>
  )
}
