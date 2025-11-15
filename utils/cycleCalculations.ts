import { differenceInDays, addDays, parseISO } from 'date-fns';
import type { CyclePhase, CycleData, PhaseName, PhaseLengths } from '../types';
import { DEFAULT_CYCLE_LENGTH, DEFAULT_PHASE_LENGTHS } from '../types';

/**
 * Calculate the current cycle phase based on cycle data
 */
export function calculateCurrentPhase(
  cycleData: CycleData | null
): CyclePhase | null {
  if (!cycleData) return null;

  const startDate = parseISO(cycleData.startDate);
  const today = new Date();
  const cycleLength = cycleData.cycleLength || DEFAULT_CYCLE_LENGTH;
  const phaseLengths = cycleData.phaseLengths || DEFAULT_PHASE_LENGTHS;

  // Calculate day of cycle (1-based)
  const daysSinceStart = differenceInDays(today, startDate);
  const dayOfCycle = (daysSinceStart % cycleLength) + 1;

  // Determine phase based on cycle day
  const phase = determinePhase(dayOfCycle, phaseLengths);

  return {
    name: phase,
    day: dayOfCycle,
  };
}

/**
 * Determine which phase a given cycle day falls into
 */
function determinePhase(
  dayOfCycle: number,
  phaseLengths: PhaseLengths
): PhaseName {
  if (dayOfCycle <= phaseLengths.menstrual) {
    return 'menstrual';
  } else if (dayOfCycle <= phaseLengths.follicular) {
    return 'follicular';
  } else if (dayOfCycle <= phaseLengths.ovulation) {
    return 'ovulation';
  } else {
    return 'luteal';
  }
}

/**
 * Calculate days until next period
 */
export function daysUntilNextPeriod(cycleData: CycleData | null): number {
  if (!cycleData) return 0;

  const startDate = parseISO(cycleData.startDate);
  const today = new Date();
  const cycleLength = cycleData.cycleLength || DEFAULT_CYCLE_LENGTH;

  const daysSinceStart = differenceInDays(today, startDate);
  const dayOfCycle = (daysSinceStart % cycleLength) + 1;

  return cycleLength - dayOfCycle + 1;
}

/**
 * Check if currently in PMS window (3-5 days before period)
 */
export function isInPMSWindow(cycleData: CycleData | null): boolean {
  const days = daysUntilNextPeriod(cycleData);
  return days > 0 && days <= 5;
}

/**
 * Get phase color based on phase name
 */
export function getPhaseColor(phase: PhaseName): {
  primary: string;
  background: string;
  accent: string;
} {
  const phaseColors = {
    menstrual: {
      primary: '#B35A47',
      background: '#FFF4F2',
      accent: '#E8734C',
    },
    follicular: {
      primary: '#7D9E6F',
      background: '#F6F8F4',
      accent: '#9BB48E',
    },
    ovulation: {
      primary: '#E8A54C',
      background: '#FFF9F0',
      accent: '#FFCF93',
    },
    luteal: {
      primary: '#C17854',
      background: '#FFF7F3',
      accent: '#E8985C',
    },
  };

  return phaseColors[phase];
}

/**
 * Get phase display name
 */
export function getPhaseDisplayName(phase: PhaseName): string {
  const names = {
    menstrual: 'Menstrual Phase',
    follicular: 'Follicular Phase',
    ovulation: 'Ovulation',
    luteal: 'Luteal Phase',
  };

  return names[phase];
}

/**
 * Get phase emoji icon
 */
export function getPhaseEmoji(phase: PhaseName): string {
  const emojis = {
    menstrual: '🌊',
    follicular: '🌱',
    ovulation: '☀️',
    luteal: '🌙',
  };

  return emojis[phase];
}

/**
 * Calculate next phase change date
 */
export function getNextPhaseChangeDate(
  cycleData: CycleData | null
): Date | null {
  if (!cycleData) return null;

  const currentPhase = calculateCurrentPhase(cycleData);
  if (!currentPhase) return null;

  const startDate = parseISO(cycleData.startDate);
  const phaseLengths = cycleData.phaseLengths || DEFAULT_PHASE_LENGTHS;

  let daysUntilNextPhase = 0;

  switch (currentPhase.name) {
    case 'menstrual':
      daysUntilNextPhase = phaseLengths.menstrual - currentPhase.day + 1;
      break;
    case 'follicular':
      daysUntilNextPhase = phaseLengths.follicular - currentPhase.day + 1;
      break;
    case 'ovulation':
      daysUntilNextPhase = phaseLengths.ovulation - currentPhase.day + 1;
      break;
    case 'luteal':
      daysUntilNextPhase = phaseLengths.luteal - currentPhase.day + 1;
      break;
  }

  return addDays(new Date(), daysUntilNextPhase);
}
