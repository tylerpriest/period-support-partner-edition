# Ethics, Privacy & Consent Considerations

## Executive Summary

Building an app where partners track someone else's menstrual cycle raises serious ethical questions about consent, privacy, surveillance, and power dynamics in relationships. Done wrong, this could enable abuse. Done right, it can strengthen relationships and build trust. **Consent and ethics must be foundational,not afterthoughts.**

---

## Core Ethical Principles

### 1. **Affirmative, Informed Consent**

**Requirement:**
- Both partners must explicitly agree to use the app
- Consent must be **informed** (understanding what data is shared)
- Consent must be **ongoing** (can be revoked anytime)
- Consent must be **specific** (what aspects of tracking they agree to)

**Implementation:**
- Dual consent flow during onboarding
- Clear explanation of what partner can see
- Easy revocation mechanism
- Regular consent check-ins (optional reminders)

**Red Flags to Prevent:**
- ❌ Secret tracking without knowledge
- ❌ Pressure or coercion to share data
- ❌ Difficulty revoking access
- ❌ Unclear what's being shared

---

### 2. **Autonomy & Control**

**Principle:** The person being tracked retains full control over their data and the relationship.

**Requirements:**
- **They control what's shared**, not partner
- Can pause sharing during cycles without ending relationship
- Can customize what partner sees (e.g., share phases but not symptoms)
- Can end sharing instantly
- Controls notification settings (partner doesn't get unsolicited updates)

**Implementation:**
- Granular privacy controls
- "Pause sharing" feature
- "Stop sharing" with one tap, no explanation required
- Dashboard showing what partner can currently see

---

### 3. **Non-Surveillance Design**

**Principle:** This is a support tool, not a monitoring system.

**What This Means:**
- Partner doesn't get every detail unless explicitly shared
- No "tracking history" of when partner checked the app
- No detailed symptom logging visible to partner unless wanted
- Partner can't demand or pressure for more access
- Read receipts optional or absent

**Anti-Patterns to Avoid:**
- ❌ "Check-ins" partner must respond to
- ❌ Guilt-inducing notifications if sharing is paused
- ❌ Visibility into partner's app usage
- ❌ Any feature that feels like surveillance

---

### 4. **Do No Harm**

**Principle:** In abusive relationships, information can be weaponized.

**Risk Scenarios:**
- Abusive partner uses cycle info to time abuse during vulnerable phases
- Partner uses PMS to dismiss legitimate concerns ("you're just on your period")
- Cycle data used to control or manipulate
- Information used in custody battles or legal proceedings

**Harm Reduction:**
- Educational content on healthy vs. unhealthy relationship dynamics
- Resources for recognizing abuse
- Quick exit/delete data feature
- Partnership with domestic violence organizations
- **Never suggest "it's just PMS" to dismiss concerns**
- Language that validates emotions regardless of cycle phase

---

### 5. **Data Minimization**

**Principle:** Collect only what's absolutely necessary.

**What We Need:**
- Cycle start dates
- Cycle length
- Optional: symptom patterns (if user wants to share)
- User preferences

**What We DON'T Need:**
- Real names (allow pseudonyms)
- Precise location data
- Contact lists
- Social media connections
- Fertility intentions (unless user wants to share)
- Sexual activity details

**Storage:**
- Prefer local, device-based storage
- If cloud: end-to-end encryption
- No selling or sharing data with third parties (EVER)
- Minimal backend data retention

---

## Privacy Framework

### Data Protection Principles

**1. Transparency**
- Clear privacy policy in plain language
- Exactly what data is collected, why, and how it's used
- Who has access (only the two partners, period)
- How data is stored and secured
- How to delete all data

**2. Security**
- End-to-end encryption for any cloud data
- Secure authentication (biometric, strong passwords)
- No third-party trackers or analytics that collect PII
- Regular security audits
- Incident response plan

**3. Compliance**
- GDPR compliance (even if not EU-based, good standard)
- CCPA compliance (California privacy law)
- HIPAA awareness (even though probably not applicable, good practices)
- Apple Privacy Manifest (iOS requirement 2024+)
- Google Play data safety disclosures

**4. User Rights**
- Right to access data
- Right to delete data
- Right to export data
- Right to revoke consent
- Right to understand how data is used

---

## App Store Requirements for Health Apps

### iOS App Store (Apple)

**Privacy Manifest (Required 2024+):**
- Document all data collection
- Declare third-party SDK data collection
- Explain API access (location, camera, etc.)
- Provide before user downloads app

**Health Data Restrictions:**
- Cannot use health data for advertising
- Cannot share health data with third parties without explicit consent
- Cannot write false data to HealthKit
- Cannot store personal health information in iCloud (without proper encryption)

**Required Disclosures:**
- Privacy policy URL (before download)
- Age rating (likely 12+ for health content)
- Data collection disclosures (what, why, how)

**Review Considerations:**
- May face extra scrutiny as health app
- Clear explanation of partner tracking concept needed
- Demonstrate ethical framework to reviewers

---

### Google Play Store (Android)

**Health Apps Declaration (Required 2024):**
- Attest if app has health-related features
- Complete health declaration form
- Effective August 31, 2024 deadline

**Data Safety Section:**
- What data is collected (cycle dates, symptoms, etc.)
- How data is used (support partner)
- Whether data is shared with third parties (NO)
- Whether data is encrypted
- Whether users can request deletion

**Medical Disclaimers:**
- If app makes health claims, need clear disclaimers
- "This app is not a medical device"
- "Consult healthcare provider for medical concerns"
- Comply with EU Medical Device Regulation if targeting EEA

**Play Store Policy Updates:**
- Increasing scope of medical functionalities policy
- Enhanced disclaimer requirements (effective August 28, 2025)

---

## FDA Considerations (US)

### Wellness vs. Medical Device

**General Wellness (NOT FDA Regulated):**
- Apps for "maintaining or encouraging a healthy lifestyle"
- Not diagnosing, treating, or preventing disease
- Low risk to users

**Our App Positioning:**
- ✅ General wellness and relationship support
- ✅ Educational content about cycles
- ✅ Lifestyle and communication guidance
- ❌ NOT diagnosing conditions
- ❌ NOT treating medical issues
- ❌ NOT prescribing interventions

**Required Disclaimers:**
- "This app is not intended to diagnose, treat, cure, or prevent any disease"
- "This app is for educational and relationship support purposes only"
- "Consult a healthcare provider for medical concerns"

### Avoid FDA Trigger Language:
- ❌ "Diagnose PMDD"
- ❌ "Treat PMS symptoms"
- ❌ "Cure menstrual pain"
- ✅ "Track cycle phases"
- ✅ "Learn about cycle patterns"
- ✅ "Support your partner"

---

## Relationship Diversity & Inclusion

### Gender Inclusivity

**Challenge:** Periods aren't just for cis women.

**Who Menstruates:**
- Cis women
- Trans men
- Non-binary people
- Intersex people

**Who Are Partners:**
- Partners of any gender
- Same-sex relationships
- Non-binary partners
- Polyamorous relationships (multiple partners)

**Design Requirements:**
- Gender-neutral language ("partner" not "boyfriend")
- Customizable pronouns for both users
- No assumptions about relationship structure
- Inclusive imagery and examples
- All gender identities supported
- Relationship type doesn't change functionality

---

### Cultural Sensitivity

**Different Cultural Contexts:**
- Period taboos vary by culture
- Communication norms differ
- Privacy expectations differ
- Relationship structures vary

**Design Approach:**
- Avoid Western-only assumptions
- Localization beyond just language
- Respect for different relationship models
- Awareness of cultural menstrual stigma

---

## Consent Violations to Prevent

### Scenarios That Would Be Harmful:

**1. Secret Tracking**
- Partner downloads app and guesses cycle without telling them
- Uses public signs (mood, symptoms) to track covertly
- **Prevention:** Require mutual authentication or explicit sharing

**2. Coercive Tracking**
- Partner pressures or demands cycle sharing
- "If you loved me, you'd share this"
- Abuse dynamic where refusal has consequences
- **Prevention:** Educational content on healthy consent, resources for abuse victims

**3. Data Weaponization**
- Using PMS to invalidate emotions: "You're just on your period, you're being irrational"
- Planning breakup/fights during vulnerable phase
- Using cycle against them in arguments
- **Prevention:** Content emphasizes that emotions are VALID even if hormonally influenced

**4. Privacy Violations**
- Partner shares data with others without consent
- Screenshots or discussions with friends/family
- Using data in legal proceedings
- **Prevention:** Clear terms of use prohibiting this, easy data deletion

**5. Stalking or Abuse**
- Using cycle info to time abuse
- Monitoring whereabouts during vulnerable phases
- Controlling behavior based on cycle
- **Prevention:** Partner with domestic violence orgs, safety resources in app

---

## Positive Consent Framework

### What Healthy Consent Looks Like:

**Initial Consent:**
- Both partners discuss and agree together
- Person being tracked initiates or enthusiastically agrees
- Clear understanding of what's shared
- No pressure, ultimatums, or conditions

**Ongoing Consent:**
- Regular check-ins ("Is this still working for you?")
- Easy to modify or revoke
- Comfortable saying no or pausing
- Changes respected without pressure

**Boundaries Respected:**
- Partner doesn't push for more data than offered
- Respects pauses or limits
- Uses information supportively, not manipulatively
- Sees tool as privilege, not right

---

## In-App Ethical Guidelines

### Content to Include:

**1. Healthy Relationship Checklist**
- Signs of healthy communication
- Red flags for unhealthy dynamics
- When to seek couples counseling

**2. Consent Refreshers**
- What consent means in this context
- How to talk about boundaries
- Respecting "no" or "pause"

**3. Using Information Responsibly**
- Support, don't surveil
- Validate, don't dismiss
- Anticipate, don't weaponize

**4. Resources**
- National Domestic Violence Hotline
- Relationship counseling resources
- LGBTQ+ support organizations
- Mental health resources

---

## Data Breach & Security Incident Plan

### Prevention:
- End-to-end encryption
- Minimal data collection
- Regular security audits
- Secure authentication

### Response Plan:
- Immediate notification to users if breach occurs
- Clear communication about what data was exposed
- Steps users can take
- Third-party security review
- Transparency report

---

## Post-Roe v. Wade Considerations (US)

### New Privacy Risks:
- Period tracking data subpoenaed as abortion evidence
- Concern about data being used to prosecute
- Fear of government surveillance

### Our Response:
- **Strong encryption** - even we can't access user data
- **Minimal data retention** - delete old cycle data after X months
- **Local-first storage** - data stays on device when possible
- **No sharing with law enforcement without warrant** (and fight warrant)
- **Clear privacy policy** addressing these concerns
- **User control** - easy to delete all data instantly

**Messaging:**
- Acknowledge these concerns directly
- Explain technical protections
- Transparency about limits (e.g., can't protect against device seizure)
- Resources for digital safety

---

## Ethical Review Checklist

Before launching any feature, ask:

- ☑️ Does this require/respect consent?
- ☑️ Could this be used to harm or control?
- ☑️ Does this minimize data collection?
- ☑️ Is this transparent to users?
- ☑️ Can users easily opt out or delete?
- ☑️ Does this empower or surveil?
- ☑️ Is this inclusive of all relationships?
- ☑️ Would I be comfortable if this was used on me?

---

## Legal Disclaimers Required

### In-App Disclaimers:

**Medical Disclaimer:**
> "This app is for educational and relationship support purposes only. It is not intended to diagnose, treat, cure, or prevent any medical condition. Consult a healthcare provider for medical advice."

**Accuracy Disclaimer:**
> "Cycle predictions are estimates based on averages and past patterns. Actual cycles may vary. This app is not suitable as a form of contraception."

**Relationship Disclaimer:**
> "This app is designed to support healthy relationships based on mutual consent. If you are in an unsafe relationship, please seek help. [Domestic violence resources]"

**Data Disclaimer:**
> "We take your privacy seriously. We will never sell your data. See our Privacy Policy for details."

---

## Partnership Opportunities

Consider partnering with:
- **National Domestic Violence Hotline** - Safety resources
- **Planned Parenthood** - Sexual health education
- **RAINN** - Sexual assault/abuse resources
- **The Trevor Project** - LGBTQ+ youth support
- **Endometriosis Foundation** - Medical condition awareness
- **PMDD awareness organizations**

Benefits:
- Credibility and trust
- Proper resources for users in crisis
- Guidance on ethical practices
- Community support

---

## Key Principles Summary

1. **Consent First**: No tracking without explicit, informed, ongoing consent
2. **User Control**: Person being tracked has full control always
3. **Do No Harm**: Design against abuse scenarios
4. **Privacy by Design**: Minimal data, maximum security
5. **Transparency**: Clear about what, why, how
6. **Inclusivity**: All genders, orientations, relationships welcome
7. **Support, Not Surveillance**: Empowerment, not control
8. **Medical Disclaimers**: Not a medical device
9. **Easy Exit**: Delete data anytime, no barriers
10. **Continuous Improvement**: Regular ethical review

---

## Sources

- FTC settlement with fertility tracking app (2021)
- ProPublica: "Federal Patient Privacy Law Does Not Cover Most Period-Tracking Apps"
- Privacy International: "No Body's Business But Mine"
- Post-Roe period tracking app privacy concerns
- FDA General Wellness Guidance
- Apple App Store Health Data Guidelines
- Google Play Health Apps Declaration
- GDPR and CCPA privacy frameworks
- Domestic violence & technology research
- Ethical tracking app best practices
