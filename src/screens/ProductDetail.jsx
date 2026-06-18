import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Accordion from '../components/Accordion'

const products = {
  lumbar: {
    name: 'Lumbar Roll',
    emoji: '🪑',
    why: 'Maintains the natural inward curve of your lower back while sitting. Without support the lower back flattens, increasing disc load and fatiguing the lumbar muscles.',
    sections: [
      {
        title: 'How to position it',
        items: [
          'Place between lower back and chair back — at belt level',
          'Sit snugly against it so it fills the gap between spine and chair',
          'You should feel supported, not pushed forward',
          'If it pushes you too far forward, move it slightly lower',
        ],
      },
      {
        title: 'When to use it',
        items: [
          'Whenever sitting at your desk',
          'Long car journeys or flights',
          'Any time sitting for more than 20-30 minutes',
        ],
      },
    ],
  },
  backmagic: {
    name: 'BackMagic',
    emoji: '🔧',
    why: 'Releases and mobilises the thoracic spine — one of the most commonly stiff areas in desk workers. Thoracic mobility is the connection point between your lower back and neck.',
    sections: [
      {
        title: 'How to use it',
        items: [
          'Place on the floor',
          'Lie back so it sits across mid-back between shoulder blades',
          'Arms crossed over chest or hands behind head',
          'Breathe out and let your weight sink over the device',
          '30-60 seconds per position, move up or down one segment at a time',
        ],
      },
      {
        title: 'When to use it',
        items: [
          'Mid-day: 5 minutes at lunch is ideal',
          'End of day: 5-10 minutes to decompress',
          'NOT first thing in the morning when discs are most pressurised',
        ],
      },
    ],
  },
  wristpad: {
    name: 'Wrist Neutraliser Pad',
    emoji: '⌨️',
    why: 'Keeps your wrist in a neutral position while typing and using a mouse. Repetitive typing with a bent wrist increases load on the tendons and nerves passing through the wrist.',
    sections: [
      {
        title: 'How to use it',
        items: [
          'Place so wrist rests naturally while using mouse or keyboard',
          'Forearm roughly parallel to desk, wrist straight',
          'Use as resting position between typing bursts — not during active keystrokes',
        ],
      },
      {
        title: 'Daily wrist mobility',
        items: [
          'Wrist circles: 10 each direction, both hands',
          'Prayer stretch: palms together, lower hands until forearm stretch. Hold 20-30 seconds',
          'Reverse prayer: backs of hands together, raise them. Hold 20-30 seconds',
        ],
      },
    ],
  },
  posturedevice: {
    name: 'Posture Device',
    emoji: '📡',
    why: 'Sits between your shoulder blades and vibrates when you move out of an upright position. Works through biofeedback — training awareness so you self-correct before the fatigue cycle starts.',
    sections: [
      {
        title: 'How to use it',
        items: [
          'Place between and just above shoulder blades',
          'Calibrate in your upright position — this becomes your baseline',
          'Wear 2-4 hour blocks — not all day. Constant feedback leads to habituation',
          'When it vibrates: sit tall through the crown of your head, not just straighten',
        ],
      },
      {
        title: 'What it doesn\'t do',
        items: [
          'Doesn\'t fix underlying muscle weakness — pair with Theraband exercises',
          'Movement breaks still essential — the device manages posture during sitting, not the sitting itself',
        ],
      },
    ],
  },
  neckmassager: {
    name: 'Neck Massager',
    emoji: '💆',
    why: 'Releases tension in the upper trapezius, levator scapulae, and suboccipital muscles — chronically overloaded in desk workers.',
    sections: [
      {
        title: 'Upper trap and neck',
        items: [
          'Apply to upper trapezius — ridge between neck and shoulder',
          'Moderate pressure — firm enough to feel, not painful',
          'Slow circular movements or sustained pressure on tender spots',
          '1-2 minutes each side — mid-afternoon is ideal',
        ],
      },
      {
        title: 'Base of skull',
        items: [
          'Position at base of skull where neck muscles attach',
          'Gentle pressure — this area is sensitive',
          'Hold on tender spots 20-30 seconds',
        ],
      },
    ],
  },
  theraband: {
    name: 'Therabands',
    emoji: '🏋️',
    why: 'Addresses the muscle imbalances created by desk work. The card deck has the full exercise program.',
    sections: [
      {
        title: 'Key exercises',
        items: [
          'Scapular retraction — anchor at chest height, pull band squeezing shoulder blades. 15 reps, 3 sets.',
          'Y-raise — raise arms in Y shape overhead, lower slowly. 10-15 reps, 2-3 sets.',
          'Lateral band walks — band around ankles, step sideways. 15 steps each direction, 2-3 sets.',
        ],
      },
      {
        title: 'When to use it',
        items: [
          '5 minutes at end of day, every day',
          'Full activation, stretching and strengthening programs are in the Theraband card deck',
        ],
      },
    ],
  },
  heatpatch: {
    name: 'Heat Patch',
    emoji: '🔥',
    why: 'Increases blood flow to the tissue and reduces muscle guarding — particularly useful first thing in the morning before you load the spine or neck.',
    sections: [
      {
        title: 'How to use it',
        items: [
          'Apply to the neck and upper traps or lower back depending on your pain area',
          'Use in the morning before your first sitting session',
          '10 minutes is enough — a warm shower achieves the same effect',
          'Morning use only — not recommended as an end-of-day rescue tool',
        ],
      },
    ],
  },
  peanutball: {
    name: 'Peanut Ball',
    emoji: '⚽',
    why: 'Self-massage tool for the muscles most chronically overloaded in desk workers. Use it proactively — daily maintenance rather than waiting until you\'re in pain.',
    sections: [
      {
        title: 'For neck and upper back',
        items: [
          'Suboccipitals — base of skull. Gentle pressure, hold 20-30 seconds on tender spots.',
          'Upper traps — ridge between neck and shoulder',
          'Levator scapulae — side of neck',
          'Rhomboids — between shoulder blade and spine',
          'Pec minor — chest, just below the collarbone',
        ],
      },
      {
        title: 'For lower back',
        items: [
          'QL — side of lower back between hip and ribs',
          'Upper fibre glutes — top of the glute, near the sacrum',
          'Piriformis — deep in the glute, lateral hip area',
          'Hip flexors — front of hip, just below the hip bone',
        ],
      },
    ],
  },
}

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products[id]

  if (!product) {
    return (
      <div style={{ flex: 1, padding: '20px 16px' }}>
        <p style={{ color: '#5F5E5A' }}>Product not found.</p>
        <button onClick={() => navigate(-1)} style={{ color: '#EF4136', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 700 }}>← Go back</button>
      </div>
    )
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: 80 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <span style={{ fontSize: '2.5rem' }}>{product.emoji}</span>
        <h1 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2C2C2A', margin: 0 }}>{product.name}</h1>
      </div>

      <div style={{ background: '#FEF0EF', borderRadius: 10, padding: '12px 14px', marginBottom: 24 }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#EF4136', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
          Why it's in the box
        </div>
        <p style={{ color: '#2C2C2A', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{product.why}</p>
      </div>

      {product.sections.map((s, i) => (
        <Accordion key={i} title={s.title} defaultOpen={i === 0}>
          <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
            {s.items.map((item, j) => (
              <li key={j} style={{ display: 'flex', gap: 8, marginBottom: 8, color: '#5F5E5A', fontSize: '0.875rem', lineHeight: 1.5 }}>
                <span style={{ color: '#EF4136', fontWeight: 900, flexShrink: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </Accordion>
      ))}

      <div style={{ marginTop: 24 }}>
        <button
          style={{
            width: '100%', background: '#F7F6F2', color: '#888780', border: '1px solid #E0DED8',
            borderRadius: 10, padding: '12px', fontSize: '0.85rem', fontWeight: 700, cursor: 'default',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
        >
          🎬 Video guide — coming soon
        </button>
      </div>
    </div>
  )
}
