import React from 'react'
import Accordion from '../components/Accordion'

const sections = [
  {
    title: "Why your body wasn't designed for this",
    content: `The office chair is where we spend our days, tapping away at keyboards and staring at screens. But here's the thing — the human body is not designed for endless sitting. We are not designed to sit in a chair and stare at a monitor all day. Our bodies need movement to function properly, and when we take that away for hours at a time, things start to go wrong.

The stats paint a pretty confronting picture. Over half of office workers report neck pain, and a similar number report lower back pain. That's not a coincidence — it's a predictable physiological response to a lifestyle our bodies were never built for. The good news is that understanding why it happens is the first step to doing something about it.`,
    source: 'Source: Systematic review of work-related musculoskeletal disorders among computer users. Journal of Occupational Health. 2024.',
  },
  {
    title: 'What happens in your tissues after 20-30 minutes',
    content: `Here's something that might surprise you. Research shows that deep trunk muscles — the ones that support and stabilise your spine — can begin to fatigue after as little as 20-30 minutes of sustained sitting. Not hours. Twenty to thirty minutes.

When those muscles fatigue, they stop doing their job. Load transfers from active muscle to passive structures — your discs, ligaments, and joints. These structures weren't designed to be the primary load-bearers, and when they are, you feel it. That deep ache across your lower back, the stiffness in your neck, the tension across your upper back — that's those structures telling you they're doing too much.

By the one-hour mark, measurable discomfort is present across the neck, upper back, lower back, and buttocks — regardless of your sitting posture. It's not about how you're sitting. It's about the fact that you're still sitting.

At the same time, blood flow to muscles reduces, spinal discs get less nutrient exchange, and connective tissue starts to feel the static load. As metabolic byproducts accumulate in the tissue, nociceptors — specialised nerve endings that detect potential tissue threat — activate and send signals to the brain. Your brain then decides whether to produce pain. That ache you feel by mid-afternoon isn't damage. It's your body telling you it needs a reset.`,
    source: 'Sources: Trunk muscle fatigue after 20-30 minutes of sitting. Trends in Sciences. 2024. / Pollak KA et al. Muscle metabolites synergistically evoke sensations of fatigue and pain. Experimental Physiology. 2014.',
  },
  {
    title: 'Is there such a thing as good posture?',
    content: `Ah, the million-dollar question. The idea of "good" or "right" posture isn't as straightforward as you might think.

In short — there isn't a universally correct posture. Research shows no consistent correlation between static posture and musculoskeletal pain. Individuals with similar postural deviations can experience very different levels of discomfort, which tells us that other factors — like muscle strength, flexibility, and how long you hold a position — matter far more than the position itself.

That said, certain positions do place more stress on joints and tissues when held for extended periods. Forward head posture significantly increases the load on the cervical spine. Prolonged slouching places undue stress on the lumbar spine. So while there's no single correct posture, there are ergonomically preferred alignments that reduce unnecessary load.

The emerging view in physiotherapy is that postural variability matters far more than postural perfection. Rather than finding the ideal position and holding it, the goal is to change positions regularly throughout the day. Research shows that dynamic sitting effectively relieves discomfort associated with prolonged sitting.

Which leads us to our favourite mantra: your next posture is your best posture.`,
    source: 'Sources: PMC8701092. PMC8165355. PMC9696528.',
  },
  {
    title: 'The sitting vs standing desk myth',
    content: `Standing desks have had a lot of good press. The idea makes intuitive sense — if sitting is bad, standing must be better. Right?

Not quite. Based on the research available, prolonged standing carries almost the same risks as prolonged sitting. Jobs requiring prolonged standing have been associated with nearly twice the risk of developing heart disease compared to predominantly sedentary roles. Prolonged standing is also linked to lower limb discomfort, fatigue, chronic venous disorders, and cardiovascular load.

Does this sound a lot like what you just read about sitting? That's because it is. The problem isn't the chair or the lack of a chair — it's the static, sustained nature of both postures. The body isn't designed for either one for extended periods.

The answer isn't sit less or stand more. It's move more.`,
    source: 'Sources: Smith et al. American Journal of Epidemiology. 2018. / McCulloch et al. Occupational Health. 2016.',
  },
  {
    title: 'What actually makes a difference',
    content: `Using our detective skills, we can work out that it's likely the prolonged, static nature of both sitting and standing that's the culprit in both situations. The body needs movement — and the current research all points in the same direction: increase your baseline activity levels throughout the day.

Get up after sitting for more than 30-45 minutes. Even a 2-minute walk resets the load on your spine and lets the supporting muscles recover. Research suggests keeping total sitting time below 75% of your workday significantly lowers the risk of back and neck pain. The ideal workday breakdown — as used in some Swiss workplace health programs — is roughly 60% sitting, 30% standing, and 10% walking.

And here's the one that surprises most people: even if you're hitting the gym for an hour a day, prolonged sitting for the other 23 hours still carries significant independent health risks. Total sedentary time matters separately from structured exercise.

Three types of movement are particularly valuable for desk workers: stretching — targeting what sitting tightens; activation — short, low-load exercises that switch on the muscles sitting switches off; and strengthening — building the muscles that share the load so your spine doesn't have to absorb it alone. Your box is built around exactly these three.`,
    source: 'Sources: BMC Public Health. / WHO Physical Activity Guidelines. 2020.',
  },
]

const sources = [
  'Systematic review of work-related MSDs. Journal of Occupational Health. 2024. PMC10840111.',
  'Trunk muscle fatigue after 20-30 minutes. Trends in Sciences. 2024.',
  'Internal oblique fatigue after 1 hour of sitting. Safety and Health at Work. 2016. PMC4792914.',
  'Pollak KA et al. Muscle metabolites and pain. Experimental Physiology. 2014.',
  'Static posture and musculoskeletal pain. PMC8701092.',
  'ISO 11226 static working postures. PMC9696528.',
  'Dynamic sitting relieves discomfort. PMC8165355.',
  'Smith et al. Occupational standing and heart disease. American Journal of Epidemiology. 2018.',
  'McCulloch et al. Prolonged standing risks. Occupational Health. 2016.',
  'Sitting less than 75% of workday. BMC Public Health.',
  'WHO Physical Activity Guidelines. 2020.',
]

export default function Science() {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: 80 }}>
      <h1 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#2C2C2A', marginBottom: 8 }}>
        The science behind the ache
      </h1>
      <p style={{ color: '#5F5E5A', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 24 }}>
        You're not imagining it. There's real physiology behind why sitting at a desk all day leaves you stiff, sore, and exhausted. Here's what's actually going on.
      </p>

      <div>
        {sections.map((s, i) => (
          <Accordion key={i} title={s.title}>
            <div>
              {s.content.split('\n\n').map((para, j) => (
                <p key={j} style={{ marginBottom: 10 }}>{para}</p>
              ))}
              <p style={{ fontSize: '0.72rem', color: '#888780', fontStyle: 'italic', marginTop: 8 }}>{s.source}</p>
            </div>
          </Accordion>
        ))}

        <Accordion title="References">
          <ol style={{ paddingLeft: 16, margin: 0 }}>
            {sources.map((s, i) => (
              <li key={i} style={{ marginBottom: 6, fontSize: '0.78rem', color: '#888780' }}>{s}</li>
            ))}
          </ol>
        </Accordion>
      </div>
    </div>
  )
}
