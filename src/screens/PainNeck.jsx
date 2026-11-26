import React from 'react'
import PainResult from '../components/PainResult'

export default function PainNeck() {
  return (
    <PainResult
      headline="Neck pain and headaches from sustained screen use"
      body={`The neck and head are deeply connected — and for desk workers, problems in one almost always affect the other. The muscles at the base of your skull — the suboccipitals — are small, precise muscles designed for fine head movement. When your head stays in one position for hours, particularly tilted forward to look at a screen or down at a phone, these muscles work continuously without a break. Over time they fatigue, tighten, and start to refer pain upward into the head.

This is text neck — and it doesn't just happen from phones. Any sustained forward head posture, whether from a laptop on a desk, a monitor too low, or hours of reading, creates the same pattern. For every degree the head tilts forward, the load on the cervical spine increases significantly. The deep neck flexors — the muscles designed to support the head from the front — switch off under sustained load, leaving the suboccipitals and upper traps to do everything.

The headaches this produces are cervicogenic — they originate in the neck and travel forward. They typically start at the base of the skull, can feel like pressure behind the eyes, and are usually brought on or worsened by sustained posture or neck movement.`}
      feelBetterIntro="You don't have to do all of these. Try different combinations and see what works for you — these are strategies, not a prescription."
      feelBetterItems={[
        {
          title: 'Move — start here',
          body: 'Set a timer for every 30-45 minutes. When it goes off, stand up and do a movement card from your deck. For headaches specifically — getting up and moving before the tension builds is far more effective than trying to relieve it once it\'s established.',
          links: [{ label: 'Movement cards', to: '/cards/move' }],
        },
        {
          title: 'Heat patch — before you start',
          body: 'Apply to the base of the skull and upper neck. 10 minutes before you start the day or when you feel tension beginning to build.',
          links: [{ label: 'Heat Patch guide', to: '/product/heatpatch' }],
        },
        {
          title: 'Soft tissue release — peanut ball',
          body: 'Priority order: suboccipitals first — place ball at base of skull, gentle pressure, hold on tender spots 20-30 seconds. Then upper traps, levator scapulae, rhomboids.',
          links: [{ label: 'Peanut ball guide', to: '/product/peanutball' }],
        },
        {
          title: 'Neck massager',
          body: 'Upper trap and base of skull, 2 minutes each side. Use it when tension is building — mid-morning or mid-afternoon — not just when you\'re already in pain.',
          links: [{ label: 'Neck Massager guide', to: '/product/neckmassager' }],
        },
        {
          title: 'Thoracic mobility',
          body: 'Your thoracic spine directly influences your cervical spine. When the thoracic spine is stiff, the neck compensates. BackMagic at lunch, thoracic mobility drills from your card deck.',
          links: [{ label: 'BackMagic guide', to: '/product/backmagic' }, { label: 'Thoracic mobility guide', to: '/cards/stretch?area=Neck and head' }],
        },
        {
          title: 'Stretching',
          body: 'Priority order: suboccipital release first, then scalenes, upper traps, pecs.',
          links: [{ label: 'Neck and head stretching guide', to: '/cards/stretch?area=Neck and head' }],
        },
        {
          title: 'Activation — chin retractions',
          body: 'Gently pull your chin straight back — not down, back. Hold 2 seconds, release. 10 reps. Every hour. This reactivates the deep neck flexors that switch off under sustained forward head posture.',
          links: [{ label: 'Activation cards', to: '/cards/activate?area=Neck and head' }],
        },
      ]}
      workSmarterItems={[
        {
          title: 'Screen at eye level',
          body: 'Top of monitor at or just below eye level. If you\'re looking down at a laptop or phone for hours, that\'s the primary driver. Raise the screen — even a stack of books works. For phone use: bring the phone up to eye level rather than dropping your head to it.',
          links: [{ label: 'Desk setup guide', to: '/desksetup' }],
        },
        {
          title: 'Posture device on',
          body: 'Place it between your shoulder blades and calibrate it upright. When it vibrates, sit tall through the crown of your head — this directly reduces the forward head position that drives this presentation.',
          links: [{ label: 'Posture Device guide', to: '/product/posturedevice' }],
        },
        {
          title: 'Lumbar roll in',
          body: 'Supporting the base of the spine changes how the whole chain stacks up, including the cervical spine. Lumbar roll in before your first sitting session.',
          links: [{ label: 'Lumbar Roll guide', to: '/product/lumbar' }],
        },
        {
          title: 'Strengthening — 5 minutes at end of day',
          body: 'Pull out the strengthening section of your Theraband card deck. Scapular retraction and chin retraction focus. Five minutes, end of day, every day.',
          links: [{ label: 'Therabands guide', to: '/product/theraband' }],
        },
      ]}
      redFlag="If your headaches are getting progressively worse, feel different from your usual pattern, or come with visual changes or nausea — it's worth checking in with your GP."
    />
  )
}
