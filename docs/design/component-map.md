# Component Map

## Component Hierarchy

### App Structure

```
App
├── OnboardingFlow (first-time users)
│   ├── WelcomeScreen
│   ├── ConsentScreen
│   ├── Cycle101Screen (education)
│   └── SetupScreen
└── MainApp (authenticated)
    └── TabNavigator
        ├── DashboardTab
        ├── LearnTab
        └── SettingsTab
```

---

## Shared Components

### Button

```typescript
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  icon?: IconName;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}
```

### Card

```typescript
interface CardProps {
  children: ReactNode;
  title?: string;
  onPress?: () => void;
  variant?: 'default' | 'phase';
  phase?: PhaseName;
  shadow?: 'sm' | 'md' | 'lg';
}
```

### PhaseIndicator

```typescript
interface PhaseIndicatorProps {
  phase: PhaseName;
  day: number;
  totalDays: number;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
}
```

### ActionItem

```typescript
interface ActionItemProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: 'physical' | 'emotional' | 'communication';
  completed?: boolean;
  onToggle?: () => void;
}
```

### Modal

```typescript
interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  dismissable?: boolean;
}
```

---

## Dashboard Components

### CurrentPhaseCard

```typescript
interface CurrentPhaseCardProps {
  phase: PhaseName;
  day: number;
  daysUntilNext: number;
  onLearnMore: () => void;
}
```

**State:** Reads from cycle store
**Displays:** Current phase, cycle day, phase color, brief description

### QuickActionsSection

```typescript
interface QuickActionsSectionProps {
  phase: PhaseName;
  maxItems?: number;
}
```

**State:** Filters actions by current phase
**Displays:** 3-5 top-priority action items
**Interactions:** Mark as completed, expand for details

### UpcomingEvents

```typescript
interface UpcomingEventsProps {
  cycleData: CycleData;
}
```

**Displays:**
- Days until next period
- PMS window approaching (if <5 days)
- Phase transitions coming up

### DailyTip

```typescript
interface DailyTipProps {
  phase: PhaseName;
}
```

**Displays:** Random daily tip relevant to current phase
**Interactions:** Share, save, next tip

---

## Education Components

### ArticleList

```typescript
interface ArticleListProps {
  filter?: ArticleCategory;
}
```

**Displays:** Grid/list of educational articles
**Features:** Search, filter by category, sort by relevance

### ArticleDetail

```typescript
interface ArticleDetailProps {
  articleId: string;
}
```

**Displays:** Full article content (markdown)
**Features:** Reading progress, related articles, bookmark

### DosDontsCard

```typescript
interface DosDontsCardProps {
  phase: PhaseName;
}
```

**Displays:** Quick reference do's and don'ts for current phase
**Format:** Two columns (DO / DON'T)

---

## Settings Components

### CycleSettings

```typescript
interface CycleSettingsProps {
  cycleData: CycleData;
  onUpdate: (data: CycleData) => void;
}
```

**Controls:**
- Cycle start date
- Average cycle length
- Phase duration customization

### NotificationSettings

```typescript
interface NotificationSettingsProps {
  settings: NotificationSettings;
  onUpdate: (settings: NotificationSettings) => void;
}
```

**Controls:**
- Enable/disable notifications
- Notification types (checkboxes)
- Notification timing
- Test notification button

### PrivacySettings

```typescript
interface PrivacySettingsProps {
  consent: ConsentData;
  onUpdate: (consent: ConsentData) => void;
}
```

**Controls:**
- View what's shared
- Revoke consent
- Export data
- Delete all data

---

## Onboarding Components

### WelcomeScreen

**Content:**
- App value proposition
- Visual preview
- CTA: Get Started

### ConsentScreen

**Content:**
- Consent framework explanation
- Privacy promises
- CTAs: I Understand, Learn More

### Cycle101Screen

**Content:**
- Brief intro to 4 phases
- Swipeable cards
- Progress indicators
- CTA: Next

### SetupScreen

**Content:**
- Input cycle start date
- Set average cycle length
- Optional: Partner name, preferences
- CTA: Finish Setup

---

## Feature Components

### PhaseTimeline

```typescript
interface PhaseTimelineProps {
  cycleData: CycleData;
  currentDay: number;
}
```

**Displays:** Visual timeline of full cycle with phases marked

### NotificationPreview

```typescript
interface NotificationPreviewProps {
  type: NotificationType;
  phase: PhaseName;
}
```

**Displays:** Preview of what notifications will look like

### ShoppingList

```typescript
interface ShoppingListProps {
  phase: PhaseName;
}
```

**Displays:** Phase-specific items to have on hand
**Features:** Check off items, add custom items

---

## Component Props Summary

All components follow these patterns:
- TypeScript for type safety
- Accessibility labels
- Error boundaries
- Loading states
- Responsive sizing
- Theme-aware colors
