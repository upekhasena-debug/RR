import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductLinkButton({ label, to, comingSoon }) {
  const navigate = useNavigate()

  if (comingSoon) {
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
          marginRight: 6,
        }}
      >
        {label} — Coming soon
      </span>
    )
  }

  return (
    <button
      onClick={() => navigate(to)}
      style={{
        display: 'inline-block',
        background: '#FEF0EF',
        color: '#EF4136',
        border: '1.5px solid #EF4136',
        borderRadius: 20,
        padding: '4px 12px',
        fontSize: '0.75rem',
        fontWeight: 700,
        marginTop: 6,
        cursor: 'pointer',
        marginRight: 6,
      }}
    >
      {label} →
    </button>
  )
}
