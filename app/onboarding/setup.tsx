import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { colors, spacing, typography, borderRadius } from '../../styles/tokens';
import { useAppStore } from '../../hooks/useAppStore';
import { DEFAULT_CYCLE_LENGTH, DEFAULT_PHASE_LENGTHS } from '../../types';

export default function SetupScreen() {
  const router = useRouter();
  const setCycleData = useAppStore((state) => state.setCycleData);
  const updateSettings = useAppStore((state) => state.updateSettings);

  const [periodStartDate, setPeriodStartDate] = useState<Date>(new Date());
  const [cycleLength, setCycleLength] = useState<string>('28');
  const [partnerName, setPartnerName] = useState<string>('');
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);

  // Date picker helpers
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const adjustDate = (days: number) => {
    const newDate = new Date(periodStartDate);
    newDate.setDate(newDate.getDate() + days);
    setPeriodStartDate(newDate);
  };

  const handleComplete = async () => {
    const cycleLengthNum = parseInt(cycleLength) || DEFAULT_CYCLE_LENGTH;

    // Set cycle data
    await setCycleData({
      startDate: periodStartDate.toISOString(),
      cycleLength: cycleLengthNum,
      phaseLengths: DEFAULT_PHASE_LENGTHS,
      pastCycles: [],
    });

    // Set settings
    await updateSettings({
      notificationsEnabled,
      partnerName: partnerName.trim() || undefined,
      onboardingCompleted: true,
    });

    // Navigate to main app
    router.replace('/(tabs)');
  };

  const isValid = () => {
    const cycleLengthNum = parseInt(cycleLength);
    return cycleLengthNum >= 21 && cycleLengthNum <= 45;
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Cycle Setup</Text>
        <Text style={styles.subtitle}>Let's get started with the basics</Text>
      </View>

      {/* Partner Name (Optional) */}
      <View style={styles.field}>
        <Text style={styles.label}>Partner's Name (Optional)</Text>
        <TextInput
          style={styles.input}
          value={partnerName}
          onChangeText={setPartnerName}
          placeholder="Enter name..."
          placeholderTextColor={colors.neutral[400]}
          accessible={true}
          accessibilityLabel="Partner's name"
        />
        <Text style={styles.hint}>
          This helps personalize the app. You can use a nickname or leave blank.
        </Text>
      </View>

      {/* Period Start Date */}
      <View style={styles.field}>
        <Text style={styles.label}>When did their last period start?</Text>
        <View style={styles.datePicker}>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => adjustDate(-1)}
            accessible={true}
            accessibilityLabel="Previous day"
            accessibilityRole="button"
          >
            <Text style={styles.dateButtonText}>-</Text>
          </TouchableOpacity>

          <View style={styles.dateDisplay}>
            <Text style={styles.dateText}>{formatDate(periodStartDate)}</Text>
          </View>

          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => adjustDate(1)}
            accessible={true}
            accessibilityLabel="Next day"
            accessibilityRole="button"
          >
            <Text style={styles.dateButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.hint}>
          Use the - and + buttons to select the first day of their most recent period.
        </Text>
      </View>

      {/* Cycle Length */}
      <View style={styles.field}>
        <Text style={styles.label}>Average Cycle Length (days)</Text>
        <TextInput
          style={styles.input}
          value={cycleLength}
          onChangeText={setCycleLength}
          keyboardType="number-pad"
          placeholder="28"
          placeholderTextColor={colors.neutral[400]}
          accessible={true}
          accessibilityLabel="Cycle length in days"
        />
        <Text style={styles.hint}>
          Typical cycles range from 21-35 days. The average is 28 days.
        </Text>
        {!isValid() && cycleLength.length > 0 && (
          <Text style={styles.error}>
            Please enter a cycle length between 21 and 45 days
          </Text>
        )}
      </View>

      {/* Notifications */}
      <View style={styles.field}>
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setNotificationsEnabled(!notificationsEnabled)}
          accessible={true}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: notificationsEnabled }}
        >
          <View style={[styles.checkboxBox, notificationsEnabled && styles.checkboxChecked]}>
            {notificationsEnabled && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <View style={styles.checkboxContent}>
            <Text style={styles.checkboxLabel}>Enable Notifications</Text>
            <Text style={styles.checkboxHint}>
              Get reminders for period timing and phase changes
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <Text style={styles.infoIcon}>💡</Text>
        <View style={styles.infoContent}>
          <Text style={styles.infoTitle}>You can change these later</Text>
          <Text style={styles.infoText}>
            All settings can be updated in the Settings tab at any time.
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Button
          title="Complete Setup"
          onPress={handleComplete}
          variant="primary"
          size="large"
          fullWidth
          disabled={!isValid()}
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
    marginBottom: spacing.xl,
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
  field: {
    marginBottom: spacing.lg,
  },
  label: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 16,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.sm,
  },
  input: {
    backgroundColor: colors.neutral[100],
    borderWidth: 1,
    borderColor: colors.neutral[300],
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontFamily: typography.fontFamily.sans,
    fontSize: 16,
    color: colors.neutral[900],
  },
  hint: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.neutral[600],
    marginTop: spacing.xs,
    lineHeight: 20,
  },
  error: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.terracotta[600],
    marginTop: spacing.xs,
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  dateButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.terracotta[500],
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateButtonText: {
    fontSize: 24,
    color: colors.neutral[50],
    fontWeight: '600' as any,
  },
  dateDisplay: {
    flex: 1,
    backgroundColor: colors.neutral[100],
    borderWidth: 1,
    borderColor: colors.neutral[300],
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
  },
  dateText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 16,
    color: colors.neutral[900],
    fontWeight: '500' as any,
  },
  checkboxRow: {
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
  checkboxContent: {
    flex: 1,
  },
  checkboxLabel: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 16,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.xs / 2,
  },
  checkboxHint: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.neutral[600],
    lineHeight: 20,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: colors.sage[100],
    borderLeftWidth: 4,
    borderLeftColor: colors.sage[500],
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.lg,
  },
  infoIcon: {
    fontSize: 24,
    marginRight: spacing.sm,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    fontWeight: '600' as any,
    color: colors.sage[800],
    marginBottom: spacing.xs / 2,
  },
  infoText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.sage[700],
    lineHeight: 20,
  },
  footer: {
    marginTop: spacing.xl,
    marginBottom: spacing['2xl'],
  },
});
