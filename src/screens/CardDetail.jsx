import React from 'react'
import { useParams } from 'react-router-dom'
import { getSection, getCard } from '../data/cardDeck'
import { HoldTimer, RepsTimer, BestOf3Timer, SidedTimers } from '../components/BenchmarkTimer'

function BenchmarkTimers({ card }) {
  const { timer } = card
  if (!timer) return null

  if (timer.type === 'hold') {
    return <HoldTimer storageKey={timer.storageKey} />
  }
  if (timer.type === 'sided') {
    return (
      <SidedTimers
        leftKey={timer.leftKey}
        rightKey={timer.rightKey}
        leftLabel={timer.leftLabel}
        rightLabel={timer.rightLabel}
        mode={timer.mode}
        threshold={timer.threshold}
        thresholdMsg={timer.thresholdMsg}
      />
    )
  }
  if (timer.type === 'sts') {
    return (
      <div>
        <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#2C2C2A', marginBottom: 6 }}>Double leg — 60 second test</div>
        <RepsTimer storageKey={timer.repsKey} label="Double leg" />
        <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#2C2C2A', marginTop: 16, marginBottom: 6 }}>Single leg — 60 second test</div>
        <SidedTimers
          leftKey={timer.leftKey}
          rightKey={timer.rightKey}
          leftLabel="Left leg"
          rightLabel="Right leg"
          mode="reps"
          threshold={5}
          thresholdMsg="There's a gap between sides worth addressing"
        />
      </div>
    )
  }
  return null
}

export default function CardDetail() {
  const { sectionId, cardId } = useParams()
  const section = getSection(sectionId)
  const card = getCard(sectionId, cardId)

  if (!section || !card) {
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <p style={{ color: '#888780' }}>Card not found.</p>
      </div>
    )
  }

  const isBenchmark = sectionId === 'benchmark'

  return (
    <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 80 }}>
      {/* Illustration — crop to top ~65% to show just the artwork, not the baked-in card text */}
      {card.image ? (
        <div style={{ width: '100%', paddingBottom: '65%', position: 'relative', overflow: 'hidden' }}>
          <img
            src={card.image}
            alt={card.title}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'block' }}
          />
        </div>
      ) : (
        /* Coloured header strip for cards without an illustration */
        <div style={{ background: section.color, padding: '12px 16px 14px' }}>
          <span style={{
            background: 'rgba(255,255,255,0.25)', color: 'white',
            fontSize: '0.65rem', fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.07em',
            padding: '3px 8px', borderRadius: 20,
          }}>
            {card.area}
          </span>
        </div>
      )}

      <div style={{ padding: '16px 16px' }}>
        {/* Area tag — shown here when card has an illustration */}
        {card.image && (
          <span style={{
            display: 'inline-block',
            background: section.color + '20',
            color: section.color,
            fontSize: '0.65rem', fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.07em',
            padding: '3px 8px', borderRadius: 20,
            marginBottom: 10,
          }}>
            {card.area}
          </span>
        )}

        {/* Card title */}
        <h1 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2C2C2A', lineHeight: 1.3, marginBottom: 16 }}>
          {card.title}
        </h1>

        {/* Disclaimer warning */}
        {card.disclaimer && (
          <div style={{
            background: '#FEF0EF', border: '1.5px solid #EF4136',
            borderRadius: 10, padding: '12px 14px', marginBottom: 16,
            fontSize: '0.82rem', color: '#EF4136', lineHeight: 1.6, fontWeight: 600,
          }}>
            ⚠️ {card.disclaimer}
          </div>
        )}

        {/* Note box (yellow) */}
        {card.note && !card.disclaimer && (
          <div style={{
            background: '#FFF8E1', borderLeft: '4px solid #F5C842',
            borderRadius: 6, padding: '10px 12px', marginBottom: 14,
            fontSize: '0.82rem', color: '#2C2C2A', lineHeight: 1.5,
          }}>
            {card.note}
          </div>
        )}

        {/* Instructions */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 800, fontSize: '0.8rem', color: '#2C2C2A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
            How to do it
          </div>
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            {card.instructions.map((step, i) => (
              <li key={i} style={{ fontSize: '0.9rem', color: '#2C2C2A', lineHeight: 1.65, marginBottom: 5 }}>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Note box (yellow) — when there's also a disclaimer */}
        {card.note && card.disclaimer && (
          <div style={{
            background: '#FFF8E1', borderLeft: '4px solid #F5C842',
            borderRadius: 6, padding: '10px 12px', marginBottom: 14,
            fontSize: '0.82rem', color: '#2C2C2A', lineHeight: 1.5,
          }}>
            {card.note}
          </div>
        )}

        {/* Reps / duration pill */}
        {(card.reps || card.duration) && (
          <div style={{
            display: 'inline-block',
            background: section.color,
            color: 'white',
            borderRadius: 20, padding: '6px 14px',
            fontSize: '0.8rem', fontWeight: 800,
            marginBottom: 16,
          }}>
            {card.reps || card.duration}
          </div>
        )}

        {/* Benchmark section */}
        {isBenchmark && card.benchmark && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 800, fontSize: '0.8rem', color: '#2C2C2A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
              Your benchmark
            </div>
            <p style={{ fontSize: '0.85rem', color: '#5F5E5A', lineHeight: 1.6, margin: 0 }}>{card.benchmark}</p>
          </div>
        )}

        {/* Timers for benchmark cards */}
        {isBenchmark && card.timer && (
          <div style={{ marginBottom: 16 }}>
            <BenchmarkTimers card={card} />
          </div>
        )}

        {/* Source */}
        {card.source && (
          <div style={{ fontSize: '0.72rem', color: '#888888', marginTop: 8, lineHeight: 1.4, fontStyle: 'italic' }}>
            {card.source}
          </div>
        )}
      </div>
    </div>
  )
}
