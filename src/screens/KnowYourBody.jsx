import React, { useState } from 'react'
import { HoldTimer, SidedTimers, RepsTimer } from '../components/BenchmarkTimer'

function NoteBox({ children }) {
  return (
    <div style={{
      background: '#FFF8E1', borderLeft: '4px solid #F5C842',
      borderRadius: 6, padding: '10px 12px', marginBottom: 12,
      fontSize: '0.82rem', color: '#2C2C2A', lineHeight: 1.5,
    }}>
      {children}
    </div>
  )
}

function FeelBox({ children }) {
  return (
    <div style={{ background: '#F7F6F2', borderRadius: 8, padding: '10px 12px', margin: '10px 0', fontSize: '0.82rem', fontStyle: 'italic', color: '#5F5E5A', lineHeight: 1.6 }}>
      <span style={{ fontWeight: 800, fontStyle: 'normal', color: '#2C2C2A' }}>Where should you feel it: </span>{children}
    </div>
  )
}

function BenchmarkList({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: '0.82rem', color: '#5F5E5A', lineHeight: 1.5 }}>
          <span style={{ color: '#EF4136', fontWeight: 900, flexShrink: 0 }}>—</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function NumberedSteps({ steps }) {
  return (
    <ol style={{ paddingLeft: 20, margin: '8px 0' }}>
      {steps.map((s, i) => (
        <li key={i} style={{ fontSize: '0.85rem', color: '#5F5E5A', lineHeight: 1.6, marginBottom: 4 }}>{s}</li>
      ))}
    </ol>
  )
}

function Source({ text }) {
  return <div style={{ fontSize: '0.72rem', color: '#888888', marginTop: 12, lineHeight: 1.4 }}>{text}</div>
}

function BenchmarkCard({ tag, hook, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ border: '1px solid #E0DED8', borderRadius: 12, marginBottom: 12, overflow: 'hidden', background: '#FFFFFF' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
      >
        <div style={{ background: '#EF4136', padding: '8px 14px' }}>
          <span style={{ color: 'white', fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{tag}</span>
        </div>
        <div style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <span style={{ fontWeight: 900, fontSize: '1rem', color: '#2C2C2A', lineHeight: 1.3, flex: 1 }}>{hook}</span>
          <span style={{ color: '#EF4136', fontSize: '1.2rem', fontWeight: 900, flexShrink: 0 }}>{open ? '−' : '+'}</span>
        </div>
      </button>
      {open && (
        <div style={{ padding: '0 16px 16px', borderTop: '1px solid #E0DED8' }}>
          {children}
        </div>
      )}
    </div>
  )
}

export default function KnowYourBody() {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px', paddingBottom: 80 }}>
      <p style={{ color: '#5F5E5A', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 20 }}>
        These aren't pass or fail tests. They're benchmarks — a way to see where you're starting from and track whether the work is paying off. Retest every 2 weeks.
      </p>

      {/* Card 1 — Deep Neck Flexors */}
      <BenchmarkCard tag="Neck and head" hook="Your neck has a dirty little secret. Let's find out what it is.">
        <p style={{ fontSize: '0.85rem', color: '#5F5E5A', lineHeight: 1.6, marginTop: 12 }}>
          Most people with neck pain can only hold this for around 21 seconds. Healthy adults should manage 30–39. Now find out where you actually sit.
        </p>
        <NumberedSteps steps={[
          'Lie on your back',
          'Pull your chin straight back — not down, back',
          'Lift your head just off the floor',
          'Start the timer. Hold.',
          'Stop when your neck starts shaking or you can\'t maintain it',
        ]} />
        <FeelBox>Deep at the front of your upper neck — subtle and quiet, not the big muscles bulging on the sides. If those are firing hard, you're compensating. Reset and go again.</FeelBox>
        <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#2C2C2A', marginBottom: 4 }}>Your benchmark</div>
        <BenchmarkList items={[
          'Under 21 seconds — you\'re in good company. Most people with neck pain are here. Time to work on it.',
          '21–30 seconds (women) / 21–39 seconds (men) — you\'re on your way',
          '30+ seconds (women) / 39+ seconds (men) — you\'re hitting the healthy benchmark. Keep it there.',
        ]} />
        <HoldTimer storageKey="rr_benchmark_neck" />
        <Source text="Domenech et al. PM&R. 2011." />
      </BenchmarkCard>

      {/* Card 2 — Front Plank */}
      <BenchmarkCard tag="Lower back and core" hook="Think you have a strong core? Prove it.">
        <p style={{ fontSize: '0.85rem', color: '#5F5E5A', lineHeight: 1.6, marginTop: 12 }}>
          People with lower back pain average around 50 seconds. Healthy adults should manage 72–110 seconds. And just so you know — after 2 minutes you're not building more stability, you're just being stubborn.
        </p>
        <NumberedSteps steps={[
          'Forearms down, elbows under your shoulders',
          'Straight line from head to heels — no sagging, no hiking',
          'Squeeze your glutes. Brace your trunk.',
          'Start the timer. Hold.',
          'Stop when your hips drop or you feel it in your lower back',
        ]} />
        <FeelBox>A deep wrap of tension around your whole trunk — like someone pulled a corset tight. The moment you feel it in your lower back, your core has checked out.</FeelBox>
        <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#2C2C2A', marginBottom: 4 }}>Your benchmark</div>
        <BenchmarkList items={[
          'Under 50 seconds — this is where most people with lower back pain sit. Your starting point.',
          '50–72 seconds (women) / 50–110 seconds (men) — you\'re building toward healthy range',
          '72+ seconds (women) / 110+ seconds (men) — you\'re there. Maintain it.',
          '2 minutes — the ceiling. Beyond this, you\'re just showing off.',
        ]} />
        <HoldTimer storageKey="rr_benchmark_plank" />
        <Source text="McGill S. Low Back Disorders. 2015. Strand et al. J Hum Kinet. 2014." />
      </BenchmarkCard>

      {/* Card 3 — Side Plank */}
      <BenchmarkCard tag="Lower back and core" hook="Most people have one side that gives up embarrassingly fast. Find yours.">
        <p style={{ fontSize: '0.85rem', color: '#5F5E5A', lineHeight: 1.6, marginTop: 12 }}>
          Poor lateral core endurance is linked to lower back pain and lower limb injuries. Do both sides. The gap between them matters as much as the numbers themselves.
        </p>
        <NumberedSteps steps={[
          'On your side, elbow under your shoulder',
          'Lift your hips — straight line from head to feet',
          'Start the timer. Hold.',
          'Stop when your hips drop',
          'Rest 2 minutes. Do the other side.',
        ]} />
        <FeelBox>The outer hip and the side of your trunk on the supporting side. If your shoulder is screaming or your lower back is doing the work — reset. The lateral core should be doing this, not everything else around it.</FeelBox>
        <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#2C2C2A', marginBottom: 4 }}>Your benchmark</div>
        <BenchmarkList items={[
          'Under 72 seconds (women) / under 94 seconds (men) — below healthy range. Work to get there.',
          'At or above those numbers — you\'re hitting the benchmark. Now check the gap between sides.',
          'More than 10 seconds difference between sides — that\'s your priority, regardless of your total time.',
        ]} />
        <SidedTimers
          leftKey="rr_benchmark_sideplank_left"
          rightKey="rr_benchmark_sideplank_right"
          leftLabel="Left side"
          rightLabel="Right side"
          threshold={10}
        />
        <Source text="McGill SM. 1998. Leetun et al. Med Sci Sports Exerc. 2004." />
      </BenchmarkCard>

      {/* Card 4 — Single Leg Balance */}
      <BenchmarkCard tag="Whole body" hook="You think your balance is fine. Close your eyes and say that again.">
        <p style={{ fontSize: '0.85rem', color: '#5F5E5A', lineHeight: 1.6, marginTop: 12 }}>
          Eyes open balance stays surprisingly strong until your 50s. Eyes closed is a completely different story — and it starts declining earlier than most people expect. This one humbles people.
        </p>
        <NumberedSteps steps={[
          'Barefoot on a firm surface',
          'Arms crossed over your chest',
          'Lift one foot off the floor',
          'Close your eyes. Start the timer.',
          'Stop when your foot touches down, you take a step, or your arms leave your chest',
          'Best of 3 trials. Then do the other side.',
        ]} />
        <FeelBox>Your standing glute and outer hip working to keep your pelvis level. Your ankle will wobble — that's completely normal. If you feel it in your lower back, you're compensating with the wrong thing.</FeelBox>
        <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#2C2C2A', marginBottom: 4 }}>Your benchmark — best of 3 trials, eyes closed</div>
        <BenchmarkList items={[
          'Ages 18–39: ~15 seconds is healthy range',
          'Ages 40–49: ~13 seconds is healthy range',
          'Ages 50+: eyes closed gets genuinely hard here. Start with eyes open — 30+ seconds is your target before you attempt eyes closed.',
          'Side to side difference of more than 3–4 seconds — worth paying attention to.',
        ]} />
        <SidedTimers
          leftKey="rr_benchmark_balance_left"
          rightKey="rr_benchmark_balance_right"
          leftLabel="Left leg — best of 3"
          rightLabel="Right leg — best of 3"
          mode="bestof3"
          threshold={4}
          thresholdMsg="There's a gap between sides worth paying attention to (more than 4 seconds)"
        />
        <Source text="Springer et al. Journal of Geriatric Physical Therapy. 2007. n=549." />
      </BenchmarkCard>

      {/* Card 5 — Sit to Stand */}
      <BenchmarkCard tag="Lower body strength" hook="It's just standing up. Except it's really not.">
        <NoteBox>
          Chair height matters more than you think. Use a standard chair — seat height around 43–44cm. Too high and you're cheating. Too low and it's a completely different test. Don't compare results across different chairs.
        </NoteBox>
        <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#2C2C2A', marginTop: 8, marginBottom: 6 }}>Double leg — start here</div>
        <NumberedSteps steps={[
          'Perch at the edge of the chair — back straight, feet flat',
          'Arms crossed over your chest. No pushing off. We mean it.',
          'Stand fully upright, sit back down with control',
          'How many full reps in 1 minute?',
        ]} />
        <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#2C2C2A', marginBottom: 4 }}>Double leg benchmark</div>
        <BenchmarkList items={[
          '30s–40s age group: aim for 35+ reps',
          '50s age group: aim for 30+ reps',
          '60s+: aim for 23+ reps',
        ]} />
        <RepsTimer storageKey="rr_benchmark_sts_double" label="Double leg — 60 second test" />

        <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#2C2C2A', marginTop: 16, marginBottom: 6 }}>Hit your number? Try the single leg version.</div>
        <NumberedSteps steps={[
          'Same setup — lift one foot completely off the floor',
          'Stand and sit on one leg only — control the descent, don\'t crash down',
          'How many full reps in 1 minute?',
          'Rest 2 minutes. Do the other side.',
        ]} />
        <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#2C2C2A', marginBottom: 4 }}>Single leg benchmark</div>
        <BenchmarkList items={[
          '23 or more — solid functional leg strength',
          'Below 23 — that\'s your starting point. Own it.',
          'More than 20% difference between legs — that imbalance is worth addressing',
        ]} />
        <SidedTimers
          leftKey="rr_benchmark_sts_left"
          rightKey="rr_benchmark_sts_right"
          leftLabel="Left leg — 60 second test"
          rightLabel="Right leg — 60 second test"
          mode="reps"
          threshold={5}
          thresholdMsg="There's a gap between sides worth addressing"
        />
        <FeelBox>Front of the thigh and deep in the glute of the working leg. Both sides should feel equally hard. If you feel it in your lower back your legs have already given up.</FeelBox>
        <Source text="Culvenor et al. 2016 — single leg benchmark. Double leg normative data: published sit to stand research." />
      </BenchmarkCard>

      {/* Card 6 — Single Leg Bridge */}
      <BenchmarkCard tag="Glutes" hook="Your glutes are probably not as switched on as you think they are.">
        <NoteBox>
          This test is newer to the research — normative data is still emerging. Don't treat the numbers as gospel. Use it as your personal baseline and track your own progress.
        </NoteBox>
        <NumberedSteps steps={[
          'Lie on your back, knees bent, feet flat',
          'Lift one leg — straight out in front of you',
          'Push through your heel and lift your hips',
          'Hold until your body forms a straight line',
          'Start the timer. Hold.',
          'Stop when your hips drop or you can\'t maintain position',
          'Rest 2 minutes. Do the other side.',
        ]} />
        <FeelBox>A deep squeeze right in the middle of your glute — not your hamstring, not your lower back. If you feel it mainly in your hamstring, your glute has clocked off. If you feel it in your lower back, your glute has definitely clocked off. Reset and try again.</FeelBox>
        <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#2C2C2A', marginBottom: 4 }}>Your benchmark</div>
        <BenchmarkList items={[
          'Around 60–65 seconds each side is where healthy young adults sit in early research',
          'More than 10 seconds between sides — that\'s your priority',
          'This is your personal baseline. The number matters less than the direction it moves.',
        ]} />
        <SidedTimers
          leftKey="rr_benchmark_bridge_left"
          rightKey="rr_benchmark_bridge_right"
          leftLabel="Left leg"
          rightLabel="Right leg"
          threshold={10}
        />
        <Source text="Worst & Henderson. International Journal of Sports Physical Therapy. 2026. Emerging research — small sample." />
      </BenchmarkCard>
    </div>
  )
}
