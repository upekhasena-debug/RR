import React from 'react'
import PainResult from '../components/PainResult'

export default function PainLowerMorning() {
  return (
    <PainResult
      headline="Morning lower back stiffness — your body hasn't fully recovered overnight"
      body={`Morning lower back stiffness has several possible drivers — and often more than one is happening at the same time. Muscles that were overloaded yesterday may not have fully recovered overnight. Ligaments that were under sustained tension during a long day of sitting can remain sensitised. Sleep quality affects tissue repair — poor sleep means less recovery. And spinal discs, which reabsorb fluid overnight, are at their most hydrated first thing in the morning, which can increase sensitivity in people with disc-related issues. Stiffness that eases within 20-30 minutes as you move is a normal recovery pattern. If it's taking longer than that, or getting progressively worse over weeks, that needs a proper assessment.`}
      feelBetterIntro="You don't have to do all of these. Try different combinations and see what works for you — these are strategies, not a prescription."
      feelBetterItems={[
        {
          title: 'Move first — and be mindful before bending',
          body: 'Before you open anything, do a morning movement card from your deck. Gentle movements — hip circles, standing back bends, a short walk. Where possible, give your spine 20-30 minutes of upright movement before you sit down.',
          links: [{ label: 'Movement cards', to: '/cards/move' }],
        },
        {
          title: 'Heat patch — before you start',
          body: 'Apply to the lower back before your first sitting session. 10 minutes helps reduce muscle guarding before you ask the spine to absorb load. A warm shower first thing works just as well — the goal is the same.',
          links: [{ label: 'Heat Patch guide', to: '/product/heatpatch' }],
        },
        {
          title: 'Soft tissue release — peanut ball',
          body: 'QL, upper fibre glutes, piriformis, hip flexors. Work through these before your first sitting session — releasing overnight tension before you load the spine.',
          links: [{ label: 'Peanut ball guide', to: '/product/peanutball' }],
        },
        {
          title: 'Thoracic mobility',
          body: 'Your thoracic spine has a direct influence on how your lower back loads. Work through your thoracic mobility drills from your card deck before you sit down. BackMagic is best used mid-morning once you\'ve warmed up — not first thing.',
          links: [{ label: 'BackMagic guide', to: '/product/backmagic' }, { label: 'Thoracic mobility guide', to: '/cards/stretch' }],
        },
        {
          title: 'Cobra extensions — if they feel comfortable',
          body: 'Lie face down, place hands under your shoulders and gently press up into a cobra or prone extension. Hold for a few seconds, lower, repeat 10 times. If this eases your symptoms, do it before you sit down every morning. If it increases pain or causes leg symptoms, stop.',
          links: [{ label: 'Extension exercises guide', to: '/cards/stretch/stretch-23' }],
        },
        {
          title: 'Stretching',
          body: 'Hip flexors, piriformis, quads. Before your first sitting session.',
          links: [{ label: 'Lower back stretching guide', to: '/cards/stretch' }],
        },
        {
          title: 'Activation',
          body: 'A short activation session before your first sitting session primes the muscles before you load them. Pull out your activation card from your deck.',
          links: [{ label: 'Activation cards', to: '/cards/activate' }],
        },
      ]}
      workSmarterItems={[
        {
          title: 'Check your setup before you sit',
          body: 'Lumbar roll in before you sit down — not when you start aching. Chair height correct. Feet flat.',
          links: [{ label: 'Desk setup guide', to: '/desksetup' }, { label: 'Lumbar Roll guide', to: '/product/lumbar' }],
        },
        {
          title: 'BackMagic — mid-morning, not first thing',
          body: 'Wait until the initial stiffness has eased before using BackMagic. Mid-morning is the right time — not when you first wake up.',
          links: [{ label: 'BackMagic guide', to: '/product/backmagic' }],
        },
        {
          title: 'Strengthening — 5 minutes at end of day',
          body: 'Pull out the strengthening section of your Theraband card deck. Five minutes, end of day, every day.',
          links: [{ label: 'Therabands guide', to: '/product/theraband' }],
        },
      ]}
      redFlag="Morning stiffness taking longer than 30-45 minutes to ease, getting progressively worse week on week, or pain travelling into your leg or foot — see a physio."
    />
  )
}
