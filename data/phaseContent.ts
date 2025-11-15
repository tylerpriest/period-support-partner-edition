import type { PhaseName } from '../types';

export interface ActionItem {
  id: string;
  phase: PhaseName;
  category: 'physical' | 'emotional' | 'communication';
  icon: string;
  title: string;
  description: string;
  priority: 1 | 2 | 3; // 1 = highest
}

export const PHASE_ACTIONS: Record<PhaseName, ActionItem[]> = {
  menstrual: [
    {
      id: 'menstrual-1',
      phase: 'menstrual',
      category: 'physical',
      icon: '🔥',
      title: 'Heating pad ready',
      description: 'Keep a heating pad or hot water bottle available for cramps. Offer to warm it up without being asked.',
      priority: 1,
    },
    {
      id: 'menstrual-2',
      phase: 'menstrual',
      category: 'emotional',
      icon: '💙',
      title: 'Extra patience',
      description: 'Energy is low right now. Give extra grace for tiredness or irritability.',
      priority: 1,
    },
    {
      id: 'menstrual-3',
      phase: 'menstrual',
      category: 'physical',
      icon: '🍫',
      title: 'Comfort foods',
      description: 'Ask what sounds good to eat. Dark chocolate, warm soups, or their favorite comfort food can help.',
      priority: 2,
    },
    {
      id: 'menstrual-4',
      phase: 'menstrual',
      category: 'communication',
      icon: '🤝',
      title: 'Ask, don\'t assume',
      description: 'Everyone experiences periods differently. Ask "What would help right now?" rather than assuming.',
      priority: 1,
    },
    {
      id: 'menstrual-5',
      phase: 'menstrual',
      category: 'physical',
      icon: '🛋️',
      title: 'Handle chores',
      description: 'Take over household tasks without being asked. Even small gestures make a big difference.',
      priority: 2,
    },
  ],

  follicular: [
    {
      id: 'follicular-1',
      phase: 'follicular',
      category: 'emotional',
      icon: '🌟',
      title: 'Energy is rising',
      description: 'This is often a great time for activities, dates, or tackling projects together.',
      priority: 1,
    },
    {
      id: 'follicular-2',
      phase: 'follicular',
      category: 'communication',
      icon: '💬',
      title: 'Open conversations',
      description: 'Communication tends to be easier now. Good time for important discussions or planning.',
      priority: 2,
    },
    {
      id: 'follicular-3',
      phase: 'follicular',
      category: 'physical',
      icon: '🏃',
      title: 'Active together',
      description: 'Suggest active dates like hiking, dancing, or sports. Energy levels are typically higher.',
      priority: 2,
    },
    {
      id: 'follicular-4',
      phase: 'follicular',
      category: 'emotional',
      icon: '✨',
      title: 'Celebrate wins',
      description: 'Confidence may be higher. Celebrate accomplishments and encourage new projects.',
      priority: 3,
    },
  ],

  ovulation: [
    {
      id: 'ovulation-1',
      phase: 'ovulation',
      category: 'emotional',
      icon: '💫',
      title: 'Peak energy window',
      description: 'This is typically the highest energy phase. Great time for social activities or adventures.',
      priority: 1,
    },
    {
      id: 'ovulation-2',
      phase: 'ovulation',
      category: 'communication',
      icon: '🗣️',
      title: 'Strong communication',
      description: 'Verbal skills often peak. Ideal time for deep conversations or resolving conflicts.',
      priority: 1,
    },
    {
      id: 'ovulation-3',
      phase: 'ovulation',
      category: 'physical',
      icon: '❤️',
      title: 'Intimacy peak',
      description: 'Libido often increases. Be attentive to connection, both physical and emotional.',
      priority: 2,
    },
    {
      id: 'ovulation-4',
      phase: 'ovulation',
      category: 'emotional',
      icon: '🌈',
      title: 'Mood is elevated',
      description: 'Generally the most positive mood phase. Enjoy quality time together.',
      priority: 2,
    },
  ],

  luteal: [
    {
      id: 'luteal-1',
      phase: 'luteal',
      category: 'emotional',
      icon: '🧘',
      title: 'PMS may start',
      description: 'Mood swings, irritability, or anxiety can increase. Be patient and understanding.',
      priority: 1,
    },
    {
      id: 'luteal-2',
      phase: 'luteal',
      category: 'communication',
      icon: '🎧',
      title: 'Listen more',
      description: 'Emotions may be heightened. Listen without trying to fix or dismiss feelings.',
      priority: 1,
    },
    {
      id: 'luteal-3',
      phase: 'luteal',
      category: 'physical',
      icon: '😴',
      title: 'Extra rest',
      description: 'Energy may dip. Encourage downtime and don\'t take it personally if plans are canceled.',
      priority: 2,
    },
    {
      id: 'luteal-4',
      phase: 'luteal',
      category: 'physical',
      icon: '🍕',
      title: 'Cravings are real',
      description: 'Food cravings (especially salt, sugar) are common. Stock their favorites without judgment.',
      priority: 2,
    },
    {
      id: 'luteal-5',
      phase: 'luteal',
      category: 'communication',
      icon: '🚫',
      title: 'Never say "PMS"',
      description: 'Don\'t dismiss emotions as "just PMS." Feelings are valid regardless of hormones.',
      priority: 1,
    },
    {
      id: 'luteal-6',
      phase: 'luteal',
      category: 'emotional',
      icon: '🤗',
      title: 'Reassurance helps',
      description: 'Insecurity or self-doubt may increase. Offer genuine compliments and affection.',
      priority: 3,
    },
  ],
};

// Helper function to get actions for a specific phase
export function getActionsForPhase(phase: PhaseName): ActionItem[] {
  return PHASE_ACTIONS[phase] || [];
}

// Helper function to get top priority actions
export function getTopActionsForPhase(phase: PhaseName, limit: number = 3): ActionItem[] {
  const actions = getActionsForPhase(phase);
  return actions
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}
