import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { addDays, differenceInDays, parseISO } from 'date-fns';
import type { CycleData, PhaseName } from '../types';

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

/**
 * Request notification permissions from the user
 */
export async function requestNotificationPermissions(): Promise<boolean> {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    console.warn('Notification permissions not granted');
    return false;
  }

  // Configure for Android
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('period-support', {
      name: 'Period Support',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#E8734C',
      sound: 'default',
    });
  }

  return true;
}

/**
 * Cancel all scheduled notifications
 */
export async function cancelAllNotifications(): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

/**
 * Schedule all notifications based on cycle data
 */
export async function scheduleNotifications(
  cycleData: CycleData,
  notificationsEnabled: boolean
): Promise<void> {
  // Cancel existing notifications first
  await cancelAllNotifications();

  if (!notificationsEnabled) {
    return;
  }

  const hasPermission = await requestNotificationPermissions();
  if (!hasPermission) {
    return;
  }

  try {
    // Schedule period notifications
    await schedulePeriodNotifications(cycleData);

    // Schedule PMS window notification
    await schedulePMSNotification(cycleData);

    // Schedule phase change notifications
    await schedulePhaseChangeNotifications(cycleData);

    console.log('All notifications scheduled successfully');
  } catch (error) {
    console.error('Error scheduling notifications:', error);
  }
}

/**
 * Schedule notifications for upcoming period
 */
async function schedulePeriodNotifications(cycleData: CycleData): Promise<void> {
  const startDate = parseISO(cycleData.startDate);
  const nextPeriodDate = addDays(startDate, cycleData.cycleLength);
  const today = new Date();
  const daysUntilPeriod = differenceInDays(nextPeriodDate, today);

  // Only schedule if period is in the future
  if (daysUntilPeriod <= 0) {
    console.log('Period date has passed, skipping notification');
    return;
  }

  // Notification 3 days before period
  if (daysUntilPeriod >= 3) {
    const threeDaysBefore = addDays(nextPeriodDate, -3);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '📅 Period Starting Soon',
        body: 'Their period is expected to start in 3 days. Time to stock up on comfort items.',
        data: { type: 'period-reminder', daysUntil: 3 },
      },
      trigger: {
        date: threeDaysBefore,
        channelId: 'period-support',
      },
    });
  }

  // Notification 1 day before period
  if (daysUntilPeriod >= 1) {
    const oneDayBefore = addDays(nextPeriodDate, -1);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '🩸 Period Starts Tomorrow',
        body: 'Their period is expected to start tomorrow. Make sure heating pads and comfort items are ready.',
        data: { type: 'period-reminder', daysUntil: 1 },
      },
      trigger: {
        date: oneDayBefore,
        channelId: 'period-support',
      },
    });
  }

  // Notification on period day
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '🌸 Period Starts Today',
      body: 'Their period is expected to start today. Extra patience and support go a long way.',
      data: { type: 'period-start' },
    },
    trigger: {
      date: nextPeriodDate,
      channelId: 'period-support',
    },
  });
}

/**
 * Schedule notification for PMS window (5-7 days before period)
 */
async function schedulePMSNotification(cycleData: CycleData): Promise<void> {
  const startDate = parseISO(cycleData.startDate);
  const nextPeriodDate = addDays(startDate, cycleData.cycleLength);
  const today = new Date();
  const daysUntilPeriod = differenceInDays(nextPeriodDate, today);

  // Schedule PMS notification 5 days before period
  if (daysUntilPeriod >= 5) {
    const pmsDate = addDays(nextPeriodDate, -5);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '⚠️ PMS Window Starting',
        body: 'PMS symptoms may begin soon. Extra thoughtfulness and patience are appreciated.',
        data: { type: 'pms-window' },
      },
      trigger: {
        date: pmsDate,
        channelId: 'period-support',
      },
    });
  }
}

/**
 * Schedule notifications for phase changes
 */
async function schedulePhaseChangeNotifications(cycleData: CycleData): Promise<void> {
  const startDate = parseISO(cycleData.startDate);
  const today = new Date();
  const daysSinceStart = differenceInDays(today, startDate);
  const dayOfCycle = (daysSinceStart % cycleData.cycleLength) + 1;

  interface PhaseInfo {
    name: PhaseName;
    displayName: string;
    startDay: number;
    endDay: number;
    icon: string;
    message: string;
  }

  const phases: PhaseInfo[] = [
    {
      name: 'menstrual',
      displayName: 'Menstrual Phase',
      startDay: 1,
      endDay: cycleData.phaseLengths.menstrual,
      icon: '🩸',
      message: 'The menstrual phase has started. Focus on comfort and support.',
    },
    {
      name: 'follicular',
      displayName: 'Follicular Phase',
      startDay: cycleData.phaseLengths.menstrual + 1,
      endDay: cycleData.phaseLengths.follicular,
      icon: '🌱',
      message: 'Energy is rising! Great time for activities and quality time together.',
    },
    {
      name: 'ovulation',
      displayName: 'Ovulation Phase',
      startDay: cycleData.phaseLengths.follicular + 1,
      endDay: cycleData.phaseLengths.ovulation,
      icon: '✨',
      message: 'Peak energy window! Perfect time for social activities and important conversations.',
    },
    {
      name: 'luteal',
      displayName: 'Luteal Phase',
      startDay: cycleData.phaseLengths.ovulation + 1,
      endDay: cycleData.cycleLength,
      icon: '🍂',
      message: 'Energy may dip and PMS symptoms may appear. Time for extra patience.',
    },
  ];

  // Schedule notifications for upcoming phase changes
  for (const phase of phases) {
    const daysUntilPhaseStart = phase.startDay - dayOfCycle;

    // Only schedule if phase start is in the future (within current cycle)
    if (daysUntilPhaseStart > 0 && daysUntilPhaseStart <= cycleData.cycleLength) {
      const phaseStartDate = addDays(today, daysUntilPhaseStart);

      await Notifications.scheduleNotificationAsync({
        content: {
          title: `${phase.icon} ${phase.displayName}`,
          body: phase.message,
          data: { type: 'phase-change', phase: phase.name },
        },
        trigger: {
          date: phaseStartDate,
          channelId: 'period-support',
        },
      });
    }
  }
}

/**
 * Get all scheduled notifications (for debugging)
 */
export async function getScheduledNotifications(): Promise<Notifications.NotificationRequest[]> {
  return await Notifications.getAllScheduledNotificationsAsync();
}

/**
 * Send a test notification immediately (for testing)
 */
export async function sendTestNotification(): Promise<void> {
  const hasPermission = await requestNotificationPermissions();
  if (!hasPermission) {
    console.warn('Cannot send test notification: permissions not granted');
    return;
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: '🔔 Test Notification',
      body: 'Notifications are working! You\'ll receive reminders for period timing and phase changes.',
      data: { type: 'test' },
    },
    trigger: null, // Send immediately
  });
}
