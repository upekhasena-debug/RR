import React from 'react'
import PainResult from '../components/PainResult'

export default function PainLowerAlways() {
  return (
    <PainResult
      headline="Constant lower back pain needs two things: better daily habits and knowing when to see someone"
      body={`Lower back pain that's there most of the time isn't automatically serious — but it does need a more structured approach than pain that only builds through the day. It has a wider range of possible causes: disc issues, joint irritation, muscle fatigue that never fully resolves, ligament sensitivity, or referred pain from the hip or pelvis. If your pain is recent, manageable, and has no other symptoms alongside it, your box is the right starting point. Use everything in it, consistently, and give it 2-4 weeks.

However — if any of the following apply, stop self-managing and see a physio or doctor: pain constant for more than 4-6 weeks without any improvement; pain radiating into one or both legs; tingling, numbness or weakness in the leg or foot; pain waking from sleep regularly; morning stiffness taking more than 30-45 minutes to ease; any changes to bladder or bowel function, symptoms in both legs simultaneously, or numbness in the inner thighs or groin — these need urgent medical assessment, not a physio appointment.`}
      feelBetterIntro="You don't have to do all of these. Try different combinations and see what works for you — these are strategies, not a prescription."
      feelBetterItems={[
        {
          title: 'Move every 30 minutes',
          body: 'Set a timer. When it goes off, get up and do a movement card from your deck.',
          links: [{ label: 'Movement cards', comingSoon: true }],
        },
        {
          title: 'Heat patch — morning only',
          body: 'Apply to the lower back for 10 minutes before you start the day. Morning only — this is about reducing overnight inflammation before you load the spine, not managing end of day fatigue.',
          links: [{ label: 'Heat Patch guide', to: '/product/heatpatch' }],
        },
        {
          title: 'Soft tissue release — peanut ball',
          body: 'QL, upper fibre glutes, piriformis, hip flexors. Every day — morning before you sit, or mid-morning. This is maintenance, not treatment.',
          links: [{ label: 'Peanut ball guide', to: '/product/peanutball' }],
        },
        {
          title: 'Thoracic mobility',
          body: 'BackMagic daily at lunch without exception, and thoracic mobility drills from your card deck every morning before you sit.',
          links: [{ label: 'BackMagic guide', to: '/product/backmagic' }, { label: 'Thoracic mobility guide', comingSoon: true }],
        },
        {
          title: 'Stretching',
          body: 'Hip flexors, piriformis, quads. Daily — morning before you sit and mid-afternoon.',
          links: [{ label: 'Lower back stretching guide', comingSoon: true }],
        },
        {
          title: 'Activation',
          body: 'Before your first sitting session, every morning. Not optional at this level — the muscles need to be switched on before they\'re loaded.',
          links: [{ label: 'Movement cards', comingSoon: true }],
        },
      ]}
      workSmarterItems={[
        {
          title: 'Lumbar roll — in before you sit, every time',
          body: 'Place it at belt level before your first sitting session and keep it there all day.',
          links: [{ label: 'Lumbar Roll guide', to: '/product/lumbar' }],
        },
        {
          title: 'Setup — check it today',
          body: 'Lumbar roll in. Chair height correct. Screen at eye level.',
          links: [{ label: 'Desk setup guide', to: '/desksetup' }],
        },
        {
          title: 'Posture device — all day',
          body: 'Wear it through your working day. When it vibrates, sit tall through the crown of your head.',
          links: [{ label: 'Posture Device guide', to: '/product/posturedevice' }],
        },
        {
          title: 'Strengthening — 5 minutes at end of day',
          body: 'Pull out the strengthening section of your Theraband card deck. Five minutes, end of day, every day. At this level this is non-negotiable.',
          links: [{ label: 'Therabands guide', to: '/product/theraband' }],
        },
      ]}
      redFlag="Stop self-managing and see a physio if: pain has been constant for more than 4-6 weeks without improvement, pain radiates into one or both legs, you have tingling or numbness in the leg or foot, pain is waking you from sleep, or morning stiffness takes more than 30-45 minutes to ease. If you notice any changes to bladder or bowel function or bilateral leg symptoms — see a doctor urgently."
    />
  )
}
