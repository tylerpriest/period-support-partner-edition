# Testing Guide

## Overview

This guide covers testing strategies for the Period Support Partner Edition app, including manual testing, accessibility testing, and platform-specific considerations.

## Manual Testing Checklist

### 1. Onboarding Flow

#### Welcome Screen
- [ ] App loads and shows welcome screen on first launch
- [ ] All feature icons display correctly
- [ ] "Get Started" button is accessible and clickable
- [ ] Important consent notice is visible
- [ ] Text is readable and properly formatted

#### Consent Screen
- [ ] Scroll to bottom required before continuing
- [ ] Checkbox appears after scrolling
- [ ] Cannot continue without checking agreement
- [ ] All sections display correctly
- [ ] "Go Back" button returns to welcome screen
- [ ] Ethical guidelines are clear and comprehensive

#### Setup Screen
- [ ] Partner name field accepts text input (optional)
- [ ] Date picker works correctly (- and + buttons)
- [ ] Cycle length validates (21-45 days)
- [ ] Error message shows for invalid cycle length
- [ ] Notifications toggle works
- [ ] "Complete Setup" button is disabled until valid
- [ ] Completing setup navigates to dashboard

### 2. Dashboard/Home Screen

#### Current Phase Card
- [ ] Shows correct current cycle phase
- [ ] Phase indicator dots display correctly
- [ ] Day of cycle is accurate
- [ ] Phase description is appropriate
- [ ] Phase-specific colors applied correctly
- [ ] "What to Expect" list displays all items

#### Quick Actions
- [ ] Shows top 3 action items for current phase
- [ ] Actions are phase-appropriate
- [ ] Checkboxes work (toggle on/off)
- [ ] Action icons display correctly
- [ ] Category labels are correct
- [ ] Descriptions are complete and helpful

#### Upcoming Events
- [ ] Next period date calculates correctly
- [ ] Days until period is accurate
- [ ] PMS window notification shows at right time (5-7 days before)
- [ ] Next phase change displays correctly
- [ ] Date formatting is consistent
- [ ] Icons display properly

#### General
- [ ] Greeting changes based on time of day
- [ ] Partner name displays if set
- [ ] Scrolling works smoothly
- [ ] Footer reminder is visible

### 3. Learn Tab

#### Article List
- [ ] All articles load and display
- [ ] Category filtering works (All, Basics, Science, etc.)
- [ ] Article cards show title, summary, read time
- [ ] Tags display correctly
- [ ] Category icons are appropriate
- [ ] Horizontal category scroll works

#### Article Modal
- [ ] Tapping article opens modal
- [ ] Article title displays in modal header
- [ ] Content is readable and formatted
- [ ] Close button (X) works
- [ ] Scrolling works in modal
- [ ] Tapping backdrop closes modal
- [ ] Summary is distinguished from content

#### Content Verification
- [ ] All 7 articles are accessible
- [ ] No typos in article content
- [ ] Markdown formatting is correct
- [ ] Read time estimates are reasonable

### 4. Settings Screen

#### Cycle Data
- [ ] Current cycle data displays correctly
- [ ] "Update Cycle Data" opens modal
- [ ] Date picker works in modal
- [ ] Cycle length validation works
- [ ] Saving updates persists changes
- [ ] Dashboard reflects updated data

#### Notifications
- [ ] Toggle turns notifications on/off
- [ ] Test notification button appears when enabled
- [ ] Test notification actually sends
- [ ] Settings persist after app restart

#### Privacy & Data
- [ ] Privacy policy modal opens and displays
- [ ] "Clear All Data" button shows confirmation
- [ ] Clearing data removes all information
- [ ] App resets to onboarding after clear

#### About
- [ ] App version displays correctly
- [ ] Medical disclaimer is visible
- [ ] All text is accurate

### 5. Data Persistence

#### After Closing App
- [ ] Cycle data persists after app restart
- [ ] Settings persist (notifications, partner name)
- [ ] Consent status persists
- [ ] Action item checkboxes reset (by design)
- [ ] User doesn't see onboarding again

#### After Clearing Data
- [ ] All data is removed
- [ ] App returns to onboarding
- [ ] No residual data in storage

### 6. Notifications

#### Scheduling
- [ ] Notifications schedule when cycle data entered
- [ ] Notifications update when cycle data changes
- [ ] Notifications cancel when turned off
- [ ] Test notification sends immediately

#### Content (Requires waiting or time manipulation)
- [ ] Period reminder (3 days before)
- [ ] Period reminder (1 day before)
- [ ] Period start notification (day-of)
- [ ] PMS window notification (5 days before)
- [ ] Phase change notifications

### 7. Edge Cases

#### Invalid Data
- [ ] Cycle length < 21 shows error
- [ ] Cycle length > 45 shows error
- [ ] Non-numeric cycle length handled
- [ ] Empty required fields prevent submission

#### State Management
- [ ] No cycle data shows appropriate message
- [ ] Loading states work correctly
- [ ] Error states handled gracefully

#### Navigation
- [ ] Tab navigation works
- [ ] Back button behavior is correct
- [ ] Deep linking works (if implemented)

## Accessibility Testing

### Screen Reader Testing

#### iOS VoiceOver
1. Enable VoiceOver: Settings → Accessibility → VoiceOver
2. Test navigation through app
3. Verify all interactive elements are announced
4. Check that images have proper labels
5. Ensure form fields are properly labeled
6. Verify reading order is logical

**Checklist:**
- [ ] Welcome screen elements are announced correctly
- [ ] Consent screen is readable (important content)
- [ ] Setup form fields have proper labels
- [ ] Dashboard cards are accessible
- [ ] Action items announce correctly with status
- [ ] Article list is navigable
- [ ] Settings controls are properly labeled
- [ ] Modals are announced and closable

#### Android TalkBack
1. Enable TalkBack: Settings → Accessibility → TalkBack
2. Repeat all VoiceOver tests
3. Verify Android-specific behavior

**Checklist:**
- [ ] All VoiceOver tests pass on Android
- [ ] Navigation gestures work correctly
- [ ] Focus indicators are visible

### Visual Accessibility

#### Color Contrast
Use a contrast checker tool (e.g., Color Contrast Analyzer):

- [ ] All text has 4.5:1 contrast ratio minimum
- [ ] Large text (18pt+) has 3:1 minimum
- [ ] Interactive elements have 3:1 contrast
- [ ] Phase-specific colors are distinguishable

#### Text Sizing
Enable large text in device settings:

- [ ] Text scales appropriately
- [ ] No text cutoff
- [ ] Layout adapts to larger text
- [ ] Interactive elements remain usable

#### Touch Targets
- [ ] All buttons are at least 44x44 points (iOS) / 48x48dp (Android)
- [ ] Adequate spacing between touch targets
- [ ] Small interactive elements (checkboxes) are easily tappable

### Keyboard Navigation (if applicable)
- [ ] Can navigate using keyboard only
- [ ] Focus indicators are visible
- [ ] Tab order is logical
- [ ] No keyboard traps

## Platform-Specific Testing

### iOS Testing

#### Devices to Test
- iPhone SE (small screen)
- iPhone 13/14 (standard)
- iPhone 14 Pro Max (large screen)
- iPad (if supporting tablets)

#### iOS-Specific Checks
- [ ] Safe area insets respected (notch, Dynamic Island)
- [ ] Status bar color is correct
- [ ] Navigation gestures work (swipe back)
- [ ] Dark mode support (if implemented)
- [ ] Landscape orientation (if supported)
- [ ] VoiceOver compatibility
- [ ] Notifications appear correctly
- [ ] App icon displays properly

### Android Testing

#### Devices to Test
- Pixel 6/7 (Google devices)
- Samsung Galaxy S22+ (Samsung skin)
- Various screen sizes (small, medium, large)

#### Android-Specific Checks
- [ ] Safe area insets respected
- [ ] Status bar color is correct
- [ ] Back button behavior correct
- [ ] Dark mode support (if implemented)
- [ ] Landscape orientation (if supported)
- [ ] TalkBack compatibility
- [ ] Notifications appear correctly
- [ ] App icon displays properly
- [ ] Adaptive icon looks good

## Performance Testing

### App Launch
- [ ] Cold start < 3 seconds
- [ ] Warm start < 1 second
- [ ] Splash screen displays correctly

### Screen Transitions
- [ ] Tab switches are instant
- [ ] Modal animations are smooth
- [ ] No janky scrolling
- [ ] List rendering is performant

### Memory Usage
- [ ] No memory leaks
- [ ] App doesn't crash on low memory
- [ ] Background state handled correctly

## Regression Testing

When making changes, test:
- [ ] Onboarding flow still works
- [ ] Existing data doesn't break
- [ ] All tabs load correctly
- [ ] Notifications still schedule
- [ ] Settings persist

## User Acceptance Testing (UAT)

### Real User Testing
1. Recruit 3-5 partners to test
2. Have them complete full onboarding
3. Ask them to use app for 1 week
4. Collect feedback on:
   - Clarity of action items
   - Usefulness of educational content
   - Notification timing and helpfulness
   - Any confusing UI/UX elements
   - Missing features

### Feedback Collection
- [ ] Create feedback form
- [ ] Interview users after testing
- [ ] Observe users completing key tasks
- [ ] Note pain points and confusion
- [ ] Prioritize improvements

## Automated Testing (Future)

### Unit Tests (Jest)
```bash
# Run unit tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage
```

**Priority test coverage:**
- Cycle calculation utilities
- Phase determination logic
- Notification scheduling logic
- Date calculations

### Integration Tests
- Zustand store actions
- AsyncStorage persistence
- Navigation flows

### E2E Tests (Detox)
- Complete onboarding flow
- Add and update cycle data
- Navigate between tabs
- Send test notification

## Pre-Release Checklist

### Functionality
- [ ] All manual tests pass
- [ ] All accessibility tests pass
- [ ] Tested on iOS and Android
- [ ] Notifications work correctly
- [ ] Data persists correctly

### Content
- [ ] All copy is accurate
- [ ] No typos in articles or UI
- [ ] Medical disclaimers present
- [ ] Privacy policy accurate

### Design
- [ ] All screens match design
- [ ] Colors are correct
- [ ] Typography is consistent
- [ ] Icons display properly

### Performance
- [ ] No lag or janky scrolling
- [ ] App launches quickly
- [ ] Memory usage is acceptable

### Compliance
- [ ] Privacy policy reviewed
- [ ] Medical disclaimers present
- [ ] Age rating appropriate
- [ ] Permissions explained

## Bug Reporting Template

When reporting bugs, include:

```
**Bug Description:**
Clear description of the issue

**Steps to Reproduce:**
1. Step one
2. Step two
3. Step three

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Device Info:**
- Device: iPhone 14 Pro / Pixel 7
- OS Version: iOS 17.1 / Android 14
- App Version: 1.0.0

**Screenshots:**
[Attach if relevant]

**Severity:**
- Critical (app crashes, data loss)
- High (feature broken)
- Medium (minor bug, workaround exists)
- Low (cosmetic, nice-to-have)
```

## Testing Tools

### Recommended Tools
- **React Native Debugger**: Debugging React components
- **Flipper**: Network requests, AsyncStorage inspection
- **Expo Go**: Quick testing on physical devices
- **TestFlight** (iOS): Beta testing
- **Google Play Internal Testing** (Android): Beta testing

### Accessibility Tools
- **Color Contrast Analyzer**: Check WCAG compliance
- **Accessibility Inspector** (Xcode): iOS accessibility testing
- **Accessibility Scanner** (Android): Android accessibility testing

---

## Quick Test Commands

```bash
# Start development server
npx expo start

# Run on iOS simulator
npx expo run:ios

# Run on Android emulator
npx expo run:android

# Type check
npx tsc --noEmit

# Clear cache
npx expo start --clear
```

---

Remember: **Quality over speed.** Thorough testing ensures a better user experience and prevents issues in production.
