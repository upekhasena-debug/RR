import React from 'react'
import PainResult from '../components/PainResult'

export default function PainLowerEndDay() {
  return (
    <PainResult
      headline="Your lower back is absorbing load your core should be sharing"
      body={`When you sit for hours, several structures absorb load simultaneously — muscles fatigue, ligaments are placed under sustained tension, and the discs themselves accumulate compressive load in a flexed position. Over the course of a day, all of these structures contribute to that familiar deep ache that builds through the afternoon. Spinal discs in particular respond to sustained loading by losing some of their fluid content — a normal process, but one that's accelerated by prolonged sitting without breaks. Supporting the natural lumbar curve and taking regular movement breaks helps manage this load across all of these structures, not just one.`}
      feelBetterIntro="You don't have to do all of these. Try different combinations and see what works for you — these are strategies, not a prescription."
      feelBetterItems={[
        {
          title: 'Move — start here',
          body: 'Your spine needs to be unloaded regularly. Set a timer for every 30-45 minutes. When it goes off, stand up and do a movement card from your deck. A 2-minute walk resets the load on the discs and lets the supporting muscles recover.',
          links: [{ label: 'Movement cards', to: '/cards/move' }],
        },
        {
          title: 'Soft tissue release — peanut ball',
          body: 'QL, upper fibre glutes, piriformis, hip flexors. Use it when load has been accumulating — mid-afternoon is the right time.',
          links: [{ label: 'Peanut ball guide', to: '/product/peanutball' }],
        },
        {
          title: 'Thoracic mobility',
          body: 'Your thoracic spine has a direct influence on how your lower back loads. When it\'s stiff, the lumbar spine compensates. Use your BackMagic at lunch and follow the thoracic mobility drills from your card deck.',
          links: [{ label: 'BackMagic guide', to: '/product/backmagic' }, { label: 'Thoracic mobility guide', to: '/cards/stretch' }],
        },
        {
          title: 'Stretching',
          body: 'Hip flexors, piriformis, quads. Mid-afternoon when load has been building.',
          links: [{ label: 'Lower back stretching guide', to: '/cards/stretch' }],
        },
        {
          title: 'Activation',
          body: 'A short activation session mid-day primes the muscles before afternoon fatigue sets in. Pull out your activation card from your deck.',
          links: [{ label: 'Activation cards', to: '/cards/activate' }],
        },
      ]}
      workSmarterItems={[
        {
          title: 'Lumbar roll in — from the start',
          body: 'Place it between your chair and the small of your back at belt level before you sit down. Sit snugly against it and keep it there all day. It maintains the natural lumbar curve and reduces the muscle fatigue that drives that afternoon ache.',
          links: [{ label: 'Lumbar Roll guide', to: '/product/lumbar' }],
        },
        {
          title: 'Check your setup',
          body: 'Chair height matters here — if your hips are lower than your knees, your pelvis tilts backward and loads the lumbar spine. Feet flat on the floor, knees at roughly 90 degrees. Adjust before you start.',
          links: [{ label: 'Desk setup guide', to: '/desksetup' }],
        },
        {
          title: 'Posture device on',
          body: 'Place it between your shoulder blades. When it vibrates, sit tall. The whole spine loads better when the upper back is in a good position.',
          links: [{ label: 'Posture Device guide', to: '/product/posturedevice' }],
        },
        {
          title: 'Strengthening — 5 minutes at end of day',
          body: 'Pull out the strengthening section of your Theraband card deck. Five minutes, end of day, every day.',
          links: [{ label: 'Therabands guide', to: '/product/theraband' }],
        },
      ]}
      redFlag="Pain radiating into your leg or foot, or present more than 6 weeks without change — see a physio."
    />
  )
}
