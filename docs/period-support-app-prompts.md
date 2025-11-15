# Prompt 1: Deep Research & Discovery

I want to build a period support app specifically designed for PARTNERS (not for the person experiencing the period). The goal is to help partners provide better support throughout the menstrual cycle.

Please conduct deep research using WebSearch and save findings to `docs/research/`:

## Research Areas:

1. **Partner Pain Points:**
   - What do partners struggle with most during their loved one's cycle?
   - What questions do partners commonly ask online?
   - What mistakes do partners frequently make?
   - Search for Reddit threads, forums, or articles where partners discuss these challenges

2. **Cycle Education Needs:**
   - What are the key phases partners need to understand? (menstrual, follicular, ovulation, luteal)
   - What happens during each phase (physically, emotionally, hormonally)?
   - What support is most helpful during each phase?
   - What should partners NEVER say or do?

3. **Competitive Analysis:**
   - Search for existing period tracking apps - what features do they have?
   - Are there any apps specifically designed for partners? What do they do well/poorly?
   - What gaps exist in the current market?

4. **User Needs & Prioritization:**
   - What information does a partner need RIGHT NOW vs nice-to-have educational content?
   - How can we make this actionable vs just informational?
   - What would make a partner return to this app daily?

5. **Emotional & Relationship Context:**
   - How can the app promote empathy without being patronizing?
   - What tone is appropriate for this sensitive topic?
   - How do we validate the person's experience while educating the partner?

6. **Ethics & Privacy:**
   - What are ethical concerns about tracking someone else's cycle?
   - Should the app require mutual consent? What about secret usage?
   - How should relationship diversity be handled (all genders, relationship types)?
   - Data privacy and security considerations

7. **Medical Accuracy & Edge Cases:**
   - How to handle irregular cycles, PCOS, endometriosis, perimenopause?
   - When should app recommend seeking medical help?
   - What disclaimers are needed?

## Deliverables:

Create the following files:
- `docs/research/partner-pain-points.md` - Key struggles and mistakes
- `docs/research/cycle-education.md` - Phase-by-phase breakdown
- `docs/research/competitive-analysis.md` - Existing apps and market gaps
- `docs/research/user-needs.md` - Prioritized feature list and user flows
- `docs/research/ethics-privacy.md` - Ethical considerations and guidelines
- `docs/research/summary.md` - Executive summary with:
  - 5-7 core features ranked by importance
  - Content hierarchy recommendations
  - Surprising insights that should shape the app
  - Recommended tech stack

# Prompt 2: Design System & Architecture

Based on the research findings in `docs/research/`, design the app's architecture and visual identity.

## Step 1: Review Research

Read all files in `docs/research/` to inform design decisions.

## Step 2: Technical Architecture Planning

Create `docs/design/technical-architecture.md` covering:

**Tech Stack:**
- Frontend framework (React + Vite recommended for modern development)
- Styling approach (Tailwind CSS or vanilla CSS with design tokens)
- State management (React Context, Zustand, or Redux?)
- Data persistence (localStorage, IndexedDB, or backend?)
- Testing framework (Vitest + React Testing Library)
- Build and deployment strategy

**Project Structure:**
```
period-support-partner-edition/
├── src/
│   ├── components/     # Reusable UI components
│   ├── features/       # Feature-specific components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Helper functions
│   ├── styles/         # Global styles, design tokens
│   ├── types/          # TypeScript types
│   └── data/           # Static data, content
├── public/             # Static assets
└── tests/              # Test files
```

**Component Architecture:**
- What components are needed? (Onboarding, Dashboard, PhaseView, Settings, Education, etc.)
- Multi-component structure with proper separation of concerns
- Information hierarchy and user flow from first visit to daily use
- State management strategy (what data lives where?)

**Data Flow:**
- How does partner input cycle information?
- What data needs to persist across sessions?
- Error handling and edge case strategies

**Accessibility Requirements:**
- WCAG 2.1 AA compliance targets
- Keyboard navigation patterns
- Screen reader support strategy
- Focus management for modals/overlays

## Step 3: Design System Definition

Create `docs/design/design-system.md` covering:

**Typography:**
- Font choices that serve the app's emotional tone and purpose
- Avoid: Generic system fonts, overused AI design fonts (Inter, Roboto, Space Grotesk)
- Consider: Empathetic, trustworthy, warm, approachable
- Define font pairing with rationale
- Type scale for headings, body, captions

**Color Palette:**
- Should each menstrual phase have its own color identity?
- Overall palette that avoids clinical medical app aesthetic
- Avoid: Purple gradients on white, clichéd health app colors
- Consider: Nature-inspired, warm earthy tones, sophisticated neutrals, bold and modern
- Define as CSS custom properties with rationale
- Ensure WCAG AA contrast ratios (4.5:1 for text, 3:1 for large text)

**Visual Atmosphere:**
- Background treatments that create mood and depth
- Gradient layers, patterns, or textures
- Phase-specific atmospheric treatments

**Spacing & Layout:**
- Spacing scale (rem-based system)
- Grid and container strategies
- Responsive breakpoints

**Motion & Animation:**
- High-impact animation moments (onboarding, phase transitions, completed actions)
- Micro-interactions that delight without overwhelming
- Staggered reveal strategy for page loads
- Performance considerations (prefer CSS animations, use will-change)

**Component Patterns:**
- Button styles and states
- Card designs
- Modal/overlay patterns
- Form input patterns
- Navigation patterns

## Step 4: Content Strategy

Create `docs/design/content-strategy.md` covering:

**Information Architecture:**
- "Do this NOW" vs "Learn more" content hierarchy
- Essential vs optional deep-dive educational content
- Scannable communication guidance (do's/don'ts)

**Tone & Voice:**
- Empathetic without being patronizing or clinical
- Actionable, not just informational
- Validates experiences while educating

**Content Sections:**
- Phase-specific action items
- Educational content structure
- Quick reference guides
- Settings and customization options

## Deliverables:

1. `docs/design/technical-architecture.md` - Full tech stack and architecture plan
2. `docs/design/design-system.md` - Complete visual design system
3. `docs/design/content-strategy.md` - Content hierarchy and tone guidelines
4. `docs/design/component-map.md` - Detailed component breakdown with props and state
5. `docs/design/user-flows.md` - Visual description of key user journeys

# Prompt 3: Build the Application

Now build the complete period support partner app based on your research and design specifications.

## Step 1: Project Setup

Initialize the project with the tech stack defined in `docs/design/technical-architecture.md`:

1. **Initialize React + Vite project:**
   ```bash
   npm create vite@latest . -- --template react
   # or react-ts if using TypeScript
   ```

2. **Install dependencies:**
   - Install styling framework (Tailwind or vanilla CSS setup)
   - Install state management library if needed
   - Install any other required packages

3. **Configure project:**
   - Set up ESLint and Prettier
   - Configure path aliases if needed
   - Set up environment variables

4. **Create project structure:**
   - Follow the structure defined in technical-architecture.md
   - Create all necessary directories

## Step 2: Implement Design System

Create the design system foundation files:

1. **`src/styles/design-tokens.css`** (or as CSS-in-JS)
   - Implement the color palette as CSS custom properties
   - Define spacing scale
   - Define typography scale
   - Define animation durations and easings

2. **`src/styles/global.css`**
   - Import design tokens
   - Import Google Fonts (the distinctive fonts you chose)
   - Set global styles and resets
   - Define utility classes if not using Tailwind

3. **Typography setup:**
   - Configure the font families you selected
   - Ensure proper font loading (font-display: swap)

## Step 3: Build Core Components

Create components following the architecture in `docs/design/component-map.md`:

**Layout Components:**
- `src/components/Layout/` - App shell, navigation, containers

**Feature Components (Multi-Component Structure):**
- `src/features/Onboarding/` - Multi-step onboarding flow
  - WelcomeScreen, SetupScreen, ConsentScreen, etc.
- `src/features/Dashboard/` - Main app dashboard
  - PhaseDisplay, ActionCards, QuickStats, etc.
- `src/features/PhaseInfo/` - Detailed phase information
  - PhaseHeader, PhaseGuidance, DosDonts, etc.
- `src/features/Education/` - Educational content
  - ArticleList, ArticleViewer, QuizComponents, etc.
- `src/features/Settings/` - App settings and customization
  - CycleSettings, NotificationSettings, AppPreferences, etc.

**Shared UI Components:**
- `src/components/Button/` - Button variants
- `src/components/Card/` - Card layouts
- `src/components/Modal/` - Modal overlays
- `src/components/Input/` - Form inputs
- Other reusable components as needed

## Step 4: Implement Core Functionality

**State Management:**
- Set up global state (cycle data, settings, user progress)
- Implement state persistence (localStorage/IndexedDB)
- Create custom hooks for common operations

**Cycle Logic:**
- `src/utils/cycleCalculations.ts` - Phase calculation functions
  - Calculate current phase based on cycle day
  - Handle irregular cycles
  - Support customizable phase lengths
- `src/utils/dateHelpers.ts` - Date manipulation utilities

**Data Layer:**
- `src/data/phaseContent.ts` - Phase-specific guidance and information
- `src/data/educationalContent.ts` - Educational articles and resources
- `src/data/dosAndDonts.ts` - Communication guidance

**Features to Implement:**
1. Multi-step onboarding flow with proper routing/state
2. Cycle tracking and phase calculation
3. Phase-specific actionable guidance display
4. Educational content with expandable sections or modals
5. Settings panel with phase duration customization
6. Progress tracking and visualizations
7. Data persistence across sessions
8. Responsive layout (mobile-first)

## Step 5: Implement Accessibility

Following requirements from `docs/design/technical-architecture.md`:

1. **Semantic HTML:**
   - Use proper heading hierarchy
   - Use semantic elements (nav, main, article, etc.)

2. **ARIA attributes:**
   - Add ARIA labels where needed
   - Implement live regions for dynamic content
   - Proper roles for custom components

3. **Keyboard navigation:**
   - Ensure tab order is logical
   - Implement keyboard shortcuts for common actions
   - Focus management for modals and overlays
   - Visible focus indicators

4. **Color contrast:**
   - Verify all text meets WCAG AA standards (4.5:1 ratio)
   - Don't rely on color alone for information

## Step 6: Design Polish

Implement the design details from `docs/design/design-system.md`:

1. **Atmospheric backgrounds:**
   - Layered gradients or patterns
   - Phase-specific visual treatments

2. **Animations:**
   - Page load staggered reveals
   - Phase transition animations
   - Micro-interactions (button hovers, card lifts, etc.)
   - Use CSS animations or Framer Motion

3. **Responsive design:**
   - Mobile-first approach
   - Test at multiple breakpoints
   - Touch-friendly targets (min 44x44px)

4. **Visual personality:**
   - Avoid generic health app aesthetics
   - Implement distinctive design choices
   - Create depth and atmosphere
   - Professional but warm and approachable

## Step 7: Content Implementation

Using tone and content from `docs/design/content-strategy.md`:

1. **Write actual content:**
   - Phase-specific action items
   - Educational articles
   - Do's and don'ts for communication
   - Onboarding copy

2. **Tone consistency:**
   - Empathetic without patronizing
   - Actionable, not just informational
   - Validating while educational

## Step 8: Testing & Error Handling

1. **Error boundaries:**
   - Implement React Error Boundaries
   - Graceful degradation

2. **Edge cases:**
   - No cycle data entered yet
   - Irregular cycle lengths
   - Missing or invalid data

3. **Loading states:**
   - Skeleton screens or loading indicators
   - Optimistic updates where appropriate

4. **Browser testing:**
   - Test in Chrome, Firefox, Safari
   - Test on mobile devices

## Step 9: Build & Deployment Setup

1. **Optimize for production:**
   - Code splitting
   - Lazy loading for routes
   - Image optimization
   - Bundle size analysis

2. **Create README.md:**
   - Installation instructions
   - Development commands
   - Build commands
   - Environment setup

3. **Deployment configuration:**
   - Set up for Vercel/Netlify/GitHub Pages
   - Configure build scripts in package.json

## Deliverables:

A fully functional React application with:
- ✅ Complete multi-component architecture
- ✅ Distinctive, non-generic visual design
- ✅ Full implementation of prioritized features
- ✅ Responsive mobile and desktop layouts
- ✅ WCAG AA accessibility compliance
- ✅ Proper error handling and edge cases
- ✅ Data persistence
- ✅ Production-ready build configuration
- ✅ Professional polish and personality

**Critical Success Factors:**
- Must be ELABORATE with proper component separation (not a single-file app)
- Must NOT look like a generic health/medical app
- Must be fully functional (all interactions work)
- Must be distinctive, memorable, and professionally designed
- Must feel empathetic and supportive in both design and content

# Prompt 4: Testing & Quality Assurance

Thoroughly test the application and fix any issues found.

## Step 1: Manual Testing

Test all user flows and create `docs/testing/manual-test-results.md`:

1. **Onboarding flow:**
   - Test all steps in sequence
   - Test back/forward navigation
   - Test form validation
   - Test edge cases (empty inputs, invalid dates, etc.)

2. **Dashboard functionality:**
   - Verify phase calculation is accurate
   - Test with different cycle lengths
   - Test with different start dates
   - Verify all interactive elements work

3. **Settings:**
   - Test all customization options
   - Verify data persistence after page reload
   - Test reset/clear data functionality

4. **Educational content:**
   - Test all expandable sections
   - Verify modals open/close properly
   - Test content readability at different screen sizes

5. **Responsive design:**
   - Test on mobile (375px, 414px)
   - Test on tablet (768px, 1024px)
   - Test on desktop (1280px, 1920px)
   - Test landscape and portrait orientations

## Step 2: Accessibility Testing

Create `docs/testing/accessibility-report.md`:

1. **Automated testing:**
   - Run axe DevTools or similar
   - Document and fix all issues found

2. **Keyboard navigation:**
   - Navigate entire app using only keyboard
   - Verify focus indicators are visible
   - Test modal focus trapping
   - Document any issues

3. **Screen reader testing:**
   - Test with NVDA (Windows) or VoiceOver (Mac)
   - Verify all content is announced properly
   - Verify ARIA labels are meaningful
   - Document any issues

4. **Color contrast:**
   - Use WebAIM Contrast Checker
   - Verify all text meets WCAG AA
   - Document any issues and fixes

## Step 3: Browser Compatibility

Create `docs/testing/browser-compatibility.md`:

- Test in Chrome (latest)
- Test in Firefox (latest)
- Test in Safari (latest)
- Test in Edge (latest)
- Document any browser-specific issues and fixes

## Step 4: Performance Testing

Create `docs/testing/performance-report.md`:

1. **Lighthouse audit:**
   - Run Lighthouse in Chrome DevTools
   - Aim for 90+ in all categories
   - Document scores and improvements made

2. **Bundle size:**
   - Analyze bundle size with `npm run build`
   - Identify large dependencies
   - Implement code splitting if needed
   - Document final bundle sizes

3. **Loading performance:**
   - Measure First Contentful Paint
   - Measure Time to Interactive
   - Optimize if needed

## Step 5: Code Quality

1. **Code review:**
   - Review all components for best practices
   - Check for any console errors or warnings
   - Remove any commented-out code
   - Ensure consistent code style

2. **Documentation:**
   - Add JSDoc comments to complex functions
   - Update component props documentation
   - Document any tricky logic

## Step 6: User Testing (if possible)

Create `docs/testing/user-feedback.md`:

- Have real users test the app
- Document feedback and pain points
- Prioritize and implement improvements
- Re-test after changes

## Deliverables:

- `docs/testing/manual-test-results.md` - Results from manual testing
- `docs/testing/accessibility-report.md` - Full accessibility audit results
- `docs/testing/browser-compatibility.md` - Cross-browser testing results
- `docs/testing/performance-report.md` - Performance metrics and optimizations
- All identified bugs fixed
- All accessibility issues resolved
- Performance optimized (90+ Lighthouse score)

# Prompt 5: Documentation & Deployment

Create comprehensive documentation and deploy the application.

## Step 1: Update README.md

Create a professional README with:

```markdown
# Period Support Partner Edition

[Brief description of the app and its purpose]

## Features

- [List key features]

## Tech Stack

- [List technologies used]

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

[Step-by-step installation instructions]

### Development

[How to run locally]

### Building

[How to build for production]

## Usage Guide

[Brief guide on how to use the app]

## Accessibility

[Note about WCAG compliance and accessibility features]

## Browser Support

[List supported browsers]

## Contributing

[If accepting contributions]

## License

[License information]

## Acknowledgments

[Credits, research sources, etc.]
```

## Step 2: Create User Documentation

Create `docs/USER_GUIDE.md`:

- How to set up the app for first use
- How to track cycle phases
- How to customize settings
- How to interpret the guidance
- FAQ section
- Troubleshooting common issues

## Step 3: Create Technical Documentation

Create `docs/TECHNICAL.md`:

- Architecture overview
- Component structure explanation
- State management explanation
- Data flow diagrams (text-based)
- Key algorithms (cycle calculation)
- How to extend/modify the app

## Step 4: Deployment Setup

1. **Choose hosting platform:**
   - Vercel (recommended for React)
   - Netlify
   - GitHub Pages
   - Other static hosting

2. **Configure deployment:**
   - Create deployment configuration files
   - Set up environment variables if needed
   - Configure build commands

3. **Deploy:**
   - Push to hosting platform
   - Verify deployment works
   - Test all functionality in production
   - Document deployment URL

4. **Set up custom domain (optional):**
   - Configure DNS
   - Set up SSL
   - Document process

## Step 5: Create CHANGELOG.md

Document the project history:

```markdown
# Changelog

## [1.0.0] - YYYY-MM-DD

### Added
- Initial release
- [List all major features]

### Design
- [Note design decisions]

### Accessibility
- WCAG AA compliant
- [List accessibility features]
```

## Step 6: Future Roadmap

Create `docs/ROADMAP.md`:

- Planned features for future versions
- Known limitations to address
- Community feature requests
- Long-term vision

## Deliverables:

- ✅ Comprehensive README.md
- ✅ User guide (docs/USER_GUIDE.md)
- ✅ Technical documentation (docs/TECHNICAL.md)
- ✅ Deployed application with live URL
- ✅ CHANGELOG.md
- ✅ ROADMAP.md for future development
- ✅ All code committed and pushed to repository
- ✅ GitHub repository ready for sharing/collaboration

---

## Summary: Complete Workflow

1. **Prompt 1**: Research → Create docs/research/ files
2. **Prompt 2**: Design → Create docs/design/ files
3. **Prompt 3**: Build → Create complete React application
4. **Prompt 4**: Test → Create docs/testing/ files, fix issues
5. **Prompt 5**: Document & Deploy → Final docs, live deployment

Each phase builds on the previous, creating a professional, production-ready application with comprehensive documentation.
