import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAppStore, useCurrentPhase } from '../../hooks/useAppStore';
import { CurrentPhase } from '../../features/Dashboard/CurrentPhase';
import { QuickActions } from '../../features/Dashboard/QuickActions';
import { UpcomingEvents } from '../../features/Dashboard/UpcomingEvents';
import { colors, spacing, typography } from '../../styles/tokens';

export default function DashboardScreen() {
  const cycleData = useAppStore((state) => state.cycleData);
  const settings = useAppStore((state) => state.settings);
  const currentPhase = useCurrentPhase();

  if (!cycleData || !currentPhase) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No cycle data available</Text>
        <Text style={styles.emptySubtext}>
          Go to Settings to update cycle information
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Greeting */}
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>
          {getGreeting()}
          {settings.partnerName ? `, supporting ${settings.partnerName}` : ''}
        </Text>
      </View>

      {/* Current Phase Card */}
      <CurrentPhase phase={currentPhase} />

      {/* Quick Actions */}
      <QuickActions phase={currentPhase.name} />

      {/* Upcoming Events */}
      <UpcomingEvents cycleData={cycleData} currentPhase={currentPhase.name} />

      {/* Footer Reminder */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Remember: Use this to support, never to judge or dismiss. Every cycle is different.
        </Text>
      </View>
    </ScrollView>
  );
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[100],
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing['2xl'],
  },
  greeting: {
    marginBottom: spacing.lg,
  },
  greetingText: {
    fontFamily: typography.fontFamily.serif,
    fontSize: 24,
    fontWeight: '600' as any,
    color: colors.neutral[900],
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    backgroundColor: colors.neutral[100],
  },
  emptyText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 18,
    fontWeight: '600' as any,
    color: colors.neutral[700],
    marginBottom: spacing.sm,
  },
  emptySubtext: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.neutral[600],
    textAlign: 'center',
  },
  footer: {
    marginTop: spacing.xl,
    padding: spacing.md,
    backgroundColor: colors.terracotta[50],
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: colors.terracotta[400],
  },
  footerText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 13,
    color: colors.terracotta[800],
    lineHeight: 18,
    fontStyle: 'italic',
  },
});
