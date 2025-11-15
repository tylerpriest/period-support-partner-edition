import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { colors, spacing, typography, borderRadius } from '../../styles/tokens';
import { useAppStore } from '../../hooks/useAppStore';
import { DEFAULT_CYCLE_LENGTH } from '../../types';
import { format, parseISO } from 'date-fns';
import { sendTestNotification } from '../../utils/notifications';

export default function SettingsScreen() {
  const cycleData = useAppStore((state) => state.cycleData);
  const settings = useAppStore((state) => state.settings);
  const setCycleData = useAppStore((state) => state.setCycleData);
  const updateSettings = useAppStore((state) => state.updateSettings);
  const clearAllData = useAppStore((state) => state.clearAllData);

  const [showCycleModal, setShowCycleModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Cycle update state
  const [newStartDate, setNewStartDate] = useState<Date>(
    cycleData ? parseISO(cycleData.startDate) : new Date()
  );
  const [newCycleLength, setNewCycleLength] = useState<string>(
    cycleData ? cycleData.cycleLength.toString() : '28'
  );

  const handleUpdateCycle = async () => {
    if (cycleData) {
      const cycleLengthNum = parseInt(newCycleLength) || DEFAULT_CYCLE_LENGTH;
      await setCycleData({
        ...cycleData,
        startDate: newStartDate.toISOString(),
        cycleLength: cycleLengthNum,
      });
      setShowCycleModal(false);
    }
  };

  const handleClearData = () => {
    Alert.alert(
      'Clear All Data?',
      'This will permanently delete all cycle data and settings. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete Everything',
          style: 'destructive',
          onPress: async () => {
            await clearAllData();
            Alert.alert('Data Cleared', 'All your data has been deleted.');
          },
        },
      ]
    );
  };

  const adjustDate = (days: number) => {
    const newDate = new Date(newStartDate);
    newDate.setDate(newDate.getDate() + days);
    setNewStartDate(newDate);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      {/* Partner Information */}
      <Card title="Partner Information">
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Partner's Name</Text>
          <Text style={styles.settingValue}>
            {settings.partnerName || 'Not set'}
          </Text>
        </View>
      </Card>

      {/* Cycle Data */}
      <Card title="Cycle Data">
        {cycleData ? (
          <>
            <View style={styles.settingRow}>
              <Text style={styles.settingLabel}>Last Period Start</Text>
              <Text style={styles.settingValue}>
                {format(parseISO(cycleData.startDate), 'MMM d, yyyy')}
              </Text>
            </View>
            <View style={styles.settingRow}>
              <Text style={styles.settingLabel}>Average Cycle Length</Text>
              <Text style={styles.settingValue}>{cycleData.cycleLength} days</Text>
            </View>
            <Button
              title="Update Cycle Data"
              onPress={() => setShowCycleModal(true)}
              variant="secondary"
              size="small"
            />
          </>
        ) : (
          <Text style={styles.noData}>No cycle data available</Text>
        )}
      </Card>

      {/* Notifications */}
      <Card title="Notifications">
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() =>
            updateSettings({ notificationsEnabled: !settings.notificationsEnabled })
          }
          accessible={true}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: settings.notificationsEnabled }}
        >
          <View
            style={[
              styles.checkboxBox,
              settings.notificationsEnabled && styles.checkboxChecked,
            ]}
          >
            {settings.notificationsEnabled && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <View style={styles.checkboxContent}>
            <Text style={styles.checkboxLabel}>Enable Notifications</Text>
            <Text style={styles.checkboxHint}>
              Get reminders for period timing and phase changes
            </Text>
          </View>
        </TouchableOpacity>

        {settings.notificationsEnabled && (
          <>
            <View style={styles.buttonSpacer} />
            <Button
              title="Send Test Notification"
              onPress={async () => {
                await sendTestNotification();
                Alert.alert('Test Sent', 'Check your notifications!');
              }}
              variant="tertiary"
              size="small"
            />
          </>
        )}
      </Card>

      {/* Privacy & Data */}
      <Card title="Privacy & Data">
        <View style={styles.privacyInfo}>
          <Text style={styles.privacyText}>
            🔒 All data is stored locally on your device by default.
          </Text>
          <Text style={styles.privacyText}>
            🚫 We never sell or share your data with third parties.
          </Text>
        </View>
        <Button
          title="Privacy Policy"
          onPress={() => setShowPrivacyModal(true)}
          variant="tertiary"
          size="small"
        />
        <View style={styles.buttonSpacer} />
        <Button
          title="Clear All Data"
          onPress={handleClearData}
          variant="tertiary"
          size="small"
        />
      </Card>

      {/* About */}
      <Card title="About">
        <View style={styles.aboutContent}>
          <Text style={styles.aboutText}>Period Support - Partner Edition</Text>
          <Text style={styles.aboutText}>Version 1.0.0</Text>
          <Text style={styles.aboutDisclaimer}>
            This app is for educational and relationship support purposes only. Not intended
            to diagnose or treat any medical condition.
          </Text>
        </View>
      </Card>

      {/* Cycle Update Modal */}
      <Modal
        visible={showCycleModal}
        onClose={() => setShowCycleModal(false)}
        title="Update Cycle Data"
      >
        <View style={styles.modalForm}>
          <View style={styles.field}>
            <Text style={styles.label}>Last Period Start Date</Text>
            <View style={styles.datePicker}>
              <TouchableOpacity style={styles.dateButton} onPress={() => adjustDate(-1)}>
                <Text style={styles.dateButtonText}>-</Text>
              </TouchableOpacity>
              <View style={styles.dateDisplay}>
                <Text style={styles.dateText}>{format(newStartDate, 'MMMM d, yyyy')}</Text>
              </View>
              <TouchableOpacity style={styles.dateButton} onPress={() => adjustDate(1)}>
                <Text style={styles.dateButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Cycle Length (days)</Text>
            <TextInput
              style={styles.input}
              value={newCycleLength}
              onChangeText={setNewCycleLength}
              keyboardType="number-pad"
              placeholder="28"
            />
          </View>

          <Button title="Save Changes" onPress={handleUpdateCycle} variant="primary" fullWidth />
        </View>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal
        visible={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title="Privacy Policy"
      >
        <View>
          <Text style={styles.policySection}>
            <Text style={styles.policyTitle}>Data Collection</Text>
            {'\n'}
            We collect only the cycle data you provide (start date, cycle length) and your
            settings preferences. We do not collect personal identifying information.
          </Text>

          <Text style={styles.policySection}>
            <Text style={styles.policyTitle}>Data Storage</Text>
            {'\n'}
            All data is stored locally on your device using encrypted storage. We do not
            transmit your data to external servers unless you explicitly enable cloud backup.
          </Text>

          <Text style={styles.policySection}>
            <Text style={styles.policyTitle}>Data Sharing</Text>
            {'\n'}
            We never sell, rent, or share your data with third parties. Your cycle information
            remains private between you and your partner.
          </Text>

          <Text style={styles.policySection}>
            <Text style={styles.policyTitle}>Your Rights</Text>
            {'\n'}
            You have the right to access, export, and delete your data at any time. Use the
            "Clear All Data" button in Settings to permanently delete all information.
          </Text>

          <Text style={styles.policySection}>
            <Text style={styles.policyTitle}>Security</Text>
            {'\n'}
            We use industry-standard encryption to protect your data. However, no system is
            100% secure. Please protect your device with a passcode.
          </Text>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[100],
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing['2xl'],
    gap: spacing.md,
  },
  header: {
    marginBottom: spacing.md,
  },
  title: {
    fontFamily: typography.fontFamily.serif,
    fontSize: 24,
    fontWeight: '600' as any,
    color: colors.neutral[900],
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
    marginBottom: spacing.sm,
  },
  settingLabel: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 15,
    color: colors.neutral[700],
  },
  settingValue: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 15,
    fontWeight: '600' as any,
    color: colors.neutral[900],
  },
  noData: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.neutral[600],
    fontStyle: 'italic',
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
    fontSize: 15,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.xs / 2,
  },
  checkboxHint: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 13,
    color: colors.neutral[600],
    lineHeight: 18,
  },
  privacyInfo: {
    marginBottom: spacing.md,
    gap: spacing.sm,
  },
  privacyText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    lineHeight: 20,
    color: colors.neutral[700],
  },
  buttonSpacer: {
    height: spacing.sm,
  },
  aboutContent: {
    gap: spacing.xs,
  },
  aboutText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.neutral[700],
  },
  aboutDisclaimer: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 12,
    color: colors.neutral[600],
    fontStyle: 'italic',
    marginTop: spacing.sm,
    lineHeight: 18,
  },
  modalForm: {
    gap: spacing.lg,
  },
  field: {
    gap: spacing.sm,
  },
  label: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 15,
    fontWeight: '600' as any,
    color: colors.neutral[900],
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
  policySection: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    lineHeight: 22,
    color: colors.neutral[700],
    marginBottom: spacing.lg,
  },
  policyTitle: {
    fontWeight: '600' as any,
    color: colors.neutral[900],
    fontSize: 15,
  },
});
