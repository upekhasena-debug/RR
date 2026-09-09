import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSection } from '../data/cardDeck'

function AreaTag({ area, color }) {
  return (
    <span style={{
      background: color + '20',
      color: color,
      fontSize: '0.65rem', fontWeight: 800,
      textTransform: 'uppercase', letterSpacing: '0.06em',
      padding: '3px 8px', borderRadius: 20,
      flexShrink: 0,
    }}>
      {area}
    </span>
  )
}

export default function CardSection() {
  const { sectionId } = useParams()
  const navigate = useNavigate()
  const section = getSection(sectionId)

  if (!section) {
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <p style={{ color: '#888780' }}>Section not found.</p>
      </div>
    )
  }

  const mainCards = section.cards.filter(c => !c.isBonus)
  const bonusCards = section.cards.filter(c => c.isBonus)

  return (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 80 }}>
      {/* Colour header */}
      <div style={{ background: section.color, padding: '16px 16px 20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'white', margin: 0, lineHeight: 1.2 }}>
          {section.title}
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', lineHeight: 1.5, margin: '8px 0 0' }}>
          {section.intro}
        </p>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        {/* Disclaimer / intro card */}
        {(section.disclaimerCard || section.introCard || section.globalDisclaimer) && (
          <div style={{
            background: '#FFF8E1', borderLeft: '4px solid #F5C842',
            borderRadius: 8, padding: '12px 14px', marginBottom: 16,
            fontSize: '0.82rem', color: '#2C2C2A', lineHeight: 1.6,
          }}>
            {section.disclaimerCard && (
              <>
                <div style={{ fontWeight: 800, marginBottom: 4 }}>{section.disclaimerCard.title}</div>
                {section.disclaimerCard.content}
              </>
            )}
            {section.introCard && (
              <>
                <div style={{ fontWeight: 800, marginBottom: 4 }}>{section.introCard.title}</div>
                {section.introCard.content}
              </>
            )}
            {section.globalDisclaimer && !section.disclaimerCard && !section.introCard && section.globalDisclaimer}
          </div>
        )}

        {/* Card list */}
        {mainCards.map(card => (
          <button
            key={card.id}
            onClick={() => navigate(`/cards/${sectionId}/${card.id}`)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '13px 0', borderBottom: '1px solid #E0DED8',
              background: 'none', border: 'none', borderBottom: '1px solid #E0DED8',
              cursor: 'pointer', textAlign: 'left', gap: 10,
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#2C2C2A', marginBottom: 4 }}>{card.title}</div>
              <AreaTag area={card.area} color={section.color} />
            </div>
            <span style={{ color: section.color, fontSize: '1.1rem', fontWeight: 900, flexShrink: 0 }}>›</span>
          </button>
        ))}

        {/* Bonus cards */}
        {bonusCards.length > 0 && (
          <>
            <div style={{ marginTop: 24, marginBottom: 8 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Bonus cards
              </div>
            </div>
            {bonusCards.map(card => (
              <button
                key={card.id}
                onClick={() => navigate(`/cards/${sectionId}/${card.id}`)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '13px 0', borderBottom: '1px solid #E0DED8',
                  background: 'none', border: 'none', borderBottom: '1px solid #E0DED8',
                  cursor: 'pointer', textAlign: 'left', gap: 10,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#2C2C2A', marginBottom: 4 }}>{card.title}</div>
                  <AreaTag area={card.area} color={section.color} />
                </div>
                <span style={{ color: section.color, fontSize: '1.1rem', fontWeight: 900, flexShrink: 0 }}>›</span>
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
