import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { colors, spacing, borderRadius, shadows, typography } from '../styles/tokens';
import type { PhaseName } from '../types';

type CardVariant = 'default' | 'phase-specific';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  onPress?: () => void;
  variant?: CardVariant;
  phase?: PhaseName;
  style?: ViewStyle;
  accessibilityLabel?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  onPress,
  variant = 'default',
  phase,
  style,
  accessibilityLabel,
}) => {
  const phaseColors = phase ? getPhaseColors(phase) : null;

  const containerStyle = [
    styles.card,
    variant === 'phase-specific' && phaseColors && {
      backgroundColor: phaseColors.background,
      borderLeftWidth: 4,
      borderLeftColor: phaseColors.primary,
    },
    style,
  ];

  const content = (
    <>
      {title && (
        <Text
          style={[
            styles.title,
            variant === 'phase-specific' && phaseColors && {
              color: phaseColors.primary,
            },
          ]}
        >
          {title}
        </Text>
      )}
      <View style={styles.content}>{children}</View>
    </>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={onPress}
        accessible={true}
        accessibilityLabel={accessibilityLabel || title}
        accessibilityRole="button"
        activeOpacity={0.7}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={containerStyle}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
    >
      {content}
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.neutral[50],
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.md,
  },
  title: {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.heading.h3.fontSize,
    lineHeight: typography.heading.h3.lineHeight,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.md,
  },
  content: {
    // Content wrapper - allows for flexible child layouts
  },
});
