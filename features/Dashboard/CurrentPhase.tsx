import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../../components/Card';
import { PhaseIndicator } from '../../components/PhaseIndicator';
import { colors, spacing, typography } from '../../styles/tokens';
import type { CyclePhase, PhaseName } from '../../types';

interface CurrentPhaseProps {
  phase: CyclePhase;
}

export const CurrentPhase: React.FC<CurrentPhaseProps> = ({ phase }) => {
  const phaseInfo = getPhaseInfo(phase.name);

  return (
    <Card variant="phase-specific" phase={phase.name}>
      <PhaseIndicator phase={phase} showDay={true} />

      <View style={styles.phaseInfo}>
        <Text style={styles.phaseTitle}>{phaseInfo.title}</Text>
        <Text style={styles.phaseDescription}>{phaseInfo.description}</Text>
      </View>

      <View style={styles.expectationsSection}>
        <Text style={styles.expectationsTitle}>What to Expect</Text>
        <View style={styles.expectationsList}>
          {phaseInfo.expectations.map((expectation, index) => (
            <View key={index} style={styles.expectationItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.expectationText}>{expectation}</Text>
            </View>
          ))}
        </View>
      </View>
    </Card>
  );
};

function getPhaseInfo(phase: PhaseName) {
  switch (phase) {
    case 'menstrual':
      return {
        title: 'Menstrual Phase',
        description: 'Hormone levels are at their lowest. Energy is low and extra support is appreciated.',
        expectations: [
          'Period cramps and physical discomfort',
          'Low energy and need for rest',
          'Possible mood sensitivity',
          'Appreciate practical help and comfort',
        ],
      };
    case 'follicular':
      return {
        title: 'Follicular Phase',
        description: 'Energy and mood are on the rise. Great time for activities and quality time together.',
        expectations: [
          'Increasing energy levels',
          'More positive mood',
          'Better communication',
          'Open to trying new things',
        ],
      };
    case 'ovulation':
      return {
        title: 'Ovulation Phase',
        description: 'Peak energy window! This is typically the best time for social activities and important conversations.',
        expectations: [
          'Highest energy and confidence',
          'Strong communication skills',
          'Most social and outgoing',
          'Great connection opportunity',
        ],
      };
    case 'luteal':
      return {
        title: 'Luteal Phase',
        description: 'Energy gradually decreases and PMS symptoms may appear. Extra patience and understanding help.',
        expectations: [
          'Possible mood swings or irritability',
          'Energy levels declining',
          'Food cravings may increase',
          'Need for emotional support',
        ],
      };
  }
}

const styles = StyleSheet.create({
  phaseInfo: {
    marginTop: spacing.md,
  },
  phaseTitle: {
    fontFamily: typography.fontFamily.serif,
    fontSize: 20,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.xs,
  },
  phaseDescription: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 15,
    lineHeight: 22,
    color: colors.neutral[700],
  },
  expectationsSection: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.neutral[200],
  },
  expectationsTitle: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
  },
  expectationsList: {
    gap: spacing.xs,
  },
  expectationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bulletPoint: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 16,
    color: colors.neutral[600],
    marginRight: spacing.sm,
    marginTop: 2,
  },
  expectationText: {
    flex: 1,
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    lineHeight: 20,
    color: colors.neutral[700],
  },
});
