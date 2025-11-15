# Period Support - Partner Edition

A mobile app designed to help partners understand and support their loved ones through the menstrual cycle. Built with React Native + Expo.

## 🌸 Overview

This app provides partners with:
- **Cycle Phase Tracking**: Know what phase they're in and what to expect
- **Actionable Guidance**: Specific, practical ways to provide support right now
- **Education**: Science-backed articles about the menstrual cycle, PMS, and health
- **Communication Tips**: Do's and don'ts for each phase
- **Reminders**: Notifications for period timing and phase changes

### Key Principles

- **Consent-First**: Built with mutual consent and ethics at the core
- **Support, Not Surveillance**: Designed to help, never to control or dismiss
- **Privacy-First**: All data stored locally on device by default
- **Science-Backed**: Based on actual cycle science and research
- **Inclusive**: Gender-neutral language, welcoming all relationships

## 📱 Tech Stack

- **Framework**: React Native with Expo SDK 52+
- **Language**: TypeScript (strict mode)
- **Navigation**: Expo Router (file-based)
- **State Management**: Zustand
- **Data Persistence**: AsyncStorage (encrypted with expo-secure-store for sensitive data)
- **Date Utilities**: date-fns
- **Notifications**: Expo Notifications

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator (Mac) or Android Emulator

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npx expo start

# Run on iOS simulator (Mac only)
npx expo run:ios

# Run on Android emulator
npx expo run:android

# Run on web browser (for testing)
npx expo start --web
```

### First Run

1. The app will show an onboarding flow:
   - **Welcome**: Introduction to the app
   - **Consent & Ethics**: Important information about mutual consent
   - **Setup**: Enter cycle data (start date, cycle length)

2. After onboarding, you'll see the Dashboard with:
   - Current cycle phase
   - Top 3 action items for this phase
   - Upcoming period and phase changes

## 📂 Project Structure

```
period-support-partner-edition/
├── app/                      # Expo Router screens
│   ├── (tabs)/              # Tab navigation
│   │   ├── index.tsx        # Dashboard/Home
│   │   ├── learn.tsx        # Education articles
│   │   └── settings.tsx     # Settings & privacy
│   ├── onboarding/          # Onboarding flow
│   │   ├── welcome.tsx
│   │   ├── consent.tsx
│   │   └── setup.tsx
│   └── _layout.tsx          # Root layout
├── components/              # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── PhaseIndicator.tsx
│   ├── ActionItem.tsx
│   └── Modal.tsx
├── features/                # Feature-specific components
│   ├── Dashboard/
│   │   ├── CurrentPhase.tsx
│   │   ├── QuickActions.tsx
│   │   └── UpcomingEvents.tsx
├── hooks/                   # Custom React hooks
│   └── useAppStore.ts       # Zustand store
├── utils/                   # Helper functions
│   └── cycleCalculations.ts
├── data/                    # Static content
│   ├── phaseContent.ts      # Action items per phase
│   ├── dosAndDonts.ts       # Communication guidance
│   └── educationalArticles.ts
├── styles/                  # Design system
│   └── tokens.ts            # Colors, spacing, typography
├── types/                   # TypeScript types
│   └── index.ts
├── docs/                    # Documentation
│   ├── research/            # Research findings
│   └── design/              # Design specs
└── assets/                  # Images, fonts, icons
```

## 🎨 Design System

### Colors

- **Primary (Terracotta)**: `#E8734C` - Warm, approachable, gender-neutral
- **Secondary (Sage Green)**: `#7D9E6F` - Calming, supportive
- **Phase-Specific Colors**:
  - Menstrual: Muted red (#B35A47)
  - Follicular: Sage green (#7D9E6F)
  - Ovulation: Warm gold (#E8A54C)
  - Luteal: Warm brown (#C17854)

### Typography

- **Headings**: DM Sans (serif feel, warm)
- **Body**: Nunito (rounded, friendly)

### Accessibility

- WCAG AA compliant (4.5:1 contrast ratio)
- Touch targets: minimum 44x44 points
- Screen reader support with proper labels
- Keyboard navigation support

## 📚 Features

### Onboarding Flow

1. **Welcome Screen**
   - App introduction
   - Feature overview
   - Consent requirement notice

2. **Consent Screen**
   - Mutual consent requirements
   - Ethical use guidelines
   - Privacy commitments
   - Support vs. surveillance principles
   - Must scroll and agree to continue

3. **Setup Screen**
   - Partner's name (optional)
   - Last period start date
   - Average cycle length
   - Notification preferences

### Dashboard

- **Current Phase Card**: Visual indicator of current cycle phase with expectations
- **Quick Actions**: Top 3 priority action items for current phase
- **Upcoming Events**: Next period date, PMS window, next phase change

### Learn Tab

- 7 comprehensive articles covering:
  - The Four Phases: A Complete Guide
  - Why Periods Hurt: Understanding Cramps
  - PMS is Real (And What You Can Do)
  - Communication Guide: What to Say (and Not Say)
  - Tracking Isn't Surveillance: Using This App Ethically
  - Energy Levels Throughout the Cycle
  - When to Worry: Red Flags to Watch For

- Category filtering: All, Basics, Science, Support, Health, Communication
- Read time estimates
- Tag-based search

### Settings

- Update cycle data (period start date, cycle length)
- Toggle notifications
- Privacy policy
- Clear all data (with confirmation)
- App version and disclaimers

## 🔐 Privacy & Security

### Data Storage

- **Local-First**: All data stored on device by default
- **Encrypted**: Sensitive data encrypted with expo-secure-store
- **No Cloud**: No automatic cloud sync (user must opt-in if feature added)
- **No Tracking**: No third-party analytics or trackers

### User Rights

- Right to access data
- Right to export data
- Right to delete data (one-tap deletion)
- Right to revoke consent

### Compliance

- GDPR principles followed
- CCPA compliant
- Apple Privacy Manifest ready
- Google Play Data Safety disclosures included

## 🔔 Notifications (Planned)

Planned notification types:
- Period starting (2-3 days ahead)
- PMS window (3-5 days before period)
- Phase transitions (day-of)
- Daily tips (optional, customizable time)

## 🧪 Testing

### Manual Testing Checklist

- [ ] Onboarding flow completes successfully
- [ ] Cycle data persists after app restart
- [ ] Phase indicator shows correct phase
- [ ] Quick actions update per phase
- [ ] Upcoming events calculate correctly
- [ ] Settings updates save properly
- [ ] Article filtering works
- [ ] Modal interactions work (open/close)
- [ ] Clear data removes all information

### Device Testing

- [ ] iOS (iPhone 13+)
- [ ] Android (Pixel 6+)
- [ ] Tablet layouts (if supporting tablets)

### Accessibility Testing

- [ ] VoiceOver navigation (iOS)
- [ ] TalkBack navigation (Android)
- [ ] Sufficient color contrast
- [ ] Touch target sizes adequate

## 🚢 Deployment

### iOS App Store

**Requirements:**
- Apple Developer Account ($99/year)
- App Store Connect setup
- Privacy manifest (included in app.json)
- App icons and screenshots

**Build & Submit:**
```bash
# Build for iOS
eas build --platform ios --profile production

# Submit to App Store
eas submit --platform ios
```

**App Store Listing:**
- App Name: "Period Support - Partner Edition"
- Category: Health & Fitness
- Age Rating: 12+ (health content)
- Privacy Policy URL: [Required]

### Google Play Store

**Requirements:**
- Google Play Developer Account ($25 one-time)
- Play Console setup
- Health apps declaration (completed)
- App icons and screenshots

**Build & Submit:**
```bash
# Build for Android
eas build --platform android --profile production

# Submit to Play Store
eas submit --platform android
```

**Play Store Listing:**
- App Name: "Period Support - Partner Edition"
- Category: Health & Fitness
- Content Rating: Everyone (with health disclaimer)
- Data Safety: Local storage only, no data sharing

### Required Disclaimers

**Medical Disclaimer:**
> This app is for educational and relationship support purposes only. It is not intended to diagnose, treat, cure, or prevent any medical condition. Consult a healthcare provider for medical advice.

**Accuracy Disclaimer:**
> Cycle predictions are estimates based on averages and past patterns. Actual cycles may vary. This app is not suitable as a form of contraception.

## 📝 Development Roadmap

### Phase 1: MVP (Current)
- ✅ Core cycle tracking
- ✅ Phase-specific action items
- ✅ Educational content
- ✅ Onboarding with consent framework
- ⏳ Local notifications

### Phase 2: Enhancements
- [ ] Custom fonts (DM Sans + Nunito)
- [ ] Improved date picker UI
- [ ] Symptom tracking (optional)
- [ ] Export cycle data (CSV/PDF)
- [ ] Multi-language support

### Phase 3: Advanced Features
- [ ] Apple Watch companion app
- [ ] Home screen widgets
- [ ] Partner sync (optional, encrypted)
- [ ] Integration with health apps (HealthKit, Google Fit)
- [ ] AI-powered cycle predictions

## 🤝 Contributing

This app was built with ethical considerations at its core. If you'd like to contribute:

1. Ensure changes align with consent-first, privacy-first principles
2. Maintain WCAG AA accessibility standards
3. Follow the existing code style (TypeScript strict mode)
4. Add tests for new features
5. Update documentation

## 📄 License

[To be determined - consider MIT or similar permissive license]

## ⚠️ Ethical Guidelines

This app is designed to **support healthy relationships**. It should never be used to:
- Track someone without their knowledge or consent
- Dismiss or invalidate emotions ("You're just PMSing")
- Control or manipulate behavior
- Win arguments or prove points
- Make assumptions without asking

If you're in an unsafe relationship, please seek help:
- National Domestic Violence Hotline: 1-800-799-7233
- Text "START" to 88788

## 🙏 Acknowledgments

- Research compiled from medical journals, cycle tracking apps, and partner support communities
- Designed with input from relationship therapists and menstrual health experts
- Built with care for all genders, orientations, and relationship structures

## 📞 Support

For questions, issues, or feedback:
- GitHub Issues: [Repository URL]
- Email: [Support email]

---

**Remember**: This app is a tool to help you be a better partner. Use it to support and understand, never to judge or control.
