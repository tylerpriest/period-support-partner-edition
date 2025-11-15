# Deployment Guide

## Pre-Deployment Checklist

### 1. Code Quality
- [ ] All TypeScript errors resolved (`npx tsc --noEmit`)
- [ ] No console warnings or errors
- [ ] Code follows style guidelines
- [ ] All TODOs addressed or documented

### 2. Testing
- [ ] Manual testing completed on iOS
- [ ] Manual testing completed on Android
- [ ] Accessibility testing with VoiceOver/TalkBack
- [ ] All critical user flows work
- [ ] Notifications tested and working

### 3. Content
- [ ] All copy reviewed for typos
- [ ] Medical disclaimers present
- [ ] Privacy policy finalized
- [ ] Educational content reviewed for accuracy
- [ ] All links work (if any)

### 4. Assets
- [ ] App icon ready (1024x1024 PNG)
- [ ] Splash screen ready
- [ ] Screenshots prepared (see requirements below)
- [ ] App Store graphics ready

### 5. Configuration
- [ ] Version number updated in app.json
- [ ] Bundle identifier correct
- [ ] Permissions properly declared
- [ ] Privacy manifest complete (iOS)
- [ ] Data safety section complete (Android)

## iOS App Store Deployment

### Requirements

**Apple Developer Account**
- Individual or Organization account ($99/year)
- Enrollment at [developer.apple.com](https://developer.apple.com)

**App Store Connect Setup**
1. Create App ID in Certificates, Identifiers & Profiles
2. Create new app in App Store Connect
3. Fill in app metadata

### App Assets

**App Icon**
- 1024x1024 PNG (no transparency, no rounded corners)
- Simple, recognizable design
- Follows Apple Human Interface Guidelines

**Screenshots Required**
- iPhone 6.7" (Pro Max): 1290x2796 pixels
- iPhone 6.5" (Plus): 1242x2688 pixels
- Optional: iPad Pro 12.9": 2048x2732 pixels

**What to Screenshot:**
1. Dashboard showing current phase
2. Quick actions list
3. Educational article list
4. Article detail view
5. Settings screen

### App Metadata

**App Name**
- Primary: "Period Support"
- Subtitle: "Partner Edition"

**Description**
```
Help your partner through every phase of their cycle with understanding and support.

Period Support is designed for partners who want to be more supportive, informed, and empathetic. Learn about the menstrual cycle, get actionable guidance for each phase, and receive gentle reminders for period timing.

FEATURES:

• Cycle Phase Tracking
Know what phase they're in and what to expect emotionally and physically

• Actionable Guidance
Get specific do's and don'ts for each phase—from period support to PMS management

• Educational Content
Science-backed articles about the cycle, PMS, communication, and health

• Thoughtful Reminders
Notifications for period timing, PMS window, and phase changes

• Privacy-First
All data stored locally on your device. No cloud sync, no data selling.

BUILT ON CONSENT
This app requires mutual consent and is designed for healthy relationships. It's a support tool, not a surveillance app.

NOT MEDICAL ADVICE
This app is for educational and relationship support purposes only. Not intended to diagnose or treat any medical condition.

Support your partner better. Download today.
```

**Keywords** (comma-separated, max 100 characters)
```
period,menstrual,cycle,partner,support,PMS,relationship,health,education
```

**Category**
- Primary: Health & Fitness
- Secondary: Lifestyle

**Age Rating**
- 12+ (Infrequent/Mild Medical/Treatment Information)

**Privacy Policy URL**
- [Your privacy policy URL] (required)

**Support URL**
- [Your support website or email]

### Build & Submit with EAS

#### 1. Install EAS CLI
```bash
npm install -g eas-cli
eas login
```

#### 2. Configure Project
```bash
# Initialize EAS in project
eas build:configure

# This creates eas.json
```

#### 3. Create Production Build
```bash
# Build for iOS App Store
eas build --platform ios --profile production

# Monitor build at expo.dev
```

#### 4. Submit to App Store
```bash
# Submit to App Store Connect
eas submit --platform ios

# Or manually download .ipa and upload via Transporter app
```

#### 5. App Store Connect Review

1. Log into [App Store Connect](https://appstoreconnect.apple.com)
2. Select your app
3. Fill in all required metadata
4. Upload screenshots
5. Select build from EAS
6. Submit for review

**Review Process:**
- Takes 1-3 days typically
- May request changes or clarifications
- Be ready to respond to reviewer questions

### iOS Rejection Prevention

**Common Rejection Reasons:**

1. **Health Data Claims**
   - Don't claim to diagnose, treat, or cure
   - Include medical disclaimers
   - Don't make unsupported health claims

2. **Privacy Policy**
   - Must be accessible before download
   - Must explain what data is collected
   - Must explain how data is used

3. **Permissions**
   - Explain why notifications are needed
   - Don't request unnecessary permissions

4. **User-Generated Content**
   - Not applicable for this app

5. **Age Rating**
   - Ensure correct age rating selected
   - Health content may require 12+

## Android Google Play Deployment

### Requirements

**Google Play Developer Account**
- One-time $25 fee
- Register at [play.google.com/console](https://play.google.com/console)

### App Assets

**App Icon**
- 512x512 PNG (can have transparency)
- Adaptive icon: Foreground + background layers

**Screenshots Required**
- Phone: 16:9 or 9:16 aspect ratio
- Minimum 2, maximum 8 screenshots
- Recommended: 1080x1920 or 1920x1080

**Feature Graphic**
- 1024x500 PNG or JPEG
- Promotional banner for Play Store

### App Metadata

**Title**
```
Period Support - Partner Edition
```

**Short Description** (80 characters max)
```
Support your partner through every cycle phase with understanding & guidance.
```

**Full Description** (4000 characters max)
```
Help your partner through every phase of their menstrual cycle with understanding, empathy, and practical support.

Period Support is designed for partners who want to be more informed, supportive, and attentive. Learn about the science of the menstrual cycle, get actionable guidance for each phase, and receive gentle reminders for period timing and PMS.

🌸 FEATURES

📅 Cycle Phase Tracking
Know what phase they're in and what to expect—emotionally, physically, and energetically.

💡 Quick Actions
Get the top 3 most helpful things you can do right now, tailored to their current phase.

📚 Educational Library
Learn from science-backed articles about the cycle, PMS, period pain, communication, and when to be concerned about symptoms.

💬 Communication Guidance
Phase-specific do's and don'ts to help you communicate with empathy and avoid common pitfalls.

🔔 Gentle Reminders
Notifications for period timing (3 days ahead, 1 day ahead, day-of), PMS window, and phase changes.

🔒 Privacy-First
All data is stored locally on your device. No cloud sync required. No data selling. Ever.

⚖️ BUILT ON CONSENT & ETHICS

This app requires mutual consent between partners. It's designed as a support tool, not a surveillance app. Use it to anticipate needs and provide support—never to dismiss emotions, control behavior, or win arguments.

⚠️ NOT MEDICAL ADVICE

This app is for educational and relationship support purposes only. It is not intended to diagnose, treat, cure, or prevent any medical condition. Cycle predictions are estimates. Always consult healthcare providers for medical concerns.

🌈 INCLUSIVE BY DESIGN

Gender-neutral language. All relationships and identities welcome.

Support your partner better. Download today.
```

**Category**
- Health & Fitness

**Content Rating**
Fill out content rating questionnaire:
- Select "No" for violence, sexual content, etc.
- May be rated "Everyone" or "Teen" depending on health content

**Data Safety Section**

**Data Collected:**
```
Health & Fitness
- Cycle tracking data (start dates, cycle length)

Personal Info
- Optional: Partner's first name
```

**Data Sharing:**
```
No data is shared with third parties
```

**Data Security:**
```
- Data is encrypted in transit
- Data is stored locally on device
- Users can request data deletion
- No data collected if user opts out
```

### Build & Submit with EAS

#### 1. Create Production Build
```bash
# Build for Google Play
eas build --platform android --profile production
```

#### 2. Submit to Google Play
```bash
# Submit to Google Play Console
eas submit --platform android

# Or manually upload .aab file
```

#### 3. Google Play Console Setup

1. Log into [Google Play Console](https://play.google.com/console)
2. Create new app
3. Fill in store listing
4. Upload screenshots and graphics
5. Complete content rating questionnaire
6. Fill in data safety section
7. Upload build (AAB file)
8. Submit for review

**Review Process:**
- Can take hours to several days
- Typically faster than iOS
- May request changes

### Android Rejection Prevention

**Common Rejection Reasons:**

1. **Data Safety Disclosure**
   - Must accurately describe data collection
   - Must explain data usage
   - Must indicate if data is shared

2. **Health Apps Declaration**
   - Must complete health apps declaration form
   - Explain app functionality clearly

3. **Permissions**
   - Only request necessary permissions
   - Explain permission usage

4. **Medical Disclaimers**
   - Include disclaimers if making health-related claims
   - Don't claim to diagnose or treat

## EAS Build Profiles

Create `eas.json` in project root:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "production": {
      "ios": {
        "bundleIdentifier": "com.periodsupport.partner"
      },
      "android": {
        "buildType": "app-bundle"
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "your-apple-id@example.com",
        "ascAppId": "1234567890",
        "appleTeamId": "ABCDE12345"
      },
      "android": {
        "serviceAccountKeyPath": "./google-service-account.json"
      }
    }
  }
}
```

## Version Management

### Semantic Versioning
Follow semver: MAJOR.MINOR.PATCH

- **MAJOR**: Breaking changes (rare for mobile apps)
- **MINOR**: New features
- **PATCH**: Bug fixes

### Update app.json
```json
{
  "expo": {
    "version": "1.0.1",
    "ios": {
      "buildNumber": "2"
    },
    "android": {
      "versionCode": 2
    }
  }
}
```

### Release Notes Template
```markdown
## What's New in 1.0.1

**New Features:**
- Added test notification button in settings

**Improvements:**
- Better error handling for notification permissions
- Improved cycle calculation accuracy

**Bug Fixes:**
- Fixed date picker on Android
- Resolved notification scheduling issue

**Known Issues:**
- None currently
```

## OTA Updates (Over-The-Air)

For minor fixes that don't require app store review:

```bash
# Publish update to users
eas update --branch production --message "Fix notification bug"
```

**When to use OTA:**
- Bug fixes
- Content updates
- Minor UI tweaks

**When NOT to use OTA:**
- Native code changes
- New permissions
- Major features

## Post-Launch Monitoring

### Analytics (if implemented)
- Track onboarding completion rate
- Monitor feature usage
- Identify drop-off points

### Crash Reporting
- Set up Sentry or similar
- Monitor crash-free rate (target: >99%)
- Fix critical crashes immediately

### User Feedback
- Monitor app store reviews
- Respond to user feedback
- Create feedback collection mechanism in app

### Performance
- Monitor app load time
- Check memory usage
- Ensure smooth scrolling

## Maintenance Schedule

### Weekly
- Check app store reviews
- Monitor crash reports
- Check analytics

### Monthly
- Update dependencies
- Security audit
- Performance review

### Quarterly
- Content review and updates
- Feature prioritization
- User testing

## Support & Updates

### User Support
- Create support email: support@periodsupport.app
- FAQ page on website
- In-app support link

### Update Cadence
- Bug fixes: As needed (OTA when possible)
- Minor features: Monthly
- Major updates: Quarterly

## Checklist: Day Before Launch

- [ ] Final testing on real devices
- [ ] All store assets uploaded
- [ ] Privacy policy live and linked
- [ ] Support channels ready
- [ ] Social media posts prepared
- [ ] App submitted to both stores
- [ ] Team notified of launch timeline

## Checklist: Launch Day

- [ ] Monitor submission status
- [ ] Check for crashes/bugs
- [ ] Respond to early reviews
- [ ] Share on social media
- [ ] Monitor analytics
- [ ] Be ready to push hotfixes

---

## Emergency Procedures

### Critical Bug After Launch

1. **Assess severity**
   - App crashes? Data loss? Security issue?

2. **Immediate action**
   - If OTA-fixable: Push update immediately
   - If requires app store: Submit emergency build

3. **Communication**
   - Notify users via social media
   - Post in-app message if possible
   - Update app store description with known issue

4. **Post-mortem**
   - Document what happened
   - How it was missed in testing
   - How to prevent in future

### App Store Rejection

1. **Read rejection reason carefully**
2. **Address all issues mentioned**
3. **Respond to reviewer if needed**
4. **Resubmit promptly**
5. **Don't argue—fix the issues**

---

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [iOS App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play Developer Policy](https://play.google.com/about/developer-content-policy/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [EAS Submit Documentation](https://docs.expo.dev/submit/introduction/)

---

Good luck with your launch! 🚀
