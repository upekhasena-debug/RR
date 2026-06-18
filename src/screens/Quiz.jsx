import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const questions = [
  {
    type: 'tf',
    q: 'There is a correct sitting posture — and if you hold it, you\'ll avoid pain.',
    answer: false,
    explanation: 'Research shows there is no single correct sitting posture, and no consistent link between static posture and pain. Individuals with similar postural deviations experience very different levels of discomfort. What matters more is variability — regularly changing position throughout the day. Your next posture is your best posture.',
    source: 'Source: PMC8701092. PMC8165355.',
  },
  {
    type: 'tf',
    q: 'A standing desk solves the problems caused by sitting all day.',
    answer: false,
    explanation: 'Prolonged standing carries almost the same risks as prolonged sitting. Research has found that jobs requiring prolonged standing are associated with nearly twice the risk of heart disease compared to predominantly sedentary roles. The answer isn\'t sit less or stand more — it\'s move more.',
    source: 'Source: Smith et al. American Journal of Epidemiology. 2018.',
  },
  {
    type: 'mc',
    q: 'After how many minutes of sitting do your deep spinal muscles start to fatigue?',
    options: ['60 minutes', '45 minutes', '20-30 minutes', '90 minutes'],
    correctIndex: 2,
    explanation: 'Research shows deep trunk muscles can begin to fatigue after as little as 20-30 minutes of sustained sitting. As they fatigue, load transfers from active muscle to passive structures — discs, ligaments, and joints. By one hour, measurable discomfort is present across the neck, upper back, lower back, and buttocks regardless of sitting posture.',
    source: 'Source: Trends in Sciences. 2024. PMC4792914.',
  },
  {
    type: 'tf',
    q: 'If you exercise for an hour a day, you\'ve offset the health risks of sitting at a desk.',
    answer: false,
    explanation: 'Even if you hit the WHO guidelines, prolonged sitting for the remaining hours still carries significant independent health risks. Total sedentary time matters separately from structured exercise. The WHO recommends a minimum of 600 MET-minutes per week — but how you move throughout the entire day matters just as much.',
    source: 'Source: WHO Physical Activity Guidelines. 2020.',
  },
  {
    type: 'mc',
    q: 'What percentage of your workday should ideally be spent sitting?',
    options: ['As little as possible', 'Under 50%', 'Around 60%', 'It doesn\'t matter as long as you exercise'],
    correctIndex: 2,
    explanation: 'Research suggests an ideal workday breakdown of roughly 60% sitting, 30% standing, and 10% walking. Studies also show that keeping sitting time below 75% of the workday significantly lowers the risk of back and neck pain. Most desk workers sit for 85-90% of their day — the goal isn\'t perfection, just meaningful reduction.',
    source: 'Source: BMC Public Health.',
  },
  {
    type: 'tf',
    q: 'Taking a coffee break counts as a movement break.',
    answer: false,
    label: 'False — mostly',
    explanation: 'Research comparing active and passive breaks found that active breaks — those involving movement — are significantly more effective at reducing discomfort than passive breaks where you stay seated. A coffee break only counts if you get up, move around, and change your physical position.',
    source: 'Source: PMC9603092.',
  },
]

export default function Quiz() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[current]

  const checkAnswer = (userAnswer) => {
    setSelected(userAnswer)
    let correct = false
    if (q.type === 'tf') {
      correct = userAnswer === q.answer
    } else {
      correct = userAnswer === q.correctIndex
    }
    if (correct) setScore(s => s + 1)
  }

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  const getScoreMsg = () => {
    if (score === 6) return 'Perfect score. You clearly know your body.'
    if (score >= 4) return 'Pretty good — a couple of surprises in there.'
    return 'Some good stuff to take away from that.'
  }

  if (done) {
    return (
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: 80 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#EF4136' }}>{score}/6</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#2C2C2A', marginTop: 8 }}>{getScoreMsg()}</div>
        </div>
        <p style={{ color: '#5F5E5A', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 32, textAlign: 'center' }}>
          Your box is built around exactly what the research supports — regular movement, soft tissue maintenance, and strengthening the muscles that sitting underuses.
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'block', width: '100%', background: '#EF4136', color: 'white',
            border: 'none', borderRadius: 10, padding: '14px', fontSize: '0.95rem', fontWeight: 800, cursor: 'pointer',
          }}
        >
          Back to home
        </button>
      </div>
    )
  }

  const isAnswered = selected !== null
  const isCorrect = q.type === 'tf' ? selected === q.answer : selected === q.correctIndex

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: 80 }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
        {questions.map((_, i) => (
          <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= current ? '#EF4136' : '#E0DED8' }} />
        ))}
      </div>
      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
        Question {current + 1} of {questions.length}
      </div>

      <p style={{ fontSize: '1.05rem', fontWeight: 800, color: '#2C2C2A', lineHeight: 1.4, marginBottom: 24 }}>
        {q.q}
      </p>

      {!isAnswered && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {q.type === 'tf' ? (
            <>
              <button onClick={() => checkAnswer(true)} style={btnStyle('#EF4136', 'white')}>True</button>
              <button onClick={() => checkAnswer(false)} style={btnStyle('#F7F6F2', '#2C2C2A')}>False</button>
            </>
          ) : (
            q.options.map((opt, i) => (
              <button key={i} onClick={() => checkAnswer(i)} style={btnStyle('#F7F6F2', '#2C2C2A')}>
                <span style={{ fontWeight: 700, color: '#EF4136', marginRight: 8 }}>{String.fromCharCode(65 + i)})</span> {opt}
              </button>
            ))
          )}
        </div>
      )}

      {isAnswered && (
        <div>
          <div style={{
            background: isCorrect ? '#F0FDF4' : '#FEF0EF',
            border: `1.5px solid ${isCorrect ? '#22C55E' : '#EF4136'}`,
            borderRadius: 10, padding: '12px 14px', marginBottom: 16,
          }}>
            <div style={{ fontWeight: 900, fontSize: '0.9rem', color: isCorrect ? '#16A34A' : '#EF4136', marginBottom: 6 }}>
              {isCorrect ? '✓ Correct' : `✗ ${q.label || (q.answer === false ? 'False' : 'True')} — that's the right answer`}
            </div>
            <p style={{ color: '#2C2C2A', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{q.explanation}</p>
            <p style={{ color: '#888780', fontSize: '0.72rem', fontStyle: 'italic', marginTop: 8, marginBottom: 0 }}>{q.source}</p>
          </div>
          <button
            onClick={next}
            style={{
              display: 'block', width: '100%', background: '#EF4136', color: 'white',
              border: 'none', borderRadius: 10, padding: '14px', fontSize: '0.95rem', fontWeight: 800, cursor: 'pointer',
            }}
          >
            {current < questions.length - 1 ? 'Next question →' : 'See my score'}
          </button>
        </div>
      )}
    </div>
  )
}

function btnStyle(bg, color) {
  return {
    background: bg, color, border: '1px solid #E0DED8', borderRadius: 10,
    padding: '14px 16px', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
    textAlign: 'left',
  }
}
