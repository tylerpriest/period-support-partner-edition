import React, { useEffect } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { useAppStore, useOnboardingStatus } from '../hooks/useAppStore';
import * as SplashScreen from 'expo-splash-screen';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const { onboardingCompleted } = useOnboardingStatus();
  const isLoading = useAppStore((state) => state.isLoading);
  const loadPersistedData = useAppStore((state) => state.loadPersistedData);

  // Font loading placeholder - using system fonts for now
  // TODO: Add custom fonts (DM Sans + Nunito) to assets/fonts/ directory
  const fontsLoaded = true; // Set to true since we're using system fonts

  // Load persisted data on mount
  useEffect(() => {
    loadPersistedData();
  }, []);

  // Navigation logic
  useEffect(() => {
    if (!isLoading && fontsLoaded) {
      SplashScreen.hideAsync();

      const inOnboarding = segments[0] === 'onboarding';

      if (!onboardingCompleted && !inOnboarding) {
        // Not onboarded, redirect to onboarding
        router.replace('/onboarding/welcome');
      } else if (onboardingCompleted && inOnboarding) {
        // Already onboarded but in onboarding flow, redirect to main app
        router.replace('/(tabs)');
      }
    }
  }, [isLoading, onboardingCompleted, segments, fontsLoaded]);

  if (!fontsLoaded || isLoading) {
    return null; // Splash screen will show
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
