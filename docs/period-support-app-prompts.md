# Prompt 1: Deep Research & Discovery

I want to build a period support app specifically designed for PARTNERS (not for the person experiencing the period). The goal is to help partners provide better support throughout the menstrual cycle.

Please conduct deep research on:

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

Please use web search extensively. Give me:
- Summary of key findings
- 5-7 core features ranked by importance
- Content hierarchy recommendations
- Any surprising insights that should shape the app

# Prompt 2: Design System & Architecture

Based on the research, now design the app's architecture and visual identity.

**Step 1: Read the Skills**

Please read these two files first:
- /mnt/skills/examples/web-artifacts-builder/SKILL.md
- /mnt/skills/user/frontend-design/SKILL.md

**Step 2: Design Decision Making**

Based on the research insights and frontend_aesthetics guidelines, make creative decisions about:

**Typography:**
- What fonts would best serve this app's emotional tone and purpose?
- Avoid: Inter, Roboto, Arial, Space Grotesk, system fonts
- Consider: What feels empathetic? Trustworthy? Warm? Approachable?
- Define your font pairing and explain why you chose it

**Color Palette:**
- Should each menstrual phase have its own color identity? If so, what colors represent each phase best?
- What overall palette avoids the clinical medical app aesthetic?
- Avoid: Purple gradients on white backgrounds, clichéd health app colors
- Consider: Nature-inspired? Warm earthy tones? Sophisticated neutrals? Bold and modern?
- Define your palette with CSS variables/tokens and explain the choices

**Visual Atmosphere:**
- How should backgrounds create mood and depth?
- What gradient layers, patterns, or textures fit this app?
- Should each phase have a different atmospheric treatment?

**Motion Strategy:**
- Where are the high-impact animation moments? (onboarding? phase transitions? completed actions?)
- What micro-interactions would delight without overwhelming?
- Plan your staggered reveal strategy for page loads

**Component Architecture:**

Based on research, define:
- What components are needed? (onboarding, dashboard, settings, education, etc.)
- This should be an elaborate, multi-component structure
- How should information hierarchy work?
- What state needs to be tracked?
- What's the user flow from first visit to daily use?

**Content Strategy:**
- How should we structure "do this NOW" vs "learn more" information?
- What educational content is essential vs optional deep-dive?
- How do we make communication guidance (do's/don'ts) easy to scan?

Present this as a complete design brief with:
- Design rationale for each decision
- Multi-component structure breakdown
- State management plan
- Content hierarchy
- Visual mockup description (you can't create images, but describe what it would look like)

# Prompt 3: Build the Artifact

Now build the complete period support partner app as an elaborate, multi-component artifact.

**Step 1: Review the Skills**

Please re-read:
- /mnt/skills/examples/web-artifacts-builder/SKILL.md for technical implementation guidance on building elaborate, multi-component artifacts
- /mnt/skills/user/frontend-design/SKILL.md to ensure you're avoiding generic AI design

**Step 2: Build Multi-Component Structure**

This should be an ELABORATE, MULTI-COMPONENT artifact with proper separation of concerns:

**Component Structure Examples:**
- Onboarding flow (multiple steps/screens)
- Main dashboard with multiple cards/sections
- Settings panel (collapsible or modal)
- Educational content viewer (detailed modal or expandable sections)
- Phase-specific information displays
- Quick action checklists
- Communication guides
- Any other components your research indicated

Follow the web-artifacts-builder skill guidance on:
- How to structure multi-component React apps
- State management across components
- Component composition patterns
- Proper separation and organization

**Implement the Design System:**
- Use the distinctive typography you chose (import from Google Fonts if needed)
- Implement the color palette with your chosen approach (CSS variables or inline styles)
- Create the atmospheric backgrounds with layered gradients/patterns
- Implement smooth animations with staggered reveals on page load
- Add delightful micro-interactions at key moments

**Core Functionality:**

Based on your research, implement the features you prioritized. This should include:
- User onboarding/setup flow (multi-step)
- Current cycle phase tracking and display
- Actionable guidance specific to each phase
- Educational content (structured appropriately with expand/collapse or modals)
- Customization/settings (comprehensive panel)
- Phase duration customization
- Progress tracking and visualizations
- Any other features your research indicated were important

**Technical Requirements:**
- Proper React state management (useState, useEffect as needed)
- Component composition and reusability
- All interactive elements must be fully functional
- Responsive design (mobile and desktop)
- Use Tailwind core utilities OR inline styles (remember: no arbitrary Tailwind values)
- Clean, well-structured code with clear component separation
- Phase calculation logic based on cycle tracking

**Design Requirements:**
- Each element should reflect your design decisions
- Avoid generic AI aesthetics - implement your creative choices
- NO cookie-cutter layouts
- Create genuine atmosphere and depth
- Make it feel professionally designed with personality
- Each component should feel cohesive but distinct

**Tone & Content:**
- Implement the appropriate tone based on your research
- Make it actionable, not just informational
- Be empathetic without being clinical
- Validate experiences while educating

**Critical Success Factors:**
- This must be an ELABORATE, multi-component artifact (not a simple single-component app)
- It must NOT look like a generic health app
- It should feel distinctive and memorable
- Every design choice should be intentional and contextual
- Surprise and delight the user

Build something that feels like it was designed by a professional design studio with a sophisticated multi-component architecture!
