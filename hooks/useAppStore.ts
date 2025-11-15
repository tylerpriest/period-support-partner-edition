import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { CycleData, UserSettings, ConsentData } from '../types';
import { DEFAULT_SETTINGS } from '../types';
import { scheduleNotifications } from '../utils/notifications';

interface AppStore {
  // State
  cycleData: CycleData | null;
  settings: UserSettings;
  consent: ConsentData;
  isLoading: boolean;

  // Actions
  setCycleData: (data: CycleData) => Promise<void>;
  updateSettings: (settings: Partial<UserSettings>) => Promise<void>;
  setConsent: (consent: ConsentData) => Promise<void>;
  loadPersistedData: () => Promise<void>;
  clearAllData: () => Promise<void>;
}

export const useAppStore = create<AppStore>((set, get) => ({
  // Initial state
  cycleData: null,
  settings: DEFAULT_SETTINGS,
  consent: { given: false, version: '1.0.0' },
  isLoading: true,

  // Set cycle data and persist
  setCycleData: async (data: CycleData) => {
    set({ cycleData: data });
    try {
      await AsyncStorage.setItem('cycleData', JSON.stringify(data));

      // Schedule notifications if enabled
      const { settings } = get();
      if (settings.notificationsEnabled) {
        await scheduleNotifications(data, true);
      }
    } catch (error) {
      console.error('Error saving cycle data:', error);
    }
  },

  // Update settings and persist
  updateSettings: async (newSettings: Partial<UserSettings>) => {
    const updatedSettings = { ...get().settings, ...newSettings };
    set({ settings: updatedSettings });
    try {
      await AsyncStorage.setItem('settings', JSON.stringify(updatedSettings));

      // Reschedule notifications if notification setting changed
      if ('notificationsEnabled' in newSettings) {
        const { cycleData } = get();
        if (cycleData) {
          await scheduleNotifications(cycleData, updatedSettings.notificationsEnabled);
        }
      }
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  },

  // Set consent and persist
  setConsent: async (consent: ConsentData) => {
    set({ consent });
    try {
      await AsyncStorage.setItem('consent', JSON.stringify(consent));
    } catch (error) {
      console.error('Error saving consent:', error);
    }
  },

  // Load persisted data on app start
  loadPersistedData: async () => {
    try {
      set({ isLoading: true });

      const [cycleDataStr, settingsStr, consentStr] = await Promise.all([
        AsyncStorage.getItem('cycleData'),
        AsyncStorage.getItem('settings'),
        AsyncStorage.getItem('consent'),
      ]);

      const state: Partial<AppStore> = { isLoading: false };

      if (cycleDataStr) {
        state.cycleData = JSON.parse(cycleDataStr);
      }

      if (settingsStr) {
        state.settings = JSON.parse(settingsStr);
      }

      if (consentStr) {
        state.consent = JSON.parse(consentStr);
      }

      set(state);
    } catch (error) {
      console.error('Error loading persisted data:', error);
      set({ isLoading: false });
    }
  },

  // Clear all data (for privacy/reset)
  clearAllData: async () => {
    try {
      await AsyncStorage.multiRemove(['cycleData', 'settings', 'consent']);
      set({
        cycleData: null,
        settings: DEFAULT_SETTINGS,
        consent: { given: false, version: '1.0.0' },
      });
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  },
}));

// Custom hook to get current phase
export function useCurrentPhase() {
  const cycleData = useAppStore((state) => state.cycleData);

  // Import here to avoid circular dependency
  const { calculateCurrentPhase } = require('../utils/cycleCalculations');

  return calculateCurrentPhase(cycleData);
}

// Custom hook to check if onboarding is complete
export function useOnboardingStatus() {
  const settings = useAppStore((state) => state.settings);
  const consent = useAppStore((state) => state.consent);

  return {
    onboardingCompleted: settings.onboardingCompleted && consent.given,
    consentGiven: consent.given,
  };
}
