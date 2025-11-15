# User Flows

## Primary User Journeys

### 1. First-Time User Onboarding

```
[App Launch] →
[Welcome Screen]
  ↓ (Tap "Get Started")
[Consent & Privacy Screen]
  ↓ (Tap "I Understand")
[Cycle 101: Phase 1 Card]
  ↓ (Swipe/Next)
[Cycle 101: Phase 2 Card]
  ↓ (Swipe/Next)
[Cycle 101: Phase 3 Card]
  ↓ (Swipe/Next)
[Setup Screen]
  - Input: Cycle start date
  - Input: Average cycle length
  - Optional: Partner name
  ↓ (Tap "Finish Setup")
[Dashboard] (First use complete!)
```

**Success Criteria:**
- Completes in <3 minutes
- Understands consent framework
- Has basic cycle knowledge
- Sees immediate value (current phase + actions)

---

### 2. Daily Check-In (Engaged User)

```
[Open App] →
[Dashboard]
  - View: Current phase indicator
  - View: Days until next period
  - Scan: Quick action items (3-5)
  - Optional: Read daily tip
  ↓ (Mark action completed or close app)
[Done] (30-60 seconds)
```

**Success Criteria:**
- Gets value in <1 minute
- Knows current phase
- Has actionable next steps
- Feels prepared

---

### 3. Phase Transition Notification

```
[Notification: "Entering luteal phase"]
  ↓ (Tap notification)
[Dashboard]
  - Highlights: New phase
  - Shows: Updated action items
  - Displays: Phase-specific communication tips
  ↓ (Review guidance)
[Done]
```

**Success Criteria:**
- Understands new phase
- Adjusts support approach
- Feels prepared for changes

---

### 4. PMS Window Alert

```
[Notification: "PMS window starting in 3 days"]
  ↓ (Tap notification)
[Dashboard]
  - Warning: PMS approaching
  - Shows: Extra patience tips
  - Displays: Communication do's/don'ts
  - Optional: View shopping checklist
  ↓ (Prepare accordingly)
[Done]
```

**Success Criteria:**
- Anticipates PMS
- Stocks needed items
- Mentally prepares for extra support needs
- Avoids scheduling serious talks this week

---

### 5. Learning About Specific Topic

```
[Dashboard or Learn Tab]
  ↓ (Tap "Learn" tab)
[Education: Article List]
  - Browse categories
  - Search "PCOS" (example)
  ↓ (Tap article)
[Article Detail: "Understanding PCOS"]
  - Read content
  - View related articles
  - Optional: Bookmark for later
  ↓ (Back or continue reading)
[Learn Tab or Dashboard]
```

**Success Criteria:**
- Finds relevant information easily
- Understands complex topics
- Can reference later
- Feels more educated and confident

---

### 6. Communication Crisis (PMS)

```
[Real-life: Partner is upset during PMS]
  ↓ (Opens app)
[Dashboard]
  - Sees: PMS window indicator
  - Taps: "Communication Tips" card
  ↓
[Modal: Do's & Don'ts for PMS]
  - Quick reference: What to say/not say
  - Examples: Validation phrases
  - Reminder: Emotions are real even if amplified
  ↓ (Applies advice)
[Close app, better interaction]
```

**Success Criteria:**
- Quick access (<10 seconds)
- Clear, scannable guidance
- De-escalates tension
- Builds empathy and understanding

---

### 7. Customizing Settings

```
[Dashboard]
  ↓ (Tap "Settings" tab)
[Settings Screen]
  - Section: Cycle Settings
    ↓ (Tap)
    [Modify cycle length]
    [Adjust phase durations]
    [Update start date]
  - Section: Notification Settings
    ↓ (Tap)
    [Toggle notification types]
    [Set timing preference]
    [Test notification]
  - Section: Privacy
    ↓ (Tap)
    [View shared data]
    [Export data]
    [Delete all data]
  ↓ (Save changes)
[Dashboard] (Settings applied)
```

**Success Criteria:**
- Easy to find and change settings
- Immediate effect
- Clear about what each setting does

---

### 8. Reviewing Past Patterns

```
[Dashboard]
  ↓ (Optional feature)
[View Cycle History]
  - Timeline of past cycles
  - Pattern insights
  - Notes on what helped
  ↓ (Learn from patterns)
[Dashboard]
```

**Success Criteria:**
- Identifies what works
- Anticipates based on history
- Feels attuned to partner's patterns

---

## Edge Cases & Error States

### No Cycle Data Entered

```
[App Launch] →
[Empty State]
  - Message: "Let's set up your first cycle"
  - CTA: "Get Started"
  ↓
[Setup Flow]
```

### Irregular Cycle

```
[Dashboard with irregular data]
  - Warning: "Cycle length varies - predictions may be less accurate"
  - Tip: "Track for 3 cycles for better predictions"
  - Option: Manually adjust as needed
```

### Period Late

```
[Dashboard]
  - Notice: "Period expected 3 days ago"
  - Suggestion: "Update if period started or adjust cycle"
  - Note: "This app isn't for pregnancy detection - consult provider if concerned"
```

### No Internet Connection

```
[App Launch Offline]
  - All core features work
  - Banner: "Offline - some content may be outdated"
  - Sync when connection restored
```

---

## Navigation Patterns

### Bottom Tab Navigation

```
[Dashboard] ←→ [Learn] ←→ [Settings]
```

- Always visible
- Clear active state
- Icons + labels

### Modal Overlays

```
Any Screen
  ↓ (Tap action requiring detail)
[Modal Overlay]
  - Dismissable (swipe down or X)
  - Focused content
  - Clear CTAs
```

### Back Navigation

```
Detail Screens
  ↓ (Swipe right or back button)
[Previous Screen]
```

---

## Key Interaction Moments

### Completing an Action Item

```
[Dashboard]
  ↓ (Tap checkbox on action item)
[Checkmark Animation]
[Haptic Feedback]
[Item marked complete, gentle fade]
[Optional: Encouraging message]
```

### Marking Cycle Start

```
[Settings or Dashboard]
  ↓ (Tap "Period started today")
[Update cycle data]
[Recalculate phases]
[Update notifications]
[Show: "Cycle updated - now in menstrual phase"]
```

### Viewing Do's & Don'ts

```
[Dashboard]
  ↓ (Tap "Communication Tips" card)
[Modal: Current Phase Do's & Don'ts]
  - Left column: ✅ DO
  - Right column: ❌ DON'T
  - Swipe to dismiss
```

---

## Success Metrics Per Flow

### Onboarding
- Completion rate: >60%
- Time to complete: <3 minutes
- Immediate app usage after onboarding: >70%

### Daily Usage
- Session length: 1-3 minutes
- Actions viewed: 3-5
- Return rate: 20-30% DAU/MAU

### Learning
- Article read completion: >50%
- Bookmarks saved: Average 3-5 per user
- Educational content views: 60% of users

### Settings
- Settings accessed: >50% of users within first week
- Notification customization: >30% customize

---

## Future Flows (Post-MVP)

### Partner Data Sync

```
[Settings]
  ↓ (Enable cloud sync)
[Authentication]
  ↓ (Login/Create account)
[Invite Partner]
  ↓ (Share code)
[Bidirectional sync enabled]
```

### Widget Usage

```
[Home Screen Widget]
  - Glance: Current phase
  - Glance: Days to period
  - Glance: Today's top action
  ↓ (Tap widget)
[App: Dashboard]
```

### Community Access

```
[Learn Tab]
  ↓ (Tap "Community")
[Forum/Q&A]
  - Browse questions
  - Ask anonymously
  - Upvote helpful answers
```

---

## Design Principles for Flows

1. **Minimize steps** - Get to value quickly
2. **Clear next action** - Never leave user confused
3. **Forgiving** - Easy to go back, undo, fix mistakes
4. **Fast** - No unnecessary loading or delays
5. **Contextual** - Right information at right time
6. **Consistent** - Predictable patterns throughout

---

## Summary

**Primary Flows:**
- Onboarding: 4 screens, <3 minutes
- Daily check-in: <1 minute, high value
- Crisis help: <10 seconds to guidance
- Learning: Browse and deep-dive as needed

**Navigation:**
- Simple tab bar (3 main sections)
- Modal overlays for focused tasks
- Swipe gestures where appropriate

**Success:**
- Users complete onboarding
- Daily engagement with quick actions
- Return during key moments (PMS, phase changes)
- Feel more confident and capable
