import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const questions = [
  "Since buying your box, has your pain significantly worsened — or started stopping you from doing things you want to do?",
  "Have you developed any tingling, numbness, or pain that travels down your arm or leg?",
  "Is pain waking you from sleep more than twice a week?",
]

export default function Safety({ onComplete }) {
  const [current, setCurrent] = useState(0)
  const [showRedirect, setShowRedirect] = useState(false)
  const navigate = useNavigate()

  const handleAnswer = (answer) => {
    if (answer === 'yes') {
      setShowRedirect(true)
      return
    }
    if (current < questions.length - 1) {
      setCurrent(c => c + 1)
    } else {
      complete()
    }
  }

  const complete = () => {
    localStorage.setItem('rr_first_launch', 'true')
    if (onComplete) onComplete()
    navigate('/', { replace: true })
  }

  if (showRedirect) {
    return (
      <div style={{ padding: '24px 20px', flex: 1 }}>
        <div style={{
          background: '#FEF0EF',
          border: '2px solid #EF4136',
          borderRadius: 12,
          padding: '20px 16px',
          marginBottom: 24,
        }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2C2C2A', marginBottom: 12 }}>
            We'd recommend seeing a physio first
          </div>
          <p style={{ color: '#5F5E5A', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 16 }}>
            Based on what you've told us, something may have changed since you purchased your box. A hands-on assessment will give you a clearer picture before you start self-managing.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', gap: 8, marginBottom: 10, color: '#2C2C2A', fontSize: '0.875rem', lineHeight: 1.5 }}>
              <span style={{ color: '#EF4136', fontWeight: 900, flexShrink: 0 }}>→</span>
              See a physiotherapist or your GP for an assessment
            </li>
            <li style={{ display: 'flex', gap: 8, color: '#2C2C2A', fontSize: '0.875rem', lineHeight: 1.5 }}>
              <span style={{ color: '#EF4136', fontWeight: 900, flexShrink: 0 }}>→</span>
              Come back to your box once you have a clearer picture — it'll be here when you're ready
            </li>
          </ul>
          <p style={{ color: '#888780', fontSize: '0.75rem', marginTop: 16, lineHeight: 1.5 }}>
            This isn't a diagnosis — it's us being careful with your health. Your box isn't going anywhere.
          </p>
        </div>

        <button
          style={{
            width: '100%',
            background: '#EF4136',
            color: 'white',
            border: 'none',
            borderRadius: 10,
            padding: '14px',
            fontSize: '0.95rem',
            fontWeight: 800,
            cursor: 'pointer',
            marginBottom: 12,
          }}
          onClick={() => window.location.href = 'https://www.recoveryroad.com.au'}
        >
          Find a physio near me
        </button>

        <button
          style={{
            width: '100%',
            background: 'transparent',
            color: '#888780',
            border: '1px solid #E0DED8',
            borderRadius: 10,
            padding: '12px',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
          }}
          onClick={complete}
        >
          I understand — continue to the app anyway
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: '24px 20px', flex: 1 }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {questions.map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 4,
                borderRadius: 2,
                background: i <= current ? '#EF4136' : '#E0DED8',
              }}
            />
          ))}
        </div>
        <div style={{ color: '#888780', fontSize: '0.75rem', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Quick check — {current + 1} of {questions.length}
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#2C2C2A', lineHeight: 1.5, marginBottom: 32 }}>
          {questions[current]}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <button
          style={{
            background: '#EF4136',
            color: 'white',
            border: 'none',
            borderRadius: 10,
            padding: '16px',
            fontSize: '1rem',
            fontWeight: 800,
            cursor: 'pointer',
          }}
          onClick={() => handleAnswer('yes')}
        >
          Yes
        </button>
        <button
          style={{
            background: '#F7F6F2',
            color: '#2C2C2A',
            border: '1px solid #E0DED8',
            borderRadius: 10,
            padding: '16px',
            fontSize: '1rem',
            fontWeight: 800,
            cursor: 'pointer',
          }}
          onClick={() => handleAnswer('no')}
        >
          No
        </button>
      </div>
    </div>
  )
}
