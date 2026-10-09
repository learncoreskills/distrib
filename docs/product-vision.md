# Primary Learning Platform

> **Master every skill, one step at a time.**

## Vision

Build a free, accessible and multilingual learning platform that helps children
progressively master the knowledge and skills expected throughout primary school.

The long-term goal is broader than primary school or mathematics: the platform
should eventually provide structured mastery-based learning across multiple
subjects and potentially multiple age levels.

The first public product will focus exclusively on **primary-school mathematics**.

---

## MVP

The MVP is an exercise-first mathematics mastery platform.

A child should be able to:

1. Start at Level 1.
2. Practice mathematics through short exercises/games.
3. Receive immediate feedback.
4. Build mastery of individual competencies.
5. Progress through Levels 1–5.
6. See their progress visually.
7. Practice approximately 30 minutes per day.
8. Eventually reach **100% mastery of the defined primary-school mathematics curriculum**.

The product should work on:

* Phone
* Tablet
* Desktop/browser

The initial product should be a web application/PWA rather than native mobile
applications.

---

## Core philosophy

### 1. Exercise first

The first version should not be built around lessons.

The primary interaction is:

**Practice → feedback → adapt → practice again → mastery**

Explanations can be introduced later where useful.

### 2. Mastery rather than completion

Completing exercises is not the goal.

The system should estimate whether a child has actually mastered a competency.

A child reaching 100% should mean:

> The child has demonstrated mastery of all competencies defined for the target
> primary-school mathematics curriculum.

100% should not simply mean answering a fixed number of questions correctly once.

### 3. Progressive difficulty

Every competency should have multiple levels of difficulty.

The platform should be able to move a child from basic understanding toward
fluent and reliable performance.

### 4. Short daily practice

The intended usage pattern is approximately:

**30 minutes per day**

The system should automatically prioritize the child's weaknesses and review
previously learned skills.

### 5. Local-first privacy

Free users should be able to use the platform without requiring all progress to
be stored on our servers.

Initial free architecture:

**progress stored locally on the user's device**

Users should be able to:

* export their progress
* backup their progress
* restore/import their progress

Cloud synchronization can become a premium feature later.

### 6. Multiple children

A parent should be able to manage multiple children without paying per child.

The same underlying model should eventually support teachers managing groups of
students.

---

## Look & feel

The product speaks to two very different audiences inside the same app, and must not use one
visual language for both.

### Child-facing UI (the practice loop — grades 1–5, roughly ages 6–11)

Playful, colorful, game-like — never a bare form or a spreadsheet-style quiz.

* Bright, friendly, rounded visual style with a mascot/illustration-driven feel rather than plain
  utilitarian icons.
* Game-like feedback: encouraging animations, optional sound, stars/badges/streaks tied to the
  Level 1–5 progression — celebrate effort and progress, not only correctness.
* Large, forgiving touch targets and short, simple wording, since a 6-year-old and a 10-year-old
  share the same screen.
* Never boring or homework-like: avoid dense text, long instructions, or a plain
  input-box-and-submit-button look. A child should want to keep playing.
* Playful MUST NOT mean stressful or exclusionary: no visible timer/countdown pressure (see
  `docs/features/_archive/002-mental-addition-exercise/spec.md` FR-007), and basic accessibility (contrast,
  readable type, never a color-only signal for correct/incorrect) still applies.

### Parent/teacher-facing UI (dashboards, profile & account management, reports)

Calm, clean, professional — closer to a typical SaaS dashboard than to the child's play area.

* Neutral palette, clear typography, information presented plainly (mastery %, per-competency
  breakdown, session history) — parents and teachers need to trust and quickly scan this, not be
  entertained by it.
* Same brand identity as the child-facing UI (shared logo/name/core color) so both surfaces are
  recognizably one product, but restrained rather than playful in execution.

### Scope note

This section fixes the visual *intent*, not a finished design spec. Concrete design tokens
(palette, type scale, illustration/mascot style, component library) are a UI implementation
detail, to be defined once Phase 1 UI work starts (see `docs/architecture/decisions/`), and each
feature spec's own "UI/visual design" is out of scope by convention (e.g.
`docs/features/_archive/002-mental-addition-exercise/spec.md`) — this is the philosophy that later design work must
be consistent with.

---

## Levels

The user-facing progression consists of:

**Level 1 → Level 2 → Level 3 → Level 4 → Level 5**

Level 5 represents the highest target level for the defined primary-school
mathematics curriculum.

Levels are a user-facing abstraction over the underlying competency/difficulty
system.

The system should not assume that every child progresses linearly through every
exercise.

---

## Multilingual architecture

The application should be designed for multilingual use from the beginning.

The initial content is mathematics.

The UI should be internationalized so that languages can be added without
rewriting the application.

Future subjects may include:

* French
* Science
* History
* Geography
* Reading
* Other core subjects

The product must not be architecturally limited to mathematics.

---

## Business model

The core educational experience should remain free.

Possible premium features include:

* cloud synchronization
* advanced analytics
* extended history
* offline capabilities
* printable worksheets
* advanced parent controls
* advanced teacher functionality
* future AI/OCR features

Advertising may provide an additional revenue source for free users, but the
product should not depend entirely on advertising.

Multiple children should remain free.

---

## Development strategy

### Phase 1 — Foundation

Build:

* project structure
* frontend
* exercise engine
* competency model
* first mental-maths exercise
* scoring

### Phase 2 — Mastery

Build:

* mastery calculation
* progression
* levels
* daily practice
* progress visualization

### Phase 3 — User experience

Build:

* profiles
* multiple children
* local persistence
* export/import
* responsive/PWA experience

### Phase 4 — Content

Expand the mathematics exercise library until the defined mathematics curriculum
is covered.

### Phase 5 — Paper

Add worksheet generation and manual result entry.

### Phase 6 — Teacher sessions

Add simple one-shot classroom sessions.

### Phase 7 — Launch

Release the complete mathematics product.

Only after the mathematics product is working well should additional subjects be
developed.

---

## What is NOT part of the first MVP

Do not build these unless explicitly added to the roadmap:

* French
* Science
* History
* AI tutor/chatbot
* free-form AI teaching
* handwriting OCR
* automatic worksheet scanning
* native iOS app
* native Android app
* complex school administration
* social network
* sophisticated leaderboard
* user-generated exercise marketplace

---

## Definition of MVP success

The MVP is successful when:

1. A child can start at Level 1.
2. The child can practice independently.
3. The system records performance.
4. The system estimates competency mastery.
5. The system recommends useful next practice.
6. The child can progress through Levels 1–5.
7. The parent can see meaningful progress.
8. Multiple children can use the same family account.
9. Progress can be backed up/restored.
10. The mathematics curriculum defined by the project is substantially covered.
11. The application works well on phone, tablet and desktop.
12. Real children use it regularly and demonstrate measurable progress.

---

## Guiding principle

Do not build a giant educational platform before proving the core loop.

The core loop is:

**Exercise → Answer → Feedback → Mastery → Next Exercise**

Make that loop excellent first.

Everything else should support it.

---

## Related documents

* Curriculum detail: `docs/product/CURRICULUM.md`
* Full cross-subject skills framework (long-horizon reference, not MVP scope):
  `docs/product/PRIMARY-SKILLS-FRAMEWORK.md`
* Technical architecture: `docs/architecture/ARCHITECTURE.md`
* Mastery algorithm: `specs/003-mastery-engine/spec.md`
* Exercise plugin contract: `docs/features/_archive/004-exercise-plugin-engine/spec.md`
