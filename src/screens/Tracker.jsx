import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const today = () => new Date().toISOString().split('T')[0]

const areaTrackers = {
  neck: {
    label: 'Neck & Head',
    scores: [
      { key: 'headache', label: 'Headache intensity today' },
      { key: 'neck_tension', label: 'Neck tension today' },
    ],
    yesno: [
      { key: 'movement_breaks', label: 'Movement breaks taken' },
      { key: 'neck_massager', label: 'Used neck massager' },
      { key: 'screen_eye_level', label: 'Screen at eye level today' },
      { key: 'heat_patch', label: 'Used heat patch' },
    ],
  },
  upperback: {
    label: 'Upper Back & Shoulders',
    scores: [
      { key: 'upper_back', label: 'Upper back tension today' },
      { key: 'shoulder', label: 'Shoulder tightness today' },
    ],
    yesno: [
      { key: 'movement_breaks', label: 'Movement breaks taken' },
      { key: 'backmagic', label: 'Used BackMagic today' },
      { key: 'peanut_ball', label: 'Did peanut ball release' },
      { key: 'strengthening', label: 'Did strengthening exercises' },
      { key: 'mouse_close', label: 'Mouse close to body today' },
    ],
  },
  lower: {
    endday: {
      label: 'Lower Back (builds through day)',
      scores: [{ key: 'lower_back', label: 'Lower back pain today' }],
      yesno: [
        { key: 'lumbar_roll', label: 'Used lumbar roll all day' },
        { key: 'movement_breaks', label: 'Movement breaks taken' },
        { key: 'backmagic', label: 'Did BackMagic today' },
        { key: 'peanut_ball', label: 'Did peanut ball release' },
        { key: 'strengthening', label: 'Did strengthening exercises' },
      ],
    },
    morning: {
      label: 'Lower Back (morning stiffness)',
      scores: [{ key: 'lower_back_waking', label: 'Lower back stiffness on waking' }],
      yesno: [
        { key: 'morning_movement', label: 'Did morning movement before sitting' },
        { key: 'heat_patch', label: 'Used heat patch this morning' },
        { key: 'cobra', label: 'Did cobra extensions' },
        { key: 'lumbar_roll', label: 'Used lumbar roll all day' },
      ],
    },
    always: {
      label: 'Lower Back (constant)',
      scores: [{ key: 'lower_back', label: 'Lower back pain today' }],
      yesno: [
        { key: 'lumbar_roll', label: 'Used lumbar roll all day' },
        { key: 'movement_breaks', label: 'Movement breaks taken' },
        { key: 'backmagic', label: 'Did BackMagic today' },
        { key: 'peanut_ball', label: 'Did peanut ball release' },
        { key: 'strengthening', label: 'Did strengthening exercises' },
      ],
    },
  },
  wrist: {
    label: 'Wrist & Forearm',
    scores: [{ key: 'wrist', label: 'Wrist and forearm discomfort today' }],
    yesno: [
      { key: 'wrist_pad', label: 'Used wrist neutraliser pad' },
      { key: 'forearm_stretches', label: 'Did forearm stretches' },
      { key: 'micro_breaks', label: 'Took movement micro-breaks' },
      { key: 'forearm_strengthening', label: 'Did forearm strengthening' },
    ],
  },
}

function getTrackerConfig() {
  const area = localStorage.getItem('rr_niggle_area')
  const timing = localStorage.getItem('rr_lower_back_timing')
  if (!area) return null
  if (area === 'lower') {
    const sub = areaTrackers.lower[timing] || areaTrackers.lower.endday
    return sub
  }
  return areaTrackers[area]
}

function PainScale({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#2C2C2A', marginBottom: 10 }}>{label}</div>
      <div style={{ display: 'flex', gap: 6 }}>
        {[1,2,3,4,5,6,7,8,9,10].map(n => (
          <button
            key={n}
            onClick={() => onChange(n)}
            style={{
              flex: 1, padding: '10px 0', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: value === n ? '#EF4136' : (n <= (value || 0) ? '#FEF0EF' : '#F7F6F2'),
              color: value === n ? 'white' : '#2C2C2A',
              fontWeight: 800, fontSize: '0.8rem',
            }}
          >
            {n}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <span style={{ fontSize: '0.65rem', color: '#888780' }}>None</span>
        <span style={{ fontSize: '0.65rem', color: '#888780' }}>Severe</span>
      </div>
    </div>
  )
}

function YesNo({ label, value, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #E0DED8' }}>
      <span style={{ fontSize: '0.875rem', color: '#2C2C2A', fontWeight: 600, flex: 1, paddingRight: 12 }}>{label}</span>
      <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
        <button
          onClick={() => onChange(true)}
          style={{
            padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.8rem',
            background: value === true ? '#EF4136' : '#F7F6F2',
            color: value === true ? 'white' : '#888780',
          }}
        >Yes</button>
        <button
          onClick={() => onChange(false)}
          style={{
            padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.8rem',
            background: value === false ? '#2C2C2A' : '#F7F6F2',
            color: value === false ? 'white' : '#888780',
          }}
        >No</button>
      </div>
    </div>
  )
}

export default function Tracker() {
  const navigate = useNavigate()
  const config = getTrackerConfig()
  const dateKey = `rr_tracker_${today()}`

  const [saved, setSaved] = useState(false)
  const [scores, setScores] = useState({})
  const [checks, setChecks] = useState({})

  useEffect(() => {
    const existing = localStorage.getItem(dateKey)
    if (existing) {
      const data = JSON.parse(existing)
      setScores(data.scores || {})
      setChecks(data.checks || {})
      setSaved(true)
    }
  }, [dateKey])

  if (!config) {
    return (
      <div style={{ flex: 1, padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <p style={{ color: '#5F5E5A', fontSize: '0.9rem', textAlign: 'center', lineHeight: 1.6 }}>
          To use the tracker, first go through the pain pathway and tell us where your niggle is.
        </p>
        <button
          onClick={() => navigate('/pain')}
          style={{ background: '#EF4136', color: 'white', border: 'none', borderRadius: 10, padding: '14px 24px', fontSize: '0.95rem', fontWeight: 800, cursor: 'pointer' }}
        >
          Find my pain pathway →
        </button>
      </div>
    )
  }

  const handleSave = () => {
    const data = { scores, checks, date: today() }
    localStorage.setItem(dateKey, JSON.stringify(data))
    setSaved(true)
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: 80 }}>
      <h1 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2C2C2A', marginBottom: 4 }}>Today's check-in</h1>
      <div style={{ color: '#888780', fontSize: '0.8rem', marginBottom: 20 }}>
        {config.label} · {new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' })}
      </div>

      <div style={{ marginBottom: 24 }}>
        {config.scores.map(s => (
          <PainScale
            key={s.key}
            label={s.label}
            value={scores[s.key]}
            onChange={v => setScores(p => ({ ...p, [s.key]: v }))}
          />
        ))}
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#2C2C2A', marginBottom: 8 }}>What I did today</div>
        {config.yesno.map(y => (
          <YesNo
            key={y.key}
            label={y.label}
            value={checks[y.key]}
            onChange={v => setChecks(p => ({ ...p, [y.key]: v }))}
          />
        ))}
      </div>

      {saved ? (
        <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 10, padding: '12px 14px', textAlign: 'center', marginBottom: 16 }}>
          <span style={{ color: '#16A34A', fontWeight: 800, fontSize: '0.9rem' }}>✓ Check-in saved for today</span>
        </div>
      ) : (
        <button
          onClick={handleSave}
          style={{
            display: 'block', width: '100%', background: '#EF4136', color: 'white',
            border: 'none', borderRadius: 10, padding: '14px', fontSize: '0.95rem', fontWeight: 800, cursor: 'pointer', marginBottom: 16,
          }}
        >
          Save today's check-in
        </button>
      )}

      <div style={{ background: '#F7F6F2', border: '1px solid #E0DED8', borderRadius: 10, padding: '12px 14px' }}>
        <p style={{ color: '#888780', fontSize: '0.78rem', lineHeight: 1.5, margin: 0 }}>
          What to look for: Improving week on week = right track. Same or worsening after 2 weeks = time to see a physio.
        </p>
      </div>
    </div>
  )
}
