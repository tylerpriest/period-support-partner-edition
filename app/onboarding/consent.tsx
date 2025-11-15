import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { colors, spacing, typography, borderRadius } from '../../styles/tokens';
import { useAppStore } from '../../hooks/useAppStore';

export default function ConsentScreen() {
  const router = useRouter();
  const setConsent = useAppStore((state) => state.setConsent);
  const [hasReadAll, setHasReadAll] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleContinue = async () => {
    if (agreedToTerms) {
      await setConsent({
        given: true,
        version: '1.0.0',
        timestamp: new Date().toISOString(),
      });
      router.push('/onboarding/setup');
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      onScroll={(event) => {
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isScrolledToBottom = contentOffset.y + layoutMeasurement.height >= contentSize.height - 20;
        if (isScrolledToBottom) {
          setHasReadAll(true);
        }
      }}
      scrollEventThrottle={400}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Consent & Ethics</Text>
        <Text style={styles.subtitle}>Please read this carefully before continuing</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✋ Mutual Consent Required</Text>
        <Text style={styles.sectionText}>
          Both you and your partner must explicitly agree to share cycle information. This app is not meant for secret tracking or surveillance.
        </Text>
        <Text style={styles.sectionText}>
          Have you discussed using this app with your partner and received their enthusiastic consent?
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 This App is For Support, Not Surveillance</Text>
        <Text style={styles.sectionText}>
          The purpose of this app is to help you provide better support and understanding. It should never be used to:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bullet}>• Dismiss or invalidate emotions</Text>
          <Text style={styles.bullet}>• Control or manipulate behavior</Text>
          <Text style={styles.bullet}>• Make assumptions about mood or needs</Text>
          <Text style={styles.bullet}>• Pressure intimacy or make demands</Text>
          <Text style={styles.bullet}>• Win arguments or prove points</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔒 Privacy & Control</Text>
        <Text style={styles.sectionText}>
          Your partner retains full control over their data:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bullet}>• They can revoke sharing at any time</Text>
          <Text style={styles.bullet}>• All data stays on your device by default</Text>
          <Text style={styles.bullet}>• We never sell or share data with third parties</Text>
          <Text style={styles.bullet}>• Easy data deletion is always available</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚕️ Not Medical Advice</Text>
        <Text style={styles.sectionText}>
          This app is for educational and relationship support purposes only. It is not intended to diagnose, treat, cure, or prevent any medical condition. Always consult healthcare providers for medical advice.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💬 Healthy Relationships</Text>
        <Text style={styles.sectionText}>
          If you're in an unhealthy or abusive relationship, this app may not be safe to use. Please prioritize your safety and reach out to:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bullet}>• National Domestic Violence Hotline: 1-800-799-7233</Text>
          <Text style={styles.bullet}>• Text "START" to 88788</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🤝 Your Commitment</Text>
        <Text style={styles.sectionText}>
          By using this app, you commit to:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bullet}>• Using information supportively, never dismissively</Text>
          <Text style={styles.bullet}>• Respecting boundaries and consent</Text>
          <Text style={styles.bullet}>• Never attributing emotions solely to hormones</Text>
          <Text style={styles.bullet}>• Asking what they need rather than assuming</Text>
          <Text style={styles.bullet}>• Treating this as a support tool, not a control mechanism</Text>
        </View>
      </View>

      <View style={styles.checkboxSection}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setAgreedToTerms(!agreedToTerms)}
          accessible={true}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: agreedToTerms }}
        >
          <View style={[styles.checkboxBox, agreedToTerms && styles.checkboxChecked]}>
            {agreedToTerms && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxLabel}>
            I have read and agree to use this app ethically and with my partner's full consent
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        {!hasReadAll && (
          <Text style={styles.scrollHint}>↓ Scroll to read all before continuing ↓</Text>
        )}
        <Button
          title="I Agree - Continue"
          onPress={handleContinue}
          variant="primary"
          size="large"
          fullWidth
          disabled={!agreedToTerms || !hasReadAll}
        />
        <Button
          title="Go Back"
          onPress={() => router.back()}
          variant="tertiary"
          size="medium"
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
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },
  title: {
    fontFamily: typography.fontFamily.serif,
    fontSize: 28,
    fontWeight: '700' as any,
    color: colors.neutral[900],
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 16,
    color: colors.neutral[600],
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 18,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.sm,
  },
  sectionText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 15,
    lineHeight: 22,
    color: colors.neutral[700],
    marginBottom: spacing.sm,
  },
  bulletList: {
    marginLeft: spacing.sm,
  },
  bullet: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    lineHeight: 22,
    color: colors.neutral[700],
    marginBottom: spacing.xs / 2,
  },
  checkboxSection: {
    marginVertical: spacing.lg,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkboxBox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.neutral[400],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: colors.sage[500],
    borderColor: colors.sage[500],
  },
  checkmark: {
    color: colors.neutral[50],
    fontSize: 16,
    fontWeight: '600' as any,
  },
  checkboxLabel: {
    flex: 1,
    fontFamily: typography.fontFamily.sans,
    fontSize: 15,
    lineHeight: 22,
    color: colors.neutral[900],
    fontWeight: '500' as any,
  },
  scrollHint: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.terracotta[600],
    textAlign: 'center',
    marginBottom: spacing.md,
    fontWeight: '500' as any,
  },
  footer: {
    marginTop: spacing.lg,
    marginBottom: spacing['2xl'],
    gap: spacing.md,
  },
});
