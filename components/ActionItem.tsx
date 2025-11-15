import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../styles/tokens';

type ActionCategory = 'physical' | 'emotional' | 'communication';

interface ActionItemProps {
  icon: string;
  title: string;
  description: string;
  category: ActionCategory;
  completed?: boolean;
  onToggle?: () => void;
  accessibilityLabel?: string;
}

export const ActionItem: React.FC<ActionItemProps> = ({
  icon,
  title,
  description,
  category,
  completed = false,
  onToggle,
  accessibilityLabel,
}) => {
  const categoryColor = getCategoryColor(category);

  const content = (
    <>
      {/* Icon and category indicator */}
      <View style={styles.iconContainer}>
        <View
          style={[
            styles.iconCircle,
            { backgroundColor: categoryColor.background },
          ]}
        >
          <Text style={styles.icon} accessible={false}>
            {icon}
          </Text>
        </View>
        <View
          style={[
            styles.categoryIndicator,
            { backgroundColor: categoryColor.primary },
          ]}
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={[styles.category, { color: categoryColor.primary }]}>
          {getCategoryLabel(category)}
        </Text>
      </View>

      {/* Completion checkbox */}
      {onToggle && (
        <TouchableOpacity
          style={[
            styles.checkbox,
            completed && styles.checkboxCompleted,
            completed && { backgroundColor: colors.sage[500] },
          ]}
          onPress={onToggle}
          accessible={true}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: completed }}
          accessibilityLabel={`Mark "${title}" as ${
            completed ? 'incomplete' : 'complete'
          }`}
        >
          {completed && (
            <Text style={styles.checkmark} accessible={false}>
              ✓
            </Text>
          )}
        </TouchableOpacity>
      )}
    </>
  );

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel={
        accessibilityLabel || `${title}. ${description}. ${getCategoryLabel(category)}.`
      }
    >
      {content}
    </View>
  );
};

function getCategoryColor(category: ActionCategory) {
  switch (category) {
    case 'physical':
      return { primary: colors.terracotta[500], background: colors.terracotta[100] };
    case 'emotional':
      return { primary: colors.sage[600], background: colors.sage[100] };
    case 'communication':
      return { primary: colors.ovulation.primary, background: colors.ovulation.background };
  }
}

function getCategoryLabel(category: ActionCategory): string {
  switch (category) {
    case 'physical':
      return 'Physical Support';
    case 'emotional':
      return 'Emotional Support';
    case 'communication':
      return 'Communication';
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.neutral[50],
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.neutral[200],
  },
  iconContainer: {
    position: 'relative',
    marginRight: spacing.md,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
  },
  categoryIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.neutral[50],
  },
  content: {
    flex: 1,
    paddingTop: 2,
  },
  title: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.xs,
  },
  description: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    lineHeight: 20,
    color: colors.neutral[700],
    marginBottom: spacing.xs,
  },
  category: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500' as any,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.neutral[400],
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.sm,
    marginTop: 10,
  },
  checkboxCompleted: {
    borderColor: colors.sage[500],
  },
  checkmark: {
    color: colors.neutral[50],
    fontSize: 16,
    fontWeight: '600' as any,
  },
});
