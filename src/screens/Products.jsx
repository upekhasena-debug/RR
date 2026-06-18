import React from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
  { id: 'lumbar', name: 'Lumbar Roll', emoji: '🪑', sub: 'Lumbar support for all-day sitting' },
  { id: 'backmagic', name: 'BackMagic', emoji: '🔧', sub: 'Thoracic spine mobiliser' },
  { id: 'wristpad', name: 'Wrist Neutraliser Pad', emoji: '⌨️', sub: 'Neutral wrist position while typing' },
  { id: 'posturedevice', name: 'Posture Device', emoji: '📡', sub: 'Biofeedback posture trainer' },
  { id: 'neckmassager', name: 'Neck Massager', emoji: '💆', sub: 'Upper trap and neck tension relief' },
  { id: 'theraband', name: 'Therabands', emoji: '🏋️', sub: 'Targeted strengthening program' },
  { id: 'heatpatch', name: 'Heat Patch', emoji: '🔥', sub: 'Morning tissue warm-up' },
  { id: 'peanutball', name: 'Peanut Ball', emoji: '⚽', sub: 'Self-massage for chronic overload' },
]

export default function Products() {
  const navigate = useNavigate()

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: 80 }}>
      <h1 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2C2C2A', marginBottom: 4 }}>Your products</h1>
      <p style={{ color: '#888780', fontSize: '0.85rem', marginBottom: 20 }}>How-to guides for everything in your box.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {products.map(p => (
          <button
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
            style={{
              background: '#FFFFFF', border: '1px solid #E0DED8', borderRadius: 12,
              padding: '14px 16px', textAlign: 'left', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 14,
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            <span style={{ fontSize: '2rem', flexShrink: 0 }}>{p.emoji}</span>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#2C2C2A', marginBottom: 2 }}>{p.name}</div>
              <div style={{ fontSize: '0.78rem', color: '#888780' }}>{p.sub}</div>
            </div>
            <span style={{ marginLeft: 'auto', color: '#EF4136', fontSize: '1.2rem', flexShrink: 0 }}>›</span>
          </button>
        ))}
      </div>
    </div>
  )
}
