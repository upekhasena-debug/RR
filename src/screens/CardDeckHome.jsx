import React from 'react'
import { useNavigate } from 'react-router-dom'
import { cardDeck } from '../data/cardDeck'

const sections = [
  { id: 'move', emoji: '🏃', desc: 'Whole body movement breaks. Every 30–45 minutes.' },
  { id: 'activate', emoji: '⚡', desc: 'Switch the right muscles on before you load them.' },
  { id: 'stretch', emoji: '🧘', desc: 'Release what sitting tightens. Move what sitting stiffens.' },
  { id: 'strengthen', emoji: '💪', desc: 'Build what desk work breaks down.' },
  { id: 'benchmark', emoji: '📊', desc: 'Find out where you\'re starting from.' },
]

export default function CardDeckHome() {
  const navigate = useNavigate()

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: 80 }}>
      <h1 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2C2C2A', marginBottom: 4 }}>Card deck</h1>
      <p style={{ color: '#5F5E5A', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 24 }}>
        Your physio. In a card. For wherever you are.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {sections.map(s => {
          const section = cardDeck[s.id]
          const cardCount = section.cards.length
          return (
            <button
              key={s.id}
              onClick={() => navigate(`/cards/${s.id}`)}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                background: '#FFFFFF', border: '1px solid #E0DED8',
                borderRadius: 14, padding: '16px 16px',
                cursor: 'pointer', textAlign: 'left',
                borderLeft: `5px solid ${section.color}`,
              }}
            >
              <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{s.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 900, fontSize: '1rem', color: '#2C2C2A', marginBottom: 2 }}>
                  {section.title}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#5F5E5A', lineHeight: 1.4 }}>{s.desc}</div>
                <div style={{ fontSize: '0.7rem', color: '#888780', marginTop: 4 }}>{cardCount} cards</div>
              </div>
              <span style={{ color: section.color, fontSize: '1.2rem', fontWeight: 900, flexShrink: 0 }}>›</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
