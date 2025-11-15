import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { colors, spacing, typography } from '../../styles/tokens';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/onboarding/consent');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.emoji}>🌸</Text>
        <Text style={styles.title}>Period Support</Text>
        <Text style={styles.subtitle}>Partner Edition</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.heading}>Welcome!</Text>

        <Text style={styles.paragraph}>
          This app helps partners understand and support their loved ones through the menstrual cycle.
        </Text>

        <View style={styles.featureList}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📅</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Track Cycle Phases</Text>
              <Text style={styles.featureDescription}>
                Know what phase they're in and what to expect
              </Text>
            </View>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>💡</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Get Action Items</Text>
              <Text style={styles.featureDescription}>
                Specific, practical ways to support right now
              </Text>
            </View>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📚</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Learn & Grow</Text>
              <Text style={styles.featureDescription}>
                Understand the science and strengthen your relationship
              </Text>
            </View>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🔔</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Stay Prepared</Text>
              <Text style={styles.featureDescription}>
                Gentle reminders for phase changes and period timing
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.importantNote}>
          <Text style={styles.importantTitle}>⚠️ Important</Text>
          <Text style={styles.importantText}>
            This app requires mutual consent. Both you and your partner must agree to share cycle information.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          title="Get Started"
          onPress={handleContinue}
          variant="primary"
          size="large"
          fullWidth
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  content: {
    padding: spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginTop: spacing['2xl'],
    marginBottom: spacing.xl,
  },
  emoji: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  title: {
    fontFamily: typography.fontFamily.serif,
    fontSize: 32,
    fontWeight: '700' as any,
    color: colors.terracotta[500],
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 18,
    color: colors.neutral[600],
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  body: {
    marginBottom: spacing.xl,
  },
  heading: {
    fontFamily: typography.fontFamily.serif,
    fontSize: 28,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.md,
  },
  paragraph: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 16,
    lineHeight: 24,
    color: colors.neutral[700],
    marginBottom: spacing.lg,
  },
  featureList: {
    marginBottom: spacing.lg,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 16,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.xs / 2,
  },
  featureDescription: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    lineHeight: 20,
    color: colors.neutral[600],
  },
  importantNote: {
    backgroundColor: colors.terracotta[100],
    borderLeftWidth: 4,
    borderLeftColor: colors.terracotta[500],
    padding: spacing.md,
    borderRadius: 8,
  },
  importantTitle: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    fontWeight: '600' as any,
    color: colors.terracotta[700],
    marginBottom: spacing.xs,
  },
  importantText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    lineHeight: 20,
    color: colors.terracotta[800],
  },
  footer: {
    marginTop: spacing.xl,
    marginBottom: spacing['2xl'],
  },
});
