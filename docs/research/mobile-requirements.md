# Mobile App Requirements & Platform Considerations

## Executive Summary

To deliver this app to iOS App Store and Google Play Store successfully, we must consider platform-specific requirements, mobile UX best practices, app store guidelines, and technical architecture decisions. This app MUST be mobile-first—it's where partners need quick, on-the-go support.

---

## Platform Decision: React Native + Expo vs. PWA vs. Capacitor

### Comparison Matrix

| Criterion | React Native + Expo | PWA | Capacitor | Winner |
|-----------|-------------------|-----|-----------|---------|
| **True Native Feel** | ✅ Excellent | ❌ Web-based | ⚠️ Good | React Native |
| **Development Speed** | ✅ Fast | ✅ Fastest | ✅ Fast | Tie |
| **Code Reuse** | ✅ 95%+ | ✅ 100% | ✅ 95%+ | Tie |
| **Push Notifications** | ✅ Native | ⚠️ Limited | ✅ Native | React Native/Capacitor |
| **Offline Capability** | ✅ Excellent | ✅ Good | ✅ Good | Tie |
| **App Store Distribution** | ✅ Yes | ⚠️ Limited | ✅ Yes | React Native/Capacitor |
| **Performance** | ✅ Excellent | ⚠️ Good | ⚠️ Good | React Native |
| **Access to Native APIs** | ✅ Excellent | ❌ Limited | ✅ Good | React Native |
| **Learning Curve** | ⚠️ Moderate | ✅ Low (web devs) | ✅ Low | PWA/Capacitor |
| **Cost** | ⚠️ Expo fees | ✅ Free hosting | ✅ Free | PWA/Capacitor |
| **Widget Support** | ✅ Yes | ❌ No | ⚠️ Limited | React Native |
| **App Size** | ⚠️ ~40-60MB | ✅ Small | ⚠️ ~30-50MB | PWA |

---

### RECOMMENDATION: **React Native + Expo**

**Rationale:**

1. **Push Notifications are Critical**
   - Core feature for anticipating cycle phases
   - PWA notifications are inconsistent (especially iOS)
   - React Native provides reliable native push

2. **App Store Presence Matters**
   - Discoverability through app stores
   - Credibility ("real app" vs. "just a website")
   - User expectations for health apps (expect native)

3. **Performance & UX**
   - Smooth animations for phase transitions
   - Native UI components feel more polished
   - Better for daily-use utility app

4. **Widgets** (Future Feature)
   - Home screen widget with current phase = huge value
   - Can't do with PWA
   - React Native supports this

5. **Expo Advantages**
   - Rapid development and iteration
   - Over-the-air updates (fix bugs without app store review)
   - Simplified deployment (EAS Build)
   - Great developer experience
   - Handles platform differences well

**Trade-offs Accepted:**
- ❌ Slightly higher app size (manageable)
- ❌ Two separate app store submissions (but using Expo simplifies this)
- ❌ Expo fees for EAS Build (worth it for speed)

**Alternative for Phase 2:**
- Could develop PWA version for web access
- Same React codebase, minor adaptations
- Best of both worlds: native apps + web fallback

---

## App Store Requirements

### iOS App Store (Apple)

#### **Pre-Submission Requirements**

**1. Apple Developer Account**
- Cost: $99/year
- Required: Legal business/individual identity
- Time: 1-2 days approval

**2. Privacy Manifest (2024+ Requirement)**
```json
{
  "NSPrivacyTracking": false,
  "NSPrivacyCollectedDataTypes": [
    {
      "NSPrivacyCollectedDataType": "NSPrivacyCollectedDataTypeHealthAndFitness",
      "NSPrivacyCollectedDataTypeLinked": false,
      "NSPrivacyCollectedDataTypeTracking": false,
      "NSPrivacyCollectedDataTypePurposes": [
        "NSPrivacyCollectedDataTypePurposeAnalytics"
      ]
    }
  ],
  "NSPrivacyAccessedAPITypes": [
    {
      "NSPrivacyAccessedAPIType": "NSPrivacyAccessedAPICategoryUserDefaults",
      "NSPrivacyAccessedAPITypeReasons": ["CA92.1"]
    }
  ]
}
```

**3. App Store Connect Preparation**
- App name (unique in App Store)
- Bundle ID (e.g., `com.periodsupport.partner`)
- Primary category: Health & Fitness
- Secondary category: Lifestyle
- Age rating: 12+ (health-related content, minimal objectionable content)

**4. Required Assets**
- App icon (1024x1024px)
- Screenshots:
  - 6.7" (iPhone 14 Pro Max): 5-10 screenshots
  - 5.5" (iPhone 8 Plus): 5-10 screenshots
  - 12.9" iPad Pro (optional): 5-10 screenshots
- App preview videos (optional, recommended): 15-30 second demo

**5. App Store Listing**
- App name: "Period Support: Partner Edition" (or similar)
- Subtitle: "Support Your Partner Through Every Phase" (30 char limit)
- Description: 4000 chars max, keywords front-loaded
- Keywords: "period tracker partner, cycle support, menstrual calendar" etc.
- Privacy policy URL (hosted, accessible)
- Support URL

#### **Health Data Compliance**

**Restrictions:**
- ❌ Cannot use health data for advertising
- ❌ Cannot share with third parties for data mining
- ❌ Cannot write false data to HealthKit
- ✅ Can read HealthKit with permission (for syncing)
- ✅ Must request explicit permission for HealthKit access

**Required Disclaimers:**
> "This app does not provide medical advice. Consult a healthcare provider for medical concerns."

#### **Privacy & Data**

**Required Disclosures:**
- What data we collect: Cycle dates, phase lengths, optional symptoms
- Why: To predict phases and provide partner guidance
- With whom: No one (stays on device or encrypted cloud)
- User rights: Delete data anytime

**Data Deletion:**
- Must provide in-app mechanism to delete all data
- Cannot require contacting support to delete

#### **Review Considerations**

**Potential Questions from Reviewers:**
- "Why does partner need to track this?" → Relationship support, consent-based
- "Is this medical?" → No, wellness and education only
- "Privacy concerns?" → Local-first, encryption, consent framework

**Review Timeline:**
- Initial submission: 24-48 hours typically
- Health apps may get extra scrutiny: 3-7 days
- Rejections possible, iterate based on feedback

**Common Rejection Reasons:**
- Missing privacy policy
- Insufficient functionality ("just a website wrapper")
- Health claims without disclaimers
- Poor user experience
- Crashes or bugs

---

### Google Play Store (Android)

#### **Pre-Submission Requirements**

**1. Google Play Developer Account**
- Cost: $25 (one-time)
- Required: Legal identity, address
- Time: ~24 hours verification

**2. Health Apps Declaration (2024 Requirement)**
- **Effective:** August 31, 2024 (all apps must complete)
- **Form:** Attest whether app has health features (YES for us)
- **Categories:** Period tracking = "Health monitoring & diagnostics"

**3. Play Console Preparation**
- App name: "Period Support: Partner Edition"
- Package name: `com.periodsupport.partner`
- Category: Health & Fitness
- Content rating: Everyone, some health content

**4. Required Assets**
- App icon: 512x512px (PNG)
- Feature graphic: 1024x500px (required for store listing)
- Screenshots:
  - Phone: 2-8 screenshots (minimum 320px on shortest side)
  - 7" tablet: 2-8 screenshots (recommended)
  - 10" tablet: 2-8 screenshots (recommended)
- Promo video: YouTube link (optional)

**5. Store Listing**
- Short description: 80 chars
- Full description: 4000 chars
- Privacy policy URL (required for health apps)

#### **Data Safety Section (Critical)**

**Questions to Answer:**
- *Does your app collect or share user data?* YES
- *What data?*
  - Health and fitness: Menstrual cycle info
  - App activity: Notifications opened, features used (optional)
- *Is all collected data encrypted in transit?* YES
- *Can users request data deletion?* YES
- *What's the data used for?*
  - App functionality (cycle predictions)
  - Personalization (customized tips)

**Data Safety Best Practices:**
- Be 100% honest (violations lead to removal)
- Update when adding features that collect new data
- Users see this BEFORE downloading

#### **Health Content & Services Policy**

**Medical Disclaimers Required:**
- App makes health/medical claims → must disclose key info to users
- Not a substitute for professional medical advice
- Not diagnostic or treatment tool

**Format:**
> "This app provides general information about menstrual cycles for educational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment."

#### **Testing Tracks**

**Recommended Rollout:**
1. **Internal testing** (up to 100 testers)
   - Team, friends, alpha testers
   - Fast iterations, no review delay
2. **Closed testing** (alpha or beta)
   - Invite-only, up to thousands
   - Get feedback before public
3. **Open testing**
   - Public beta, anyone can join
   - Build buzz, find edge case bugs
4. **Production release**
   - Full public launch
   - Can do staged rollout (1%, 10%, 50%, 100%)

#### **Review Process**

**Timeline:**
- Initial review: Few hours to 7 days (typically <24 hours for health apps)
- Updates: Often same day

**Common Rejection Reasons:**
- Incomplete Data Safety section
- Missing health disclaimers
- Privacy policy issues
- Crashes or critical bugs
- Misleading screenshots or descriptions

---

## Push Notification Strategy

### Why Notifications Matter

**Research:** Apps with push notifications see:
- **180% higher retention** rates
- **27% increase in Daily Active Users** (median)
- **440% better retention** with weekly notifications

For our app, notifications are **core value delivery**:
- "PMS window starting in 3 days"
- "Period expected tomorrow"
- "Entering ovulation phase - great time to connect"

### Notification Best Practices

**1. Opt-in, Never Spam**
- Ask permission during onboarding (explain value)
- Never send without explicit user consent
- Make it easy to customize or disable

**2. High Value Only**
- Every notification must provide immediate value
- Avoid promotional or "engagement bait" notifications
- Never send daily if not adding value daily

**3. Personalization**
- User chooses what notifications they want
- Custom timing (morning prep vs. evening)
- Custom frequency (daily tips vs. phase changes only)

**4. Tone**
- Supportive, not alarming
- Clear and concise
- Action-oriented

**5. Timing**
- Morning (7-9am): "Prep for today" notifications
- Evening (7-9pm): "Tomorrow prep" notifications
- Avoid late night (after 10pm)

### Recommended Notification Types

**Critical (Default On):**
- ✅ Period starting soon (2-3 days ahead)
- ✅ PMS window beginning (3-5 days before period)
- ✅ Phase change (entering new phase)

**Helpful (Default On, Easy to Disable):**
- ✅ Daily tip/action item (can set frequency: daily, 3x/week, weekly)
- ✅ Reminder to check in (when haven't opened in 3+ days)

**Optional (Default Off, Opt-in):**
- ⚪ Medication reminders (if partner helps with this)
- ⚪ Shopping list reminders (before period)
- ⚪ Relationship insights (best time for date, etc.)

**Never Send:**
- ❌ Promotional content
- ❌ "Rate our app" (use gentle in-app prompts instead)
- ❌ Guilt trips for not using app
- ❌ Anything that could violate privacy (sensitive info in notification preview)

### Platform Differences

**iOS:**
- Rich notifications with images possible
- Notification grouping
- Critical alerts (require special permission)

**Android:**
- Notification channels (user can disable categories)
- More customizable
- Better delivery rate

---

## Offline Functionality

### What Must Work Offline

**Critical Features:**
- ✅ View current cycle phase
- ✅ See action items for current phase
- ✅ Read saved educational content
- ✅ View cycle calendar/predictions (based on last sync)

**Can Wait for Online:**
- ❌ New educational content
- ❌ Syncing with partner's data
- ❌ App updates

### Implementation Strategy

- Use AsyncStorage (React Native) for local data
- Cache all essential content on device
- Sync when online, seamless offline experience
- Show indicator if data is stale (haven't synced in X days)

---

## Performance Requirements

### Load Time Targets

- **App launch:** <2 seconds (cold start)
- **Screen transitions:** <300ms (smooth animations)
- **First meaningful paint:** <1 second

### Bundle Size

- **Target:** <50MB total app size
- **Expo defaults:** ~40-60MB (acceptable for health app)
- **Optimization:** Code splitting, lazy loading, optimize images

### Battery & Data Usage

- Minimal background activity (only push notifications)
- Efficient data sync (incremental, not full dump each time)
- Image optimization (WebP format, compressed)

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

**Color Contrast:**
- Text: Minimum 4.5:1 ratio for normal text
- Large text (18pt+): Minimum 3:1 ratio
- UI components: 3:1 ratio

**Screen Reader Support:**
- All interactive elements have labels
- Headings properly structured (H1, H2, H3)
- Forms have clear labels and error messages
- Dynamic content changes announced

**Keyboard Navigation:**
- All features accessible via keyboard (for Android external keyboards)
- Logical tab order
- Visible focus indicators

**Text Scaling:**
- Support iOS/Android text size settings
- Layout doesn't break at 200% text size
- Buttons remain tappable at larger sizes

**Touch Targets:**
- Minimum 44x44 points (iOS) / 48x48dp (Android)
- Adequate spacing between tap targets

### Platform Assistive Tech

**iOS VoiceOver:**
- Test all screens with VoiceOver on
- Ensure logical reading order
- Provide image descriptions

**Android TalkBack:**
- Same requirements as VoiceOver
- Test on real devices

---

## Mobile UX Best Practices

### Navigation Patterns

**Bottom Tab Bar (Recommended):**
- 3-5 main sections
- Always visible, easy thumb access
- Examples:
  - Home (Dashboard)
  - Learn (Education)
  - Settings

**Alternatives:**
- Drawer navigation (hamburger menu)
- Top tabs (for subsections)

### Gestures

- Swipe between phases (optional)
- Pull to refresh (cycle data)
- Swipe to dismiss modals

### Forms & Input

- Minimize typing (use pickers, sliders where possible)
- Auto-capitalize, autocomplete
- Clear error states
- Progress indicators for multi-step

### Feedback

- Loading states (skeleton screens)
- Success confirmation (visual + haptic)
- Error messages (helpful, specific)
- Haptic feedback for important actions

---

## Data Storage & Sync Strategy

### Local-First Architecture

**Primary Storage: On-Device**
- AsyncStorage for key-value pairs
- RealmDB or SQLite for complex queries (if needed)
- Fast, works offline, privacy-friendly

**Cloud Sync: Optional**
- End-to-end encrypted
- Only sync if user opts in
- Benefits: Backup, access on multiple devices
- Implementation: Firebase, Supabase, or custom backend

### Data Model

```typescript
interface CycleData {
  userId: string;
  cycles: Cycle[];
  settings: UserSettings;
  customizations: Customizations;
}

interface Cycle {
  startDate: Date;
  endDate?: Date;
  length: number;
  phases: {
    menstrual: { start: Date; end: Date };
    follicular: { start: Date; end: Date };
    ovulation: { start: Date; end: Date };
    luteal: { start: Date; end: Date };
  };
  symptoms?: string[]; // Optional, shared only if permitted
}

interface UserSettings {
  notificationsEnabled: boolean;
  notificationTypes: string[];
  consentGiven: boolean;
  consentDate: Date;
  dataSharing: 'local' | 'cloud-encrypted' | 'none';
}
```

---

## App Icon & Branding

### Icon Requirements

**iOS:**
- 1024x1024px (App Store)
- No transparency, no rounded corners (iOS adds automatically)
- Various sizes for device (Expo generates)

**Android:**
- 512x512px (Play Store)
- Adaptive icon (foreground + background layers)
- Various sizes (Expo generates)

### Branding Considerations

- **Not too feminine** (avoid clichéd pink/purple)
- **Not too clinical** (avoid medical sterility)
- **Warm and approachable**
- **Gender-neutral**
- **Professional but friendly**

**Color Ideas:**
- Warm earth tones (terracotta, sage, warm grays)
- Nature-inspired (ocean blues, forest greens)
- Sophisticated neutrals with accent color

---

## Monetization & Pricing Strategy

### Freemium Model (Recommended)

**Free Tier:**
- Core features: Cycle tracking, phase display
- Basic action items (3 per phase)
- Limited educational content (5-10 articles)
- Basic notifications (phase changes, period coming)

**Premium Tier ($2.99-4.99/month or $24.99-39.99/year):**
- Unlimited action items and tips
- Full educational library (30+ articles)
- Advanced notifications (daily tips, shopping reminders)
- Customization (personalized recommendations)
- Relationship insights (best times for connection)
- Ad-free (if using ads in free tier)
- Priority support

**Why Freemium:**
- Lower barrier to entry (try before buy)
- Viral potential (free users tell others)
- Convert based on value demonstrated
- Aligns with App Store expectations (can't paywall everything)

### In-App Purchases

**One-Time Unlocks:**
- Individual educational modules ($0.99-1.99)
- Lifetime premium upgrade ($49.99-79.99)

**Subscriptions:**
- Monthly or annual
- Free trial: 7 days (standard), drive conversions

---

## Technical Stack Recommendation

### Recommended Tech Stack

**Framework:** React Native + Expo
**Language:** TypeScript (type safety for health data critical)
**Styling:** NativeWind (Tailwind for React Native) or StyleSheet with design tokens
**State Management:** Zustand (lightweight, simple) or React Context
**Navigation:** Expo Router (file-based, modern)
**Storage:** AsyncStorage + optional encrypted cloud (Firebase/Supabase)
**Push Notifications:** Expo Notifications API
**Analytics:** Expo Analytics or PostHog (privacy-friendly)
**Error Tracking:** Sentry
**Testing:** Jest + React Native Testing Library
**CI/CD:** EAS Build (Expo's build service)

---

## Deployment Checklist

### Pre-Launch

- ☑️ App tested on real iOS and Android devices
- ☑️ Privacy policy written and hosted
- ☑️ Terms of service written
- ☑️ Medical disclaimers in app and store listings
- ☑️ All required assets (icons, screenshots, descriptions)
- ☑️ Apple Developer Account active ($99 paid)
- ☑️ Google Play Developer Account active ($25 paid)
- ☑️ Privacy manifest completed (iOS)
- ☑️ Data safety section completed (Android)
- ☑️ Health apps declaration completed (Android)
- ☑️ EAS Build configured
- ☑️ Crash reporting set up
- ☑️ Analytics configured (privacy-compliant)

### Launch

- ☑️ Submit to App Store
- ☑️ Submit to Play Store
- ☑️ Monitor reviews and respond
- ☑️ Track crash reports, fix critical bugs ASAP
- ☑️ Plan for first update (quick iteration)

---

## Post-Launch Monitoring

### Key Metrics

**App Performance:**
- Crash-free rate (target: >99%)
- ANR rate (Android Not Responding: target: <0.5%)
- App load time

**User Metrics:**
- Downloads
- DAU/WAU/MAU
- Retention (D1, D7, D30)
- Session length
- Feature usage

**App Store Performance:**
- Ratings (target: 4.5+ stars)
- Reviews (respond to all, especially negative)
- Conversion rate (listing views → installs)

---

## Platform-Specific Gotchas

### iOS

- ⚠️ App Store review can be subjective
- ⚠️ Strict about privacy and health data
- ⚠️ Must handle iPhone and iPad (or restrict to iPhone only)
- ⚠️ Push notification permissions need careful UX
- ⚠️ Cannot mention Android in app or listing

### Android

- ⚠️ Fragmentation (test on multiple devices)
- ⚠️ Different screen sizes and aspect ratios
- ⚠️ Back button behavior (must handle gracefully)
- ⚠️ Notification channels (users can disable specific types)
- ⚠️ Battery optimization can kill background tasks

---

## Summary: Key Decisions

1. ✅ **Platform: React Native + Expo** (native apps for iOS and Android)
2. ✅ **Notifications: Critical feature** (phase changes, period coming, PMS window)
3. ✅ **Offline: Core features work offline** (local-first data storage)
4. ✅ **Privacy: Highest priority** (transparent, encrypted, user control)
5. ✅ **Accessibility: WCAG AA compliance**
6. ✅ **Monetization: Freemium** (free core features, premium for advanced)
7. ✅ **Disclaimers: Not medical device** (wellness and education only)

---

## Sources

- Apple App Store Review Guidelines
- Google Play Developer Policy Center
- Expo documentation
- React Native vs PWA vs Capacitor comparisons
- Mobile app retention research
- Push notification effectiveness studies
- WCAG 2.1 guidelines
- FDA general wellness guidance
