# Development Guide

## Quick Start

### Initial Setup

```bash
# Clone the repository
git clone [repository-url]
cd period-support-partner-edition

# Install dependencies
npm install

# Start the development server
npx expo start
```

### Running the App

```bash
# iOS Simulator (Mac only)
npx expo run:ios

# Android Emulator
npx expo run:android

# Web browser (for quick testing)
npx expo start --web

# Development server with options
npx expo start --clear  # Clear cache
npx expo start --tunnel # Use tunneling for physical device testing
```

## Development Workflow

### File Structure Conventions

```
app/              # Expo Router screens (file-based routing)
  (tabs)/        # Tab navigation group
  onboarding/    # Onboarding flow
  _layout.tsx    # Root layout

components/      # Reusable, generic UI components
features/        # Feature-specific components
hooks/           # Custom React hooks
utils/           # Helper functions and utilities
data/            # Static content and data
styles/          # Design tokens and themes
types/           # TypeScript type definitions
```

### Adding New Screens

Using Expo Router (file-based routing):

```typescript
// app/new-screen.tsx
import { View, Text } from 'react-native';

export default function NewScreen() {
  return (
    <View>
      <Text>New Screen</Text>
    </View>
  );
}
```

### Adding New Components

```typescript
// components/MyComponent.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../styles/tokens';

interface MyComponentProps {
  title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
  title: {
    fontFamily: typography.fontFamily.serif,
    fontSize: 18,
    color: colors.neutral[900],
  },
});
```

### State Management (Zustand)

```typescript
// hooks/useAppStore.ts

// Add new state
interface AppStore {
  // ... existing state
  newFeature: boolean;
  setNewFeature: (value: boolean) => void;
}

// Add action
export const useAppStore = create<AppStore>((set) => ({
  // ... existing state
  newFeature: false,
  setNewFeature: (value) => set({ newFeature: value }),
}));

// Use in component
import { useAppStore } from '../hooks/useAppStore';

function MyComponent() {
  const newFeature = useAppStore((state) => state.newFeature);
  const setNewFeature = useAppStore((state) => state.setNewFeature);

  // ...
}
```

### Adding New Educational Articles

```typescript
// data/educationalArticles.ts

export const EDUCATIONAL_ARTICLES: Article[] = [
  // ... existing articles
  {
    id: 'article-new',
    title: 'New Article Title',
    category: 'basics', // basics | science | support | health | communication
    readTime: 5, // minutes
    summary: 'Brief summary of the article...',
    relatedPhases: ['menstrual', 'follicular'], // optional
    tags: ['tag1', 'tag2'],
    content: `
# Article Title

## Section 1
Content here...

## Section 2
More content...
    `,
  },
];
```

### Adding Phase-Specific Content

```typescript
// data/phaseContent.ts

export const PHASE_ACTIONS: Record<PhaseName, ActionItem[]> = {
  menstrual: [
    // ... existing actions
    {
      id: 'menstrual-new',
      phase: 'menstrual',
      category: 'physical', // physical | emotional | communication
      icon: '🔥',
      title: 'Action Title',
      description: 'Detailed description of the action...',
      priority: 1, // 1 = highest, 3 = lowest
    },
  ],
  // ... other phases
};
```

## Testing

### Manual Testing

```bash
# Test on iOS Simulator
npm run ios

# Test on Android Emulator
npm run android

# Test specific features:
# 1. Complete onboarding flow
# 2. Update cycle data
# 3. Navigate between tabs
# 4. Read articles
# 5. Update settings
# 6. Clear all data
```

### Type Checking

```bash
# Run TypeScript compiler
npx tsc --noEmit

# Watch mode
npx tsc --noEmit --watch
```

### Linting

```bash
# Check for issues (if ESLint configured)
npm run lint

# Auto-fix issues
npm run lint:fix
```

## Debugging

### React Native Debugger

1. Install React Native Debugger
2. Open debugger before starting app
3. Shake device (physical) or press Cmd+D (iOS) / Cmd+M (Android)
4. Select "Debug"

### Expo Developer Tools

```bash
# Start with developer menu
npx expo start

# Press 'j' to open debugger
# Press 'r' to reload
# Press 'm' to toggle menu
```

### Console Logging

```typescript
console.log('Debug message', data);
console.warn('Warning message');
console.error('Error message');

// Zustand debugging
console.log('Store state:', useAppStore.getState());
```

## Building

### Development Build

```bash
# iOS development build
eas build --profile development --platform ios

# Android development build
eas build --profile development --platform android
```

### Production Build

```bash
# iOS production build
eas build --profile production --platform ios

# Android production build
eas build --profile production --platform android
```

### Preview Build (for testing)

```bash
# iOS preview
eas build --profile preview --platform ios

# Android preview (APK)
eas build --profile preview --platform android
```

## Common Issues

### Metro bundler cache issues

```bash
# Clear cache and restart
npx expo start --clear
```

### Node modules issues

```bash
# Remove and reinstall
rm -rf node_modules package-lock.json
npm install
```

### iOS Simulator not showing app

```bash
# Reset simulator
xcrun simctl erase all

# Or manually: Device → Erase All Content and Settings
```

### Android Emulator issues

```bash
# Restart adb
adb kill-server
adb start-server

# Cold boot emulator (slower but more reliable)
# In Android Studio: AVD Manager → Cold Boot
```

## Code Style

### TypeScript Best Practices

- Use strict mode
- Define interfaces for all props
- Avoid `any` type
- Use optional chaining: `data?.field`
- Use nullish coalescing: `value ?? defaultValue`

### Component Best Practices

- Functional components with hooks
- Extract reusable logic into custom hooks
- Keep components focused (single responsibility)
- Use memo for expensive components: `React.memo(Component)`

### Styling Best Practices

- Use design tokens from `styles/tokens.ts`
- Keep styles co-located with components
- Use StyleSheet.create for performance
- Avoid inline styles for static values

## Environment Variables

Create `.env` file (not committed to git):

```env
# Expo project ID (for EAS)
EXPO_PROJECT_ID=your-project-id

# Optional: Analytics keys
ANALYTICS_KEY=your-key
```

Access in code:

```typescript
import Constants from 'expo-constants';

const projectId = Constants.expoConfig?.extra?.eas?.projectId;
```

## Updating Dependencies

```bash
# Check for updates
npx expo-doctor

# Update Expo SDK
npx expo install --fix

# Update specific packages
npm update package-name

# Check outdated packages
npm outdated
```

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [date-fns Documentation](https://date-fns.org/)

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "Add feature description"

# Push to remote
git push origin feature/my-feature

# Create pull request on GitHub
```

## Pre-Deployment Checklist

- [ ] All TypeScript errors resolved
- [ ] Manual testing completed on iOS and Android
- [ ] Accessibility tested with screen readers
- [ ] Privacy policy updated if data collection changes
- [ ] App icons and splash screens ready
- [ ] App Store / Play Store listings prepared
- [ ] Version number bumped in app.json
- [ ] Changelog updated
- [ ] README updated with new features

---

Happy coding! 🚀
