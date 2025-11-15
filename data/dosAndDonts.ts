import type { PhaseName } from '../types';

export interface DoAndDont {
  id: string;
  type: 'do' | 'dont';
  text: string;
  phase: PhaseName;
}

export const COMMUNICATION_GUIDE: Record<PhaseName, DoAndDont[]> = {
  menstrual: [
    {
      id: 'menstrual-do-1',
      type: 'do',
      text: 'Ask "What can I do to help?" and respect the answer',
      phase: 'menstrual',
    },
    {
      id: 'menstrual-do-2',
      type: 'do',
      text: 'Validate discomfort: "That sounds really painful, I\'m sorry"',
      phase: 'menstrual',
    },
    {
      id: 'menstrual-do-3',
      type: 'do',
      text: 'Offer specific help: "I\'ll pick up dinner" instead of vague "Let me know if you need anything"',
      phase: 'menstrual',
    },
    {
      id: 'menstrual-do-4',
      type: 'do',
      text: 'Give space if requested, but check in periodically',
      phase: 'menstrual',
    },
    {
      id: 'menstrual-dont-1',
      type: 'dont',
      text: 'Don\'t minimize pain: "It can\'t be that bad" or "Every woman deals with this"',
      phase: 'menstrual',
    },
    {
      id: 'menstrual-dont-2',
      type: 'dont',
      text: 'Don\'t make it about sex or get frustrated if intimacy isn\'t on the table',
      phase: 'menstrual',
    },
    {
      id: 'menstrual-dont-3',
      type: 'dont',
      text: 'Don\'t act grossed out or uncomfortable. Periods are natural.',
      phase: 'menstrual',
    },
    {
      id: 'menstrual-dont-4',
      type: 'dont',
      text: 'Don\'t take irritability personally - it\'s not about you',
      phase: 'menstrual',
    },
  ],

  follicular: [
    {
      id: 'follicular-do-1',
      type: 'do',
      text: 'Take advantage of higher energy for fun activities together',
      phase: 'follicular',
    },
    {
      id: 'follicular-do-2',
      type: 'do',
      text: 'Encourage new projects or ideas they\'re excited about',
      phase: 'follicular',
    },
    {
      id: 'follicular-do-3',
      type: 'do',
      text: 'Schedule important conversations or planning sessions now',
      phase: 'follicular',
    },
    {
      id: 'follicular-do-4',
      type: 'do',
      text: 'Match their energy and enthusiasm',
      phase: 'follicular',
    },
    {
      id: 'follicular-dont-1',
      type: 'dont',
      text: 'Don\'t waste this good-mood window on arguments or negativity',
      phase: 'follicular',
    },
    {
      id: 'follicular-dont-2',
      type: 'dont',
      text: 'Don\'t assume every day will be this easy - cycles change',
      phase: 'follicular',
    },
  ],

  ovulation: [
    {
      id: 'ovulation-do-1',
      type: 'do',
      text: 'Plan dates, social events, or activities that require high energy',
      phase: 'ovulation',
    },
    {
      id: 'ovulation-do-2',
      type: 'do',
      text: 'Be present and attentive - connection is often strongest now',
      phase: 'ovulation',
    },
    {
      id: 'ovulation-do-3',
      type: 'do',
      text: 'Have those difficult conversations that require good communication',
      phase: 'ovulation',
    },
    {
      id: 'ovulation-do-4',
      type: 'do',
      text: 'Show appreciation and affection - they may be feeling their best',
      phase: 'ovulation',
    },
    {
      id: 'ovulation-dont-1',
      type: 'dont',
      text: 'Don\'t pressure intimacy even if libido is higher',
      phase: 'ovulation',
    },
    {
      id: 'ovulation-dont-2',
      type: 'dont',
      text: 'Don\'t take the good mood for granted',
      phase: 'ovulation',
    },
  ],

  luteal: [
    {
      id: 'luteal-do-1',
      type: 'do',
      text: 'Validate emotions: "Your feelings make sense" not "You\'re overreacting"',
      phase: 'luteal',
    },
    {
      id: 'luteal-do-2',
      type: 'do',
      text: 'Be extra thoughtful and patient - little things mean more now',
      phase: 'luteal',
    },
    {
      id: 'luteal-do-3',
      type: 'do',
      text: 'Acknowledge when they\'re struggling: "This week seems tough for you"',
      phase: 'luteal',
    },
    {
      id: 'luteal-do-4',
      type: 'do',
      text: 'Pick up slack on chores and responsibilities without being asked',
      phase: 'luteal',
    },
    {
      id: 'luteal-do-5',
      type: 'do',
      text: 'Offer comfort: physical touch, kind words, acts of service',
      phase: 'luteal',
    },
    {
      id: 'luteal-dont-1',
      type: 'dont',
      text: 'NEVER say "Are you on your period?" or "Is this just PMS?"',
      phase: 'luteal',
    },
    {
      id: 'luteal-dont-2',
      type: 'dont',
      text: 'Don\'t dismiss concerns as hormone-driven. Feelings are valid.',
      phase: 'luteal',
    },
    {
      id: 'luteal-dont-3',
      type: 'dont',
      text: 'Don\'t try to "fix" mood swings - just be supportive',
      phase: 'luteal',
    },
    {
      id: 'luteal-dont-4',
      type: 'dont',
      text: 'Don\'t plan stressful activities or difficult conversations now if avoidable',
      phase: 'luteal',
    },
    {
      id: 'luteal-dont-5',
      type: 'dont',
      text: 'Don\'t take emotional distance personally - it\'s temporary',
      phase: 'luteal',
    },
  ],
};

// Helper functions
export function getDosForPhase(phase: PhaseName): DoAndDont[] {
  return COMMUNICATION_GUIDE[phase].filter((item) => item.type === 'do');
}

export function getDontsForPhase(phase: PhaseName): DoAndDont[] {
  return COMMUNICATION_GUIDE[phase].filter((item) => item.type === 'dont');
}

export function getAllGuidelinesForPhase(phase: PhaseName): DoAndDont[] {
  return COMMUNICATION_GUIDE[phase] || [];
}
