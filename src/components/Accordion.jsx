import React, { useState } from 'react'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div style={{ borderBottom: '1px solid #E0DED8' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          padding: '14px 0',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#2C2C2A', flex: 1 }}>{title}</span>
        <span style={{ color: '#EF4136', fontSize: '1.1rem', fontWeight: 900, flexShrink: 0 }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div style={{ paddingBottom: 14, color: '#5F5E5A', fontSize: '0.875rem', lineHeight: 1.6 }}>
          {children}
        </div>
      )}
    </div>
  )
}
