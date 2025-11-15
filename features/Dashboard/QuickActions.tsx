import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActionItem } from '../../components/ActionItem';
import { colors, spacing, typography } from '../../styles/tokens';
import { getTopActionsForPhase } from '../../data/phaseContent';
import type { PhaseName } from '../../types';

interface QuickActionsProps {
  phase: PhaseName;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ phase }) => {
  const actions = getTopActionsForPhase(phase, 3);
  const [completedActions, setCompletedActions] = useState<Set<string>>(new Set());

  const toggleAction = (actionId: string) => {
    setCompletedActions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(actionId)) {
        newSet.delete(actionId);
      } else {
        newSet.add(actionId);
      }
      return newSet;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quick Actions</Text>
        <Text style={styles.subtitle}>Top 3 things you can do right now</Text>
      </View>

      <View style={styles.actionsList}>
        {actions.map((action) => (
          <ActionItem
            key={action.id}
            icon={action.icon}
            title={action.title}
            description={action.description}
            category={action.category}
            completed={completedActions.has(action.id)}
            onToggle={() => toggleAction(action.id)}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💡 Check the Learn tab for more detailed guidance
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.md,
  },
  header: {
    marginBottom: spacing.md,
  },
  title: {
    fontFamily: typography.fontFamily.serif,
    fontSize: 22,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.xs / 2,
  },
  subtitle: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.neutral[600],
  },
  actionsList: {
    gap: spacing.sm,
  },
  footer: {
    marginTop: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.sage[50],
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: colors.sage[400],
  },
  footerText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 13,
    color: colors.sage[800],
    lineHeight: 18,
  },
});
