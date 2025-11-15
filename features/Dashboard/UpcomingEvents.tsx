import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../../components/Card';
import { colors, spacing, typography } from '../../styles/tokens';
import { addDays, differenceInDays, format } from 'date-fns';
import { parseISO } from 'date-fns';
import type { CycleData, PhaseName } from '../../types';

interface UpcomingEventsProps {
  cycleData: CycleData;
  currentPhase: PhaseName;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ cycleData, currentPhase }) => {
  const startDate = parseISO(cycleData.startDate);
  const cycleLength = cycleData.cycleLength;

  // Calculate next period
  const nextPeriodDate = addDays(startDate, cycleLength);
  const daysUntilPeriod = differenceInDays(nextPeriodDate, new Date());

  // Calculate next phase change
  const nextPhaseInfo = getNextPhaseInfo(currentPhase, cycleData, startDate);

  return (
    <Card title="Upcoming">
      <View style={styles.eventsList}>
        {/* Next Period */}
        <View style={styles.event}>
          <View style={[styles.eventIcon, { backgroundColor: colors.menstrual.background }]}>
            <Text style={styles.eventIconText}>📅</Text>
          </View>
          <View style={styles.eventContent}>
            <Text style={styles.eventTitle}>Next Period</Text>
            <Text style={styles.eventDate}>{format(nextPeriodDate, 'MMMM d, yyyy')}</Text>
            <Text style={styles.eventCountdown}>
              {daysUntilPeriod > 0
                ? `in ${daysUntilPeriod} day${daysUntilPeriod !== 1 ? 's' : ''}`
                : daysUntilPeriod === 0
                ? 'today'
                : `${Math.abs(daysUntilPeriod)} day${Math.abs(daysUntilPeriod) !== 1 ? 's' : ''} ago (update needed)`}
            </Text>
          </View>
        </View>

        {/* PMS Window (if applicable) */}
        {daysUntilPeriod > 3 && daysUntilPeriod <= 7 && (
          <View style={styles.event}>
            <View style={[styles.eventIcon, { backgroundColor: colors.luteal.background }]}>
              <Text style={styles.eventIconText}>⚠️</Text>
            </View>
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>PMS Window</Text>
              <Text style={styles.eventDescription}>
                PMS symptoms may begin. Extra patience and support appreciated.
              </Text>
            </View>
          </View>
        )}

        {/* Next Phase */}
        {nextPhaseInfo && (
          <View style={styles.event}>
            <View
              style={[
                styles.eventIcon,
                { backgroundColor: nextPhaseInfo.backgroundColor },
              ]}
            >
              <Text style={styles.eventIconText}>{nextPhaseInfo.icon}</Text>
            </View>
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>Next: {nextPhaseInfo.name}</Text>
              <Text style={styles.eventCountdown}>
                in {nextPhaseInfo.daysUntil} day{nextPhaseInfo.daysUntil !== 1 ? 's' : ''}
              </Text>
            </View>
          </View>
        )}
      </View>
    </Card>
  );
};

function getNextPhaseInfo(
  currentPhase: PhaseName,
  cycleData: CycleData,
  startDate: Date
): { name: string; icon: string; backgroundColor: string; daysUntil: number } | null {
  const today = new Date();
  const daysSinceStart = differenceInDays(today, startDate);
  const dayOfCycle = (daysSinceStart % cycleData.cycleLength) + 1;

  const phases: Array<{ name: PhaseName; displayName: string; icon: string; endDay: number; backgroundColor: string }> = [
    {
      name: 'menstrual',
      displayName: 'Menstrual Phase',
      icon: '🩸',
      endDay: cycleData.phaseLengths.menstrual,
      backgroundColor: colors.menstrual.background,
    },
    {
      name: 'follicular',
      displayName: 'Follicular Phase',
      icon: '🌱',
      endDay: cycleData.phaseLengths.follicular,
      backgroundColor: colors.follicular.background,
    },
    {
      name: 'ovulation',
      displayName: 'Ovulation',
      icon: '✨',
      endDay: cycleData.phaseLengths.ovulation,
      backgroundColor: colors.ovulation.background,
    },
    {
      name: 'luteal',
      displayName: 'Luteal Phase',
      icon: '🍂',
      endDay: cycleData.cycleLength,
      backgroundColor: colors.luteal.background,
    },
  ];

  // Find current phase index
  const currentIndex = phases.findIndex((p) => p.name === currentPhase);
  if (currentIndex === -1) return null;

  // Get next phase (wrap around to menstrual)
  const nextPhase = phases[(currentIndex + 1) % phases.length];

  // Calculate days until next phase
  let daysUntil: number;
  if (currentIndex === phases.length - 1) {
    // Currently in luteal, next is menstrual (start of next cycle)
    daysUntil = cycleData.cycleLength - dayOfCycle + 1;
  } else {
    // Days until end of current phase
    daysUntil = phases[currentIndex].endDay - dayOfCycle + 1;
  }

  if (daysUntil <= 0) return null;

  return {
    name: nextPhase.displayName,
    icon: nextPhase.icon,
    backgroundColor: nextPhase.backgroundColor,
    daysUntil,
  };
}

const styles = StyleSheet.create({
  eventsList: {
    gap: spacing.md,
  },
  event: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  eventIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  eventIconText: {
    fontSize: 24,
  },
  eventContent: {
    flex: 1,
    paddingTop: 4,
  },
  eventTitle: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 16,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.xs / 2,
  },
  eventDate: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.neutral[700],
    marginBottom: spacing.xs / 2,
  },
  eventCountdown: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 13,
    color: colors.neutral[600],
    fontStyle: 'italic',
  },
  eventDescription: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    lineHeight: 20,
    color: colors.neutral[700],
  },
});
