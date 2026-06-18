import React from 'react'
import PainResult from '../components/PainResult'

export default function PainUpperBack() {
  return (
    <PainResult
      headline="Upper back and shoulder tightness from sustained desk posture"
      body={`What most desk workers call "shoulder pain" is almost never a true shoulder problem. The research is clear: the most common presentation in office workers is trapezius myalgia — chronic overload and tightness in the upper trapezius and the surrounding periscapular muscles. The shoulder joint itself is rarely the issue.

The mechanism is a combination of sustained forward posture, rounded shoulders, and a thoracic spine that gradually stiffens into flexion. As the thoracic spine rounds, the scapulae drift forward and the pecs and pec minor shorten. The muscles trying to hold the shoulder blades back — the rhomboids, mid and lower traps — fatigue under the constant demand. The result is that deep, persistent ache across the upper back and base of the neck that desk workers know well.`}
      feelBetterIntro="You don't have to do all of these. Try different combinations and see what works for you — these are strategies, not a prescription."
      feelBetterItems={[
        {
          title: 'Move — start here',
          body: 'Set a timer for every 30-45 minutes. When it goes off, stand up and do a movement card from your deck. Upper back tightness responds particularly well to movement — even a 2-minute walk with arms swinging changes the load pattern significantly.',
          links: [{ label: 'Movement cards', comingSoon: true }],
        },
        {
          title: 'Soft tissue release — peanut ball',
          body: 'Priority order: periscapular region first — rhomboids, mid trap, between shoulder blade and spine. Then upper traps, pec minor. Hold on tender spots 20-30 seconds, work slowly across each area.',
          links: [{ label: 'Peanut ball guide', to: '/product/peanutball' }],
        },
        {
          title: 'Thoracic mobility',
          body: 'The thoracic spine is the primary driver of this presentation. A stiff thoracic spine is the reason the upper back and shoulders are overloaded. BackMagic at lunch is the most important thing in your box for this area. Thoracic mobility drills from your card deck daily.',
          links: [{ label: 'BackMagic guide', to: '/product/backmagic' }, { label: 'Thoracic mobility guide', comingSoon: true }],
        },
        {
          title: 'Stretching',
          body: 'Priority order: pecs and pec minor first — doorframe stretch, or pec minor release against the ball. Then upper traps, scalenes.',
          links: [{ label: 'Upper back stretching guide', comingSoon: true }],
        },
        {
          title: 'Activation',
          body: 'A short activation session mid-day focusing on scapular setting. Pull out your activation card from your deck.',
          links: [{ label: 'Movement cards', comingSoon: true }],
        },
      ]}
      workSmarterItems={[
        {
          title: 'Mouse position and arm posture',
          body: 'If your mouse is too far away, your shoulder rotates outward and your upper trap engages to reach it all day. Keep the mouse close, elbow at roughly 90 degrees, close to your body.',
          links: [{ label: 'Desk setup guide', to: '/desksetup' }],
        },
        {
          title: 'Posture device on',
          body: 'Place it between your shoulder blades and calibrate it upright. When it vibrates, sit tall through the crown of your head.',
          links: [{ label: 'Posture Device guide', to: '/product/posturedevice' }],
        },
        {
          title: 'Lumbar roll in',
          body: 'Supporting the lumbar curve reduces the downstream thoracic flexion that loads the upper back. Lumbar roll in before your first sitting session.',
          links: [{ label: 'Lumbar Roll guide', to: '/product/lumbar' }],
        },
        {
          title: 'Strengthening — 5 minutes at end of day',
          body: 'Pull out the strengthening section of your Theraband card deck. Priority: scapular retraction, Y-raise, and shoulder external rotation. Five minutes, end of day, every day.',
          links: [{ label: 'Therabands guide', to: '/product/theraband' }],
        },
      ]}
      redFlag="Actual shoulder joint pain — pain on lifting your arm overhead, clicking or catching in the shoulder joint, or pain that radiates down your arm — is a different presentation and needs a proper assessment. See a physio."
    />
  )
}
