import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductLinkButton from './ProductLinkButton'

function StrategyItem({ title, body, links }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E0DED8' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '12px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#2C2C2A', flex: 1 }}>{title}</span>
        <span style={{ color: '#EF4136', fontSize: '1.1rem', fontWeight: 900, flexShrink: 0 }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 12 }}>
          <p style={{ color: '#5F5E5A', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 8 }}>{body}</p>
          {links && links.map((link, i) => (
            <ProductLinkButton key={i} label={link.label} to={link.to} comingSoon={link.comingSoon} />
          ))}
        </div>
      )}
    </div>
  )
}

function ExpandableBody({ text }) {
  const [expanded, setExpanded] = useState(false)
  const lines = text.split('\n\n')
  const preview = lines.slice(0, 1).join('\n\n')
  const hasMore = lines.length > 1

  return (
    <div style={{ marginBottom: 24 }}>
      <p style={{ color: '#5F5E5A', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
        {expanded ? text : preview}
      </p>
      {hasMore && (
        <button
          onClick={() => setExpanded(e => !e)}
          style={{ color: '#EF4136', fontWeight: 800, fontSize: '0.8rem', background: 'none', border: 'none', padding: '6px 0 0', cursor: 'pointer' }}
        >
          {expanded ? 'Show less ↑' : 'Read more ↓'}
        </button>
      )}
    </div>
  )
}

export default function PainResult({ headline, body, feelBetterIntro, feelBetterItems, workSmarterItems, trackerItems, redFlag }) {
  const navigate = useNavigate()

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: 80 }}>
      <h1 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#2C2C2A', lineHeight: 1.3, marginBottom: 16 }}>
        {headline}
      </h1>

      <ExpandableBody text={body} />

      <div style={{ marginBottom: 8 }}>
        <div style={{
          background: '#EF4136', color: 'white', display: 'inline-block',
          borderRadius: 6, padding: '4px 10px', fontSize: '0.7rem', fontWeight: 900,
          letterSpacing: '0.08em', marginBottom: 8,
        }}>
          FEEL BETTER
        </div>
        {feelBetterIntro && (
          <p style={{ color: '#888780', fontSize: '0.8rem', fontStyle: 'italic', lineHeight: 1.5, marginBottom: 8 }}>
            {feelBetterIntro}
          </p>
        )}
        {feelBetterItems.map((item, i) => (
          <StrategyItem key={i} title={item.title} body={item.body} links={item.links} />
        ))}
      </div>

      <div style={{ marginTop: 24, marginBottom: 8 }}>
        <div style={{
          background: '#2C2C2A', color: 'white', display: 'inline-block',
          borderRadius: 6, padding: '4px 10px', fontSize: '0.7rem', fontWeight: 900,
          letterSpacing: '0.08em', marginBottom: 8,
        }}>
          WORK SMARTER
        </div>
        {workSmarterItems.map((item, i) => (
          <StrategyItem key={i} title={item.title} body={item.body} links={item.links} />
        ))}
      </div>

      <button
        onClick={() => navigate('/tracker')}
        style={{
          display: 'block', width: '100%', background: '#EF4136', color: 'white',
          border: 'none', borderRadius: 10, padding: '14px', fontSize: '0.95rem',
          fontWeight: 800, cursor: 'pointer', marginTop: 24, marginBottom: 16,
        }}
      >
        Track your progress →
      </button>

      <div style={{
        background: '#FEF0EF', border: '1.5px solid #EF4136',
        borderRadius: 10, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>⚠️</span>
        <p style={{ color: '#EF4136', fontSize: '0.8rem', lineHeight: 1.5, margin: 0, fontWeight: 600 }}>
          {redFlag}
        </p>
      </div>
    </div>
  )
}
