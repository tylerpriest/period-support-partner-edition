// Core Types for Period Support Partner App

export type PhaseName = 'menstrual' | 'follicular' | 'ovulation' | 'luteal';

export interface CyclePhase {
  name: PhaseName;
  day: number; // Day within current cycle (1-28+)
}

export interface CycleData {
  startDate: string; // ISO date string
  cycleLength: number; // Average cycle length (default 28)
  phaseLengths: PhaseLengths;
  pastCycles: PastCycle[];
}

export interface PhaseLengths {
  menstrual: number; // Days 1-5 (default)
  follicular: number; // Days 1-14 (default)
  ovulation: number; // Days 13-15 (default)
  luteal: number; // Days 15-28 (default)
}

export interface PastCycle {
  startDate: string;
  length: number;
}

export interface UserSettings {
  notificationsEnabled: boolean;
  notificationTypes: NotificationType[];
  notificationTime: 'morning' | 'evening' | 'custom';
  customTime?: string;
  consentGiven: boolean;
  consentDate?: string;
  partnerName?: string;
  dataSharing: 'local-only' | 'cloud-encrypted';
  onboardingCompleted: boolean;
}

export type NotificationType =
  | 'period-coming'
  | 'pms-window'
  | 'phase-change'
  | 'daily-tip';

export interface ConsentData {
  given: boolean;
  date?: string;
  version: string; // Privacy policy version
}

export interface ActionItem {
  id: string;
  phase: PhaseName;
  category: 'physical' | 'emotional' | 'communication';
  icon: string;
  title: string;
  description: string;
  priority: 1 | 2 | 3; // 1 = highest
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: number; // minutes
  content: string; // Markdown
  relatedPhases?: PhaseName[];
}

// Default values
export const DEFAULT_CYCLE_LENGTH = 28;
export const DEFAULT_PHASE_LENGTHS: PhaseLengths = {
  menstrual: 5,
  follicular: 14,
  ovulation: 15,
  luteal: 28,
};

export const DEFAULT_SETTINGS: UserSettings = {
  notificationsEnabled: true,
  notificationTypes: ['period-coming', 'pms-window', 'phase-change'],
  notificationTime: 'morning',
  consentGiven: false,
  dataSharing: 'local-only',
  onboardingCompleted: false,
};
