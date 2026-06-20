import React, { useState, useRef, useEffect } from 'react'

const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

function HoldTimer({ storageKey, label, onSave }) {
  const [state, setState] = useState('idle') // idle | running | stopped
  const [elapsed, setElapsed] = useState(0)
  const [savedResult, setSavedResult] = useState(null)
  const intervalRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    // Find most recent saved result
    const keys = Object.keys(localStorage).filter(k => k.startsWith(storageKey + '_')).sort().reverse()
    if (keys.length > 0) {
      const date = keys[0].replace(storageKey + '_', '')
      const val = parseInt(localStorage.getItem(keys[0]))
      const days = Math.floor((Date.now() - new Date(date).getTime()) / 86400000)
      setSavedResult({ value: val, date, days })
    }
  }, [storageKey])

  const start = () => {
    setState('running')
    startRef.current = Date.now() - elapsed * 1000
    intervalRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1000))
    }, 100)
  }

  const stop = () => {
    clearInterval(intervalRef.current)
    setState('stopped')
  }

  const save = () => {
    const date = new Date().toISOString().split('T')[0]
    localStorage.setItem(`${storageKey}_${date}`, elapsed)
    setSavedResult({ value: elapsed, date, days: 0 })
    if (onSave) onSave(elapsed)
    setState('idle')
    setElapsed(0)
  }

  const reset = () => {
    clearInterval(intervalRef.current)
    setState('idle')
    setElapsed(0)
  }

  const trend = savedResult ? (elapsed > savedResult.value ? '↑' : elapsed < savedResult.value ? '↓' : '→') : null

  return (
    <div style={{ background: '#F7F6F2', borderRadius: 10, padding: '16px', marginBottom: 12 }}>
      {label && <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#EF4136', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{label}</div>}

      {savedResult && (
        <div style={{ fontSize: '0.8rem', color: '#888780', marginBottom: 10 }}>
          Last time: <strong>{fmt(savedResult.value)}</strong>
          {savedResult.days > 0 && ` — ${savedResult.days} day${savedResult.days !== 1 ? 's' : ''} ago`}
          {savedResult.days >= 14 && (
            <div style={{ color: '#EF4136', fontWeight: 700, marginTop: 4 }}>Time to retest — it's been 2 weeks</div>
          )}
        </div>
      )}

      <div style={{ fontSize: 56, fontWeight: 900, color: '#2C2C2A', textAlign: 'center', fontVariantNumeric: 'tabular-nums', lineHeight: 1, marginBottom: 16 }}>
        {fmt(elapsed)}
      </div>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {state === 'idle' && (
          <button onClick={start} style={timerBtn('#EF4136', 'white')}>START</button>
        )}
        {state === 'running' && (
          <button onClick={stop} style={timerBtn('#2C2C2A', 'white')}>STOP</button>
        )}
        {state === 'stopped' && (
          <>
            <button onClick={save} style={timerBtn('#EF4136', 'white')}>
              SAVE {trend && <span style={{ fontSize: '1.1rem' }}>{trend}</span>}
            </button>
            <button onClick={reset} style={timerBtn('#F7F6F2', '#888780', '1px solid #E0DED8')}>RESET</button>
          </>
        )}
      </div>
    </div>
  )
}

function RepsTimer({ storageKey, label, onSave }) {
  const [state, setState] = useState('idle') // idle | running | stopped
  const [timeLeft, setTimeLeft] = useState(60)
  const [reps, setReps] = useState(0)
  const [savedResult, setSavedResult] = useState(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    const keys = Object.keys(localStorage).filter(k => k.startsWith(storageKey + '_')).sort().reverse()
    if (keys.length > 0) {
      const date = keys[0].replace(storageKey + '_', '')
      const val = parseInt(localStorage.getItem(keys[0]))
      const days = Math.floor((Date.now() - new Date(date).getTime()) / 86400000)
      setSavedResult({ value: val, date, days })
    }
  }, [storageKey])

  const start = () => {
    setState('running')
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(intervalRef.current)
          setState('stopped')
          return 0
        }
        return t - 1
      })
    }, 1000)
  }

  const addRep = () => {
    if (state === 'running') setReps(r => r + 1)
  }

  const save = () => {
    const date = new Date().toISOString().split('T')[0]
    localStorage.setItem(`${storageKey}_${date}`, reps)
    setSavedResult({ value: reps, date, days: 0 })
    if (onSave) onSave(reps)
    setState('idle')
    setTimeLeft(60)
    setReps(0)
  }

  const reset = () => {
    clearInterval(intervalRef.current)
    setState('idle')
    setTimeLeft(60)
    setReps(0)
  }

  return (
    <div style={{ background: '#F7F6F2', borderRadius: 10, padding: '16px', marginBottom: 12 }}>
      {label && <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#EF4136', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{label}</div>}

      {savedResult && (
        <div style={{ fontSize: '0.8rem', color: '#888780', marginBottom: 10 }}>
          Last time: <strong>{savedResult.value} reps</strong>
          {savedResult.days > 0 && ` — ${savedResult.days} day${savedResult.days !== 1 ? 's' : ''} ago`}
          {savedResult.days >= 14 && (
            <div style={{ color: '#EF4136', fontWeight: 700, marginTop: 4 }}>Time to retest — it's been 2 weeks</div>
          )}
        </div>
      )}

      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <div style={{ fontSize: 40, fontWeight: 900, color: '#888780', fontVariantNumeric: 'tabular-nums' }}>{fmt(timeLeft)}</div>
        <div style={{ fontSize: 64, fontWeight: 900, color: '#2C2C2A', lineHeight: 1 }}>{reps}</div>
        <div style={{ fontSize: '0.75rem', color: '#888780', marginTop: 4 }}>reps</div>
      </div>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
        {state === 'idle' && (
          <button onClick={start} style={timerBtn('#EF4136', 'white')}>START</button>
        )}
        {state === 'running' && (
          <button onClick={addRep} style={{ ...timerBtn('#2C2C2A', 'white'), fontSize: '1rem', padding: '16px 28px' }}>
            TAP TO COUNT
          </button>
        )}
        {state === 'stopped' && (
          <>
            <div style={{ width: '100%', textAlign: 'center', fontWeight: 900, fontSize: '1.1rem', color: '#2C2C2A', marginBottom: 8 }}>
              {reps} reps
            </div>
            <button onClick={save} style={timerBtn('#EF4136', 'white')}>SAVE RESULT</button>
            <button onClick={reset} style={timerBtn('#F7F6F2', '#888780', '1px solid #E0DED8')}>RESET</button>
          </>
        )}
      </div>
    </div>
  )
}

function BestOf3Timer({ storageKey, label, trials = 3, onSave }) {
  const [attempt, setAttempt] = useState(0)
  const [results, setResults] = useState([])
  const [state, setState] = useState('idle')
  const [elapsed, setElapsed] = useState(0)
  const [savedResult, setSavedResult] = useState(null)
  const intervalRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    const keys = Object.keys(localStorage).filter(k => k.startsWith(storageKey + '_')).sort().reverse()
    if (keys.length > 0) {
      const date = keys[0].replace(storageKey + '_', '')
      const val = parseInt(localStorage.getItem(keys[0]))
      const days = Math.floor((Date.now() - new Date(date).getTime()) / 86400000)
      setSavedResult({ value: val, date, days })
    }
  }, [storageKey])

  const best = results.length > 0 ? Math.max(...results) : null

  const start = () => {
    setState('running')
    startRef.current = Date.now()
    intervalRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1000))
    }, 100)
  }

  const stop = () => {
    clearInterval(intervalRef.current)
    const newResults = [...results, elapsed]
    setResults(newResults)
    setState('stopped')
  }

  const next = () => {
    setElapsed(0)
    setAttempt(a => a + 1)
    setState('idle')
  }

  const save = () => {
    const b = Math.max(...results)
    const date = new Date().toISOString().split('T')[0]
    localStorage.setItem(`${storageKey}_${date}`, b)
    setSavedResult({ value: b, date, days: 0 })
    if (onSave) onSave(b)
    setAttempt(0)
    setResults([])
    setState('idle')
    setElapsed(0)
  }

  const reset = () => {
    clearInterval(intervalRef.current)
    setAttempt(0)
    setResults([])
    setState('idle')
    setElapsed(0)
  }

  const done = results.length >= trials

  return (
    <div style={{ background: '#F7F6F2', borderRadius: 10, padding: '16px', marginBottom: 12 }}>
      {label && <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#EF4136', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{label}</div>}

      {savedResult && (
        <div style={{ fontSize: '0.8rem', color: '#888780', marginBottom: 10 }}>
          Last time: <strong>{fmt(savedResult.value)}</strong>
          {savedResult.days > 0 && ` — ${savedResult.days} day${savedResult.days !== 1 ? 's' : ''} ago`}
          {savedResult.days >= 14 && (
            <div style={{ color: '#EF4136', fontWeight: 700, marginTop: 4 }}>Time to retest — it's been 2 weeks</div>
          )}
        </div>
      )}

      <div style={{ fontSize: '0.75rem', color: '#888780', marginBottom: 8 }}>
        Trial {Math.min(attempt + 1, trials)} of {trials}
        {results.length > 0 && <span style={{ marginLeft: 12 }}>Results: {results.map(fmt).join(', ')}</span>}
      </div>

      {!done && (
        <>
          <div style={{ fontSize: 56, fontWeight: 900, color: '#2C2C2A', textAlign: 'center', fontVariantNumeric: 'tabular-nums', lineHeight: 1, marginBottom: 16 }}>
            {fmt(elapsed)}
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            {state === 'idle' && <button onClick={start} style={timerBtn('#EF4136', 'white')}>START</button>}
            {state === 'running' && <button onClick={stop} style={timerBtn('#2C2C2A', 'white')}>STOP</button>}
            {state === 'stopped' && (
              <>
                {attempt < trials - 1
                  ? <button onClick={next} style={timerBtn('#EF4136', 'white')}>NEXT TRIAL</button>
                  : null}
                <button onClick={reset} style={timerBtn('#F7F6F2', '#888780', '1px solid #E0DED8')}>RESET</button>
              </>
            )}
          </div>
        </>
      )}

      {done && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', color: '#888780', marginBottom: 8 }}>Best of {trials} trials</div>
          <div style={{ fontSize: 48, fontWeight: 900, color: '#EF4136', marginBottom: 16 }}>{fmt(best)}</div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            <button onClick={save} style={timerBtn('#EF4136', 'white')}>SAVE RESULT</button>
            <button onClick={reset} style={timerBtn('#F7F6F2', '#888780', '1px solid #E0DED8')}>RESET</button>
          </div>
        </div>
      )}
    </div>
  )
}

function SidedTimers({ leftKey, rightKey, leftLabel, rightLabel, mode = 'hold', threshold, thresholdMsg, onBothSaved }) {
  const [leftDone, setLeftDone] = useState(false)
  const [rightDone, setRightDone] = useState(false)
  const [leftVal, setLeftVal] = useState(null)
  const [rightVal, setRightVal] = useState(null)

  const handleLeftSave = (v) => { setLeftVal(v); setLeftDone(true) }
  const handleRightSave = (v) => { setRightVal(v); setRightDone(true) }

  const diff = leftVal !== null && rightVal !== null ? Math.abs(leftVal - rightVal) : null

  const TimerComp = mode === 'reps' ? RepsTimer : (mode === 'bestof3' ? BestOf3Timer : HoldTimer)

  return (
    <div>
      <TimerComp storageKey={leftKey} label={leftLabel} onSave={handleLeftSave} />
      {leftDone && <TimerComp storageKey={rightKey} label={rightLabel} onSave={handleRightSave} />}
      {diff !== null && (
        <div style={{
          background: diff > (threshold || 10) ? '#FEF0EF' : '#F0FDF4',
          border: `1px solid ${diff > (threshold || 10) ? '#EF4136' : '#BBF7D0'}`,
          borderRadius: 10, padding: '10px 14px', marginTop: 8, fontSize: '0.85rem', fontWeight: 700,
          color: diff > (threshold || 10) ? '#EF4136' : '#16A34A',
        }}>
          {diff > (threshold || 10)
            ? (thresholdMsg || `There's a gap between sides worth working on (${mode === 'reps' ? diff + ' reps' : fmt(diff)})`)
            : 'Both sides looking balanced — nice work'}
        </div>
      )}
    </div>
  )
}

function timerBtn(bg, color, border) {
  return {
    background: bg, color, border: border || 'none', borderRadius: 10,
    padding: '14px 24px', fontSize: '0.9rem', fontWeight: 900, cursor: 'pointer',
    letterSpacing: '0.04em', minWidth: 100,
  }
}

export { HoldTimer, RepsTimer, BestOf3Timer, SidedTimers }
