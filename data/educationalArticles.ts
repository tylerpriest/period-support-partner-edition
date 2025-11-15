import type { PhaseName } from '../types';

export interface Article {
  id: string;
  title: string;
  category: 'basics' | 'science' | 'support' | 'health' | 'communication';
  readTime: number; // minutes
  summary: string;
  content: string; // Markdown format
  relatedPhases?: PhaseName[];
  tags: string[];
}

export const EDUCATIONAL_ARTICLES: Article[] = [
  {
    id: 'article-1',
    title: 'The Four Phases: A Complete Guide',
    category: 'basics',
    readTime: 5,
    summary: 'Learn about the four phases of the menstrual cycle and how they affect mood, energy, and physical wellbeing.',
    relatedPhases: ['menstrual', 'follicular', 'ovulation', 'luteal'],
    tags: ['beginner', 'cycle basics', 'phases'],
    content: `# The Four Phases: A Complete Guide

## Understanding the Cycle

The menstrual cycle is typically 28 days (though 21-35 days is normal) and consists of four distinct phases. Understanding these phases helps you anticipate needs and provide better support.

## Phase 1: Menstrual (Days 1-5)

**What's Happening:**
- The uterine lining sheds (bleeding)
- Hormone levels (estrogen & progesterone) are at their lowest
- Period cramps, bloating, and fatigue are common

**What to Expect:**
- Low energy
- Potential pain or discomfort
- Need for rest and comfort
- Possible mood sensitivity

**How to Support:**
- Heating pads for cramps
- Handle extra chores
- Patience with tiredness
- Comfort foods

## Phase 2: Follicular (Days 1-14)

**What's Happening:**
- Estrogen begins to rise
- Energy and mood typically improve
- Eggs mature in the ovaries

**What to Expect:**
- Increasing energy
- More positive mood
- Better communication
- Open to activities

**How to Support:**
- Plan fun activities
- Encourage new projects
- Quality time together
- Active dates

## Phase 3: Ovulation (Days 13-15)

**What's Happening:**
- Peak estrogen levels
- An egg is released (ovulation)
- Highest energy point of cycle

**What to Expect:**
- Peak energy and confidence
- Strongest communication skills
- Often increased libido
- Social and outgoing

**How to Support:**
- Make the most of high-energy window
- Deep conversations
- Adventures and social activities
- Emotional connection

## Phase 4: Luteal (Days 15-28)

**What's Happening:**
- Progesterone rises, then both hormones drop
- PMS symptoms may appear
- Body prepares for either pregnancy or period

**What to Expect:**
- Energy gradually decreases
- Mood swings possible
- Food cravings common
- Possible irritability or anxiety

**How to Support:**
- Extra patience
- Listen without dismissing
- Stock favorite foods
- Reassurance and affection
- Never attribute feelings to "just PMS"

## Key Takeaway

Every person experiences these phases differently. Use this as a guide, but always ask what they need. The goal is support, not assumptions.
`,
  },

  {
    id: 'article-2',
    title: 'Why Periods Hurt: Understanding Cramps',
    category: 'science',
    readTime: 4,
    summary: 'The science behind menstrual cramps, why they vary in severity, and what actually helps.',
    relatedPhases: ['menstrual'],
    tags: ['pain', 'cramps', 'science'],
    content: `# Why Periods Hurt: Understanding Cramps

## The Science of Menstrual Pain

Period cramps (dysmenorrhea) aren't "just discomfort"—they're real, measurable pain caused by physiological processes.

## What Causes Cramps?

**Prostaglandins:**
- Chemical messengers that trigger uterine contractions
- Higher levels = more intense cramps
- These same chemicals cause inflammation and pain

**The Process:**
- Uterus contracts to shed its lining
- Contractions temporarily cut off oxygen to uterine muscle
- This oxygen deprivation causes pain (similar to a muscle cramp during exercise)

## Pain Levels Vary Wildly

**Mild Cramps:**
- Slight discomfort, manageable with minimal intervention

**Moderate Cramps:**
- Noticeable pain that interferes with activities
- May need pain relief or heat

**Severe Cramps:**
- Debilitating pain
- Can include nausea, vomiting, fainting
- May indicate conditions like endometriosis or PMDD

## What Actually Helps

**Heat:**
- Increases blood flow, reduces muscle tension
- As effective as ibuprofen in studies

**NSAIDs (Ibuprofen/Naproxen):**
- Reduce prostaglandin production
- Most effective when taken BEFORE pain starts

**Movement:**
- Gentle exercise releases endorphins
- Yoga and stretching can help

**Rest:**
- Sleep and reduced stress lower pain perception

## When to Be Concerned

Encourage medical consultation if:
- Pain is getting progressively worse
- Pain interferes with daily life
- Heavy bleeding (soaking through pad/tampon in <2 hours)
- Severe pain that doesn't respond to medication

## How You Can Help

- Believe them when they say it hurts
- Have heating pads/hot water bottles ready
- Offer to pick up medication
- Take over physical tasks
- Never minimize the pain
`,
  },

  {
    id: 'article-3',
    title: 'PMS is Real (And What You Can Do)',
    category: 'health',
    readTime: 6,
    summary: 'Premenstrual syndrome affects 75% of menstruating people. Learn what it is and how to provide support.',
    relatedPhases: ['luteal'],
    tags: ['PMS', 'mood', 'symptoms'],
    content: `# PMS is Real (And What You Can Do)

## What is PMS?

Premenstrual Syndrome (PMS) affects 75% of people who menstruate. It's a collection of physical and emotional symptoms that occur 1-2 weeks before a period.

## Common Symptoms

**Emotional:**
- Mood swings
- Irritability or anger
- Anxiety or tension
- Depression or sadness
- Crying spells
- Difficulty concentrating

**Physical:**
- Bloating
- Breast tenderness
- Headaches
- Fatigue
- Food cravings (especially salt, sugar)
- Sleep changes

## The Science Behind It

**Hormonal Changes:**
- Progesterone and estrogen drop sharply before menstruation
- This affects serotonin (mood regulator) and other neurotransmitters
- Brain chemistry literally changes

**It's Not "Made Up":**
- PMS has measurable hormonal causes
- Brain scans show differences in emotional processing
- It's as real as any other physiological condition

## PMDD: When PMS is Severe

5-8% of people experience Premenstrual Dysphoric Disorder (PMDD):
- Severe mood symptoms that significantly impair life
- May require medical treatment
- Often misdiagnosed as depression or anxiety

## How to Support (Without Being Dismissive)

### ✅ DO:
- Recognize symptoms are real, not exaggerated
- Be patient with mood changes
- Offer practical help (chores, errands)
- Ask what they need
- Validate feelings: "That sounds really hard"
- Give extra grace and understanding

### ❌ DON'T:
- **Never say:** "Are you on your period?" or "Is this just PMS?"
- Don't dismiss emotions as hormone-driven
- Don't act like they're being irrational
- Don't make jokes about PMS
- Don't withdraw or get defensive

## Why "It's Just PMS" is Harmful

- Invalidates real feelings
- Implies emotions aren't legitimate
- Can be a form of gaslighting
- Damages trust

**Remember:** Even if hormones influence emotions, the feelings are still real and valid.

## When to Suggest Professional Help

If PMS symptoms:
- Interfere with work, relationships, or daily life
- Include thoughts of self-harm
- Are getting worse over time
- Aren't improving with lifestyle changes

Treatment options include therapy, lifestyle changes, and sometimes medication.

## The Bottom Line

PMS is a medical reality, not an excuse. Your job is to support, not judge or dismiss.
`,
  },

  {
    id: 'article-4',
    title: 'Communication Guide: What to Say (and Not Say)',
    category: 'communication',
    readTime: 5,
    summary: 'Practical scripts for supportive communication throughout the cycle.',
    tags: ['communication', 'relationships', 'support'],
    content: `# Communication Guide: What to Say (and Not Say)

## The Golden Rule

**Ask, don't assume.** Every person and every cycle is different.

## Supportive Phrases to Use

### General Support:
- "What would help you right now?"
- "I'm here for you. What do you need?"
- "That sounds really difficult."
- "How can I support you today?"

### Validating Emotions:
- "Your feelings make sense."
- "It's okay to feel that way."
- "I hear you, that sounds frustrating."
- "You're not overreacting."

### Acknowledging Pain:
- "I'm sorry you're in pain."
- "That sounds really uncomfortable."
- "Is there anything I can do to make you more comfortable?"

### Offering Specific Help:
- "I'll handle dinner tonight."
- "Want me to pick up anything from the store?"
- "I'm going to take care of [specific task]."
- "Would a heating pad help?"

### During PMS:
- "This week seems tough for you."
- "I notice you're having a hard time—how can I help?"
- "I'm here, whatever you need."

## Phrases to NEVER Use

### ❌ Dismissive:
- "Are you on your period?"
- "Is this just PMS?"
- "You're overreacting."
- "It can't be that bad."
- "Every woman deals with this."

### ❌ Minimizing:
- "It's all in your head."
- "Just take some Midol."
- "You're being too sensitive."
- "Calm down."

### ❌ Self-Centered:
- "What about my needs?"
- "This is affecting me too."
- "When will you feel better?"

### ❌ Making Jokes:
- "Someone's PMSing!"
- "Is it that time of the month?"
- Any period jokes when they're in pain

## How to Navigate Conflict During PMS

**Recognize the Pattern:**
- If arguments happen cyclically, PMS might be a factor
- This doesn't make concerns invalid

**Timing Matters:**
- If possible, postpone non-urgent difficult conversations
- If it can't wait, approach with extra care

**Don't Blame Hormones:**
- Never say "You're just hormonal"
- Address the actual issue, not the timing

**Example:**
❌ "You're only upset because you're PMSing"
✅ "I see you're upset. Let's talk about what's bothering you."

## Reading the Room

**When They Want to Talk:**
- Listen actively
- Don't try to fix unless asked
- Validate feelings

**When They Want Space:**
- Respect the request
- Check in periodically ("I'm here if you need me")
- Don't take it personally

**When They're in Pain:**
- Ask how you can help
- Offer comfort (physical or practical)
- Don't expect them to function normally

## Consent in Communication

**Always Ask:**
- "Do you want advice or just someone to listen?"
- "Would you like me to help or give you space?"
- "Is this a good time to talk about [topic]?"

## The Most Important Thing

Your tone and intent matter more than perfect words. Genuine care and respect go a long way.
`,
  },

  {
    id: 'article-5',
    title: 'Tracking Isn\'t Surveillance: Using This App Ethically',
    category: 'communication',
    readTime: 4,
    summary: 'How to use period tracking apps as a support tool, not a control mechanism.',
    tags: ['ethics', 'consent', 'boundaries'],
    content: `# Tracking Isn't Surveillance: Using This App Ethically

## Why This Matters

Period tracking apps for partners can be an amazing support tool—or a creepy invasion of privacy. The difference is **consent and intent**.

## Ethical Use Principles

### 1. Explicit Consent
- Both of you agreed to use this app
- They understand what you can see
- Consent is ongoing (can be revoked)

### 2. Support, Not Surveillance
- Use this to anticipate needs, not monitor behavior
- Think: "How can I help?" not "Why is she acting this way?"
- It's about their wellbeing, not your convenience

### 3. Respect Boundaries
- Don't use cycle info to:
  - Dismiss emotions ("You're just PMSing")
  - Control or manipulate
  - Pressure intimacy
  - Win arguments
  - Share with others

### 4. Privacy First
- Never share their cycle information with anyone
- No jokes to friends about "that time of month"
- Don't mention tracking in front of others without permission

## Red Flags of Unhealthy Use

🚩 Using PMS as an excuse to dismiss concerns
🚩 Tracking without their knowledge
🚩 Pressure to share more data than they're comfortable with
🚩 Mentioning the app during arguments
🚩 Checking the app obsessively
🚩 Using cycle info to avoid them during "difficult" times

## Green Flags of Healthy Use

✅ Checking to anticipate needs (heating pad ready, favorite snacks)
✅ Giving extra patience during tough phases
✅ Planning thoughtful support
✅ Respecting when they pause or stop sharing
✅ Never mentioning PMS to dismiss feelings

## Having the Consent Conversation

### Initial Setup:
"I found this app that helps partners understand cycle phases better. Would you be comfortable with me using it to support you? You can control what I see and stop anytime."

### Ongoing Check-Ins:
"Is this app still helpful for you, or would you rather I not use it?"

### If They Want to Pause:
"No problem. I'm here to support you however works best for you."

## When to Stop Using This App

- If they ask you to (no questions, no guilt)
- If you find yourself using it to judge or control
- If it's creating tension instead of support
- If you're fixating on cycle info instead of communication

## The Bottom Line

**This app is a tool to help you be a better partner—not a tool to manage or predict their behavior.**

If you're using it to support and show up for them, you're doing it right. If you're using it for any other reason, it's time to reevaluate.

## Healthy Relationship Checklist

Ask yourself:
- Do they know I use this app? ✓
- Can they revoke access easily? ✓
- Am I using it to support, not surveil? ✓
- Do I still ask what they need instead of assuming? ✓
- Would I be comfortable if they tracked something about me? ✓

If you answered yes to all, you're on the right track.
`,
  },

  {
    id: 'article-6',
    title: 'Energy Levels Throughout the Cycle',
    category: 'science',
    readTime: 3,
    summary: 'How energy naturally fluctuates across the cycle and how to plan accordingly.',
    relatedPhases: ['menstrual', 'follicular', 'ovulation', 'luteal'],
    tags: ['energy', 'planning', 'science'],
    content: `# Energy Levels Throughout the Cycle

## The Energy Curve

Energy isn't constant throughout the menstrual cycle—it rises and falls with hormones. Understanding this helps you plan support and set realistic expectations.

## Menstrual Phase (Days 1-5): Low Energy

**Why:**
- Hormone levels at their lowest
- Body is expending energy shedding uterine lining
- Iron levels may drop (from blood loss)
- Disrupted sleep from cramps or discomfort

**What This Looks Like:**
- Fatigue, even after full night's sleep
- Difficulty concentrating
- Preference for low-key activities
- Need for more rest

**How to Support:**
- Don't schedule demanding activities
- Handle extra household tasks
- Encourage rest without guilt
- Meal prep or takeout to reduce cooking burden

## Follicular Phase (Days 6-14): Rising Energy

**Why:**
- Estrogen levels steadily increase
- Mood-boosting effects of rising hormones
- Body is "rebuilding" after menstruation

**What This Looks Like:**
- Increasing motivation
- Better focus and productivity
- More social and outgoing
- Open to trying new things

**How to Support:**
- Plan activities and outings
- Encourage projects they're excited about
- Make the most of this positive window
- Match their energy

## Ovulation (Days 13-15): Peak Energy

**Why:**
- Estrogen peaks (highest point of cycle)
- Testosterone also slightly elevated
- Evolutionarily the "fertile window"

**What This Looks Like:**
- Maximum energy and confidence
- Strongest communication skills
- Most social and active
- Often increased libido

**How to Support:**
- Schedule important events or conversations
- Adventure and active dates
- Deep emotional connection
- Don't waste this high-energy window

## Luteal Phase (Days 16-28): Declining Energy

**Why:**
- Progesterone rises (calming but also sedating)
- Both hormones drop sharply before period
- PMS symptoms may emerge
- Sleep disruption common

**What This Looks Like:**
- Gradual energy decline
- Increased need for downtime
- Less interest in social activities
- Preference for familiar/comfortable over new/exciting

**How to Support:**
- Lower expectations for activity level
- Plan cozy, low-key dates
- Don't pressure for high-energy activities
- Respect need for alone time

## Practical Planning

**High-Energy Window (Follicular + Ovulation):**
- Schedule social events
- Plan trips or adventures
- Important conversations
- Trying new activities

**Low-Energy Window (Late Luteal + Menstrual):**
- Clear the calendar when possible
- Plan rest and comfort
- Postpone stressful tasks
- Simple, easy meals

## Individual Variation

Remember: These are general patterns. Some people:
- Have different energy curves
- Don't experience major fluctuations
- Have irregular cycles

**Always ask** rather than assume based on cycle day.

## The Key Takeaway

Energy fluctuation is normal and biological. Match your expectations and planning to where they are in their cycle, and you'll both have a better time.
`,
  },

  {
    id: 'article-7',
    title: 'When to Worry: Red Flags to Watch For',
    category: 'health',
    readTime: 5,
    summary: 'Signs that period symptoms might indicate a medical condition requiring professional help.',
    tags: ['health', 'medical', 'warning signs'],
    content: `# When to Worry: Red Flags to Watch For

## Most Period Symptoms Are Normal, But...

While periods can be uncomfortable, certain symptoms may indicate underlying health conditions that need medical attention.

## Red Flags: When to Encourage Medical Consultation

### Severe Pain

**Concerning Signs:**
- Pain that doesn't respond to over-the-counter medication
- Pain so severe it causes vomiting or fainting
- Pain that's progressively getting worse over time
- Pain during sex or bowel movements

**Possible Conditions:**
- Endometriosis
- Fibroids
- Ovarian cysts
- Pelvic inflammatory disease

### Heavy Bleeding

**Concerning Signs:**
- Soaking through a pad or tampon every hour for several hours
- Passing blood clots larger than a quarter
- Bleeding that lasts longer than 7 days
- Needing to change products during the night

**Possible Conditions:**
- Fibroids
- Polyps
- Bleeding disorders
- Thyroid problems

### Irregular Cycles

**Concerning Signs:**
- Cycles shorter than 21 days or longer than 35 days
- Skipping periods (without pregnancy)
- Sudden changes in cycle regularity
- Bleeding between periods

**Possible Conditions:**
- PCOS (Polycystic Ovary Syndrome)
- Thyroid disorders
- Hormonal imbalances
- Perimenopause (if age-appropriate)

### Severe PMS/PMDD

**Concerning Signs:**
- Depression or anxiety that interferes with daily life
- Thoughts of self-harm
- Inability to work or function during PMS
- Symptoms that don't improve after period starts

**Possible Conditions:**
- PMDD (Premenstrual Dysphoric Disorder)
- Underlying depression or anxiety disorders
- Hormonal imbalances

### Other Warning Signs

**See a doctor if:**
- Sudden onset of severe symptoms after years of normal periods
- Unexplained weight loss or gain
- Excessive hair growth or hair loss
- Persistent fatigue even outside of period
- Dizziness or shortness of breath (possible anemia)

## How to Bring It Up (Without Sounding Pushy)

### ✅ Supportive Approach:
- "I've noticed your pain seems worse than usual. Have you thought about talking to a doctor?"
- "This seems to be really impacting your life. Would you want to see if there's something that could help?"
- "I'm worried about you. Can we make an appointment together?"

### ❌ What Not to Say:
- "You need to see a doctor" (commanding)
- "This isn't normal" (alarming)
- "There's definitely something wrong" (scary, not your diagnosis to make)

## Offer Practical Support

**Help with:**
- Researching doctors (especially those who listen to women's pain)
- Making the appointment
- Going along for support
- Tracking symptoms to share with doctor
- Following up on treatment plans

## Conditions Worth Knowing About

### Endometriosis
- Tissue similar to uterine lining grows outside uterus
- Affects 1 in 10 women
- Often misdiagnosed or dismissed
- Can cause severe pain and fertility issues

### PMDD
- Severe form of PMS affecting mood
- More than "just being moody"
- Can be life-altering but treatable
- Often dismissed as regular PMS

### PCOS
- Hormonal disorder affecting ovaries
- Can cause irregular periods, weight gain, acne
- Increases risk of diabetes and heart disease
- Manageable with treatment

## The Importance of Advocacy

**Period pain is often dismissed by medical professionals.** Your partner may need you to:
- Validate that their pain/symptoms are real
- Encourage them to get a second opinion if dismissed
- Support them in advocating for themselves
- Believe them when they say something is wrong

## When It's an Emergency

**Call emergency services if:**
- Sudden, severe abdominal pain
- Fainting or inability to stand
- Fever over 102°F with period symptoms
- Soaking through pads with sudden heavy bleeding
- Severe chest pain or difficulty breathing

## The Bottom Line

You're not a doctor, but you can be an advocate. If something seems off, encourage professional evaluation. Early intervention often leads to better outcomes.

**Trust their judgment about their body, and support them in seeking help when needed.**
`,
  },
];

// Helper functions
export function getArticlesByCategory(category: Article['category']): Article[] {
  return EDUCATIONAL_ARTICLES.filter((article) => article.category === category);
}

export function getArticlesForPhase(phase: PhaseName): Article[] {
  return EDUCATIONAL_ARTICLES.filter(
    (article) => article.relatedPhases?.includes(phase)
  );
}

export function getArticleById(id: string): Article | undefined {
  return EDUCATIONAL_ARTICLES.find((article) => article.id === id);
}

export function searchArticles(query: string): Article[] {
  const lowercaseQuery = query.toLowerCase();
  return EDUCATIONAL_ARTICLES.filter(
    (article) =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.summary.toLowerCase().includes(lowercaseQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
