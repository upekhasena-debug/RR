import React from 'react'
import PainResult from '../components/PainResult'

export default function PainWrist() {
  return (
    <PainResult
      headline="Wrist and forearm discomfort from repetitive use"
      body={`Wrist and forearm pain in desk workers is almost always a repetitive load issue — the same structures used in the same way for hours every day without adequate recovery. Rather than one specific diagnosis, what most desk workers experience is a general overuse picture: forearm muscles fatigue, tendons become irritated, and the wrist starts to complain. The structures involved depend on exactly how you're loading them — typing position, mouse use, wrist posture — but the underlying mechanism is the same. Sustained repetitive load without enough recovery.

Most people type with their wrists slightly extended or deviated without realising it. Over eight hours, thousands of repetitions in that position accumulates significant load on the tendons and the forearm muscles that control them. The longer this continues without intervention, the harder it becomes to settle.`}
      feelBetterIntro="You don't have to do all of these. Try different combinations and see what works for you — these are strategies, not a prescription."
      feelBetterItems={[
        {
          title: 'Move and shake out',
          body: 'Every 20-30 minutes, shake your hands out and open and close your fists slowly. Set a timer. This resets circulation and reduces tendon load accumulation before it builds.',
          links: [{ label: 'Movement cards', to: '/cards/move' }],
        },
        {
          title: 'Soft tissue release',
          body: 'Outer forearm from elbow to wrist, inner forearm, and around the wrist. Slow movements, moderate pressure, pause on tender spots for 20-30 seconds.',
          links: [{ label: 'Forearm release guide', to: '/cards/activate?area=Wrist and forearm' }],
        },
        {
          title: 'Stretching',
          body: 'Prayer stretch: palms together, lower hands until you feel a forearm stretch. Hold 20-30 seconds. Reverse prayer: backs of hands together, raise them. Hold 20-30 seconds. Wrist circles: 10 each direction, both hands. Every hour.',
          links: [{ label: 'Wrist and forearm stretching guide', to: '/cards/stretch?area=Wrist and forearm' }],
        },
        {
          title: 'Wrist neutraliser pad',
          body: 'Use it as a resting position between typing bursts — not during active keystrokes. Your wrist should be neutral and floating while you type, not resting on the pad.',
          links: [{ label: 'Wrist Neutraliser Pad guide', to: '/product/wristpad' }],
        },
      ]}
      workSmarterItems={[
        {
          title: 'Check your wrist position',
          body: 'Wrists should be straight — not bent up, down, or sideways — while typing. If your desk is too high or your chair too low, your wrists bend upward to reach the keyboard. Fix the setup before you address the wrist.',
          links: [{ label: 'Desk setup guide', to: '/desksetup' }],
        },
        {
          title: 'Strengthening — 5 minutes at end of day',
          body: 'Pull out the strengthening section of your Theraband card deck. Wrist flexion, extension, pronation and supination. Five minutes, end of day, every day.',
          links: [{ label: 'Therabands guide', to: '/product/theraband' }],
        },
      ]}
      redFlag="Tingling or numbness into the fingers — particularly the thumb, index and middle fingers. Symptoms that wake you from sleep. Any weakness in grip or difficulty with fine motor tasks. Wasting or visible changes in the muscles at the base of the thumb or little finger — see a physio or GP."
    />
  )
}
