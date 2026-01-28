# **Product Owner Guide for SaaS Platforms**

_A comprehensive framework for requirements definition, user stories, prioritization, and stakeholder communication_

---

## **Table of Contents**

1. [Core Philosophy & Principles](#core-philosophy--principles)
2. [Working Guide: When to Use What](#working-guide-when-to-use-what)
3. [Requirements Definition](#requirements-definition)
4. [User Stories & Acceptance Criteria](#user-stories--acceptance-criteria)
5. [Backlog Prioritization](#backlog-prioritization)
6. [Stakeholder Communication](#stakeholder-communication)
7. [Quick Reference](#quick-reference)

---

## **Core Philosophy & Principles**

### **Jobs to be Done (JTBD) Framework**

Focus on what users are trying to accomplish, not what features they request.

**Standard Format:**

```
"When [situation], I want to [motivation], so I can [expected outcome]"
```

**Good Examples:**

- "When I receive a notification about an update, I want to take action directly from the notification, so I can respond immediately without navigating through multiple screens"
- "When our team needs to collaborate on a document, we want real-time updates, so we can work efficiently without version conflicts"

**Bad Examples:**

- "We need better notifications" ← This is a solution, not a job
- "Users want a better UI" ← Too vague, no struggling moment
- "When I log in, I want to see a dashboard" ← No clear outcome

**Tips:**

- Start with the struggling moment (When...)
- Focus on the motivation, not the solution (I want to...)
- End with the outcome/progress (so I can...)
- Use user's language, not technical terms
- Don't jump to solutions
- Don't be vague

---

### **37signals Principles**

**Say no by default**

- Default to declining requests
- Only say yes to what truly matters
- Make "no" decisions explicit and reasoned

**Small batch, fixed time, variable scope**

- Decide how much time to spend
- Shape work to fit the time
- Ship something that works, iterate later

**Ship small, iterate fast**

- Good enough is good enough
- Get feedback quickly
- Improve based on real usage

**Let old ideas fade**

- Don't maintain giant backlogs
- If it wasn't important enough to do yet, let it go
- Revisit ideas fresh rather than maintaining forever

**Focus on now, not giant backlogs**

- What are we working on right now?
- What's next (maybe 2-3 items ahead)
- Everything else can wait

---

### **Product Owner Mindset**

- **Customer outcomes over features** - Focus on results, not outputs
- **Be opinionated** - Make recommendations, don't just present options
- **Show trade-offs explicitly** - If we do X, we won't do Y
- **Keep it simple** - What's the 80/20 solution?
- **Question assumptions** - "Do we really need this?"
- **Respect everyone's time** - Be concise in all communication
- **Start with the problem, not the solution** - Understand before building

---

## **Working Guide: When to Use What**

### **📋 Requirements Definition**

**Use this for:**

- New features or capabilities being considered
- Complex problems that need unpacking
- Features that affect multiple user types
- Strategic direction setting

**Skip this for:**

- Small bug fixes
- Simple UI tweaks
- Well-understood technical debt
  → Go straight to User Stories for these

---

### **📝 User Stories & Acceptance Criteria**

**Use this for:**

- Breaking requirements into actionable work
- Bug fixes and small enhancements
- Technical debt (with user value connection)
- Creating testable acceptance criteria

**Skip this for:**

- Undefined problems (do Requirements Definition first)
- Strategic decisions (use Stakeholder Communication)

---

### **🎯 Backlog Prioritization**

**Use this for:**

- Deciding what to work on next
- Between-iteration planning
- Evaluating new requests
- Making trade-off decisions

**Skip this for:**

- Mid-iteration (backlog is frozen)
- Critical bugs (drop work and fix immediately)

---

### **💬 Stakeholder Communication**

**Use this for:**

- Status updates to team/leadership
- Decision requests
- Saying "no" to requests
- Launching features
- Explaining trade-offs

**Skip this for:**

- Quick chat messages
- Internal team coordination (just talk directly)

---

### **Standard Workflow**

```
1. Problem/Idea Emerges
   ↓
2. Requirements Definition
   (Define JTBD, problem, solution, scope)
   ↓
3. Stakeholder Communication
   (Decision Request or Problem Brief)
   ↓
4. Backlog Prioritization
   (When should we do this?)
   ↓
5. Iteration Planning
   (Add to current or next iteration)
   ↓
6. User Stories & Acceptance Criteria
   (Break into actionable work)
   ↓
7. Development
   ↓
8. Stakeholder Communication
   (Status updates, launch announcements)
```

**Shortcuts:**

- **For small items:** Problem → User Story → Development → Done
- **For urgent bugs:** Bug discovered → Fix immediately → Brief communication after
- **For saying "no":** Request → Quick prioritization check → "No" Decision communication

---

## **Requirements Definition**

### **Format**

**Feature/Capability Name:** Clear, descriptive title

**Job to be Done:** "When [situation], I want to [motivation], so I can [expected outcome]"

**The Problem:**

- What struggling moment are we solving?
- What do users do today as a workaround?
- What's the cost of NOT solving this?
- Which user segment(s) need this?

**Desired Outcome:**

- What progress will users make?
- What will be different/better after we build this?

**Proposed Solution:**

- What's the simplest version that solves this?
- Key capabilities required
- How does this integrate with existing features?

**In Scope:**

- Specific capabilities we WILL build
- Boundaries clearly defined

**Out of Scope (37signals style):**

- What we're explicitly NOT building
- Future considerations (if we do this later)
- Why we're saying no to certain things

**Key Considerations:**

- User experience requirements
- Integration/API implications
- Performance considerations
- Security/compliance requirements
- Technical constraints or dependencies

**Success Metrics:**

- How will we measure if this works?
- What does success look like quantitatively?

**Open Questions:**

- What do we still need to figure out?
- What assumptions need validation?

---

### **Key Questions to Address**

When defining requirements, always consider:

1. **What job is the user hiring our product to do?**
2. **What's the simplest version that solves this?** (80/20 rule)
3. **What are we saying NO to?** (scope discipline)
4. **What's the struggling moment we're addressing?**
5. **How will we know this works?**
6. **What's the opportunity cost?** (what won't we do if we do this)

---

### **Working Principles**

**Appetite, not estimates**

- Work with fixed time, variable scope
- Decide how much time to spend upfront
- Shape the solution to fit the time

**Good enough is good enough**

- Ship something that works
- Iterate based on real feedback
- Perfect is the enemy of shipped

**Make trade-offs visible**

- If we do X, we won't do Y
- Be explicit about choices
- Help stakeholders understand costs

---

### **When Defining Requirements**

1. **Start with the customer problem** (JTBD framework)
2. **Question the ask** - "Do we really need this?"
3. **Define what's simplest** that solves the problem
4. **Set clear boundaries** (in scope / out of scope)
5. **Make opinionated recommendations** with clear reasoning
6. **Show trade-offs** explicitly

---

### **Quality Standards**

- **Clarity over completeness**: Better to be clear about 80% than vague about 100%
- **Opinionated**: Have a point of view, make recommendations
- **Customer-backed**: Reference real customer feedback/data when possible
- **Actionable**: Team should know what to build
- **Scope discipline**: Clear about what we're NOT doing

---

## **User Stories & Acceptance Criteria**

### **User Story Format**

**Title:** Brief, outcome-focused description

**Job to be Done:** "When [situation], I want to [motivation], so I can [expected outcome]"

**User Story:** As a [specific user type/role], I want to [action/capability], So that [business value/outcome]

**Context & Why This Matters:**

- What problem does this solve?
- What's the impact of NOT solving this?
- Which user segment needs this most?

**Acceptance Criteria (Given/When/Then format):**

- Given [context/precondition]
- When [action taken]
- Then [observable outcome]

**Out of Scope (37signals style):**

- Explicitly state what we're NOT building
- Keep scope tight and focused

**Success Metrics:**

- How will we measure if this works?

---

### **Example User Story**

**Title:** Quick export of filtered data

**Job to be Done:** "When I need to share specific data with stakeholders, I want to export only the filtered results, so I can provide relevant information without manual cleanup"

**User Story:** As a data analyst, I want to export filtered table data to CSV, So that I can share relevant insights with stakeholders efficiently

**Context & Why This Matters:**

- Analysts currently export all data then manually filter in spreadsheets
- Takes 10-15 minutes per export
- Risk of sharing incorrect data
- Affects daily workflows for 60% of power users

**Acceptance Criteria:**

1. **Given** a user has applied filters to a data table
   **When** they click the "Export" button
   **Then** only the filtered rows are included in the CSV export

2. **Given** no filters are applied
   **When** a user clicks "Export"
   **Then** all data is exported with a confirmation prompt

3. **Given** an export is in progress
   **When** the user navigates away from the page
   **Then** the export continues in background and user receives notification when complete

**Out of Scope:**

- Custom column selection (future consideration)
- Scheduled exports
- Export to formats other than CSV
- Export of more than 10,000 rows (limitation)

**Success Metrics:**

- 80% of exports use filtered data
- Time to export reduced from 15min to <2min
- User satisfaction score >4/5

---

### **When Writing User Stories**

1. Ask clarifying questions about the user's struggling moment
2. Identify the Job to be Done
3. Write story with clear acceptance criteria
4. Define what's explicitly out of scope
5. Suggest success metrics
6. Keep it simple - what's the 80/20 solution?

---

### **Quality Standards**

- **Clarity over completeness**: Be clear and specific
- **Actionable**: Engineers should know what to build
- **Customer-backed**: Reference real user problems
- **Testable**: Acceptance criteria must be verifiable
- **Right-sized**: Not too big, not too small

---

## **Backlog Prioritization**

### **Backlog Philosophy (37signals/Shape Up)**

**No Giant Backlogs**

- Don't maintain long backlogs - they create false commitments
- Let old ideas fade - if it's not important now, let it go
- Focus on the current cycle - what are we working on right now?
- Revisit ideas fresh - better to rediscover than maintain forever

**Appetite Over Estimates**

- Fixed time, variable scope - decide how much time to spend, then shape work to fit
- Small batch, big batch - some work is 1-2 weeks, some is 6 weeks
- Cool-down periods - time between cycles for experimentation and bug fixes

---

### **Prioritization Framework**

#### **1. Jobs-Based Prioritization**

For each potential item, ask:

**Job Importance:**

- What job is the user trying to do?
- How critical is this job to the user's success?
- How frequently do they need to do this job?
- What's the pain/cost of current workarounds?

**Job Satisfaction Gap:**

- How poorly is this job being done today (1-10)?
- What's the gap between current state and desired state?
- Is this a "must-have" job or "nice-to-have"?

**Impact Score:**

```
Impact = Job Importance × Satisfaction Gap × Frequency
```

---

#### **2. Value vs Effort Matrix**

**Customer Value (High/Medium/Low):**

- How many users does this help?
- How much does it improve their outcome?
- Does it unlock a critical job?
- Does it reduce significant friction?

**Effort (Small/Medium/Large):**

- How complex is this to build?
- How much time will it take?
- What dependencies exist?
- What's the risk?

**Prioritize:**

1. **High Value, Small Effort** - Do now
2. **High Value, Medium Effort** - Plan soon
3. **High Value, Large Effort** - Shape carefully, batch
4. **Medium Value, Small Effort** - Consider if capacity exists
5. **Low Value, Any Effort** - Say no

---

#### **3. Strategic Prioritization Questions**

Must answer for each item:

1. **What job does this do?**
   - "When [situation], I want to [motivation], so I can [outcome]"

2. **Who needs this and how many?**
   - Specific user segment(s)
   - Percentage of user base
   - Critical vs. edge case

3. **What's the pain of not having this?**
   - What's broken or frustrating today?
   - Can users still accomplish their goal?
   - What's the workaround cost?

4. **What's the opportunity?**
   - Revenue impact (acquisition, retention, expansion)
   - Competitive advantage
   - Strategic positioning

5. **What are we NOT doing if we do this?**
   - Trade-off clarity
   - Opportunity cost

6. **Can we do this smaller/simpler?**
   - What's the 80/20 version?
   - What's the smallest thing that solves this?

---

### **Prioritization Criteria**

#### **High Priority Signals**

✅ **Solves a frequent, painful job**

- Users struggle with this regularly
- Current workarounds are costly
- High impact on user success

✅ **Strategic value**

- Unlocks new customer segments
- Reduces churn risk
- Competitive differentiation
- Enables key business outcomes

✅ **Foundation for future work**

- Necessary building block
- Unlocks other high-value capabilities

✅ **Simple to execute**

- Clear scope
- Low risk
- Quick to ship

✅ **Customer feedback convergence**

- Multiple customers asking for same job
- Recurring theme in feedback
- Validated demand

---

#### **Low Priority Signals**

❌ **Edge cases**

- Affects very few users
- Infrequent need
- Workarounds exist and aren't costly

❌ **Nice-to-have, not must-have**

- Doesn't solve a critical job
- Users can succeed without it

❌ **Complexity without clear value**

- High effort, unclear impact
- Too many dependencies
- Risky or uncertain

❌ **Feature requests without job context**

- "We need X" without explaining the job
- Solutions looking for problems

❌ **Old ideas that keep resurfacing**

- If it hasn't been important enough yet, let it fade

---

### **Prioritization Process**

**Step 1: Filter Ruthlessly**

- Start with "no" by default
- Only consider items that solve real jobs
- Discard vague requests and edge cases
- Let old, un-actioned items fade

**Step 2: Apply JTBD Lens**

- What job is being hired for?
- How important is this job?
- How poorly satisfied is this job today?
- How many users have this job?

**Step 3: Assess Value vs Effort**

- Map items to value/effort matrix
- Focus on high value first
- Consider effort appetite (1-2 weeks vs 6 weeks)

**Step 4: Strategic Overlay**

- Does this support business goals?
- Does this differentiate us?
- What's the opportunity cost?

**Step 5: Make the Call**

- Be opinionated
- Show your reasoning
- Be clear about what we're NOT doing

---

### **Prioritization Templates**

#### **Quick Prioritization Card**

```
Item: [Name]
Job: "When [situation], I want to [motivation], so I can [outcome]"
User Segment: [Who needs this]
Frequency: [How often]
Current Pain: [What's broken/frustrating] (1-10)
Value: High / Medium / Low
Effort: Small / Medium / Large
Priority: Now / Soon / Later / No
```

---

#### **Detailed Prioritization Assessment**

**Feature/Capability:** [Name]

**Job to be Done:** "When [situation], I want to [motivation], so I can [outcome]"

**Why This Matters:**

- User impact: [Specific benefit]
- Business impact: [Revenue, retention, acquisition]
- Strategic value: [Competitive, positioning]

**Who Needs This:**

- User segment: [Role/type]
- How many: [Percentage or number]
- How critical: [Must-have vs nice-to-have]

**Current State:**

- What users do today: [Workaround]
- Pain level: [1-10 scale]
- Frequency: [Daily/Weekly/Monthly/Rarely]

**Value Assessment:**

- Customer value: [High/Medium/Low]
- Business value: [High/Medium/Low]
- Strategic value: [High/Medium/Low]

**Effort Assessment:**

- Complexity: [Simple/Medium/Complex]
- Time: [1-2 weeks / 4-6 weeks / 8+ weeks]
- Dependencies: [What's needed first]
- Risk: [Low/Medium/High]

**Trade-offs:**

- If we do this, we won't: [Alternative options]
- Opportunity cost: [What else could we do]

**Recommendation:**

- Priority: [Now / Next / Later / No]
- Rationale: [Clear reasoning]
- Scope: [What we will/won't include]

---

### **Saying No Effectively**

#### **When to Say No**

- Low value for effort
- Edge case with small user base
- Complexity doesn't justify benefit
- Not aligned with strategy
- Better alternatives exist
- Can't do it simply enough

#### **How to Say No**

**Template:**

"We're not prioritizing [item] because [clear reason].

Here's why: [Explanation of value vs effort, or strategic reasoning]

Instead, we're focusing on [alternative] which [better outcome].

If the situation changes or we learn something new, we can revisit."

---

### **Working with Kanban**

**Kanban Prioritization:**

- **Keep WIP low** - only pull what team can handle
- **Top of queue matters** - keep top 3-5 items crystal clear
- **Regular replenishment** - review priorities weekly/bi-weekly
- **Flow over backlog** - focus on throughput, not backlog size

**Ready Queue - Only items that are:**

- **Shaped** - clear enough to start
- **Valuable** - high priority
- **Feasible** - can be done now
- **Small enough** - fit in appetite

---

### **Quality Standards**

- **Opinionated**: Clear priority calls, not "everything is important"
- **Justified**: Show reasoning based on jobs and value
- **Realistic**: Honest about effort and trade-offs
- **Customer-backed**: Based on real user jobs and pain
- **Strategic**: Aligned with business goals
- **Actionable**: Team knows what to work on next

---

## **Stakeholder Communication**

### **Communication Principles**

- **Be concise** - respect everyone's time
- **Lead with decisions and why**, not just options
- **Show trade-offs** clearly (if we do X, we won't do Y)
- **Use real customer language**, avoid jargon
- **Focus on outcomes**, not outputs (results, not activities)
- **Present opinionated recommendations**, not just analysis
- **Be clear about what we're NOT doing**

---

### **Communication Templates**

#### **1. Status Updates**

**Format:**

**What We Shipped/Completed:**

- [Specific outcome or capability delivered]
- [Customer impact or value]

**What We Learned:**

- [Key insights from customers, data, or implementation]
- [What surprised us or changed our thinking]

**What We're Doing Next:**

- [Current focus with rationale]
- [Expected outcome]

**What We Decided NOT to Do (and Why):**

- [Explicit decisions to say no]
- [Reasoning based on priorities or customer value]

---

#### **2. Decision Requests**

**Format:**

**Decision Needed:** [Clear, specific decision to be made]

**Why This Matters:**

- Customer impact: [How this affects users]
- Business impact: [Revenue, retention, efficiency, etc.]
- Timing: [Why we need to decide now]

**Context:** [Brief background - what led us here]

**Options We Considered:**

**Option A:** [Description]

- Pros: [Benefits]
- Cons: [Drawbacks]
- Trade-offs: [What we give up]

**Option B:** [Description]

- Pros: [Benefits]
- Cons: [Drawbacks]
- Trade-offs: [What we give up]

**Recommended Approach:** [Clear recommendation]

**Why We Recommend This:**

- [Reason 1 - customer/business focused]
- [Reason 2]
- [What we're accepting/trading off]

**What This Means:**

- We will: [Specific actions]
- We won't: [Explicit scope boundaries]

---

#### **3. Problem/Opportunity Briefs**

**Format:**

**The Opportunity:** [Customer struggling moment or market opportunity]

**Job to be Done:** "When [situation], users want to [motivation], so they can [outcome]"

**Current State:**

- What customers do today (workarounds)
- Why current solutions fall short
- Cost of not solving this

**What Success Looks Like:**

- Customer outcome: [How users benefit]
- Business outcome: [Metrics that improve]

**Proposed Direction:** [High-level approach - not detailed solution yet]

**What We're Saying No To:** [Explicit scope boundaries]

**Next Steps:** [What we need to validate or decide]

---

#### **4. Scope/Priority Trade-offs**

**Format:**

**The Trade-off:** We need to choose between [Option A] and [Option B]

**Context:** [Why we can't do both - time, resources, dependencies]

**Option A: [Name]**

- Customer value: [What users get]
- Effort: [Time/complexity]
- Risk: [What could go wrong]

**Option B: [Name]**

- Customer value: [What users get]
- Effort: [Time/complexity]
- Risk: [What could go wrong]

**Recommendation:** [Clear choice with reasoning]

**What This Means We Won't Do:** [Explicit consequences of this choice]

---

#### **5. Feature Launches/Announcements**

**Format:**

**What We're Launching:** [Feature/capability name]

**The Problem This Solves:** [Customer struggling moment in plain language]

**What's Different Now:**

- For [user type]: [Specific improvement]
- For [user type]: [Specific improvement]

**Why We Built This:** [Customer feedback, data, or strategic reasoning]

**What's Next:**

- What we're watching: [Metrics or feedback]
- Future iterations: [If relevant]

---

#### **6. "No" Decisions**

**Format:**

**What We're Not Doing:** [Feature/request we're declining]

**Why We're Saying No:**

- [Reason 1 - customer/business focused]
- [Reason 2]
- [Trade-off we're making]

**What We're Prioritising Instead:** [Alternative focus and why it's more valuable]

**What This Means:** [Clarity on path forward]

---

### **Stakeholder Types & Considerations**

#### **Internal Team (Engineering, Design, QA)**

**Focus on:** Clear scope, trade-offs, technical constraints
**They need:** Actionable direction, context for decisions
**Avoid:** Changing scope mid-stream, vague requirements

#### **Leadership/Executives**

**Focus on:** Business outcomes, customer impact, strategic alignment
**They need:** Clear decisions, trade-offs, progress
**Avoid:** Too much detail, burying the lead

#### **Customers**

**Focus on:** Value to them, ease of use, timing
**They need:** Clear benefits, how-to guidance
**Avoid:** Technical jargon, feature lists without context

#### **Sales/Marketing**

**Focus on:** Positioning, competitive advantage, customer stories
**They need:** Benefits, use cases, launch timing
**Avoid:** Technical details, internal process

---

### **Communication Best Practices**

#### **Structure**

1. **Lead with the headline** - decision, update, or ask first
2. **Provide context** - just enough background
3. **Show your work** - reasoning and trade-offs
4. **Be clear about next steps** - who does what

#### **Tone**

- **Confident but humble** - have opinions, stay open
- **Direct** - don't bury bad news or difficult trade-offs
- **Customer-focused** - tie everything back to user value
- **Action-oriented** - what are we doing about it?

#### **Length**

- **Status updates:** 1 page max
- **Decision requests:** 1-2 pages max
- **Problem briefs:** 2 pages max
- **Quick updates:** 3-5 bullets

---

### **JTBD in Communication**

Frame problems and solutions using Jobs to be Done:

**Instead of:** "We need automated reports"
**Say:** "When managers need to review team performance, they want automated weekly reports so they can identify issues early without manual data gathering"

**Instead of:** "Users requested a new dashboard"
**Say:** "When users log in, they want to immediately see what needs attention so they can prioritize their day effectively"

---

### **37signals Communication Style**

- **Say no by default** - communicate what we're NOT doing
- **Small, frequent updates** - don't wait for perfect information
- **Show trade-offs explicitly** - no perfect solutions
- **Celebrate shipping** - focus on what's done, not what's next
- **Question assumptions** - "Do we really need this?"

---

### **When Writing Stakeholder Communication**

1. **Start with the so-what** - why does this matter?
2. **Be opinionated** - make a recommendation
3. **Show trade-offs** - be honest about costs
4. **Keep it concise** - one page is often enough
5. **Make it scannable** - clear structure, short paragraphs
6. **End with action** - what happens next?

---

### **Choosing the Right Communication Medium**

| Medium          | Best For                                              | Avoid For                                    |
| --------------- | ----------------------------------------------------- | -------------------------------------------- |
| **Chat/Slack**  | Quick questions, informal updates, daily coordination | Complex decisions, formal records            |
| **Email**       | Formal decisions, external stakeholders, audit trail  | Urgent issues, back-and-forth discussions    |
| **Video Call**  | Complex trade-offs, sensitive topics, misalignment    | Status updates, simple questions             |
| **Written Doc** | Problem briefs, decision records, strategic plans     | Quick updates, urgent issues                 |
| **Demo**        | Feature showcases, iteration reviews, user feedback   | Detailed requirements, technical discussions |

**Default to async** (chat/email/docs) unless synchronous (call/meeting) is truly needed.

---

## **Quick Reference**

### **Key Principles Cheat Sheet**

#### **JTBD (Jobs to be Done)**

- Focus on what users are trying to accomplish
- Start with struggling moments, not solutions
- Use format: "When [situation], I want to [motivation], so I can [outcome]"

#### **37signals Principles**

- Say no by default
- Small batch, fixed time, variable scope
- Ship small, iterate fast
- Good enough is good enough
- Let old ideas fade
- Focus on now, not giant backlogs

#### **Product Owner Mindset**

- Customer outcomes over features
- Be opinionated - make recommendations
- Show trade-offs explicitly
- Keep it simple - what's the 80/20 solution?
- Question assumptions - "Do we really need this?"
- Respect everyone's time - be concise

---

### **When to Use Which Document Section**

- **Need to know which section to use?** → **Working Guide**
- **New feature idea?** → **Requirements Definition** (if complex) or **User Stories** (if simple)
- **Need to communicate?** → **Stakeholder Communication** templates
- **Need to prioritize?** → **Backlog Prioritization** framework
- **Breaking down work?** → **User Stories & Acceptance Criteria**

**\*When in doubt:** Start with the Working Guide\*

---

### **What to Avoid**

**In Requirements:**

- Feature factory thinking (just building what's asked)
- Solution jumping (start with problem, not solution)
- Over-engineering
- Vague boundaries
- Losing sight of customer outcomes

**In User Stories:**

- Stories too large to complete in one iteration
- Vague acceptance criteria
- No connection to user value
- Technical jargon users wouldn't understand

**In Prioritization:**

- Maintaining giant backlogs of "someday" items
- Equal priority for everything
- Prioritizing by who asks loudest
- Ignoring effort/complexity
- Feature factory thinking
- Analysis paralysis

**In Communication:**

- Analysis paralysis (endless options)
- Burying the lead (context before conclusion)
- Jargon and technical language
- Feature lists without context
- Avoiding difficult trade-offs
- Over-communication without substance

---

### **Remember**

This is a **working guide**, not a rigid rulebook. Use judgment. When in doubt:

1. Focus on customer outcomes
2. Keep it simple
3. Show your trade-offs
4. Make a call and move forward

**The goal is to ship value to users, not to have perfect documentation.**

---

## **Quality Standards Across All Activities**

- **Clarity over completeness**: Be clear and specific
- **Opinionated**: Have a point of view, make recommendations
- **Customer-backed**: Reference real user problems and data
- **Actionable**: Teams should know what to do
- **Testable**: Outcomes must be measurable
- **Honest**: Show trade-offs and challenges
- **Concise**: Respect everyone's time
