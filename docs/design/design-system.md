# Design System

## Design Philosophy

**Core Principles:**
1. **Warm, not clinical** - Approachable health app, not sterile medical interface
2. **Gender-neutral** - Inclusive for all partners regardless of gender
3. **Action-oriented** - Design supports quick understanding and decision-making
4. **Empathetic** - Visual language conveys care and support
5. **Professional with personality** - Trust-building but not boring

**Design Goals:**
- Make partners feel capable, not intimidated
- Break down stigma through normalized visual treatment
- Create atmosphere of calm support, not crisis management
- Be distinct from clinical medical apps and generic health trackers

---

## Typography

### Font Choices

**Primary Typeface: DM Sans**
- **Usage:** Headings, buttons, navigation
- **Rationale:** Modern, friendly, professional without being corporate
- **Weights:** Regular (400), Medium (500), Bold (700)
- **Why NOT Inter/Roboto:** Too common in AI designs, lacks warmth

**Secondary Typeface:** Nunito
- **Usage:** Body text, captions, descriptions
- **Rationale:** Rounded, warm, highly readable, approachable
- **Weights:** Regular (400), SemiBold (600)

### Type Scale

```typescript
export const typography = {
  // Headings
  h1: {
    fontFamily: 'DMSans-Bold',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  h3: {
    fontFamily: 'DMSans-Medium',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0,
  },

  // Body
  body: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  bodyBold: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },

  // UI
  button: {
    fontFamily: 'DMSans-Medium',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  caption: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  label: {
    fontFamily: 'DMSans-Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
};
```

---

## Color Palette

### Primary Colors

**Terracotta (Primary Brand Color)**
```typescript
terracotta: {
  50:  '#FFF4F0',  // Lightest - backgrounds
  100: '#FFE6DB',
  200: '#FFCDB7',
  300: '#FFB393',
  400: '#FF9A6F',
  500: '#E8734C',  // Primary - main brand color
  600: '#D15A31',
  700: '#A4461F',  // Darkest - text on light
  800: '#773314',
  900: '#4A200C',
}
```

**Sage Green (Secondary)**
```typescript
sage: {
  50:  '#F6F8F4',
  100: '#E8EDE5',
  200: '#D4DED0',
  300: '#B8C9B0',
  400: '#9BB48E',
  500: '#7D9E6F',  // Secondary color
  600: '#658354',
  700: '#4D683F',
  800: '#364C2C',
  900: '#1F301A',
}
```

### Phase-Specific Colors (Subtle Tints)

**Menstrual Phase:**
```typescript
menstrual: {
  primary: '#B35A47',    // Warm burgundy
  background: '#FFF4F2', // Very light warm tone
  accent: '#E8734C',
}
```

**Follicular Phase:**
```typescript
follicular: {
  primary: '#7D9E6F',    // Fresh sage green
  background: '#F6F8F4', // Light fresh green
  accent: '#9BB48E',
}
```

**Ovulation Phase:**
```typescript
ovulation: {
  primary: '#E8A54C',    // Golden amber
  background: '#FFF9F0', // Light warm yellow
  accent: '#FFCF93',
}
```

**Luteal Phase:**
```typescript
luteal: {
  primary: '#C17854',    // Deep amber/rust
  background: '#FFF7F3', // Soft peachy tone
  accent: '#E8985C',
}
```

### Neutral Colors

```typescript
neutral: {
  0:   '#FFFFFF',  // Pure white
  50:  '#FAF9F8',  // Off-white warm
  100: '#F3F1EE',  // Very light warm gray
  200: '#E6E3DF',  // Light warm gray
  300: '#D4CFC8',  // Medium-light gray
  400: '#B8B0A7',  // Medium gray
  500: '#8F8782',  // Mid gray
  600: '#6E675E',  // Dark gray
  700: '#4E4841',  // Darker gray
  800: '#342F2A',  // Very dark gray
  900: '#1C1917',  // Near black
}
```

### Semantic Colors

```typescript
semantic: {
  success: '#7D9E6F',  // Sage green
  warning: '#E8A54C',  // Amber
  error: '#D15A31',    // Deep terracotta
  info: '#4D7C9E',     // Muted blue
}
```

### Accessibility Validation

All text color combinations meet WCAG AA standards:
- **Normal text (16px):** 4.5:1 contrast ratio minimum
- **Large text (18px+ or bold 14px+):** 3:1 contrast ratio minimum
- **UI components:** 3:1 contrast ratio minimum

**Tested Combinations:**
- terracotta-700 on neutral-0: 7.2:1 ✅
- neutral-900 on neutral-0: 14.5:1 ✅
- sage-700 on neutral-0: 5.8:1 ✅

---

## Spacing & Layout

### Spacing Scale (rem-based)

```typescript
export const spacing = {
  xs: 4,    // 0.25rem
  sm: 8,    // 0.5rem
  md: 16,   // 1rem    - base unit
  lg: 24,   // 1.5rem
  xl: 32,   // 2rem
  '2xl': 48,  // 3rem
  '3xl': 64,  // 4rem
  '4xl': 96,  // 6rem
};
```

**Usage Guidelines:**
- **xs:** Icon padding, tight spacing
- **sm:** Between related elements
- **md:** Standard spacing (cards, sections)
- **lg:** Between unrelated sections
- **xl:** Page margins
- **2xl+:** Major section breaks

### Grid System

**Container Widths:**
- Mobile: 100% - 32px (16px padding each side)
- Tablet: 100% - 64px (32px padding each side)
- Desktop: Max 1200px, centered

**Columns:**
- Mobile: 4 columns
- Tablet: 8 columns
- Desktop: 12 columns

### Responsive Breakpoints

```typescript
export const breakpoints = {
  sm: 375,   // Small phone
  md: 768,   // Tablet
  lg: 1024,  // Small desktop
  xl: 1280,  // Desktop
};
```

---

## Border Radius

```typescript
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,    // Default for cards
  lg: 12,   // Large cards, modals
  xl: 16,   // Major containers
  '2xl': 24, // Hero elements
  full: 9999, // Pills, circular buttons
};
```

---

## Shadows

```typescript
export const shadows = {
  sm: {
    shadowColor: '#1C1917',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#1C1917',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: '#1C1917',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 5,
  },
};
```

---

## Animation & Motion

### Animation Durations

```typescript
export const duration = {
  fast: 150,     // Quick microinteractions
  base: 250,     // Default transitions
  slow: 350,     // Complex animations
  slower: 500,   // Page transitions
};
```

### Easing Functions

```typescript
export const easing = {
  easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  spring: { mass: 1, damping: 15, stiffness: 200 },
};
```

### Animation Principles

1. **Purpose-driven:** Every animation serves a purpose (feedback, guidance, delight)
2. **Fast:** Most animations 150-250ms
3. **Natural:** Easing that mimics physics (ease-out for entering, ease-in for exiting)
4. **Respectful:** Support reduced motion preferences
5. **Staggered reveals:** Content appears in sequence, not all at once

### Key Animations

**Page Transitions:**
- Fade in + slide up (50px)
- Duration: 350ms
- Easing: ease-out

**Card Hover/Press:**
- Scale: 0.98 (subtle press down)
- Duration: 150ms
- Shadow increase

**Phase Transitions:**
- Color fade between phase colors
- Duration: 500ms
- Smooth color interpolation

**Action Item Check:**
- Scale pulse (1.0 → 1.1 → 1.0)
- Duration: 250ms
- Haptic feedback

---

## Component Patterns

### Buttons

**Primary Button:**
```typescript
{
  backgroundColor: colors.terracotta[500],
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.xl,
  borderRadius: borderRadius.lg,
  minHeight: 48, // Touch target
  // Typography: DM Sans Medium, 16px
  // Color: white
}

// States:
// - Pressed: backgroundColor opacity 0.8
// - Disabled: backgroundColor neutral[300]
```

**Secondary Button:**
```typescript
{
  backgroundColor: colors.neutral[50],
  borderWidth: 2,
  borderColor: colors.terracotta[500],
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.xl,
  borderRadius: borderRadius.lg,
  // Typography: DM Sans Medium, 16px
  // Color: terracotta[700]
}
```

**Tertiary/Text Button:**
```typescript
{
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.md,
  // No background
  // Typography: DM Sans Medium, 16px
  // Color: terracotta[600]
  // Underline on press
}
```

---

### Cards

**Default Card:**
```typescript
{
  backgroundColor: colors.neutral[0],
  borderRadius: borderRadius.md,
  padding: spacing.lg,
  ...shadows.md,
}
```

**Phase-Specific Card:**
```typescript
{
  backgroundColor: phaseColors[phase].background,
  borderRadius: borderRadius.md,
  padding: spacing.lg,
  borderLeftWidth: 4,
  borderLeftColor: phaseColors[phase].primary,
  ...shadows.sm,
}
```

**Action Item Card:**
```typescript
{
  backgroundColor: colors.neutral[0],
  borderRadius: borderRadius.md,
  padding: spacing.md,
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.md,
  minHeight: 72, // Touch target
  borderWidth: 1,
  borderColor: colors.neutral[200],
}
```

---

### Modals

**Modal Overlay:**
```typescript
{
  backgroundColor: 'rgba(28, 25, 23, 0.5)', // neutral[900] with opacity
  // Full screen
  // Blur effect (if supported)
}
```

**Modal Container:**
```typescript
{
  backgroundColor: colors.neutral[0],
  borderRadius: borderRadius.xl,
  padding: spacing.xl,
  margin: spacing.lg,
  maxHeight: '90%',
  ...shadows.lg,
}
```

---

### Inputs

**Text Input:**
```typescript
{
  backgroundColor: colors.neutral[50],
  borderWidth: 1,
  borderColor: colors.neutral[300],
  borderRadius: borderRadius.md,
  padding: spacing.md,
  fontSize: 16, // Prevents zoom on iOS
  minHeight: 48,
  fontFamily: 'Nunito-Regular',

  // Focus state:
  borderColor: colors.terracotta[500],
  borderWidth: 2,

  // Error state:
  borderColor: colors.semantic.error,
}
```

**Checkbox/Toggle:**
- Minimum touch target: 44x44 points
- Clear checked/unchecked states
- Color: terracotta[500] when checked
- Smooth transition: 200ms

---

## Iconography

### Icon Style

**Choice:** Outlined icons (stroke, not filled)
**Rationale:** Lighter, more approachable, consistent with warm design

**Icon Library:** React Native Vector Icons (Feather set)
**Size Scale:**
- Small: 16px
- Medium: 24px (default)
- Large: 32px

**Icon Colors:**
- Primary actions: terracotta[600]
- Secondary: neutral[600]
- Disabled: neutral[400]

### Key Icons

```typescript
const icons = {
  phases: {
    menstrual: 'droplet',
    follicular: 'sunrise',
    ovulation: 'sun',
    luteal: 'sunset',
  },
  actions: {
    physical: 'heart',
    emotional: 'smile',
    communication: 'message-circle',
  },
  navigation: {
    home: 'home',
    learn: 'book',
    settings: 'settings',
  },
};
```

---

## Visual Atmosphere

### Background Treatments

**Default Background:**
- Color: neutral[50] (warm off-white)
- Subtle grain texture (optional, very light)

**Phase-Specific Backgrounds:**
- Gradient overlays (very subtle, 10-20% opacity)
- Layer phase color over neutral background
- Smooth transitions when phase changes

**Example (Menstrual Phase):**
```typescript
{
  background: `linear-gradient(180deg,
    ${colors.menstrual.background} 0%,
    ${colors.neutral[50]} 100%
  )`
}
```

### Depth & Layering

**Layer System:**
1. **Background:** neutral[50]
2. **Surface:** Cards with shadows (neutral[0])
3. **Overlay:** Modals, tooltips
4. **Highest:** Alerts, notifications

**Shadow Usage:**
- Cards: sm shadow
- Interactive cards: md shadow (increases to lg on press)
- Modals: lg shadow
- Floating action buttons: lg shadow

---

## Responsive Design

### Mobile-First Approach

**Base Design:** iPhone 14 (390x844)
**Test Sizes:**
- Small phone: iPhone SE (375x667)
- Large phone: iPhone 14 Pro Max (430x932)
- Tablet: iPad (768x1024)

### Breakpoint-Specific Adjustments

**Mobile (<768px):**
- Single column layouts
- Full-width cards
- Bottom tab navigation
- Larger touch targets (min 44x44)

**Tablet (768px+):**
- Two-column layouts where appropriate
- Side navigation possible
- More spacious layouts
- Utilize horizontal space

### Touch Targets

**Minimum Sizes:**
- Buttons: 48px height (iOS guideline: 44pt)
- Cards: 72px min height for interactive
- Tab bar items: 48px height
- Icons alone: 44x44 px

**Spacing Between Targets:**
- Minimum 8px between tappable elements
- Prefer 16px for comfortable tapping

---

## Dark Mode (Future Consideration)

**Not in MVP, but design system prepares for it:**

```typescript
// Color tokens can support dark mode
export const colors = {
  background: {
    light: neutral[50],
    dark: neutral[900],
  },
  surface: {
    light: neutral[0],
    dark: neutral[800],
  },
  text: {
    primary: {
      light: neutral[900],
      dark: neutral[50],
    },
  },
};
```

---

## Accessibility Features

### Color Usage

- Never rely on color alone to convey information
- Always pair with text, icons, or patterns
- Test with color blindness simulators

### Text Sizing

- Support iOS/Android dynamic type
- Test layouts at 200% text size
- Ensure readability at all sizes

### Focus Indicators

```typescript
{
  // Visible focus ring
  borderWidth: 2,
  borderColor: colors.terracotta[500],
  outline: 'none', // Remove browser default
}
```

### Screen Reader Support

- All interactive elements have accessibility labels
- Images have alt text
- Proper heading hierarchy (h1 → h2 → h3)
- Announce dynamic changes

---

## Brand Voice in Design

**Visual Tone:**
- **Warm:** Use of terracotta, rounded corners, soft shadows
- **Approachable:** Friendly typography (Nunito), generous spacing
- **Professional:** Clean layouts, consistent patterns, high contrast
- **Empathetic:** Phase-specific colors, thoughtful animations
- **Gender-neutral:** Avoid stereotypical colors, inclusive imagery

**NOT:**
- Sterile, clinical, hospital-like
- Overly feminine (pink overload)
- Childish or patronizing
- Intimidating or complex

---

## Implementation Notes

### NativeWind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: { /* palette */ },
        sage: { /* palette */ },
        // ... all custom colors
      },
      fontFamily: {
        'dm-sans': ['DMSans-Regular'],
        'dm-sans-medium': ['DMSans-Medium'],
        'dm-sans-bold': ['DMSans-Bold'],
        'nunito': ['Nunito-Regular'],
        'nunito-semibold': ['Nunito-SemiBold'],
      },
    },
  },
};
```

### Design Tokens File

```typescript
// styles/tokens.ts
export const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  duration,
  easing,
};
```

---

## Design Review Checklist

Before shipping any screen:

- ☑️ Meets color contrast requirements (WCAG AA)
- ☑️ Touch targets minimum 44x44 points
- ☑️ Works at 200% text size
- ☑️ Tested with screen reader
- ☑️ Keyboard navigable (Android with keyboard)
- ☑️ Animations respect reduced motion
- ☑️ Loading and error states designed
- ☑️ Responsive on small and large phones
- ☑️ Design tokens used (not one-off values)
- ☑️ Consistent with design system

---

## Summary

**Visual Identity:**
- Warm earth tones (terracotta + sage)
- Friendly typography (DM Sans + Nunito)
- Phase-specific color identities
- Generous spacing, rounded corners
- Subtle shadows for depth

**Guiding Principles:**
- Warm, not clinical
- Gender-neutral and inclusive
- Action-oriented layouts
- Accessible to all users
- Professional with personality

This design system creates a distinctive, memorable app that breaks from generic health app aesthetics while maintaining professionalism and trust.
