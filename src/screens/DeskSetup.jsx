import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Accordion from '../components/Accordion'
import ProductLinkButton from '../components/ProductLinkButton'

const fallbackSections = [
  {
    title: '1. Screen height and distance',
    body: 'Top of monitor at or just below eye level. A laptop flat on a desk means your head tilts forward and down all day, dramatically increasing neck load. Distance: roughly arm\'s length. If squinting or leaning forward, increase font size rather than moving closer.',
  },
  {
    title: '2. Chair height and lumbar support',
    body: 'Set chair so feet are flat on the floor with knees at roughly 90 degrees. Your lumbar roll goes between the chair and the small of your back at belt level — not the middle. It should maintain the natural inward curve, not push you into an exaggerated arch.',
    links: [{ label: 'Lumbar Roll guide', to: '/product/lumbar' }],
  },
  {
    title: '3. Keyboard and mouse position',
    body: 'Elbows at roughly 90 degrees, close to your body. Wrists neutral — not bent up or down while typing. If your mouse is too far away, your shoulder rotates outward and your upper trap engages to reach it all day.',
  },
  {
    title: '4. Laptop vs desktop — the biggest issue',
    body: 'A laptop on a desk is the single most common ergonomic problem. Fix: external keyboard and mouse, laptop on a stand at eye level. This one change makes more difference than almost anything else.',
  },
  {
    title: '5. The most important setup tip',
    body: 'No setup eliminates the need for movement. Even a perfectly configured workstation causes stiffness if you sit for hours. Set a timer for every 30-45 minutes. Stand up. Walk for 2 minutes. This outperforms any ergonomic chair or desk adjustment.',
  },
]

export default function DeskSetup() {
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)
  const fileRef = useRef()
  const cameraRef = useRef()

  const handleFile = (file) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = (e) => {
      setImage(e.target.result)
      setResults(null)
      setError(null)
    }
    reader.readAsDataURL(file)
  }

  const analyseDesk = async () => {
    if (!image) return
    setLoading(true)
    setError(null)
    try {
      const base64 = image.split(',')[1]
      const res = await fetch('/api/analyse-desk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64 }),
      })
      if (!res.ok) throw new Error('Analysis failed')
      const data = await res.json()
      setResults(data)
    } catch (e) {
      setError('Something went wrong with the analysis. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: 80 }}>
      <h1 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2C2C2A', marginBottom: 8 }}>
        How should I set up my desk?
      </h1>
      <p style={{ color: '#5F5E5A', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 24 }}>
        Show us your setup and we'll tell you what to change.
      </p>

      {!image ? (
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: '0.8rem', color: '#888780', marginBottom: 16, lineHeight: 1.5 }}>
            Take the photo from the side so we can see your screen height, chair height, and how your arms sit.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button
              onClick={() => cameraRef.current.click()}
              style={{
                background: '#EF4136', color: 'white', border: 'none', borderRadius: 10,
                padding: '16px', fontSize: '0.95rem', fontWeight: 800, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}
            >
              📷 Take a photo of your desk
            </button>
            <button
              onClick={() => fileRef.current.click()}
              style={{
                background: '#F7F6F2', color: '#2C2C2A', border: '1px solid #E0DED8', borderRadius: 10,
                padding: '14px', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
              }}
            >
              Upload from camera roll
            </button>
          </div>
          <input ref={cameraRef} type="file" accept="image/*" capture="environment" style={{ display: 'none' }} onChange={e => handleFile(e.target.files[0])} />
          <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => handleFile(e.target.files[0])} />
        </div>
      ) : (
        <div style={{ marginBottom: 24 }}>
          <img src={image} alt="Your desk setup" style={{ width: '100%', borderRadius: 10, marginBottom: 12, maxHeight: 240, objectFit: 'cover' }} />
          {!results && !loading && (
            <button
              onClick={analyseDesk}
              style={{
                display: 'block', width: '100%', background: '#EF4136', color: 'white',
                border: 'none', borderRadius: 10, padding: '14px', fontSize: '0.95rem', fontWeight: 800, cursor: 'pointer',
              }}
            >
              Analyse my setup →
            </button>
          )}
          {loading && (
            <div style={{ textAlign: 'center', padding: '20px 0', color: '#888780', fontWeight: 700 }}>
              Analysing your setup...
            </div>
          )}
          {error && (
            <div style={{ color: '#EF4136', fontSize: '0.85rem', marginBottom: 8 }}>{error}</div>
          )}
        </div>
      )}

      {results && Array.isArray(results) && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 900, fontSize: '1rem', color: '#2C2C2A', marginBottom: 12 }}>Your setup analysis</div>
          {results.map((item, i) => (
            <div key={i} style={{
              background: item.status === 'good' ? '#F0FDF4' : '#FEF0EF',
              border: `1px solid ${item.status === 'good' ? '#BBF7D0' : '#FECACA'}`,
              borderRadius: 10, padding: '12px 14px', marginBottom: 10,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>{item.status === 'good' ? '✓' : '⚠'}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.875rem', color: '#2C2C2A', marginBottom: 4 }}>{item.observation}</div>
                  <div style={{ fontSize: '0.8rem', color: '#5F5E5A', lineHeight: 1.5 }}>{item.recommendation}</div>
                  {item.product && (
                    <ProductLinkButton label={item.product} to={`/product/${item.product.toLowerCase().replace(/\s+/g, '')}`} />
                  )}
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => { setImage(null); setResults(null) }}
            style={{
              marginTop: 8, background: '#F7F6F2', color: '#2C2C2A', border: '1px solid #E0DED8',
              borderRadius: 10, padding: '12px', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', width: '100%',
            }}
          >
            Update my setup photo
          </button>
        </div>
      )}

      <div style={{ borderTop: '1px solid #E0DED8', paddingTop: 20 }}>
        <div style={{ fontWeight: 900, fontSize: '1rem', color: '#2C2C2A', marginBottom: 12 }}>
          The essential desk setup guide
        </div>
        {fallbackSections.map((s, i) => (
          <Accordion key={i} title={s.title}>
            <p style={{ margin: 0, marginBottom: s.links ? 8 : 0 }}>{s.body}</p>
            {s.links && s.links.map((l, j) => <ProductLinkButton key={j} label={l.label} to={l.to} />)}
          </Accordion>
        ))}
      </div>
    </div>
  )
}
