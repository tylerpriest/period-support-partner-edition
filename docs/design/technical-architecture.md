# Technical Architecture

## Tech Stack Decision

### Mobile Framework: **React Native + Expo**

**Chosen Framework:** React Native with Expo managed workflow

**Rationale:**
- True native iOS and Android apps from single codebase
- Excellent push notification support (critical requirement)
- App store distribution for discoverability and credibility
- Expo simplifies development, deployment, and OTA updates
- Strong community and ecosystem
- Future widget support for home screen

---

## Project Structure

```
period-support-partner-edition/
├── app/                          # Expo Router screens
│   ├── (tabs)/                  # Tab navigation
│   │   ├── index.tsx            # Dashboard/Home
│   │   ├── learn.tsx            # Education
│   │   └── settings.tsx         # Settings
│   ├── onboarding/              # Onboarding flow
│   │   ├── welcome.tsx
│   │   ├── consent.tsx
│   │   └── setup.tsx
│   └── _layout.tsx              # Root layout
├── components/                   # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── PhaseIndicator.tsx
│   ├── ActionItem.tsx
│   └── Modal.tsx
├── features/                     # Feature-specific components
│   ├── Dashboard/
│   │   ├── CurrentPhase.tsx
│   │   ├── QuickActions.tsx
│   │   └── UpcomingEvents.tsx
│   ├── Education/
│   │   ├── ArticleList.tsx
│   │   └── ArticleDetail.tsx
│   └── Settings/
│       ├── CycleSettings.tsx
│       └── NotificationSettings.tsx
├── hooks/                        # Custom React hooks
│   ├── useCycleData.ts
│   ├── usePhaseCalculation.ts
│   └── useNotifications.ts
├── utils/                        # Helper functions
│   ├── cycleCalculations.ts
│   ├── dateHelpers.ts
│   └── phaseHelpers.ts
├── data/                         # Static content
│   ├── phaseContent.ts
│   ├── educationalArticles.ts
│   └── dosAndDonts.ts
├── styles/                       # Design system
│   ├── tokens.ts                # Design tokens
│   └── theme.ts                 # Theme configuration
├── types/                        # TypeScript types
│   └── index.ts
├── assets/                       # Images, fonts, icons
│   ├── fonts/
│   └── icons/
├── app.json                      # Expo configuration
├── package.json
└── tsconfig.json
```

---

## Technology Stack

### Core

- **Runtime:** React Native (latest stable)
- **Framework:** Expo SDK 50+
- **Language:** TypeScript (strict mode)
- **Navigation:** Expo Router (file-based)

### Styling

- **Primary:** NativeWind (Tailwind for React Native)
- **Fallback:** React Native StyleSheet with design tokens
- **Fonts:** Expo Font for custom typefaces

### State Management

- **Library:** Zustand
- **Rationale:** Simple, lightweight, TypeScript-friendly
- **Alternative:** React Context for simple global state

```typescript
// Example store structure
interface AppStore {
  cycleData: CycleData | null;
  settings: UserSettings;
  consent: ConsentData;
  updateCycle: (data: CycleData) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
}
```

### Data Persistence

- **Local Storage:** AsyncStorage (encrypted with expo-secure-store for sensitive data)
- **Optional Cloud:** Supabase (if user opts in for backup)

**Storage Strategy:**
- Default: All data local (privacy-first)
- Optional: Encrypted cloud sync for multi-device
- Easy export/delete functionality

### Notifications

- **Library:** Expo Notifications
- **Types:**
  - Local scheduled notifications (phase changes)
  - Push notifications (future: partner sync updates)

**Notification Schedule:**
- Period starting (2-3 days ahead)
- PMS window (3-5 days before period)
- Phase transitions (day-of)
- Daily tips (optional, customizable time)

### Date & Time

- **Library:** date-fns
- **Rationale:** Lightweight, functional, tree-shakeable
- **Use Cases:** Cycle calculations, phase determination, date formatting

### Analytics & Monitoring

**Analytics:** Expo Analytics or PostHog (privacy-first)
- Feature usage tracking (anonymized)
- User flow analysis
- No PII collection

**Error Tracking:** Sentry
- Real-time crash reports
- Performance monitoring
- User feedback integration

### Testing

**Unit & Integration:** Jest + React Native Testing Library
**E2E:** Detox (future, if needed)
**Manual:** Real device testing (iOS + Android)

### CI/CD

**Build:** EAS Build (Expo Application Services)
**Deployment:** EAS Submit (to App Store + Play Store)
**Updates:** EAS Update (OTA fixes without app store review)

---

## Component Architecture

### Component Hierarchy

```
App
├── RootLayout (app/_layout.tsx)
│   ├── Onboarding Flow (first-time users)
│   │   ├── WelcomeScreen
│   │   ├── ConsentScreen
│   │   └── SetupScreen
│   └── Main App (authenticated users)
│       └── TabNavigator
│           ├── Dashboard (Home)
│           │   ├── PhaseIndicator
│           │   ├── CurrentPhaseCard
│           │   ├── QuickActions
│           │   ├── UpcomingEvents
│           │   └── DailyTip
│           ├── Learn (Education)
│           │   ├── ArticleList
│           │   └── ArticleDetail
│           └── Settings
│               ├── CycleSettings
│               ├── NotificationSettings
│               ├── PrivacySettings
│               └── AboutApp
```

### Shared Components

**Button Component:**
```typescript
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  icon?: string;
  disabled?: boolean;
}
```

**Card Component:**
```typescript
interface CardProps {
  title?: string;
  children: React.ReactNode;
  onPress?: () => void;
  variant?: 'default' | 'phase-specific';
  phaseColor?: string;
}
```

**ActionItem Component:**
```typescript
interface ActionItemProps {
  icon: string;
  title: string;
  description: string;
  category: 'physical' | 'emotional' | 'communication';
  completed?: boolean;
  onToggle?: () => void;
}
```

---

## Data Flow

### Cycle Data Management

```
User Input (Cycle Start Date)
        ↓
  Store in Zustand
        ↓
  Persist to AsyncStorage
        ↓
  Calculate Current Phase
        ↓
  Determine Action Items
        ↓
  Schedule Notifications
        ↓
  Render Dashboard
```

### Phase Calculation Logic

```typescript
function calculateCurrentPhase(
  cycleStartDate: Date,
  cycleLength: number = 28,
  phaseLengths: PhaseLengths
): CyclePhase {
  const today = new Date();
  const dayOfCycle = differenceInDays(today, cycleStartDate) % cycleLength;

  // Determine phase based on cycle day
  if (dayOfCycle <= phaseLengths.menstrual) {
    return { name: 'menstrual', day: dayOfCycle };
  } else if (dayOfCycle <= phaseLengths.follicular) {
    return { name: 'follicular', day: dayOfCycle };
  } else if (dayOfCycle <= phaseLengths.ovulation) {
    return { name: 'ovulation', day: dayOfCycle };
  } else {
    return { name: 'luteal', day: dayOfCycle };
  }
}
```

### State Management Pattern

```typescript
// Zustand store
export const useAppStore = create<AppStore>((set) => ({
  cycleData: null,
  settings: defaultSettings,
  consent: { given: false },

  updateCycle: (data) => {
    set({ cycleData: data });
    // Persist to AsyncStorage
    AsyncStorage.setItem('cycleData', JSON.stringify(data));
  },

  updateSettings: (newSettings) => set((state) => ({
    settings: { ...state.settings, ...newSettings }
  })),
}));
```

---

## Data Models

### TypeScript Types

```typescript
// Cycle Phase
type PhaseName = 'menstrual' | 'follicular' | 'ovulation' | 'luteal';

interface CyclePhase {
  name: PhaseName;
  day: number; // Day within cycle (1-28+)
}

// Cycle Data
interface CycleData {
  startDate: Date;
  cycleLength: number; // Average cycle length (default 28)
  phaseLengths: PhaseLengths;
  pastCycles: PastCycle[];
}

interface PhaseLengths {
  menstrual: number; // Days 1-5
  follicular: number; // Days 1-14
  ovulation: number; // Days 13-15
  luteal: number; // Days 15-28
}

interface PastCycle {
  startDate: Date;
  length: number;
}

// User Settings
interface UserSettings {
  notificationsEnabled: boolean;
  notificationTypes: NotificationType[];
  notificationTime: 'morning' | 'evening' | 'custom';
  customTime?: Date;
  consentGiven: boolean;
  consentDate?: Date;
  partnerName?: string;
  dataSharing: 'local-only' | 'cloud-encrypted';
}

type NotificationType =
  | 'period-coming'
  | 'pms-window'
  | 'phase-change'
  | 'daily-tip';

// Action Item
interface ActionItem {
  id: string;
  phase: PhaseName;
  category: 'physical' | 'emotional' | 'communication';
  icon: string;
  title: string;
  description: string;
  priority: 1 | 2 | 3; // 1 = highest
}

// Educational Content
interface Article {
  id: string;
  title: string;
  category: string;
  readTime: number; // minutes
  content: string; // Markdown
  relatedPhases?: PhaseName[];
}
```

---

## Error Handling Strategy

### Error Boundaries

```typescript
// Global error boundary for crash recovery
class ErrorBoundary extends React.Component<Props, State> {
  // Catch rendering errors
  // Show fallback UI
  // Log to Sentry
}
```

### API Error Handling

```typescript
try {
  // Async operation
} catch (error) {
  if (error instanceof NetworkError) {
    // Show offline message
  } else if (error instanceof ValidationError) {
    // Show validation feedback
  } else {
    // Generic error handling
    Sentry.captureException(error);
  }
}
```

---

## Accessibility Implementation

### WCAG AA Compliance

**Color Contrast:**
- All text: minimum 4.5:1 ratio
- Large text (18pt+): minimum 3:1 ratio
- Interactive elements: minimum 3:1 ratio

**Touch Targets:**
- Minimum size: 44x44 points (iOS) / 48x48dp (Android)
- Adequate spacing between targets

**Screen Reader Support:**
```typescript
<TouchableOpacity
  accessible={true}
  accessibilityLabel="Mark action as completed"
  accessibilityRole="button"
  accessibilityState={{ checked: completed }}
>
  <ActionItem {...props} />
</TouchableOpacity>
```

**Keyboard Navigation:**
- Logical tab order
- Focus indicators visible
- No keyboard traps

### Platform Assistive Technologies

**iOS VoiceOver:**
- Proper accessibility labels
- Accessibility hints for complex interactions
- Correct heading hierarchy

**Android TalkBack:**
- Same requirements as VoiceOver
- Test on real Android devices

---

## Performance Optimization

### Lazy Loading

```typescript
// Lazy load heavy screens
const EducationScreen = lazy(() => import('./features/Education'));
```

### Memoization

```typescript
// Memoize expensive calculations
const currentPhase = useMemo(
  () => calculateCurrentPhase(cycleData),
  [cycleData]
);

// Memoize components
const PhaseCard = memo(({ phase }) => {
  // Component render
});
```

### Image Optimization

- Use WebP format where supported
- Provide multiple resolutions (@1x, @2x, @3x)
- Lazy load images below fold

---

## Security Considerations

### Data Encryption

```typescript
// Sensitive data encryption
import * as SecureStore from 'expo-secure-store';

await SecureStore.setItemAsync('cycleData', JSON.stringify(data));
const encrypted = await SecureStore.getItemAsync('cycleData');
```

### Privacy by Design

- No third-party trackers collecting PII
- Local-first architecture (data stays on device by default)
- Easy data deletion (single button)
- Clear privacy policy

### API Security (if backend added later)

- HTTPS only
- JWT authentication
- Rate limiting
- Input validation

---

## Deployment Configuration

### App Store Configuration

**iOS (app.json):**
```json
{
  "ios": {
    "bundleIdentifier": "com.periodsupport.partner",
    "buildNumber": "1",
    "supportsTablet": false,
    "infoPlist": {
      "NSHealthShareUsageDescription": "We need access to cycle data to provide support guidance",
      "NSUserTrackingUsageDescription": "This identifier will be used to deliver personalized tips"
    }
  }
}
```

**Android (app.json):**
```json
{
  "android": {
    "package": "com.periodsupport.partner",
    "versionCode": 1,
    "permissions": [
      "NOTIFICATIONS"
    ],
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#FFFFFF"
    }
  }
}
```

---

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npx expo start

# Run on iOS simulator
npx expo run:ios

# Run on Android emulator
npx expo run:android
```

### Testing Workflow

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm test -- --watch

# Type checking
npx tsc --noEmit
```

### Build & Deploy

```bash
# Build for iOS
eas build --platform ios --profile production

# Build for Android
eas build --platform android --profile production

# Submit to App Store
eas submit --platform ios

# Submit to Play Store
eas submit --platform android

# OTA Update (minor fixes)
eas update --branch production
```

---

## Monitoring & Analytics

### Key Metrics to Track

**Performance:**
- App launch time
- Screen transition time
- Crash-free rate (target: >99%)

**User Engagement:**
- DAU/MAU ratio
- Feature usage (which actions most used)
- Session length
- Retention (D1, D7, D30)

**Business:**
- Onboarding completion rate
- Free to premium conversion
- User feedback (NPS, reviews)

---

## Future Scalability

### Phase 2 Enhancements

**Backend Infrastructure (if needed):**
- Partner data sync across devices
- Cloud backup with end-to-end encryption
- User accounts (optional)

**Advanced Features:**
- AI-powered predictions (more accurate phase lengths)
- Widget for home screen (iOS 14+, Android)
- Apple Watch / Wear OS companion apps
- Integration with other tracking apps (HealthKit, Google Fit)

### Technical Debt Prevention

- Regular dependency updates
- Code quality: ESLint, Prettier, strict TypeScript
- Performance monitoring and optimization
- Accessibility audits every release
- Security reviews quarterly

---

## Summary

**Chosen Stack:**
- React Native + Expo + TypeScript
- Zustand for state management
- NativeWind for styling
- AsyncStorage for local data
- Expo Notifications for push notifications
- EAS Build for deployment

**Key Architecture Decisions:**
- Mobile-first, native apps
- Local-first data storage (privacy)
- Component-based architecture
- Type-safe with TypeScript
- Accessible (WCAG AA)
- Fast iterations (Expo workflow)

**Ready for 3-month MVP timeline with this solid foundation.**
