import React from 'react'

export default function ComingSoonButton({ label }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: '#F7F6F2',
        color: '#888780',
        border: '1px solid #E0DED8',
        borderRadius: 20,
        padding: '4px 12px',
        fontSize: '0.75rem',
        fontWeight: 700,
        marginTop: 6,
        cursor: 'default',
      }}
    >
      {label || 'Coming soon'}
    </span>
  )
}
