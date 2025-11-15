import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../styles/tokens';
import type { PhaseName, CyclePhase } from '../types';

interface PhaseIndicatorProps {
  phase: CyclePhase;
  showDay?: boolean;
}

export const PhaseIndicator: React.FC<PhaseIndicatorProps> = ({
  phase,
  showDay = true,
}) => {
  const phaseColors = getPhaseColors(phase.name);
  const phaseLabel = getPhaseLabel(phase.name);

  return (
    <View style={styles.container}>
      <View style={styles.phaseRow}>
        {/* Phase dots indicator */}
        <View style={styles.dotsContainer}>
          {(['menstrual', 'follicular', 'ovulation', 'luteal'] as PhaseName[]).map(
            (p) => (
              <View
                key={p}
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      p === phase.name
                        ? getPhaseColors(p).primary
                        : colors.neutral[300],
                  },
                ]}
                accessible={false}
              />
            )
          )}
        </View>

        {/* Current phase label */}
        <View
          style={[
            styles.phaseLabel,
            { backgroundColor: phaseColors.background },
          ]}
        >
          <View
            style={[
              styles.phaseColorBar,
              { backgroundColor: phaseColors.primary },
            ]}
          />
          <Text
            style={[styles.phaseName, { color: phaseColors.primary }]}
            accessible={true}
            accessibilityLabel={`Current phase: ${phaseLabel}`}
          >
            {phaseLabel}
          </Text>
        </View>
      </View>

      {/* Cycle day */}
      {showDay && (
        <Text
          style={styles.dayText}
          accessible={true}
          accessibilityLabel={`Day ${phase.day} of cycle`}
        >
          Day {phase.day}
        </Text>
      )}
    </View>
  );
};

function getPhaseColors(phase: PhaseName) {
  switch (phase) {
    case 'menstrual':
      return colors.menstrual;
    case 'follicular':
      return colors.follicular;
    case 'ovulation':
      return colors.ovulation;
    case 'luteal':
      return colors.luteal;
  }
}

function getPhaseLabel(phase: PhaseName): string {
  switch (phase) {
    case 'menstrual':
      return 'Menstrual';
    case 'follicular':
      return 'Follicular';
    case 'ovulation':
      return 'Ovulation';
    case 'luteal':
      return 'Luteal';
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  phaseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: spacing.xs,
    marginRight: spacing.md,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  phaseLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
  },
  phaseColorBar: {
    width: 3,
    height: 16,
    borderRadius: 1.5,
    marginRight: spacing.xs,
  },
  phaseName: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    fontWeight: '600' as any,
    textTransform: 'capitalize',
  },
  dayText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 12,
    color: colors.neutral[600],
    fontWeight: '500' as any,
  },
});
