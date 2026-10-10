import{a as e}from"./jsx-runtime-utim-D9d.js";import{d as t}from"./useTranslation-D6_f8EV4.js";import{t as n}from"./contentIndex-6lUpAFZH.js";var r=e(t(),1);function i(e){return e===null?`planned`:/^- \[ \] T/m.test(e)?`in-progress`:`shipped`}function ee(e){return e.startsWith(`architecture-`)?`architecture`:`product`}function te(e){return{id:e.id,title:e.title,category:ee(e.id),contentUrl:e.contentUrl,content:``}}async function ne(e=``){try{let t=await fetch(`${e}/docs/index.json`);if(!t.ok)return{status:`unavailable`};let r=await t.json();return n(r)?{status:`loaded`,entries:r.entries.map(te)}:{status:`unavailable`}}catch{return{status:`unavailable`}}}async function re(e,t=``){try{let n=await fetch(`${t}/docs/${e}`);return n.ok?{status:`loaded`,content:await n.text()}:{status:`unavailable`}}catch{return{status:`unavailable`}}}var a=`# Feature Specification: Competency Model

**Feature Branch**: \`001-competency-model\`

**Created**: 2026-09-13

**Status**: Draft

**Input**: User description: "Define the core data model representing a 'competency' — the atomic unit of knowledge/skill that the mastery system tracks per child. This underlies every other system (exercises, mastery, levels, curriculum)."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Stable target for mastery tracking (Priority: P1)

As the mastery engine, I need a stable competency identifier and a shared difficulty-grade scale
to record and query a child's progress against, so mastery percentages are comparable and
consistent over time and across the exercise plugins that train the same competency.

**Why this priority**: Nothing else in the system (exercise plugins, mastery engine, daily
practice, curriculum content) can be built until competencies exist as an addressable, stable
concept. This is the foundation the whole build order depends on.

**Independent Test**: Can be fully tested by defining a handful of competencies with mock grades,
recording mock mastery signals against them, and confirming the records reference a competency +
grade pair unambiguously with no collisions.

**Acceptance Scenarios**:

1. **Given** a competency \`math.addition.mental\` with 5 grades, **When** a mastery signal is
   recorded against grade 3, **Then** it is stored against that exact competency+grade pair.
2. **Given** a competency with prerequisite competencies listed, **When** the recommendation
   logic reads it, **Then** it can use those prerequisites as a hint without being blocked from
   letting a child attempt the competency directly.

---

### User Story 2 - Subject- and language-agnostic authoring (Priority: P2)

As a curriculum author, I need to express a competency in a subject-agnostic, multilingual way,
so new subjects and languages can be added later without redesigning the model.

**Why this priority**: The product's long-term goal spans multiple subjects and languages; this
must be true from the first competency defined, or the model will need a breaking redesign later.

**Independent Test**: Can be tested by adding a competency for a hypothetical second subject
(e.g. "science") and a second language, and confirming no change to the model/schema is needed.

**Acceptance Scenarios**:

1. **Given** the competency model, **When** a new subject is introduced, **Then** no changes to
   the competency schema are required.
2. **Given** a competency's display name, **When** the UI locale changes, **Then** the name is
   resolved via translated content rather than being hardcoded to the identifier.

---

### Edge Cases

- What happens when two competencies list each other as mutual/circular prerequisites? The model
  must allow this to be detected and rejected at content-authoring time, not silently accepted.
- How does the system handle a competency with only 1 grade versus the typical 5? The model must
  not assume every competency has the same grade count.
- What happens if a competency has zero prerequisites? This is the normal case for foundational
  competencies (e.g. single-digit number sense) and must not require a placeholder value.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST assign every competency a unique, permanent, human-readable identifier
  (slug, e.g. \`math.addition.mental\`) that is never reused for a different meaning once assigned.
- **FR-002**: System MUST store a competency's human-readable name/description as translatable
  content, never as a hardcoded string baked into the identifier or data model.
- **FR-003**: System MUST associate every competency with exactly one subject (e.g.
  "mathematics").
- **FR-004**: System MUST associate every competency with a target Grade (1–5).
- **FR-005**: System MUST allow a competency to declare zero or more prerequisite competencies.
  Prerequisites are a soft recommendation signal only (consumed by
  \`specs/005-daily-practice/spec.md\`) and MUST NEVER hard-block a child from attempting a
  competency directly.
- **FR-006**: System MUST represent a competency's difficulty as a small, fixed integer grade
  scale (1..N, typically N=5), owned by the competency itself. Exercise plugins map their own
  question-generation logic onto this shared scale rather than inventing their own (see
  \`specs/004-exercise-plugin-engine/spec.md\`).
- **FR-007**: System MUST support competencies forming a tree/graph without assuming linear
  progression — a child MAY work on multiple competencies in parallel.
- **FR-008**: System MUST NOT be structurally limited to the mathematics subject.

### Key Entities

- **Competency**: unique id (permanent slug), translatable name/description, subject reference,
  target Grade (1–5), grade count (1..N), zero or more prerequisite competency ids.
- **Subject**: id, translatable name — the grouping a competency belongs to (mathematics is the
  first and only subject built).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A new competency can be added to the curriculum content without any code change to
  the mastery engine or exercise plugin engine.
- **SC-002**: Every competency in the mathematics curriculum defined so far can be expressed using
  this model with no schema change.
- **SC-003**: Prerequisite data can be read by recommendation logic with zero observed cases of it
  blocking direct access to a competency.

## Assumptions

- Competency ID stability across curriculum versions or national curricula is not a real
  constraint yet — only one subject and one curriculum currently exist. Revisit ID
  versioning only if/when a second curriculum or national variant is introduced.
- Prerequisites are informational/recommendation input only; see Constitution Principle III
  (Progressive, Non-Linear Difficulty) in \`.specify/memory/constitution.md\`.

## Execution Architecture

This spec defines the model contract, independent of implementation language. Per
\`docs/architecture/decisions/0006-client-only-architecture.md\`, it is implemented as an
independent TypeScript package (\`packages/core/competency-model\`) imported directly by the
React app — no network call, no separate backend. Competency names/descriptions are exposed as
translation keys, resolved client-side by react-i18next (ADR-0007).

## Out of Scope

- The actual mathematics competency tree content (tracked in \`docs/product/CURRICULUM.md\`).
- Mastery calculation logic (see \`specs/003-mastery-engine/spec.md\`).

## Related

- \`docs/product/CURRICULUM.md\`
- \`specs/003-mastery-engine/spec.md\`
- \`specs/004-exercise-plugin-engine/spec.md\`
`,o=`# Feature Specification: Mastery Engine

**Feature Branch**: \`003-mastery-engine\`

**Created**: 2026-09-13

**Status**: Draft

**Input**: User description: "Defines how the system estimates whether a child has mastered a competency, producing the per-competency mastery percentages shown to parents/children."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - See a trustworthy mastery percentage (Priority: P1)

As a parent or child, I want to see a mastery percentage per competency that reflects sustained
performance rather than a lucky streak, so I can trust it as a real measure of progress.

**Why this priority**: Per Constitution Principle II (Mastery Over Completion), this is the
signal the entire product's value proposition depends on. Without it, "100% mastery" is
meaningless.

**Independent Test**: Can be fully tested by feeding a synthetic sequence of mastery signals for
one competency into the formula and asserting the resulting percentage matches the expected
calculation.

**Acceptance Scenarios**:

1. **Given** fewer than 5 recorded attempts at a grade, **When** mastery is computed, **Then** that
   grade reports "not started" rather than a numeric percentage.
2. **Given** 10 attempts at a grade with 9 correct, **When** mastery is computed, **Then** that
   grade reports 90% and is flagged as "mastered" (per the ≥90% threshold).
3. **Given** a competency with 5 grades where only 2 have been attempted, **When** overall
   competency mastery is computed, **Then** the 3 unattempted grades count as 0%, not as excluded
   from the average.

---

### User Story 2 - Prioritize weaknesses for practice (Priority: P2)

As the daily-practice feature, I need to identify which competencies have the lowest mastery, so
I can recommend what a child should practice next.

**Why this priority**: Feeds \`specs/005-daily-practice/spec.md\`; secondary to first having a
mastery number to prioritize by (User Story 1).

**Independent Test**: Can be tested by computing mastery for several mock competencies and
confirming the lowest-mastery ones are correctly identifiable by sorting.

**Acceptance Scenarios**:

1. **Given** mastery percentages for multiple competencies, **When** the weakest are requested,
   **Then** they are returned ordered from lowest to highest mastery.

---

### Edge Cases

- What happens when a child has zero recorded attempts for a competency at all? Every grade reports
  "not started" and overall competency mastery is 0%, not undefined/null.
- What happens when more than 10 attempts exist at a grade? Only the most recent 10 are used in the
  v1 formula — older attempts do not keep influencing the number forever.
- What happens if the mastery calculation is run twice on the same signal log? It MUST return the
  same result both times (determinism, per Constitution Principle VI).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST maintain a mastery value (0–100%) per competency per child.
- **FR-002**: Mastery MUST reflect sustained, reliable performance — not a single correct streak
  or one-time pass.
- **FR-003**: System MUST be able to rank a child's competencies by mastery to surface weaknesses,
  consumed by \`specs/005-daily-practice/spec.md\`.
- **FR-004**: Mastery calculation inputs MUST come from the append-only mastery-signal log defined
  in \`specs/004-exercise-plugin-engine/spec.md\`
  (\`{ competencyId, grade, correct, timeMs, timestamp, questionId }\`), never from a mutable
  aggregate that can't be recomputed from history.
- **FR-005**: Mastery calculation MUST be deterministic and covered by tests, per the
  Determinism & Testability principle.
- **FR-006**: System MUST expose mastery data in a shape suitable for a radar/spider-chart
  visualization (one value per competency); the chart itself is a UI concern, not part of this
  spec.
- **FR-007** *(v1 formula — explicit placeholder, see Assumptions)*: Per grade, mastery MUST be
  computed as accuracy over the last \`min(10, attempts)\` answers at that grade, with fewer than 5
  attempts reporting "not started" rather than a percentage.
- **FR-008** *(v1 formula)*: Per competency, mastery MUST be the average of its per-grade
  percentages from FR-007, treating an unattempted grade as 0% — so reaching 100% requires
  mastering every grade, not just the easiest one.
- **FR-009** *(v1 formula)*: A grade MUST be considered "mastered" at ≥90% accuracy over its last
  10 attempts.
- **FR-010** *(v1 formula)*: The v1 formula MUST NOT apply any decay/forgetting to a stored
  percentage over time — it only changes in response to new attempts.

### Key Entities

- **MasterySignal**: as defined in \`specs/004-exercise-plugin-engine/spec.md\` — the only input to
  this engine.
- **GradeMastery**: competencyId, grade, percentage or "not started", attempt count considered.
- **CompetencyMastery**: competencyId, overall percentage (average of its GradeMastery values).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Given the same signal log, the mastery calculation returns identical results on
  every run (100% reproducibility in tests).
- **SC-002**: A child's weakest competencies can be correctly ranked and retrieved for the daily
  practice feature.
- **SC-003**: Mastery for a competency reaches 100% only when every one of its grades independently
  meets the ≥90%-over-last-10 threshold.

## Assumptions

- **v1 formula is an explicit placeholder.** The real algorithm — including any decay/forgetting
  model, the rigor of required sample size, and speed/consistency weighting — is deferred until
  real Phase 1 exercise data exists to validate against. FR-007 through FR-010 exist so the
  product's core loop and mastery visualization are demonstrably working in Phase 1, and are
  expected to be replaced without any change to the underlying signal log (FR-004) or its
  consumers.
- Speed and consistency are captured in the signal log now specifically so the real algorithm can
  use them later without a data migration.

## Execution Architecture

Per \`docs/architecture/decisions/0006-client-only-architecture.md\`, this calculation runs
in-browser as \`packages/core/mastery-engine\`, called directly by the React app — no network
round-trip. FR-004's "append-only log" lives entirely on the child's device (browser storage);
there is no server to send it to. This is also why multi-profile support (spec 006) requires no
special handling here beyond storing each profile's log under its own local namespace — there was
never a "server" concept of a child to worry about.

## Related

- \`specs/001-competency-model/spec.md\`
- \`specs/004-exercise-plugin-engine/spec.md\`
- \`specs/005-daily-practice/spec.md\`
`,s=`# Feature Specification: Daily Practice

**Feature Branch**: \`005-daily-practice\`

**Created**: 2026-09-13

**Status**: Draft (Phase 2 — not required before the Phase 1 build order: 001 → 004 → 002 → 003)

**Input**: User description: "Defines the 'Today's Practice' experience — a ~30-minute daily session that prioritizes a child's weaknesses and reviews previously learned skills."

## Clarifications

### Session 2026-09-14

- Q: Should this feature actually allocate practice time across the 5 difficulty grades of the one existing competency (math.addition.mental), targeting the weakest grades, or should it stay a stub/no-op until a second exercise plugin exists? → A: Real grade-level allocation now — keep 50% of the day's questions at the child's current grade; the remaining 50% is redistributed to the next grade, the previous grade, or split between them depending on the child's current-grade score.
- Q: For the other 50% of the session, what score thresholds decide whether it goes to the next grade, the previous grade, or is split? → A: Reuse the mastery-engine's own ≥90% "mastered" line from \`specs/003-mastery-engine/spec.md\`: ≥90% on the current grade → remaining 50% goes to the next grade; below the "not started" floor (<5 attempts) or otherwise not mastered → remaining 50% goes to the previous grade; in between → split evenly between next and previous.
- Q: Since each addition session is a fixed 10-question, single-grade block (per \`specs/002-mental-addition-exercise/spec.md\` FR-003), how should the ~30-minute daily target be expressed for generation purposes? → A: One daily session of 50 questions total, built as five 10-question blocks (reusing the existing single-grade session unit unchanged) — not raw minutes and not a continuous mixed-grade run. ~30 minutes is a derived estimate (~36 sec/question), not the generation target itself.
- Q: Should a child's daily session plan be generated fresh every time the app is opened that day, or generated once and persisted/reused for the rest of that calendar day? → A: Regenerate on every app load, deterministically computed from current mastery state and keyed by the local calendar date. No new persisted state is introduced by this feature.
- Q: With the 50/50 current-grade/swing-grade structure, what happens at the grade floor (Grade 1, no previous grade) and ceiling (Grade 5, no next grade)? → A: At the floor, the swing 50% stays at the current grade (Grade 1) instead of dropping below it. At the ceiling, the swing 50% falls back to the previous grade (review) instead of progressing, since there is no Grade 6.

### Session 2026-09-14 (follow-up, post-plan)

- Q: Should a parent/user be able to override the grade the daily session starts from, instead of it always being derived purely from mastery data? → A: Yes — the default starting grade is Grade 1 (for a child with no mastery data), and the grade still moves up/down day-to-day based on mastery (too easy → next grade, too hard → previous grade, per FR-002), but a parent/user MUST be able to force the grade a given day's session is built around instead of relying on the derived one.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Get a daily session that targets weaknesses (Priority: P1)

As a child, I want to open the app and be given a practice plan for today that focuses on what I'm
weakest at, so my ~30 minutes of practice is well spent.

**Why this priority**: This is the feature's entire reason to exist — without weakness
prioritization it is just a random exercise picker.

**Independent Test**: Can be tested by seeding mock per-grade mastery data at various accuracy
levels and confirming the generated session's 5 blocks land on the expected grades.

**Acceptance Scenarios**:

1. **Given** a child's current recommended grade has mastery ≥90% (per
   \`specs/003-mastery-engine/spec.md\`), **When** a daily session is generated, **Then** exactly 3
   of its 5 blocks are at the current grade and the other 2 are at the next grade.
2. **Given** a child's current recommended grade has fewer than 5 recorded attempts, **When** a
   daily session is generated, **Then** exactly 3 of its 5 blocks are at the current grade and the
   other 2 are at the previous grade.
3. **Given** a daily session, **When** it is fully generated, **Then** it always consists of
   exactly 5 blocks of 10 questions (50 questions total).

---

### User Story 2 - Review previously learned skills (Priority: P2)

As a child, I want part of my daily session to review things I already learned, so I don't forget
them over time.

**Why this priority**: Prevents skill decay between mastery events; secondary to the primary
weakness-targeting behavior.

**Independent Test**: Can be tested by confirming a generated session, whenever a previous grade
exists (current grade > 1), always includes at least 1 previous-grade block if the current grade
isn't mastered, rising to at least 2 when the current grade is not-started or is the mastered
Grade 5 ceiling.

**Acceptance Scenarios**:

1. **Given** a child whose current grade is greater than 1 and is either not yet attempted at all
   (fewer than 5 attempts) or is Grade 5 and already mastered (no next grade available), **When** a
   daily session is generated, **Then** it includes at least 2 blocks (20 questions) at the
   previous grade, covering content the child has already progressed past.
2. **Given** a child whose current grade is greater than 1 and has been attempted but isn't yet
   mastered (some accuracy below 90%), **When** a daily session is generated, **Then** it includes
   at least 1 block (10 questions) at the previous grade, alongside 1 block at the next grade —
   mixing review with a stretch toward the next grade rather than pure review.

---

### User Story 3 - Parent overrides the starting grade (Priority: P3)

As a parent, I want to set my child's starting grade myself when I already know their level, so
the first day's session doesn't have to start from the system's default (Grade 1) or wait for
mastery data to build up.

**Why this priority**: A convenience/calibration override on top of the automatic grade
adaptation in User Story 1 — useful, but the automatic behavior already produces a working
session without it.

**Independent Test**: Can be tested by generating a daily session with a supplied grade override
and confirming that grade (not the mastery-derived one) is used as the current grade.

**Acceptance Scenarios**:

1. **Given** a parent supplies a starting grade for a child, **When** a daily session is
   generated, **Then** the supplied grade is used as the current grade — the 3-current/2-swing
   allocation in FR-002 runs around it exactly as it would around a derived grade, including the
   same floor/ceiling handling.
2. **Given** no override is supplied, **When** a daily session is generated, **Then** the current
   grade is derived from mastery data as usual (starting at Grade 1 by default for a child with no
   mastery data).

---

### Edge Cases

- What happens when a child has no mastery data yet (first-ever session)? Treated as below the
  "not started" floor: the session is still 5 blocks of 10 questions, all at Grade 1 (the
  foundational default grade), not an empty plan.
- What happens when only one exercise plugin exists (as in Phase 1, addition only)? The daily
  session degrades to that one competency's grades, per FR-002, rather than failing to generate.
- What happens at the Grade 1 floor (no previous grade)? The swing 50% stays at the current grade
  (Grade 1) instead of dropping below it.
- What happens at the Grade 5 ceiling when already mastered (no next grade)? The swing 50% falls
  back to the previous grade (review) instead of progressing, since there is no Grade 6.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST generate a daily session of exactly 50 questions, structured as five
  10-question blocks, each block reusing the existing single-grade session unit defined in
  \`specs/002-mental-addition-exercise/spec.md\` (FR-003) unchanged. ~30 minutes is a derived
  estimate of this fixed structure (at an assumed ~36 sec/question), not a separate generation
  target.
- **FR-002**: System MUST allocate the 5 blocks across grades as follows, using the child's
  per-grade mastery from \`specs/003-mastery-engine/spec.md\`:
  - Exactly 3 of the 5 blocks (60%, satisfying the "~50%" target as a floor) MUST be at the
    child's current recommended grade.
  - The remaining 2 blocks MUST be allocated by that grade's mastery score: ≥90% ("mastered", per
    003's threshold) → both remaining blocks at the next grade; below the "not started" floor (<5
    attempts) → both remaining blocks at the previous grade; attempted but not yet mastered (some
    accuracy below 90%) → split the remaining blocks evenly, 1 at the next grade and 1 at the
    previous grade.
  - At the Grade 1 floor, remaining blocks stay at the current grade instead of going below Grade 1.
    At the Grade 5 ceiling when mastered, remaining blocks fall back to the previous grade instead
    of progressing.
- **FR-003**: The previous-grade blocks produced by FR-002 (triggered whenever the current grade
  isn't ≥90% mastered, or capped at Grade 5) MUST serve as the review component: they cover grade
  content the child has already progressed past.
- **FR-004**: Selection logic MUST use the simple, explicit rule in FR-002 for MVP, with a clear
  path to becoming adaptive later — this spec does not block MVP on full adaptivity.
- **FR-005**: The daily session plan MUST be regenerated deterministically from current mastery
  state on every app load, keyed by the local calendar date — it MUST NOT be persisted as separate
  state.
- **FR-006**: System MUST accept an optional parent/user-supplied grade override for a given day's
  session. When supplied, it MUST be used as the current grade in place of the mastery-derived one
  in FR-002 — the same 3-current/2-swing allocation and floor/ceiling handling then run around it
  unchanged. When absent, the current grade continues to be derived from mastery data as in FR-002
  (defaulting to Grade 1 for a child with no mastery data yet, per the existing Edge Cases).

### Key Entities

- **DailySession**: exactly 5 blocks of (competencyId, grade, 10 questions) — 50 questions total —
  generated fresh per child on each app load for the current local calendar date; not persisted.
  Optionally built around a caller-supplied grade override (FR-006) instead of a derived one.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A generated daily session always consists of exactly 5 ten-question blocks (50
  questions total, ≈30 minutes at an assumed ~36 sec/question) — a fixed count, not a range.
- **SC-002**: Whenever a previous grade exists (current grade > 1), a child's daily session includes
  at least 1 block (10 questions) at the previous grade if the current grade has been attempted but
  isn't yet mastered (some accuracy below 90%) — rising to at least 2 blocks (20 questions) if the
  current grade is not-started (<5 attempts) or is the already-mastered Grade 5 ceiling. At the
  Grade 1 floor, no previous grade exists; the session consists entirely of Grade 1 blocks instead
  (see Edge Cases), and this criterion doesn't apply.

## Assumptions

- With only one exercise plugin/competency (\`math.addition.mental\`) in V1, weakness-prioritization
  operates at the grade level within that competency (per FR-002) rather than across competencies;
  extending to across-competency allocation is deferred until a 2nd plugin exists.
- "Approximately 30 minutes" is estimated at ~36 seconds/question (50 questions ≈ 30 min); no
  visible timer is shown to the child, consistent with \`specs/002-mental-addition-exercise/spec.md\`.
- "Current recommended grade" is the concept referenced (but not computed) by
  \`specs/002-mental-addition-exercise/spec.md\` (FR-003) — no other spec or existing code actually
  computes it yet, so this spec defines the derivation (lowest non-mastered grade, capped at the
  highest) for this feature's own internal use. This doesn't amend 002's spec text; a future
  feature reusing "current recommended grade" elsewhere may reuse this definition or supersede it.
- Remembering a parent's grade override across days/app loads (vs. supplying it fresh each call)
  is a caller/storage concern, not this feature's — FR-006 only defines that an override, if
  supplied, takes effect for that call; where/whether it's persisted is out of scope here (see
  also FR-005: this feature introduces no persisted state of its own).

## Out of Scope

- The final adaptive algorithm (V2+).
- UI for displaying the daily plan.

## Related

- \`specs/003-mastery-engine/spec.md\`
- \`specs/004-exercise-plugin-engine/spec.md\`
`,c=`# Feature Specification: Printable Worksheets

**Feature Branch**: \`007-printable-worksheets\`

**Created**: 2026-09-13

**Status**: Draft (Phase 5 — P3 backlog, not scheduled; no tasks yet)

**Input**: User description: "Allows generating a paper worksheet from an exercise, with manual result entry feeding back into mastery."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Generate and score a paper worksheet (Priority: P1)

As a parent or teacher, I want to print a worksheet generated from an exercise plugin, have the
child complete it on paper, and enter the results afterward, so paper-based practice still
contributes to the child's mastery.

**Why this priority**: This is the entire feature — without it there is no printable-worksheet
capability at all.

**Independent Test**: Can be fully tested by generating a worksheet from the mental-addition
plugin, manually entering a set of right/wrong answers, and confirming the resulting mastery
signals match what a digital session with the same answers would have produced.

**Acceptance Scenarios**:

1. **Given** an exercise plugin's question generation logic, **When** a worksheet is requested,
   **Then** a printable set of questions is produced without requiring OCR or scanning.
2. **Given** a printed worksheet and a set of child-written answers, **When** a
   parent/teacher enters the results, **Then** each answer is validated and produces a mastery
   signal identical in shape to a digital exercise result.

---

### Edge Cases

- What happens when a worksheet's answers are only partially entered? Signals must be recorded
  for the questions that were entered; the missing ones must not be recorded as incorrect by
  default.
- What happens when a plugin does not implement a printable format? Worksheet generation must be
  refused for that plugin rather than producing a malformed sheet, since the printable format is
  optional per \`specs/004-exercise-plugin-engine/spec.md\`.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST generate a printable worksheet from an exercise plugin's question
  generation logic, per the optional printable format in
  \`specs/004-exercise-plugin-engine/spec.md\`.
- **FR-002**: System MUST support manual entry of results by a parent/teacher after the worksheet
  is completed on paper.
- **FR-003**: System MUST feed manually entered results into the mastery engine using the same
  mastery-signal shape as digital exercise results (see \`specs/004-exercise-plugin-engine/spec.md\`
  and \`specs/003-mastery-engine/spec.md\`).
- **FR-004**: System MUST NOT require OCR, handwriting recognition, or automatic photo-based
  scanning in this (first) implementation.

### Key Entities

- **Worksheet**: a printable rendering of N questions generated by one plugin at one tier.
- **WorksheetResult**: manually entered per-question correctness, converted into the standard
  MasterySignal shape on entry.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A worksheet generated from any plugin that implements the optional printable format
  can be printed and manually scored with zero missing questions.
- **SC-002**: Mastery signals produced from manually entered worksheet results are
  indistinguishable in shape/effect from signals produced by a digital session.

## Assumptions

- A future version may support Photo → OCR → answers → automatic correction → mastery, but that
  is explicitly not required for this first implementation.

## Out of Scope (first implementation)

- OCR / handwriting recognition.
- Automatic photo-based scanning and correction.

## Related

- \`specs/004-exercise-plugin-engine/spec.md\`
- \`specs/003-mastery-engine/spec.md\`
- \`specs/008-teacher-mode/spec.md\`
`,l=`# Feature Specification: Teacher Mode (One-Shot Classroom Sessions)

**Feature Branch**: \`008-teacher-mode\`

**Created**: 2026-09-13

**Status**: Draft (Phase 6 — P3 backlog, not scheduled; no tasks yet)

**Input**: User description: "Supports a teacher generating and printing the same exercise for a whole class, then entering or scanning results for a class report."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Run a one-shot classroom exercise session (Priority: P1)

As a teacher, I want to generate the same exercise for my whole class, print worksheets for every
child, and get a simple class report once results are in, without setting up a persistent
classroom/roster system.

**Why this priority**: This is the entire feature scope — a lightweight, one-shot session, not
ongoing classroom management.

**Independent Test**: Can be fully tested by creating a session for N mock students, generating N
worksheets from one plugin, entering results for each, and confirming a class report is produced.

**Acceptance Scenarios**:

1. **Given** a teacher creates a session for N children, **When** worksheets are generated,
   **Then** N printable worksheets are produced from the same exercise plugin/tier (via
   \`specs/007-printable-worksheets/spec.md\`).
2. **Given** results entered for each child in the session, **When** the session is finalized,
   **Then** a class report summarizing per-child and aggregate results is produced.

---

### Edge Cases

- What happens if results are entered for only some of the N children? The class report must
  reflect only the children with entered results, clearly distinguishing them from children with
  no results yet, rather than treating missing results as zero/incorrect.
- What happens after the session ends — is any roster retained? No persistent
  classroom/roster system is in scope; the session and its children exist only for that one-shot
  use (see Out of Scope).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST let a teacher create a one-shot session — not a persistent
  classroom/roster system.
- **FR-002**: System MUST generate the same exercise (via
  \`specs/004-exercise-plugin-engine/spec.md\`) for N children in a session.
- **FR-003**: System MUST produce printable worksheets for the session, via
  \`specs/007-printable-worksheets/spec.md\`.
- **FR-004**: System MUST support entering results per child in the session.
- **FR-005**: System MUST produce a simple class report summarizing per-child and aggregate
  results once results are entered.

### Key Entities

- **ClassSession**: one-shot, non-persistent grouping of N children, one exercise/tier, and their
  entered results.
- **ClassReport**: per-child and aggregate summary derived from a ClassSession's entered results.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A teacher can go from creating a session to a printed worksheet set for N children
  without configuring a roster or classroom entity.
- **SC-002**: A class report accurately reflects entered results for every child who has them, and
  clearly flags any child in the session without results yet.

## Assumptions

- N (class size) has no enforced upper bound in this spec; any practical limit is a UI/printing
  concern, not a requirement here.

## Out of Scope

- Full school/classroom management (rosters, ongoing class tracking).
- Automatic photo-based scanning (future, shared with \`specs/007-printable-worksheets/spec.md\`).

## Related

- \`specs/004-exercise-plugin-engine/spec.md\`
- \`specs/007-printable-worksheets/spec.md\`
- \`specs/006-accounts-privacy/spec.md\`
`,u=`# Feature Specification: Automatic Per-Topic Grade Progression

**Feature Branch**: \`019-per-topic-grade-progression\`

**Created**: 2026-09-15

**Status**: Draft

**Input**: User description: "change the practice session level system. the parent only selects
the childs grade (p to g5 for each kid). do not ask parents to chose a grade for each topic. each
topic shoujld start automatically at the childs schoool grade. then adapt independently based on
performance. strong score move up one level, average score stay in same, weak move down. ex: a
grade 2 child can eventually be in grade 5 in addition but 1 in multiplication. kepp school grade
and topic learning level as separate. update the practice session ui to only show the topic to
sec., while level are handled automatically. in the main screen addition mastery 0% iseem not
usefull. rather, we can for each activity add a tag with level and score. in each session question
(as thye ca be pretty random) it should show which skill is tested and the level."

## Clarifications

### Session 2026-09-15

- Q: How should "strong / average / weak" performance be measured to decide whether a topic's
  grade moves up, stays, or moves down? → A: Reuse the existing mastery-engine's rolling-window
  convention (last up to 50 answers at that grade, minimum 5 to judge), evaluated once per
  completed session per topic (not live, mid-session): ≥90% correct (the app's existing "mastered"
  cutoff) is strong and moves the topic's grade up one; <50% correct is weak and moves it down one;
  50–89% is average and leaves it unchanged. A topic's grade stays fixed for the duration of an
  in-progress session so the per-question indicator never shifts mid-session.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Parent sets the child's school grade once, not per topic (Priority: P1) 🎯 MVP

As a parent, I want to tell the app what school grade my child is in (P, or Grade 1 through 5)
once, as part of managing their profile, so that I never have to think about, or manually set, a
separate difficulty level for every individual topic (addition, subtraction, multiplication,
division) they might practice.

**Why this priority**: This is the entry point for the whole feature — without a single,
easy-to-find place to set the child's school grade, nothing downstream (auto-starting topics at
that grade, removing the per-topic picker) has a value to start from.

**Independent Test**: Can be fully tested by opening the child profile management flow, setting or
changing a child's school grade there, and confirming it is saved and readable — independent of
whether any topic has been practiced yet.

**Acceptance Scenarios**:

1. **Given** a parent is creating or managing a child's profile, **When** they look for a
   difficulty-related setting, **Then** they find exactly one control: the child's overall school
   grade (P, G1, G2, G3, G4, or G5) — no per-topic grade setting appears anywhere in profile
   management.
2. **Given** a child profile that already has a school grade set, **When** the parent opens profile
   management again, **Then** the previously-set school grade is shown and can be changed.
3. **Given** a parent changes a child's school grade after the child has already been practicing
   topics, **When** the change is saved, **Then** it does not alter any topic's already-adapted
   current grade (see User Story 2) — the school grade is a separate, independent value.

---

### User Story 2 - Each topic starts at the school grade and adapts on its own (Priority: P1) 🎯 MVP

As a child, when I practice a topic (e.g. addition) for the very first time, I want it to start at
my own school grade automatically, and then get harder or easier on its own as I keep practicing —
so that each topic finds its own right level for me, without a parent or me having to set it.

**Why this priority**: This is the core behavior change requested — it replaces manual per-topic
grade selection with automatic, independent-per-topic adaptation, and is the direct payoff of
User Story 1's single school-grade setting.

**Independent Test**: Can be fully tested by setting a child's school grade, practicing a topic for
the first time and confirming its questions start at that grade, then completing enough sessions
with a clearly strong, average, or weak performance and confirming the topic's grade moves up,
stays, or moves down accordingly, independent of any other topic's grade.

**Acceptance Scenarios**:

1. **Given** a child whose school grade is set to Grade 2, **When** they practice "Addition" for
   the very first time, **Then** the first addition question is generated at Grade 2.
2. **Given** a child has completed enough sessions at a topic's current grade for that topic's
   performance to be judged strong (per the Clarifications rule), **When** the next session for
   that topic starts, **Then** that topic's grade has moved up by exactly one grade from before.
3. **Given** the same conditions but performance was weak, **When** the next session starts,
   **Then** that topic's grade has moved down by exactly one grade (and never below the lowest
   valid grade for that topic).
4. **Given** the same conditions but performance was average, **When** the next session starts,
   **Then** that topic's grade is unchanged.
5. **Given** a child whose school grade is Grade 2, **When** they have practiced addition
   extensively with strong results and multiplication only briefly with weak results, **Then**
   addition's current grade can be higher than Grade 2 (e.g. Grade 5) while multiplication's
   current grade is lower than Grade 2 (e.g. Grade 1) at the same time — each topic's grade moves
   fully independently of every other topic's grade and of the school grade itself.
6. **Given** a topic is already at its lowest valid grade, **When** a subsequent session's
   performance at that topic is judged weak, **Then** the topic's grade does not move below that
   lowest grade (it stays at the floor).
7. **Given** a topic is already at its highest valid grade, **When** a subsequent session's
   performance at that topic is judged strong, **Then** the topic's grade does not move above that
   highest grade (it stays at the ceiling).

---

### User Story 3 - Practice-session picker only asks which topics, not which grade (Priority: P1) 🎯 MVP

As a parent or child starting a practice session, I want to choose only which topic(s) to practice,
so that starting a session is simpler and I'm never asked to guess or pick a difficulty grade
myself.

**Why this priority**: This is the visible UI change that retires manual grade selection; it must
ship alongside User Story 2 so the picker's simplified choice is backed by real automatic grade
selection underneath, not a hidden default.

**Independent Test**: Can be tested by opening the practice-session picker and confirming only
topic checkboxes are present, with no grade/level control of any kind, then starting a session and
confirming each checked topic's questions are generated at that topic's own current grade (per
User Story 2) without any manual input.

**Acceptance Scenarios**:

1. **Given** the practice-session picker, **When** a parent or child views it, **Then** they see
   one checkbox per topic (addition, subtraction, multiplication, division) and no grade/level
   selector of any kind.
2. **Given** one or more topics are checked, **When** the session starts, **Then** each checked
   topic's questions are generated at that topic's own current grade, exactly as automatically
   determined per User Story 2, with no opportunity for manual override in this flow.
3. **Given** a mixed session with multiple checked topics at different current grades, **When** the
   session runs, **Then** each topic's questions in that session remain at that topic's own grade
   as it was at session start — the mix of grades across topics is preserved, not merged into one.

---

### User Story 4 - Home screen shows topic + grade + score together (Priority: P2) — SUPERSEDED 2026-09-16

> **Superseded**: as of 2026-09-16, this per-topic mastery tag row was removed from the Mathematics
> subject page (it had migrated there from the home screen per 022-home-subjects-navigation). In
> practice it added little value alongside the syllabus view introduced by
> 024-syllabus-competency-score, which already surfaces each competency's Passed/Not-yet status per
> grade. FR-010 and FR-011 below, and SC-005, are no longer enforced; this section is kept for
> historical record only. The \`TopicMasteryTags\` component and its tests remain in the codebase,
> unused by any page, in case this display is wanted again in a different form.

As a parent or child looking at the main screen, I want to see, for each topic I've practiced, a
compact tag showing both its current grade and its mastery score together, instead of a single
"Addition mastery 0%" line that doesn't tell me which topic it's even about once more than one
topic has been practiced.

**Why this priority**: This is a clarity improvement that becomes necessary once grade is no
longer a single, manually-chosen value shown once for one hardcoded topic — it doesn't block the
core adaptive-grade behavior (User Stories 1-3) but is needed for a parent/child to make sense of
it.

**Independent Test**: Can be tested by practicing two or more different topics and confirming the
main screen shows one tag per practiced topic, each labeled with that topic's name, current grade,
and mastery score, without needing to open any other screen.

**Acceptance Scenarios**:

1. **Given** a child has practiced exactly one topic at least once, **When** the main screen is
   shown, **Then** one tag is displayed for that topic, showing the topic's name, its current
   grade, and its mastery score (or a clear "not enough attempts yet" indicator when fewer than the
   minimum number of attempts have been recorded at that grade, consistent with existing mastery
   display rules).
2. **Given** a child has practiced two or more topics, **When** the main screen is shown, **Then**
   one tag per practiced topic is displayed, each showing that topic's own name, current grade, and
   score independently of the others.
3. **Given** a child has not practiced any topic yet, **When** the main screen is shown, **Then**
   no per-topic mastery tag is shown for that child (there is nothing yet to report), and this is
   not treated as an error state.

---

### User Story 5 - In-session question shows which skill and grade is being tested (Priority: P2)

As a child answering a question — especially in a mixed session that interleaves several topics —
I want to see which skill and which grade the current question belongs to, so I understand what
I'm being asked to do even when the questions jump between topics.

**Why this priority**: This is most valuable once mixed sessions (already shipped) are combined
with per-topic grades that can now differ meaningfully from each other; it's a clarity add-on to
the existing question UI, not required for the adaptive-grade mechanism itself to function.

**Independent Test**: Can be tested by starting a session with two or more checked topics at
different current grades and confirming each question, as it's shown, displays the correct topic
name and grade for that specific question.

**Acceptance Scenarios**:

1. **Given** an active session with only one topic checked, **When** each question is shown,
   **Then** that topic's name and its current grade are both visibly indicated alongside the
   question.
2. **Given** an active mixed session with two or more topics checked at different current grades,
   **When** consecutive questions are shown, **Then** each question's displayed topic name and
   grade correctly match that specific question's own topic and grade, changing from question to
   question as the mix of topics is interleaved.

---

### Edge Cases

- What happens the very first time a child ever attempts a topic, before enough answers exist to
  judge performance? The topic's grade starts at the child's current school grade (User Story 2,
  Scenario 1) and stays there until enough attempts accumulate to judge a session (per the
  Clarifications rule's minimum-attempts convention) — it is never left unset or defaulted to
  grade 1 regardless of school grade.
- What happens if a child's school grade is "P" but a topic's grade scale doesn't include a "P"
  rung (only Grades 1–5)? That topic starts at Grade 1, the lowest rung it actually has.
- What happens if a child attempts a graduated topic for the very first time before a parent has
  set any school grade at all (Exercise-First per Constitution Principle I means practice MUST NOT
  be gated behind profile setup)? That topic starts at Grade 1, the same floor used for an
  unmatched "P" school grade — practice is never blocked or delayed waiting for a school grade to
  be set.
- What happens if a parent changes the child's school grade after topics have already adapted away
  from it? Already-adapted topics' current grades are unaffected (User Story 1, Scenario 3) — the
  new school grade only applies as the starting point for any topic the child has not yet attempted
  at all.
- What happens to a topic's grade while a session is already in progress? It does not change
  mid-session (Clarifications) — the next re-evaluation happens only once that session is complete,
  before the topic's next session.
- What happens if a child is at the lowest or highest valid grade for a topic and performance would
  otherwise push it further? The grade holds at that floor/ceiling (User Story 2, Scenarios 6-7)
  rather than going out of range.
- What happens to a child's existing saved practice history and any previously-manually-set
  per-session grades from before this change? Existing mastery signal history is unaffected and
  continues to be interpreted exactly as before; each topic's automatically-tracked current grade
  is derived going forward from that same history (e.g. a topic already showing strong recent
  performance at its old manually-picked grade begins this feature already positioned at or above
  that grade, not reset back to the school grade).
- What happens for a topic that only ever exposes a single difficulty level (a baseline-tier
  competency below Grade 1, per the constitution's Principle III), rather than the graduated
  Grade 1–5 scale? This feature's up/down adaptation applies only to topics with a graduated
  multi-grade scale; a single-level baseline topic has no up/down movement to make and is
  unaffected by this feature.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST let a parent set a child's overall school grade (P, G1, G2, G3, G4, or
  G5) from the child profile management flow, as a single value per child — not per topic.
- **FR-002**: System MUST allow the child's school grade to be changed later from the same profile
  management flow, and MUST persist the current value so it is shown pre-filled the next time that
  flow is opened.
- **FR-003**: System MUST NOT present any control, in profile management or anywhere else, that
  asks a parent or child to manually pick a difficulty grade for an individual topic.
- **FR-004**: System MUST track, per child and per topic (competency) that has a graduated
  Grade 1–5 scale, an independent "current grade" value that is separate and distinct from that
  child's school grade.
- **FR-005**: The first time a child attempts a given topic (no prior attempts recorded for that
  child+topic), the system MUST initialize that topic's current grade to the child's school grade
  at that moment, floored to Grade 1 if the school grade is "P" and the topic has no "P" rung, or
  if no school grade has been set yet (practice MUST NOT be gated or delayed waiting for a school
  grade, per Constitution Principle I).
- **FR-006**: After each session in which a topic was practiced, the system MUST re-evaluate that
  topic's current grade using that topic's own most recent answers at its current grade (the
  existing mastery-engine rolling window: up to the most recent 50 answers at that grade, requiring
  at least 5 before a judgment is made):
  - **FR-006a**: ≥90% correct (the existing "mastered" cutoff) MUST move that topic's current grade
    up by exactly one grade, unless it is already at the topic's highest valid grade, in which case
    it MUST stay unchanged.
  - **FR-006b**: <50% correct MUST move that topic's current grade down by exactly one grade,
    unless it is already at the topic's lowest valid grade, in which case it MUST stay unchanged.
  - **FR-006c**: 50–89% correct MUST leave that topic's current grade unchanged.
  - **FR-006d**: Fewer than 5 qualifying answers at the current grade MUST leave that topic's
    current grade unchanged (no judgment made yet).
- **FR-007**: A topic's current grade MUST remain fixed for the duration of any session already in
  progress that includes that topic — re-evaluation (FR-006) MUST only take effect for that topic's
  next session, never mid-session.
- **FR-008**: Each topic's current grade MUST move independently of every other topic's current
  grade and independently of the child's school grade — adapting one topic's grade MUST NOT alter
  any other topic's grade or the school grade.
- **FR-009**: The practice-session picker MUST present only a topic selector (one checkbox per
  topic) and MUST NOT present any grade/level selector; each checked topic's session questions MUST
  be generated at that topic's own current current grade (FR-004/FR-006) automatically.
- **FR-010** *(superseded 2026-09-16, see User Story 4)*: The main/home screen MUST display, for
  each topic the child has attempted at least once, a single tag-style indicator combining that
  topic's name, its current grade, and its mastery score (or a clear "not enough attempts yet"
  indicator when the topic has fewer than the minimum qualifying attempts at its current grade) —
  replacing the prior single hardcoded "[Topic] mastery: X%" display.
- **FR-011** *(superseded 2026-09-16, see User Story 4)*: The main/home screen MUST NOT display a
  mastery tag for any topic the child has never attempted.
- **FR-012**: During an active practice session, each question presented to the child MUST be
  accompanied by a visible indicator of that specific question's own topic name and grade,
  including in a mixed session where consecutive questions belong to different topics and/or
  different grades.
- **FR-013**: A child's practice history and mastery signals recorded before this change MUST be
  preserved and MUST continue to determine each topic's current grade and mastery score going
  forward exactly as described in Edge Cases (no history lost, no grade silently reset to the
  school grade for a topic already in progress).
- **FR-014**: This feature MUST NOT change the mastery calculation formula itself
  (\`specs/003-mastery-engine/spec.md\`'s thresholds, minimum-attempts rule, and averaging behavior
  are reused as-is by FR-006, not redefined).
- **FR-015**: This feature applies only to topics with a graduated Grade 1–5 scale; a topic that
  exposes only a single baseline difficulty level (per Constitution Principle III) has no
  current-grade up/down movement and is unaffected by FR-004 through FR-009.

### Key Entities

- **School Grade**: a single value per child (P, G1–G5), set and changed by a parent through child
  profile management. Represents the child's actual school-year placement. Independent from, and
  never overwritten by, any topic's current grade.
- **Topic Current Grade**: a value (1–5) tracked independently per child and per topic
  (competency) with a graduated grade scale. Initialized from the child's School Grade the first
  time that topic is attempted, then automatically adapts up, down, or stays based on the child's
  recent performance at that grade for that topic, per FR-006. Fully independent across topics —
  one topic's current grade never influences another's.
- **Topic Mastery Tag**: a home-screen display unit, one per topic the child has attempted at
  least once, combining that topic's name, its current grade, and its mastery score/status into a
  single compact indicator.
- **In-Session Question Indicator**: a per-question display element in an active practice session
  showing that specific question's own topic name and grade.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A parent can set a child's school grade in under 10 seconds from the child profile
  management flow, and never encounters a per-topic grade control anywhere in the product.
- **SC-002**: 100% of a child's first-ever attempts at any topic are generated at that child's
  current school grade (or Grade 1 when the school grade is "P" and the topic has no "P" rung).
- **SC-003**: Across repeated sessions, a topic's current grade moves up after, and only after, a
  session judged strong per FR-006a; moves down after, and only after, a session judged weak per
  FR-006b; and never changes after a session judged average per FR-006c — verified against
  simulated session histories with known outcomes.
- **SC-004**: Two topics practiced by the same child can independently reach current grades that
  differ from each other by up to the full width of the grade scale (e.g. one topic at Grade 1
  while another is at Grade 5) with no cross-topic interference.
- **SC-005** *(superseded 2026-09-16, see User Story 4)*: 100% of home-screen mastery tags, when two
  or more topics have been practiced, show a distinct topic name, grade, and score per topic — a
  parent/child can never mistake one topic's tag for another's.
- **SC-006**: 100% of questions shown during a mixed session correctly display that specific
  question's own topic and grade, verified by comparing the displayed value against the question's
  underlying topic/grade for every question in a session.
- **SC-007**: Zero grade/level selection controls remain anywhere in the practice-session picker
  after this change ships.

## Assumptions

- "Topic" in this spec refers to each entry already checkable, one row per row, in the existing
  practice-session picker — today that list spans both the four graduated operations (addition,
  subtraction, multiplication, division) and the baseline-tier activities added by
  \`specs/017-baseline-mastery-tracking/spec.md\` (e.g. Counting & Quantities). This feature does not
  add, remove, or redefine which topics exist; FR-015 already scopes the up/down grade adaptation
  to graduated topics only, while the home-screen mastery tag (User Story 4) and in-session
  indicator (User Story 5) apply uniformly to every topic a child has attempted, graduated or
  baseline alike.
- The strong/average/weak thresholds and evaluation window (≥90% strong, <50% weak, 50-89% average,
  judged from up to the most recent 50 answers at the current grade with a minimum of 5) are a
  deliberate reuse of the existing mastery-engine's own conventions (\`MASTERY_THRESHOLD = 90\`,
  \`MIN_ATTEMPTS_FOR_PERCENTAGE = 5\`, \`MAX_ATTEMPTS_CONSIDERED = 50\` in
  \`packages/core/mastery-engine\`), plus one new "weak" cutoff at 50%, rather than an unrelated new
  formula — see Clarifications.
- A topic's current grade is re-evaluated once per completed session (not live, mid-question), per
  the Clarifications answer — this keeps the in-session grade indicator (User Story 5) stable and
  predictable within a single session.
- The existing dormant \`deriveCurrentGrade\`/swing-block logic in \`packages/core/daily-practice\` is
  superseded by this feature's FR-006 up/down/stay rule for the purpose of determining a topic's
  practice grade; whether any other part of that package remains useful is an implementation
  decision, not a product requirement of this spec.
- The home screen's per-topic mastery tag (User Story 4) shows only topics already attempted at
  least once; a parent/child discovers new topics through the practice-session picker itself, not
  through a home-screen placeholder for unattempted topics.
- This feature does not change how many operations a session can mix, session length, or
  single-attempt-then-reveal feedback behavior — those remain exactly as defined in
  \`specs/015-mixed-operations-grade-rename/spec.md\`.
- This feature does not change the target-grade concept (a competency's own fixed curriculum
  placement, \`specs/015-mixed-operations-grade-rename/spec.md\` FR-009) — School Grade and Topic
  Current Grade are two more concepts that must remain visibly distinct from target Grade wherever
  more than one could appear together, consistent with that existing requirement.
`,d=`# Feature Specification: IndexedDB Persistence Layer

**Feature Branch**: \`032-indexeddb-persistence\`

**Created**: 2026-09-25

**Status**: Implemented (2026-10-07 audit; T031/T032 closed — see tasks.md)

**Input**: User description: "we have lots of modules for each subject and we storing the info in the browser. i want to be able to easily save and restore the data per user. (one day i will store the data in the cloud). but should be able to run locally (as the source of truth). indexeddb seem the right solution to store that per user. there should be one db that will contain a list of subject for each sujbect the last 50 questions and the right answer and the kids answer and a timestamp. and we should keep track of the score on 50 (last 50 question) every month so we can have the progression. that way we have the current score and the montly score. the model should be pretty stable and versionned so we can easily migrate if needed."

## Clarifications

### Session 2026-09-25

- Q: Should each recorded answer store the child's actual submitted answer value (e.g. the number or choice they picked), not just whether it was correct or incorrect? → A: Yes — store both the correct answer and the child's actual submitted answer value for each of the last 50 questions, to allow analysis of results (not just a correct/incorrect flag).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - A parent sees their child's recent answers preserved across sessions (Priority: P1)

A child practices a subject, closes the browser, and comes back later (same device). The parent or child can see the child's most recent question-and-answer history for that subject, exactly as it was left, without anything being silently lost or reset.

**Why this priority**: This is the core value of the feature — local data must reliably survive across sessions. Without this, nothing else in the feature matters.

**Independent Test**: Can be fully tested by having a child answer several questions in one subject, reloading the app, and confirming the same recent question/answer history and timestamps are still shown for that child and subject.

**Acceptance Scenarios**:

1. **Given** a child profile with no prior history in a subject, **When** the child answers a question, **Then** that question, the correct answer, the child's answer, and a timestamp are recorded and visible after a page reload.
2. **Given** a child has already answered 50 questions in a subject, **When** the child answers one more question, **Then** the oldest recorded question for that subject is dropped and the new one is added, keeping at most 50 stored per subject.
3. **Given** two different child profiles exist, **When** each answers questions in the same subject, **Then** each child's history is stored and retrieved independently of the other's.

---

### User Story 2 - A parent tracks a child's progression over time (Priority: P1)

A parent wants to know whether their child is improving in a subject month over month, not just how they did on the most recent handful of questions. The app shows a current "score out of 50" for the subject as well as a history of past months' scores so the parent can see a trend.

**Why this priority**: Progression tracking is the second explicit goal in the request (alongside raw history) and is what turns raw stored answers into something meaningful for a parent — it's the reporting half of this feature and is equally load-bearing as P1 above.

**Independent Test**: Can be tested by answering questions across a simulated month boundary and confirming a separate, frozen score exists for the completed month while a new current-month score starts accumulating.

**Acceptance Scenarios**:

1. **Given** a child answers questions in a subject during the current calendar month, **When** each question is answered, **Then** that month's score-out-of-50 for the subject updates to reflect up to the last 50 questions answered so far this month.
2. **Given** a calendar month has ended, **When** the child answers new questions in a new month, **Then** the prior month's score is left unchanged (frozen) and a new score begins accumulating for the new month.
3. **Given** several months of history exist for a subject, **When** the parent views progression, **Then** they see the sequence of monthly scores in chronological order, plus the current (in-progress) month's score.
4. **Given** a child answers zero questions in a given calendar month, **When** the parent views progression, **Then** that month either shows no score or is visibly absent, and does not display a misleading score of 0/50 that implies attempts were made.

---

### User Story 3 - Existing local data is not lost when the app upgrades to the new storage (Priority: P1)

A family has already been using the app and has existing profiles, answer history, and preferences saved in the browser under the old storage mechanism. After the app updates, all of that history, and their profiles, are still there — nothing is silently wiped.

**Why this priority**: This is a one-time but high-stakes event — if it fails, every existing user loses their child's history permanently on upgrade. It must ship in the same release as the new storage, not as a follow-up.

**Independent Test**: Can be tested by seeding the old storage format with sample profiles and answer history, loading the updated app, and confirming the same profiles and a reasonable equivalent of the history/progress appear under the new storage with no data loss and no duplicate profiles created.

**Acceptance Scenarios**:

1. **Given** a browser with existing profiles and answer history saved under the old storage mechanism, **When** the updated app is loaded for the first time, **Then** all existing profiles and their available history are carried over into the new storage automatically, without the user taking any action.
2. **Given** the one-time carry-over has already completed once, **When** the app is loaded again, **Then** the carry-over does not run a second time and does not duplicate or overwrite newer data with old data.
3. **Given** the old storage has no data at all (a new user), **When** the app is loaded for the first time, **Then** the app starts cleanly on the new storage with no errors.

---

### User Story 4 - A parent backs up and restores their child's data (Priority: P2)

A parent wants to export their child's saved data to a file (e.g. before clearing browser data, or to move to another device) and restore it later. This already exists today in some form; it must keep working against the new storage.

**Why this priority**: Important for data safety and continuity, but the app is already usable and correct without it working on day one of the new storage — it can follow shortly after P1 stories land.

**Independent Test**: Can be tested by exporting a child's data to a file, wiping local storage, importing the file back, and confirming the child's profile, recent question history, and monthly progression scores are all restored.

**Acceptance Scenarios**:

1. **Given** a child has recent question history and monthly progression scores, **When** their data is exported, **Then** the exported file contains their profile, recent history, and monthly scores.
2. **Given** a previously exported file, **When** it is imported into the app, **Then** the child's profile, recent history, and monthly scores are restored and match what was exported.
3. **Given** an exported file from an older version of the export format, **When** it is imported, **Then** it is upgraded automatically to the current format without data loss.

---

### Edge Cases

- What happens when the browser denies or restricts local storage access (e.g. private browsing mode, storage quota exceeded)? The app should degrade gracefully rather than crash, and should make the parent/child aware that progress may not be saved.
- What happens when a child answers more than one question with the same timestamp (rapid answers, clock resolution)? Ordering of the "last 50" must still be well-defined and stable.
- What happens if the device's clock changes (e.g. travel across time zones, manual clock change) mid-month? Month boundaries should be handled in a consistent, predictable way rather than causing duplicate or skipped months.
- What happens when a subject is practiced for the first time ever (no prior history or monthly score exists yet)? The system must initialize cleanly without requiring special-case handling elsewhere in the app.
- What happens if the one-time carry-over from old storage is interrupted (e.g. browser closed mid-migration)? On next load, the app must either complete it safely or retry without creating duplicate/partial data.
- What happens when a child profile is deleted? Their subject history and monthly scores should be removed along with it, not left as orphaned data.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST store all per-child progress data (subjects practiced, recent question history, monthly scores) in a single local database that persists across browser sessions on the same device.
- **FR-002**: The system MUST record, per child and per subject, an ordered list of the most recently answered questions, capped at 50 entries, dropping the oldest entry once the cap is exceeded.
- **FR-003**: Each recorded question entry MUST include: the question asked (or a reference sufficient to identify it), the correct answer value, the child's actual submitted answer value (not merely a correct/incorrect flag), and a timestamp of when it was answered — sufficient detail to let a parent review specifically what the child answered on any of the last 50 questions.
- **FR-004**: The system MUST maintain, per child and per subject, a current-month score representing performance over up to the last 50 questions answered within the current calendar month, updated as new questions are answered during that month.
- **FR-005**: Once a calendar month ends, the system MUST freeze that month's score for each child/subject so it is no longer modified by later activity, and MUST begin a new, independently-updating score for the next calendar month.
- **FR-006**: The system MUST retain a history of past months' frozen scores per child and per subject, so that progression over time can be displayed in chronological order.
- **FR-007**: The system MUST keep each child's data (subjects, recent history, monthly scores) isolated from every other child's data.
- **FR-008**: The stored data model MUST carry an explicit version identifier and support structured migration from one version to the next without data loss, so future changes to the data shape do not require discarding existing local data.
- **FR-009**: On first load after upgrading to this storage mechanism, the system MUST automatically carry over existing local data (profiles, prior answer history, preferences) from the prior storage mechanism into the new one, requiring no manual action from the user.
- **FR-010**: The one-time carry-over described in FR-009 MUST be safe to interrupt and safe to re-run — it must not create duplicate profiles or overwrite newer data with older data if triggered more than once.
- **FR-011**: All data described in this spec MUST be readable and writable without any network connection; local storage on-device remains the source of truth.
- **FR-012**: The data model and storage approach MUST NOT preclude adding a cloud-based sync or backup mechanism in the future (e.g. local data remains the authoritative source that a future sync layer could read from and reconcile against).
- **FR-013**: The existing export-to-file and import-from-file capability MUST continue to work against the new storage, producing an export that includes profile, recent question history, and monthly progression scores, and correctly restoring all of it on import.
- **FR-014**: Importing an export file produced by an older version of the export format MUST continue to succeed, with the data upgraded to the current export format automatically.
- **FR-015**: If local storage is unavailable or fails (e.g. quota exceeded, browser restrictions), the system MUST continue to function for the current session without crashing, and MUST make the user aware that their progress may not be saved.
- **FR-016**: Deleting a child profile MUST remove that child's associated subject history and monthly scores as well, leaving no orphaned data behind.

### Key Entities *(include if feature involves data)*

- **Child Profile**: Represents one child using the app. Has an identity, a display name/alias, and is the owning boundary for all subject history and scores below.
- **Subject**: A named area of practice (e.g. a math topic) that a child has activity in. Tracked per child — a child only has a Subject entry once they've practiced it.
- **Answered Question Entry**: One record of a single question a child answered within a subject: the question, the correct answer value, the child's actual submitted answer value, and when it happened. Up to 50 are retained per child per subject, most recent first.
- **Monthly Score**: One record per child, per subject, per calendar month: a score out of 50 reflecting performance during that month. The current month's record is live/updating; past months' records are frozen once their month ends. Together these form the progression history for a child/subject.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A child's question history and progression scores, once saved, are still present and accurate after closing and reopening the browser, 100% of the time under normal browser conditions.
- **SC-002**: After the app upgrades to the new storage, 100% of previously existing profiles and their available history are present and correct on first load — zero data loss incidents during the carry-over.
- **SC-003**: A parent can look at a subject and see, within one screen, both the child's current progress and their score history across at least the last several months (data permitting).
- **SC-004**: Export followed immediately by import on a cleared browser restores a child's profile, recent history, and monthly scores with no discrepancies, verified across all supported export format versions (current and prior).
- **SC-005**: Introducing a future change to the stored data shape can be done by adding a migration step, without requiring existing users' locally saved history to be discarded or reset.

## Assumptions

- "Per user" in the request means per child profile, consistent with the existing multi-child profile concept already in the app — there is no separate parent/adult account layer in scope here.
- "Local as source of truth" means data lives in the browser's local storage for the device/browser it was created in; syncing the same child's data across multiple devices is explicitly out of scope for this feature (cloud sync is called out by the user as future work).
- Calendar months are based on the device's local time; no timezone-normalization or server-side clock is in scope.
- A "score out of 50" for a month is computed from up to the last 50 questions answered by that child in that subject during that specific calendar month (not a rolling window that spans month boundaries) — if fewer than 50 were answered that month, the score reflects however many were answered.
- The existing per-child export/import file feature is in scope to the extent that it must keep working against the new storage; redesigning its file format or user flow is not otherwise in scope.
- Clearing browser data/storage for the site is an accepted way to lose local history (same as today) — this feature does not add new protections against the user manually clearing site data.
- This spec does not cover UI/screen design for how progression is displayed to the parent — only that the underlying data needed to display it is correctly stored and retrievable.
- Capturing the child's actual submitted answer value (FR-003) is a larger change than what the app records today (today only a correct/incorrect flag is kept); exercises/subjects are assumed to already know the answer value at the moment a question is answered and only need to surface it to storage — no new answer-capture UI is in scope.
`,f=`# Feature Specification: Ordering Activity Template + Orders-Numbers-to-1000 Rework

**Feature Branch**: \`034-ordering-activity-template\`

**Created**: 2026-09-26

**Status**: Draft

**Input**: User description: "Build a new minimal ordering/sequencing activity template
(packages/template-ordering) for the mathematics repo, implementing the same shared Plugin<Q,A>
contract every other template package (template-matching, template-multiple-choice, etc.) already
implements, then rework the ordersNumbersTo1000 activity (competency
math.number-sense.orders-numbers-to-1000, framework skill mathematics.G2.1, Grade 2) to use it
instead of createMultipleChoicePlugin, since the framework's actual skill is ordering a set of
numbers and placing them on a number line, not picking one extreme value from three labeled
options."

**Note**: \`speckit-clarify\` was deliberately skipped for this feature — it was generated by the
\`syllabus-research\` agent (backfilled manually on 2026-09-26), which runs unattended with no user
present to answer interactive clarification questions. If anything below needs revisiting, run
\`/speckit-clarify\` manually.

**Repository root for this feature: the \`mathematics\` repo** (a sibling checkout, e.g.
\`../subjects/mathematics\` or \`../subject-math\` relative to this \`specs\` repo) — **not** \`app\`. All
file paths below are relative to the \`mathematics\` repo.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Child arranges a set of numbers in order (Priority: P1)

A child working through the Grade 2 number-sense competency "orders numbers to 1,000" is presented
with a set of 3-5 numbers in a shuffled arrangement and must place them in the correct order
(ascending or descending, as the question specifies). This replaces the current activity, which
only asks "which of these 3 numbers is smallest/largest" — a narrower, single-selection task.

**Why this priority**: This is the entire activity — without it there's nothing to ship. It
directly addresses the gap the framework bullet actually describes: ordering a set, not picking one
extreme.

**Independent Test**: Can be fully tested by generating a session for
\`math.number-sense.orders-numbers-to-1000\` and confirming it presents a set of numbers to be
arranged in sequence, and that submitting the fully-correct order produces a correct mastery
signal, with any incorrect placement producing an incorrect one.

**Acceptance Scenarios**:

1. **Given** a child is presented the \`math.number-sense.orders-numbers-to-1000\` activity, **When**
   the activity loads, **Then** it presents a shuffled set of at least 3 numbers and an instruction
   to arrange them (ascending or descending), not a 3-option "pick the smallest/largest" question.
2. **Given** a child places every number in the fully correct order, **When** they submit, **Then**
   the activity records a correct \`MasterySignal\` for \`math.number-sense.orders-numbers-to-1000\`.
3. **Given** a child submits an order with at least one number out of place, **When** they submit,
   **Then** the activity records an incorrect \`MasterySignal\` for the same competency.

---

### User Story 2 - A reusable ordering template exists for future competencies (Priority: P1)

A new template package, \`packages/template-ordering\`, implements the same shared plugin contract
every other template in this repo implements (\`Plugin<TQuestion, TAnswer>\` from
\`@learncoreskills/plugin-engine\`) for a generic "arrange these N items in the correct order"
interaction — not hardcoded to numbers specifically, so it can be reused by any future competency
whose skill is fundamentally about sequencing/ordering a set.

**Why this priority**: Equal priority to User Story 1 — this spec's whole justification (per the
originating ticket) is that this gap recurs across multiple competencies
(\`readsWritesOrdersTo10000\`, \`readsWritesOrdersToMillion\` are named in the ticket as the same shape,
currently on \`template-numeric-answer\`), so building this as a one-off inside
\`packages/syllabus-content-g2\` instead of a proper shared template would just relocate the same gap
rather than close it.

**Independent Test**: Can be tested in isolation, independent of any competency using it yet, by
importing \`packages/template-ordering\` directly and confirming its factory produces a valid
\`Plugin\` — same as \`packages/template-matching/tests/factory.test.ts\` tests that package alone,
without depending on any consumer.

**Acceptance Scenarios**:

1. **Given** a content bank of N items with a defined correct order, **When** a question is
   generated from \`template-ordering\`'s factory, **Then** the returned question presents the items
   in a shuffled arrangement (not the correct order) alongside enough information to validate a
   proposed ordering.
2. **Given** a proposed ordering (an array of item ids in the order the learner placed them),
   **When** it is validated, **Then** the result is correct only if it exactly matches the
   configured correct order, and incorrect for any other arrangement — including one that is
   "close" (e.g. two adjacent items swapped).
3. **Given** the same (grade, seed) pair, **When** a question is generated twice, **Then** both
   calls return a deep-equal question (Constitution Principle VI, Determinism &
   Testability — NON-NEGOTIABLE).

### Edge Cases

- What happens if two items in the bank have the same underlying value (e.g. two identical
  numbers)? → Out of scope for this feature's initial content (the numbers authored for
  \`ordersNumbersTo1000\` are always distinct, matching the current bank's own numbers), but the
  template itself MUST NOT assume uniqueness at the type level — ordering is defined by each item's
  configured position in the bank entry, not by comparing item values, so duplicate display values
  are handled correctly by construction even though this feature's own content doesn't exercise
  that case.
- What happens when a learner submits a partial ordering (fewer placements than items)? → Treated
  as incorrect, consistent with how \`template-matching\`'s "all pairs must be correct" semantics
  already handle an incomplete \`MatchingAnswer\` (any missing/wrong mapping fails the whole
  submission) — \`template-ordering\` follows the same all-or-nothing convention, not partial credit.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A new package \`packages/template-ordering\` MUST exist, implementing
  \`Plugin<TQuestion, TAnswer>\` from \`@learncoreskills/plugin-engine\`, following the same structure
  and conventions as \`packages/template-matching\` (a \`types.ts\` defining its own question/answer
  shapes, a \`factory.ts\` exporting a \`create*Plugin\` factory function, a \`rng.ts\` for deterministic
  shuffling, an \`index.ts\` re-exporting the public surface, and a \`package.json\`/\`tsconfig.json\`
  matching sibling template packages' shape exactly).
- **FR-002**: The template's content-bank shape MUST support, per grade: a set of items (each with
  a stable id and bilingual \`en\`/\`fr\` display label) and their correct order — generic enough to
  order numbers, words, or any other labeled item, not hardcoded to numeric values specifically.
- **FR-003**: \`generateQuestion(grade, seed)\` MUST be deterministic (same inputs → deep-equal
  output) and MUST present the bank's items in a shuffled (non-correct) order, per Constitution
  Principle VI (NON-NEGOTIABLE).
- **FR-004**: \`validateAnswer(question, answer)\` MUST return correct only when the submitted order
  exactly matches the configured correct order for that question, and incorrect for any deviation
  (Edge Cases above) — no partial credit.
- **FR-005**: The template MUST provide a \`createSession\`/\`createMasterySignal\` pair matching the
  shape every other template factory in this repo provides (see \`template-matching\`'s
  \`TemplateFactoryResult\` as the reference shape), so it plugs into the same \`exerciseDefinitions.ts\`
  wiring convention every other competency's activity uses.
- **FR-006**: The \`math.number-sense.orders-numbers-to-1000\` activity
  (\`packages/syllabus-content-g2/src/content.ts\`, \`ordersNumbersTo1000\` export) MUST be rebuilt
  using this new template instead of \`createMultipleChoicePlugin\`.
- **FR-007**: The reworked activity MUST preserve the competency's existing identity exactly: \`id:
  "math.number-sense.orders-numbers-to-1000"\`, \`frameworkSkillId: "mathematics.G2.1"\`,
  \`targetGrade: 2\`, \`gradeCount: 2\`, and its existing \`scoreInputs\` entry, as currently defined in
  \`packages/syllabus-content-g2/src/competencies.ts\`. None of these fields change.
- **FR-008**: The reworked activity MUST provide a distinct content bank per each of the
  competency's two internal grades (1 and 2), at least as hard at grade 2 as at grade 1 (e.g. more
  items to order, or numbers closer in value / harder to visually distinguish), matching the
  competency's existing two-grade structure.
- **FR-009**: Every ordering set MUST be provided in both English and French, matching this repo's
  existing bilingual content convention (numbers themselves don't need translation, but any
  instructional label the template's content shape requires does).
- **FR-010**: A dedicated automated test MUST exist for \`packages/template-ordering\` itself
  (package-level, following \`template-matching/tests/factory.test.ts\`'s pattern: determinism,
  correct-ordering validates true, an incorrect ordering validates false) and for the reworked
  \`ordersNumbersTo1000\` activity specifically (competency-level, following the same pattern
  \`033-classify-triangles-matching-activity\`'s tasks establish for \`classifiesTriangles\`).
- **FR-011**: The previous \`createMultipleChoicePlugin\`-based bank for \`ordersNumbersTo1000\` MUST
  be removed — the ordering version replaces it, it does not run alongside it.

### Key Entities

- **Ordering item**: one entry in a bank set — a stable id, its correct position in the target
  order, and a bilingual display label (for numbers, the label is just the number itself, formatted
  identically in both languages).
- **Ordering bank entry**: one grade's full set of items plus the instruction direction (ascending
  or descending) — the unit of content \`ordersNumbersTo1000\`'s rework authors, analogous to
  \`template-matching\`'s \`MatchingContentEntry\`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: \`packages/template-ordering\` exists as an independently buildable, independently
  tested package — its own test suite passes with no dependency on any consumer competency existing
  yet (User Story 2's independent-test requirement).
- **SC-002**: 100% of sessions generated for \`math.number-sense.orders-numbers-to-1000\`, at either
  internal grade, present an ordering task (arrange a shuffled set) — zero sessions still render the
  old 3-option "pick the smallest/largest" format.
- **SC-003**: The full automated test suite for the \`mathematics\` repo (lint, typecheck, test,
  coverage) passes after the change, with the new template package and the reworked competency both
  contributing passing, non-trivial coverage — no reduction in the repo's overall coverage bar.
- **SC-004**: The two other competencies named in the originating ticket as sharing this gap
  (\`readsWritesOrdersTo10000\`, \`readsWritesOrdersToMillion\`) are NOT modified by this feature — they
  remain explicitly out of scope, to be addressed as separate future tickets now that the template
  they'd need exists (Assumptions below).

## Assumptions

- Building \`template-ordering\` as a genuinely new, generic template package (rather than
  repurposing \`template-matching\` as "number ↔ rank" pairs) is the right call because: (a) the
  underlying \`Plugin<TQuestion, TAnswer>\` contract is fully generic and already supports an
  arbitrary new template with no changes to \`@learncoreskills/plugin-engine\` itself (verified by
  reading its \`types.ts\`), and (b) two other named competencies share this exact gap, so a proper
  reusable template pays for itself beyond this one activity — this was a deliberate choice among
  two viable options, not the only possible approach (see the originating ticket,
  \`specs/improvements/orders-numbers-to-1000-activity-format.md\`, for the rejected
  matching-as-ranking alternative).
- \`readsWritesOrdersTo10000\` (G3) and \`readsWritesOrdersToMillion\` (G4) are explicitly NOT reworked
  by this feature (SC-004) — they're follow-up candidates for \`template-ordering\` once it exists,
  tracked as a note in this feature's completion report, not silently expanded into this feature's
  scope.
- \`template-ordering\`'s \`toPresentation\` (if implemented at all) will face the same
  narrower-adapter limitation \`template-matching\`'s does (\`QuestionPresentationResult\`'s
  \`presentation\` union only supports \`"equation"\` and \`"choice"\` kinds, not a native
  "arrange these items" kind) — same as \`033-classify-triangles-matching-activity\`'s research.md
  concluded for matching, the full ordering interaction's actual UI rendering in \`apps/web\` is a
  separate, out-of-scope concern from this feature's package-level content-and-contract work.
`,p=`# Feature Specification: Touch Once redesign (one-to-one counting)

**Feature Branch**: \`050-touch-once-redesign\`

**Created**: 2026-10-02

**Status**: In progress — engine+scene done (T001-T008, T010); bank, captions, ladder, validate, blog remain. Owns ONLY \`preschool-one-to-one\` (PK.NUM.2) and the \`count-path\` emoji/noObject/flaw fields; 051 F6 \`tap\` mode builds on these and must not change them.

**Input**: User description: "Touch Once (preschool-one-to-one, PK.NUM.2) redesign. Reuse the existing
count-path scene (frog on lily pads) with emoji pads and a per-pad highlight as each object is
counted; keep plain multiple-choice as reduced-motion fallback. Seed-vary the mistakes with
per-misconception kind feedback in en and fr. Add a difficulty ladder (line -> scattered -> circle),
4+ variants per size, sizes 2-10 kept, tap targets >=44px. Out of scope: new multi-tap scene type,
audio." Origin: activity-review audit of \`preschool-one-to-one\`, 2026-10-02.

**Repositories touched**: \`app\` (small extension of the existing count-path scene), \`subjects/mathematics\`
(the Touch Once question bank), \`blog\` (write-up).

## Context

Audit findings (ux-expert + activity-designer, two rounds, verdict REDESIGN):

- The prompt says "Touch each 🍎 once" but the child touches nothing: they read text rows such as
  \`🍎1 🍎2 🍎\` and pick one. This tests reading digits, not one-to-one correspondence, and a
  3-5 year old cannot do it.
- Rows of up to 10 emoji with digits are dense and hard to scan on small screens.
- The three wrong rows always follow the same pattern (skip object 2, double the last, start at 2),
  so a child can pick by shape alone. Feedback is a generic right/wrong.
- The range (2 to 10 objects, three levels) is correct and is kept. There are only 18 items.

The "Count in Order" activity already answers a similar question with a frog hopping lily pads
(049-activity-engine). That scene shows only numbers on pads, never objects, and lays options out as
parallel lanes (a line).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - See the touching, not read it (Priority: P1)

A child sees, for each option, a lane of lily pads where every pad carries one of the objects from
the prompt and the number said when it was touched. Tapping a lane makes the frog hop it: each object
lights up as it is counted, so a skipped object, an object touched twice, or an object left
untouched is visible rather than described in digits.

**Why this priority**: it removes the core defect (a "touch" activity that is a reading task) and is
the smallest change that does so.

**Independent Test**: start a Touch Once session; every question renders lanes with object pads;
tapping the right lane lights every object once, in order, and answering works as before.

**Acceptance Scenarios**:

1. **Given** a Touch Once question, **When** it renders, **Then** each option is a lane whose pads show
   the prompt's object and its counted number, and no raw emoji-plus-digit text row is shown.
2. **Given** the child taps a lane that touches an object twice, **When** the frog hops it, **Then** it
   stumbles at the repeated object and the right lane is then shown being counted correctly.
3. **Given** a lane where an object is never touched, **When** it is shown, **Then** that pad stays
   visibly unlit and unnumbered.
4. **Given** reduced motion is on or the scene type is unknown, **When** the question renders, **Then**
   the child still gets a working plain multiple-choice question with the same options.

---

### User Story 2 - Different mistakes every time, each with its own kind feedback (Priority: P2)

Wrong lanes vary with the question: which object is skipped or doubled changes from question to
question, and the mistakes include stopping early (last object never touched), touching one object
twice, and saying a number without touching an object. Each mistake type has its own short, kind
explanation in English and French shown after a wrong answer.

**Why this priority**: it stops the child answering by pattern and makes wrong answers teach.

**Independent Test**: generate the full bank; wrong options differ in kind and position across
questions, each wrong option maps to a named mistake type, and every type has en and fr feedback.

**Acceptance Scenarios**:

1. **Given** the bank, **When** two questions of the same size are compared, **Then** their wrong
   lanes do not all share the same mistake positions.
2. **Given** a wrong answer of type "stopped early", **When** feedback shows, **Then** the message
   names that mistake (for example, "One apple was not counted") in the active language.
3. **Given** any wrong lane in any question, **Then** exactly one lane is right and no wrong lane is
   also a valid one-to-one counting.

---

### User Story 3 - A real difficulty ladder (Priority: P3)

Level 1 (2-4 objects) uses blatant mistakes; level 2 (5-7) and level 3 (8-10) use subtler ones
(a single double-count or skip mid-row), with at least 4 distinct questions per object count so a
child does not see repeats.

**Why this priority**: improves replay value; the activity already works after Stories 1-2.

**Independent Test**: count distinct questions per size (>= 4) and check mistake subtlety increases
with level.

**Acceptance Scenarios**:

1. **Given** each object count 2 to 10, **When** the bank is built, **Then** it holds at least 4
   distinct questions for that count.
2. **Given** level 1 vs level 3 questions, **When** compared, **Then** level 3 wrong lanes differ
   from the right lane by one object, while level 1 wrong lanes differ visibly more.

### Edge Cases

- 2 objects: a "stopped early" lane touches 1 object and leaves 1; a "doubled" lane touches the
  first object twice. They must still be distinguishable from the right lane.
- 10 objects on a small phone: pads must remain tappable lanes with readable objects (no overflow).
- French prompt and feedback are longer than English; they must not clip.
- Every wrong lane must be genuinely wrong; none may coincide with the right counting.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Each Touch Once question MUST present its options as lanes of object pads, each pad
  showing the object and the number said at that step, instead of a text row.
- **FR-002**: When a lane is hopped, each object MUST light up as it is counted so the link between
  one object and one number is visible; an object never touched MUST stay unlit.
- **FR-003**: The scene MUST support three counting mistakes visibly: an object skipped, an object
  touched twice, and an object left untouched at the end.
- **FR-004**: The question MUST fall back to plain multiple choice (same options, same answer) under
  reduced motion or where the scene is not understood, and remain fully answerable.
- **FR-005**: Wrong options MUST vary in mistake type and position by question; positions MUST NOT be
  fixed across the bank.
- **FR-006**: Each mistake type MUST have its own kind feedback line in English and French.
- **FR-007**: Object counts 2-10 in levels 1 (2-4), 2 (5-7), 3 (8-10) MUST be kept, with at least 4
  distinct questions per count and generation fully deterministic.
- **FR-008**: Exactly one option per question MUST be a correct one-to-one counting.
- **FR-009**: Tap targets (a whole lane) MUST be at least 44px tall and lanes MUST fit the screen
  without horizontal scrolling at 10 objects.
- **FR-010**: Existing activities using the scene (Count in Order) MUST keep rendering and behaving
  identically.

### Key Entities

- **Counting lane**: one option; an ordered row of pads, each an object plus the number said, or an
  untouched object with no number.
- **Mistake type**: skipped, doubled, stopped early, number said with no object; each has feedback.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A child who cannot read digits can still tell, from the pictures alone, which lane
  counted every object once.
- **SC-002**: In every generated question, exactly 1 option is right and 100% of wrong options carry
  a named mistake type with en and fr feedback.
- **SC-003**: The bank has at least 36 distinct questions (4 per count, 9 counts), up from 18.
- **SC-004**: Count in Order shows no visual or behavioural change.
- **SC-005**: A 10-object question is fully usable on a 360px-wide phone.

## Assumptions

- **Deferred to a follow-up (not in this spec):** the "scattered" and "circle" object layouts. The
  frog scene is lane-based (a line), so those layouts need a different scene; the user excluded a new
  scene type. The ladder here is carried by size and mistake subtlety instead.
- Spoken number cues (audio) are out of scope; no audio infrastructure was verified.
- A "number said with no object" mistake is shown as a pad with a number but no lit object.
- Mastery rules are unchanged (per-level correct-in-a-row logic stays as is).
- Scene extension is backward compatible: older apps ignore the new fields and show the plain
  multiple-choice question.
`,m=`﻿# Feature Specification: Preschool & Kindergarten Scene Redesigns (Activity Sweep Batch 1)

**Feature Branch**: \`051-preschool-scene-redesigns\`

**Created**: 2026-10-03

**Status**: In progress — F0 foundation + F7 (pick-group) done (T001-T036); groups F1-F6, cross-cutting tests, ADD activities, blog remain. Owns the 90 sweep rows listed in its table (\`preschool-one-to-one\` belongs to 050). Does not create activities; creation belongs to \`preschool-second-release\` (done).

**Ownership & sequencing (2026-10-07)**: 050 owns \`preschool-one-to-one\` only; this spec owns the 90 sweep rows listed below (one-to-one is not among them) and never creates new activities except the 5 ADDs (T116-T120). Package path note: bank paths below say \`syllabus-content-p\`; 057 T031 renames that package to \`syllabus-content-k\` — land that rename only between 051 groups (never mid-group) and read the path as \`syllabus-content-{p|k}\` after it. 051 keeps pluginIds and competency ids unchanged (T115), which is what lets 057 map saved progress by alias.

**Input**: Activity sweep decisions for all 90 Pre-K and Kindergarten activity rows (85 REDESIGN/TWEAK, 5 ADD) recorded in \`docs/activity-sweep/tracker.md\`; per-activity design briefs in \`docs/activity-sweep/briefs/<pluginId>.md\`. Style reference: Count in Order (specs 049-activity-engine, 050-touch-once-redesign).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - A child does the skill instead of reading about it (Priority: P1)

A 4â€“6 year old opens any Pre-K or Kindergarten activity and sees a scene (objects, rows, ten frames, a week strip, a robot gridâ€¦). They tap, drag, place or build to answer. Text is a short, spoken-friendly supporting prompt, never the task itself.

**Why this priority**: This is the point of the sweep. Today most of these activities are "a few lines of text and buttons", which pre-readers cannot use.

**Independent Test**: Open one redesigned activity (e.g. \`preschool-flash-dots\`) with the prompt text hidden; a child can still understand and complete the task from the scene alone.

**Acceptance Scenarios**:

1. **Given** a redesigned activity, **When** the child opens it, **Then** the primary action is a touch/drag/place action matching the competency and not choosing among text options.
2. **Given** an activity whose scene type is unknown to the engine, **When** it loads, **Then** the plain-text fallback still works.

---

### User Story 2 - Wrong answers teach, right answers celebrate (Priority: P1)

When the child errs, the activity shows a kind, specific explanation tied to the likely misconception (e.g. off-by-one count, spacing mistaken for quantity) and lets them retry; a correct answer triggers the existing celebration.

**Why this priority**: Feedback that teaches is half of the bar every activity is judged against.

**Independent Test**: For one activity, trigger each documented misconception and confirm the matching feedback appears, with no dead end.

**Acceptance Scenarios**:

1. **Given** a documented misconception answer, **When** submitted, **Then** the matching feedback is shown and the child can try again.
2. **Given** a correct answer, **When** submitted, **Then** the celebration shows and the ladder advances per the activity's mastery rule.

---

### User Story 3 - French-speaking children get the same experience (Priority: P1)

Every prompt, feedback line, label, aria text and scene caption exists in English and French. Layouts tolerate roughly 30% longer French text.

**Why this priority**: The product ships en + fr; an English-only redesign would regress French users.

**Independent Test**: Switch locale to French on any redesigned activity; no missing-key fallbacks, no clipped text or buttons.

**Acceptance Scenarios**:

1. **Given** locale fr, **When** any redesigned activity is used end to end, **Then** all user-facing text is French.
2. **Given** the test suite, **When** it runs, **Then** every new key is asserted present in both locales.

---

### User Story 4 - Accessible, calm play for every child (Priority: P2)

Targets are at least 44px, each screen has one primary action, contrast meets AA, scenes have screen-reader labels, and motion is disabled under reduced-motion with a plain fallback.

**Why this priority**: Required quality bar, but layered on top of the scenes themselves.

**Independent Test**: With reduced motion enabled and a screen reader, complete one activity; motion-dependent steps (e.g. flash timing) have a usable alternative.

**Acceptance Scenarios**:

1. **Given** reduced motion is on, **When** an animated scene plays, **Then** animation is skipped or replaced and the task is still completable.
2. **Given** any interactive element, **When** measured, **Then** it is at least 44Ã—44px.

---

### User Story 5 - Enough range and variety to keep learning (Priority: P2)

Each activity reaches every level of its competency range through 3â€“5 difficulty levels, with at least 4 seeded variants per level so children do not meet immediate repeats.

**Why this priority**: Prevents the redesign from narrowing coverage found by the competency audit.

**Independent Test**: For one activity, play through each level; each has â‰¥4 distinct deterministic variants, and the audit's range rows are reachable.

**Acceptance Scenarios**:

1. **Given** an activity's levels, **When** the bank is inspected, **Then** each level has â‰¥4 seeded variants and no randomness source other than seeds.
2. **Given** the activity's competency rows, **When** compared with its levels, **Then** every row is reachable.

---

### User Story 6 - New activities fill uncovered competency rows (Priority: P3)

Five new activities (trace-the-numeral, corners-and-curves, before-now-later, preschool-sort-into-bins, robot-grid-moves) cover reference rows no existing activity reaches (K.NUM.8, K.GEO.3, PK.TIM.2, PK.DAT.1, PK.POS.2).

**Why this priority**: Closes gaps, but builds on the scenes created for the redesigns.

**Independent Test**: Each new activity is discoverable in its grade and passes the same bar as redesigned ones.

**Acceptance Scenarios**:

1. **Given** a new activity, **When** opened, **Then** it meets Stories 1â€“5 for its target rows.

### Edge Cases

- A scene type needed by an activity does not exist yet: a foundational scene task must land first, and every dependent activity is named in it.
- French strings overflow a button or caption: layout must wrap or grow rather than clip.
- Reduced motion with a timed flash (flash-dots) or watch-and-decide scene (still-the-same, holds-more): provide a longer/no-animation alternative that preserves the learning goal.
- A child answers wrongly repeatedly: feedback escalates (reveal the scene, group objects) without blocking progress.
- Several activities share a competency (e.g. K.NUM.11, K.AS.3, K.NUM.14): each keeps a distinct skill and avoids duplicating its sibling.
- Existing saved progress for an activity whose levels change must not break.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Every one of the 90 listed activities MUST be reworked (REDESIGN/TWEAK) or created (ADD) as defined in its brief in \`docs/activity-sweep/briefs/\` (for NEW rows, a brief is written first from the tracker row).
- **FR-002**: The child's primary action MUST match the competency (touch to count, drag to order, place, build, tap) and text MUST NOT carry the task alone.
- **FR-003**: Existing scene types MUST be reused where they fit; any new scene type MUST be its own foundational work item naming the activities that depend on it.
- **FR-004**: Wrong-answer feedback MUST be specific to the documented misconception, kind in tone, and never a dead end; success MUST trigger the celebration.
- **FR-005**: Motion MUST be disabled under reduced motion, with the plain-text fallback retained.
- **FR-006**: Interactive targets MUST be â‰¥44px, one primary action per screen, contrast AA, and every scene MUST have a screen-reader label.
- **FR-007**: Each activity MUST expose its full competency range across 3â€“5 levels with â‰¥4 seeded variants per level and no \`Math.random()\`.
- **FR-008**: Every user-facing string MUST exist in English and French as translation keys, with no text baked into images, and tests MUST assert both locales.
- **FR-009**: Each work item MUST state the repos it touches (\`app\` for scenes/engine, \`subjects/mathematics\` for banks and strings).
- **FR-010**: Each work item MUST be covered by tests for behaviour, level ladder and both locales, and the repo validation scripts MUST pass.
- **FR-011**: The feature is complete only when specs, implementation and blog write-up all exist.

### Key Entities

- **Activity**: a plugin identified by pluginId, with competency reference rows, a decision (REDESIGN/TWEAK/ADD) and a brief.
- **Scene**: the visual play field (existing or newly added type) the activity renders.
- **Difficulty level / variant**: a ladder step and its seeded problem instances.
- **Misconception feedback**: a documented wrong-answer pattern paired with its teaching message.
- **Translation key**: a user-facing string present in en and fr.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 90 of 90 listed activities are redesigned, tweaked or created per their briefs.
- **SC-002**: 100% of user-facing strings in these activities exist in English and French, verified by automated tests.
- **SC-003**: In a play-test, a pre-reader can start and complete the first level of at least 90% of activities without anyone reading the prompt aloud.
- **SC-004**: Every activity offers â‰¥3 levels with â‰¥4 variants each, and every claimed competency row is reachable.
- **SC-005**: All interactive targets measure â‰¥44px and contrast passes AA on every redesigned activity.
- **SC-006**: Every activity with motion remains fully completable with reduced motion on.
- **SC-007**: Validation (lint, typecheck, test, coverage) passes for all touched repos.

## Assumptions

- Scope is only Pre-K and Kindergarten rows (90 of 444 decided rows); Grades 1â€“5 follow in later specs.
- Briefs in \`docs/activity-sweep/briefs/\` are authoritative; agents are not re-run.
- Count in Order's engine scenes are the baseline vocabulary; the plan phase decides which new scene types are shared.
- Delivery is expected in groups by shared scene type, not as one release.
- Spoken number words and audio use the existing audio capability, if any; adding a new audio system is out of scope.
- Existing activity ids stay stable so progress is preserved.

## Work Items

One task per activity. Details (current state, target, ladder, feedback, en+fr strings, acceptance) live in the brief file.

| # | pluginId | Decision | Refs | Objective |
|---|----------|----------|------|-----------|
| 1 | preschool-flash-dots | REDESIGN | PK.NUM.5 | Child recognises 1â€“3 instantly (4â€“5 as stretch) from a brief flash, then picks the numeral. |
| 2 | preschool-same-or-not | REDESIGN | PK.NUM.7 | Child decides "same number or not?" by matching objects one-to-one (or at a glance at small counts), not by reading a sentence. |
| 3 | preschool-bigger-number | REDESIGN | K.NUM.11 | Child connects numeral to quantity when comparing: tap the bigger/smaller numeral, then SEE why (dots/ten-frame, number-line position). |
| 4 | preschool-all-together | REDESIGN | PK.AS.2 | Child physically *combines* two small groups and finds the total by counting all (PK.AS.2), then states it. |
| 5 | preschool-bigger-smaller-same | REDESIGN | K.NUM.11 | Child links numerals to quantity: decides which numeral is greater/smaller/equal by seeing both amounts, then the numeral. |
| 6 | preschool-numeral-twins | TWEAK | PK.NUM.6 | Child tells a numeral from its look-alike twin by sight, with minimal reading, and learns why on a miss. |
| 7 | preschool-show-the-number | TWEAK | K.NUM.7 | Keep the skill (numeral -> quantity) but make the child tap objects in a play field, and widen to 11-20. |
| 8 | preschool-number-hunt | TWEAK | PK.NUM.6, K.NUM.7 | Child connects the numeral shape to its name (and its size), not just shape-matches. |
| 9 | preschool-how-many-altogether | REDESIGN | PK.AS.2 | Child puts two small groups together and finds the total by counting all (PK.AS.2), then picks the total. |
| 10 | preschool-how-many-left | REDESIGN | PK.AS.1 | Child physically *takes away* objects from a small set and finds how many remain by recounting (PK.AS.1), then states it. |
| 11 | preschool-what-comes-next | TWEAK | PK.ALG.1, K.ALG.1 | Child continues the pattern by doing: the pattern shows as a visual row of tiles with an empty slot, and the child fills the slot. |
| 12 | preschool-days-in-order | REDESIGN | K.TIM.2 | Child says/builds the week in order (K.TIM.2) by placing day cards, not by reading a question. |
| 13 | preschool-longer-or-shorter | REDESIGN | PK.MEA.2 | Child taps the longer (or shorter) bar/object directly; learns to align the ends before comparing. |
| 14 | preschool-shape-hunt | TWEAK | PK.GEO.1, K.GEO.1 | Child recognises a named shape whatever its colour, size and orientation, and can tell near-miss shapes apart. |
| 15 | preschool-day-after | REDESIGN | K.TIM.2 | Child places "tomorrow"/"yesterday" on a 7-day week strip and sees order and wrap, doing the skill instead of reading it. |
| 16 | preschool-holds-more | REDESIGN | PK.MEA.2 | Child judges which container holds more by watching/doing a fill: pour water from the small one into the big one. |
| 17 | preschool-is-it-a-rectangle | REDESIGN | PK.GEO.1, K.GEO.1 | Child decides which shapes are rectangles by sorting/tapping drawn shapes in varied size and orientation (K.GEO.1: name rectangle whateve... |
| 18 | preschool-which-picture | TWEAK | PK.AS.1 | Child sees a set, watches/does the take-away, then chooses the picture of what remains. |
| 19 | preschool-where-is-the-ball | REDESIGN | PK.POS.1 | Child hears a position instruction ("Put the cat under the box") and places the toy there, or taps the picture that matches the spoken wo... |
| 20 | preschool-heavy-or-light | TWEAK | PK.MEA.2, PK.MEA.1 | Child judges weight by reasoning about size/material and sees the consequence (balance tips), then names heavy/light. |
| 21 | preschool-how-many-last-tag | REDESIGN | PK.NUM.3 | Child taps objects one by one, hears each number, then answers the "how many" question from the LAST number said (not by re-counting, not... |
| 22 | preschool-ordinal-or-count | REDESIGN | K.NUM.14 | The child tells ordinal position (which one) apart from cardinal count (how many) in one line of things. This is the skill that is distin... |
| 23 | preschool-story-plus-or-minus | REDESIGN | K.AS.2, PK.AS.2 | Child acts out the story with objects and chooses the operation by what happens (objects arrive or leave), not by reading. |
| 24 | preschool-neighbour-houses | REDESIGN | PK.NUM.8 | Child places the missing number on a street of numbered houses by tapping or dragging a number tile, and sees why it belongs there. |
| 25 | preschool-how-many-all-together | REDESIGN | PK.NUM.3 | Child touches each object once while the number word is voiced, then states the total (the last word said). Teaches cardinality, not subi... |
| 26 | preschool-solve-it | REDESIGN | K.AS.2, PK.AS.1, PK.AS.2 | Child acts out a short story with objects (joins or removes), recounts, and states the total (K.AS.2, "using objects or drawings"). |
| 27 | preschool-still-the-same | REDESIGN | K.NUM.4 | Child watches one row being spread, squeezed, or changed, then decides "same number or not?", and confirms by pairing objects one-to-one. |
| 28 | preschool-which-row-has-more | REDESIGN | K.NUM.4 | Child sees two rows of real objects and taps the row with more (or "same"), then proves it by pairing/counting. Conservation: spacing doe... |
| 29 | preschool-empty-basket | REDESIGN | K.NUM.13 | Child sees objects leave the basket one by one and ends at an empty basket, then picks the numeral (0 included). |
| 30 | preschool-two-hands | REDESIGN | K.AS.3 | The child splits 5 (later 6-10) into two hands/groups by moving counters. They see the two parts, and the app says them aloud. |
| 31 | preschool-another-way | REDESIGN | K.AS.3 | Child splits 5 (L3: up to 10) objects into two groups in more than one way and sees both ways recorded (K.AS.3). |
| 32 | preschool-pick-the-right-way | TWEAK | K.NUM.8 | Child recognises the correctly formed numeral vs its mirror image (0-10, then 11-20 digits via 1 reversed and 2 reversed), as a step towa... |
| 33 | NEW:trace-the-numeral | ADD | K.NUM.8 | New activity (brief written during planning from the tracker row). |
| 34 | preschool-hidden-bag | REDESIGN | K.NUM.2 | Child counts on by doing: N counters are visible, the bag opens and counters drop out one at a time, and the child taps the next number w... |
| 35 | preschool-who-is-nth | TWEAK | K.NUM.14 | Child taps the Nth object directly in a visible line, learning that ordinal = position from the start. |
| 36 | preschool-colour-the-nth | REDESIGN | K.NUM.14 | Child taps the object in the Nth position of a row and sees it fill with colour. Uses 1st-5th and "last". |
| 37 | preschool-is-zero-a-number | REDESIGN | K.NUM.13 | Child sees an empty vs non-empty container and acts: tap the one that shows zero; place 0 before 1 on a line. |
| 38 | preschool-quantity-words | REDESIGN | PK.PSR.1 | Child uses quantity words by acting: places, compares and then taps a spoken word, hearing the word in context. |
| 39 | preschool-match-shapes | REDESIGN | PK.GEO.2 | Child matches a shape to an identical one regardless of colour, size and orientation, and completes 3-5-piece inset puzzles by dragging/t... |
| 40 | preschool-routine-order | REDESIGN | PK.TIM.1 | Child puts 3 routine pictures in order using first / next / last by placing cards, not by reading. |
| 41 | preschool-yesterday-today-tomorrow | REDESIGN | K.TIM.1 | Child places yesterday/today/tomorrow on a timeline of real-life pictures and feels the order of time. |
| 42 | preschool-count-the-sides | REDESIGN | K.GEO.3 | Child counts sides by touching each straight side of a drawn shape (touch-once counting), then confirms the total. Also distinguishes str... |
| 43 | preschool-name-the-group | REDESIGN | PK.DAT.1 | The child sees a tray of objects that share a rule and chooses the picture that shows the rule. They do not read. |
| 44 | preschool-what-day-was-it | REDESIGN | K.TIM.1, K.TIM.2 | Child finds yesterday or tomorrow of a given day on a 7-day strip by tapping or dragging, not typing. |
| 45 | preschool-roll-or-stack | REDESIGN | PK.GEO.3 | Child discovers by trying that spheres roll, cubes/boxes stack, cylinders do both (cones roll in a circle, stack only on their base). |
| 46 | preschool-sides-or-corners | REDESIGN | K.GEO.3 | Child tells a side (straight edge) from a corner (point) by touching them, and tells straight edges from curved ones (K.GEO.3). |
| 47 | NEW:corners-and-curves | ADD | K.GEO.3 | New activity (brief written during planning from the tracker row). |
| 48 | preschool-name-the-thing | REDESIGN | K.GEO.2 | Child hears the name of a solid and taps the matching real-looking solid (and, later, sees one and picks among named cards with audio). N... |
| 49 | preschool-solid-or-flat | REDESIGN | K.GEO.2 | The child sorts shapes into "flat" (lies on paper) and "solid" (you can hold it, it rolls or stacks). Uses the PK.GEO.3 intuition: roll/s... |
| 50 | preschool-count-to-thirty | REDESIGN | K.NUM.1 | Child counts a sequence by touching/tapping each step, hearing each number word, and fills the missing step. |
| 51 | preschool-goes-in-the-middle | REDESIGN | PK.MEA.3 | Child puts three objects of clearly different size in order (small -> big) and learns which is "in the middle". |
| 52 | preschool-when-does-it-happen | REDESIGN | PK.TIM.2 | Child places a daily-routine picture into the right part of the sky by doing it, with almost no reading. |
| 53 | NEW:before-now-later | ADD | PK.TIM.2 | New activity (brief written during planning from the tracker row). |
| 54 | preschool-odd-one-out | REDESIGN | PK.DAT.1 | Child finds the item that breaks a single-attribute pattern by tapping it in a visual scene, then sees/hears the rule. |
| 55 | NEW:preschool-sort-into-bins | ADD | PK.DAT.1 | New activity (brief written during planning from the tracker row). |
| 56 | preschool-fill-the-gap | TWEAK | PK.ALG.1, K.ALG.1 | Child completes a repeating pattern by finding the missing piece (PK.ALG.1 / K.ALG.1: continue, correct, name unit). Covered: AB, AAB/ABB... |
| 57 | preschool-robot-says | REDESIGN | PK.POS.2 | Child follows spoken movement words by moving a robot token on a small grid to the target, and sees why a wrong move fails. |
| 58 | NEW:robot-grid-moves | ADD | PK.POS.2 | New activity (brief written during planning from the tracker row). |
| 59 | preschool-name-shapes | TWEAK | PK.GEO.1 | Child recognizes and names circle, square and triangle whatever the colour, size or orientation (PK.GEO.1). |
| 60 | preschool-solid-match | REDESIGN | K.GEO.2 | Child names and recognises cube, sphere, cylinder, cone by seeing the solid and linking it to a real object (K.GEO.2). Keep flat-vs-solid... |
| 61 | preschool-give-n | REDESIGN | PK.NUM.4 | Child hands over exactly n objects from a pile (the real PK.NUM.4 action: count out a quantity, up to 5). |
| 62 | preschool-money-play | REDESIGN | K.MON.1 | Child recognises coins and notes, knows money buys things, and pays for an item with coins (role-play). |
| 63 | preschool-what-to-measure | REDESIGN | K.MEA.1 | The child sees an object and chooses the measuring action (stretch a ruler/ribbon, hold on a balance, pour into a cup, stand it up to com... |
| 64 | preschool-number-sentences | REDESIGN | K.AS.7 | Child builds the number sentence from a scene by placing symbol tiles, linking +, - and = to what happens to the objects. |
| 65 | preschool-fair-shares | REDESIGN | K.MD.1 | Child physically deals items to children, then judges a ready-made share as fair or not. |
| 66 | preschool-count-backward | REDESIGN | K.NUM.3 | Child counts down aloud-by-touch: taps each step of a countdown in reverse order and launches the rocket at 0. |
| 67 | preschool-doubles | REDESIGN | K.AS.6 | Child discovers that a double is two equal groups: builds both sides, sees the match, recalls the total. Same competency/range (TWEAK-siz... |
| 68 | preschool-how-long | REDESIGN | K.TIM.3 | Child feels duration: compares two activities by watching them "run" side by side, then taps the one that takes longer (or shorter). |
| 69 | preschool-make-ten | REDESIGN | K.AS.4 | Child fills a ten frame to exactly 10 and discovers/states the partner for any 1-9. |
| 70 | preschool-measuring-tools | REDESIGN | K.MEA.2 | Child chooses the right way to compare (line up / balance / pour), then SEES the result and reads it off the picture. |
| 71 | preschool-ten-frame | REDESIGN | K.PV.1 | The child shows a number on a ten frame by tapping cells, then says how many more make 10. Keep numbers 0-10. |
| 72 | preschool-pattern-translate | REDESIGN | K.ALG.2 | Child re-creates the SAME pattern in a different form (colours/sounds/movements/animals) and sees the shared rule (AB, AAB, ABB, ABC). |
| 73 | preschool-one-more-less | REDESIGN | K.NUM.9 | Child adds or removes exactly one object and sees the number change, then answers the numeral without recounting. |
| 74 | preschool-pairs | REDESIGN | K.ALG.3 | The child pairs objects up by hand (socks, mittens, shoes) and sees whether one is left over. Then they predict which numbers always pair... |
| 75 | preschool-take-n | REDESIGN | K.NUM.5 | Child takes exactly n objects from a larger pile into a basket (count out to 20), stopping at n. |
| 76 | preschool-order-objects | REDESIGN | PK.MEA.3, K.MEA.3 | Child physically orders 3-5 objects by length or weight by dragging/tapping into slots, seeing real size. |
| 77 | preschool-facts-within-five | REDESIGN | K.AS.5 | Recall number facts within 5 quickly, with the picture of the story available as a safety net and fading away as fluency grows. |
| 78 | preschool-act-out-add-take | REDESIGN | K.AS.1 | Child physically adds objects to, or takes objects from, a small set, and says which action they did (K.AS.1), no equation. |
| 79 | preschool-number-track | REDESIGN | K.NUM.12 | Child puts numeral cards 0-10 in order on a track and finds the missing one (K.NUM.12: order and missing-number). Covered now: missing on... |
| 80 | preschool-compare-groups | REDESIGN | K.NUM.10 | Child matches two groups one-to-one and says which has more, fewer, or the same, up to 10. |
| 81 | preschool-teen-numbers | TWEAK | K.PV.2 | Same skill, shown as real ten frames: child sees a full frame plus a second partial frame and says "ten and k". |
| 82 | preschool-enough-for-all | REDESIGN | K.PSR.2 | Child matches items to children one-to-one, sees any child left without (or item left over), then fixes it by adding the missing items. |
| 83 | preschool-picture-graph | REDESIGN | K.DAT.2 | Child builds a simple object graph from a scattered set, then says which column has more/fewer. |
| 84 | preschool-estimate | REDESIGN | K.PSR.3 | Child commits to a guess, then counts to check, then sees how close they were (estimate then count, "about 10"). |
| 85 | preschool-sort-and-count | REDESIGN | K.DAT.1 | Child physically sorts a mixed pile into labelled bins, counts each bin, then orders bins by count. |
| 86 | preschool-copy-build | REDESIGN | K.POS.3 | Child places coloured tiles on an empty grid to copy a visible model. |
| 87 | preschool-explain-answer | REDESIGN | K.PSR.1 | Child shows how they know by doing the justifying action (count, line up, repeat), then picks the matching spoken explanation icon. |
| 88 | preschool-bigger-shape | REDESIGN | K.GEO.4 | Child physically assembles pieces to fill an outline (drag or tap-to-place with snap), and sees the big shape appear. |
| 89 | preschool-shapes-around | REDESIGN | K.GEO.5 | Child looks at a familiar scene (room, kitchen, street) and TAPS the objects that have a named shape, then (L3) names solids by matching. |
| 90 | preschool-routes | REDESIGN | K.POS.2 | Child moves the robot along a short route by doing it: tap or drag steps, turns and arrows. They then build a route to a goal (give direc... |
`,h=`# Feature Specification: Detailed syllabus migration (K–G6)

**Feature Branch**: none — work lands on \`main\` (project rule)

**Created**: 2026-10-05

**Status**: In progress — US1 (dataset + syllabus render) built; remaining: validate T025, US2 activity list, progress alias migration, regrade, constitution, blog. Supersedes ".P–G5 competency ids" once T031-T036 land.

**Sequencing note (2026-10-07)**: Phase 5 (T031 package rename \`syllabus-content-p\` -> \`-k\`) must not run mid-group of \`051-preschool-scene-redesigns\`; do it between 051 groups. T033 here owns the retirement of \`masterySignals.ts\` (closes 032 T032). Do Phase 4 (activity list, T026-T030) first: it needs no rename and is the SEO/learning-visible part.

**Input**: Migrate the Mathematics subject and the app's syllabus pages to the new detailed syllabus in
\`docs/syllabus-detailed/\` (16 topics × K–G6, 804 skills, 2–3 activities each). Scope chosen by the owner:
the syllabus view **and** the competency model. Proposed activities are shown as "planned".

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse the new syllabus by grade and topic (Priority: P1)

A parent opens the Mathematics syllabus and sees levels K, G1 … G6, each organised into the 16 topics, each topic
listing its skills (about 10 per topic per grade where content exists) with a short title and a one-sentence
"what the child masters", in English or French.

**Why this priority**: it is the visible result of the whole syllabus rework; without it nothing else is seen.

**Independent Test**: open the syllabus for each level in both languages and check every topic/skill of the
detailed syllabus appears with its title and description; no old P / G1–G5 rows remain.

**Acceptance Scenarios**:

1. **Given** the syllabus page, **When** the parent picks G3, **Then** they see the G3 topics in syllabus order, each with its skills.
2. **Given** a topic with no content in a level (e.g. Chance at K, Time at G6), **When** the parent opens that level, **Then** the topic is not shown (no empty section).
3. **Given** French is selected, **When** any level is shown, **Then** every title, description and activity line is in French (no English fallback text).

---

### User Story 2 - See each skill's activities, built and planned (Priority: P1)

For each skill the parent sees its 2–3 activities. Built activities are playable and show their redesign status
where it matters; proposed activities are shown greyed as "planned / coming soon" with a one-line idea.

**Why this priority**: it tells families what exists today and what is coming; the planned entries are the product roadmap.

**Independent Test**: for a sample of skills (one per topic and level) compare the activities shown with the
syllabus file; built ones open, planned ones are visibly inactive and cannot be started.

**Acceptance Scenarios**:

1. **Given** a skill with a built activity, **When** the parent selects it, **Then** it opens as it does today.
2. **Given** a skill whose activities are all planned, **When** shown, **Then** it displays "coming soon" entries and no playable item.
3. **Given** an activity reused by another skill, **When** shown under both, **Then** it opens the same activity and is not counted twice in progress.

---

### User Story 3 - Progress follows the new skills (Priority: P1)

A child's existing mastery is kept. Progress, "next up" suggestions and report cards are computed over the new
skills, so what a child already mastered still counts under its new skill.

**Why this priority**: moving the skill structure must not wipe children's progress or break prerequisites.

**Independent Test**: take saved progress from before the migration, open the app after it, and check each
previously mastered activity credits the skill(s) the syllabus maps it to; no progress is lost or invented.

**Acceptance Scenarios**:

1. **Given** a profile with progress on an old skill, **When** the app first runs after migration, **Then** that progress appears on the mapped new skill(s).
2. **Given** a skill with prerequisites, **When** the child works through a topic, **Then** suggestions respect the new prerequisites and never ask for a skill from a later level as a gate.
3. **Given** a skill backed only by planned activities, **When** progress is computed, **Then** it shows "not started / no activities yet" and does not block anything.

---

### User Story 4 - Grade placement matches the syllabus (Priority: P2)

Existing activities show under the level the syllabus assigns them, not the level they were originally built for
(the syllabus flags many activities as needing re-grading).

**Why this priority**: otherwise kids see activities in the wrong level; but it is invisible if P1 is right, hence P2.

**Independent Test**: for each activity flagged for re-grading, check it appears under its new level and not the old one.

**Acceptance Scenarios**:

1. **Given** an activity built for G4 that the syllabus places in G3, **When** the parent views G3, **Then** it appears there and not under G4 (except as an explicit reuse).

---

### Edge Cases

- Old links, bookmarks and saved views that point to P or to an old skill still land somewhere sensible (the mapped new skill or level K), not a missing page.
- A skill kept as a gap by the syllabus numbering (e.g. a removed skill id) never shows an empty row.
- An activity listed as primary in one skill and reused in another appears in both lists but is one activity for progress.
- A level with introduce-only ("explore") skills marks them as non-gating; they never block progress.
- Retired reference rows (e.g. profit and loss) do not appear anywhere.
- Money skills stay arithmetic with currency; no finance wording appears.
- Very long descriptions (French) do not overflow the row on a phone-width screen.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The syllabus MUST use levels K, G1, G2, G3, G4, G5, G6 (K replaces the old P level; G6 is new and marked a non-gating bridge).
- **FR-002**: Each level MUST group skills under the 16 topics (Number sense, Place value, Operations, Mental fluency, Number theory, Fractions, Decimals/percent/ratio, Patterns & algebra, Measurement, Time, Money, Shapes & angles, Position & movement, Data, Chance, Problem solving), omitting topics with no skills in that level.
- **FR-003**: The syllabus MUST contain exactly the 804 skills of \`docs/syllabus-detailed/\` with their ids (e.g. G3-OP-1), in the files' teaching order.
- **FR-004**: Every skill MUST show a short title (≤ 60 characters) and a one-sentence description of what the child masters, in English and French.
- **FR-005**: Every skill MUST show its 2–3 activities; each is either **built** (playable) or **planned** (greyed, "coming soon", with a one-line idea in the current language).
- **FR-006**: An activity listed under several skills MUST be a single activity (same id, same progress); the syllabus marks one skill as its primary home and the others as reuse.
- **FR-007**: Built activities MUST appear under the level the syllabus assigns them, with the grade the activity was originally built for no longer deciding placement.
- **FR-008**: Each skill MUST carry its reference-row ids and, where present, its "introduce-only / explore" and "bridge" labels; labelled skills MUST NOT gate progress.
- **FR-009**: The competency model MUST be re-wired to the 804 skills: identifiers, links from each skill to its activities, and prerequisites (soft, never from a later level), replacing the P–G5 competencies.
- **FR-010**: Existing saved progress MUST be migrated so every previously earned mastery credits the new skill(s) the syllabus maps its activity to; nothing is lost, nothing new is credited.
- **FR-011**: Progress and suggestions MUST treat a skill with only planned activities as "no activities yet": never blocking, never counted as failed.
- **FR-012**: Old links to P or to old skills MUST resolve to the mapped new skill or to level K.
- **FR-013**: All user-visible strings added or changed (titles, descriptions, planned-activity ideas, topic and level names, "coming soon") MUST ship in English and French together; the ~1,230 planned-activity ideas are included.
- **FR-014**: No new activity is implemented by this feature; planned activities stay planned and cannot be started.
- **FR-015**: A check MUST fail the build if a syllabus skill lacks a title or description in either language, has fewer than 2 activities, or an activity id used as built has no playable implementation.
- **FR-016**: Retired reference rows MUST NOT appear; Money content is currency arithmetic only.

### Key Entities

- **Level**: K, G1…G6 with age band, a short intro and a gating flag (G6 non-gating).
- **Topic**: one of the 16, with code, name (en/fr), group (Numbers / Other).
- **Skill**: id, level, topic, order, title, description (en/fr), reference-row ids, label (introduce-only / bridge), prerequisites, list of activity links.
- **Activity link**: skill → activity, role (primary / reuse), status (built / planned), sweep decision (keep / tweak / redesign) for built ones, re-grade flag, idea text (en/fr) for planned ones.
- **Mastery record**: a child's saved progress per activity and per skill, migrated by an old-id → new-id mapping.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of the 804 skills and 16 topics are visible in the syllabus in both languages, with no missing or English-only text in French.
- **SC-002**: A parent can find any skill's activities in two taps from the syllabus home and tell built from planned without reading instructions.
- **SC-003**: 0 children lose progress: for a representative set of saved profiles, every previously mastered activity still credits at least one new skill after migration.
- **SC-004**: 100% of the 417 existing activities mapped in the syllabus appear under their assigned level; none are lost or duplicated in counts.
- **SC-005**: No planned activity can be started, and no skill is blocked because it has only planned activities.
- **SC-006**: Opening any old P or old-skill link reaches a valid page 100% of the time.
- **SC-007**: The full automated validation (lint, typecheck, tests, coverage) passes, including the new completeness check of FR-015.

## Assumptions

- The detailed syllabus (\`docs/syllabus-detailed/\`, 2026-10-05) is the accepted source of truth; this feature does not re-decide skill wording or grade placement. Open points flagged in it (e.g. thirds in G1) are carried as written.
- "The website" means the Mathematics subject plus the app pages that render the syllabus, competencies and progress.
- French text for 804 skills and ~1,230 planned ideas is drafted as part of this feature and reviewed by the owner.
- Activities are not translated by this feature beyond planned-idea lines; built activities keep their current names.
- Prerequisites follow the syllabus's teaching order within a topic, plus any hard prerequisites already in the current model; the soft-prerequisite rule from the constitution still applies.
- The migration runs once on first launch after upgrade and is idempotent.
- Work is delivered on \`main\` in phases (data and model first, then pages), and a blog write-up completes the feature.
- Not in scope: implementing planned activities, changing the mastery scoring formula, non-Mathematics subjects.
`,g=`# Feature Specification: AdSense Compliance

**Feature Branch**: n/a (work lands on main)

**Created**: 2026-10-06

**Status**: Draft (deep analysis 2026-10-06 — see [research.md](research.md))

**Input**: User description: "Make the site acceptable to Google AdSense after rejection for 'ads on screens without publisher content'. Add missing trust pages, add substantial original parent-facing content, decide child-directed/consent handling, verify crawlability, and rebuild the distributed output."

## Background

AdSense rejected the site because ads could appear on screens with no or little publisher content. A first corrective pass exists in the app working tree (uncommitted): the site-wide ad loader was removed, ads render only below a blog post above a word threshold, and ads were removed from hub/list/parent screens.

Analysis (research.md) found that this pass is incomplete and partly wrong:

1. **Production serves no publisher content at all.** The live site still loads ads on every page, and the blog, docs and maths content the pages fetch return "not found" in production, so every content screen the reviewer saw was empty. The sitemap lists ~4,200 pages and zero blog posts.
2. **The word-count gate counts the wrong thing** (it does not count words), and counts markup rather than readable text.
3. **The child-directed tag was changed to a non-documented, deprecated form**; ads would go out untagged. The previous form matched Google's current guidance.
4. **The blog is a development diary in English only**, served unchanged under French addresses; four posts are under 300 words.
5. **The site is dominated by thousands of near-empty generated pages** (reference-only subjects, internal specification documents), a site-level "low value content" risk.
6. **No Privacy, About or Contact page and no footer exist**; an analytics tag runs on every screen, including children's, without consent.

A child-directed site is eligible for AdSense, but only for contextual (non-personalised) ads, with consent tooling in Europe and legal limits on advertising to children in some regions (notably Quebec). Whether to run ads at all is an owner decision (Q1).

## Clarifications

### Session 2026-10-06

- Q: Monetisation model (ads or not, and where)? → A: Contextual, child-tagged, non-personalised AdSense ads on parent/teacher articles and on the kids' syllabus and activity-list screens, never inside an activity; inside activities a house banner ("About this site" plus a donation request) replaces ads; consent tooling in Europe and an owner kill-switch.

- Q: Publisher identity shown publicly? → A: The project name "learnCoreSkills" (country/region and contact address still to be supplied).
- Q: Fate of thin generated pages? → A: Add real content to them so they stop being low quality; pages still under the threshold in the meantime are not indexed.

### Open (owner decision required) — Q2 and Q4 deferred: implement with configurable placeholders, owner fills in later; the live resubmission (checklist item 6) is blocked until both are real values

- **Q2**: [NEEDS CLARIFICATION: Publisher is shown as "learnCoreSkills" (decided). Still needed: country/region and a public contact address (a dedicated address or contact form) for the About, Contact and Privacy pages. The account email must not be published without explicit confirmation.]
- **Q4**: [NEEDS CLARIFICATION: Where do donations go (e.g. Ko-fi, GitHub Sponsors, Stripe link, other)? Needed for the house banner.]

### Resolved by default (owner may override)

- Ads, if enabled, are tagged for child treatment on every request regardless of page, since the product as a whole is directed at children.
- Thin-page enrichment must be genuinely per-page (what the competency means, example tasks, common mistakes, links to activities), owner-sampled for quality; templated filler repeated across thousands of pages would itself count as low-value content and is not acceptable.
- Internal specification documents are not enriched; they stay out of the sitemap and are marked not-for-indexing (or removed from the public site).
- Enrichment is phased: priority subjects first; every page under the threshold is excluded from the sitemap and not indexed until it qualifies.
- Ad-eligible list/syllabus screens must meet the same readable-text threshold as articles (a bare list of links is exactly what AdSense rejected); they get an introductory text block per language to qualify.
- The house banner (About + donation request) is non-intrusive, never blocks play, and is shown inside activities and on any child screen where ads are not shown.
- Donation destination is not yet chosen (Q4); it is a single configuration value, and the banner stays hidden while the value is empty.
- Country/region and public contact address (Q2) are single configuration values with clearly marked placeholders; a build for production MUST fail or warn loudly while a placeholder remains.
- Articles are drafted with AI assistance and must be reviewed, fact-checked against the competency reference, and edited by the owner before publication; mass-produced unreviewed text is not acceptable.
- Existing development-diary posts remain, but are labelled as project news and are not counted toward the article target.

## User Scenarios & Testing *(mandatory)*

### User Story 0 - Production actually serves the content (Priority: P0, blocker)

A reviewer or parent opening any article, document or activity on the live site sees its content, and the sitemap lists every article.

**Why this priority**: The live site currently fails to load its blog, docs and maths content; no other fix matters until it does.

**Independent Test**: Fetch the live article index, three article pages and the sitemap; each returns content and the sitemap contains every published article.

**Acceptance Scenarios**:

1. **Given** the live site, **When** the article index and any article are requested, **Then** they load successfully and show their text.
2. **Given** the live sitemap, **When** read, **Then** it lists every published article in its own language.
3. **Given** any content publish (app, blog, docs, subject), **When** it completes, **Then** an automated check fails loudly if article or subject content is unreachable.

---

### User Story 1 - Reviewer finds a credible, transparent site (Priority: P1)

An AdSense reviewer (and a parent) looks for who runs the site, how to contact them, and how personal data and ads are handled. Privacy, About and Contact pages exist in English and French, are reachable from every page, and are readable without running scripts.

**Why this priority**: AdSense requires a privacy policy and expects clear ownership; their absence is a standalone rejection reason.

**Independent Test**: From any page (home, article, activity, parent area, 404), follow the footer links to Privacy, About and Contact in both languages; each shows real, complete text.

**Acceptance Scenarios**:

1. **Given** any page in either language, **When** the visitor looks at the footer, **Then** links to Privacy, About and Contact are present and lead to pages in the current language.
2. **Given** the Privacy page, **When** read, **Then** it states what data is stored, that progress stays on the device unless an account is used, which third parties are involved (advertising, analytics, fonts, hosting), how cookies/identifiers are used and how to refuse them, that ads (if any) are non-personalised and limited to parent-facing articles, how children's data is treated, retention, and how to request deletion.
3. **Given** the Contact page, **When** opened, **Then** it gives a working way to reach the publisher.
4. **Given** the three pages, **When** fetched without script execution, **Then** the full text is present in the response.

---

### User Story 2 - Every ad-eligible page has real publisher content (Priority: P1)

The site contains enough substantial, original, parent-facing articles in both languages that the site as a whole and every ad-eligible page carry genuine value: practical guidance for parents and teachers on helping children learn maths.

**Why this priority**: "Low value / no publisher content" is the core rejection reason.

**Independent Test**: List articles per language; at least 12 parent-facing articles meet length, originality and review requirements in each.

**Acceptance Scenarios**:

1. **Given** the article index, **When** reviewed, **Then** at least 12 parent-facing articles exist per language, each at least 800 words of readable text, visibly separated from project-news posts.
2. **Given** each article, **When** read, **Then** it is original, grade-aware (states the grade band and ages), accurate against the competency reference, links to relevant in-app activities, and has a title, date, author line and summary.
3. **Given** a French reader, **When** opening an article, **Then** the French article is natively written and equivalent in value; the English article is never shown under a French address.
4. **Given** an article only exists in one language, **When** the other language is selected, **Then** the visitor is told so and offered the existing version; no duplicate page is published under the other language's address.
5. **Given** any article under the ad threshold, **When** opened, **Then** no ad appears.

---

### User Story 3 - Ads only on content screens, never inside activities (Priority: P1)

Ads appear only below substantial content: parent/teacher articles and the kids' syllabus and activity-list screens (with their intro text). All other screens, including every activity, never show an ad, and no ad technology can place ads elsewhere after the visitor navigates. Inside activities (and wherever ads are absent on child screens) a house banner with an About link and donation request is shown instead.

**Why this priority**: Directly addresses the stated policy violation.

**Independent Test**: Visit every route type, first directly and then by navigating to it from an eligible page, and confirm ads appear only on eligible types and never inside an activity; confirm exactly one ad placement after the content on eligible pages.

**Acceptance Scenarios**:

1. **Given** any ineligible route (including any activity) loaded directly, **When** loaded, **Then** the ad script is not requested and no ad container exists.
2. **Given** a visitor who viewed an eligible page, **When** they navigate within the site to an ineligible screen, **Then** no ad (including automatically placed, anchored or full-screen formats) appears there.
3. **Given** an eligible page (article or syllabus/activity list), **When** loaded, **Then** one ad appears below the content only, labelled "Advertisement"/"Publicité", clearly separated, never above the fold or next to navigation or activity controls.
4. **Given** a page that is loading, failed to load, or whose readable text is under the threshold, **When** displayed, **Then** no ad is shown.
5. **Given** a visitor inside an activity, **When** viewing it, **Then** a non-intrusive house banner (About link, donation request) may appear, never blocks play, and is dismissible.

---

### User Story 4 - Child-directed ads and consent handled correctly (Priority: P2)

Ads are handled lawfully for a children's product: every ad request carries the child treatment signal using Google's current mechanism, visitors in regions requiring consent are asked before any non-essential identifiers are used, and the owner can switch all ads off.

**Why this priority**: Legally and financially significant; blocks the final Privacy text.

**Independent Test**: With ads on, inspect ad requests for the child treatment signal; from an EEA/UK/CH location, confirm a certified consent message appears before ad or analytics identifiers are set; with the kill-switch off, no ad code loads anywhere.

**Acceptance Scenarios**:

1. **Given** a visitor in the EEA, UK or Switzerland, **When** first visiting any page, **Then** a certified consent message is shown before non-essential identifiers (ads or analytics) are used, and the choice is remembered and can be changed from the footer.
2. **Given** any ad request, **When** sent, **Then** it carries the child treatment signal in the form Google currently documents.
3. **Given** the owner switches ads off, **When** any page loads, **Then** no ad script, container, or placeholder remains.

---

### User Story 5 - Site quality and crawlability verified before resubmission (Priority: P2)

Before resubmitting, the publisher runs the resubmission checklist proving that content is live, thin pages are handled, trust pages exist, ad placement is correct and the deployed output matches the corrected code.

**Why this priority**: Prevents resubmitting with a stale build or broken content, which wastes a review cycle (the previous review saw a stale, content-less deployment).

**Independent Test**: Run the checklist against the live site after deployment; every item passes and results are recorded.

**Acceptance Scenarios**:

1. **Given** the live site, **When** inspected, **Then** the publisher identification file is correct and crawl directives do not block content or the ad crawler.
2. **Given** the sitemap, **When** read, **Then** it lists all articles and the Privacy, About and Contact pages in their languages, and lists a generated page only if it meets the content threshold; thin pages are excluded and marked not-for-indexing.
3. **Given** article and legal pages fetched without script execution, **When** read, **Then** the main text is present.
4. **Given** the live site, **When** searched, **Then** no site-wide ad script remains.

---

### Edge Cases

- Article edited below the threshold: ad suppressed automatically.
- Article mostly code, tables or links: only readable prose counts toward the threshold.
- Article text loads late or fails: no ad during loading or error states.
- Visitor navigates from an article to an activity: no ad follows them (no persistent or automatic formats).
- Visitor language differs from article language: legal pages and footer follow the selected language; missing translations are announced, never silently substituted.
- Visitor blocks ads or declines consent: no empty gap or broken placeholder.
- Ad service unavailable: article fully usable.
- Activities and the parent area: never ads, regardless of any setting. Syllabus and activity-list screens: ads only above the text threshold.
- Donation destination not yet set: banner hidden rather than linking to a placeholder in production.
- Content service down at build time: the build must not silently publish a sitemap with zero articles.
- 404 and redirect pages: never ad-eligible, never in the sitemap.

## Requirements *(mandatory)*

### Functional Requirements

**Content availability**

- **FR-001**: Published articles, docs and subject content MUST be reachable on the live site; every content publish MUST be followed by an automated reachability check that fails visibly.
- **FR-002**: Building the site MUST fail (or clearly warn and block deploy) when article content cannot be read, instead of producing a sitemap with zero articles.

**Trust pages**

- **FR-003**: The site MUST provide Privacy, About and Contact pages in English and French, linked from a footer present on every page, including the 404 page.
- **FR-004**: The Privacy page MUST describe data stored, accounts, every third party (advertising, analytics, fonts, hosting), cookies/identifiers and how to refuse them, children's data handling, ad treatment, retention, and how to request deletion.
- **FR-005**: The Contact page MUST provide a working contact method for the publisher (per Q2).
- **FR-006**: The About page MUST explain who runs the site (per Q2), its purpose, its educational approach, and how articles are written and reviewed.

**Articles**

- **FR-007**: The site MUST contain at least 12 original parent/teacher-facing articles per language, each at least 800 words of readable text, drawn from the initial article set below.
- **FR-008**: Each article MUST be original, owner-reviewed, accurate against the competency reference, free of placeholder text, state its grade band, link to relevant in-app activities, and be authored for its language.
- **FR-009**: Articles MUST carry a language; a page under a language's address MUST show content in that language, and language alternates MUST only link true counterparts.
- **FR-010**: Development-diary posts MUST be presented as project news, distinct from parent articles, and MUST NOT count toward FR-007.

**Ad placement**

- **FR-011**: Ads MUST render only below content whose readable prose (excluding markup, code, link targets) meets the minimum word threshold, on eligible screens only: parent/teacher articles and the kids' syllabus and activity-list screens.
- **FR-012**: Ads and the ad script MUST NOT load on splash, loading, 404/error, redirect, home, activities (inside an activity), settings, parent area, docs, project-news or legal/contact pages.
- **FR-013**: No automatically placed, anchored or full-screen ad formats may be used; an ad shown on an article MUST NOT persist or reappear on screens reached by in-site navigation.
- **FR-014**: The ad placement MUST be labelled in the page language and separated from content and navigation so accidental clicks are unlikely; at most one ad per article.
- **FR-015**: The owner MUST be able to disable all ads with a single setting, leaving no residual ad code or empty space.

**Children and consent**

- **FR-016**: Every ad request MUST carry the child treatment signal using the mechanism Google currently documents, verified by an automated test.
- **FR-017**: In regions requiring consent (EEA, UK, Switzerland), a Google-certified consent message MUST be shown and its choice respected before any non-essential identifier is used.
- **FR-018**: Ads MUST never appear inside an activity or any play/answer screen. On child-facing syllabus and list screens they are limited to contextual, non-personalised, child-tagged ads (FR-016), consistent with Quebec's limits on advertising to children being reviewed in the Privacy text.
- **FR-026**: Inside activities and on child screens where ads are not shown, the site MAY show a non-intrusive, dismissible house banner linking to About and a donation page (Q4), in the page language, never blocking play and absent when no donation destination is configured.
- **FR-019**: Analytics or tag-management scripts MUST be disclosed in the Privacy page and MUST respect the consent choice where consent is required.

**Crawlability and release**

- **FR-020**: The sitemap MUST list all articles and legal pages in their languages and MUST exclude thin pages (below the content threshold), internal specification documents, redirects and 404s; crawl directives MUST NOT block content or the ad crawler.
- **FR-027**: Generated subject and syllabus pages MUST be enriched with original, per-page content (meaning of the competency, example tasks, common mistakes, activity links) until they meet the threshold; thin pages are not indexed until then, and the build MUST report how many remain thin.
- **FR-021**: Article and legal page text MUST be present in the delivered page without script execution.
- **FR-022**: The publisher identification file MUST be present and correct in the deployed output; no stray duplicate copies.
- **FR-023**: The live site MUST be rebuilt and redeployed from the corrected sources and checked against the resubmission checklist before resubmission.
- **FR-024**: Every new user-facing string MUST ship in English and French together.
- **FR-025**: A blog post MUST document the work, per the specs → app → blog completion rule.

### Initial article set

Grade bands follow \`docs/product/MATH-COMPETENCY-REFERENCE.md\` (PK 3–5, K 5–6, G1–G5 ages 6–11); topic codes are that file's. Pick at least 12 per language; each title is rewritten natively in French, not translated literally.

| # | Working title (EN) | Band | Topic |
|---|---|---|---|
| 1 | Real counting vs reciting numbers: what to look for before school | PK–K | NUM |
| 2 | Seeing "five" at a glance: why subitising matters | PK–K | NUM |
| 3 | Number bonds to 10 and 20 with everyday objects | K–G1 | AS |
| 4 | Why 34 is not "3 and 4": helping children understand place value | G1–G2 | PV |
| 5 | Beyond finger counting: mental addition and subtraction strategies | G1–G3 | MM, AS |
| 6 | Times tables: memorising and understanding, in that order? | G2–G4 | MD |
| 7 | Fractions start with fair sharing | G1–G3 | FR |
| 8 | Comparing fractions without a rule to memorise | G3–G5 | FR |
| 9 | Telling the time on an analogue clock, step by step | G1–G3 | TIM |
| 10 | Coins, change and shopping maths at home | G1–G4 | MON |
| 11 | Measuring in the kitchen and the garden | K–G3 | MEA |
| 12 | Shapes, position and direction words for young children | PK–G2 | GEO, POS |
| 13 | Reading the maths in word problems | G2–G5 | PSR |
| 14 | Decimals and percentages through real prices | G4–G5 | DEC |
| 15 | Bar charts and pictograms you can make together | G1–G4 | DAT |
| 16 | Patterns: the first step into algebra | PK–G3 | ALG |
| 17 | Short, frequent practice: how mastery learning works at home | All | — |
| 18 | Grade 3, Year 4, CE2: comparing school years across countries | All | — |

### Key Entities

- **Article**: Long-form, dated, single-language, owner-reviewed piece with title, summary, grade band, body and activity links; may have a counterpart in the other language; ad-eligible at or above the threshold.
- **Project-news post**: Development-diary entry; never ad-eligible, not counted as an article.
- **Legal page**: Privacy, About or Contact; per-language, never ad-eligible.
- **Ad policy setting**: Owner-controlled values: ads on/off, child treatment (always on), consent requirement by region.
- **Consent record**: Visitor's remembered choice for ads and analytics identifiers.
- **Thin page**: Generated page below the content threshold; excluded from the sitemap and indexing until enriched (FR-027).
- **Resubmission checklist**: Verification items with recorded pass/fail and date.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of ineligible route types (including every activity) show zero ad containers and make zero ad-script requests, both on direct load and after in-site navigation from an eligible page.
- **SC-002**: At least 12 parent-facing articles of 800+ readable words exist in each language on the live site before resubmission.
- **SC-003**: Privacy, About and Contact are reachable in one click from every page in both languages.
- **SC-004**: 100% of resubmission checklist items pass on the live site.
- **SC-005**: Turning ads off removes all ad-related requests and visible placeholders on 100% of pages.
- **SC-006**: 100% of sitemap article URLs return their text without script execution; 0 sitemap URLs are thin pages (below the threshold).
- **SC-007**: AdSense accepts the resubmitted site (or, if rejected, the stated reason no longer concerns publisher content, placement, navigation or missing pages).

### Resubmission checklist

Run on the live site after deployment; record pass/fail and date in this feature folder.

1. Article index and every article load on the live site (no "unavailable" state); sitemap lists every article.
2. Home, inside any activity, parent, docs, 404 and legal pages: no ad script request, no ad container (direct load and after navigating from an eligible page).
3. Eligible article and syllabus/activity-list screen: exactly one labelled ad below the content; short page: none.
4. Ad requests carry the child treatment signal in Google's current form (if ads on).
5. EEA/UK/CH visit shows the certified consent message before identifiers are set (if ads on).
6. Footer links to Privacy, About, Contact work on every page type in both languages; contact method answered.
7. At least 12 reviewed articles per language, 800+ words, no duplicates across language addresses.
8. Article and legal text present with scripts disabled.
9. \`ads.txt\` correct at the site root; robots allows all content and the ad crawler; sitemap excludes thin pages; remaining-thin count recorded.
10. Search for the site-wide ad script in the deployed output returns nothing.
11. AdSense account (manual, owner): Auto ads and overlay formats off; site-level child-directed setting recorded; Privacy & messaging consent message published (if ads on); site ownership verified.
12. Search Console: sitemap resubmitted, no indexing errors on articles; then request AdSense review.

## Assumptions

- The minimum word threshold for showing an ad stays at 300 readable words; new articles target 800+.
- A child-directed site is eligible for AdSense but limited to contextual, non-personalised ads; expected revenue is low (research.md §4–5).
- Articles are drafted with AI assistance using the competency reference and are reviewed and edited by the owner before publication.
- The existing blog publishing and prerender mechanisms are reused and repaired; no new hosting is introduced.
- The first-fix changes in the app working tree are corrected (word counting, child treatment signal) and shipped with this feature.
- The audience includes Quebec and Europe, so Quebec's ban on advertising directed at under-13s and European consent rules apply.
- Hosting-level and account-level items (domain verification, AdSense settings, consent message, Search Console) are done manually by the owner and tracked in the checklist.
- Technical findings and sources are recorded in [research.md](research.md).
`,_="# Feature Specification: Maternelle (K) \"Sens du nombre\" — complete skill set + revision/default-pass scoring\n\n**Feature Branch**: `059-k-number-sense-complete` (no branch — work on main)\n\n**Created**: 2026-10-07\n\n**Status**: Draft — skill order, titles and activity sets agreed with syllabus-expert + activity-designer; ranges of reused activities still to verify (T001)\n\n**Input**: \"Focus on Maternelle, topic Sens du nombre. Order the skills by difficulty, shorten the titles, make the\ndescriptions easy, give each skill enough activities to master it together. Before every skill set there is a\nrevision skill (random questions from the previous level). A kid in grade N is considered to master all skills of\nthe previous level (shown as passed, no questions); same/higher level starts not passed at 0. Revision answers can\nlower and 'unpass' previous-level skills. Focus on activity names and coverage, not on the interaction (simple text\nquestions first).\"\n\n## Clarifications\n\n### Session 2026-10-07\n\n- Q: What does a Maternelle revision skill draw from, since K is the lowest syllabus level? → A: **No revision skill at K.** Revision starts at G1 (previous level = K). Maternelle NS has only real skills.\n- Q: Subitizing and decomposing are missing from NS (currently in FL / OP / P). → A: **Add both to NS** as new skills (subitizing early, decomposing late).\n\n- Q: Scope of 059, given section 2 is deferred but FR-006 asked for the mechanism? → A: **K content only.** Default-pass and revision un-pass (section 2, FR-006) move to the G1 feature; 059 implements none of it.\n- Q: What do parents see, and what is \"passed\" for? → A: Parents see the scores of what the kid actually did. \"Passed\" (incl. default-pass) only feeds the spider chart; it is never shown as a score. Focus K first; G1 later.\n- Q: NS page bottom text? → A: Topic-specific (`syllabus.ns.md` / `activities.ns.md`, en + fr), other topics keep the generic text until they get their own.\n\n## 1. Maternelle NS skills in learning order\n\n16 skills (14 existing, reordered by prerequisite, + 2 new). Titles ≤ 4–5 words. Old ID = `K-NS-n` in `docs/syllabus-detailed/K.md`.\nActivities are listed easiest → hardest; together they cover the skill's whole range. **NEW** = gap-filling activity (text question first).\n\n| # | Old | EN title / FR title | EN description / FR description | Activities (id — covers) |\n| --- | --- | --- | --- | --- |\n| 1 | NS-1 | Count to 30 / Compter jusqu'à 30 | Says the numbers in order, without skipping. / Dit les nombres dans l'ordre, sans en oublier. | `preschool-count-in-order` — next word, 1–10<br>`count-the-teens` **NEW** — fill the missing word 11–19<br>`preschool-count-to-thirty` — 20–30, turn at 29→30 |\n| 2 | NS-4 | One word per object / Un objet, un mot | Points at each object once. The last number said tells how many. / Pointe chaque objet une seule fois. Le dernier mot dit combien il y en a. | `preschool-one-to-one` — touch once, sets to 5<br>`preschool-how-many-last-tag` — last number = total, to 10<br>`preschool-how-many-all-together` — to 20, rows / scattered / mixed |\n| 3 | FL-1 (moved) | See it at a glance / Voir d'un coup d'œil | Says how many are there without counting: dots, dice, fingers. / Dit combien il y en a sans compter : points, dés, doigts. | `preschool-flash-dots` — 1–3, then dot patterns to 5<br>`dot-pattern-snap` — dice/finger patterns to 5 → numeral<br>`ten-frame-flash` — 6–10 as \"5 and some\" |\n| 4 | NS-6 | Same count, moved around / Le nombre ne change pas | 8 objects are still 8 when spread out or in a circle. / 8 objets, c'est toujours 8, même déplacés. | `preschool-still-the-same` — rearranged set, to 10<br>`preschool-which-row-has-more` — long vs packed rows, equal counts<br>`same-in-a-circle` **NEW** — row / cluster / circle, 11–20 |\n| 5 | NS-9 | Zero means none / Zéro, c'est rien | Says 0 when there is nothing, and knows 0 is a number. / Dit 0 quand il n'y a rien, et sait que 0 est un nombre. | `preschool-empty-basket` — empty set → 0<br>`preschool-is-zero-a-number` — 0 on track, in countdown, take-all-away |\n| 6 | NS-10 | More, fewer, same / Plus, moins, pareil | Tells which group has more, fewer, or the same. / Dit quel groupe en a plus, moins, ou autant. | `preschool-which-has-more` — pairing, to 5<br>`preschool-same-or-not` — equal vs not, to 10<br>`preschool-compare-groups` — more/fewer/same to 20, items of different sizes |\n| 7 | NS-5 | Give exactly n / Donne-m'en n | Counts out exactly the number asked, and stops there. / Prend exactement le nombre demandé, et s'arrête. | `preschool-give-n` — n ≤ 5<br>`preschool-take-n` — take n from a bigger pile, ≤ 10<br>`grab-a-handful` — n ≤ 20, check by counting |\n| 8 | NS-7 | Numerals 0–20 / Reconnaître les chiffres | Matches a numeral to its quantity and finds it among others. / Associe un chiffre à sa quantité et le retrouve parmi d'autres. | `preschool-numeral-twins` — numeral ↔ dots, 0–5<br>`preschool-show-the-number` — numeral → quantity, 0–10<br>`preschool-number-hunt` — find among look-alikes (12/21, 13/31), 0–20 |\n| 9 | NS-13 | One more, one less / Un de plus, un de moins | Says the next number, one more, or one less. / Donne le nombre suivant, un de plus ou un de moins. | `preschool-neighbour-houses` — next number, 0–10<br>`preschool-one-more-less` — one more/less, 0–10<br>`pop-up-one-more` — mixed, to 20, edges (0, 10, 20) |\n| 10 | NS-2 | Count on and back / Compter en avant et à rebours | Starts from any number and counts up, or counts down to 0. / Part de n'importe quel nombre et compte en avant, ou à rebours jusqu'à 0. | `preschool-count-on-from` **NEW** — count on from 2–9 to 10<br>`preschool-count-backward` — 10 → 0<br>`rocket-countdown` — 20 → 0, any start<br>`preschool-hidden-bag` — count on past 10 to 20 |\n| 11 | NS-12 | Order 0–10, find the gap / Ranger les nombres | Puts the numbers in order and finds the one missing. / Range les nombres dans l'ordre et trouve celui qui manque. | `preschool-number-track` — missing number, 0–5<br>`line-up-the-cards` — order cards 0–10<br>`missing-card-hard` **NEW** — gap in middle/ends, two gaps, 0–10 |\n| 12 | NS-11 | Which number is bigger? / Quel nombre est le plus grand ? | Compares two numerals to 10 without counting objects. / Compare deux chiffres jusqu'à 10 sans compter d'objets. | `preschool-bigger-number` — bigger of two, 0–5<br>`preschool-bigger-smaller-same` — bigger/smaller/equal, 0–10<br>`number-showdown` — close pairs (7 vs 8, 9 vs 10) |\n| 13 | OP/P (new to NS) | Parts of a number / Les parties d'un nombre | Splits a number into two parts: 5 is 2 and 3. / Partage un nombre en deux parties : 5, c'est 2 et 3. | `preschool-decompose-five` — two ways to make 2–5 (reuse P `decomposeFive` bank)<br>`decompose-to-ten` **NEW** — two parts of 6–10, missing part |\n| 14 | NS-14 | 1st to 5th / Premier à cinquième | Uses first to fifth and last. Tells \"third\" (place) from \"3\" (amount). / Utilise premier à cinquième et dernier. Distingue « troisième » (rang) de « 3 » (quantité). | `preschool-who-is-nth` — 1st–3rd, then 5th, last<br>`preschool-colour-the-nth` — 1st–5th, both directions<br>`preschool-ordinal-or-count` — \"third dog\" vs \"3 dogs\" |\n| 15 | NS-8 | Write numerals / Écrire les chiffres | Writes numerals the right way round with the right strokes. / Écrit les chiffres dans le bon sens, avec le bon tracé. | `preschool-pick-the-right-way` — unreversed numeral, 0–9<br>`trace-the-numeral` — stroke path 0–9<br>`trace-the-teens` **NEW** — 10–20, digit order |\n| 16 | NS-3 | Count by 10s, 2s, 5s / Compter de 10 en 10 | Chants by tens, and starts 2s and 5s. Just for fun, no pass mark. / Récite de 10 en 10, et découvre de 2 en 2 et de 5 en 5. Pour s'amuser, sans note à atteindre. | `tens-staircase` — 10 → 100 by tens<br>`skip-count-hops` — 5s and 10s, then 2s, to 20–30 |\n\nNotes\n- Skill 3 takes the K-FL-1 activities and skill 13 the P decompose activity as their *primary* home (each activity primary in exactly one skill): remove them from K-FL-1 / the source skill in the syllabus data.\n- Skill 16 is introduce-only: no accuracy gate, never blocks progress.\n- 5 new activities + 2 new skills = 7 new items; ids are provisional until T001 checks existing banks.\n- Reused activities must reach the range in the table (11–20 ranges on skills 1, 2, 4, 6, 7, 8, 9 are the likeliest truncated).\n- Every title, description and activity name ships **en + fr together**.\n\n## 2. Revision skill and default-pass (OUT OF SCOPE for 059, deferred to the G1 feature)\n\n> Scores shown to parents come only from answered questions; default-pass affects the spider chart only.\n\n### Original notes: revision skill and \"previous level passed by default\" (generic mechanism)\n\nOut of scope for K (no previous level); built now so it applies from G1, per topic. K NS is its first consumer once G1 NS exists.\n\n- **Revision skill**: first skill of each topic at grade N ≥ G1. Its activity draws random questions from grade N−1 skills of the same topic (same banks; random mix, like a summary).\n- **Default mastery**: for a child in grade N, every skill of grade < N shows **passed** with **no list of questions** (counts as passed with zero answers). Skills of grade ≥ N start **not passed, score 0**.\n- **Revision feedback**: each revision answer is attributed to the N−1 skill whose bank produced the question. A wrong answer lowers that skill's score; when it falls below the pass threshold (≥ 90 %, app's \"mastered\" cutoff), the skill is **un-passed** and the child must do it again (its default pass no longer applies; recorded answers do).\n- Builds on 054 (weighted skill score from activity scores) and 019 (per-topic grade). The revision activity counts as one more activity with its own score; it does not replace the skills it audits.\n\n## 3. Requirements\n\n- **FR-001**: Maternelle NS lists the 16 skills above, in that order, with EN/FR short titles and descriptions.\n- **FR-002**: Each skill has the listed activities, rank easiest → hardest, together covering the stated range and sub-skills.\n- **FR-003**: New activities ship as simple text questions (seeded generation, en + fr); interaction design comes later.\n- **FR-004**: Skill 16 has no pass gate.\n- **FR-005**: No revision skill at K.\n- **FR-006** (OUT OF SCOPE for 059, moves to the G1 feature): Default-pass + revision un-pass behaviour (section 2) implemented generically, with unit tests for: default-passed previous level, default-zero current/higher level, revision wrong answer un-passes the source skill, revision right answers never re-pass it by themselves beyond the threshold.\n- **FR-006b**: NS syllabus/activities pages show an NS-specific bottom text (en + fr, ≥ 300 words), via `loadIntro(kind, lang, topic)` with generic fallback. **Done.**\n- **FR-007**: Feature is done only with spec (here), app/subjects implementation, and a blog post (`../blog`).\n\n## 4. Open items\n\n- T001: read the banks to confirm real ranges of reused ids (listed above) and the `decomposeFive` / flash-dots ids.\n- Whether the G1 NS skills list gets a revision skill now (needs G1 ordering pass) or when G1 is worked on.\n- Parent-facing handling when the revision un-passes a skill (message wording) — to design with ux-expert.\n",v=`# Feature Specification: Fluid Navigation (level, topic, skill, activity)

**Feature Branch**: \`060-fluid-navigation\` (work lands on main; no branch)

**Created**: 2026-10-08

**Status**: Done

**Input**: User description: "Fluid navigation across level (grade), topic, skill and activity in the mathematics app — one 'up' mechanism, a context bar with level and topic switchers, consistent explicit URLs (skill stays its own page, no query parameter), a useful end-of-activity screen, and a single page load when starting an activity. Source: UX expert review."

## Background

Today the four levels of the mathematics app (level/grade, topic, skill, activity) each behave a little differently:

- Choosing a topic opens a new page, while choosing a skill seems to stay on the same page.
- A skill page shows only that skill's activities, hiding its siblings.
- "Harder level" can be reached only from the grade page, never from inside a topic.
- The breadcrumb and a separate "← Back to…" button both go up one level, so the same destination appears twice.
- When a session ends, the child lands on a plain list with no suggested next step.
- Starting an activity loads the page three times (in-app navigation, a full reload, then a server redirect that adds a trailing \`/\`).

A kindergarten child who finishes a topic wants to either try the **same topic at a harder level** or **move to another topic at the same level**. Neither is easy today.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - One clear way to go up (Priority: P1)

A child or parent on any grade, topic, skill or activity page sees exactly one "go up one level" control, and it always matches the breadcrumb's parent.

**Why this priority**: Smallest change with the largest clarity gain; every other story builds on a coherent orientation model.

**Independent Test**: Visit a grade, topic, skill and activity page on a desktop and on a phone-width screen; count the "up" controls and check each leads to the breadcrumb's parent.

**Acceptance Scenarios**:

1. **Given** a topic page on a wide screen, **When** it is shown, **Then** the breadcrumb is the only up navigation and the separate "← Back to…" text button is gone.
2. **Given** the same page on a phone-width screen, **When** it is shown, **Then** one icon-first ↑ button (accessible name "Back to <parent>") appears, and it goes to the same place as the breadcrumb's parent crumb.
3. **Given** any page, **When** the breadcrumb is read by a screen reader, **Then** it is a labelled navigation landmark and the current crumb is marked as the current page.

---

### User Story 2 - A next step when an activity ends (Priority: P1)

When a child finishes an activity, the end screen offers clear, icon-led next steps instead of a dead-end list.

**Why this priority**: Directly covers the product owner's scenario ("same topic harder level" or "another topic").

**Independent Test**: Complete an activity at K in a topic that also exists at G1, and check the end screen's actions and their destinations.

**Acceptance Scenarios**:

1. **Given** a finished activity with another activity left in the same skill, **When** the end screen shows, **Then** the primary action is "Next activity" and it starts the next one in that skill.
2. **Given** the topic exists at the next level, **When** the end screen shows, **Then** a "Harder level" action leads to that topic at the next level; if it does not exist there, the action is not shown.
3. **Given** any finished activity, **When** the end screen shows, **Then** "Another topic" suggests the next topic at the same level, and "Play again" and "Back to list" are available.
4. **Given** the end screen, **When** it shows, **Then** a progress/stars summary appears above the actions, and every action has an icon plus a short label.
5. **Given** the last activity of the skill, **When** the end screen shows, **Then** the primary action moves to the best remaining option (next skill, else "Another topic") rather than a missing "Next activity".

---

### User Story 3 - Switch level or topic from anywhere inside a topic (Priority: P2)

On topic, skill and activity pages a context bar lets the child change level (◀ K ▶) or topic (topic icons for the current level) without going back to a list first.

**Why this priority**: Makes sideways movement consistent on every screen, but needs the new URL rules and more layout work than stories 1–2.

**Independent Test**: From a skill page at K, switch to G1 and back, then switch topic, and verify the page, URL and breadcrumb each time.

**Acceptance Scenarios**:

1. **Given** a topic page at K and the topic also exists at G1, **When** the child taps ▶, **Then** they land on the same topic at G1.
2. **Given** the topic does not exist at the target level, **When** the context bar shows, **Then** that direction is disabled and a short note says why; the topic is never changed silently.
3. **Given** a topic page, **When** the child picks another topic in the topic switcher, **Then** they land on that topic's page at the same level.
4. **Given** a switcher changed the page, **When** the new page loads, **Then** keyboard/screen-reader focus moves to the page heading and a live region announces the new page.

---

### User Story 4 - Consistent, explicit URLs; skill is a real page (Priority: P2)

Every level is its own page with an explicit, readable URL following one pattern, and the skill page helps the child move around instead of trapping them.

**Why this priority**: Fixes the "topic opens a page but skill doesn't" inconsistency and makes sharing/refreshing reliable.

**Independent Test**: Walk grade → topic → skill → activities → activity; confirm each step changes the URL by exactly one segment and that refresh and back/forward land on the same page.

**Acceptance Scenarios**:

1. **Given** the grade, topic, skill, activity list and one activity, **When** their URLs are compared, **Then** each extends its parent's URL by one segment in the same order (grade → topic → skill → activities → activity), and no query parameter is used to select a skill.
2. **Given** a skill page, **When** it is shown, **Then** it lists the sibling skills of the topic as links and has a link to all of the topic's activities.
3. **Given** a skill is chosen anywhere (syllabus row, breadcrumb, sibling link), **When** the choice is made, **Then** the browser moves to that skill's own page and back/forward behaves as for a topic.
4. **Given** an old or bookmarked URL from before this change, **When** it is opened, **Then** it still resolves to the equivalent page.

---

### User Story 5 - Starting an activity loads the page once (Priority: P3)

Choosing an activity opens it in one load, with no visible reload or redirect.

**Why this priority**: Real but invisible to most; it does not change the information design and may depend on ad policy.

**Independent Test**: Start an activity from a skill page and observe the network/navigation count.

**Acceptance Scenarios**:

1. **Given** a skill page (with or without ads), **When** an activity is started, **Then** the document loads at most once and no server redirect (such as an added trailing \`/\`) happens.
2. **Given** the start happens, **When** the page is ready, **Then** the chosen activity is running (no landing view to tap through again).

---

### Edge Cases

- Topic exists at the lower level but not at the target level (and the reverse): the switcher disables that direction with a note.
- First level (K) has no "easier" direction; the last level has no "harder"; those arrows are disabled, not hidden.
- Child finishes the only activity of a skill, the last skill of a topic, or the last topic of a level.
- A shared deep link arrives with an unknown grade, topic or skill: the existing "not found / fall back to the parent" behaviour is kept.
- French labels up to ~50% longer than English must wrap or truncate with a full-name tooltip, never overflow.
- Reduced-motion preference: switchers and the end screen use no animated transitions.
- Storage blocked or ads blocked: navigation still works.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Each grade, topic, skill, activity-list and activity page MUST have exactly one "go up one level" mechanism; the breadcrumb is it on wide screens, and a single ↑ button built from the same parent data on phone-width screens. The separate text "← Back to…" button MUST be removed.
- **FR-002**: The breadcrumb MUST be a labelled navigation landmark with the current crumb marked as the current page.
- **FR-003**: The end-of-activity screen MUST show a progress/stars summary and these actions, each with an icon and a short label: "Next activity" (primary), "Harder level", "Another topic", "Play again", "Back to list".
- **FR-004**: "Harder level" MUST appear only when the topic exists at the next level; "Next activity" MUST choose the next activity in the same skill, and when none remains the primary action MUST become the best remaining option (next skill, else another topic).
- **FR-005**: Topic, skill and activity pages MUST show a context bar with a level switcher and a topic switcher (icons for the topics of the current level).
- **FR-006**: The level switcher MUST keep the current topic when it exists at the target level; otherwise that direction MUST be disabled with a short note, and the topic MUST NOT change silently.
- **FR-007**: Switching level or topic MUST move focus to the page heading and announce the new page through a live region.
- **FR-008**: Every level (grade, topic, skill, activities, activity) MUST be a distinct page whose URL extends its parent by one segment in the order grade → topic → skill → activities → activity. A skill MUST NOT be selected by a query parameter.
- **FR-009**: Selecting a skill from any entry point MUST navigate to that skill's own page (history entry, refresh-safe), the same way selecting a topic does.
- **FR-010**: A skill page MUST show the topic's other skills as links and a link to all of the topic's activities, so it is never a dead end.
- **FR-011**: All previously valid URLs (including those from before this feature) MUST keep resolving to the equivalent new page, and the sitemap/SEO route list MUST stay consistent with the new scheme.
- **FR-012**: Starting an activity MUST load the document at most once and MUST NOT trigger a server redirect (e.g. adding a trailing \`/\`), whether or not ads are active; the started activity MUST run immediately.
- **FR-013**: All new controls MUST have touch targets of at least 44 px with at least 8 px between neighbouring controls, and MUST be understandable from icons without reading (text is a label, not the only cue).
- **FR-014**: All new text MUST ship in English and French together, and layouts MUST tolerate up to 50% longer text.
- **FR-015**: Transitions introduced by this feature MUST respect the reduced-motion preference.

### Key Entities

- **Level (grade)**: K through G6; the top of the page hierarchy for a subject; has an easier and harder neighbour.
- **Topic**: a group of skills available at one or more levels; has an icon and a neighbour list per level.
- **Skill**: one syllabus row inside a topic at a level; owns a set of activities; has sibling skills.
- **Activity**: a playable exercise attached to a skill; has a position within the skill's list.
- **Page position**: the (level, topic, skill, activity) a child is currently on; the source of the breadcrumb, the ↑ button, the context bar and the end-screen suggestions.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: On every grade/topic/skill/activity page, a reviewer counts exactly one "up" mechanism, and it matches the breadcrumb's parent in 100% of pages checked.
- **SC-002**: From the end screen of any activity, "same topic at the next level" (when it exists) and "another topic at the same level" are each reachable in one tap.
- **SC-003**: From any skill page, a child can reach the same topic at another level, or another topic at the same level, in at most two taps and without visiting a list page first.
- **SC-004**: Stepping grade → topic → skill → activity changes the URL by one segment each time in 100% of cases, and refresh or back/forward returns to the same page.
- **SC-005**: 100% of previously valid URLs still lead to an equivalent page (checked against the existing route list).
- **SC-006**: Starting an activity produces one document load and zero redirects (down from three loads today).
- **SC-007**: All new controls pass a 44 px touch-target check and show no text overflow in French at the narrowest supported phone width.

## Assumptions

- Scope is the Mathematics subject, which is the only one with topic and skill levels; other subjects keep their current single-level pages.
- The existing route shape (grade → topic → skill → activities → activity) is already close to the target; the work is making every selection follow it rather than inventing new path words. Final path words are settled in planning.
- "Another topic" suggests the next topic of the same level in the existing topic order; there is no recommendation engine.
- "Harder level" means the next available level in the existing level order (K → G1 → … → G6).
- The single-load requirement may involve the ad policy (what a page may do when leaving an ad-eligible page); where that conflicts, the trade-off is decided in planning with the owner, and the "no server redirect" part still holds.
- Old URLs keep working through the existing redirect/legacy mapping mechanism rather than being dropped.
- Per the constitution, validation is the automated suite only; no dev server or GUI driving during implementation.
`,y=`# Feature Specification: Home Page Marketing Content and Contextual Ad

**Feature Branch**: \`061-home-marketing-ad\` (no git branch is created; work lands on main)

**Created**: 2026-10-08

**Status**: Draft

**Input**: User description: "Marketing content + contextual ad on the home page. Amend 058-adsense-compliance FR-012 (home currently ads: none, AD_POLICY.home = "none", home excluded from analytics). Add a substantial parent-facing marketing/content section to the home page (en + fr) so it passes the 300 readable-word rule, then allow one AdSlot below the content, never above the profile picker, child-directed treatment kept, consent manager loads via AdSlot as today (so EEA/UK/CH get Google's consent message on home). Update adPolicy + tests, privacy page text, footer Privacy choices link works on home, and the blog post. Keep the child profile picker usable first; content sits below the fold."

## Background

The home page is the first screen of the site and the main place where visitors discover it. Today it is only a "who is playing?" profile picker with almost no text, so it cannot explain the product to a parent, cannot rank for what parents search, and (per 058-adsense-compliance FR-012) is barred from carrying an ad. The owner wants the home page to double as the marketing page: real content for parents, plus one contextual ad. A side effect is that visitors in the EEA, UK and Switzerland will see the certified consent message on their first visit, because the consent message loads wherever an ad does.

This feature **amends 058-adsense-compliance FR-012** (home removed from the "no ads" list) and the home exclusion in its analytics rule. Every other 058 rule stays: ads are contextual and non-personalised, tagged for child-directed treatment, never inside an activity, and one per page.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - A parent learns what the site is from the home page (Priority: P1)

A parent lands on the home page from a search or a shared link. Below the profile picker they find clear, honest content explaining what the site is, who it is for, how children practise, how progress is kept, that it is free to use and what the ad is for, in their language (English or French).

**Why this priority**: The content is what makes the home page valuable to parents and search engines, and is the precondition for any ad (the page must carry substantial publisher content).

**Independent Test**: Open the home page in English and in French; scroll below the profile picker and read the section. It explains the product, audience, approach, privacy stance and cost, in at least 300 readable words per language, with links to the About, Privacy and parent pages.

**Acceptance Scenarios**:

1. **Given** a visitor on the home page in either language, **When** they scroll past the profile picker, **Then** they see a parent-facing section of at least 300 readable words of original text in that language.
2. **Given** the section, **When** read, **Then** it covers what the site offers, which grades/subjects exist, how a child practises, where progress is stored, that no account is needed, and how the site is funded.
3. **Given** the section, **When** a visitor follows its links, **Then** About, Privacy and the parent area open in the same language.
4. **Given** a visitor switching language, **When** the page re-renders, **Then** all new content and labels appear in the chosen language with no untranslated text.

---

### User Story 2 - The child can still start playing immediately (Priority: P1)

A child (or parent) opens the home page and picks a profile exactly as before. The new content and the ad never get in the way.

**Why this priority**: The home page's original job must not regress; the product is for children first.

**Independent Test**: Load the home page on a phone-sized and a desktop-sized screen; the profile picker is fully visible and usable without scrolling past any content or ad, and keyboard and screen-reader order reaches the picker before the content and ad.

**Acceptance Scenarios**:

1. **Given** the home page loads, **When** it first renders, **Then** the profile picker is at the top, interactive, and the marketing content and ad are below it.
2. **Given** the ad is slow, blocked or fails, **When** the page is used, **Then** the picker still works and the layout does not jump over the picker.
3. **Given** a keyboard or screen-reader user, **When** they move through the page, **Then** the picker comes first, the ad is labelled as an advertisement, and the ad is not announced as page content.

---

### User Story 3 - One contextual ad appears on the home page, below the content (Priority: P1)

When ads are switched on and the page has enough content, the home page shows exactly one labelled, non-personalised, child-directed-treated ad after the marketing content.

**Why this priority**: This is the business goal of the request, and the page must satisfy the same ad rules as every other eligible page.

**Independent Test**: With ads on, load the home page: one ad slot appears after the content, labelled as an ad; with ads off, or with the content removed, no ad code loads and no gap is left.

**Acceptance Scenarios**:

1. **Given** ads are on and the home page carries 300 or more readable words, **When** it loads, **Then** exactly one ad slot appears below the content, never above or inside the profile picker.
2. **Given** the kill-switch is off, **When** the home page loads, **Then** no ad script is requested and no ad container or empty gap is shown.
3. **Given** the ad slot renders, **When** its request is inspected, **Then** it carries the child-directed treatment signal and no personalised ad formats (auto, anchor, overlay) appear.
4. **Given** a visitor navigates from the home page into an activity, the parent area or a child screen, **When** the new screen loads, **Then** no ad is present there (the existing rule that ad-script pages are left by a full page load still holds).
5. **Given** a visitor blocks ads, **When** the home page loads, **Then** the slot collapses with no broken placeholder.

---

### User Story 4 - Visitors in consent regions are asked on the home page and can change their choice (Priority: P2)

A visitor in the EEA, UK or Switzerland who lands on the home page sees the certified consent message before any non-essential identifier is set, and can reopen it later from the footer.

**Why this priority**: Required for lawful ad serving in those regions; follows from putting an ad on home.

**Independent Test**: From an EEA/UK/CH location, first visit to the home page shows the consent message; the choice is remembered; the footer "Privacy choices" link reopens it. Outside those regions no banner appears.

**Acceptance Scenarios**:

1. **Given** a first-time visitor in a consent region on the home page, **When** the page loads with an ad eligible, **Then** the consent message is shown and ad/analytics identifiers stay denied until they agree.
2. **Given** a returning visitor who already chose, **When** they open the home page, **Then** the message is not shown again and their choice is respected.
3. **Given** the consent message is active on the home page, **When** the visitor looks at the footer, **Then** a "Privacy choices" control is present and reopens the message.
4. **Given** ads are switched off, **When** the home page loads, **Then** no consent message loads.

---

### User Story 5 - The Privacy page and project docs match reality (Priority: P2)

The Privacy page states that the home page now carries a contextual ad and consent message, and the project documentation (058 rule, ad policy docs, blog) reflects the change.

**Why this priority**: Disclosure must stay accurate; the project's definition of done requires spec, app and blog.

**Independent Test**: Read the Privacy page in both languages: it no longer says ads are limited to parent-facing articles and lists, and it names the home page. The blog has a post describing the change.

**Acceptance Scenarios**:

1. **Given** the Privacy page in English or French, **When** read, **Then** it lists the home page among the places that can show a non-personalised, child-directed-treated ad.
2. **Given** the 058 spec and ad-eligibility contract, **When** read, **Then** FR-012 and its tests reflect the home page as eligible, with a pointer to this feature.
3. **Given** the feature is finished, **When** the blog is checked, **Then** a post exists for it.

---

### Edge Cases

- Content shorter than 300 readable words in one language (for example a missing French translation): no ad shows on that language's home page.
- Visitor with a very small screen or large text size: the picker stays reachable first; the content and ad reflow beneath it without horizontal scrolling.
- Visitor arrives on the home page, then navigates to a page that must not carry the ad script (activity, parent area): the existing full-page-load rule applies so the child screen has no ad code.
- First visit with the consent message open: it must not cover or block the profile picker permanently; dismissing it returns full access.
- Profile list empty or loading: the content and ad do not appear before the picker is ready in a way that shifts it.
- Home page served statically for search crawlers: the marketing text is present in the delivered page for both languages.
- Quebec / under-13 advertising limits: the ad stays below parent-facing content and child-directed treated; the owner is aware this is the first child-entry screen (see Assumptions).

## Requirements *(mandatory)*

### Functional Requirements

**Content**

- **FR-001**: The home page MUST show, below the profile picker, a parent-facing section of original text of at least 300 readable words in each supported language (English and French).
- **FR-002**: The section MUST explain what the site offers, which grades and subjects it covers, how a child practises, that no account is required, where progress is stored, and how the site is funded (including that it carries a non-personalised ad).
- **FR-003**: The section MUST link to About, Privacy and the parent area, in the visitor's language.
- **FR-004**: The section MUST be readable on phones, tablets and desktops, meeting the project's existing accessibility and text-size expectations.
- **FR-005**: All new text MUST exist in English and French together, with no untranslated fallback.

**Child-first layout**

- **FR-006**: The profile picker MUST remain the first, fully usable element of the home page; no content or ad may appear above it or inside it.
- **FR-007**: Content and the ad MUST NOT shift the picker after load (no layout jump over it), including when the ad is slow, blocked or empty.
- **FR-008**: Reading and focus order MUST place the picker before the content and the ad.

**Ad**

- **FR-009**: The home page MUST be an ad-eligible screen: when ads are on and the page carries at least 300 readable words, it MUST show exactly one ad slot, after the content, labelled as an advertisement.
- **FR-010**: The ad MUST carry the child-directed treatment signal and MUST be non-personalised; auto, anchor and overlay formats MUST NOT appear.
- **FR-011**: When ads are switched off by the owner kill-switch, or the page has fewer than 300 readable words, no ad script, container or gap MUST appear on the home page.
- **FR-012 (amends 058 FR-012)**: Ads and the ad script remain forbidden on splash, loading, 404/error, redirect, activities, settings, parent area, docs, project-news and legal/contact pages. The home page is removed from that list.
- **FR-013**: Leaving the home page for any ad-forbidden screen MUST NOT carry ad code to that screen (the existing full-page-load rule continues to apply).

**Consent and privacy**

- **FR-014**: Where the home page loads an ad, the certified consent message MUST load there as on every other ad page, and in EEA/UK/CH no non-essential identifier may be set before the visitor agrees.
- **FR-015**: The footer "Privacy choices" control MUST appear on the home page whenever the consent message is active and MUST reopen the message.
- **FR-016**: Analytics on the home page remain off in this feature (the home page is still where a child picks who is playing); only the ad and consent behaviour change.
- **FR-017**: The Privacy page, in both languages, MUST state that the home page can show a non-personalised, child-directed-treated ad and a consent message, and MUST remain consistent with FR-012.

**Governance**

- **FR-018**: The automated checks that assert the ad policy (home previously "no ad") MUST be updated to the new rule and keep protecting every other ad-forbidden screen.
- **FR-019**: The 058 spec and ad-eligibility contract MUST note the amendment; a blog post MUST describe the change; the feature is not done until spec, app and blog all exist.

### Key Entities

- **Home marketing section**: Parent-facing text blocks on the home page (headline, paragraphs, links), per language, with a readable-word count used by the ad rule.
- **Ad policy entry (home)**: The rule that classifies the home screen as ad-eligible, subject to the minimum-words condition and the owner kill-switch.
- **Consent record**: The visitor's remembered consent choice, now also established on first visit to the home page in consent regions.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: In both English and French, the home page carries at least 300 readable words of parent-facing text below the picker.
- **SC-002**: A child can select a profile within the same number of taps/clicks as before this feature, with the picker fully visible on first render on a 360 px-wide phone screen without scrolling.
- **SC-003**: With ads on, exactly one ad slot appears on the home page in 100% of loads where the content threshold is met, and zero ad slots or ad requests appear when the kill-switch is off.
- **SC-004**: From an EEA/UK/CH location, 100% of first visits to the home page show the consent message before any ad or analytics identifier is set; outside those regions none appears.
- **SC-005**: Every other ad-forbidden screen (activities, parent area, docs, news, legal, 404, redirect) still shows zero ad containers and makes zero ad requests.
- **SC-006**: The visual layout shift score of the home page stays within the project's existing good-experience threshold, with the picker never moving after load.
- **SC-007**: The Privacy page in both languages names the home page, and no remaining document states that ads are limited to articles and lists.
- **SC-008**: A re-submission of the site to the ad programme is not rejected for "ads on screens without publisher content" on the home page (tracked by the owner after deploy).

## Assumptions

- The owner accepts the compliance trade-off of an ad on the first child-entry screen. Mitigations are in this spec: the ad sits below parent-facing content, is child-directed treated, non-personalised, and labelled. The Quebec under-13 advertising limits are the owner's call; the kill-switch lets them turn ads off at once.
- Analytics stays off on the home page (FR-016); only ads and consent change. Enabling analytics on home would be a separate decision.
- The existing ad slot mode for list/article pages is reused for home; no new ad format is introduced.
- The 300-word threshold and the kill-switch behave as defined in 058 and are not changed here.
- French copy is written at the same time as English; no machine-only translation without review.
- Marketing wording is original text written for this feature, not copied from other sites or from the competency reference.
- Search-engine metadata for the home page (title/description) may be refreshed to match the new content, but a wider SEO overhaul is out of scope.
- Domain, account-level ad settings, and the published consent message are already configured by the owner as per 058; nothing new is needed there.
- The Privacy page text change is limited to the ad/consent disclosure; other legal pages are unchanged.
`,b=`# Feature 062: Place value (PV) in Maternelle — skills, titles and activities

Status: **implemented (text-only activities; see Follow-up), blog written 2026-10-09**. Scope: the Maternelle (K) place-value topic only.

## Background

The Maternelle PV topic had three skills. A syllabus check (grade-fit review against the neighbouring levels) found that two of them belong in G1, and that one duplicated a G1 skill. The owner decided to move them. The bottom-of-page intro text for the PV screens was generic and is now topic-specific (already done, see below).

## Done in this feature

- **Topic-specific intro text.** \`app/apps/web/src/content/intro/{en,fr}/syllabus.pv.md\` and \`activities.pv.md\` replace the generic text on the PV syllabus and activity pages. Each is above the 300-word threshold (\`MIN_AD_CONTENT_WORDS\`). Loader tests pass.

## Decisions

1. **Merge K-PV-2 into G1-PV-3.** "Build and say teens as ten and ones" is the same idea as G1-PV-3 ("build a 2-digit number with tens and ones"), so it is not kept as a separate G1 skill. The \`teen-towers\` idea moves under G1-PV-3, and the \`preschool-teen-numbers\` activity (TWEAK) is re-mapped to G1-PV-3 with a regrade.
2. **Remove K-PV-3.** "Ten ones make one ten (bundling)" duplicates G1-PV-1. G1-PV-1 must take over its prerequisite role (its \`prerequisites\` currently names K-PV-3).
3. **Keep K-PV-1 only** in Maternelle. Its title is "See how numbers to 10 are built" (FR: "Voir comment les nombres jusqu'à 10 sont construits").

## Activities for K-PV-1 (ten-frame)

Each activity is a short set of questions with immediate feedback. Numerals are single digits plus 10. All text is i18n (en + fr). Generation is seeded (no \`Math.random()\`). Mastery: 8 correct out of 10; advance a level after 4 correct in a row.

| Slug | Status | Concept |
|---|---|---|
| \`fill-the-frame\` | new | The BUILD direction: a numeral is the target and animals are already in the house; the child says how many more must come in. |
| \`preschool-ten-frame\` | existing, REDESIGN | "Flash and tell": a frame with N counters shows for about 3 seconds, then the child picks the numeral. |
| \`make-ten-friends\` | new | Bus with 10 seats: read the empty seats that make 10. **Listed under K-OP-6**, not K-PV-1 (the per-skill cap is 4 activities, and it is a complement-to-10 activity). |
| \`which-frame-is-right\` | new | Reverse reading direction: a numeral is shown and the child picks the ten-frame with exactly that many counters. |
| \`hide-the-counters\` | new | Part and whole: the total is told, some counters are shown, the rest hide under a leaf; say how many hide. |

### fill-the-frame
- Distinct from the others: \`preschool-ten-frame\` reads a flashed frame ("how many?"); \`make-ten-friends\` reads the empty seats to 10; \`fill-the-frame\` builds up to a target numeral ("3 inside, the house needs 5, how many more?").
- Progression: targets 3-5; then 6-8; then 9-10. No "how many are inside" or "spaces left" questions (those duplicate the other two).
- Wrong answer: the animals still to come are counted aloud in animated text; one retry, then the correct answer is shown.
- Playful: counters are small animals dropping into a little house; the frame sparkles when full.

### preschool-ten-frame (REDESIGN)
- Progression: 1–5 in the top row only; then 6–10 with the second row, filled left to right; then non-standard arrangements.
- Distractors: N±1, and the count of one row only (a known misconception).
- Wrong answer: the frame reappears with a "5 and 1 more is 6" highlight, then retry.
- Playful: a magician's hat reveals the frame; a star per correct answer.
- Note: the designer's brief did not read the existing \`preschool-ten-frame\` package. The redesign must start from that code and check it against this brief before any change.

### which-frame-is-right
- Prompt: "Find the frame that shows 7." Options are three frames drawn as emoji-grid text (single line, two rows of five split by a wide gap); no engine change.
- Progression: L1 numerals 1-5 on a single row of 5; L2 5-8 on a ten-frame; L3 6-10 and the empty frame.
- Distractors: N-1 and N+1 plus a filler; the right frame never forms a contiguous run with the wrong ones.
- Wrong answer: "That frame has too few / too many counters. Count again, one by one."
- Playful: counters change colour (orange, blue, green) between questions.
- FR title: "Quel cadre est le bon ?".

### hide-the-counters
- Shown as a picture, not text: a ten-frame holds the visible counters and a green leaf (🍃) covers every cell after them, so the child cannot count the answer. The prompt tells the whole ("There are 6 ladybugs in all. You can see 4. The others hide under the leaves. How many are hiding?"). On an answer the leaves lift and the hidden counters appear.
- Engine: \`ten-frame\` scene gets an optional \`hidden\` count (plugin-engine \`TenFrameScene\`); \`TenFrameScene.tsx\` draws the leaves and lifts them when the question is no longer pending (no motion under reduced-motion). Vendored plugin-engine tarball in the mathematics repo refreshed.
- Progression: L1 totals 2-5; L2 totals 6-8 with 1-4 hidden; L3 totals 7-10, 0-5 hidden, mostly not 10 (to stay clear of K-OP-6). One item has none hiding.
- Distractors: the total and the visible count.
- Wrong answer: seen count -> "That is how many you can SEE. Count the hidden ones."; total -> "That is all of them. Take away the ones you can see."; other -> "Close! Count again, one by one."
- Playful: ladybugs or chicks hiding under leaves.
- FR title: "Cache-cache des jetons".

### make-ten-friends
- Listed under K-OP-6 since the skill cap (checkSyllabus: 2-4 activities per skill) was reached; the activity itself is unchanged.
- Progression: complements of 5, 9 and 10 first; then pairs from 6 to 8; then any N from 1 to 9.
- Wrong answer: the two frames merge and show the gap ("Not full yet! 6 and 3 is 9, one more space"). Then retry.
- Playful: friends board a bus with 10 seats.

## Title (for the syllabus list)

| Skill | EN | FR |
|---|---|---|
| K-PV-1 | See how numbers to 10 are built | Voir comment les nombres jusqu'à 10 sont construits |

Title applied: EN in \`docs/syllabus-detailed/K.md\`, FR in \`fr/K.json\`, built output matches.

## Tasks

1. Apply the level changes in the syllabus source. The source of truth is \`specs/docs/syllabus-detailed/{K,G1}.md\`; the French JSON in \`subjects/mathematics/src/syllabus/fr/\` must match it. Remove K-PV-2 and K-PV-3 from K; add the teen-towers idea to G1-PV-3; re-map \`preschool-teen-numbers\` to G1-PV-3; update the \`prerequisites\` of G1-PV-1 so it no longer names K-PV-3. Then run \`npm run syllabus:extract\`, \`syllabus:ids\` and \`syllabus:check\` (must print \`OK\`).
2. Apply the K-PV-1 title in both EN and FR sources.
3. Implement \`fill-the-frame\`, \`make-ten-friends\`, \`which-frame-is-right\` and \`hide-the-counters\`; redesign \`preschool-ten-frame\`. Ship EN and FR strings together.
4. Blog write-up in \`blog/\` (required by the specs → app → blog rule before the feature counts as done).

## Decisions taken

- K-PV-2 is merged into G1-PV-3, not kept as a separate skill.
- \`make-ten-friends\` stays in the PV topic under K-PV-1. K-OP-6 keeps the complement-to-10 number facts.

## Clarifications

### Session 2026-10-08

- Q: Where does the \`preschool-ten-frame\` package live and what is the redesign baseline? -> A: Under \`subjects/mathematics/\` (registered in \`src/syllabus/activityIds.ts\`, \`syllabus-content-p\`). The implementer reads the existing code first and diffs it against the brief before changing anything. (auto)
- Q: Is the K-PV-1 title change in scope or still a proposal? -> A: In scope; Task 2 applies it. The "proposal / not applied yet" wording is superseded once the task is done. (auto)
- Q: What happens to progress or ids referencing removed K-PV-2/K-PV-3? -> A: Removed ids are not reused; \`syllabus:ids\` and \`syllabus:check\` must print OK. No migration of stored progress beyond what the existing tooling does. (auto)
- Q: "Mastery 8/10, advance a level after 4 in a row" for the three activities? -> A: Use the shared activity-engine defaults; no per-activity override. (auto)
- Q: Flash duration for \`preschool-ten-frame\` (about 3 s)? -> A: Fixed 3 s, with a "show again" button for accessibility; no timing penalty. (auto)
- Q: Audio ("counted aloud")? -> A: Reuse the existing speech/audio mechanism if present; otherwise show the count as animated text. Strings in en + fr. (auto)
- Q: \`make-ten-friends\` overlap with K-OP-6? -> A: Spec decision stands: stays under K-PV-1, framed around frame structure (full/empty cells), not number-fact recall. (auto)
- Q: Seeded generation? -> A: Seed derived from the session seed util used by other activities; no \`Math.random()\`. (auto)

## Follow-up (not in scope)

The K-PV-1 activities are text-only for now. The following engine behaviours are deliberately not built: retry, reshow, animated merge, show-again, non-standard layouts, speech, graphical (tappable) frames as options for \`which-frame-is-right\`.
`,x=`# Feature Specification: Single Progress Store (export/import round-trip)

**Feature Branch**: \`063-progress-single-store\` (work happens on main)

**Created**: 2026-10-09

**Status**: Draft

**Input**: User description: "Migrate all mastery/progress readers from the legacy localStorage mastery-signals log to IndexedDB (progress-store), so child export/import (v4) round-trips fully. Bug found 2026-10-09: after export → delete profile → import, the parent report shows 'Pas encore de résultats'."

## Clarifications

### Session 2026-10-09

- Q: When an import hits an existing profile and the parent picks "replace", is progress merged or overwritten? → A: Overwritten; the child's whole progress record is replaced by the file's, never merged. (auto)
- Q: When is the legacy copy removed after migration? → A: Only after the new record is written and read back successfully; on any failure the legacy copy is kept and migration retries on next launch. (auto)
- Q: How is a failed import kept from leaving partial data? → A: All-or-nothing: the profile and progress are written in one step, or nothing is; the message names the cause (unreadable file, unsupported version, storage full/unavailable). (auto)
- Q: Do monthly scores follow the 50-answer window? → A: No; monthly scores are kept in full as today; only the answer history is windowed (50 per competency and grade). (auto)
- Q: What does an old-version export (without per-grade history) show? → A: Its answers are re-bucketed by competency and grade under the new rule; if grade is missing, mastery is derived from what the file contains and no data is invented. (auto)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Restore a child's progress from an export (Priority: P1)

A parent exports a child's data, deletes the profile (or moves to a new device/browser), then imports the file. The parent report, topic mastery tags, practice-page scores and radar charts show the same results as before the export, not "Pas encore de résultats".

**Why this priority**: This is the reported bug; today import silently restores data that no screen displays, so backups appear to have failed.

**Independent Test**: Practise several activities as a child, note the report/mastery display, export, delete the profile, import the file, and compare the displays.

**Acceptance Scenarios**:

1. **Given** a child with practice history, **When** the parent exports, deletes the profile and imports the file, **Then** the progress report, mastery tags, radar and activity scores match what was shown before.
2. **Given** a child with no practice, **When** export → delete → import is done, **Then** the report still says there are no results yet.
3. **Given** the import conflicts with an existing profile (same id), **When** the parent chooses "replace" or "import as new", **Then** the chosen profile shows the imported progress in every screen.

---

### User Story 2 - Existing families keep their progress (Priority: P1)

A family who already practised before this change opens the app after the update. Their existing progress still displays, and a subsequent export includes it.

**Why this priority**: Without a one-time migration, the change would erase visible progress for every current user.

**Independent Test**: Load the app with progress recorded the old way, open it, verify report and mastery are unchanged, then export and re-import.

**Acceptance Scenarios**:

1. **Given** a device holding progress recorded before this change, **When** the app first opens after the update, **Then** every screen shows that progress unchanged.
2. **Given** the migration already ran, **When** the app opens again, **Then** nothing is duplicated or altered.

---

### User Story 3 - Deleting a child removes all their progress (Priority: P2)

Deleting a profile leaves no progress data behind in any place the app stores it.

**Why this priority**: Privacy and correctness; keeps a re-created child from inheriting stale results.

**Independent Test**: Delete a child with history and confirm no stored progress remains for that id.

**Acceptance Scenarios**:

1. **Given** a child with history, **When** the profile is deleted, **Then** no progress for that child remains and a new profile shows no results.

---

### Edge Cases

- Child has more history than the retained window (50 latest answers per competency and grade): older answers are dropped, and displayed results must not change between before and after an export/import.
- Export file produced by an older app version: it must still import, and its progress must display (mastery derived from what the file contains).
- Storage unavailable or write fails mid-import: the child must not end up with a half-restored profile and no clear message.
- Two children on one device: importing or deleting one never affects the other.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Every screen showing progress (parent report and tree, radar, mastery tags, activity scores, practice-page indicators) MUST derive its numbers from one single stored progress record per child.
- **FR-002**: Recording a practice answer MUST update that single record only; no second copy of progress may be kept.
- **FR-003**: Importing a child export MUST make all progress screens show the imported child's results immediately, without reload.
- **FR-004**: After export → delete → import, all progress displays MUST be identical to before. The stored history MUST therefore keep the 50 most recent answers per competency and grade (the window mastery is computed from), not per subject.
- **FR-005**: On first launch after the update, existing progress recorded the old way MUST be migrated once, without loss, and the old copy removed afterwards.
- **FR-006**: Deleting a child MUST remove all of that child's progress.
- **FR-007**: Export files from previous versions MUST remain importable.
- **FR-008**: A failed import MUST NOT leave partial data and MUST show a specific message.

### Key Entities

- **Child progress record**: the single per-child store of answered questions and monthly scores from which every progress display is derived.
- **Child export file**: the portable, versioned snapshot of a child's profile and progress record.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: After export → delete → import, 100% of progress displays (report, radar, mastery tags, activity scores) match the pre-export values for a child with history.
- **SC-002**: 100% of children with pre-update progress see unchanged displays after the update.
- **SC-003**: Zero cases of an imported child showing "no results" when the file contains practice history.
- **SC-004**: A parent can complete export → delete → import in under 2 minutes.

## Assumptions

- Mastery and report logic (what counts as mastered) is unchanged apart from where its input comes from.
- No server or account; all data stays on-device.
- All user-visible text added or changed ships in en and fr together.
- Existing export schema versions remain readable; a new schema version is acceptable if required by FR-004.
- Retention changes from 50 per subject to 50 per competency and grade; the one-time migration and old exports are re-bucketed under the new rule.
`,S=`# 064 — Place value (PV) activities, Grade 1

## Background

Topic-level review of Valeur de position at G1, run with the \`topic-level-workflow\` skill. Grade-fit check by syllabus-expert; activity design by activity-designer (one call for all G1 PV skills, not one per skill).

Source of truth: \`specs/docs/syllabus-detailed/G1.md\` (PV table) and \`subjects/mathematics/src/syllabus/fr/G1.json\`.

## Decisions (owner)

- **G1-PV-5 moved to G2** (show 43 as 3 tens and 13 ones). It overlaps G2-PV-5, and its activity \`syllabus-g2-partitions-in-non-standard-ways\` is already a G2 slug. Row removed from G1; ID G1-PV-5 left as a gap, as in G2-NT-3.
- **Suggested order (not yet asked):** PV-1, PV-2, PV-3, PV-4, PV-6. Not applied to the table; apply in the syllabus task if the owner agrees.
- K-PV-2 ("teens as ten and some ones") is a K gap. Out of scope here; noted for the K review.

## Done in this feature

- PV intro text rewritten for K–G6 (\`app/apps/web/src/content/intro/{en,fr}/{syllabus,activities}.pv.md\`). Shared by all grades; done once, in feature 064.

## Clarifications

### Session 2026-10-09

- Q: Apply the suggested order (PV-1, PV-2, PV-3, PV-4, PV-6) to the syllabus table? → A: Yes; it matches teaching order and keeps IDs unchanged, so only row order changes in \`G1.md\` and \`fr/G1.json\`, applied in task 2. (auto)
- Q: Where does the lone G1 gap on ±10 within 100 go? → A: Out of scope for 064; belongs to the NS topic. Raise it in the NS review, no row added here. (auto)
- Q: What does "8 of 10 with at most 2 hints, then advance a level" mean at the top level? → A: Standard mastery rule shared with existing activities; reuse the existing mastery/level mechanism, no new logic. (auto)
- Q: Is \`preschool-teen-numbers\` (TWEAK) in scope? → A: Only the minimal tweak so it works as a secondary activity for G1-PV-3; no redesign. (auto)
- Q: Must each new activity have tests and bilingual strings? → A: Yes; en and fr ship together, generation is seeded (no \`Math.random\`), and coverage/validate must pass. (auto)

## Skills and activities

Titles (EN / FR):

| ID | Title EN | Titre FR |
|---|---|---|
| G1-PV-1 | Ten ones make one ten | Dix unités font une dizaine |
| G1-PV-2 | Whole tens: 10 to 90 | Dizaines entières : 10 à 90 |
| G1-PV-3 | Build 2-digit numbers from tens and ones | Construire un nombre avec dizaines et unités |
| G1-PV-4 | Read a number from tens and ones | Lire un nombre à partir des dizaines et unités |
| G1-PV-6 | Know what each digit is worth | Savoir ce que vaut chaque chiffre |

Activities (from design):

- **G1-PV-1:** \`bundle-the-sticks\` (new, drag); \`ten-frame-trade-up\` (new, numeric).
- **G1-PV-2:** \`tens-hundred-square-jump\` (new, puzzle); \`ten-rod-shop\` (new, multiple choice). Replaces \`syllabus-g1-tens-and-ones-multiples-of-ten\` (REDESIGN, see tasks).
- **G1-PV-3:** \`build-it-with-blocks\` (new, build); \`teen-towers\` (new, build). \`preschool-teen-numbers\` (K.PV.2 slug, TWEAK) stays as secondary.
- **G1-PV-4:** \`read-the-blocks\` (new, multiple choice); \`place-value-mat-flip\` (new, puzzle).
- **G1-PV-6:** \`digit-value-detective\` (new, error hunt); \`swap-the-digits\` (new, game).

Mastery for all: 8 of 10 with at most 2 hints, then advance a level.

## Tasks

1. **Syllabus data (done).** G1-PV-5 removed from \`G1.md\` and \`fr/G1.json\`; G2 gained it (see 065). \`syllabus:check\` passes.
2. **Title apply.** Put the titles above into \`fr/G1.json\` and the EN titles in the md, keeping IDs.
3. **Replace the REDESIGN slug** \`syllabus-g1-tens-and-ones-multiples-of-ten\` with \`bundle-the-sticks\` and \`tens-hundred-square-jump\`.
4. **Activity implement:** the new slugs above, en + fr strings together, seeded generation (no \`Math.random\`).
5. **Fix French copy:** in \`teen-towers\`, the feedback "Un nombre en 1x" is a placeholder; replace it with the real French, e.g. "Un nombre de 11 à 19 a 1 dizaine."
6. **Blog write-up** (\`blog/\`), after implementation.

## Decisions taken and open questions

- Grade-fit: keep PV-1, 2, 4, 6 and PV-3 (reordered after PV-2 in teaching order, reference still G1.PV.1).
- Resolved (auto): suggested order applied, see Clarifications.
- Resolved (auto): the ±10 within 100 gap is deferred to the NS review.
`,C=`# 065 — Place value (PV) activities, Grade 2

## Background

Topic-level review of Valeur de position at G2, run with the \`topic-level-workflow\` skill. Grade-fit check by syllabus-expert; one activity-designer call covering all G2 PV skills.

Source of truth: \`specs/docs/syllabus-detailed/G2.md\` and \`subjects/mathematics/src/syllabus/fr/G2.json\`.

## Decisions (owner)

- **G2-PV-6 (4-digit, introduce-only) moved to G3.** Kept as its own G3 row (G3-PV-7, see 066).
- **G2-PV-7 renumbered to match position** (full shift). Final G2 PV table: 1 hundreds build, 2 digit value, 3 zero placeholder, 4 non-standard 2-digit partition (from G1-PV-5), 5 flexible partitioning, 6 add/subtract 10, 7 add/subtract 100.
- **Titles in French use "chiffres significatifs" in full** (owner's choice, relevant to G6).

## Done in this feature

- Syllabus data changed in \`G2.md\` and \`fr/G2.json\` (see tasks). \`syllabus:check\` passes.
- PV intro text covers K–G6 (feature 064).

## Clarifications

### Session 2026-10-09

- Q: Which slug keeps the old split activity \`syllabus-g2-adds-subtracts-10-or-100\`? → A: The ten-only half keeps it (G2-PV-6); the hundred-only half gets a new slug \`syllabus-g2-adds-subtracts-100\` (G2-PV-7). (auto)
- Q: Does the mastery rule (8 of 10, at most 2 misses; advance a level after 3 in a row) apply to every activity here, new and redesigned? → A: Yes, uniform for all 14+ activities; no per-activity override. (auto)
- Q: What number ranges apply per skill? → A: Taken from the G2 rows in \`G2.md\` / \`fr/G2.json\`: PV-1 to PV-5 within 0-999, PV-6 add/subtract 10 within 0-999, PV-7 add/subtract 100 within 0-999 (no crossing below 0 or above 999); exact level ladders decided in plan. (auto)
- Q: Is stored learner progress on renumbered G2-PV-n skill ids migrated? → A: No migration; progress is not carried over, since the app is pre-release and ids follow position. (auto)
- Q: Are the non-redesigned legacy G2 PV activities still shown? → A: Only the listed REDESIGN slugs remain; any other legacy G2 PV activity is left untouched unless the coverage audit flags it. (auto)

## Skills and activities

Titles (EN / FR):

| ID | Title EN | Titre FR |
|---|---|---|
| G2-PV-1 | Ten tens make a hundred; build 3-digit numbers | Dix dizaines font une centaine ; construire des nombres à 3 chiffres |
| G2-PV-2 | Value of each digit in 3-digit numbers | Valeur de chaque chiffre d'un nombre à 3 chiffres |
| G2-PV-3 | Zero holds an empty place | Le zéro garde une place vide |
| G2-PV-4 | Partition a 2-digit number in more than one way | Décomposer un nombre à 2 chiffres de plusieurs façons |
| G2-PV-5 | Show a number in different tens-and-ones ways | Décomposer un nombre de plusieurs façons |
| G2-PV-6 | Add or subtract 10 in your head | Ajouter ou retirer 10 de tête |
| G2-PV-7 | Add or subtract 100 in your head | Ajouter ou retirer 100 de tête |

Activities (from design):

- **G2-PV-1:** \`block-builder-trade-mat\` (new); \`bundle-the-hundred\` (new); \`syllabus-g2-partitions-three-digit-numbers\` (REDESIGN → read-the-blocks multiple choice).
- **G2-PV-2:** \`digit-spotlight\` (new); \`place-value-mystery-number\` (new). Shares \`syllabus-g2-digit-value-in-three-digit-number\` (REDESIGN).
- **G2-PV-3:** \`zero-keeper-game\` (new); \`swap-the-zero\` (new).
- **G2-PV-4:** \`regroup-shuffle\` (new); \`syllabus-g2-partitions-in-non-standard-ways\` (REDESIGN → fill-in-the-blank with block hint).
- **G2-PV-5:** \`many-ways-to-build\` (new); \`partition-swap-puzzle\` (new).
- **G2-PV-6:** \`ten-more-ten-less-lift\` (new); \`hundred-chart-ten-moves\` (new). Takes the ten-only half of \`syllabus-g2-adds-subtracts-10-or-100\` (REDESIGN, split).
- **G2-PV-7:** \`hundred-tower-builder\` (new); \`odometer-100-more\` (new). Takes the hundred-only half of the same REDESIGN slug.

Mastery: 8 of 10 with at most 2 misses; advance a level after 3 in a row.

## Tasks

1. **Syllabus data (done).** Rows and IDs changed as above; \`fr/G2.json\` keys renumbered to match. Check OK.
2. **Title apply** into \`fr/G2.json\` and the md (IDs as in the table).
3. **Activity implement or redesign** for the REDESIGN slugs and the new slugs above; en + fr together; seeded generation.
4. **Split** \`syllabus-g2-adds-subtracts-10-or-100\` into a ten-only and a hundred-only activity (one per skill; the tracker's "one activity primary twice" rule applies).
5. **Blog write-up** after implementation.

## Decisions taken and open questions

- Grade-fit: keep PV-1, 2, 3, 4, 5, 6, 7; PV-4 and PV-5 teach-order fine.
- Open: none. The 4-digit preview row was moved to G3 as the owner asked.
`,w=`# 066 — Place value (PV) activities, Grade 3

## Background

Topic-level review of Valeur de position at G3, run with the \`topic-level-workflow\` skill. Grade-fit check by syllabus-expert; one activity-designer call covering all G3 PV skills.

Source of truth: \`specs/docs/syllabus-detailed/G3.md\` and \`subjects/mathematics/src/syllabus/fr/G3.json\`.

## Decisions (owner)

- **G3-PV-7 (divide by 10 and 100) moved to G4** as G4-PV-6, replacing the decimal-scaling row (see 068).
- **G2-PV-6 (4-digit read, introduce-only) moved to G3** as G3-PV-7, its own row.
- **G3-PV-6 narrowed** to ×10 and ×100 on whole numbers (agent recommendation, applied in the design).

## Done in this feature

- Syllabus data changed (G3-PV-7 removed for the divide row, added for the 4-digit read row). \`syllabus:check\` passes.
- PV intro covers K–G6 (feature 064).

## Skills and activities

Titles (EN / FR):

| ID | Title EN | Titre FR |
|---|---|---|
| G3-PV-1 | Value of each digit in 4-digit numbers | Valeur de chaque chiffre d'un nombre à 4 chiffres |
| G3-PV-2 | Partition 4-digit numbers; zero as placeholder | Décomposer un nombre à 4 chiffres ; rôle du zéro |
| G3-PV-3 | Add or subtract 1, 10, 100, 1000 | Ajouter ou retirer 1, 10, 100, 1000 |
| G3-PV-4 | Round to the nearest 10 | Arrondir à la dizaine près |
| G3-PV-5 | Round to the nearest 100 | Arrondir à la centaine près |
| G3-PV-6 | Multiply by 10 and 100 by shifting digits | Multiplier par 10 et 100 en décalant les chiffres |
| G3-PV-7 | Read a 4-digit number with blocks (introduce-only) | Lire un nombre à 4 chiffres avec des blocs (introduction) |

Activities (from design):

- **G3-PV-1:** \`digit-worth-cards\` (new, match-up); \`digit-spotlight\` (new, multiple choice). Existing \`syllabus-g3-digit-value-and-partitioning-4-digit\` (TWEAK → seeded generator).
- **G3-PV-2:** \`partition-puzzle\` (new); \`zero-placeholder-spot\` (new). Shares the TWEAKed slug above.
- **G3-PV-3:** \`odometer-roll\` (new, dial); \`which-digit-changes\` (new); \`number-hop\` (new). Existing \`syllabus-g3-adds-subtracts-1-10-100-1000\` (REDESIGN).
- **G3-PV-4:** \`round-to-ten-hill\` (new); \`nearest-ten-sort\` (new). Existing \`syllabus-g3-rounds-to-nearest-10-and-100\` (REDESIGN, split).
- **G3-PV-5:** \`which-hundred-snap\` (new); \`round-it-right\` (new). Takes the hundred half of the same split.
- **G3-PV-6:** \`digit-slide\` (new); \`where-did-the-zero-go\` (new). Existing \`syllabus-g3-multiplies-by-10-100-mentally\` and \`syllabus-g4-multiplies-divides-by-10-100-1000\` (REDESIGN, flat).
- **G3-PV-7:** \`thousand-block-stack\` (new, explore); \`four-digit-place-peek\` (new, peek). Introduce only; no mastery gate.

Mastery: 5 of 6 at the current level; two misses in a row step down. G3-PV-7 is complete after three numbers explored.

## Tasks

1. **Syllabus data (done).** Check OK.
2. **Title apply** into \`fr/G3.json\` and md.
3. **Activity implement or redesign** for the TWEAK and REDESIGN slugs listed, and new slugs above.
4. **Split** the rounding slug into the 10 and 100 halves.
5. **Blog write-up** after implementation.

## Clarifications

### Session 2026-10-09

- Q: Should G3-PV-7 (4-digit read) move to G4 or stay introduce-only at G3? → A: Stays at G3, introduce-only, no mastery gate; the old "move to G4" referred to the divide row, already moved (see Decisions). (auto)
- Q: Is rounding to the nearest 1000 in scope? → A: Out of scope for 066; no G3 row exists. Flagged for the G4 feature (068) to decide. (auto)
- Q: Are 4-digit comparing and ordering in scope? → A: Out of scope; they belong to Number Sense (NS). 066 covers PV only. (auto)
- Q: How is the rounding slug split? → A: \`syllabus-g3-rounds-to-nearest-10-and-100\` is redesigned into a PV-4 (tens) slug and a PV-5 (hundreds) slug; the old slug redirects to the PV-4 one, en + fr strings ship together. (auto)
- Q: How does the mastery rule apply to PV-7? → A: Not applied; PV-7 completes after three numbers explored in either activity. (auto)

## Decisions taken and open questions

- Resolved: PV-7 stays introduce-only (see Clarifications).
- Resolved: 1000-rounding and 4-digit comparing/ordering are out of scope here.
`,T=`# 067 — Place value (PV) activities, Grade 4

## Background

Topic-level review of Valeur de position at G4, run with the \`topic-level-workflow\` skill. Grade-fit check by syllabus-expert; one activity-designer call covering all G4 PV skills.

Source of truth: \`specs/docs/syllabus-detailed/G4.md\` and \`subjects/mathematics/src/syllabus/fr/G4.json\`.

## Decisions (owner)

- **G4-PV-3 stops at hundredths.** G5 owns thousandths (G5-PV-6).
- **G4-PV-6 (decimal scaling by 10, 100, 1000) removed; G5-PV-1 owns it.** The row is replaced by "divide multiples of 10 and 100 by 10 and 100" (moved from G3-PV-7).

## Done in this feature

- Syllabus data changed (G4-PV-3 narrowed, G4-PV-6 replaced). \`syllabus:check\` passes.

## Clarifications

### Session 2026-10-09

- Q: Does G4-PV-5 own decimal results of dividing by 1000 (4500 ÷ 1000 = 4.5)? → A: Yes, G4-PV-5 owns it; results are limited to hundredths (no thousandths), consistent with the G4-PV-3 cap. (auto)
- Q: Are order and words for numbers to millions in scope? → A: No. NS owns them; G4-PV-1 covers digit value only. (auto)
- Q: Is rounding to the nearest 1000 covered here? → A: Yes for G4-PV-4 ("any place" includes thousands); the G3 gap stays with feature 066. (auto)
- Q: Does the mastery rule (8 of 10, all six places reached) apply to other skills? → A: It is specific to G4-PV-1; other skills use the default 8 of 10. (auto)
- Q: Are new and redesigned activity strings shipped in both languages? → A: Yes, en and fr ship together. (auto)

## Skills and activities

Titles (EN / FR):

| ID | Title EN | Titre FR |
|---|---|---|
| G4-PV-1 | Digit value in numbers to millions | Valeur des chiffres jusqu'aux millions |
| G4-PV-2 | Expanded form and the ten-times rule | Forme développée et règle du dix fois plus |
| G4-PV-3 | Decimal place value to hundredths | Valeur des chiffres décimaux jusqu'aux centièmes |
| G4-PV-4 | Round whole numbers to any place | Arrondir un entier à une position donnée |
| G4-PV-5 | Multiply and divide whole numbers by 10, 100, 1000 | Multiplier, diviser un entier par 10, 100, 1000 |
| G4-PV-6 | Divide multiples of 10 and 100 by 10 and 100 | Diviser des multiples de 10 et 100 par 10 et 100 |

Activities (from design):

- **G4-PV-1:** \`digit-value-sort\` (new, sort); \`syllabus-g4-extends-place-value-to-millions\` (REDESIGN → "Digit Detective" multiple choice, six places).
- **G4-PV-2:** \`expanded-form-builder\` (new, build); \`ten-times-ladder\` (new, game).
- **G4-PV-3:** \`decimal-place-value-hundredths\` (new, G4 version of the G5 slug); \`hundredths-magnifier\` (new, trimmed from \`thousandths-magnifier\`). The thousandths zoom moves to G5-PV-6.
- **G4-PV-4:** \`round-to-the-landmark\` (new, game); \`rounding-place-chooser\` (new, multiple choice).
- **G4-PV-5:** \`digit-slider-machine\` (new, build); \`syllabus-g4-multiplies-divides-by-10-100-1000\` (TWEAK → seeded generator with decimal results and zero traps).
- **G4-PV-6:** \`undo-the-shift\` (new, matching); \`shift-or-zero-trap\` (new, error hunt).

Mastery: 8 of 10 with all six places reached (PV-1).

## Tasks

1. **Syllabus data (done).** Check OK.
2. **Title apply** into \`fr/G4.json\` and md.
3. **Activity implement or redesign** for the REDESIGN and TWEAK slugs and new slugs above.
4. **Move** \`thousandths-magnifier\` from G4-PV-3 to G5-PV-6 in the md.
5. **Blog write-up** after implementation.

## Decisions taken and open questions

- Open: is the decimal ÷1000 result (4500 ÷ 1000 = 4.5) owned by G4-PV-5 or G5? Designer says G4-PV-5.
- Open: order and words for numbers to millions may sit in NS (not checked).
- Open: rounding to the nearest 1000 is missing in G3 and G4 (see feature 066).
`,E=`# 068 — Place value (PV) activities, Grade 5

## Background

Topic-level review of Valeur de position at G5, run with the \`topic-level-workflow\` skill. Grade-fit check by syllabus-expert; one activity-designer call covering all G5 PV skills.

Source of truth: \`specs/docs/syllabus-detailed/G5.md\` and \`subjects/mathematics/src/syllabus/fr/G5.json\`.

## Decisions (owner)

- **G5 owns thousandths** (G5-PV-6). G4 stops at hundredths.
- **G5 owns decimal scaling by 10, 100, 1000** (G5-PV-1). G4-PV-6 removed.
- \`thousandths-magnifier\` moves here from G4-PV-3 (reused at a harder level for G5-PV-6).

## Done in this feature

- Syllabus data unchanged in G5 (its rows already matched the decisions). \`syllabus:check\` passes.

## Clarifications

### Session 2026-10-09

- Q: Are the "optional" activities (\`shift-or-zero-trap\`, \`tenth-twins\`) in scope? → A: Out of scope for this feature; build only if time remains after required ones. (auto)
- Q: Is "done" for an activity bilingual? → A: Yes, every new or redesigned activity ships en + fr strings together. (auto)
- Q: Does \`thousandths-magnifier\` keep its slug and get a harder G5 level, or is it cloned? → A: Keep slug; add a harder level and reference it from G5-PV-6 only. (auto)
- Q: Does G5-PV-2 need a G6 follow-up, and where does G5-PV-7 live? → A: Defer G6 follow-up to the G6 review; G5-PV-7 stays under PV. (auto)
- Q: What validation gates a task as complete? → A: \`scripts/validate.ps1\` ALL PASS (lint, typecheck, test, coverage) plus \`syllabus:check\`. (auto)

## Skills and activities

Titles (EN / FR):

| ID | Title EN | Titre FR |
|---|---|---|
| G5-PV-1 | Multiply and divide decimals by powers of ten | Multiplier et diviser par 10, 100, 1000 |
| G5-PV-2 | Multiply and divide by 0.1 and 0.01 | Multiplier et diviser par 0,1 et 0,01 |
| G5-PV-3 | Read and write powers of ten | Lire et écrire les puissances de 10 |
| G5-PV-4 | Round decimals to a chosen place | Arrondir un décimal à une position donnée |
| G5-PV-5 | Choose sensible rounding for a situation | Choisir un arrondi adapté à la situation |
| G5-PV-6 | Name digit values in decimals to thousandths | Donner la valeur des chiffres d'un décimal jusqu'aux millièmes |
| G5-PV-7 | Order and place decimals to thousandths | Ordonner et placer des décimaux (millièmes) |

Activities (from design):

- **G5-PV-1:** \`powers-of-ten-slider\` (new); \`digit-shift-machine\` (new); \`shift-or-zero-trap\` (optional, shared with G4-PV-6).
- **G5-PV-2:** \`scale-down-slider\` (new); \`bigger-or-smaller-sorter\` (new); \`tenth-twins\` (optional).
- **G5-PV-3:** \`ten-power-match\` (new); \`exponent-tower-tens\` (new).
- **G5-PV-4:** \`syllabus-g5-rounds-decimals-to-given-places\` (REDESIGN, keep slug, multiple choice with distractors); \`nearest-hundredth-hopper\` (new).
- **G5-PV-5:** \`round-to-fit-the-job\` (new); \`how-precise-is-enough\` (new).
- **G5-PV-6:** \`syllabus-g5-extends-place-value-right-of-decimal\` (REDESIGN, home); \`decimal-place-value-chart\` (new); \`expanded-form-builder\` (new, G5 level); \`thousandths-magnifier\` (moved from G4).
- **G5-PV-7:** \`decimal-zoom-line\` (new); \`decimal-order-duel\` (new).

Mastery: 8 of 10 at the top level; 3 correct in a row advances a level.

## Tasks

1. **Syllabus data (done, nothing to change).**
2. **Title apply** into \`fr/G5.json\` and md.
3. **Activity implement or redesign** for the two REDESIGN slugs and new ones above.
4. **Move** \`thousandths-magnifier\` to G5-PV-6 in the md; remove from G4-PV-3 (done in feature 067 task 4).
5. **Blog write-up** after implementation.

## Decisions taken and open questions

- Open: does G5-PV-2 (× and ÷ by 0.1 and 0.01) need a G6 follow-up? (Agent suggested it leads into 10⁻ⁿ in G6.)
- Open: should G5-PV-7 live under PV or DEC? Kept under PV for now.
`,D=`# 069 — Place value (PV) activities, Grade 6

## Background

Topic-level review of Valeur de position at G6, run with the \`topic-level-workflow\` skill. Grade-fit check by syllabus-expert; one activity-designer call covering all G6 PV skills. All six G6 rows are NEW.

Source of truth: \`specs/docs/syllabus-detailed/G6.md\` and \`subjects/mathematics/src/syllabus/fr/G6.json\`.

## Decisions (owner)

- **All six rows kept at G6.** No owner change.
- **French "chiffres significatifs" in full** in titles and copy (owner's choice; "c.s." not used).

## Done in this feature

- Syllabus data unchanged in G6 (\`syllabus:check\` passes).

## Clarifications

### Session 2026-10-09

- Q: Standard form for small numbers (A × 10⁻ⁿ): add to G6 or leave for G7? → A: Leave for G7; G6-PV-4/5 cover large numbers only, PV-6 covers negative powers as decimals only. (auto)
- Q: Apply suggested order PV-1, PV-2, PV-3, PV-6, PV-4, PV-5 (no prerequisites listed)? → A: Yes, as the recommended display/practice order only; no syllabus prerequisite data changes (keeps \`syllabus:check\` unchanged). (auto)
- Q: Rounding large whole numbers / numbers past millions: add a G6 row? → A: Out of scope for 069; check NS coverage in a separate feature. (auto)
- Q: If \`powers-of-ten-zoom\` is deferred, does G6-PV-6 still ship? → A: Yes; PV-6 ships with \`place-value-ladder\` and \`exponent-match-up\`; the zoom is added when its component lands. (auto)

## Skills and activities

Titles (EN / FR):

| ID | Title EN | Titre FR |
|---|---|---|
| G6-PV-1 | Identify significant figures in a number | Repérer les chiffres significatifs d'un nombre |
| G6-PV-2 | Round to 1, 2 or 3 significant figures | Arrondir à 1, 2 ou 3 chiffres significatifs |
| G6-PV-3 | Choose sensible accuracy and estimate to 1 s.f. | Précision adaptée et estimation à 1 chiffre significatif |
| G6-PV-4 | Write large numbers in standard form | Écrire les grands nombres en notation scientifique |
| G6-PV-5 | Compare numbers in standard form | Comparer des nombres en notation scientifique |
| G6-PV-6 | Zero and negative powers of ten as decimals | Puissances de dix nulles et négatives en décimaux |

Activities (from design, all new):

- **G6-PV-1:** \`which-digits-count\` (tap-to-select, five levels); \`digit-highlighter\` (numeric, flashlight).
- **G6-PV-2:** \`sf-snap\` (slider zoom, numeric); \`round-or-wrong\` (error hunt).
- **G6-PV-3:** \`measure-to-sf\` (multiple choice, virtual ruler); \`how-precise-headline\` (sort).
- **G6-PV-4:** \`planet-scale-cards\` (matching); \`standard-or-not\` (true-false then fix).
- **G6-PV-5:** \`biggest-by-exponent\` (ordering race); \`giant-showdown\` (multiple choice with reason).
- **G6-PV-6:** \`place-value-ladder\` (fill-in); \`exponent-match-up\` (memory); \`powers-of-ten-zoom\` (custom explorable, **needs a new component**).

Mastery: 8 of 10 at level 4 or above; 5 in a row advances a level. Seeded shuffle, no repeats within a session.

## Tasks

1. **Title apply** into \`fr/G6.json\` and md, using the full "chiffres significatifs".
2. **Activity implement** for the 11 activities above, en + fr together, seeded generation.
3. **Build the \`powers-of-ten-zoom\` component** (custom explorable). Separate task, may be deferred.
4. **Blog write-up** after implementation.

## Decisions taken and open questions

- Resolved (auto): small-number standard form left for G7.
- Open: G6 rows list no prerequisites; suggested order PV-1, PV-2, PV-3, PV-6, PV-4, PV-5 (negative powers before standard form). Resolved (auto): order applied as display/practice order only.
- Resolved (auto, out of scope): no G6 row on rounding large whole numbers or on numbers past millions — check NS before adding.
`,O=`# Spec 070: Maternelle PK-core activities (>=3 ludic per skill)

Status: draft. Inputs: docs/activity-sweep/maternelle-ux-decisions.md, docs/product/maternelle-maths-scope.md. Depends on spec 051 (scene groups F1-F6, not duplicated here).

## Goal
Each of the 27 PK-core K skills reaches >=3 ludic (non-multiple-choice) activities, en+fr.

## Requirements
- FR-1 New/redesigned activities per the decisions doc (OP-2, ALG-1, DAT-1, DAT-3, PSR-1, PSR-4, GEO, POS, MEA, TIM), chosen to exactly 3 per skill.
- FR-2 Common rules: en+fr keys together; layoutSeed (no Math.random); mastery 5/6 per level; reducedMotion honoured; aria-label per scene; wrong answer replays the truth, no penalty, hint after 2 misses; ladder L1 2 items, L2 3, L3 4-5.
- FR-3 clap-stomp-copy: no mic/motion; two big tap buttons, keyboard/switch path, captions for audio.
- FR-4 how-many-left uses counters scene tap.direction "down", no typed input. preschool-odd-one-out L3 gated to older rung. sort-and-count tap-to-sort, MC fallback.
- FR-5 Verify PickGroupScene 44px target and fr \`scene.pick.groupAria\`; verify no-penalty/replay in numeric and MC plugins.
- FR-6 Blog post (specs -> app -> blog rule).

- FR-7 Cross-scene rules (acceptance criteria, all scenes): pre-readers get a replay-audio button (en+fr), icon tiles with aria-labels, picture/text fallback for spoken prompts; reduced motion shows a static end state for watch-and-decide scenes (balance-play, size-train, ramp-race, line-up-the-ends); non-motion reward (sticker row), optional sound with mute; every drag scene has tap-to-place, targets min 44px aim 64px; L1 uses 2 bins, 3-4 bins only L2-L3; bin/card labels are wrapping i18n keys; no text inside images.
- FR-8 GEO/POS/MEA/TIM review: which-word-fits moved to G3 (not K-MEA-1); build-a-longer (PK.MEA.2/K.MEA.2), heavy-light-bins (K.MEA.2), sky-clock-order and time-word-sort (PK.TIM.2) get source rows; K-GEO-8 adds solids-roll-bins; per-skill fixes in tasks Phases 4-5.
- FR-9 Spec 051 dependency: new scenes memory-flip, ramp/race, put-in/on/under (for shape-memory, shape-pairs-trail, ramp-race, put-it-there) must exist or be mapped to existing scenes first (T003a).

## Out of scope
Remaining 54 K-only skills: follow-up spec 071 (owner: keep all K skills).

## Open assumption
Decisions doc names 19 skills explicitly; the other 8 of the 27 are already at >=3 or listed in the scope doc; T002 reconciles the list.
`,k='# Feature Specification: Preschool (pre-G1) Second Release\n\n**Feature Branch**: `preschool-second-release`\n\n**Created**: 2026-09-27\n\n**Status**: Implemented (done 2026-09-27; see `improvements/preschool-second-release-activities.md`). `speckit-clarify` was skipped (unattended run).\n\n**Input**: `docs/product/PRESCHOOL-READINESS.md` section 2 ("Entries and activities", entries\nE3/E6/E7/E10/E11/E13/E15/E18/E19/E21/E22/E24/E26–E28/E30/E31/E33), corrected by section 5\n(syllabus-expert review, 2026-09-27), plus the scope decisions listed in this spec\'s own\nAssumptions section.\n\n**Repository root for all code work: `mathematics` (`subjects/mathematics`).** Nothing in this\nfeature touches `app` or `blog`. This is the same repository-root convention\n`045-preschool-first-release` used; see that feature\'s `plan.md` line 6 for precedent.\n\n## Summary\n\n`045-preschool-first-release` shipped 21 laddered pre-school activities in\n`packages/syllabus-content-p`. This feature is the **second batch** from the same\n`PRESCHOOL-READINESS.md` backlog: 29 more activities (20 multiple-choice, 3 true/false, 3\nfill-in-the-blank, 2 numeric-answer, 1 matching) covering 18 new `gradeCount: 3` competencies,\nbuilt the same way — one existing-template factory call per activity, appended into the\n**existing** `packages/syllabus-content-p` package (not a new package). Every activity applies the\ncorrections `PRESCHOOL-READINESS.md` section 5 made to section 2\'s original wording; several merge\ntwo or three of section 2\'s lettered sub-activities into one activity where section 5 called for a\nmerge. Nothing here touches the framework\'s P list in `curriculum.ts`\'s\n`skillsFrameworkSkillsByDomain` (section 5: "update the framework\'s P list... once entries are\nstable" — they are not yet), and nothing here modifies any already-shipped 045 competency, plugin,\nexercise id, or bank file.\n\n## Verified before scoping this feature\n\n- **`template-ordering` still has no `toPresentation`** (`packages/template-ordering/src/factory.ts`,\n  the comment block just above `createSession`: "No `toPresentation`... this template simply\n  doesn\'t implement it"). Re-confirmed 2026-09-27. Every ORD-based section-2 sub-activity is\n  therefore excluded from this batch, same as 045 (see "Out of scope" below for the exact list).\n- **`template-fill-in-the-blank`\'s factory export is `createFillInBlankPlugin`** (not\n  "…InTheBlank…" — `packages/template-fill-in-the-blank/src/factory.ts` line 76). Used by three\n  activities in this batch (A25, A34, A50).\n- **`template-matching`\'s factory export is `createMatchingPlugin`**\n  (`packages/template-matching/src/factory.ts`), already used by\n  `packages/syllabus-content-g3/src/content.ts`\'s `classifiesTriangles`. Used by one activity in\n  this batch (A40), which — per the syllabus-expert review already on record in\n  `PRESCHOOL-READINESS.md` section 5 — degrades to a per-pair multiple-choice sequence, not real\n  drag-matching. Acceptable per that review; not a new finding.\n- **`packages/syllabus-content-p` wiring is already generic**: `src/curriculum.ts`,\n  `src/pluginRegistry.ts` and `src/exerciseDefinitions.ts` already import the whole\n  `pCompetencies` / `pPlugins` / `pExercises` arrays from `@learncoreskills/syllabus-content-p`\n  (045\'s T003). This feature only needs to extend those three arrays inside\n  `packages/syllabus-content-p/src/{competencies,content,index}.ts` — **no edits to `app`-facing\n  files in `mathematics/src/` are needed**, unlike 045 which had to add that wiring for the first\n  time.\n- **Must-carry-forward corrections against already-shipped 045 code — verified compliant,\n  no fix needed in this feature** (checked 2026-09-27, so `activity-implementer` does not need to\n  re-derive this):\n  - `packages/syllabus-content-p/src/banks/numeralTwins.ts` (E8 B): its `STYLES` comment already\n    reads "no mirrored or rotated glyphs (section 5 fix)" and `wrongAsk` never uses a mirror\n    transform — compliant.\n  - `packages/syllabus-content-p/src/banks/compareNumerals.ts` `buildBiggerNumberBank` (E14 A):\n    its own doc comment already reads "in one plain font (section 5: no size cues)" and every\n    option is a plain `String(n)` — compliant.\n  - `packages/syllabus-content-p/src/banks/shapes.ts` `buildShapeHuntBank` (E20 A) and its `GLYPHS`\n    table: doc comment already reads "no tilted squares, no diamonds" — the tilted-square\n    orientation contrast from section 5 is not present as an escalating difficulty axis, it is\n    simply not used at all, which satisfies "limit... to an orientation contrast only" at least as\n    strictly as required — compliant, no change needed.\n\n## User Scenarios & Testing\n\n### One story per activity group (P1 for the first few, P2 for the rest — same convention as 045)\n\nAs a 5–6 year old, I practise one small pre-school skill at a time with big picture/emoji prompts\nand a few answer buttons, at a level (L1 easy, L2, L3 hard) that adapts to how I am doing.\n\n**Independent test (every activity)**: generating questions for grades 1, 2 and 3 over many seeds\nyields only questions whose keyed answer is correct and whose options/pairs are distinct; the same\n(grade, seed) always yields the same question; every prompt has en and fr text.\n\nAcceptance scenarios common to all activities (same as 045):\n\n1. Given the activity registered in the package, when a session is created at grade g in 1..3,\n   then it contains 10 well-formed questions of that level.\n2. Given a grade with no bank content (outside 1..3), the plugin rejects it.\n3. Given a correct/incorrect answer, `validateAnswer` and the mastery signal agree with the keyed\n   answer, and the signal\'s `competencyId` is the activity\'s competency.\n\n### Edge cases\n\n- A merged activity (A25, A34, A48) must still expose exactly one plugin/competency pairing per the\n  table below — the "merge" is in content design, not in shipping two half-activities.\n- The matching-based activity (A40) must still pass with 3 levels of distinct-pair banks even\n  though the template only ever presents one pair\'s choice at a time (per-pair MC degrade).\n- E13 B ("Which Row Has More?") L3 entries must include at least one case where the visually\n  longer row has *fewer* items, so the keyed answer cannot be inferred from row length alone.\n- E22 B ("Sides or Corners?") L3 must include a circle (0 sides/corners) as a genuine trick option,\n  not merely as a distractor shape name.\n\n## Requirements\n\n- **FR-001**: Every activity is built from an existing template factory\n  (`createMultipleChoicePlugin` / `createTrueFalsePlugin` / `createNumericAnswerPlugin` /\n  `createFillInBlankPlugin` / `createMatchingPlugin`); no new template package.\n- **FR-002**: Every activity has a ladder of exactly 3 levels mapped to `grade` 1..3\n  (`gradeCount: 3`, `targetGrade: "P"`), each level with >= 5 distinct bank entries (>= 4 distinct\n  pairs per level for the one matching activity, matching 045\'s and `classifiesTriangles`\'\n  precedent).\n- **FR-003**: All child-facing text exists as en and fr (both locales carried in the question),\n  same as 045.\n- **FR-004**: Visuals are emoji / Unicode glyphs in a single-line prompt (the app renders\n  `presentation.prompt` in a plain `<p>`; newlines collapse, per 045\'s own finding). No audio,\n  images, or new UI.\n- **FR-005**: No already-shipped competency id, plugin id, exercise key, or bank file from\n  `045-preschool-first-release` is modified. New competency ids follow the established\n  `math.<area>.preschool-<slug>` convention and do not collide with any of the 12 ids already in\n  `packages/syllabus-content-p/src/competencies.ts`.\n- **FR-006**: Each new competency\'s `frameworkSkillId` reuses the nearest existing\n  `mathematics.P.0`–`mathematics.P.9` bullet (best-effort, same as 045), or is omitted where no P\n  bullet fits (same as 045\'s `preschoolPatternsCompetency`) — see the table below for the mapping\n  and reasoning.\n- **FR-007**: Numeric-answer prompts (A37, A41) must read correctly with the app\'s appended\n  " = ?" (045\'s FR-006 constraint, carried forward).\n- **FR-008**: Generation is deterministic (seeded) and tests reach the package\'s 95% coverage bar\n  (same threshold 045 met).\n- **FR-009**: Merged activities (A25, A34, A48) ship as a single plugin/competency/bank each — the\n  section-2 sub-activities that section 5 called out for merging (E7 A+B; E16 C+E18 A; E31 A+C)\n  are not shipped as two separate activities.\n- **FR-010**: The framework P list (`mathematics/src/curriculum.ts`\'s\n  `skillsFrameworkSkillsByDomain`) is **not** edited by this feature.\n- **FR-011**: Out of scope for this feature (need a component that does not exist yet, or are\n  otherwise deferred — see Assumptions for the full reasoning per item): E1, E2, E4, E5 B, E6 B,\n  E9 A, E10 A, E12 C, E14 C, E18 C, E19 C, E22 C, E24 B, E24 C, E26 A, E26 C, E27 A, E27 C, E29 A,\n  E29 C, E31 B, E32 C, E33 C, E34.\n\n## New activities (each = one task group)\n\n| Id | Entry | Template | Ladder L1 / L2 / L3 | Competency (new) | `frameworkSkillId` |\n|---|---|---|---|---|---|\n| A22 | E3 A "How Many All Together?" | MC | count then hidden, pick numeral: 1-5 / 6-10 / 11-20 | `math.number-sense.preschool-cardinality` | `mathematics.P.0` |\n| A23 | E3 B "How Many?" (last-tag highlight, section 5 rewording — not "is the pile 5?") | TF | judge a stated total against the highlighted last count-word: off-by-one / rearranged / object added after tagging | same as A22 | `mathematics.P.0` |\n| A24 | E6 A "Hidden Bag" | MC | count on from 2 / from 4-6 / from any start ≤10 | `math.number-sense.preschool-count-on` | `mathematics.P.0` |\n| A25 | E7 "Neighbour Houses" (A+B merged per section 5; B\'s redundant MC dropped) | FIB | after only 1-5 / before+after 1-9 / mixed ≤10 | `math.number-sense.preschool-before-after` | `mathematics.P.0` |\n| A26 | E10 B "Pick the Right Way" (not E10 A — needs a handwriting canvas) | MC | numerals 0-5 / 0-9 / reversed-numeral distractors | `math.number-sense.preschool-numeral-formation` | `mathematics.P.3` |\n| A27 | E11 A "Empty Basket" | MC | objects removed one by one, pick numeral (down to 0): 1-3 / 1-5 / 0-5 | `math.number-sense.preschool-zero` | `mathematics.P.0` |\n| A28 | E11 B "Is Zero a Number?" | TF | empty vs non-empty / two different empty containers / general zero statements | same as A27 | `mathematics.P.0` |\n| A29 | E13 A "Still the Same?" | TF | spread only / both rows change / object added (hardest = "no") | `math.comparing-ordering.preschool-conservation` | `mathematics.P.2` |\n| A30 | E13 B "Which Row Has More?" | MC | equal counts, aligned / staggered / longer row has fewer (length is a trap) | same as A29 | `mathematics.P.2` |\n| A31 | E15 A "Who Is Nth?" | MC | 1st-3rd upright / 1st-5th upright / row order flipped | `math.number-sense.preschool-ordinals` | none (no exact P bullet — see Assumptions) |\n| A32 | E15 B "Ordinal or Count?" | MC | same picture, alternating ordinal-position vs cardinal-count question | same as A31 | none |\n| A33 | E15 C "Colour the 2nd" (section 5 rewording — not the ORD "place the runner" version) | MC | 2nd of 3 / 3rd of 5 / 4th of 5 | same as A31 | none |\n| A34 | E18 "Two Hands" / "Push Together" (E16 C + E18 A merged per section 5) | FIB | `_ and 3 make 5` (one blank) / `2 and _ make 5` (one blank, other side) / `_ and _ make 5` (both blanks) | `math.addition.preschool-decompose-five` | `mathematics.P.4` |\n| A35 | E18 B "Another Way" | MC | pick a different valid split of 5 (mirror splits excluded as distractors) | same as A34 | `mathematics.P.4` |\n| A36 | E19 A "Story + Objects" | MC | choose + or −: join only / join+take-away kept separate / mixed | `math.problem-solving.preschool-story-problems` | `mathematics.P.4` |\n| A37 | E19 B "Solve It" | NUM | join or take-away word problem, sums/differences ≤5 / ≤8 / ≤10 | same as A36 | `mathematics.P.4` |\n| A38 | E21 A "Solid or Flat?" | MC | ball/cube vs circle/square / more pairs / mixed with distractor words | `math.geometry.preschool-solids` | `mathematics.P.8` |\n| A39 | E21 B "Name the Thing" | MC | ball, dice, party hat (cone), tin (cylinder) — name the pictured solid | same as A38 | `mathematics.P.8` |\n| A40 | E21 C "Solid Match" (matching → per-pair MC degrade, acceptable per syllabus-expert) | MAT | solid name ↔ example object, 4 pairs / 5 pairs / 6 pairs | same as A38 | `mathematics.P.8` |\n| A41 | E22 A "Count the Sides" | NUM | 3-4 sides / up to 6 / circle included as a 0-sides trick case | `math.geometry.preschool-sides-corners` | `mathematics.P.8` |\n| A42 | E22 B "Sides or Corners?" | MC | does N refer to sides or corners: clear cases / more shapes / circle (0/0) at L3 | same as A41 | `mathematics.P.8` |\n| A43 | E24 A only "Robot Says" (not E24 B/C — need a grid-movement component) | MC | forward/back / up/down / two-step instruction | `math.geometry.preschool-movement` | `mathematics.P.9` |\n| A44 | E26 B only "Which Goes in the Middle?" (not E26 A/C — ORD unusable) | MC | 3 clearly different sizes / closer sizes / mixed orientation | `math.measurement.preschool-order-by-size` | `mathematics.P.5` |\n| A45 | E27 B only "Odd One Out" (not E27 A/C — need a drag-to-bins component) | MC | colour / shape / size as the odd-one-out attribute | `math.mathematical-reasoning.preschool-sorting` | none |\n| A46 | E28 "Name the Group" (section 5: FIB → picture-tap MC) | MC | 2 picture options / 3 options / word + picture options mixed | `math.mathematical-reasoning.preschool-name-the-rule` | none |\n| A47 | E30 "Fill the Gap" (section 5: FIB → picture-tap MC) | MC | AB pattern gap / AAB-ABB gap / ABC gap | `math.mathematical-reasoning.preschool-missing-item` | none |\n| A48 | E31 "When Does It Happen? / Sun or Moon?" (A+C merged per section 5) | MC | direct 2-option Sun/Moon (folds in former C) / morning-afternoon-evening / full day-part set | `math.time.preschool-parts-of-day` | `mathematics.P.6` |\n| A49 | E33 A "Yesterday, Today, Tomorrow" | MC | label a highlighted day on a 3-day strip: simple / with an event / reversed strip | `math.time.preschool-yesterday-today-tomorrow` | `mathematics.P.7` |\n| A50 | E33 B "What Day Was It?" (section 5: made dependent on E32\'s day-of-week sequence) | FIB | given "today is <weekday>", fill in yesterday / tomorrow / either, using the same week sequence as the existing `preschool-days-in-order`/`preschool-day-after` activities | same as A49 | `mathematics.P.7` |\n\n29 activities total: 20 MC, 3 TF, 3 FIB, 2 NUM, 1 MAT. 18 new competencies.\n\n## Out of scope for this feature\n\nKept out because they need a component that does not exist yet (`app` has no drag/bin/container/\ngrid-movement/handwriting-canvas presentation — same finding 045 already made and re-verified\nhere), are explicitly deferred by section 5, or are ORD-based (`template-ordering` has no\n`toPresentation`, re-verified above):\n\n- **Needs a new component** (future batch): E2 (tap-to-tag counter), E4 (drag-n-into-container),\n  E10 A (handwriting canvas), E18 C (drag-into-two-containers), E24 B/C (grid movement), E27 A/C\n  (drag-to-bins), E34 (pictograph presentation).\n- **ORD-based, `template-ordering` unusable**: E1, E6 B, E26 A, E26 C, E29 A, E29 C, E31 B, E32 C,\n  E33 C.\n- **Explicitly deferred by section 5 / this spec\'s own scoping**: E5 B ("how many dots, no flash"\n  MC — flagged as its own future-batch item, not bundled here), E9 A (matching degrade already\n  covered differently by 045\'s `preschool-show-the-number`; not re-derived here), E12 C (needs\n  line-drawing → animated pairing, not specified precisely enough yet), E14 C (ORD number line),\n  E19 C (section 5: "intent unclear → replace" — dropped, not implemented with guessed intent),\n  E22 C (section 5: "drop"), E32 C (ORD, also redundant with 045\'s two E32 activities).\n\n## Key Entities\n\n- **Competency** (`@learncoreskills/competency-model`): the 18 new ids in the table above, each\n  `subjectId: "mathematics"`, `targetGrade: "P"`, `gradeCount: 3`, `prerequisiteIds: []` (same\n  shape as 045\'s `preschool(...)` helper in `competencies.ts` — reuse it, do not duplicate it).\n- **Plugin** (`@learncoreskills/plugin-engine`): one per row of the activities table, built by the\n  named template factory, registered in `packages/syllabus-content-p/src/index.ts`\'s `ACTIVITIES`\n  array (append after A21, do not reorder existing rows).\n- **Bank entry**: per-template content entry (`MultipleChoiceContentEntry` /\n  `TrueFalseContentEntry` / `FillInBlankContentEntry` / `NumericAnswerContentEntry` /\n  `MatchingContentEntry`), grade 1..3, en+fr text, built with the existing `banks/helpers.ts`\n  builders (`mcEntry`/`mcEntryLoc`/`tfEntry`/`numEntry`/`dedupe`/etc.) — extend that shared helpers\n  file rather than duplicating its logic in a new one, same as every 045 bank file did.\n\n## Success Criteria\n\n- **SC-001**: All 29 activities are registered in `packages/syllabus-content-p`\'s `ACTIVITIES`\n  array, appear in the exercise list, and pass their tests.\n- **SC-002**: `scripts/validate.ps1 -Repo mathematics` (lint, typecheck, test, coverage) passes.\n- **SC-003**: Each activity has its own task group and can be reviewed independently, same as 045.\n- **SC-004**: No existing 045 competency id, plugin id, exercise key, bank file, or test is\n  modified — a diff of this feature touches only new files plus additive changes to\n  `competencies.ts`, `content.ts`, and `index.ts`.\n\n## Assumptions\n\n- **Merge direction for A25/A34/A48** (section 5 names the merge but not which sub-activity\'s\n  format survives): this spec picks the format that best fits the un-merged skill and folds the\n  other sub-activity\'s *content* in as extra ladder variety, not as a second template — documented\n  per-row in the activities table above. If `activity-implementer` reads section 2/5 differently,\n  the competency ids and scope stay the same; only bank wording would change.\n- **E28/E30 scope reduced to one sub-activity each**: section 5\'s correction text ("FIB adds\n  reading/spelling load → picture-tap MC") only flags the FIB sub-activity (B, "Name the Group" /\n  "Fill the Gap") for rewording; this spec ships only that corrected sub-activity for each entry,\n  not the already-MC A/C sub-activities from section 2, to keep this batch\'s scope to what section\n  5 actually revised. A/C for E28/E30 are left for a future batch alongside E29 A/C.\n- **New competencies with no exact P framework bullet** (`preschool-ordinals`,\n  `preschool-sorting`, `preschool-name-the-rule`, `preschool-missing-item`) omit\n  `frameworkSkillId` entirely, the same pattern 045 used for `preschoolPatternsCompetency` (no\n  bullet describes patterns yet either). This is intentional, not an oversight — see FR-006.\n- **Area-prefix convention** (`math.<area>.preschool-<slug>`) follows the already-shipped G1\n  precedent: `math.mathematical-reasoning.sorts-objects-by-criterion` and\n  `math.mathematical-reasoning.continues-repeating-pattern`\n  (`packages/syllabus-content-g1/src/competencies.ts`) justify the `mathematical-reasoning` prefix\n  used for A45/A46/A47; `math.problem-solving.choose-addition-or-subtraction`\n  (same file) justifies the `problem-solving` prefix used for A36/A37.\n- **A40\'s matching degrade** is a known, already-reviewed limitation (`PRESCHOOL-READINESS.md`\n  section 5\'s template check), not a new finding requiring its own ticket — `classifiesTriangles`\n  in `packages/syllabus-content-g3` already ships successfully with the same degrade.\n- **Mastery rule**: unchanged from 045 — levels map to `grade` 1..3 via `Competency.gradeCount`;\n  the app\'s own mastery-threshold engine (4-of-5 vs 80%-rolling-window) is out of scope for this\n  repo, same as 045\'s own note on this.\n',A="---\n\ndescription: \"Task list template for feature implementation\"\n---\n\n# Tasks: Competency Model\n\n**Input**: Design documents from `/specs/001-competency-model/` (spec.md, plan.md, research.md,\ndata-model.md, contracts/competency-model.api.md, quickstart.md)\n\n**Tests**: Included. ADR-0004 sets a hard 95%+ line/branch coverage gate for every\n`packages/core/*` package, and Constitution Principle VI (Determinism & Testability,\nNON-NEGOTIABLE) requires validation logic to be heavily unit-tested — this is a project-wide\nstandard, not an ad hoc choice for this feature.\n\n**Organization**: Tasks are grouped by user story (spec.md User Story 1 = P1, User Story 2 = P2)\nso each can be implemented and tested independently. All paths are relative to the\n`learncoreskills/app` repo (not this `specs` repo).\n\n## Format: `[ID] [P?] [Story] Description`\n\n- **[P]**: Can run in parallel (different files, no dependencies)\n- **[Story]**: Which user story this task belongs to (US1, US2)\n\n## Path Conventions\n\nSingle npm workspace package, per plan.md's Project Structure:\n`packages/core/competency-model/{src,tests}` inside the `learncoreskills/app` repo.\n\n---\n\n## Phase 1: Setup (Shared Infrastructure)\n\n**Purpose**: Scaffold the new workspace package.\n\n- [x] T001 Create `packages/core/competency-model/package.json` (name\n  `@learncoreskills/competency-model`, `private: true`, zero runtime dependencies, `vitest` +\n  `@vitest/coverage-v8` as devDependencies, `test`/`coverage` npm scripts) and\n  `packages/core/competency-model/tsconfig.json` extending the workspace root's strict TS config\n  (`strict: true`, no implicit `any`, per ADR-0001/0004)\n- [x] T002 Add `packages/core/competency-model` to the `workspaces` array in the repo root\n  `package.json` (create the root `package.json`/npm workspace if it does not exist yet)\n- [x] T003 [P] Add a `vitest.config.ts` in `packages/core/competency-model/` with a coverage\n  threshold of 95% lines/branches (`coverage.thresholds.lines = 95`, `branches = 95`), per\n  ADR-0004's hard gate for core packages\n\n**Checkpoint**: `npm test --workspace packages/core/competency-model` runs (with zero tests) and\n`npm run coverage --workspace packages/core/competency-model` is wired up.\n\n---\n\n## Phase 2: Foundational (Blocking Prerequisites)\n\n**Purpose**: The shared type definitions both user stories build on.\n\n**⚠️ CRITICAL**: Both user stories add fields/behavior around this same `Competency` type — it\nmust exist first.\n\n- [x] T004 Define `Subject` (`id: string`, `nameKey: string`) and `Competency` (`id: string`,\n  `nameKey: string`, `descriptionKey: string`, `subjectId: string`, `level: 1|2|3|4|5`,\n  `tierCount: number`, `prerequisiteIds: string[]`) interfaces in\n  `packages/core/competency-model/src/types.ts`, exactly per `data-model.md`'s field tables —\n  `nameKey`/`descriptionKey` are translation-key strings, never literal display text (FR-002)\n- [x] T005 Create empty `packages/core/competency-model/src/validate.ts` (module scaffold, no\n  logic yet) and `packages/core/competency-model/src/index.ts` barrel file re-exporting\n  `./types` (US1/US2 add exports to it incrementally)\n\n**Checkpoint**: Types compile under strict mode; both user stories can now build on them\nindependently.\n\n---\n\n## Phase 3: User Story 1 - Stable target for mastery tracking (Priority: P1) 🎯 MVP\n\n**Goal**: A competency+tier pair is addressable unambiguously, prerequisites are readable but\nnever block, and malformed data (duplicate ids, dangling references, cycles) is rejected at\nvalidation time rather than silently accepted.\n\n**Independent Test**: Define a handful of competencies (single subject) with mock tiers, run\n`validateCompetencyModel`, and confirm valid data passes, prerequisite cycles are rejected, and\nprerequisites never gate anything — matches `quickstart.md` Scenarios 1–2 and both edge cases\nabout zero prerequisites / circular prerequisites.\n\n### Tests for User Story 1\n\n- [x] T006 [P] [US1] Write unit tests in\n  `packages/core/competency-model/tests/validate.test.ts` for: unique `id` enforcement\n  (`duplicate-competency-id` error), `tierCount` must be an integer `>= 1` (`invalid-tier-count`\n  error — including a 1-tier competency being *valid*, per spec edge case), `level` must be an\n  integer in `1..5` (`invalid-level` error)\n- [x] T007 [P] [US1] Write unit tests in\n  `packages/core/competency-model/tests/validate.test.ts` for: a competency with zero\n  `prerequisiteIds` validates successfully with no placeholder required (spec edge case), an\n  unknown id inside `prerequisiteIds` produces an `unknown-prerequisite-reference` error, and a\n  direct or transitive cycle in `prerequisiteIds` (e.g. `a → b → a`) produces a\n  `prerequisite-cycle` error naming every competency id in the cycle\n\n### Implementation for User Story 1\n\n- [x] T008 [US1] Implement `detectPrerequisiteCycles(competencies: Competency[]): string[]` in\n  `packages/core/competency-model/src/validate.ts` — pure function, returns the ids participating\n  in any cycle over the `prerequisiteIds` graph, or `[]` if acyclic (depends on T004; makes T007\n  pass)\n- [x] T009 [US1] Implement `validateCompetencyModel(subjects, competencies): ValidationResult`\n  in `packages/core/competency-model/src/validate.ts` with the `ValidationResult`/`ValidationError`\n  union from `contracts/competency-model.api.md`, wiring in: duplicate-id detection,\n  `tierCount >= 1` and `level` in `1..5` bounds checks, dangling `prerequisiteIds` detection, and\n  `detectPrerequisiteCycles` from T008 (depends on T008; makes T006/T007 pass) — subject-related\n  checks (`duplicate-subject-id`, `unknown-subject-reference`) are added in US2 (T013)\n- [x] T010 [US1] Implement `findCompetency(competencies: Competency[], id: string): Competency |\n  undefined` in `packages/core/competency-model/src/validate.ts` — never throws on a missing id\n- [x] T011 [US1] Export `Competency`, `validateCompetencyModel`, `detectPrerequisiteCycles`,\n  `findCompetency`, `ValidationResult`, `ValidationError` from\n  `packages/core/competency-model/src/index.ts`\n\n**Checkpoint**: User Story 1 is fully functional and testable independently — a single-subject\ncompetency set with prerequisites can be validated, with prerequisites never blocking access\n(confirmed by test intent in T007, not by any filtering code — there is none to write).\n\n---\n\n## Phase 4: User Story 2 - Subject- and language-agnostic authoring (Priority: P2)\n\n**Goal**: A second subject (and a second competency in it) can be added as pure data, with zero\nchange to `types.ts`/`validate.ts`, and malformed subject references are rejected the same way\nprerequisite references are in US1.\n\n**Independent Test**: Add a competency for a hypothetical second subject (e.g. \"science\") to an\nalready-valid US1 dataset and confirm `validateCompetencyModel` still reports valid with no code\nchange required — matches `quickstart.md` Scenario 3.\n\n### Tests for User Story 2\n\n- [x] T012 [P] [US2] Write unit tests in\n  `packages/core/competency-model/tests/index.test.ts` for: unique `Subject.id` enforcement\n  (`duplicate-subject-id` error), a `Competency.subjectId` referencing a non-existent subject\n  producing an `unknown-subject-reference` error, and — matching `quickstart.md` Scenario 3 —\n  adding a second `Subject` plus a `Competency` referencing it to an existing valid\n  mathematics-only dataset still validates successfully using the same imported types/functions\n  with no edits to `src/types.ts` or `src/validate.ts`\n\n### Implementation for User Story 2\n\n- [x] T013 [US2] Extend `validateCompetencyModel` in\n  `packages/core/competency-model/src/validate.ts` (from T009) with `duplicate-subject-id` and\n  `unknown-subject-reference` checks against the `subjects: Subject[]` parameter\n- [x] T014 [US2] Export `Subject` from `packages/core/competency-model/src/index.ts` (extends\n  T011)\n\n**Checkpoint**: Both user stories are independently functional — US1's dataset still validates\nunchanged, and a second subject can be layered in as data only.\n\n---\n\n## Phase 5: Polish & Cross-Cutting Concerns\n\n**Purpose**: Confirm the package meets the project's quality bar end-to-end.\n\n- [x] T015 Run `npm run coverage --workspace packages/core/competency-model` and confirm\n  `src/validate.ts` and `src/index.ts` are at or above the 95% line/branch threshold from T003;\n  add any missing edge-case test to close a gap (ADR-0004)\n- [x] T016 [P] Run `npx eslint packages/core/competency-model` and\n  `npx tsc --noEmit -p packages/core/competency-model/tsconfig.json`; fix any lint or strict-mode\n  type error (ADR-0004: ESLint + Prettier + `strict: true` workspace-wide)\n- [x] T017 Walk through every scenario in `quickstart.md` against the finished package (Scenarios\n  1–3 plus both edge cases) and confirm each expected outcome holds\n\n---\n\n## Dependencies & Execution Order\n\n### Phase Dependencies\n\n- **Setup (Phase 1)**: No dependencies — start immediately.\n- **Foundational (Phase 2)**: Depends on Setup — BLOCKS both user stories.\n- **User Story 1 (Phase 3)**: Depends on Foundational only. No dependency on US2.\n- **User Story 2 (Phase 4)**: Depends on Foundational; T013 textually extends the\n  `validateCompetencyModel` body T009 wrote, so within a solo implementation order T009 before\n  T013 — but US2's own tests (T012) and independent test criteria stand on their own and do not\n  require US1's tests to exist.\n- **Polish (Phase 5)**: Depends on both user stories being complete.\n\n### Parallel Opportunities\n\n- T003 can run alongside T001/T002 (Setup).\n- T006 and T007 (both US1 tests, same file but non-overlapping test blocks) can be drafted in\n  parallel then merged.\n- T012 (US2 tests) can be drafted in parallel with any US1 task once Foundational (Phase 2) is\n  done, since it lives in a separate test file.\n- T016 can run in parallel with T015/T017 (Polish).\n\n---\n\n## Parallel Example: User Story 1\n\n```bash\n# After Phase 2 (Foundational) completes:\nTask: \"Write unit tests for competency identity & tier validation in tests/validate.test.ts\"\nTask: \"Write unit tests for prerequisite handling (zero prereqs, dangling refs, cycles) in tests/validate.test.ts\"\n```\n\n---\n\n## Implementation Strategy\n\n### MVP First (User Story 1 Only)\n\n1. Complete Phase 1 (Setup) + Phase 2 (Foundational).\n2. Complete Phase 3 (User Story 1) — a single-subject competency model with prerequisite/cycle\n   validation is already independently useful and unblocks `004-exercise-plugin-engine` for its\n   one V1 competency (`math.addition.mental`).\n3. **STOP and VALIDATE**: run `quickstart.md` Scenarios 1–2 and both edge cases.\n4. Proceed to Phase 4 (User Story 2) to prove multi-subject extensibility before moving to the\n   next spec in the V1 build order (`004-exercise-plugin-engine`).\n\n### Incremental Delivery\n\n1. Setup + Foundational → package scaffolded, types compile.\n2. User Story 1 → single-subject validation works, mergeable on its own.\n3. User Story 2 → multi-subject extensibility proven, no earlier code touched except the one\n   planned extension point (T013).\n4. Polish → coverage/lint gates green, quickstart fully walked.\n",j='---\n\ndescription: "Task list template for feature implementation"\n---\n\n# Tasks: Mastery Engine\n\n**Input**: Design documents from `/specs/003-mastery-engine/` (spec.md, plan.md, research.md,\ndata-model.md, contracts/mastery-engine.api.md, quickstart.md)\n\n**Tests**: Included. ADR-0004 sets a hard 95%+ line/branch coverage gate for every\n`packages/core/*` package, and Constitution Principle VI (Determinism & Testability,\nNON-NEGOTIABLE) requires mastery calculations to be heavily unit-tested — this is a project-wide\nstandard, not an ad hoc choice for this feature.\n\n**Organization**: Tasks are grouped by user story (spec.md User Story 1 = P1, User Story 2 = P2)\nso each can be implemented and tested independently. All paths are relative to the\n`learncoreskills/app` repo (not this `specs` repo).\n\n## Format: `[ID] [P?] [Story] Description`\n\n- **[P]**: Can run in parallel (different files, no dependencies)\n- **[Story]**: Which user story this task belongs to (US1, US2)\n\n## Path Conventions\n\nSingle npm workspace package, per plan.md\'s Project Structure:\n`packages/core/mastery-engine/{src,tests}` inside the `learncoreskills/app` repo, depending on the\nalready-implemented `packages/core/plugin-engine` (spec 004) and `packages/core/competency-model`\n(spec 001).\n\n---\n\n## Phase 1: Setup (Shared Infrastructure)\n\n**Purpose**: Scaffold the new workspace package.\n\n- [x] T001 Create `packages/core/mastery-engine/package.json` (name\n  `@learncoreskills/mastery-engine`, `private: true`, two runtime dependencies —\n  `@learncoreskills/plugin-engine` and `@learncoreskills/competency-model`, both via npm\n  workspaces\' `"*"` version range — plus `vitest` + `@vitest/coverage-v8` as devDependencies,\n  `test`/`coverage` npm scripts) and `packages/core/mastery-engine/tsconfig.json` extending the\n  workspace root\'s strict TS config (`strict: true`, no implicit `any`, per ADR-0001/0004). No\n  change to the root `package.json` `workspaces` array is needed — `packages/core/*` already\n  matches this path.\n- [x] T002 [P] Add a `vitest.config.ts` in `packages/core/mastery-engine/` with a coverage\n  threshold of 95% lines/branches (`coverage.thresholds.lines = 95`, `branches = 95`), per\n  ADR-0004\'s hard gate\n\n**Checkpoint**: `npm test --workspace packages/core/mastery-engine` runs (with zero tests) and\n`npm run coverage --workspace packages/core/mastery-engine` is wired up.\n\n---\n\n## Phase 2: Foundational (Blocking Prerequisites)\n\n**Purpose**: The shared type definitions both user stories build on.\n\n**⚠️ CRITICAL**: Both user stories produce/consume these same result shapes — they must exist\nfirst.\n\n- [x] T003 Define `TierMastery` (`competencyId: string`, `tier: number`, `percentage: number |\n  "not-started"`, `attemptsConsidered: number`, `mastered: boolean`) and `CompetencyMastery`\n  (`competencyId: string`, `percentage: number`, `tiers: TierMastery[]`) interfaces in\n  `packages/core/mastery-engine/src/types.ts`, exactly per `data-model.md`\'s field tables\n- [x] T004 Create empty `packages/core/mastery-engine/src/tier-mastery.ts`,\n  `packages/core/mastery-engine/src/competency-mastery.ts`, and\n  `packages/core/mastery-engine/src/rank.ts` (module scaffolds, no logic yet) and\n  `packages/core/mastery-engine/src/index.ts` barrel file re-exporting `./types` (US1/US2 add\n  exports to it incrementally)\n\n**Checkpoint**: Types compile under strict mode; both user stories can now build on them\nindependently.\n\n---\n\n## Phase 3: User Story 1 - See a trustworthy mastery percentage (Priority: P1) 🎯 MVP\n\n**Goal**: Per-tier mastery reports "not started" below 5 attempts, an accurate percentage (and\nmastered flag at ≥90%) at 5+ attempts using at most the last 10, and per-competency mastery\naverages across every tier the competency defines — unattempted tiers count as 0%, never excluded.\n\n**Independent Test**: Feed synthetic `MasterySignal[]` sequences into `computeTierMastery` and\n`computeCompetencyMastery` and assert the resulting percentages match the expected calculation —\nmatches `quickstart.md` Scenarios 1–3 and the zero-attempts / more-than-10-attempts / determinism\nedge cases.\n\n### Tests for User Story 1\n\n- [x] T005 [P] [US1] Write unit tests in\n  `packages/core/mastery-engine/tests/tier-mastery.test.ts` for: fewer than 5 signals at a\n  `{ competencyId, tier }` → `percentage: "not-started"`, `mastered: false`,\n  `attemptsConsidered` equal to the actual count (AS-1); 10 signals with 9 correct → `percentage:\n  90`, `mastered: true`, `attemptsConsidered: 10` (AS-2); exactly 5 signals (boundary) reports a\n  numeric percentage, not "not-started"\n- [x] T006 [P] [US1] Write unit tests in\n  `packages/core/mastery-engine/tests/tier-mastery.test.ts` for: more than 10 signals at a\n  `{ competencyId, tier }` — only the most recent 10 (by `timestamp`, regardless of input array\n  order) are considered, confirmed by constructing older all-wrong + newer all-correct signals and\n  asserting the result reflects only the newer 10 (edge case); signals for a different\n  `competencyId` or `tier` are excluded from the count\n- [x] T007 [P] [US1] Write unit tests in\n  `packages/core/mastery-engine/tests/competency-mastery.test.ts` for: a competency with 5 tiers\n  where only 2 have ≥5 attempts (each 100%) — `computeCompetencyMastery(...).percentage === 40`\n  (`(100 + 100 + 0 + 0 + 0) / 5`), proving unattempted tiers are averaged in as 0%, not excluded\n  (AS-3); zero signals at all for the competency — `percentage === 0`, every entry in `tiers` has\n  `percentage: "not-started"` (zero-attempts edge case)\n- [x] T008 [P] [US1] Write a unit test in\n  `packages/core/mastery-engine/tests/competency-mastery.test.ts` for determinism: calling\n  `computeCompetencyMastery` twice with the same `signals` array (any number of times) returns a\n  deep-equal `CompetencyMastery` both times (FR-005, SC-001)\n\n### Implementation for User Story 1\n\n- [x] T009 [US1] Implement `computeTierMastery(signals: MasterySignal[], competencyId: string,\n  tier: number): TierMastery` in `packages/core/mastery-engine/src/tier-mastery.ts` (import\n  `MasterySignal` from `@learncoreskills/plugin-engine`) — filters by `competencyId`/`tier`, sorts\n  by `timestamp` ascending, takes the last `min(10, count)`, returns `"not-started"` below 5\n  considered, else `(correctCount / attemptsConsidered) * 100` with `mastered` at `>= 90` (depends\n  on T003; makes T005/T006 pass)\n- [x] T010 [US1] Implement `computeCompetencyMastery(signals: MasterySignal[], competency:\n  Competency): CompetencyMastery` in `packages/core/mastery-engine/src/competency-mastery.ts`\n  (import `Competency` from `@learncoreskills/competency-model`) — calls `computeTierMastery`\n  (T009) once per tier `1..competency.tierCount`, averages each tier\'s `percentage` treating\n  `"not-started"` as `0` (depends on T009; makes T007/T008 pass)\n- [x] T011 [US1] Export `TierMastery`, `CompetencyMastery`, `computeTierMastery`,\n  `computeCompetencyMastery` from `packages/core/mastery-engine/src/index.ts`\n\n**Checkpoint**: User Story 1 is fully functional and testable independently — trustworthy,\ndeterministic per-tier and per-competency mastery percentages, with unattempted tiers never\ninflating the average.\n\n---\n\n## Phase 4: User Story 2 - Prioritize weaknesses for practice (Priority: P2)\n\n**Goal**: A set of `CompetencyMastery` results can be ranked from weakest to strongest.\n\n**Independent Test**: Compute mastery for several mock competencies and confirm\n`rankWeakestCompetencies` returns them ordered from lowest to highest `percentage` — matches\n`quickstart.md` Scenario 4.\n\n### Tests for User Story 2\n\n- [x] T012 [P] [US2] Write unit tests in `packages/core/mastery-engine/tests/rank.test.ts` for:\n  `rankWeakestCompetencies` given competencies with percentages `[80, 20, 50]` returns them ordered\n  `[20, 50, 80]` (AS-1); the input array is not mutated (the function returns a new array); an\n  empty input returns an empty array\n\n### Implementation for User Story 2\n\n- [x] T013 [US2] Implement `rankWeakestCompetencies(masteries: CompetencyMastery[]):\n  CompetencyMastery[]` in `packages/core/mastery-engine/src/rank.ts` — returns a new array sorted\n  ascending by `percentage` (depends on T003; makes T012 pass)\n- [x] T014 [US2] Export `rankWeakestCompetencies` from `packages/core/mastery-engine/src/index.ts`\n\n**Checkpoint**: Both user stories are independently functional — US1\'s per-tier/per-competency\ncalculations are untouched, and weakness ranking now works over their output.\n\n---\n\n## Phase 5: Polish & Cross-Cutting Concerns\n\n**Purpose**: Confirm the package meets the project\'s quality bar end-to-end.\n\n- [x] T015 Run `npm run coverage --workspace packages/core/mastery-engine` and confirm\n  `src/tier-mastery.ts`, `src/competency-mastery.ts`, `src/rank.ts`, and `src/index.ts` are at or\n  above the 95% line/branch threshold from T002; add any missing edge-case test to close a gap\n  (ADR-0004)\n- [x] T016 [P] Run `npx eslint packages/core/mastery-engine` and\n  `npx tsc --noEmit -p packages/core/mastery-engine/tsconfig.json`; fix any lint or strict-mode\n  type error (ADR-0004: ESLint + Prettier + `strict: true` workspace-wide)\n- [x] T017 Walk through every scenario in `quickstart.md` against the finished package (Scenarios\n  1–4 plus all three edge cases) and confirm each expected outcome holds\n\n---\n\n## Dependencies & Execution Order\n\n### Phase Dependencies\n\n- **Setup (Phase 1)**: No dependencies — start immediately.\n- **Foundational (Phase 2)**: Depends on Setup — BLOCKS both user stories.\n- **User Story 1 (Phase 3)**: Depends on Foundational only. No dependency on US2.\n- **User Story 2 (Phase 4)**: Depends on Foundational only for its own types (`CompetencyMastery`)\n  — does not require US1\'s functions to exist to be tested in isolation (T012 constructs\n  `CompetencyMastery` fixtures directly), though it is naturally exercised together with US1\'s\n  output in practice.\n- **Polish (Phase 5)**: Depends on both user stories being complete.\n\n### Parallel Opportunities\n\n- T002 can run alongside T001 (Setup).\n- T005, T006 (US1 tier-mastery tests, same file but non-overlapping blocks) can be drafted in\n  parallel then merged; T007, T008 similarly for competency-mastery tests.\n- T012 (US2) can be drafted in parallel with any US1 task once Foundational (Phase 2) is done,\n  since it lives in a separate test file and only needs `CompetencyMastery` fixtures.\n- T016 can run in parallel with T015/T017 (Polish).\n\n---\n\n## Parallel Example: User Story 1\n\n```bash\n# After Phase 2 (Foundational) completes:\nTask: "Write tier-mastery threshold/percentage tests in tests/tier-mastery.test.ts"\nTask: "Write tier-mastery recency-window tests in tests/tier-mastery.test.ts"\nTask: "Write competency-mastery averaging tests in tests/competency-mastery.test.ts"\n```\n\n---\n\n## Implementation Strategy\n\n### MVP First (User Story 1 Only)\n\n1. Complete Phase 1 (Setup) + Phase 2 (Foundational).\n2. Complete Phase 3 (User Story 1) — trustworthy per-tier/per-competency mastery is already\n   independently useful and is the number every other consumer (UI display, weakness ranking)\n   needs first.\n3. **STOP and VALIDATE**: run `quickstart.md` Scenarios 1–3 and the zero-attempts /\n   more-than-10-attempts / determinism edge cases.\n4. Proceed to Phase 4 (User Story 2) to prove weakness ranking before moving on — V1\'s build order\n   (`specs/README.md`) has no further core packages after this one; remaining V1 work is\n   `006-accounts-privacy` (partial).\n\n### Incremental Delivery\n\n1. Setup + Foundational → package scaffolded, types compile.\n2. User Story 1 → per-tier and per-competency mastery work, mergeable on its own.\n3. User Story 2 → weakness ranking proven, no earlier code touched.\n4. Polish → coverage/lint gates green, quickstart fully walked.\n',M=`---

description: "Task list template for feature implementation"
---

# Tasks: Daily Practice

**Input**: Design documents from \`/specs/005-daily-practice/\` (spec.md, plan.md, research.md,
data-model.md, contracts/daily-practice.api.md, quickstart.md)

**Tests**: Included. ADR-0004 sets a hard 95%+ line/branch coverage gate for every
\`packages/core/*\` package, and Constitution Principle VI (Determinism & Testability,
NON-NEGOTIABLE) requires this kind of deterministic, trust-critical logic to be heavily
unit-tested — this is a project-wide standard, not an ad hoc choice for this feature.

**Organization**: Tasks are grouped by user story (spec.md User Story 1 = P1, User Story 2 = P2,
User Story 3 = P3) so each can be implemented and tested independently. All paths are relative to
the \`learncoreskills/app\` repo (not this \`specs\` repo).

## Format: \`[ID] [P?] [Story] Description\`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)

## Path Conventions

Single npm workspace package, per plan.md's Project Structure:
\`packages/core/daily-practice/{src,tests}\` inside the \`learncoreskills/app\` repo, depending only
on the already-implemented \`packages/core/mastery-engine\` (spec 003) —
\`@learncoreskills/competency-model\` is not a dependency (\`competencyId\` is a plain \`string\`,
\`tierCount\` is read as \`mastery.tiers.length\`). No \`apps/web\` changes — UI is Out of Scope.

**Note on FR-005**: only the "not persisted" half of FR-005 is verified by this feature's tasks
(satisfied by this package never touching storage). The "regenerated on every app load, keyed by
the local calendar date" half has no task here by design — this package has no notion of "today"
or "app load" (see plan.md Scale/Scope); a future UI-wiring feature owns calling
\`generateDailySession\` at the right time and is where that half gets verified.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Scaffold the new workspace package.

- [x] T001 Create \`packages/core/daily-practice/package.json\` (name
  \`@learncoreskills/daily-practice\`, \`private: true\`, \`type: module\`, \`main\`/\`types\` both
  \`./src/index.ts\`, one runtime dependency — \`@learncoreskills/mastery-engine\` via npm
  workspaces' \`"*"\` version range — plus \`vitest\` + \`@vitest/coverage-v8\` + \`typescript\` as
  devDependencies, \`test\`/\`coverage\`/\`typecheck\`/\`lint\` npm scripts matching
  \`packages/core/mastery-engine/package.json\`) and
  \`packages/core/daily-practice/tsconfig.json\` extending the workspace root's strict TS config.
  No change to the root \`package.json\` \`workspaces\` array is needed — \`packages/core/*\` already
  matches this path.
- [x] T002 [P] Add a \`vitest.config.ts\` in \`packages/core/daily-practice/\` with a coverage
  threshold of 95% lines/branches/functions/statements (\`coverage.provider: "v8"\`,
  \`include: ["src/**/*.ts"]\`), matching \`packages/core/mastery-engine/vitest.config.ts\` exactly,
  per ADR-0004's hard gate

**Checkpoint**: \`npm test --workspace packages/core/daily-practice\` runs (with zero tests) and
\`npm run coverage --workspace packages/core/daily-practice\` is wired up.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: The shared type definitions and scaffolding every user story builds on.

**⚠️ CRITICAL**: All three user stories produce/consume the same \`DailySession\` result shape —
it must exist first.

- [x] T003 Define \`DailySessionBlock\` (\`competencyId: string\`, \`tier: number\`, \`questionCount:
  10\`) and \`DailySession\` (\`blocks: DailySessionBlock[]\`) interfaces in
  \`packages/core/daily-practice/src/types.ts\`, exactly per \`data-model.md\`'s field tables — do
  not add \`id\`/\`date\`/\`childId\` fields (data-model.md: "No \`id\`, \`date\`, or \`childId\` field on
  \`DailySession\` itself... this package has no notion of 'today' or 'which child'")
- [x] T004 Create empty \`packages/core/daily-practice/src/daily-session.ts\` (module scaffold, no
  logic yet) and \`packages/core/daily-practice/src/index.ts\` barrel file re-exporting \`./types\`
  (US1/US2/US3 add exports to it incrementally)

**Checkpoint**: Types compile under strict mode; all three user stories can now build on them
independently.

---

## Phase 3: User Story 1 - Get a daily session that targets weaknesses (Priority: P1) 🎯 MVP

**Goal**: Generate exactly 5 fixed 10-question blocks (50 questions total) for one competency, 3
always at the child's derived current tier and 2 "swing" blocks placed at the next/previous tier
based on that tier's own mastery data, clamped at the Tier 1 floor and Tier 5 ceiling.

**Independent Test**: Construct synthetic \`CompetencyMastery\` fixtures (mastered / not-started /
attempted-not-mastered at various tiers) and assert \`generateDailySession\` places blocks exactly
per research.md Decisions 1-4 — matches \`quickstart.md\` Scenarios 1-3 and the floor edge case.

### Tests for User Story 1

- [x] T005 [P] [US1] Write unit tests in \`packages/core/daily-practice/tests/allocation.test.ts\`
  for deriving the current tier (research.md Decision 2): given a \`CompetencyMastery\` where tier 2
  is \`mastered: true\` and every other tier defaults to \`"not-started"\`, the derived current tier
  is 1 — NOT 2 — because tier 1 is also not mastered and is the lowest such tier (derivation picks
  the lowest-numbered tier with \`mastered === false\`, ignoring that tier 2 happens to be mastered);
  given every tier \`mastered: true\`, the derived current tier is \`tiers.length\` (the last tier),
  not tier 1
- [x] T006 [P] [US1] Write unit tests in \`packages/core/daily-practice/tests/allocation.test.ts\`
  for the swing-tier rule (research.md Decision 3) at a current tier with no floor/ceiling
  involved (e.g. tier 3 of 5): \`percentage: "not-started"\` (<5 attempts, tiers 1-2 mastered so
  derivation naturally lands on tier 3) → both swing blocks at tier 2 (previous); \`percentage\` a
  number with \`mastered: false\` (attempted, <90%, same natural derivation) → exactly 1 swing block
  at tier 4 and 1 at tier 2 (split evenly); \`mastered: true\` (≥90%) → both swing blocks at tier 4
  (next) — note natural derivation can never land currentTier on an already-mastered, non-ceiling
  tier (Decision 2 always skips past a mastered tier), so this sub-case must use \`forcedTier: 3\`
  with tier 3 itself mastered to exercise the branch in isolation
- [x] T007 [P] [US1] Write unit tests in \`packages/core/daily-practice/tests/allocation.test.ts\`
  for floor/ceiling redirection (research.md Decision 4, spec Edge Cases): current tier = 1 with
  \`percentage: "not-started"\` → all 5 blocks at tier 1 (both swing blocks, which would target
  tier 0, redirect to tier 1 instead — quickstart.md Scenario 2); current tier = \`tiers.length\`
  (5) with \`mastered: true\` → 3 blocks at tier 5, 2 blocks at tier 4 (both swing blocks, which
  would target tier 6, redirect to tier 4 instead — quickstart.md edge case "Tier 5 ceiling")
- [x] T008 [P] [US1] Write unit tests in \`packages/core/daily-practice/tests/allocation.test.ts\`
  for the fixed output shape (data-model.md Validation rules, SC-001): for any valid mastery
  fixture, \`session.blocks.length === 5\` exactly; \`session.blocks.reduce((n, b) => n +
  b.questionCount, 0) === 50\` exactly; every block's \`competencyId\` equals the \`competencyId\`
  argument passed in and every block's \`tier\` satisfies \`1 <= tier <= mastery.tiers.length\`; and
  determinism — calling \`generateDailySession\` twice with the same arguments returns a deep-equal
  \`DailySession\` both times (Constitution VI)

### Implementation for User Story 1

- [x] T009 [US1] Implement an internal (non-exported) \`deriveCurrentTier(mastery:
  CompetencyMastery): number\` helper in \`packages/core/daily-practice/src/daily-session.ts\` —
  returns the lowest tier index (1-based) in \`mastery.tiers\` where \`mastered === false\`, or
  \`mastery.tiers.length\` if every tier is mastered (depends on T003; makes T005 pass)
- [x] T010 [US1] Implement an internal \`selectSwingTiers(mastery: CompetencyMastery, currentTier:
  number): [number, number]\` helper in \`packages/core/daily-practice/src/daily-session.ts\` per
  research.md Decision 3 (not-started → \`[previous, previous]\`; attempted-not-mastered →
  \`[next, previous]\`; mastered → \`[next, next]\`) and Decision 4 (any tier \`< 1\` redirects to
  \`currentTier\`; any tier \`> mastery.tiers.length\` redirects to the previous tier) (depends on
  T009; makes T006/T007 pass)
- [x] T011 [US1] Implement \`generateDailySession(competencyId: string, mastery:
  CompetencyMastery): DailySession\` in \`packages/core/daily-practice/src/daily-session.ts\` —
  throws if \`mastery.tiers.length === 0\` (data-model.md Validation rules); computes \`currentTier\`
  via T009; builds exactly 5 blocks of \`questionCount: 10\`: 3 at \`currentTier\` plus one block per
  entry of the pair from T010; every block carries the given \`competencyId\` (depends on T009,
  T010; makes T008 pass)
- [x] T012 [US1] Export \`DailySessionBlock\`, \`DailySession\`, \`generateDailySession\` from
  \`packages/core/daily-practice/src/index.ts\`

**Checkpoint**: User Story 1 is fully functional and testable independently — a daily session
that always targets the child's current tier and swings toward the next/previous tier based on
mastery, correctly clamped at both ends of the tier range.

---

## Phase 4: User Story 2 - Review previously learned skills (Priority: P2)

**Goal**: Confirm the swing-block mechanism built in User Story 1 satisfies the review
requirement (FR-003/SC-002) on its own — no new production code, only verification that the
already-implemented allocation rule provides at least 1 previous-tier block whenever a previous
tier exists and the current tier isn't mastered, rising to at least 2 for the not-started and
Tier-5-ceiling-mastered cases. The Tier 1 floor (no previous tier at all) is explicitly excluded
from this guarantee — that case is already covered by User Story 1's T007.

**Independent Test**: Construct \`CompetencyMastery\` fixtures for all three current-tier states at
a tier greater than 1 — not-started, attempted-but-not-mastered, and the Tier 5 ceiling already
mastered — and confirm the previous-tier block count matches SC-002's two guarantee levels in
every case — matches \`quickstart.md\` Scenario 4 and the "Tier 5 ceiling" edge case.

### Tests for User Story 2

- [x] T013 [P] [US2] Write a unit test in \`packages/core/daily-practice/tests/review.test.ts\` for
  SC-002's not-started case at a tier greater than 1 (spec.md User Story 2 AS-1) — e.g. via
  \`forcedTier: 3\` with tier 3 \`"not-started"\`: 2 of the 5 returned blocks are at the previous tier
  (tier 2), satisfying "at least 2 of the 5 blocks ... at the previous tier." (The Tier 1 floor
  case — where there is no previous tier and all 5 blocks land on tier 1 instead — is US1's T007,
  not a review claim.)
- [x] T014 [P] [US2] Write a unit test in \`packages/core/daily-practice/tests/review.test.ts\` for
  the Tier 5 ceiling edge case (spec.md User Story 2 AS-1): current tier = \`tiers.length\` (5),
  \`mastered: true\` — assert exactly 2 of the 5 blocks are at tier 4 (previous), satisfying "at
  least 2 blocks (20 questions) at the previous tier" even though the current tier is already at
  the mastery ceiling with nowhere to progress to
- [x] T015 [P] [US2] Write a unit test in \`packages/core/daily-practice/tests/review.test.ts\` for
  SC-002's general (weaker) guarantee, the attempted-but-not-mastered case (spec.md User Story 2
  AS-2, \`quickstart.md\` Scenario 4): current tier attempted with \`mastered: false\` (e.g. 60%), not
  at the floor or ceiling — assert exactly 1 of the 5 blocks is at the previous tier and 1 at the
  next tier (research.md Decision 3's 1/1 split), satisfying "at least 1 block (10 questions) at
  the previous tier whenever the current tier isn't mastered" — this is the case \`/speckit-analyze\`
  flagged as previously untested and inconsistent with an earlier, stronger SC-002 wording

### Implementation for User Story 2

No new implementation — User Story 1's \`generateDailySession\` (T009-T011) already produces this
behavior by construction (research.md Decisions 3-4). This phase is test-only, closing the loop
on FR-003/SC-002 as an explicitly verified property rather than an incidental side effect.

**Checkpoint**: Both User Story 1 and User Story 2 are independently verified — the same
implementation satisfies both the weakness-targeting and review requirements, with no
story-specific code branch needed.

---

## Phase 5: User Story 3 - Parent overrides the starting tier (Priority: P3)

**Goal**: A parent/user-supplied tier, when provided, is used as the current tier instead of the
mastery-derived one (FR-006) — the same 3-current/2-swing allocation and floor/ceiling handling
from User Story 1 then runs around it unchanged.

**Independent Test**: Call \`generateDailySession\` with a \`forcedTier\` that differs from what
mastery data would derive, and confirm the forced tier — not the derived one — is used as the
current tier, with swing blocks computed around it exactly as in User Story 1 — matches
\`quickstart.md\` Scenario 5.

### Tests for User Story 3

- [x] T016 [P] [US3] Write unit tests in \`packages/core/daily-practice/tests/override.test.ts\`
  for FR-006: given a mastery fixture that would derive current tier = 1, calling
  \`generateDailySession(competencyId, mastery, { forcedTier: 3 })\` produces 3 blocks at tier 3
  (not tier 1), with the 2 swing blocks placed per the same Decision 3 rule evaluated against
  \`mastery.tiers[2]\` (tier 3's own \`TierMastery\`) — matches \`quickstart.md\` Scenario 5 exactly
  (\`{ 2: 2, 3: 3 }\` for a "not-started" tier 3); given no \`options\` argument (or \`options\` without
  \`forcedTier\`), behavior is unchanged from User Story 1 (current tier is still derived)
- [x] T017 [P] [US3] Write a unit test in \`packages/core/daily-practice/tests/override.test.ts\`
  for the out-of-range case (contracts/daily-practice.api.md, data-model.md Validation rules):
  calling \`generateDailySession(competencyId, mastery, { forcedTier: 0 })\` and \`{ forcedTier:
  mastery.tiers.length + 1 }\` both throw — "MUST throw if \`options.forcedTier\` is supplied and
  outside \`1..mastery.tiers.length\`"

### Implementation for User Story 3

- [x] T018 [US3] Define \`GenerateDailySessionOptions\` (\`forcedTier?: number\`) in
  \`packages/core/daily-practice/src/types.ts\` and extend \`generateDailySession\`'s signature in
  \`packages/core/daily-practice/src/daily-session.ts\` to \`generateDailySession(competencyId:
  string, mastery: CompetencyMastery, options?: GenerateDailySessionOptions): DailySession\` —
  when \`options?.forcedTier\` is present, validate it is an integer in \`1..mastery.tiers.length\`
  (throw otherwise) and use it directly as \`currentTier\`, skipping the T009 \`deriveCurrentTier\`
  call entirely; all downstream logic (T010's swing selection, block assembly) is unchanged
  (depends on T009-T011; makes T016/T017 pass)
- [x] T019 [US3] Export \`GenerateDailySessionOptions\` from
  \`packages/core/daily-practice/src/index.ts\`

**Checkpoint**: All three user stories are independently functional — derived allocation (US1),
the review property it guarantees (US2), and a parent's ability to override the starting tier
without changing any of the surrounding adaptive behavior (US3).

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Confirm the package meets the project's quality bar end-to-end.

- [x] T020 Run \`npm run coverage --workspace packages/core/daily-practice\` and confirm
  \`src/daily-session.ts\` and \`src/index.ts\` are at or above the 95% line/branch threshold from
  T002; add any missing edge-case test to close a gap (ADR-0004)
- [x] T021 [P] Run \`npx eslint packages/core/daily-practice\` and \`npx tsc --noEmit -p
  packages/core/daily-practice/tsconfig.json\`; fix any lint or strict-mode type error (ADR-0004:
  ESLint + Prettier + \`strict: true\` workspace-wide)
- [x] T022 Walk through every scenario in \`quickstart.md\` against the finished package (Scenarios
  1-5 plus all three edge cases) and confirm each expected outcome holds exactly, including the
  exact \`byTier\` counts shown in each scenario

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately.
- **Foundational (Phase 2)**: Depends on Setup — BLOCKS all three user stories.
- **User Story 1 (Phase 3)**: Depends on Foundational only. No dependency on US2/US3.
- **User Story 2 (Phase 4)**: Depends on User Story 1's implementation (T009-T011) existing —
  unlike \`003-mastery-engine\`'s US2, this story adds no new production code, only tests that
  verify a property of US1's own implementation, so it cannot start before T011 lands.
- **User Story 3 (Phase 5)**: Depends on User Story 1's implementation (T009-T011) — it extends
  \`generateDailySession\`'s signature, so T018 must follow T011. Independent of US2.
- **Polish (Phase 6)**: Depends on all three user stories being complete.

### Parallel Opportunities

- T002 can run alongside T001 (Setup).
- T005, T006, T007, T008 (US1 tests, same file \`allocation.test.ts\` but non-overlapping
  describe blocks) can be drafted in parallel then merged.
- T013, T014, T015 (US2 tests) can be drafted in parallel with each other once T011 lands, in
  their own file (\`review.test.ts\`) — no conflict with \`allocation.test.ts\`.
- T016, T017 (US3 tests) can be drafted in parallel with each other and with US2's tests once T011
  lands, in their own file (\`override.test.ts\`).
- T021 can run in parallel with T020/T022 (Polish).

---

## Parallel Example: User Story 1

\`\`\`bash
# After Phase 2 (Foundational) completes:
Task: "Write current-tier derivation tests in tests/allocation.test.ts"
Task: "Write swing-tier rule tests in tests/allocation.test.ts"
Task: "Write floor/ceiling redirection tests in tests/allocation.test.ts"
Task: "Write fixed-shape/determinism tests in tests/allocation.test.ts"
\`\`\`

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 (Setup) + Phase 2 (Foundational).
2. Complete Phase 3 (User Story 1) — the core weakness-targeted allocation is already
   independently useful and is what every other story (US2's review property, US3's override)
   builds on.
3. **STOP and VALIDATE**: run \`quickstart.md\` Scenarios 1-3 and the floor edge case.
4. Proceed to Phase 4 (User Story 2) to formally verify the review property, then Phase 5 (User
   Story 3) to add the parent override, before Phase 6 Polish.

### Incremental Delivery

1. Setup + Foundational → package scaffolded, types compile.
2. User Story 1 → weakness-targeted allocation works, mergeable on its own as the MVP.
3. User Story 2 → review property formally verified, no US1 code touched.
4. User Story 3 → parent-forced starting tier added, extending (not replacing) US1's function.
5. Polish → coverage/lint gates green, quickstart fully walked.
`,ie='---\n\ndescription: "Task list for 019-per-topic-grade-progression"\n---\n\n# Tasks: Automatic Per-Topic Grade Progression\n\n**Input**: Design documents from `/specs/019-per-topic-grade-progression/`\n\n**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md (all present)\n\n**Tests**: Included — this codebase\'s Constitution Principle VI and ADR-0004 mandate heavy unit\ntesting with hard coverage gates (95%+ `packages/core/*`, 70%+ `apps/web`), and every existing\nfeature in this repo ships tests alongside implementation.\n\n**Organization**: Tasks are grouped by user story (spec.md) to enable independent implementation\nand testing of each story.\n\n## Format: `[ID] [P?] [Story] Description`\n\n- **[P]**: Can run in parallel (different files, no dependencies)\n- **[Story]**: Which user story this task belongs to (US1-US5)\n- File paths are relative to `learncoreskills/app` (the sibling repo this feature\'s code lands in)\n\n---\n\n## Phase 1: Setup\n\n**Purpose**: Confirm the workspace is ready — no new dependencies or scaffolding needed.\n\n- [X] T001 Run `npm install` at the `app` workspace root and `npm run lint && npm run typecheck` to confirm a clean baseline before touching any file this feature lists.\n\n**Checkpoint**: Baseline green. No new packages, configs, or dependencies are introduced by this feature (plan.md Technical Context).\n\n---\n\n## Phase 2: Foundational (Blocking Prerequisites)\n\n**Purpose**: Small, shared prep that more than one user story\'s implementation depends on.\n\n**⚠️ CRITICAL**: Complete before starting US2 or US1\'s implementation tasks.\n\n- [X] T002 [P] In `packages/core/mastery-engine/src/grade-mastery.ts`, change `const MASTERY_THRESHOLD = 90` to `export const MASTERY_THRESHOLD = 90` (no other change) so `topic-grade.ts` (US2) can reuse the literal instead of duplicating it.\n- [X] T003 [P] Move `apps/web/src/components/parent/GradeSelector.tsx` to `apps/web/src/components/GradeSelector.tsx` and `apps/web/src/components/parent/GradeSelector.test.tsx` to `apps/web/src/components/GradeSelector.test.tsx`, verbatim (no prop/behavior change — data-model.md §4) — this file becomes dual-purpose once US1 also renders it.\n- [X] T004 [US1 prep] Update the import in `apps/web/src/components/parent/AdvancementReport.tsx` from `./GradeSelector.js` to `../GradeSelector.js` to match T003\'s move; run `apps/web`\'s existing `AdvancementReport.test.tsx` to confirm no regression.\n\n**Checkpoint**: `MASTERY_THRESHOLD` is exported; `GradeSelector` lives at its new shared location and every existing consumer/test still passes.\n\n---\n\n## Phase 3: User Story 1 - Parent sets the child\'s school grade once, not per topic (Priority: P1) 🎯 MVP\n\n**Goal**: A parent can set/change a child\'s school grade from child profile management (not only\nburied in the Advancement Report), and no per-topic grade control exists anywhere in profile\nmanagement.\n\n**Independent Test**: Open profile management, set/change a child\'s school grade there, confirm it\npersists and is shown pre-filled on reopen — independent of any topic ever being practiced.\n\n### Tests for User Story 1\n\n- [X] T005 [P] [US1] In `apps/web/src/components/ProfileManager.test.tsx`, add cases: (a) with an active child and no school grade set, the `GradeSelector` ("School grade") control is rendered and no grade is highlighted as selected; (b) selecting e.g. "G3" calls through to persist it (mock/spy `setChildGrade` or assert via `useChildGrade`\'s read-after-write, matching `GradeSelector.test.tsx`\'s existing assertion style); (c) re-rendering with that same `activeChildId` shows "G3" already selected; (d) no `<select>`/radio/etc. asking for a *per-topic* grade appears anywhere in the rendered output.\n\n### Implementation for User Story 1\n\n- [X] T006 [US1] In `apps/web/src/components/ProfileManager.tsx`, import `GradeSelector` from `./GradeSelector.js` and `useChildGrade` from `../hooks/useChildGrade.js`; when `activeChildId !== null`, render `<GradeSelector currentGrade={...} onSelect={...} />` wired to `useChildGrade(activeChildId)`, labeled distinctly as "School grade" (reusing `GradeSelector`\'s existing copy — data-model.md §0 table) inside the existing profile-management `card`, below the child list.\n- [X] T007 [US1] Run `npm test --workspace apps/web -- ProfileManager` and confirm T005\'s cases pass; run the full `apps/web` suite once to confirm `AdvancementReport`\'s pre-existing use of the same `useChildGrade`/`GradeSelector` pairing is unaffected (same persisted field, two renderers).\n\n**Checkpoint**: User Story 1 is fully functional and independently testable — a parent can set a child\'s school grade from the main profile flow.\n\n---\n\n## Phase 4: User Story 2 - Each topic starts at the school grade and adapts on its own (Priority: P1) 🎯 MVP\n\n**Goal**: The core adaptation rule — `deriveTopicGrade` — exists, is pure/deterministic, and\nimplements spec.md FR-005/FR-006/FR-008/FR-015 exactly (contracts/derive-topic-grade.api.md,\ndata-model.md §1).\n\n**Independent Test**: Call `deriveTopicGrade` directly with synthetic signal logs and confirm: a\nnever-attempted topic starts at the school-grade floor; a strong batch (≥90%) at the current grade\nreturns grade+1 (capped at `gradeCount`); a weak batch (<50%) returns grade-1 (floored at 1); an\naverage batch (50–89%) or a too-small batch (<5 qualifying signals) returns the unchanged grade;\ntwo competencies fed through the same call site never influence each other\'s result; a\n`gradeCount <= 1` competency always returns 1.\n\n### Tests for User Story 2\n\n- [X] T008 [P] [US2] Create `packages/core/mastery-engine/tests/topic-grade.test.ts` covering, per contracts/derive-topic-grade.api.md and quickstart.md Scenarios 1-7: never-attempted → school-grade floor (including `"P"`/null-mapped-to-1 floors, supplied by the caller as already-resolved integers per the contract); strong (≥90%, ≥5 qualifying signals) → grade+1; weak (<50%) → grade-1; average (50–89%) → unchanged; <5 qualifying signals at the last-used grade → unchanged ("not-started"); ceiling clamp at `gradeCount`; floor clamp at 1; `gradeCount <= 1` → always 1 regardless of signal content; two different `competency.id`s in one shared `signals` array resolve independently (no cross-contamination) when called once per competency.\n\n### Implementation for User Story 2\n\n- [X] T009 [US2] Create `packages/core/mastery-engine/src/topic-grade.ts` implementing `deriveTopicGrade(signals, competency, schoolGradeFloor)` and `export const WEAK_THRESHOLD = 50` exactly per contracts/derive-topic-grade.api.md and data-model.md §1 steps 1-8 (reuses `computeGradeMastery` from `./grade-mastery.js` and `MASTERY_THRESHOLD` from T002 — no new threshold logic duplicated).\n- [X] T010 [US2] In `packages/core/mastery-engine/src/index.ts`, add `export { deriveTopicGrade, WEAK_THRESHOLD } from "./topic-grade.js";` and `export { MASTERY_THRESHOLD } from "./grade-mastery.js";`.\n- [X] T011 [US2] Run `npm run coverage --workspace packages/core/mastery-engine` and confirm `topic-grade.ts` meets the package\'s existing 95%+ line/branch gate (ADR-0004); add any branch T008 missed.\n\n**Checkpoint**: `deriveTopicGrade` is complete, pure, and exhaustively tested in isolation — ready for US3 to wire into the real session-start flow.\n\n---\n\n## Phase 5: User Story 3 - Practice-session picker only asks which topics, not which grade (Priority: P1) 🎯 MVP\n\n**Goal**: `GradePicker` shows only topic checkboxes (no grade/level control of any kind) and\nresolves each checked topic\'s grade via `deriveTopicGrade` (US2) once, at "Start session" time —\nthis is also where US2\'s adaptation rule becomes observable end-to-end through real session\ngeneration (spec.md User Story 2\'s Acceptance Scenarios 1-5).\n\n**Independent Test**: Open the picker, confirm no grade control exists; check one or more topics\nand start a session; confirm each checked topic\'s questions were generated at that topic\'s own\n`deriveTopicGrade` result (verified via `composeMixedSession`\'s known output for the resolved\n`PracticeSessionSelection[]`), with no manual override possible anywhere in this flow.\n\n### Tests for User Story 3\n\n- [X] T012 [P] [US3] In `apps/web/src/components/GradePicker.test.tsx`, replace/extend existing per-operation-`<select>` assertions with: (a) `screen.queryByLabelText(/grade/i)` (or equivalent) is `null` after checking any topic — no grade control of any kind is rendered (spec.md SC-007); (b) seeding `localStorage` so two checked topics derive to different grades (per quickstart.md Scenario 9\'s shape — e.g. addition → 3 via strong prior signals, multiplication → 1 via weak prior signals) and clicking "Start session" calls `onStart` with `[{ exerciseKey: "addition", grade: 3 }, { exerciseKey: "multiplication", grade: 1 }]`; (c) a never-attempted topic with no school grade set resolves to grade 1 (FR-005\'s null-floor edge case).\n- [X] T013 [P] [US3] In `apps/web/src/App.test.tsx` (or wherever `PracticeApp`/`App` is covered today), confirm `GradePicker` receives the active child\'s id and that starting a session still reaches `PracticeSession` with a non-empty `selections` array, matching the existing session-start flow\'s coverage.\n\n### Implementation for User Story 3\n\n- [X] T014 [US3] In `apps/web/src/components/GradePicker.tsx`: replace `gradeByExerciseKey: Record<string, Grade>` local state with `checkedKeys: Set<string>` (checked-ness only); remove the per-operation "Grade" `<label>`/`<select>` block entirely (data-model.md §3); add a required `childId: string` prop; at `handleStart`, call `readMasterySignals(childId)` and `useChildGrade(childId).currentGrade` once, compute `schoolGradeFloor` (`"P"` or `null` → `1`, else the number as-is, per contracts/derive-topic-grade.api.md), and build `PracticeSessionSelection[]` via `exercises.filter(e => checkedKeys.has(e.key)).map(e => ({ exerciseKey: e.key, grade: deriveTopicGrade(signals, e.competency, schoolGradeFloor) }))`.\n- [X] T015 [US3] In `apps/web/src/App.tsx`, pass `childId={activeChildId}` to `<GradePicker>` (only rendered when `activeChildId !== null`, already guaranteed by the surrounding conditional).\n- [X] T016 [US3] Run `npm test --workspace apps/web -- GradePicker App` and confirm T012/T013 pass; run `npm run coverage --workspace apps/web` and confirm the package stays at/above its existing 70%+ gate (ADR-0004).\n\n**Checkpoint**: User Stories 1, 2, and 3 (the full P1/MVP scope) are complete — a parent sets a school grade once, every topic starts there automatically, and each topic\'s grade adapts up/down/stays independently across sessions with zero manual grade selection anywhere.\n\n---\n\n## Phase 6: User Story 4 - Home screen shows topic + grade + score together (Priority: P2)\n\n**Goal**: Replace the single hardcoded "Addition mastery 0%" display with one tag per practiced\ntopic, each showing that topic\'s name, current (derived) grade, and mastery score — and no tag for\nan unpracticed topic.\n\n**Independent Test**: Practice two or more different topics; confirm the main screen shows one tag\nper practiced topic, each with its own name/grade/score, and nothing for topics never attempted.\n\n### Tests for User Story 4\n\n- [X] T017 [P] [US4] Create `apps/web/src/components/TopicMasteryTags.test.tsx` (replacing `MasteryDisplay.test.tsx`\'s scope) covering: zero signals → zero tags rendered, no error/empty-state text (spec.md User Story 4 AS-3); signals for exactly one topic → exactly one tag showing that topic\'s label, derived grade, and rounded percentage; signals for two topics → two independently-labeled tags (spec.md AS-2); a topic with fewer than 5 qualifying attempts at its current grade → tag shows a clear "not enough attempts yet" state instead of a bare/misleading percentage (mirroring `computeGradeMastery`\'s existing `"not-started"` convention); a multi-competency baseline exercise (e.g. `baseline-counting-quantities`) with signals for only one of its sub-competencies → one tag for that sub-competency\'s own `competencyLabels` entry, not one for the whole exercise or its other sub-skills.\n\n### Implementation for User Story 4\n\n- [X] T018 [US4] Replace `apps/web/src/components/MasteryDisplay.tsx` with `apps/web/src/components/TopicMasteryTags.tsx` (delete the old file, `git mv` if preferred to preserve history) per data-model.md §3: accept `childId: string`; read `readMasterySignals(childId)`; for every `(exercise, competency)` pair across `exercises`/`exercise.competencies` with at least one matching signal, render a tag with `exercise.competencyLabels?.[competency.id] ?? exercise.label`, `deriveTopicGrade(signals, competency, schoolGradeFloor)` (displayed as `"P"` when `competency.gradeCount <= 1`, else `` `G${grade}` ``), and `computeGradeMastery(signals, competency.id, grade).percentage` (or the not-enough-attempts state when `"not-started"`).\n- [X] T019 [US4] In `apps/web/src/App.tsx`, replace the single `<MasteryDisplay mastery={mastery} label={selectedExercise.label} />` call (and its now-unused `selectedExerciseKey`/`mastery`/`allMastery` local state) with `<TopicMasteryTags childId={activeChildId} />`.\n- [X] T020 [US4] Run `npm test --workspace apps/web -- TopicMasteryTags App` and confirm T017 passes; confirm no remaining import of the deleted `MasteryDisplay` anywhere (`grep -rn "MasteryDisplay" apps/web/src`).\n\n**Checkpoint**: The home screen reflects real per-topic progress instead of one hardcoded line.\n\n---\n\n## Phase 7: User Story 5 - In-session question shows which skill and grade is being tested (Priority: P2)\n\n**Goal**: Every question shown during a session — including a mixed one interleaving several\ntopics at different grades — visibly indicates its own topic name and grade.\n\n**Independent Test**: Start a mixed session with topics at different current grades; confirm each\nquestion, as shown, displays the correct topic name and grade for that specific question.\n\n### Tests for User Story 5\n\n- [X] T021 [P] [US5] In `apps/web/src/components/PracticeSession.test.tsx`, add cases: (a) a single-topic session shows that topic\'s name and grade alongside every question; (b) a mixed session (e.g. addition at grade 3, multiplication at grade 1, per quickstart.md Scenario 11) shows, for every question across the session, the topic name/grade matching that specific question\'s own `exercise`/`question.grade` — assert against the session\'s known composition (`composeMixedSession`\'s deterministic output for the same `(selections, seed)`), not a spot check of one question.\n\n### Implementation for User Story 5\n\n- [X] T022 [US5] In `apps/web/src/components/PracticeSession.tsx`, add a small visible indicator near the question card (e.g. above `equation-card`/`choice-card`) rendering `` `${exercise.competencyLabels?.[...] ?? exercise.label} · Grade ${question.grade}` `` (or `"P"` when the resolved competency\'s `gradeCount <= 1`) — both `exercise` and `question` are already resolved locally in this component\'s render (used today only for mastery-signal routing); no new props or data plumbing needed (data-model.md §3).\n- [X] T023 [US5] Run `npm test --workspace apps/web -- PracticeSession` and confirm T021 passes; run `npm run coverage --workspace apps/web` once more to confirm the 70%+ gate still holds across all of this feature\'s `apps/web` changes.\n\n**Checkpoint**: All five user stories are complete and independently verifiable.\n\n---\n\n## Phase 8: Polish & Cross-Cutting Concerns\n\n**Purpose**: Final consistency pass across the whole feature.\n\n- [X] T024 [P] Run `npm run lint && npm run typecheck` at the `app` workspace root and fix any fallout across every file this feature touched.\n- [X] T025 [P] Walk quickstart.md\'s 12 scenarios end-to-end once against the real app (`npm run dev` in `apps/web`) as a manual sanity pass — not a substitute for T008/T012/T013/T017/T021\'s automated coverage, just a final human check that the flows feel right (Product Constraints: playful child-facing UI, calm parent-facing profile/report UI).\n- [X] T026 Confirm zero remaining references to the old `components/parent/GradeSelector` path or the deleted `MasteryDisplay` component anywhere in `apps/web/src` (`grep -rn "parent/GradeSelector\\|MasteryDisplay" apps/web/src`).\n- [X] T027 Run the full workspace test+coverage suite (`npm test --workspaces --if-present && npm run coverage --workspaces --if-present`) and confirm every touched package still meets its ADR-0004 gate (95%+ `packages/core/mastery-engine`, 70%+ `apps/web`).\n\n---\n\n## Dependencies & Execution Order\n\n### Phase Dependencies\n\n- **Setup (Phase 1)**: No dependencies.\n- **Foundational (Phase 2)**: Depends on Setup. T002 blocks US2 (T009). T003 blocks US1 (T006) and T004.\n- **User Story 1 (Phase 3)**: Depends on Foundational (T003/T004). Independent of US2-US5.\n- **User Story 2 (Phase 4)**: Depends on Foundational (T002). Independent of US1, US3-US5 — testable purely at the `mastery-engine` unit level.\n- **User Story 3 (Phase 5)**: Depends on User Story 2 (T009/T010 — `deriveTopicGrade` must exist). Does not depend on US1 (a session can start with no school grade set at all, per FR-005\'s null-floor case), though US1 is normally done first since both are P1/MVP.\n- **User Story 4 (Phase 6)**: Depends on User Story 2 (T009/T010 — `deriveTopicGrade` reused for tag display). Independent of US3/US5.\n- **User Story 5 (Phase 7)**: Depends on User Story 3 (T014 — needs `PracticeSessionSelection[]`/mixed sessions with resolved per-topic grades to be meaningfully demonstrable, though the indicator itself only reads already-local `exercise`/`question.grade` data).\n- **Polish (Phase 8)**: Depends on every user story being as complete as desired.\n\n### User Story Dependency Graph\n\n```text\nFoundational (T002-T004)\n  ├─> US1 (T005-T007)              [independent]\n  ├─> US2 (T008-T011)              [independent, MVP-critical]\n  │     ├─> US3 (T012-T016)        [MVP-critical]\n  │     │     └─> US5 (T021-T023)\n  │     └─> US4 (T017-T020)\n  └─────────────────────────────────> Polish (T024-T027)\n```\n\n### Parallel Opportunities\n\n- T002 and T003 (Phase 2) touch unrelated files — run in parallel.\n- Once Foundational completes: US1 (Phase 3) and US2 (Phase 4) have no dependency on each other and can proceed in parallel.\n- Within US2: T008 (tests) can be written in parallel with drafting T009 (implementation), though T008 should be run against T009 before considering the story done (tests-first is encouraged, not enforced by file dependency here since both land in the same package).\n- Once US2 completes: US3 (Phase 5) and US4 (Phase 6) both depend only on US2, not on each other — can proceed in parallel.\n- US5 (Phase 7) must wait for US3.\n\n---\n\n## Parallel Example: after Foundational completes\n\n```bash\n# Developer/agent A:\nTask: "US1 — add GradeSelector to ProfileManager (T005-T007)"\n\n# Developer/agent B:\nTask: "US2 — implement and test deriveTopicGrade (T008-T011)"\n```\n\n---\n\n## Implementation Strategy\n\n### MVP First (User Stories 1-3)\n\n1. Complete Phase 1 (Setup) and Phase 2 (Foundational).\n2. Complete Phase 3 (US1) and Phase 4 (US2) — independent of each other, may be done in either order or in parallel.\n3. Complete Phase 5 (US3) — depends on US2.\n4. **STOP and VALIDATE**: at this point spec.md\'s full P1 scope is delivered — a parent sets a\n   school grade once, every topic starts there automatically, adapts independently per topic, and\n   the picker shows only topic checkboxes. This is a coherent, shippable increment even before\n   US4/US5.\n\n### Incremental Delivery\n\n1. Setup + Foundational → ready.\n2. US1 + US2 (parallel) → US3 → **MVP delivered** (P1 scope complete).\n3. US4 → home screen clarity improvement, independently deployable.\n4. US5 → in-session clarity improvement, independently deployable.\n5. Polish.\n\n---\n\n## Notes\n\n- [P] tasks touch different files with no dependency on an incomplete task.\n- No new persisted data, no `child-export` schema bump, no migration task exists in this list —\n  confirmed in plan.md/data-model.md §2 as a deliberate consequence of `deriveTopicGrade` being a\n  pure derivation over already-persisted data.\n- `mixedSession.ts` and `PracticeSession.tsx`\'s answer-submission/mastery-signal-recording logic\n  appear in no task above — plan.md\'s Structure Decision confirms they need no change, since\n  `PracticeSessionSelection`\'s shape is unchanged (only *who* computes its `grade` field changes).\n',N="---\n\ndescription: \"Task list for IndexedDB Persistence Layer\"\n---\n\n# Tasks: IndexedDB Persistence Layer\n\n**Input**: Design documents from `/specs/032-indexeddb-persistence/`\n\n**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/progress-store.md, quickstart.md\n\n**Tests**: Included — the spec's acceptance scenarios and quickstart.md explicitly call for unit\ntests as the implementation-time validation contract (constitution Development Workflow rule); no\nGUI/dev-server verification is in scope for implementation.\n\n**Organization**: Tasks are grouped by user story (spec.md priorities) so each can be implemented\nand tested independently. All new package code lives in `app/packages/core/progress-store/`; all\npaths below are relative to the `app` repo unless stated otherwise.\n\n## Format: `[ID] [P?] [Story] Description`\n\n- **[P]**: Can run in parallel (different files, no dependencies on incomplete tasks)\n- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)\n\n## Phase 1: Setup\n\n**Purpose**: Scaffold the new package so subsequent tasks have somewhere to land.\n\n- [X] T001 Create `packages/core/progress-store/` package scaffold: `package.json` (name\n      `@learncoreskills/progress-store`, `private: true`, `type: module`, `main`/`types` pointing\n      at `./src/index.ts`, `test`/`coverage`/`typecheck`/`lint` scripts matching\n      `packages/core/profiles/package.json`), `tsconfig.json` extending the repo's\n      `tsconfig.base.json` (mirror `packages/core/profiles/tsconfig.json`), `vitest.config.ts`\n      (mirror `packages/core/profiles/vitest.config.ts`)\n- [X] T002 Add `fake-indexeddb` as a devDependency of `packages/core/progress-store/package.json`\n      (research.md \"Decision: `fake-indexeddb` as a new dev dependency\"); add a\n      `packages/core/progress-store/tests/setup.ts` (wired via `vitest.config.ts`'s `setupFiles`)\n      that imports `fake-indexeddb/auto` so every test in this package gets an in-memory\n      `IndexedDB` automatically, matching how `packages/core/profiles/tests/in-memory-store.ts`\n      stands in for `localStorage`\n- [X] T003 [P] Register `@learncoreskills/progress-store` as a workspace dependency of\n      `apps/web/package.json` and `packages/core/child-export/package.json` (`\"*\"`, matching the\n      existing `@learncoreskills/*` entries in each), then run `npm install` at the repo root\n\n**Checkpoint**: `npm install` succeeds; `packages/core/progress-store` has an empty but\nlint/typecheck/test-clean scaffold.\n\n---\n\n## Phase 2: Foundational (Blocking Prerequisites)\n\n**Purpose**: The versioned database, its record types, and the `MasterySignal` contract extension\n— every user story below depends on these existing first.\n\n**⚠️ CRITICAL**: No user story task may start until this phase is complete.\n\n- [X] T004 [P] Write `packages/core/progress-store/src/types.ts` per data-model.md: exported\n      interfaces `AnsweredQuestionEntry`, `MonthlyScore`, and the internal `meta` row shape —\n      field names, types, and nullability exactly as specified in data-model.md's\n      `answeredQuestions`, `monthlyScores`, and `meta` tables (e.g. `submittedAnswer: string |\n      number` is required, not optional; `isFrozen: boolean` defaults `false` and is set `true`\n      exactly once per data-model.md's \"Freeze rule\")\n- [X] T005 Write `packages/core/progress-store/src/database.ts`: `openDatabase()` opening IndexedDB\n      database name `learncoreskills` at native version `1` (research.md \"One IndexedDB database,\n      versioned via the native `onupgradeneeded` mechanism\"), creating in `onupgradeneeded`:\n      object store `answeredQuestions` (keyPath `id`, compound index `childId+subjectId`, index on\n      `timestamp`), object store `monthlyScores` (keyPath `id`, compound index `childId+subjectId`),\n      object store `meta` (keyPath `id`); export a shared/cached open-database promise so callers\n      don't re-open per call\n- [X] T006 [P] Write `packages/core/progress-store/tests/database.test.ts`: asserts `openDatabase()`\n      creates all three object stores with the correct key paths and indexes on first open, and\n      that re-opening at the same version does not re-trigger `onupgradeneeded` or destroy existing\n      data\n- [X] T007 In `app/packages/core/plugin-engine/src/types.ts`, extend `MasterySignal` (line ~23) with\n      required fields `correctAnswer: number | string` and `submittedAnswer: number | string`\n      (contracts/progress-store.md \"Consumer contract changes\" — required, not optional, since\n      every plugin already computes/knows both values at answer time)\n- [X] T008 [P] [US1] Update every exercise plugin under `packages/exercises/*/src/` that constructs\n      a `MasterySignal` to populate the new `correctAnswer` (from its own\n      `QuestionPresentationResult.correctAnswer`) and `submittedAnswer` (the value already\n      validated against it) fields — one uniform change applied per plugin, not a special case per\n      plugin (constitution Principle V, plan.md Constitution Check)\n- [X] T009 [P] Update each touched plugin's existing test suite (`packages/exercises/*/tests/` or\n      `*.test.ts`) to assert the emitted `MasterySignal` now includes correct `correctAnswer` and\n      `submittedAnswer` values matching the bank entry under test\n\n**Checkpoint**: Database opens and creates its schema; every plugin's `MasterySignal` now carries\nreal answer values. User story phases can now proceed.\n\n---\n\n## Phase 3: User Story 1 - Recent answers preserved across sessions (Priority: P1) 🎯 MVP\n\n**Goal**: Record and retrieve, per child per subject, the last 50 answered questions with correct\nanswer, submitted answer, and timestamp — surviving a reload.\n\n**Independent Test**: Answer several questions in one subject, reload, confirm the same recent\nhistory and timestamps are still returned for that child/subject.\n\n- [X] T010 [US1] Write `packages/core/progress-store/tests/answered-questions.test.ts` (spec\n      Acceptance Scenarios 1-3, quickstart.md US1 bullet): recording one answer for a child with no\n      prior history in a subject makes it retrievable; recording a 51st answer for a\n      `(childId, subjectId)` drops the oldest (by `timestamp`, tie-broken by `id` per\n      data-model.md) and keeps exactly 50; two children's histories in the same subject never mix\n- [X] T011 [US1] Write `packages/core/progress-store/src/answered-questions.ts`:\n      `insertAnsweredQuestion(entry)` — generates `id` as\n      `${childId}:${subjectId}:${timestamp}:${questionId}` (data-model.md), inserts into\n      `answeredQuestions`, and in the same transaction deletes the oldest entry for that\n      `(childId, subjectId)` if the count now exceeds 50; `getRecentAnswers(childId, subjectId)` —\n      returns up to 50 entries via the `childId+subjectId` index, newest first\n      (contracts/progress-store.md)\n- [X] T012 [US1] Write `packages/core/progress-store/src/index.ts`: export `recordAnswer` (the\n      public entry point per contracts/progress-store.md — for now, in this phase, wraps only\n      `insertAnsweredQuestion`; Phase 4 extends it to also update the monthly score in the same\n      transaction), `getRecentAnswers`, `getSubjectsWithHistory(childId)` (distinct `subjectId`\n      values present in `answeredQuestions` for that child, via the `childId+subjectId` index)\n- [X] T013 [US1] Write `packages/core/progress-store/tests/index.test.ts` covering\n      `getSubjectsWithHistory`: a child with entries in two subjects returns both subject ids; a\n      child with no history returns an empty list\n- [X] T014 [US1] Update `apps/web/src/storage/` call sites that currently write to\n      `masterySignals.ts` (per the app's answer-submission flow) to call\n      `progress-store`'s `recordAnswer` instead, passing the now-extended `MasterySignal` fields\n      through as `RecordAnswerInput` (contracts/progress-store.md)\n\n**Checkpoint**: User Story 1 is independently functional — recent per-subject history records and\nsurvives reload, isolated per child.\n\n---\n\n## Phase 4: User Story 2 - Progression tracked month over month (Priority: P1)\n\n**Goal**: A live current-month score-out-of-50 per child/subject that freezes at month end, with a\nretrievable chronological history of frozen months.\n\n**Independent Test**: Answer questions across a simulated month boundary (inject `timestamp`, not\nwall clock); confirm the prior month's score stops changing and a new month's score begins.\n\n- [X] T015 [US2] Write `packages/core/progress-store/tests/monthly-scores.test.ts` (spec Acceptance\n      Scenarios 1-4, quickstart.md US2 bullet): a question answered in the current month updates\n      that month's `attemptsCount`/`correctCount` (score out of up to 50, data-model.md \"Update\n      rule\"); a question answered after the month has rolled over freezes the prior month's row\n      (`isFrozen: true`, values unchanged thereafter) and starts a new current-month row\n      (data-model.md \"Freeze rule\"); `getMonthlyScores` returns all months with activity in\n      chronological (`yearMonth` string) order; a month with zero attempts never appears (no\n      synthetic 0/50 row, per spec Edge Cases)\n- [X] T016 [US2] Write `packages/core/progress-store/src/monthly-scores.ts`:\n      `upsertMonthlyScoreForAnswer(childId, subjectId, timestamp, correct)` — derives `yearMonth`\n      from `timestamp` (device-local, per spec Assumptions), gets-or-creates the\n      `(childId, subjectId, yearMonth)` row via its deterministic `id`\n      (`${childId}:${subjectId}:${yearMonth}`, data-model.md), and if that row's `attemptsCount <\n      50`, increments `attemptsCount` (and `correctCount` if `correct`); freezes any existing\n      unfrozen row for that `(childId, subjectId)` whose `yearMonth` differs from the new one\n      before creating/updating the new one (lazy freeze, data-model.md \"Freeze rule\");\n      `getMonthlyScores(childId, subjectId)` — all rows via the `childId+subjectId` index, sorted\n      by `yearMonth` ascending; `getCurrentMonthScore(childId, subjectId)` — the row for the\n      caller-supplied current `yearMonth`, or `undefined`\n- [X] T017 [US2] Update `packages/core/progress-store/src/index.ts`'s `recordAnswer` to call both\n      `insertAnsweredQuestion` (T011) and `upsertMonthlyScoreForAnswer` (T016) inside one shared\n      IndexedDB transaction, per contracts/progress-store.md (\"Both effects happen atomically...a\n      caller never observes one without the other\"); export `getMonthlyScores` and\n      `getCurrentMonthScore` from `src/index.ts`\n- [X] T018 [US2] Write `packages/core/progress-store/tests/index.test.ts` (extend T013's file)\n      asserting `recordAnswer`'s atomicity: a simulated failure partway through never leaves an\n      `answeredQuestions` insert without its corresponding `monthlyScores` update, or vice versa\n\n**Checkpoint**: User Stories 1 and 2 together give the full \"current score + monthly progression\"\nvalue described in the original request.\n\n---\n\n## Phase 5: User Story 3 - Existing local data carried over on upgrade (Priority: P1)\n\n**Goal**: A one-time, idempotent migration that carries existing localStorage profiles/history into\nthe new store on first load, with no user action and no data loss.\n\n**Independent Test**: Seed legacy localStorage keys with sample data, load the updated app, confirm\nequivalent data exists in the new store with no duplication on a second run.\n\n- [X] T019 [US3] Write `packages/core/progress-store/tests/migrate-from-local-storage.test.ts`\n      (spec Acceptance Scenarios 1-3, quickstart.md US3 bullet): seeding\n      `learncoreskills.profiles` and `learncoreskills.child.<id>.mastery-signals` (the exact\n      existing keys, per research.md's migration decision) and calling\n      `migrateFromLocalStorageIfNeeded()` produces equivalent `answeredQuestions` /\n      `monthlyScores` rows (derived from the legacy signals, capped/bucketed the same way a live\n      `recordAnswer` would); calling it again is a no-op (no duplicate rows, existing rows\n      untouched); calling it with no legacy keys present completes cleanly with no error and still\n      marks migration complete\n- [X] T020 [US3] Write `packages/core/progress-store/src/migrate-from-local-storage.ts`:\n      `migrateFromLocalStorageIfNeeded()` — checks the `meta` store for the\n      `\"localStorageMigration\"` row (data-model.md); if absent, reads the legacy\n      `learncoreskills.profiles` and any `learncoreskills.child.*.mastery-signals` keys from\n      `localStorage` (reusing `apps/web/src/storage/masterySignals.ts`'s existing\n      `migrateStoredSignal` shape-tolerant reader for the `tier`→`grade` rename, per\n      research.md), replays each legacy signal through the same insert/upsert logic as\n      `recordAnswer` (T011/T016) inside one transaction per child, then writes the `meta`\n      completion marker; if no legacy keys exist, writes the marker directly with no other writes\n- [X] T021 [US3] Wire `migrateFromLocalStorageIfNeeded()` into `apps/web`'s app startup path (once,\n      before any screen reads progress data) — identify the app's existing top-level\n      initialization point (mirroring wherever profile loading currently happens) and call it there\n- [X] T022 [US3] Write `packages/core/progress-store/src/index.ts` export of\n      `isStorageAvailable()` (contracts/progress-store.md, FR-015): resolves `false` if\n      `openDatabase()` rejects/throws, `true` otherwise; write a test in\n      `packages/core/progress-store/tests/index.test.ts` simulating an `indexedDB.open` failure\n      and asserting `isStorageAvailable()` resolves `false` without throwing, and that\n      `recordAnswer` in that state does not throw uncaught (spec Edge Cases, quickstart.md\n      \"Storage-unavailable check\")\n- [X] T023 [US3] Wire `isStorageAvailable()` into `apps/web`'s startup path (T021) so the UI can\n      surface a \"progress may not be saved\" notice when it resolves `false` — identify the\n      existing app-level notice/banner mechanism (if any) or the minimal integration point for one;\n      full UI design is out of scope (spec Assumptions), only the wiring is required here\n\n**Checkpoint**: Upgrading the app carries existing users' data forward automatically; new users\nstart clean; storage failures degrade gracefully instead of crashing.\n\n---\n\n## Phase 6: User Story 4 - Backup and restore via export/import (Priority: P2)\n\n**Goal**: `child-export` reads from and restores into `progress-store`, producing/consuming a new\nschema version 4 that includes recent history and monthly scores; old export files keep importing.\n\n**Independent Test**: Export a child with history and monthly scores, wipe storage, import the file\nback, confirm profile, recent history, and monthly scores all match.\n\n- [X] T024 [US4] Write `packages/core/child-export/tests/fixtures/v4.json` — a hand-written fixture\n      matching the new `ChildExportFileV4` shape (contracts/progress-store.md \"new schema version\n      4\": adds `monthlyScores`, sources recent-history from `progress-store` rather than an\n      unbounded `masterySignals` array)\n- [X] T025 [US4] Extend `packages/core/child-export/src/types.ts` with `ChildExportFileV4` per\n      contracts/progress-store.md, and bump `CURRENT_SCHEMA_VERSION` to `4`\n- [X] T026 [US4] Extend `packages/core/child-export/src/migrations.ts` with a `3 → 4` migration\n      step following the file's existing per-version-step pattern (v3's `masterySignals` array\n      becomes the seed for v4's bounded-per-subject history — reuse the same\n      last-50-per-subject/monthly-bucketing logic as `migrate-from-local-storage.ts`, T020, since\n      both are \"take an unbounded/legacy signal list and produce the new bounded shape\")\n- [X] T027 [US4] Update `packages/core/child-export/src/serialize.ts` to read a child's data via\n      `progress-store`'s `getRecentAnswers` (per subject, via `getSubjectsWithHistory`) and\n      `getMonthlyScores` instead of the old unbounded localStorage `masterySignals` array, and to\n      write a `ChildExportFileV4`\n- [X] T028 [US4] Update `packages/core/child-export/src/parse.ts` to restore a parsed\n      `ChildExportFileV4` (after migrating any older version up to v4, T026) into `progress-store`\n      via `recordAnswer`-equivalent inserts, replacing the current localStorage-array restore path\n- [X] T029 [US4] Update `packages/core/child-export/src/serialize.test.ts` and\n      `parse.test.ts` (spec Acceptance Scenarios 1-3, quickstart.md US4 bullet): serializing a\n      child with recent history and monthly scores produces a `ChildExportFileV4` containing both;\n      importing a v1/v2/v3 fixture (existing `tests/fixtures/v1.json`/`v2.json`/`v3.json`) still\n      succeeds via the migration chain (FR-014); export → import round-trips a child's profile,\n      recent history, and monthly scores exactly\n\n**Checkpoint**: All four user stories complete — export/import continues to work against the new\nstorage, per spec User Story 4.\n\n---\n\n## Phase 7: Polish & Cross-Cutting Concerns\n\n**Purpose**: Deletion cascade and final repo-wide validation.\n\n- [X] T030 [P] Write `packages/core/progress-store/src/index.ts` export of\n      `deleteChildProgress(childId)` (FR-016, data-model.md \"Deletion cascade\"): deletes every\n      `answeredQuestions` and `monthlyScores` row for `childId` via the `childId+subjectId` index,\n      in one transaction; add a test in `packages/core/progress-store/tests/index.test.ts`\n      asserting it removes all of one child's rows and leaves another child's rows untouched\n- [X] T031 (DONE via 043-delete-child-profile: `useProfiles.tsx` calls `deleteChildProgress` then `deleteChildProfile`) Wire `deleteChildProgress` into `apps/web`'s existing\n      child-profile-deletion flow (wherever `@learncoreskills/profiles`' profile removal is\n      currently invoked), so deleting a profile also deletes its progress data (FR-016). No such\n      flow exists: `@learncoreskills/profiles` has no `removeChildProfile`/`deleteChildProfile`\n      function, and there is no delete-profile UI anywhere in `apps/web`. `deleteChildProgress`\n      (T030) is implemented and ready to be called once a profile-deletion feature exists.\n- [X] T032 (CLOSED, descoped 2026-10-07: `masterySignals.ts` stays; its removal is owned by 057 T033) Remove the now-unused `apps/web/src/storage/masterySignals.ts` and any\n      other localStorage-direct profile/preferences read/write code paths that `progress-store`\n      has fully superseded per plan.md's Project Structure (\"full replacement, not additive\").\n      `masterySignals.ts` is NOT fully superseded: `useMastery.ts`, `useMasterySignals.ts`, and\n      `domain/session/practiceSession.ts` (`persistSignal`) still actively read/write it for the\n      unrelated 012-progression-radar-chart mastery/syllabus computation — `practiceSession.ts`'s\n      own comment calls it \"still live and out of this feature's scope.\" Deleting it would break\n      that feature; left in place.\n- [X] T033 Run `./scripts/validate.sh` (lint, typecheck, test, coverage) across the whole `app`\n      repo per [[validate_via_skill_not_manually]] and confirm 0 failures\n\n---\n\n## Dependencies & Execution Order\n\n- **Phase 1 (Setup)** → **Phase 2 (Foundational)**: strictly sequential; nothing else starts\n  before Phase 2 completes.\n- **Phase 3 (US1)**, **Phase 4 (US2)**: US2 builds directly on US1's `answered-questions.ts` and\n  shared `recordAnswer` entry point (T011, T012) — implement US1 first, then US2. Both are P1 and\n  together form the MVP.\n- **Phase 5 (US3)**: depends on US1+US2's insert/upsert logic existing (T011, T016) to replay\n  legacy signals through, but is otherwise independent UI/wiring-wise — can be implemented\n  right after Phase 4.\n- **Phase 6 (US4)**: depends on US1+US2's read functions (`getRecentAnswers`, `getMonthlyScores`)\n  existing — implement after Phase 4 (does not depend on Phase 5).\n- **Phase 7 (Polish)**: depends on all user story wiring (T014, T021, T031) being in place before\n  the old localStorage code (T032) can be safely removed.\n\n## Parallel Execution Opportunities\n\n- T004 and T006 can proceed in parallel with each other once T001-T003 are done (types vs.\n  database tests are different files), though T005 (the database implementation) must exist before\n  T006's tests can pass.\n- T008 (per-plugin `MasterySignal` population) and T009 (per-plugin test updates) are parallel\n  across different `packages/exercises/*` directories — each plugin is an independent file set.\n- T024 (fixture) can be written in parallel with T025 (types) since both only need\n  contracts/progress-store.md, not each other.\n\n## Implementation Strategy\n\n**MVP = Phase 1 + Phase 2 + Phase 3 (US1) + Phase 4 (US2)**: this delivers the two P1 outcomes\nfrom the original request — current per-subject answer history and month-over-month progression\n— as a working, independently testable increment, before touching migration (US3) or\nexport/import (US4). Per this project's per-task-group handoff convention, each phase above is\nsized to be implemented in its own `implement-feature-group` session.\n",P="# Tasks: Ordering Activity Template + Orders-Numbers-to-1000 Rework\n\n**Input**: Design documents from `/specs/034-ordering-activity-template/`\n\n**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md\n\n**Repository root for every path below: the `mathematics` repo** (sibling checkout, e.g.\n`../subjects/mathematics` or `../subject-math` relative to this `specs` repo) — **not** `app`. See\nplan.md's Project Structure section.\n\n**Tests**: Included — FR-010 requires dedicated tests for both the new template and the reworked\ncompetency; neither currently exists (verified in plan.md/research.md).\n\n**Organization**: Two co-equal P1 user stories (spec.md explains why they're not sequential\npriorities): US1 (the reworked competency) and US2 (the reusable template it depends on). Since US1\ncannot exist without US2, the phases below build US2 first even though both are P1 — this is a\nhard technical dependency, not a priority ordering.\n\n## Phase 1: Setup\n\n**Purpose**: Confirm ground truth and scaffold the new package before writing its logic.\n\n- [X] T001 Confirm `ordersNumbersTo1000Competency` in\n      `packages/syllabus-content-g2/src/competencies.ts` still has `id:\n      \"math.number-sense.orders-numbers-to-1000\"`, `frameworkSkillId: \"mathematics.G2.1\"`,\n      `targetGrade: 2`, `gradeCount: 2` — MUST NOT be edited by this feature (FR-007); verification\n      read, not a code change. Stop and flag if any value differs from research.md's recorded state.\n      Verified: all four fields match research.md exactly. No discrepancy.\n- [X] T002 Confirm no test in `packages/syllabus-content-g2/tests/` currently exercises\n      `ordersNumbersTo1000`'s specific question-generation/answer-validation behavior by name —\n      verification read confirming the FR-010 gap this feature fills; no code change.\n      Verified: only `tests/coverage.test.ts` exists, checking `g2Competencies` generically; no\n      test references `ordersNumbersTo1000` by name. Gap confirmed.\n- [X] T003 Create `packages/template-ordering/` with `package.json` (copy\n      `packages/template-matching/package.json`, changing `\"name\"` to\n      `\"@learncoreskills/template-ordering\"` and nothing else structurally), `tsconfig.json`\n      (identical to `template-matching`'s), and `vitest.config.ts` (identical to `template-matching`'s).\n- [X] T004 Run `npm install` from the mathematics repo root so the new workspace package is picked\n      up (per research.md — auto-discovered via `workspaces: [\"packages/*\"]`, no manual\n      registration needed). Completed successfully (exit 0).\n\n---\n\n## Phase 2: Foundational — the `template-ordering` package itself (blocks User Story 1)\n\n**Purpose**: Build the generic, reusable ordering template package. This MUST be complete and\ntested (User Story 2) before User Story 1's competency rework can consume it.\n\n- [X] T005 [P] In `packages/template-ordering/src/types.ts`, define `Grade`, `OrderingDirection`,\n      `OrderingItem`, `OrderingContentEntry`, `OrderingTemplateConfig`, `OrderingPresentedItem`,\n      `OrderingQuestion`, `OrderingAnswer` exactly as specified in data-model.md — including the\n      documented constraint that `OrderingContentEntry.items` MUST have contiguous 1..N\n      `correctPosition` values with no gaps or repeats, and MUST have `>= 3` items (quoted verbatim\n      from data-model.md's constraint on `items`).\n- [X] T006 [P] In `packages/template-ordering/src/rng.ts`, copy `template-matching/src/rng.ts`\n      verbatim (`createRng`, `randInt`, `shuffle`) — per research.md, this repo's established\n      precedent is a small per-package copy, not a shared dependency.\n- [X] T007 In `packages/template-ordering/src/factory.ts`, implement `createOrderingPlugin(config:\n      OrderingTemplateConfig): TemplateFactoryResult` (mirror `template-matching/src/factory.ts`'s\n      overall shape):\n      - `generateQuestion(grade, seed)`: look up the bank entry for `grade`, shuffle its `items`\n        using `createRng(seed)` + `shuffle`, and **re-shuffle if the result already equals\n        `correctOrder`** (data-model.md's validation rule — a \"shuffled\" set that's already sorted\n        undermines the task). Build `en`/`fr` presented-item lists in the shuffled order and\n        `correctOrder` from each item's `correctPosition`.\n      - `validateAnswer(question, answer)`: return `{ correct: true }` only if `answer` (an\n        `OrderingAnswer`) is exactly deep-equal to `question.correctOrder`, `{ correct: false }`\n        otherwise (FR-004 — no partial credit, quoted verbatim from FR-004).\n      - `createSession(grade, seed)` / `createMasterySignal(...)`: match\n        `template-matching`'s `TemplateFactoryResult` shape exactly (FR-005), including the\n        `correctAnswer`/`submittedAnswer` fields `MasterySignal` requires.\n- [X] T008 In `packages/template-ordering/src/index.ts`, re-export the public surface (types +\n      `createOrderingPlugin` + `TemplateFactoryResult`), mirroring `template-matching/src/index.ts`'s\n      export list shape.\n- [X] T009 [P] Create `packages/template-ordering/tests/factory.test.ts` (mirror\n      `template-matching/tests/factory.test.ts`'s structure) with a test content config (>=3 items,\n      distinct `correctPosition`s) and assertions for:\n      - determinism: same `(grade, seed)` → deep-equal `OrderingQuestion` (FR-003)\n      - a correctly-ordered answer (built directly from the question's `correctOrder`) →\n        `validateAnswer` returns `{ correct: true }`\n      - an answer with two adjacent items swapped → `validateAnswer` returns `{ correct: false }`\n        (Edge Cases: \"close\" orderings are still wrong)\n      - an incomplete answer (fewer ids than items) → `{ correct: false }` (Edge Cases)\n- [X] T010 Run `npx vitest run` inside `packages/template-ordering/` and fix any failure before\n      proceeding to Phase 3 — this package must pass its own tests standalone, independent of any\n      consumer (SC-001). Result: 1 test file, 18 tests, all passed.\n\n**Checkpoint**: `template-ordering` exists, is independently tested, and passes on its own — User\nStory 2 is fully satisfied. User Story 1 can now begin.\n\n---\n\n## Phase 3: User Story 1 - Child arranges a set of numbers in order (Priority: P1)\n\n**Goal**: Rework `ordersNumbersTo1000` to use `template-ordering`, with content covering both\ninternal grades.\n\n**Independent Test**: Generate a session for `math.number-sense.orders-numbers-to-1000` at internal\ngrade 1 and grade 2; confirm each produces an `OrderingQuestion` (not a multiple-choice question),\nthat the fully-correct order validates as correct, and any incorrect order validates as incorrect.\n\n- [X] T011 [US1] In `packages/syllabus-content-g2/src/content.ts`, remove the\n      `createMultipleChoicePlugin` import if `ordersNumbersTo1000` was its only remaining consumer\n      in this file (check other exports before removing the import wholesale), and add `import {\n      createOrderingPlugin } from \"@learncoreskills/template-ordering\"`.\n      Verified `createMultipleChoicePlugin` still used by 4 other exports\n      (thirdsQuartersFifths, metricUnitsRelationships, tellsTimeFiveMinutesQuarterHour,\n      solvesOneStepWordProblem) — import kept, `createOrderingPlugin` import added alongside it.\n- [X] T012 [US1] In `packages/syllabus-content-g2/src/content.ts`, replace the existing\n      `ordersNumbersTo1000 = createMultipleChoicePlugin({...})` export (FR-011: delete the old bank\n      entirely) with `ordersNumbersTo1000 = createOrderingPlugin({...})`, keeping `pluginId:\n      \"syllabus-g2-orders-numbers-to-1000\"` and `competencyId: ordersNumbersTo1000Competency.id`\n      unchanged (FR-007).\n- [X] T013 [US1] Author the grade-1 `OrderingContentEntry` using data-model.md's specified content\n      exactly: `direction: \"ascending\"`, 3 items with ids `a`/`b`/`c` for values 199/245/254 at\n      `correctPosition` 1/2/3 respectively (bilingual labels — numbers formatted identically in\n      `en`/`fr`) (FR-002, FR-009).\n- [X] T014 [US1] Author the grade-2 `OrderingContentEntry` using data-model.md's specified content\n      (or an equivalent 4-distinct-number set the implementer judges to satisfy FR-008's \"at least\n      as hard\" requirement): `direction: \"descending\"`, 4 items covering values close enough in\n      magnitude to require real digit-by-digit comparison, not trivial at-a-glance ordering.\n      Used data-model.md's exact illustrative set: 863/683/638/601 descending.\n- [X] T015 [P] [US1] Create\n      `packages/syllabus-content-g2/tests/content.orders-numbers-to-1000.test.ts` (new file — FR-010,\n      no existing test covers this), following the same pattern established in\n      `033-classify-triangles-matching-activity` for its competency-level test: generate a question\n      for grade 1 and grade 2, build the correct `OrderingAnswer` from `question.correctOrder` and\n      assert `validateAnswer` accepts it, and build an incorrect ordering and assert it's rejected.\n- [X] T016 [US1] In the same test file, assert the question presents at least 3 items at grade 1 and\n      at least 4 at grade 2 (SC-002 — confirms the old 3-option format is gone and the new one\n      actually has more content at the harder grade).\n- [X] T017 [US1] Run `npx vitest run` inside `packages/syllabus-content-g2/` and fix any failure\n      before proceeding to polish. Result: 2 test files (coverage.test.ts +\n      content.orders-numbers-to-1000.test.ts), 12 tests, all passed.\n\n**Checkpoint**: `math.number-sense.orders-numbers-to-1000` is fully served by an ordering activity\ncovering both grades, with its own dedicated passing test.\n\n---\n\n## Phase 4: Polish & Cross-Cutting Concerns\n\n**Purpose**: Whole-repo validation and scope-boundary confirmation.\n\n- [X] T018 [P] Run `npm run lint` from the mathematics repo root; fix any new lint issue.\n      Result: clean, no output, exit 0.\n- [X] T019 [P] Run `npm run typecheck` from the mathematics repo root; fix any new type error.\n      Result: every workspace (including new template-ordering) typechecked cleanly, exit 0.\n- [X] T020 Run `npm run test` from the mathematics repo root (whole-repo suite) to confirm nothing\n      else regressed. Result: exit 0; every workspace package's own test script passed (including\n      template-ordering: 18/18, syllabus-content-g2: 12/12), then the root-level vitest run passed\n      108 test files / 913 tests.\n- [X] T021 Run `npm run coverage` from the mathematics repo root; confirm both `template-ordering`\n      and the reworked competency contribute non-trivial coverage and the repo's overall bar is not\n      reduced (SC-003).\n      Result: `template-ordering` achieves 100% statements/branches/functions/lines (66/66, 13/13,\n      24/24, 58/58) — comfortably over the 95% threshold, non-trivial coverage confirmed.\n      `syllabus-content-g2` rises from 0% coverage on `content.ts` (no dedicated test existed\n      before this feature) to 93.75% package-wide after adding\n      `content.orders-numbers-to-1000.test.ts` — a real improvement, not a reduction.\n      `syllabus-content-g2`'s package-level `npm run coverage` script itself still exits 1 because\n      its `index.ts` (the g2Plugins/g2Exercises wiring array, untouched by and out of scope for\n      this feature — FR-006 only concerns content.ts) has 0% coverage and has never had a\n      dedicated test. Verified via git-stash (including untracked files) that this exact failure\n      mode pre-exists this feature unchanged: baseline g2 coverage was 47.91% and already failed\n      the same threshold before any of this feature's edits. Confirmed the identical\n      untested-index.ts pattern independently fails coverage in every sibling\n      syllabus-content-g1/g3/g4/g5 package too (47-49% baseline, or 93-94% where a competency test\n      happens to exist) — a pre-existing, repo-wide gap affecting all five grade-tier packages\n      equally, not something this feature introduced, worsened, or is in scope to fix (no task in\n      this feature's tasks.md asks for `index.ts` coverage). The repo's overall coverage bar is not\n      reduced by this feature; SC-003's \"no reduction\" is satisfied even though the aggregate\n      `npm run coverage` script's exit code is unchanged (already non-zero before this feature for\n      the same root cause across 5 packages).\n- [X] T022 Confirm scope boundaries (SC-004): `git diff --stat` on this feature's branch touches\n      only `packages/template-ordering/` (new) and `packages/syllabus-content-g2/` (modified) — no\n      edits to `readsWritesOrdersTo10000` (G3) or `readsWritesOrdersToMillion` (G4)'s files.\n      Verified: `git status --porcelain` shows only `package-lock.json` (npm install artifact),\n      `packages/syllabus-content-g2/package.json`, `packages/syllabus-content-g2/src/content.ts`\n      modified, plus new/untracked `packages/syllabus-content-g2/tests/\n      content.orders-numbers-to-1000.test.ts` and `packages/template-ordering/`. Confirmed via\n      `grep -rl` that `readsWritesOrdersTo10000`/`readsWritesOrdersToMillion` live only in\n      `packages/syllabus-content-g3/` and `packages/syllabus-content-g4/` respectively — neither\n      appears in the diff. Scope boundary holds.\n- [X] T023 Re-read `packages/syllabus-content-g2/src/content.ts`'s final state end-to-end and\n      confirm no remnant of the old multiple-choice bank remains for `ordersNumbersTo1000` (FR-011).\n      Confirmed: `ordersNumbersTo1000` is now entirely `createOrderingPlugin({...})` with\n      direction/items/correctPosition content; no `options`/`correctIndex` shape remains for this\n      competency anywhere in the file. `createMultipleChoicePlugin` import retained only because 4\n      other exports in the file still use it.\n\n## Dependencies\n\n- Phase 1 (T001-T004) has no dependencies among its own tasks beyond ordering (T003 before T004,\n  since `npm install` needs the package.json to exist).\n- Phase 2 is fully gated on Phase 1 (needs the package scaffold). Within Phase 2: T005/T006 are\n  parallel (independent files) → T007 (factory) depends on both → T008 (index) depends on T007's\n  exports existing → T009 (tests) depends on T007/T008 → T010 (run tests) last.\n- **Phase 3 is fully gated on Phase 2's checkpoint (T010 passing)** — this is the hard dependency\n  noted in Organization above; User Story 1 cannot be implemented against a template that doesn't\n  exist yet or isn't verified working.\n- Within Phase 3: T011 → T012 (import before use) → T013, T014 (content authoring, independent of\n  each other) → T015, T016 (tests depend on content existing) → T017 (run tests last).\n- Phase 4 depends on Phase 3's checkpoint and runs whole-repo/scope checks last.\n\n## Parallel Example\n\n```\n# Phase 2: T005 and T006 touch different new files with no interdependency\nTask: \"T005 [P] Define types in packages/template-ordering/src/types.ts...\"\nTask: \"T006 [P] Copy rng.ts into packages/template-ordering/src/rng.ts...\"\n\n# Phase 3: T013 and T014 author independent grade entries\nTask: \"T013 [US1] Author the grade-1 OrderingContentEntry...\"\nTask: \"T014 [US1] Author the grade-2 OrderingContentEntry...\"\n```\n\n## Implementation Strategy\n\n**MVP = Phases 2 and 3 together.** Per spec.md's Assumptions, User Story 2 (the template) alone is\nunverified/unused code without a real consumer, and User Story 1 (the rework) alone isn't buildable\nwithout the template — there is no meaningful smaller MVP than both together. Phase 4 (polish) is\nwhat turns that MVP into something safe to merge, not an optional extension. `T022`'s scope-boundary\ncheck is the one place this feature actively resists growing beyond what was asked — a natural\ntemptation, since two more competencies share the exact gap this template fixes, but SC-004 commits\nto leaving them for follow-up tickets, not silent scope creep here.\n",F='# Tasks: Touch Once redesign (one-to-one counting)\n\n**Input**: [spec.md](spec.md), [plan.md](plan.md), [data-model.md](data-model.md), [contracts/count-path-scene.md](contracts/count-path-scene.md)\n**Repos**: `app` = `c:\\Dev\\learnCoreSkills\\app`; `math` = `c:\\Dev\\learnCoreSkills\\subjects\\mathematics`; `blog` = sibling repo.\n**Tests**: included (project requires coverage gate; Constitution VI).\n\nFormat: `- [ ] T### [P?] [US?] description with path`\n\n## Phase 1: Setup / Foundational (blocks all stories)\n\n- [X] T001 Extend `CountPathScene` in `app/packages/core/plugin-engine/src/types.ts` per data-model.md: add optional `emoji?: string`; change `paths[].numbers` to `(number | null)[]`; add optional `noObject?: number[]`. Update the doc comment. All additions optional/backward compatible.\n- [X] T002 [P] Extend `CountPathEntryScene` in `math/packages/template-multiple-choice/src/types.ts`: `paths: (number | null)[][]`, optional `emoji?: string`, optional `noObject?: number[][]` (index-aligned with options).\n- [X] T003 Update `resolveScene` in `math/packages/template-multiple-choice/src/factory.ts` to copy `emoji` and per-option `noObject` (via `indexOf(id)`) into the option-id-keyed scene; omit the keys when absent so Count in Order output is byte-identical.\n- [X] T004 [P] Add a factory test in `math/packages/template-multiple-choice/tests/scene.test.ts` covering null pads, `emoji` and `noObject` pass-through, plus "absent fields stay absent" (FR-010).\n- [X] T005 Extend `findFlaw` in `app/apps/web/src/activity-engine/scenes/CountPathScene.tsx` to take `(numbers, noObject?)`, accept `null`, and return kinds `skip | repeat | swap | untouched | extra` (`untouched` = a null pad; `extra` = a `noObject` pad). Existing number-only inputs must return exactly the same results as before.\n\n**Checkpoint**: types compile in app and math; Count in Order tests still green.\n\n## Phase 2: User Story 1 - See the touching, not read it (P1) MVP\n\n**Goal**: Touch Once options render as lanes of object pads; the frog lights each object as counted; untouched objects stay unlit.\n**Independent test**: render Touch Once question; pads show emoji + number; right lane lights every object once; MC fallback still answerable.\n\n- [X] T006 [US1] In `CountPathScene.tsx`, when `scene.emoji` is set render it on each pad with the number stacked beneath (null pad: emoji only, never lit, no number; `noObject` pad: number only). Keep `aria-label` of a lane as a readable sequence (null read as a skipped object). Drop the dot pattern whenever `emoji` is set.\n- [X] T007 [US1] In `app/apps/web/src/activity-engine/activityEngine.css` style object pads: whole lane stays >=44px tall tap target; 10 pads fit in 360px width without horizontal scroll; unlit/untouched pad visibly dimmed; reduced-motion keeps the final state.\n- [X] T008 [US1] Make the timeline in `CountPathScene.tsx` stop the wrong lane\'s hop correctly for `untouched` and `extra` flaws (stumble at that pad, ghost/dim treatment) and keep the right-lane replay.\n- [ ] T009 [P] [US1] Rebuild `buildOneToOneBank` in `math/packages/syllabus-content-p/src/banks/countingSkills.ts` to emit `scene: { type: "count-path", emoji, paths, noObject? }` (index-aligned with options, correct path = 1..n). Keep levels L1 2-4, L2 5-7, L3 8-10. Keep the text options (labelled rows) as the MC fallback labels. Prompt copy: short imperative, en + fr (fr must tolerate expansion).\n- [X] T010 [US1] Tests in `app/apps/web/src/activity-engine/CountPathScene.test.tsx`: emoji pads render; null pad has no number and never lights; `noObject` pad has no emoji; lane height class/targets; Count in Order rendering unchanged (FR-010).\n- [ ] T011 [P] [US1] Tests in `math/packages/syllabus-content-p/tests/` (new `touch-once-scene.test.ts`, modelled on `count-in-order-scene.test.ts`): every entry has a count-path scene whose path count equals options count, labels match, exactly one path is 1..n fully touched.\n\n**Checkpoint**: US1 shippable on its own.\n\n## Phase 3: User Story 2 - Varied mistakes + kind feedback (P2)\n\n**Goal**: wrong lanes vary by kind/position per question; each kind has an en + fr caption.\n**Independent test**: generate bank; mistake kind and position vary; every wrong path maps to a kind; captions exist in both languages.\n\n- [ ] T012 [US2] In `buildOneToOneBank` vary mistakes by seeded index (no `Math.random`): skip position, double position (not always last), stopped-early (trailing null), number-with-no-object (`noObject`). Each question gets 3 wrong paths of distinct kinds; no wrong path may equal a valid one-to-one counting (FR-008).\n- [ ] T013 [P] [US2] Add i18n keys in `app/apps/web/src/i18n/strings.ts` (type map + en + fr tables): `countPath.flaw.skip`, `.repeat`, `.untouched`, `.extra` (swap reuses Count in Order wording if it exists, else add `.swap`). Kind, short, no blame (e.g. en "That one was counted twice."; fr equivalent, allow ~30% longer).\n- [ ] T014 [US2] Render the caption in `CountPathScene.tsx` under the stumbling lane (role status, via `useTranslation`) after a wrong answer; no caption on correct answers or when the flaw is null.\n- [ ] T015 [P] [US2] Tests: `app/apps/web/src/activity-engine/CountPathScene.test.tsx` caption per kind in en and fr; `math/packages/syllabus-content-p/tests/touch-once-scene.test.ts` bank-wide: each wrong path has a derivable flaw kind, kinds vary within a size, positions are not constant across the bank.\n\n**Checkpoint**: US1 + US2 work.\n\n## Phase 4: User Story 3 - Real ladder (P3)\n\n**Goal**: >=4 distinct questions per count (>=36), subtler mistakes at higher levels.\n**Independent test**: count distinct questions per n; L3 wrong lanes differ by one object; L1 more visible.\n\n- [ ] T016 [US3] Expand `buildOneToOneBank` to >=4 variants per n in 2..10 (vary object via `pickOf(OBJECTS, ...)`, mistake kind/position); after `dedupe` assert >=4 survive per n. L1 mistakes blatant (stopped early, early skip); L2-L3 subtle (single double/skip mid-row).\n- [ ] T017 [P] [US3] Tests in `touch-once-scene.test.ts`: >=4 distinct questions per n (>=36 total, SC-003); L3 wrong paths differ from the right path by exactly one pad; determinism (building twice gives identical output).\n- [ ] T018 [P] [US3] Check bank size effects: run `math` syllabus coverage test (`syllabus-coverage.test.ts`) and fix any expectation tied to the old 18-item count.\n\n## Phase 5: Polish & cross-cutting\n\n- [ ] T019 Run `scripts/validate.ps1 -Repo app` then `-Repo mathematics`; read only the last line; fix failures. Note: the app coverage gate has failed before from unrelated gaps (see memory) - report, don\'t silently patch unrelated files.\n- [ ] T020 Manual check per `quickstart.md` step 4: build + serve (`app/scripts/build.ps1`, `serve.ps1`), Touch Once at 360px with 10 objects, in French, with reduced motion on.\n- [ ] T021 Write the blog post (skill `docs-blog`) in `blog/` and, if relevant, `specs/docs/`; set spec Status to Implemented. Feature is not done without it (specs -> app -> blog rule).\n\n## Dependencies\n\n- Phase 1 blocks all. T003 after T002; T004 after T003; T005 independent of T002-T004 (app only).\n- US1: T006 -> T007, T008; T009 after T001-T003; T010 after T006-T008; T011 after T009.\n- US2: T012 after T009; T013 parallel; T014 after T005, T013; T015 after T012, T014.\n- US3: T016 after T012; T017/T018 after T016.\n- Polish after all stories.\n\n## Parallel examples\n\n- T002 || T005 || T013 (different repos/files).\n- T009 || T006-T008 once Phase 1 is done.\n- T010 || T011.\n\n## Implementation strategy\n\nMVP = Phase 1 + US1 (T001-T011): the activity already shows objects and untouched pads. Then US2\n(variety + captions), then US3 (volume/ladder). Deferred (not in this feature): scattered/circle\nlayouts and audio.\n',I="# Tasks: Preschool & Kindergarten Scene Redesigns (Sweep Batch 1)\n\n**Input**: `specs/051-preschool-scene-redesigns/` (spec.md, plan.md, research.md, data-model.md, contracts/scene-vocabulary.md, quickstart.md)\n**Prerequisites**: plan.md, spec.md. Per-activity briefs: `specs/docs/activity-sweep/briefs/<pluginId>.md` (authoritative for levels, variants, strings, misconceptions).\n**Tests**: Required by FR-010 / quickstart.md: every scene and every activity gets Vitest coverage (behaviour, ladder, en+fr parity, a11y/reduced motion). Test work is folded into each task rather than listed separately.\n**Validation**: automated suite only (constitution: no dev server / GUI driving during implementation): `scripts/validate.ps1 -Repo app|mathematics|specs|all` (read the last line).\n\n## Format: `[ID] [P?] [Story] Description`\n\n- **[P]**: parallelisable (different files, no dependency on incomplete tasks). Activity tasks inside a group are independent of each other once the group's scene task is done.\n- **[Story]**: US1 redesign by doing, US2 teaching feedback, US3 en+fr, US4 accessibility, US5 range/variety, US6 new activities. Per-activity tasks carry **[US1]** (or **[US6]**) and also deliver US2-US5 for that activity (feedback, fr strings, a11y, levels), as FR-004..FR-010 require. Group tag `F#` ties to plan.md.\n- Repos: `app` = `c:/Dev/learnCoreSkills/app`; mathematics = `c:/Dev/learnCoreSkills/subjects/mathematics`; specs and blog as named. `[#n]` is the spec Work Item number.\n- Shared rule for every activity task: keep the existing pluginId and competency ids (saved progress), no `Math.random()` (seeded via `layoutSeed`/`pickOf`), keep the plain-text fallback, no text baked into art, targets >=44px, French layout tolerates ~+30% width.\n\n## Phase 1: Setup\n\n- [X] T001 (superseded: user wants main only, no branches) Create branch `051-preschool-scene-redesigns` in `app`, `subjects/mathematics` and `blog` if not present; confirm briefs exist for all 85 existing activities in `specs/docs/activity-sweep/briefs/`\n- [X] T002 Record baseline: run `scripts/validate.ps1 -Repo all` and note pre-existing failures (the app coverage gate has failed before from unrelated gaps) so they are not attributed to this feature **Baseline (2026-10-03): app/lint OK; app/typecheck FAIL — pre-existing uncommitted Touch Once WIP widens `CountPathScene.paths.numbers` to `(number|null)[]` but `CountPathScene.tsx` lines ~53,132 still assume `number[]`; to be fixed in F0.**\n\n---\n\n## Phase 2: Foundational - F0 shared infrastructure (blocks everything)\n\n**Purpose**: scene-kit, art module, EntryScene generalisation, i18n namespace and answer encodings (plan.md F0, research R1/R3/R4/R6).\n\n**CRITICAL**: no group below can start until F0 is complete.\n\n- [X] T003 Extend the `Scene` union in `app/packages/core/plugin-engine/src/types.ts` with additive optional fields only: types `build-set`, `slot-order`, `shape-board`, `grid-moves`, `measure-compare` per `contracts/scene-vocabulary.md`; add a canonical answer-encoding helper module (`build-set` `3|2`, `slot-order` ids `,`-joined with `_` for empty, `shape-board` sorted ids, `grid-moves` `U D L R`, `measure-compare` option id) per the `data-model.md` table, with unit tests\n- [X] T004 [P] Create `app/apps/web/src/activity-engine/scene-kit/` (useDragTap pointer+keyboard Enter/Space hook >=48px, DoneButton >=56px, Tray, Slot, useAnnounce aria-live, reveal helpers) and CSS tokens in `app/apps/web/src/activity-engine/activityEngine.css` (44px targets, French text wrap/grow, `prefers-reduced-motion` end-state rule); unit tests for tap/keyboard parity and reduced motion\n- [X] T005 [P] Create `app/apps/web/src/activity-engine/art/` shared inline-SVG module (shapes with rotations and near-miss variants, solids with shading, vessels, balance, characters; keys like `shape:rect:wide`, `solid:cone`, `vessel:tall`, `char:bear`); no visible text; each art gets an aria-label from i18n; render tests\n- [X] T006 [P] Widen `EntryScene` in `subjects/mathematics/packages/template-multiple-choice/src/{types,factory}.ts` and `subjects/mathematics/packages/template-true-false/src/` from `PickGroup|CountPath` to any engine `Scene` with language-neutral pass-through; keep MC validation unchanged; tests that existing Count in Order and Touch Once data render identically\n- [X] T007 Register the extension points in `app/apps/web/src/activity-engine/SceneView.tsx` (`SceneRegistry` and `answeringSceneTypes`), keeping unknown-type -> text fallback; update the `ActivityStage` fallback test\n- [X] T008 [P] Add the `scene.<type>.*` i18n namespace skeleton (labels, buttons, aria, shared misconception kinds) in `app/apps/web/src/i18n/strings.ts` en + fr, plus a shared en/fr key-parity test helper reusable by every scene and bank test\n- [X] T009 [P] Add the shared bank-test helper in `subjects/mathematics/packages/syllabus-content-p/tests/` asserting: 3-5 levels, >=4 distinct seeded variants per level, determinism for repeated `(grade, seed)`, pluginId/competency refs unchanged (R9), every claimed competency row reachable; extend `tests/banks.test.ts` and the coverage test accordingly\n- [X] T010 Run `scripts/validate.ps1 -Repo all`; F0 gate must be `ALL PASS` before any group starts **Result (2026-10-04): app, specs, blog ALL PASS (app coverage flaked once on ImportChildButton under load, passes alone and on rerun). mathematics/test: 1449 tests pass; only tests/subjectsIndex.test.ts fails with `spawnSync npm ENOENT` (Windows needs npm.cmd in execFileSync) — environmental, unrelated to F0.**\n\n**Checkpoint**: foundation ready; groups can start (recommended order F7, F1, F6, F2, F3, F4, F5, then US6 and polish).\n\n---\n\n## Phase 3: User Story 1 - A child does the skill instead of reading about it (Priority: P1) MVP\n\n**Goal**: every Pre-K/K activity is a scene with a touch/drag/place primary action; text is supporting only. Each activity task also delivers US2 feedback, US3 fr, US4 a11y and US5 range for that activity.\n\n**Independent Test**: open one redesigned activity (e.g. `preschool-flash-dots`) with the prompt hidden; a child can understand and complete it from the scene alone.\n\n\n### Group F7: Extended pick-group + display-only entry scenes (24 activities)\n\n- [X] T011 [US1] [F7] Extend `pick-group` in `app/apps/web/src/activity-engine/scenes/PickGroupScene.tsx` and `app/packages/core/plugin-engine/src/types.ts` with optional `groups[].glyph` (art key), `allowSame`, `multi`, `reveal` (pairing|align|none), `prompts`; wire display-only `counters`, `ten-frame`, `number-line` entry scenes through the widened EntryScene; tests incl. multi-select sorted-ids answer, same button, en+fr. Dependents: #1,2,3,5,6,7,8,22,27,28,32,35,36,37,38,43,48,54,59,60,63,77,81,87.\n- [X] T012 [P] [US1] [#1] REDESIGN `preschool-flash-dots` (PK.NUM.5) per `specs/docs/activity-sweep/briefs/preschool-flash-dots.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/flash-dots.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T013 [P] [US1] [#2] REDESIGN `preschool-same-or-not` (PK.NUM.7) per `specs/docs/activity-sweep/briefs/preschool-same-or-not.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/same-or-not.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T014 [P] [US1] [#3] REDESIGN `preschool-bigger-number` (K.NUM.11) per `specs/docs/activity-sweep/briefs/preschool-bigger-number.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/bigger-number.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T015 [P] [US1] [#5] REDESIGN `preschool-bigger-smaller-same` (K.NUM.11) per `specs/docs/activity-sweep/briefs/preschool-bigger-smaller-same.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/bigger-smaller-same.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T016 [P] [US1] [#6] TWEAK `preschool-numeral-twins` (PK.NUM.6) per `specs/docs/activity-sweep/briefs/preschool-numeral-twins.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/numeral-twins.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T017 [P] [US1] [#7] TWEAK `preschool-show-the-number` (K.NUM.7) per `specs/docs/activity-sweep/briefs/preschool-show-the-number.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/show-the-number.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T018 [P] [US1] [#8] TWEAK `preschool-number-hunt` (PK.NUM.6, K.NUM.7) per `specs/docs/activity-sweep/briefs/preschool-number-hunt.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/number-hunt.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T019 [P] [US1] [#22] REDESIGN `preschool-ordinal-or-count` (K.NUM.14) per `specs/docs/activity-sweep/briefs/preschool-ordinal-or-count.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/ordinal-or-count.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T020 [P] [US1] [#27] REDESIGN `preschool-still-the-same` (K.NUM.4) per `specs/docs/activity-sweep/briefs/preschool-still-the-same.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/still-the-same.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T021 [P] [US1] [#28] REDESIGN `preschool-which-row-has-more` (K.NUM.4) per `specs/docs/activity-sweep/briefs/preschool-which-row-has-more.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/which-row-has-more.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T022 [P] [US1] [#32] TWEAK `preschool-pick-the-right-way` (K.NUM.8) per `specs/docs/activity-sweep/briefs/preschool-pick-the-right-way.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/pick-the-right-way.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T023 [P] [US1] [#35] TWEAK `preschool-who-is-nth` (K.NUM.14) per `specs/docs/activity-sweep/briefs/preschool-who-is-nth.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/who-is-nth.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T024 [P] [US1] [#36] REDESIGN `preschool-colour-the-nth` (K.NUM.14) per `specs/docs/activity-sweep/briefs/preschool-colour-the-nth.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/colour-the-nth.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T025 [P] [US1] [#37] REDESIGN `preschool-is-zero-a-number` (K.NUM.13) per `specs/docs/activity-sweep/briefs/preschool-is-zero-a-number.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/is-zero-a-number.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T026 [P] [US1] [#38] REDESIGN `preschool-quantity-words` (PK.PSR.1) per `specs/docs/activity-sweep/briefs/preschool-quantity-words.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/quantity-words.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T027 [P] [US1] [#43] REDESIGN `preschool-name-the-group` (PK.DAT.1) per `specs/docs/activity-sweep/briefs/preschool-name-the-group.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/name-the-group.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T028 [P] [US1] [#48] REDESIGN `preschool-name-the-thing` (K.GEO.2) per `specs/docs/activity-sweep/briefs/preschool-name-the-thing.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/name-the-thing.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T029 [P] [US1] [#54] REDESIGN `preschool-odd-one-out` (PK.DAT.1) per `specs/docs/activity-sweep/briefs/preschool-odd-one-out.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/odd-one-out.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T030 [P] [US1] [#59] TWEAK `preschool-name-shapes` (PK.GEO.1) per `specs/docs/activity-sweep/briefs/preschool-name-shapes.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/name-shapes.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T031 [P] [US1] [#60] REDESIGN `preschool-solid-match` (K.GEO.2) per `specs/docs/activity-sweep/briefs/preschool-solid-match.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/solid-match.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T032 [P] [US1] [#63] REDESIGN `preschool-what-to-measure` (K.MEA.1) per `specs/docs/activity-sweep/briefs/preschool-what-to-measure.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/what-to-measure.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T033 [P] [US1] [#77] REDESIGN `preschool-facts-within-five` (K.AS.5) per `specs/docs/activity-sweep/briefs/preschool-facts-within-five.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/facts-within-five.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T034 [P] [US1] [#81] TWEAK `preschool-teen-numbers` (K.PV.2) per `specs/docs/activity-sweep/briefs/preschool-teen-numbers.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/teen-numbers.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T035 [P] [US1] [#87] REDESIGN `preschool-explain-answer` (K.PSR.1) per `specs/docs/activity-sweep/briefs/preschool-explain-answer.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/explain-answer.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T036 [US1] [F7] Group gate: `scripts/validate.ps1 -Repo all` is `ALL PASS`; set the Spec column to 051 in `specs/docs/activity-sweep/tracker.md` for this group's rows; write one blog post for the group in `blog/` (specs -> app -> blog rule)\n\n### Group F1: build-set scene (21 activities)\n\n- [X] T037 [US1] [F1] Implement the `build-set` scene (variants give, take, combine, split, deal, pair, sort, pay, sentence) in `app/apps/web/src/activity-engine/scenes/BuildSetScene.tsx` per contracts; register in `SceneView.tsx`; tap moves an item to the next valid zone, tap a placed item returns it, one Done button; misconception kinds via `scene.build-set.<kind>` en+fr; tests incl. reduced motion, 44px, aria. Dependents: #4,9,10,18,23,26,30,31,55,61,62,64,65,67,73,74,75,78,80,82,83,85. If it overruns, split F1a (give/take/combine/split/deal) and F1b (pair/sort/pay/sentence). **Done (F1a):** scene + tests shipped; zones give/take/combine/split/deal verified. F1b variants (pair/sort/pay/sentence) reuse the same scene, their activities still open.\n- [X] T038 [P] [US1] [#4] REDESIGN `preschool-all-together` (PK.AS.2) per `specs/docs/activity-sweep/briefs/preschool-all-together.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/all-together.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T039 [P] [US1] [#9] REDESIGN `preschool-how-many-altogether` (PK.AS.2) per `specs/docs/activity-sweep/briefs/preschool-how-many-altogether.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/how-many-altogether.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T040 [P] [US1] [#10] REDESIGN `preschool-how-many-left` (PK.AS.1) per `specs/docs/activity-sweep/briefs/preschool-how-many-left.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/how-many-left.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T041 [P] [US1] [#18] TWEAK `preschool-which-picture` (PK.AS.1) per `specs/docs/activity-sweep/briefs/preschool-which-picture.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/which-picture.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** pick-group scene, whole start row (no X marks), options are real groups; removed/start/near-miss hints en+fr; tests/which-picture.test.ts.\n- [X] T042 [P] [US1] [#23] REDESIGN `preschool-story-plus-or-minus` (K.AS.2, PK.AS.2) per `specs/docs/activity-sweep/briefs/preschool-story-plus-or-minus.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/story-plus-or-minus.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** acted-out story on build-set (arrivals/departures, themed verbs, \"Later,\" cue at L3); join/take hints en+fr; tests/story-plus-or-minus.test.ts.\n- [X] T043 [P] [US1] [#26] REDESIGN `preschool-solve-it` (K.AS.2, PK.AS.1, PK.AS.2) per `specs/docs/activity-sweep/briefs/preschool-solve-it.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/solve-it.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T044 [P] [US1] [#30] REDESIGN `preschool-two-hands` (K.AS.3) per `specs/docs/activity-sweep/briefs/preschool-two-hands.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/two-hands.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T045 [P] [US1] [#31] REDESIGN `preschool-another-way` (K.AS.3) per `specs/docs/activity-sweep/briefs/preschool-another-way.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/another-way.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T046 [P] [US1] [#61] REDESIGN `preschool-give-n` (PK.NUM.4) per `specs/docs/activity-sweep/briefs/preschool-give-n.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/give-n.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T047 [P] [US1] [#62] REDESIGN `preschool-money-play` (K.MON.1) per `specs/docs/activity-sweep/briefs/preschool-money-play.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/money-play.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** build-set pay scene (purse to shop, price 1-5, count hidden at L3); too few/too many hints en+fr; neutral coins (local coin art and need-more level deferred); tests/money-play.test.ts.\n- [X] T048 [P] [US1] [#64] REDESIGN `preschool-number-sentences` (K.AS.7) per `specs/docs/activity-sweep/briefs/preschool-number-sentences.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/number-sentences.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** build-set sentence acted out (\"3 + 2 = ?\" join, \"5 − 2 = ?\" take; L3 to 8, count hidden); join/take hints en+fr; no symbol-tile strip yet (scene lacks it); tests/number-sentences.test.ts\n- [X] T049 [P] [US1] [#65] REDESIGN `preschool-fair-shares` (K.MD.1) per `specs/docs/activity-sweep/briefs/preschool-fair-shares.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/fair-shares.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T050 [P] [US1] [#67] REDESIGN `preschool-doubles` (K.AS.6) per `specs/docs/activity-sweep/briefs/preschool-doubles.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/doubles.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** build-set copy-the-group (L1 n1-3, L2 n4-5) then count 2n (L3); doubleBoth hint en+fr; tests/doubles.test.ts\n- [X] T051 [P] [US1] [#73] REDESIGN `preschool-one-more-less` (K.NUM.9) per `specs/docs/activity-sweep/briefs/preschool-one-more-less.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/one-more-less.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** build-set add/take exactly one (to 5, to 10, 10-20 hidden count); oneMoreWay hint en+fr; tests/one-more-less.test.ts\n- [X] T052 [P] [US1] [#74] REDESIGN `preschool-pairs` (K.ALG.3) per `specs/docs/activity-sweep/briefs/preschool-pairs.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/pairs.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** build-set pack the pairs, leave the lonely one (n2-5, 6-10, two bags L3); pairLonely/pairAllPaired hints en+fr; tests/pairs.test.ts\n- [X] T053 [P] [US1] [#75] REDESIGN `preschool-take-n` (K.NUM.5) per `specs/docs/activity-sweep/briefs/preschool-take-n.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/take-n.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T054 [P] [US1] [#78] REDESIGN `preschool-act-out-add-take` (K.AS.1) per `specs/docs/activity-sweep/briefs/preschool-act-out-add-take.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/act-out-add-take.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** build-set add/take/together/apart on a tray, L1 to 5, L2 to 8, L3 to 10 hidden count; join/take hints en+fr; tests/act-out-add-take.test.ts.\n- [X] T055 [P] [US1] [#80] REDESIGN `preschool-compare-groups` (K.NUM.10) per `specs/docs/activity-sweep/briefs/preschool-compare-groups.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/compare-groups.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** build-set pair-up of two groups, L1 gap 2+ to 5, L2 gap 1-3 to 10, L3 equal and near groups; pairExtra hint en+fr; tests/compare-groups.test.ts.\n- [X] T056 [P] [US1] [#82] REDESIGN `preschool-enough-for-all` (K.PSR.2) per `specs/docs/activity-sweep/briefs/preschool-enough-for-all.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/enough-for-all.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** build-set deal, one cup/plate/chair per friend (capacity 1), L1 2-4 friends, L2 to 6, L3 to 8 short by 3; noneYet hint en+fr; tests/enough-for-all.test.ts.\n- [X] T057 [P] [US1] [#83] REDESIGN `preschool-picture-graph` (K.DAT.2) per `specs/docs/activity-sweep/briefs/preschool-picture-graph.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/picture-graph.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** build-set sort into picture columns, 100+ seeded items, unique heights, L3 to 7 count hidden; sortLeft/sortMix en+fr; tests/picture-graph.test.ts.\n- [X] T058 [P] [US1] [#85] REDESIGN `preschool-sort-and-count` (K.DAT.1) per `specs/docs/activity-sweep/briefs/preschool-sort-and-count.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/sort-and-count.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** build-set sort into bins, L1 two kinds to 5, L2 three kinds to 9, L3 three colours; sortLeft/sortMix en+fr; tests/sort-and-count.test.ts.\n- [X] T059 [US1] [F1] Group gate: `scripts/validate.ps1 -Repo all` is `ALL PASS`; set the Spec column to 051 in `specs/docs/activity-sweep/tracker.md` for this group's rows; write one blog post for the group in `blog/` (specs -> app -> blog rule) **Done:** validate ALL PASS; tracker Spec 051 for 21 F1 rows; blog 2026-10-10-preschool-games-you-do-with-your-hands (en+fr).\n\n### Group F6: Touch-once tap mode (counters / ten-frame / count-path) (9 activities)\n\n- [X] T060 [US1] [F6] Extend `counters`, `ten-frame` and `count-path` in `app/apps/web/src/activity-engine/scenes/{CountersScene,TenFrameScene,CountPathScene}.tsx` with optional touch-once `tap` mode (number tags, highlightLast, target, hidden, direction up|down) and ten-frame `tapFill`; Count in Order and Touch Once must render identically without the new fields; tests incl. reduced motion. Dependents: #21,25,29,34,50,66,69,71,84. **Done:** counters/count-path `tap` (numbers, highlightLast, target, hidden cloth, direction, remove), counters `layout`, ten-frame `tapFill` (Done submits the counters added); ActivityStage holds the answer controls until every tap is made; vendored plugin-engine tgz rebuilt; tests incl. reduced motion, plain scenes unchanged.\n- [X] T061 [P] [US1] [#21] REDESIGN `preschool-how-many-last-tag` (PK.NUM.3) per `specs/docs/activity-sweep/briefs/preschool-how-many-last-tag.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/how-many-last-tag.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** MC + counters tap scene (row/scatter/clusters), L1 1-3 / L2 2-5 / L3 6-10, first-number + off-by-one hints en+fr; test how-many-last-tag.\n- [X] T062 [P] [US1] [#25] REDESIGN `preschool-how-many-all-together` (PK.NUM.3) per `specs/docs/activity-sweep/briefs/preschool-how-many-all-together.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/how-many-all-together.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** MC + counters tap scene, L1 1-3 row / L2 4-5 / L3 6-10 scatter or clusters, 11-20 dropped, hints en+fr; test how-many-all-together.\n- [X] T063 [P] [US1] [#29] REDESIGN `preschool-empty-basket` (K.NUM.13) per `specs/docs/activity-sweep/briefs/preschool-empty-basket.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/empty-basket.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** counters tap `remove` scene (touch to take away), answer 0 at every level, no baked words, start / 1-for-empty / near-miss hints en+fr; test empty-basket.\n- [X] T064 [P] [US1] [#34] REDESIGN `preschool-hidden-bag` (K.NUM.2) per `specs/docs/activity-sweep/briefs/preschool-hidden-bag.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/hidden-bag.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** counters tap with `hidden` cloth badge, counts on from the start (2-3 / 3-6 / 5-10), start + start-1 distractors with hints en+fr; test hidden-bag.\n- [X] T065 [P] [US1] [#50] REDESIGN `preschool-count-to-thirty` (K.NUM.1) per `specs/docs/activity-sweep/briefs/preschool-count-to-thirty.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/count-to-thirty.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** count-path tap stones (ones 11-29 across 29 to 30, tens to 100), repeat / skip / decade / tens-as-ones hints en+fr; test count-to-thirty.\n- [X] T066 [P] [US1] [#66] REDESIGN `preschool-count-backward` (K.NUM.3) per `specs/docs/activity-sweep/briefs/preschool-count-backward.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/count-backward.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** count-path tap `direction: down` launch pad (5-10 / 11-15 across 10 / 16-20 + zero ending), up / repeat / skip / teen / stop-at-1 hints en+fr; test count-backward.\n- [X] T067 [P] [US1] [#69] REDESIGN `preschool-make-ten` (K.AS.4) per `specs/docs/activity-sweep/briefs/preschool-make-ten.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/make-ten.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** ten-frame `tapFill` (fill to 10, partner = counters added) at L1-L2, L3 pick-the-pair on a frame; same-number / off-by-one hints en+fr; test make-ten.\n- [X] T068 [P] [US1] [#71] REDESIGN `preschool-ten-frame` (K.PV.1) per `specs/docs/activity-sweep/briefs/preschool-ten-frame.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/ten-frame.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** kept flash-and-tell L1-L3, added L4 Show n (0-10) and L5 fill-to-10 on `tapFill`; full-row / count-empty hints en+fr; test ten-frame.\n- [X] T069 [P] [US1] [#84] REDESIGN `preschool-estimate` (K.PSR.3) per `specs/docs/activity-sweep/briefs/preschool-estimate.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/estimate.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** L1 pick-group bigger pile, L2 about 5/10/20 beside a group of 5 (en about, fr environ), L3 tap-count then judge Dan's guess; anchor / close hints en+fr; test estimate. Deferred: a separate guess-then-count-then-marker flow.\n- [X] T070 [US1] [F6] Group gate: `scripts/validate.ps1 -Repo all` is `ALL PASS`; set the Spec column to 051 in `specs/docs/activity-sweep/tracker.md` for this group's rows; write one blog post for the group in `blog/` (specs -> app -> blog rule) **Done:** validate ALL PASS; tracker Spec 051 for 9 F6 rows; blog section added to 2026-10-10-preschool-games-you-do-with-your-hands (en+fr).\n\n### Group F2: slot-order scene (13 activities)\n\n- [X] T071 [US1] [F2] Implement the `slot-order` scene (variants strip, track, pattern, sky, size) in `app/apps/web/src/activity-engine/scenes/SlotOrderScene.tsx` per contracts; tap card then slot or drag, tap a filled slot to clear; answer = card ids in slot order with `_` for empty; tie solutions; en+fr; tests incl. keyboard, reduced motion, aria; check `subjects/mathematics/packages/template-ordering/src/` for slot-order answer validation. Dependents: #11,12,15,24,40,41,44,51,52,56,72,76,79 and new #53. **Done:** SlotOrderScene (strip, track, pattern, sky, size): tap card then slot, drag, tap a filled slot to clear, copies for reusable tokens, fixed and glyph/label slots, Done when every free slot (or every card) is placed, hints reversed / swapped / specific misses; MC template keys options by encoded answer and validates ties via slotOrderMatches; tests incl. keyboard, drag, reduced motion, aria, en/fr parity; template-ordering has no slot-order validation to reuse.\n- [X] T072 [P] [US1] [#11] TWEAK `preschool-what-comes-next` (PK.ALG.1, K.ALG.1) per `specs/docs/activity-sweep/briefs/preschool-what-comes-next.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/what-comes-next.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** patterns.ts: pattern row with fixed tiles and one dashed slot at the end, 3-4 tiles, L1 starts with 2 full units, repeat-last / not-in-pattern hints en+fr; test what-comes-next.\n- [X] T073 [P] [US1] [#12] REDESIGN `preschool-days-in-order` (K.TIM.2) per `specs/docs/activity-sweep/briefs/preschool-days-in-order.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/days-in-order.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** days.ts: week strip (school/house shapes), L1 fill one Mon-Fri gap with 2 cards, L2 2-3 gaps over the week, L3 whole week plus Sun-to-Mon wrap runs, weekend / wrap / reversed hints en+fr; test days-in-order.\n- [X] T074 [P] [US1] [#15] REDESIGN `preschool-day-after` (K.TIM.2) per `specs/docs/activity-sweep/briefs/preschool-day-after.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/day-after.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** days.ts: week strip with today on the sun, tomorrow / yesterday marker, L1 Mon-Fri tomorrow, L2 whole week without wrap, L3 with wrap, direction / count-one / wrap hints en+fr; test day-after.\n- [X] T075 [P] [US1] [#24] REDESIGN `preschool-neighbour-houses` (PK.NUM.8) per `specs/docs/activity-sweep/briefs/preschool-neighbour-houses.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/neighbour-houses.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** beforeAfter.ts: FIB replaced by street of houses with number tiles (MC over slot-order), L1 after 1-5, L2 before/after 1-9, L3 middle gap 0-10, alreadyHere / countAlong / direction hints en+fr; test neighbour-houses.\n- [X] T076 [P] [US1] [#40] REDESIGN `preschool-routine-order` (PK.TIM.1) per `specs/docs/activity-sweep/briefs/preschool-routine-order.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/routine-order.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** dataLanguage.ts: first/next/last strip, 12 routines (4 with 4 steps), L1 one picture missing, L2 arrow, L3 no arrow and 4-step, startFirst / endFirst / notThis hints en+fr; test routine-order.\n- [X] T077 [P] [US1] [#41] REDESIGN `preschool-yesterday-today-tomorrow` (K.TIM.1) per `specs/docs/activity-sweep/briefs/preschool-yesterday-today-tomorrow.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/yesterday-today-tomorrow.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** yesterdayTodayTomorrow.ts: 3-card time line (night, sun, sunrise) left to right, L1 marker, L2 event picture, L3 weekday names, before / now / after hints en+fr; test yesterday-today-tomorrow.\n- [X] T078 [P] [US1] [#44] REDESIGN `preschool-what-day-was-it` (K.TIM.1, K.TIM.2) per `specs/docs/activity-sweep/briefs/preschool-what-day-was-it.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/what-day-was-it.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** yesterdayTodayTomorrow.ts: FIB replaced by day cards on a yesterday/today/tomorrow line (MC over slot-order), L1 yesterday, L2 tomorrow, L3 both / unmarked today / wrap (3 levels because the competency has 3), hints en+fr; test what-day-was-it.\n- [X] T079 [P] [US1] [#51] REDESIGN `preschool-goes-in-the-middle` (PK.MEA.3) per `specs/docs/activity-sweep/briefs/preschool-goes-in-the-middle.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/goes-in-the-middle.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** orderBySize.ts + seriation.ts: objects drawn at relative size, L1 pick the middle one (too-small / too-big hints), L2 order three, L3 closer sizes either direction, six objects, arrow / closer hints en+fr; test goes-in-the-middle.\n- [X] T080 [P] [US1] [#52] REDESIGN `preschool-when-does-it-happen` (PK.TIM.2) per `specs/docs/activity-sweep/briefs/preschool-when-does-it-happen.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/when-does-it-happen.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** partsOfDay.ts: sky zones, L1 day/night, L2 morning/afternoon/evening, L3 four parts with tie solutions plus order-two items, 16 activities, L3 shares none with L2, look-at-the-sky hint en+fr; test when-does-it-happen.\n- [X] T081 [P] [US1] [#56] TWEAK `preschool-fill-the-gap` (PK.ALG.1, K.ALG.1) per `specs/docs/activity-sweep/briefs/preschool-fill-the-gap.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/fill-the-gap.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** missingItem.ts: pattern row with the gap anywhere after the first unit or at the end, shape and colour-only patterns, 3-4 tiles, >=60 items, hints en+fr; test fill-the-gap.\n- [X] T082 [P] [US1] [#72] REDESIGN `preschool-pattern-translate` (K.ALG.2) per `specs/docs/activity-sweep/briefs/preschool-pattern-translate.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/pattern-translate.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** patterns.ts: source row drawn on the slots, child fills the same pattern in another form (colour, animal, move, shape, fruit, vehicle) with reusable tokens, L1 AB, L2 AAB/ABB, L3 ABC + mixed, unit hint en+fr; test pattern-translate.\n- [X] T083 [P] [US1] [#76] REDESIGN `preschool-order-objects` (PK.MEA.3, K.MEA.3) per `specs/docs/activity-sweep/briefs/preschool-order-objects.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/order-objects.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** orderObjects.ts + seriation.ts: 3/4/5 things in order by length (drawn to scale) or weight (animals), both directions, ends named on first and last slot, arrow hint en+fr; test order-objects.\n- [X] T084 [P] [US1] [#79] REDESIGN `preschool-number-track` (K.NUM.12) per `specs/docs/activity-sweep/briefs/preschool-number-track.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/number-track.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** numberTrack.ts: L1 track 0-5/1-5 with a gap anywhere + 3 tiles, L2 0-10 with 1-2 gaps + 4 tiles, L3 3-5 shuffled cards smallest first, alreadyThere / between / smallFirst hints en+fr; test number-track.\n- [X] T085 [US1] [F2] Group gate: `scripts/validate.ps1 -Repo all` is `ALL PASS`; set the Spec column to 051 in `specs/docs/activity-sweep/tracker.md` for this group's rows; write one blog post for the group in `blog/` (specs -> app -> blog rule) **Done:** validate.ps1 -Repo all = ALL PASS; tracker Spec=051 on the 13 F2 rows; F2 section added to the 2026-10-10 blog post (en + fr); vendored plugin-engine tgz rebuilt.\n\n### Group F3: shape-board scene (9 activities)\n\n- [X] T086 [US1] [F3] Implement the `shape-board` scene (modes tap, sort, match, inset, trace, try, compose, hunt) in `app/apps/web/src/activity-engine/scenes/ShapeBoardScene.tsx` using `art/`; answer = sorted tapped ids, `id:bin` pairs or stroke-order digest; tests incl. orientation/near-miss art, reduced motion, aria. Dependents: #14,17,39,42,45,46,49,88,89 and new #33, #47. **Done:** ShapeBoardScene (tap, hunt, trace, sort, try, match, inset, compose) with the sides/corners/curve overlay from art/geometry.ts, None button, ramp demo, hints via misses; plugin-engine adds encodeShapeTap/Trace + SHAPE_NONE, the MC factory validates shape-board answers; art gains solid:cuboid; tests incl. keyboard, drag, reduced motion, aria, en/fr parity.\n- [X] T087 [P] [US1] [#14] TWEAK `preschool-shape-hunt` (PK.GEO.1, K.GEO.1) per `specs/docs/activity-sweep/briefs/preschool-shape-hunt.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/shape-hunt.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** shapeHunt.ts: single-tap find among 3-4 drawn shapes, L1 circle/square/triangle, L2 +rectangle with sizes, L3 turned shapes, hexagon, near-misses, colours rotate, cue per wrong tap en+fr; test shape-hunt.\n- [X] T088 [P] [US1] [#17] REDESIGN `preschool-is-it-a-rectangle` (PK.GEO.1, K.GEO.1) per `specs/docs/activity-sweep/briefs/preschool-is-it-a-rectangle.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/is-it-a-rectangle.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** shapeHunt.ts: tap every rectangle among 3/4-5/6 shapes, square from L2, rhombus and flat-topped triangle at L3, cue per tapped shape and look-again for a missed one; plugin now MC; test is-it-a-rectangle.\n- [X] T089 [P] [US1] [#39] REDESIGN `preschool-match-shapes` (PK.GEO.2) per `specs/docs/activity-sweep/briefs/preschool-match-shapes.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/match-shapes.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** shapePlace.ts: 5 levels, twin on a shelf, other colour/size with colour and size traps, then 3/4/5-piece inset puzzles (rectangle at L4, turned pieces at L5); test match-shapes.\n- [X] T090 [P] [US1] [#42] REDESIGN `preschool-count-the-sides` (K.GEO.3) per `specs/docs/activity-sweep/briefs/preschool-count-the-sides.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/count-the-sides.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** shapeParts.ts: tap every side of a drawn shape (each counts once, numbered), L1 3-4 sides, L2 5-6 sides turned/stretched, L3 which-has-N-sides and no straight sides, 32 looks; plugin now MC; test count-the-sides.\n- [X] T091 [P] [US1] [#45] REDESIGN `preschool-roll-or-stack` (PK.GEO.3) per `specs/docs/activity-sweep/briefs/preschool-roll-or-stack.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/roll-or-stack.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** shapePlace.ts: try each solid on a ramp then sort into Rolls/Stacks (Both at L3), 8 rounds per level plus a tower question, hint per solid; test roll-or-stack.\n- [X] T092 [P] [US1] [#46] REDESIGN `preschool-sides-or-corners` (K.GEO.3) per `specs/docs/activity-sweep/briefs/preschool-sides-or-corners.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/sides-or-corners.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** shapeParts.ts: tap corners or sides of triangle..hexagon, L3 which has no corners, tap the curved edge, straight-sided shapes; one answer per prompt; test sides-or-corners.\n- [X] T093 [P] [US1] [#49] REDESIGN `preschool-solid-or-flat` (K.GEO.2) per `specs/docs/activity-sweep/briefs/preschool-solid-or-flat.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/solid-or-flat.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** shapePlace.ts: sort drawn solids and flat shapes into Flat/Solid bins, 2/4/6 pictures, why-hints (ball vs circle), no 3D/2D words; test solid-or-flat.\n- [X] T094 [P] [US1] [#88] REDESIGN `preschool-bigger-shape` (K.GEO.4) per `specs/docs/activity-sweep/briefs/preschool-bigger-shape.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/bigger-shape.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** shapePlace.ts: compose silhouettes from squares (2, 3-4, 4-5 cells, upright and turned) with spare circle/triangle pieces and a does-not-fit hint; no triangle tangram (art has no right-triangle); test bigger-shape.\n- [X] T095 [P] [US1] [#89] REDESIGN `preschool-shapes-around` (K.GEO.5) per `specs/docs/activity-sweep/briefs/preschool-shapes-around.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/shapes-around.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable) **Done:** shapeHunt.ts: hunt in five rooms for circles/squares/triangles/rectangles (square beside rectangle at L2), then sphere/cube/cylinder/cone/cuboid (box); test shapes-around.\n- [X] T096 [US1] [F3] Group gate: `scripts/validate.ps1 -Repo all` is `ALL PASS`; set the Spec column to 051 in `specs/docs/activity-sweep/tracker.md` for this group's rows; write one blog post for the group in `blog/` (specs -> app -> blog rule) **Done:** validate.ps1 -Repo all = ALL PASS; tracker Spec=051 on the 9 F3 rows; F3 section added to the 2026-10-10 blog post (en + fr); vendored plugin-engine tgz in subjects/mathematics rebuilt.\n\n### Group F4: grid-moves scene (4 activities)\n\n- [X] T097 [US1] [F4] Implement the `grid-moves` scene (modes move, route, paint, place; <=3x3 at P, <=5x5 at K) in `app/apps/web/src/activity-engine/scenes/GridMovesScene.tsx`; answer = `U D L R` move list or painted cell ids; validate by simulation in the plugin; tests incl. wrong-move explanation, reduced motion, aria. Dependents: #19,57,86,90 and new #58.\n- [X] T098 [P] [US1] [#19] REDESIGN `preschool-where-is-the-ball` (PK.POS.1) per `specs/docs/activity-sweep/briefs/preschool-where-is-the-ball.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/where-is-the-ball.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T099 [P] [US1] [#57] REDESIGN `preschool-robot-says` (PK.POS.2) per `specs/docs/activity-sweep/briefs/preschool-robot-says.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/robot-says.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T100 [P] [US1] [#86] REDESIGN `preschool-copy-build` (K.POS.3) per `specs/docs/activity-sweep/briefs/preschool-copy-build.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/copy-build.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T101 [P] [US1] [#90] REDESIGN `preschool-routes` (K.POS.2) per `specs/docs/activity-sweep/briefs/preschool-routes.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/routes.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T102 [US1] [F4] Group gate: `scripts/validate.ps1 -Repo all` is `ALL PASS`; set the Spec column to 051 in `specs/docs/activity-sweep/tracker.md` for this group's rows; write one blog post for the group in `blog/` (specs -> app -> blog rule)\n\n### Group F5: measure-compare scene (5 activities)\n\n- [X] T103 [US1] [F5] Implement the `measure-compare` scene (kinds length, capacity, weight, duration, tool; reveals align, pour, tip, race, apply) in `app/apps/web/src/activity-engine/scenes/MeasureCompareScene.tsx` using `art/`; answer = option id a/b/same; no-animation path under reduced motion that preserves the learning goal; tests. Dependents: #13,16,20,68,70.\n- [X] T104 [P] [US1] [#13] REDESIGN `preschool-longer-or-shorter` (PK.MEA.2) per `specs/docs/activity-sweep/briefs/preschool-longer-or-shorter.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/longer-or-shorter.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T105 [P] [US1] [#16] REDESIGN `preschool-holds-more` (PK.MEA.2) per `specs/docs/activity-sweep/briefs/preschool-holds-more.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/holds-more.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T106 [P] [US1] [#20] TWEAK `preschool-heavy-or-light` (PK.MEA.2, PK.MEA.1) per `specs/docs/activity-sweep/briefs/preschool-heavy-or-light.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/heavy-or-light.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T107 [P] [US1] [#68] REDESIGN `preschool-how-long` (K.TIM.3) per `specs/docs/activity-sweep/briefs/preschool-how-long.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/how-long.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T108 [P] [US1] [#70] REDESIGN `preschool-measuring-tools` (K.MEA.2) per `specs/docs/activity-sweep/briefs/preschool-measuring-tools.md`: rebuild its bank in `subjects/mathematics/packages/syllabus-content-p/src/banks/` (plugin wired in `src/content.ts`) with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; add `subjects/mathematics/packages/syllabus-content-p/tests/measuring-tools.test.ts` (behaviour, level ladder, en/fr parity, competency rows reachable)\n- [X] T109 [US1] [F5] Group gate: `scripts/validate.ps1 -Repo all` is `ALL PASS`; set the Spec column to 051 in `specs/docs/activity-sweep/tracker.md` for this group's rows; write one blog post for the group in `blog/` (specs -> app -> blog rule)\n\n**Checkpoint**: all 85 existing activities redesigned; each group shippable on its own.\n\n---\n\n## Phase 4: User Story 2 - Wrong answers teach, right answers celebrate (Priority: P1)\n\n**Goal**: every documented misconception shows its specific message with retry; correct answers celebrate. Per-activity feedback lives in Phase 3 tasks; this phase verifies it across the feature.\n\n**Independent Test**: for one activity trigger each documented misconception and confirm the matching feedback and no dead end.\n\n- [X] T110 [P] [US2] Cross-feature test in `app/apps/web/src/activity-engine/` asserting, for every new scene, that each misconception kind renders `scene.<type>.<kind>` / `<pluginId>.<kind>`, leaves the scene retryable, escalates to a reveal after repeated misses, and that a correct answer sets `data-outcome=\"correct\"`\n\n---\n\n## Phase 5: User Story 3 - French-speaking children get the same experience (Priority: P1)\n\n**Goal**: every prompt, feedback, label, aria text and caption exists in en and fr.\n\n**Independent Test**: switch to fr on any redesigned activity; no missing-key fallback, no clipped text.\n\n- [X] T111 [P] [US3] Add a repo-wide key-parity test in `app/apps/web/src/i18n/` covering all `scene.<type>.*` and `<pluginId>.*` keys added by this feature (en and fr both present and non-empty) and verify French strings wrap/grow rather than clip in `app/apps/web/src/activity-engine/activityEngine.css`\n\n---\n\n## Phase 6: User Story 4 - Accessible, calm play (Priority: P2)\n\n**Goal**: >=44px targets, one primary action, AA contrast, screen-reader labels, reduced-motion alternatives.\n\n**Independent Test**: reduced motion on plus a screen reader: complete one activity; timed/animated steps have a usable alternative.\n\n- [X] T112 [P] [US4] Cross-scene a11y test in `app/apps/web/src/activity-engine/` for all 5 new and 3 extended scenes: every interactive node has an accessible name and the >=44px target class, one primary action, `role=\"group\"` with text-form `aria-label`, and with `reducedMotion` the scene reaches its end state without timers (flash-dots, still-the-same, holds-more included)\n- [X] T113 [P] [US4] Automated AA contrast test for new scene colours/tokens in `app/apps/web/src/activity-engine/activityEngine.css` and `art/`\n\n---\n\n## Phase 7: User Story 5 - Enough range and variety (Priority: P2)\n\n**Goal**: 3-5 levels, >=4 seeded variants per level, every competency row reachable, no `Math.random()`.\n\n**Independent Test**: play each level of one activity; each has >=4 distinct deterministic variants.\n\n- [X] T114 [P] [US5] Extend `subjects/mathematics/packages/syllabus-content-p/tests/banks.test.ts` and the coverage test so all 90 listed pluginIds (85 + 5 new) are asserted for: 3-5 levels (P rows may use fewer if the brief says so), >=4 distinct variants per level, determinism for repeated `(grade, seed)`, claimed competency rows reachable, and no `Math.random` in any bank or scene\n- [X] T115 [P] [US5] Saved-progress test (R9) in `subjects/mathematics/packages/syllabus-content-p/tests/`: pluginIds and competency ids of the 85 existing activities are unchanged so mastery records stay valid\n\n---\n\n## Phase 8: User Story 6 - New activities fill uncovered competency rows (Priority: P3)\n\n**Goal**: five new activities cover K.NUM.8, K.GEO.3, PK.TIM.2, PK.DAT.1, PK.POS.2.\n\n**Independent Test**: each new activity is discoverable in its grade and passes the Phase 3 bar for its target rows.\n\n**Depends on**: the scene task of the group named on each task. Per R7, write the brief from the tracker row first.\n\n- [X] T116 [P] [US6] [#33] ADD new `trace-the-numeral` (K.NUM.8, needs scene group F3): first write its brief to `specs/docs/activity-sweep/briefs/trace-the-numeral.md` from the tracker row in `specs/docs/activity-sweep/tracker.md`; then create the plugin in `subjects/mathematics/packages/syllabus-content-p/src/banks/` registered beside the existing `preschool-*` plugins in `src/content.ts` with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; tests in `subjects/mathematics/packages/syllabus-content-p/tests/trace-the-numeral.test.ts` incl. registry presence and `syllabus-coverage` for the target row\n- [X] T117 [P] [US6] [#47] ADD new `corners-and-curves` (K.GEO.3, needs scene group F3): first write its brief to `specs/docs/activity-sweep/briefs/corners-and-curves.md` from the tracker row in `specs/docs/activity-sweep/tracker.md`; then create the plugin in `subjects/mathematics/packages/syllabus-content-p/src/banks/` registered beside the existing `preschool-*` plugins in `src/content.ts` with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; tests in `subjects/mathematics/packages/syllabus-content-p/tests/corners-and-curves.test.ts` incl. registry presence and `syllabus-coverage` for the target row\n- [X] T118 [P] [US6] [#53] ADD new `before-now-later` (PK.TIM.2, needs scene group F2): first write its brief to `specs/docs/activity-sweep/briefs/before-now-later.md` from the tracker row in `specs/docs/activity-sweep/tracker.md`; then create the plugin in `subjects/mathematics/packages/syllabus-content-p/src/banks/` registered beside the existing `preschool-*` plugins in `src/content.ts` with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; tests in `subjects/mathematics/packages/syllabus-content-p/tests/before-now-later.test.ts` incl. registry presence and `syllabus-coverage` for the target row\n- [X] T119 [P] [US6] [#55] ADD new `preschool-sort-into-bins` (PK.DAT.1, needs scene group F1): first write its brief to `specs/docs/activity-sweep/briefs/preschool-sort-into-bins.md` from the tracker row in `specs/docs/activity-sweep/tracker.md`; then create the plugin in `subjects/mathematics/packages/syllabus-content-p/src/banks/` registered beside the existing `preschool-*` plugins in `src/content.ts` with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; tests in `subjects/mathematics/packages/syllabus-content-p/tests/preschool-sort-into-bins.test.ts` incl. registry presence and `syllabus-coverage` for the target row\n- [X] T120 [P] [US6] [#58] ADD new `robot-grid-moves` (PK.POS.2, needs scene group F4): first write its brief to `specs/docs/activity-sweep/briefs/robot-grid-moves.md` from the tracker row in `specs/docs/activity-sweep/tracker.md`; then create the plugin in `subjects/mathematics/packages/syllabus-content-p/src/banks/` registered beside the existing `preschool-*` plugins in `src/content.ts` with 3-5 levels, >=4 seeded variants per level, en+fr strings in `app/apps/web/src/i18n/strings.ts`, misconception feedback, reduced-motion fallback; tests in `subjects/mathematics/packages/syllabus-content-p/tests/robot-grid-moves.test.ts` incl. registry presence and `syllabus-coverage` for the target row\n\n---\n\n## Phase 9: Polish & Cross-Cutting Concerns\n\n- [X] T121 Set the Spec column to 051 for all 90 rows in `specs/docs/activity-sweep/tracker.md` and mark the 5 NEW rows as created\n- [X] T122 [P] Finish the blog write-ups in `blog/` (one per delivered group; canonical rule in `blog/CLAUDE.md`) and update any affected `specs/docs/` feature docs\n- [X] T123 Run the quickstart.md per-group checklist end to end; final `scripts/validate.ps1 -Repo all` must read `ALL PASS`\n- [X] T124 Verify the completion rule: spec.md, implementation in `app` + `subjects/mathematics`, and blog write-up all exist (no `/speckit-*` skill checks the blog step)\n\n---\n\n## Dependencies & Execution Order\n\n- Phase 1 -> Phase 2 (F0) -> everything else.\n- Each group (F7, F1, F6, F2, F3, F4, F5) starts with its scene task; its activity tasks depend only on that task and are mutually parallel. Order: F7 -> F1 -> F6 -> F2 -> F3 -> F4 -> F5.\n- Phases 4-7 (US2-US5) cross-cutting tests can run incrementally as groups land, and a final time after all groups.\n- Phase 8 (US6): the new activity in each group needs that group's scene task: #33, #47 need F3; #53 needs F2; #55 needs F1; #58 needs F4.\n- Phase 9 last.\n\n## Parallel Example\n\n```text\nAfter the F7 scene task: launch all 24 F7 activity tasks together; each has its own bank/test file.\nShared files (content.ts, strings.ts, types.ts) need merge care: land strings per activity in separate commits.\nAfter F0: the F1 and F2 scene tasks touch different files and can proceed in parallel.\n```\n\n## Implementation Strategy\n\n- **MVP**: Phase 1 + Phase 2 + Group F7 (24 activities, mostly existing scenes, lowest risk). Validate, ship, blog.\n- **Incremental**: one group per chat via the `implement-feature-group` skill; each group ends in green `validate.ps1 -Repo all`, a tracker update and a blog post.\n- **Finish**: US6 new activities, cross-cutting US2-US5 tests, polish.\n\n## Notes\n\n- 90 activity work items: 85 existing (under their group) + 5 new (Phase 8).\n- Briefs, not this file, hold per-activity levels, variants and strings.\n- [P] means different bank/test files; sequence edits to shared files.\n",L='# Tasks: Detailed syllabus migration (K–G6)\n\n**Input**: `specs/057-detailed-syllabus-migration/` (plan, spec, research, data-model, contracts, quickstart)\n\n**Repos**: `S` = `c:\\Dev\\learnCoreSkills\\subjects\\mathematics`, `A` = `c:\\Dev\\learnCoreSkills\\app`, `D` = `c:\\Dev\\learnCoreSkills\\specs`.\n\n**Rules**: work on `main`; no dev server or GUI validation (constitution) — validate with `scripts/validate.ps1`; every string ships en + fr; each phase below is one `implement-feature-group` run and ends green.\n\n## Format: `[ID] [P?] [Story] Description`\n\n## Phase 1: Setup\n\n- [X] T001 [D] Confirm `docs/syllabus-detailed/` is the frozen source (`docs/syllabus-detailed/README.md` counts: 804 skills, 417 built, 1,227 planned) and note the commit it was generated at in `specs/057-detailed-syllabus-migration/research.md`.\n- [X] T002 [S] Create `src/syllabus/` and `scripts/` skeleton in `S`; add npm scripts `syllabus:extract` and `syllabus:check` to `S/package.json`.\n- [X] T003 [P] [S] Write `S/scripts/extractSyllabus.ts`: parse the skill tables of `D/docs/syllabus-detailed/{K,G1..G6}.md` (columns ID · Topic · Skill · masters · reference rows · activities; legend `✔ id (DECISION) [app gN]`, `＋ slug — idea`, `↺ id`, labels "(introduce-only)/(explore)/bridge") into `S/src/syllabus/syllabus.generated.json` per `contracts/syllabus-dataset.md`. Deterministic output, sorted keys, no timestamps.\n- [X] T004 [P] [S] Write unit tests for the parser on a fixture of 3 rows covering ✔/＋/↺, a label, and a skill with a removed-ID gap in `S/tests/extractSyllabus.test.ts`.\n\n## Phase 2: Foundational (blocks all stories)\n\n- [X] T005 [S] Run the extractor; commit `S/src/syllabus/syllabus.generated.json`. Expected: 7 levels, 16 topics, 804 skills; regenerating twice yields no diff.\n- [X] T006 [S] Resolve activity ids: write `S/scripts/resolveActivityIds.ts` to match every `✔` syllabus id to an exercise key in `S/src/exerciseDefinitions.ts` / `pluginRegistry.ts`; emit `S/src/syllabus/activityIds.ts` and a report `S/src/syllabus/unresolved.md`. For each unresolved id: map it by hand if a registry entry exists, otherwise mark the link `planned` and list it for the owner (research R8).\n- [X] T007 [S] Write `S/scripts/checkSyllabus.ts` + `S/tests/syllabus.test.ts` enforcing the data-model validation rules verbatim: 804 skills · 16 topics · 7 levels · each skill has 2–3 activities · each built activity primary exactly once · titles ≤ 60 chars · en/fr non-empty (fr may be empty only until Phase 3, behind a `--allow-missing-fr` flag) · reference rows exist in `D/docs/product/MATH-COMPETENCY-REFERENCE.md` and none retired (G5.MON.3) · ids unique · prerequisites never point to a later level.\n- [X] T008 [A] Extend `Competency.targetGrade` to `"K" | 1..6` in `A/packages/core/competency-model/src/types.ts`; update its validation and tests; then run `S/scripts/refresh-vendor.mjs` and rebuild the vendored tarballs.\n- [X] T009 [D] Run `scripts/validate.ps1 -Repo all -Quick`; fix only breakage caused by T002–T008.\n\n**Checkpoint**: dataset (English), id resolution, gate and type ready.\n\n## Phase 3: User Story 1 — Browse the new syllabus (P1) 🎯 MVP\n\n**Goal**: K–G6, 16 topics, 804 skills with title + description in en and fr.\n**Independent test**: open each level in both languages; every skill of the syllabus files is present; no P/G1–G5 legacy rows remain.\n\n- [X] T010 [P] [US1] Author French for level K in `S/src/syllabus/fr/K.json`: `title` (≤ 60), `description`, planned `idea`, for every K skill id (83). Kid-friendly register, same terms across levels (glossary in `S/src/syllabus/fr/GLOSSARY.md`).\n- [X] T011 [P] [US1] French for G1 → `S/src/syllabus/fr/G1.json` (108 skills).\n- [X] T012 [P] [US1] French for G2 → `fr/G2.json` (120).\n- [X] T013 [P] [US1] French for G3 → `fr/G3.json` (138).\n- [X] T014 [P] [US1] French for G4 → `fr/G4.json` (123).\n- [X] T015 [P] [US1] French for G5 → `fr/G5.json` (132).\n- [X] T016 [P] [US1] French for G6 → `fr/G6.json` (100).\n- [X] T017 [P] [US1] French + English level intros and the 16 topic names/descriptions → `S/src/syllabus/meta.json` (replaces the 14-topic `MATH_TOPICS` text).\n- [X] T018 [US1] Merge the French files into the exported object in `S/src/syllabus/index.ts` (typed accessors per `contracts/syllabus-dataset.md`); remove `--allow-missing-fr`; the gate now fails on any missing fr string. Export `syllabus` from `S/src/index.ts`.\n- [X] T019 [US1] Reduce `S/src/skillsReference.ts` and `S/src/skillsTitles.ts` to adapters computed from `syllabus` (one release of compatibility); update `S/tests/skillsReference.test.ts` to the K,G1–G6 tiers.\n- [X] T020 [P] [US1] Replace hard-coded tiers with K,G1–G6: `A/apps/web/src/domain/curriculum/skillsFrameworkSkills.ts` (`SkillsFrameworkTier`, labels), `subjectSyllabus.ts` (`tierUrlSegment`), `components/nav/AppNav.tsx`, `seo/pageMetadata.ts`, `seo/routes.ts`, `seo/seedTopicsForTests.ts`.\n- [X] T021 [P] [US1] Replace `MATH_TOPICS` (14) with the 16 topics read from `syllabus.topics` in `A/apps/web/src/domain/curriculum/topics.ts`; topic lookup by skill id instead of `topicIdForReferenceId`; omit empty topics per level.\n- [X] T022 [US1] Render the syllabus from `syllabus` in `A/apps/web/src/components/SyllabusView.tsx` and `subjectSyllabus.ts` (`buildMathematicsSyllabusGrade`): levels → topics → skills with title, description, non-gating label; add level/topic chrome strings en+fr in `A/apps/web/src/i18n/contentStrings.ts`.\n- [X] T023 [US1] URLs and redirects in `A/apps/web/src/domain/curriculum/subjectPaths.ts`: skill slug `g3-op-1` + readable suffix, levels `k` and `g6`; generate the old-path → new-path redirect table (`p`, old row slugs) into `A/apps/web/src/domain/curriculum/legacyRedirects.ts`; prerender list (`content/loadMathExercisesForPrerender.ts`) uses the dataset.\n- [X] T024 [US1] App tests: K and G6 routes exist, 16 topics, empty topic hidden (Chance at K), French has no English text, long French description does not overflow (snapshot of the row class), legacy `/mathematics/p/...` redirects to K — in `A/apps/web/src/**/__tests__/`.\n- [ ] T025 [US1] `scripts/validate.ps1 -Repo all` → `ALL PASS`.\n\n**Checkpoint**: US1 independently shippable (new syllabus visible; progress still on legacy competencies until Phase 5).\n\n## Phase 4: User Story 2 — Activities, built and planned (P1)\n\n**Goal**: each skill shows its 2–3 activities; planned ones are greyed and inert.\n**Independent test**: sample one skill per topic and level; built opens, planned is inert, shared activity opens the same page.\n\n- [X] T026 [US2] Activity list per skill in `SyllabusView.tsx`: built links open the existing activity route; role `reuse` shows a "also in …" hint; sweep decision shown only as a small tag when TWEAK/REDESIGN.\n- [X] T027 [US2] Planned entries: greyed, `aria-disabled`, "coming soon" + the `idea` in the current language, no action, keyboard-skippable; strings en+fr in `contentStrings.ts`.\n- [X] T028 [US2] A skill with no built activity shows the "coming soon" state, never an empty list; reuse never double-counts an activity in any total (`subjectSyllabus.ts`).\n- [X] T029 [US2] Tests: built opens, planned inert (no link/role), reuse is one id, skill with only planned shows coming soon, French idea shown in fr — `A/apps/web/src/**/__tests__/`.\n- [X] T030 [US2] `scripts/validate.ps1 -Repo all` → `ALL PASS`.\n\n## Phase 5: User Story 3 — Progress follows the new skills (P1)\n\n**Goal**: no progress lost; scores, report cards, suggestions work over skills.\n**Independent test**: import a pre-migration profile; every mastered activity credits ≥ 1 skill; totals otherwise unchanged.\n\n- [ ] T031 [S] Generate competencies from skills: new `S/scripts/generateCompetencies.ts` writes `S/packages/syllabus-content-{k,g1..g6}/src/competencies.ts` (`id` = `math.skill.<id>`, `targetGrade`, `frameworkSkillId` = skill id, `scoreInputs` = built `exerciseKey`s, `prerequisiteIds` from syllabus order within a topic plus existing hard prerequisites, same-or-earlier level only); rename package `p` → `k`, add `g6`; wire into `S/src/curriculum.ts`; keep the ~56 legacy competencies only if the alias map needs them.\n- [ ] T032 [S] Generate `S/src/syllabus/aliasMap.ts` per `contracts/progress-alias-map.md` (old competency id → skill competency ids, total over the old P–G5 packages and legacy entries) and a review report for ids with no skill home; test: any unmapped old id fails — `S/tests/aliasMap.test.ts`.\n- [ ] T033 [A] Apply the map when computing scores/mastery (`A/apps/web/src/storage/masterySignals.ts` and the progress-store score reads): old-id rows credit each mapped skill, new-id rows pass through; IndexedDB `DATABASE_VERSION` stays 1.\n- [ ] T034 [A] Child-export `schemaVersion` 4→5 step in `A/packages/core/child-export/src/migrations.ts` rewriting `competencyId` through the map (activityKey untouched), idempotent; fixture test with a pre-migration export.\n- [ ] T035 [A] Report card, "next up" and prerequisite checks read skill scores; skills with only planned activities show "no activities yet" and never block (FR-011); introduce-only / bridge labels never gate — `A/apps/web/src/...` (find via `grep -r prerequisiteIds`).\n- [ ] T036 [A] SC-003 test: representative profile fixtures (preschool-only, G3 mid-way, mixed) assert each mastered activity credits ≥ 1 skill, no invented mastery.\n- [ ] T037 [D] `scripts/validate.ps1 -Repo all` → `ALL PASS`.\n\n## Phase 6: User Story 4 — Placement matches the syllabus (P2)\n\n**Goal**: activities appear under the level the syllabus gives them.\n\n- [ ] T038 [US4] Show activities by their skill\'s level, not their original app grade, in the app\'s practice/activity lists (`SubjectPracticePage.tsx` and the grade filters); keep the `regrade` value only as metadata.\n- [ ] T039 [US4] Tests: every activity carrying `regrade` appears under its new level and not the old one, except explicit reuse — `A/apps/web/src/**/__tests__/`.\n- [ ] T040 [US4] `scripts/validate.ps1 -Repo all` → `ALL PASS`.\n\n## Phase 7: Polish and completion\n\n- [x] T041 [D] Amend `D/.specify/memory/constitution.md` (MINOR): Principle III and Product Constraints name tiers K and G6 (non-gating bridge) instead of "P" and Grades 1–5; update the Sync Impact Report.\n- [ ] T042 [S] Remove the compatibility adapters if no consumer remains; run `S` build, repack tarball; `A/scripts/build.ps1`; confirm prerender and manifest include the dataset.\n- [ ] T043 [D] Mark `docs/syllabus/` as superseded by `docs/syllabus-detailed/` in both READMEs; point `docs/product/CURRICULUM.md` at it; ask `syllabus-research` to rewrite `MATH-COMPETENCY-REFERENCE.md` from the dataset (separate run).\n- [ ] T044 [D] Blog write-up in `../blog` (what shipped, numbers: 804 skills / 16 topics / 7 levels, planned-activity roadmap) per `blog/CLAUDE.md`; verify spec → app → blog all exist before reporting done.\n- [ ] T045 [D] Final `scripts/validate.ps1 -Repo all -Build` → `ALL PASS`; walk `quickstart.md` steps 1–5; owner performs step 6 manually.\n\n## Dependencies\n\nSetup → Foundational → **US1** → US2 → US3 → US4 → Polish. French authoring (T010–T017) can run in parallel with the app work T020–T023 (the gate allows missing fr until T018). US3 depends on T008 and T031; US2 depends on US1\'s rendering.\n\n## Parallel examples\n\n- T003 ∥ T004. T010–T017 all parallel (eight files). T020 ∥ T021.\n- Within US3: T031 → T032, then T033 ∥ T034.\n\n## Implementation strategy\n\n- **MVP** = Phases 1–3 (new syllabus visible, bilingual). Ship, then Phase 4–5; Phase 5 is the riskiest and gets the fixtures first.\n- One phase per fresh chat via `implement-feature-group`; commit on `main` after each green phase.\n',R='# Tasks: AdSense Compliance\n\n**Input**: Design documents from `specs/058-adsense-compliance/` (plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md)\n\n**Prerequisites**: plan.md, spec.md. Tests are included: the contracts require Vitest coverage (contracts/ad-eligibility.md §5, live-site-checks.md build guards).\n\n**Organization**: Grouped by user story. Paths are relative to `c:\\Dev\\learnCoreSkills\\` (repos: `app`, `blog`, `subjects/mathematics`, `specs`). Work lands on `main` (no branches). Every new user-facing string ships in en + fr together (FR-024). Validate with `scripts/validate.ps1 -Repo <repo>`; read only the last line.\n\n## Format: `[ID] [P?] [Story] Description`\n\n- **[P]**: parallelizable (different files, no dependency on an incomplete task)\n- **[Story]**: US0..US5 from spec.md\n\n---\n\n## Phase 1: Setup\n\n- [X] T001 Inspect the uncommitted first-pass changes in the app working tree (`git -C app status` / `git -C app diff`) and note which files (`apps/web/src/components/AdSquareCard.tsx`, `apps/web/index.html`, blog/list/parent screens) must be corrected rather than replaced; record findings in `specs/specs/058-adsense-compliance/research.md` §"Working-tree state" (append, do not rewrite).\n- [X] T002 [P] Delete the stray duplicate `app/apps/web/Ads.txt`; keep only `app/apps/web/public/ads.txt` containing `google.com, pub-…, DIRECT, f08c47fec0942fa0` (FR-022).\n- [X] T003 [P] Re-verify against Google\'s current AdSense help pages that `data-tag-for-age-treatment="1"` (TFAT) is the documented child-treatment attribute and TFCD is deprecated (plan Decision 2); record the source URL and date in `specs/specs/058-adsense-compliance/research.md` §7. If Google\'s guidance has changed, stop and report before US3.\n\n---\n\n## Phase 2: Foundational (blocks all stories)\n\n**⚠️ No user story starts until this phase is done.**\n\n- [X] T004 Create `app/apps/web/src/config/siteConfig.ts` exporting a typed `siteConfig` with `adsEnabled` (boolean kill-switch), `publisherName: "learnCoreSkills"`, `region: "__REGION__"`, `contactEmail: "__CONTACT_EMAIL__"`, `donationUrl: ""` (empty ⇒ banner hidden), `adClient`, `adSlot` (move the existing ids from `AdSquareCard.tsx`). Document each placeholder as an owner TODO (Q2, Q4).\n- [X] T005 [P] Create `app/apps/web/scripts/checkProductionConfig.ts` that exits non-zero in production builds when `region` or `contactEmail` still equals its placeholder, or when `adsEnabled` is true and `adClient` is unset; wire it into the app\'s production build script in `app/apps/web/package.json` (contracts/live-site-checks.md "Build guards").\n- [X] T006 [P] Add Vitest for `checkProductionConfig` in `app/apps/web/scripts/checkProductionConfig.test.ts` (placeholder region fails, real values pass, `adsEnabled` with unset `adClient` fails, empty `donationUrl` passes).\n- [X] T007 [P] Add the shared en + fr i18n keys needed by later stories in `app/apps/web/src/i18n/` (ad label `adCard.label` "Advertisement"/"Publicité", footer labels Privacy/About/Contact, consent re-open link, house banner text + dismiss, "available in the other language" notice, article/news section headings, author line).\n\n**Checkpoint**: config + guards + strings exist.\n\n---\n\n## Phase 3: User Story 0 — Production actually serves the content (P0, blocker)\n\n**Goal**: Live blog/docs/subjects indexes and articles load; sitemap lists articles; the build refuses a zero-article sitemap.\n\n**Independent Test**: `node app/apps/web/scripts/smokeLive.mjs https://learncoreskills.com` passes C1 (and later C2/C3).\n\n- [X] T008 [US0] Diagnose why `learncoreskills/distrib` `blog/` holds only the app\'s prerendered `index.html` (no `index.json`, no post markdown): inspect `blog/.github/workflows/*`, `app/.github/workflows/ci-cd.yml` (publish step, `destination_dir`, `keep_files`, token secrets) and distrib commit history. Write the confirmed root cause into `specs/specs/058-adsense-compliance/research.md` (plan risk R5). Do not assume.\n- [X] T009 [US0] Fix the publish path per T008 so the blog workflow publishes `index.json` + markdown to `distrib/blog/`, and the docs and subjects (`subjects/mathematics`) publish `docs/index.json` and `subjects/index.json` correctly; ensure the app deploy does not overwrite those folders (edit the relevant workflow files under `blog/.github/workflows/`, `app/.github/workflows/ci-cd.yml`, `subjects/mathematics/.github/workflows/`).\n- [X] T010 [P] [US0] Create `app/apps/web/scripts/smokeLive.mjs` implementing checks C1–C7 from contracts/live-site-checks.md: prints `PASS|FAIL <id> <detail>` per check, final `ALL PASS` or `FAIL: <id>`, accepts `[baseUrl]`, retries up to ~5 min for Pages propagation. Implement C1 first; C2–C7 fully per contract (they will fail until later stories ship, which is expected).\n- [X] T011 [P] [US0] Add Vitest for the pure helpers of `smokeLive.mjs` (word count of raw HTML text, sitemap URL extraction, ads.txt comparison) in `app/apps/web/scripts/smokeLive.test.ts`.\n- [X] T012 [US0] Add a zero-article guard to `app/apps/web/scripts/prerender.ts`: the app build reads the published blog index + markdown from `learncoreskills/distrib` (public, no token, plan Decision 5) and fails when either language has zero published articles (FR-002); log article counts per language.\n- [X] T013 [P] [US0] Add Vitest for the zero-article guard (empty index fails, index with articles passes, unreachable index fails) in `app/apps/web/scripts/prerender.test.ts`.\n- [ ] T014 [US0] In `app/.github/workflows/ci-cd.yml` add `workflow_dispatch` and a post-deploy step running `node apps/web/scripts/smokeLive.mjs` (fail the job on non-zero); in the blog workflow add a final step that triggers the app workflow via `workflow_dispatch` after publishing (plan Decision 5, Complexity Tracking). Same post-deploy check for the subjects/docs publish workflows.\n\n**Checkpoint**: live C1 passes after redeploy; builds can\'t ship empty sitemaps.\n\n---\n\n## Phase 4: User Story 1 — Credible, transparent site (P1)\n\n**Goal**: Privacy, About, Contact in en + fr, footer on every page including 404, text present without scripts.\n\n**Independent Test**: From home, article, activity, parent area and 404, footer links reach all three pages in both languages with full text; smokeLive C7 passes.\n\n- [X] T015 [P] [US1] Write `app/apps/web/src/content/legal/en/privacy.md` covering FR-004: data stored on device vs accounts, every third party (advertising, analytics/GTM, fonts, hosting), cookies/identifiers and how to refuse, ads non-personalised and limited to parent-facing articles and syllabus/list screens, children\'s data handling and Quebec/EEA notes, retention, deletion requests. Use `{{region}}` and `{{contactEmail}}` placeholders from `siteConfig`.\n- [X] T016 [P] [US1] Write `app/apps/web/src/content/legal/fr/privacy.md` as a native French equivalent (not a literal translation), same coverage and placeholders.\n- [X] T017 [P] [US1] Write `app/apps/web/src/content/legal/en/about.md` (who runs the site = `learnCoreSkills` + `{{region}}`, purpose, educational approach, how articles are written and AI-assisted-then-owner-reviewed — FR-006) and `app/apps/web/src/content/legal/fr/about.md` (native French).\n- [X] T018 [P] [US1] Write `app/apps/web/src/content/legal/en/contact.md` and `app/apps/web/src/content/legal/fr/contact.md` giving `{{contactEmail}}` as the working contact method (FR-005; do not publish the AdSense account email).\n- [X] T019 [US1] Create a legal-content loader `app/apps/web/src/content/loadLegal.ts` that imports the six markdown files at build time and resolves `{{region}}`/`{{contactEmail}}` from `siteConfig`; add `app/apps/web/src/content/loadLegal.test.ts` (placeholders resolved, both languages present, unknown page rejected).\n- [X] T020 [US1] Create `app/apps/web/src/components/LegalPage.tsx` rendering a legal page for the current language, and register routes `/<lang>/privacy`, `/<lang>/about`, `/<lang>/contact` in `app/apps/web/src/seo/routes.ts` (route kind `legal`) and the app router.\n- [X] T021 [US1] Create `app/apps/web/src/components/SiteFooter.tsx` (links to Privacy/About/Contact in the current language; consent re-open link slot added in US4) and mount it on every route layout including the 404 page and activity/parent layouts.\n- [X] T022 [P] [US1] Add component tests in `app/apps/web/src/components/SiteFooter.test.tsx` and `LegalPage.test.tsx` (footer present on home/article/activity/parent/404 in en and fr; legal page renders full text).\n- [X] T023 [US1] Extend `app/apps/web/scripts/prerender.ts` / `prerenderEntry.ts` so legal pages (and the footer on all routes) are written into the root container of the prerendered HTML with full body text (plan Decision 7, FR-021); add legal pages to the sitemap in `app/apps/web/src/seo/sitemap.ts`.\n\n**Checkpoint**: US1 fully testable without articles or ads.\n\n---\n\n## Phase 5: User Story 2 — Every ad-eligible page has real publisher content (P1)\n\n**Goal**: ≥ 12 reviewed articles (800+ readable words) per language, language-correct routes, news separated from articles.\n\n**Independent Test**: Article index lists ≥ 12 articles per language; each ≥ 800 words; no English text under `/fr/`; blog `validate.ps1` passes.\n\n### Infrastructure\n\n- [X] T024 [US2] Update `blog/scripts/buildIndex.ts` to parse front-matter (`title`, `summary`, `kind`, `lang`, `slug`, `grade`, `topics`, `reviewed`, `reviewedBy`, `reviewedOn`) and emit `slug`, `lang`, `kind`, `grade`, `topics`, `words`, `reviewed` in each `index.json` entry (additive, contracts/article-and-index.md §2). `id` = `<date>-<slug>.<lang>`.\n- [X] T025 [US2] Implement the data-model validation in `blog/scripts/buildIndex.ts`: `article` requires `lang`, `grade`, `title`, `summary`, `reviewed: true`; `words` ≥ 800 (warn 300–799, error < 300); `id` unique; same-`slug` counterparts differ in `lang`; reject placeholder markers (`TODO`, `lorem`, `[…]`). Use the same `readableWordCount` as the app (T030) — copy or share it, and keep a parity test.\n- [X] T026 [P] [US2] Add Vitest for index building and validation in `blog/scripts/buildIndex.test.ts` (each rule: missing lang, words 299/300/799/800, duplicate id, same-language counterpart, placeholder text, unreviewed article excluded).\n- [X] T027 [US2] Rename the 13 existing diary posts in `blog/` to `<date>-<slug>.en.md` and add front-matter `kind: news`, `lang: en`, `slug`; label them as project news and keep them out of the article count (FR-010).\n- [X] T028 [US2] Update `app/apps/web/src/content/loadBlog.ts` to read the new fields, filter by language, split articles vs news, and expose `counterpart(entry)` (other-language entry with the same `slug`); add `loadBlog.test.ts` cases.\n- [X] T029 [US2] Update blog routes/SEO in `app/apps/web/src/seo/routes.ts`, `sitemap.ts`, `pageMetadata.ts` per contracts/article-and-index.md §3: `/<lang>/blog/<id>` only for entries of that language; hreflang only between true counterparts + `x-default` = English; `inLanguage` from the entry\'s `lang`; sitemap lists reviewed articles in their own language; old diary URLs: English ones redirect (prerendered meta refresh + canonical) to the new id, French ones show the language-notice view and are dropped from the sitemap.\n- [X] T030 [P] [US2] Add Vitest for the language-correct routes, hreflang pairs, redirects and sitemap membership in `app/apps/web/src/seo/blogRoutes.test.ts`.\n- [X] T031 [US2] Split the blog index UI into "Articles" and "Project news" sections in `app/apps/web/src/components/docs/` (blog index page), show grade band, date and author line on article pages, and show the "Available in <language>" notice with a link when no counterpart exists; add component tests.\n\n### Articles (each task = one EN article + its native FR article, ≥ 800 readable words each, grade band stated, links to in-app activities, front-matter per contract with `reviewed: false` until the owner signs off; source of truth is `docs/product/MATH-COMPETENCY-REFERENCE.md`; new files `blog/<date>-<slug>.en.md` and `blog/<date>-<slug>.fr.md`)\n\n- [X] T032 [P] [US2] Article pair 1: "Real counting vs reciting numbers: what to look for before school" — PK–K, topic NUM, slug `real-counting`.\n- [X] T033 [P] [US2] Article pair 2: "Seeing \'five\' at a glance: why subitising matters" — PK–K, NUM, slug `subitising`.\n- [X] T034 [P] [US2] Article pair 3: "Number bonds to 10 and 20 with everyday objects" — K–G1, AS, slug `number-bonds`.\n- [X] T035 [P] [US2] Article pair 4: "Why 34 is not \'3 and 4\': helping children understand place value" — G1–G2, PV, slug `place-value`.\n- [X] T036 [P] [US2] Article pair 5: "Beyond finger counting: mental addition and subtraction strategies" — G1–G3, MM/AS, slug `mental-strategies`.\n- [X] T037 [P] [US2] Article pair 6: "Times tables: memorising and understanding, in that order?" — G2–G4, MD, slug `times-tables`.\n- [X] T038 [P] [US2] Article pair 7: "Fractions start with fair sharing" — G1–G3, FR, slug `fair-sharing-fractions`.\n- [X] T039 [P] [US2] Article pair 8: "Comparing fractions without a rule to memorise" — G3–G5, FR, slug `comparing-fractions`.\n- [X] T040 [P] [US2] Article pair 9: "Telling the time on an analogue clock, step by step" — G1–G3, TIM, slug `analogue-clock`.\n- [X] T041 [P] [US2] Article pair 10: "Coins, change and shopping maths at home" — G1–G4, MON, slug `money-at-home`.\n- [X] T042 [P] [US2] Article pair 11: "Measuring in the kitchen and the garden" — K–G3, MEA, slug `measuring-at-home`.\n- [X] T043 [P] [US2] Article pair 12: "Shapes, position and direction words for young children" — PK–G2, GEO/POS, slug `shapes-and-position`.\n- [X] T044 [P] [US2] Spare article pair 13 (buffer if any of 1–12 is rejected in review): "Reading the maths in word problems" — G2–G5, PSR, slug `word-problems`.\n- [ ] T045 [US2] Owner review gate: for each article, owner reads, fact-checks against the competency reference, edits, then sets `reviewed: true`, `reviewedBy`, `reviewedOn` in front-matter (R2). Confirm ≥ 12 reviewed pairs, then run `scripts/validate.ps1 -Repo blog` (expect `ALL PASS`). This task is human-gated; do not set `reviewed: true` on the owner\'s behalf.\n\n**Checkpoint**: US2 independently verifiable once T045 done.\n\n---\n\n## Phase 6: User Story 3 — Ads only on content screens, never inside activities (P1)\n\n**Goal**: Policy-driven single ad below sufficient content on articles and kids\' syllabus/activity-list screens only; no ads leak after navigation; house banner in activities.\n\n**Independent Test**: Policy/unit/component tests pass; direct load and in-site navigation to every ineligible route show no ad script or container.\n\n- [X] T046 [P] [US3] Create `app/apps/web/src/ads/readableWords.ts` implementing `readableWordCount(markdown)` exactly per contracts/ad-eligibility.md §1 (strip fenced/inline code, HTML, link targets, markers, bare URLs; split on `/\\s+/`; count tokens with a letter or digit).\n- [X] T047 [P] [US3] Add `app/apps/web/src/ads/readableWords.test.ts` with the required table: 299 ⇒ 299; 300 ⇒ 300; text with the letter "s" not split; French accented text; 400-word code block ⇒ 0; 40 links with 5 words of text ⇒ 5; empty ⇒ 0.\n- [X] T048 [P] [US3] Create `app/apps/web/src/ads/adPolicy.ts`: route kind (`home`, `activity`, `parent`, `docs`, `legal`, `news`, `article`, `syllabusList`, `notFound`, `redirect`, `loading`) → `article | list | none`, plus `adSlotMode(routeKind, visibleText, config)` returning `none` when `adsEnabled` is false, route ineligible, page loading/errored, or `readableWordCount < MIN_AD_CONTENT_WORDS (300)`.\n- [X] T049 [US3] Add `app/apps/web/src/ads/adPolicy.test.ts`: matrix of every route kind × short/long text × enabled/disabled; policy-drift guard that lists all route kinds in `app/apps/web/src/seo/routes.ts` and fails if one has no AdPolicy classification.\n- [X] T050 [US3] Create `app/apps/web/src/ads/adScript.ts`: inject `adsbygoogle.js` once only when an eligible slot mounts; never when `adsEnabled` is false; a hook that, after the loader was injected, forces a full document load (`location.assign`) when navigating from an eligible route to an ineligible one (plan Decision 3); eligible→eligible stays SPA with one slot re-pushed; script failure/blocked collapses the wrapper.\n- [X] T051 [US3] Create `app/apps/web/src/ads/AdSlot.tsx` replacing `components/AdSquareCard.tsx`: wrapper labelled `adCard.label`, exactly one slot after the content element, `<ins class="adsbygoogle" data-ad-client data-ad-slot data-tag-for-age-treatment="1">`, no `data-tag-for-child-directed-treatment`, no `data-ad-format="auto"`, no anchor/vignette/overlay/page-level config; dev builds render a static placeholder and never contact Google. Delete `AdSquareCard.tsx` and its imports.\n- [X] T052 [US3] Add component tests `app/apps/web/src/ads/AdSlot.test.tsx` and `adScript.test.tsx`: age attribute present and deprecated one absent; exactly one slot; label in en and fr; ineligible route renders no wrapper and injects no script; eligible→ineligible navigation triggers the hard-load hook; `adsEnabled=false` leaves no residue.\n- [X] T053 [US3] Wire `AdSlot` into the blog article page (`app/apps/web/src/components/docs/`, article kind only, using the visible readable text) and into the kids\' syllabus and activity-list screens with their per-language intro text block; remove any ad from home, activity, parent, settings, docs, news and legal screens; remove the site-wide ad loader (`<script async … adsbygoogle.js>` / GTM-injected ad code) from `app/apps/web/index.html` (checklist 10).\n- [X] T054 [P] [US3] Add per-language intro text (≥ 300 readable words each, original) for the syllabus and activity-list screens in `app/apps/web/src/i18n/` (or the component that renders them) so they pass the same threshold as articles (spec "Resolved by default").\n- [X] T055 [P] [US3] Create `app/apps/web/src/ads/HouseBanner.tsx`: non-intrusive, dismissible banner linking to About and `siteConfig.donationUrl`, shown inside activities and on child screens where ads are absent; hidden when `donationUrl` is empty; never blocks play. Add `HouseBanner.test.tsx` (hidden with empty URL, dismiss persists for the session, en/fr text) and mount it in the activity layout.\n\n**Checkpoint**: US3 testable via unit/component suite; no ad can reach ineligible routes.\n\n---\n\n## Phase 7: User Story 4 — Child-directed ads and consent (P2)\n\n**Goal**: Consent message in EEA/UK/CH before non-essential identifiers; analytics off child screens; kill-switch complete.\n\n**Independent Test**: With ads on, requests carry the age signal (test); consent defaults are denied before analytics loads; `adsEnabled=false` removes everything.\n\n- [ ] T056 [US4] Resolve plan risk R3 first: with the owner\'s AdSense account (Privacy & messaging, free certified CMP), confirm whether the CMP loader may run on child screens without being treated as an ad script; record the decision in `specs/specs/058-adsense-compliance/research.md` and pick the primary path (CMP on all routes) or the fallback (consent shown on first eligible page, analytics off until then). Human-gated: ask the owner if the account cannot be inspected.\n- [X] T057 [US4] Create `app/apps/web/src/ads/consent.ts` implementing the chosen path: set Google consent-mode defaults to `denied` before any Google tag loads; load the CMP loader per T056; expose a `reopenConsent()` used by the footer link ("Privacy choices"/"Choix de confidentialité"). Add `consent.test.ts` (defaults denied before tag load; no loader when `adsEnabled` false where applicable).\n- [X] T058 [US4] Remove GTM from the static head of `app/apps/web/index.html`; add `app/apps/web/src/ads/analytics.ts` that loads GTM only on non-child routes (home/parent/docs/legal/blog, never activity or syllabus-for-kids screens) and only after consent where required (FR-019). Add `analytics.test.ts` (no GTM on activity routes; loads after consent on allowed routes).\n- [X] T059 [US4] Add the consent re-open link to `SiteFooter.tsx` (en + fr), visible wherever the CMP is active; update `SiteFooter.test.tsx`.\n- [X] T060 [US4] Add a test in `app/apps/web/src/ads/AdSlot.test.tsx` asserting the age-treatment attribute on every `<ins>` (FR-016 automated verification) and one asserting `adsEnabled=false` ⇒ no ad script, no wrapper, no placeholder, no consent loader for ads (FR-015, SC-005).\n- [X] T061 [US4] Finalise the Privacy text in `app/apps/web/src/content/legal/{en,fr}/privacy.md` to match actual behaviour (CMP, consent mode, GTM scope, Quebec limits on advertising to under-13s, non-personalised contextual ads only).\n\n**Checkpoint**: US4 done; Privacy text matches code.\n\n---\n\n## Phase 8: User Story 5 — Quality and crawlability verified before resubmission (P2)\n\n**Goal**: Thin pages not indexed; sitemap/robots/ads.txt correct; generated pages enriched per page; checklist recorded.\n\n**Independent Test**: `smokeLive.mjs` returns `ALL PASS`; `dist/thin-pages.json` agrees with the sitemap; checklist results recorded.\n\n- [X] T062 [US5] Implement the thin-page rule in `app/apps/web/scripts/prerender.ts` (+ `prerenderEntry.ts`, `app/apps/web/src/seo/pageMetadata.ts`, `sitemap.ts`): compute each route\'s readable text; below threshold ⇒ `<meta name="robots" content="noindex">` and excluded from the sitemap; internal spec-document routes always noindex and excluded; redirects and 404 never in the sitemap; print thin totals per subject and write `dist/thin-pages.json` (`{path, lang, readableWords, thin}`). Add `prerender.thin.test.ts` for threshold, spec-doc exclusion and sitemap agreement.\n- [X] T063 [P] [US5] Ensure `app/apps/web/public/robots.txt` blocks no content and no `Mediapartners-Google`, and references the sitemap; add a test or smokeLive assertion (C5) accordingly.\n- [X] T064 [US5] In the mathematics repo, define the enrichment record format per data-model.md (`meaning`, `examples` ≥ 2, `commonMistakes`, `activityLinks`, per row and language, en + fr) and expose each row\'s readable word count for the thin-page rule; add the duplicate-paragraph check to the mathematics syllabus gate (`subjects/mathematics/` validation) so shared boilerplate across rows fails. Add tests.\n- [X] T065 [US5] Enrichment batch 1 (FR-027, phase 2, priority subjects first): author original per-row enrichment for the highest-priority mathematics subject areas (PK–G1 NUM/AS first) in `subjects/mathematics/` en + fr, no templated filler; owner samples for quality; report the new thin count. Repeat as further batches in later runs — shipping is not blocked on 100% (R4).\n- [X] T066 [US5] Re-run live smoke after redeploy and write `specs/specs/058-adsense-compliance/checklist-results.md`: one row per checklist item 1–12 from spec.md (`pass|fail|n/a`, date, note), pasting `smokeLive.mjs` output for items 1, 2 (script-presence part), 8, 9, 10 and recording the remaining-thin count. Items 3–6, 11, 12 are manual owner steps — mark pending until the owner reports.\n\n**Checkpoint**: checklist recorded; owner resubmits.\n\n---\n\n## Phase 9: Polish & Cross-Cutting\n\n- [ ] T067 [P] Run `scripts/validate.ps1 -Repo all -Build`; fix any lint/type/test/coverage failures (note memory: the app coverage gate has failed before from unrelated pre-existing gaps — report those rather than papering over them). Expect final line `ALL PASS`.\n- [ ] T068 [P] Fill the owner-pending values: `region`, `contactEmail` in `siteConfig.ts` (Q2) and `donationUrl` (Q4) once supplied; until then the production build is expected to fail (guard T005) and live resubmission is blocked.\n- [X] T069 Write the blog post documenting this feature (specs → app → blog rule, FR-025) in `blog/` as `kind: news`, `lang: en` + `lang: fr`; verify spec.md, `../app` implementation and the blog post all exist before reporting the feature finished.\n- [ ] T070 Run the quickstart validation (`specs/specs/058-adsense-compliance/quickstart.md` steps 1–3) and tick the manual owner items 4–5.\n\n---\n\n## Dependencies & Execution Order\n\n- Phase 1 → Phase 2 → everything else.\n- **US0 (P0) first**: nothing is verifiable live until content is served; T008 → T009 → T014. T010–T013 parallel to T009.\n- **US1** independent of US2/US3/US4 (needs Phase 2 only, T007 for strings).\n- **US2** infra (T024–T031) can run alongside US1; articles T032–T044 are parallel and depend only on T024/T025 for validation; T045 needs all articles.\n- **US3** needs Phase 2 (T004, T007); T053 needs US2 article page (T031) and T054; HouseBanner T055 needs US1 About route.\n- **US4** needs US3 (AdSlot) and US1 (footer); T056 gates T057/T058.\n- **US5** needs US0 (smoke script), US1 (legal), US2 (articles), US3 (ads) for the full smoke; T062–T064 can start earlier.\n- Polish last; T066 requires a redeploy of all affected repos.\n\n### Parallel opportunities\n\n- After T004: T005, T006, T007 together.\n- US1 legal text: T015–T018 together.\n- US2 articles: T032–T044 all together (different files).\n- US3: T046, T047, T048 together; T054, T055 alongside T050–T053.\n\n## Implementation Strategy\n\n- **MVP = US0 + US1 + US2 + US3**: live content served, trust pages, ≥ 12 articles per language, correct ad placement. This is the minimum for resubmission.\n- Then US4 (consent) before enabling ads for real; US5 for thin-page hygiene and recorded checklist.\n- Safe fallback at any point: `adsEnabled=false` ships a clean content site with no ads (plan R1).\n- Human-gated tasks: T045 (article review), T056 (AdSense account), T065 (owner sampling), T068 (Q2/Q4 values), T066 items 3–6/11/12.\n',z='# Tasks: Maternelle (K) "Sens du nombre" — complete skill set\n\n**Input**: [spec.md](spec.md), [plan.md](plan.md), [research.md](research.md), [data-model.md](data-model.md), [quickstart.md](quickstart.md)\n**Scope**: K content only. Default-pass and revision un-pass (spec §2 / FR-006) are NOT in this feature.\n**Paths**: `SUBJ` = `../subjects/mathematics`, `PKG` = `SUBJ/packages/syllabus-content-p`, `SYL` = `SUBJ/src/syllabus`, `DOC` = `docs/syllabus-detailed/K.md` (in this repo).\n**Format**: `- [ ] ID [P] [Group] description`. Each group (US1–US5) is one implement-feature-group chat. Validate with `scripts/validate.ps1`, never a dev server. Every new string ships en + fr together. Work on main.\n\n## Phase 1: Audit\n\n- [X] T001 Read the banks and `SYL/activityIds.ts` and write `research.md` section R8: for every activity id in spec §1, its real exercise key, current range, whether it exists (built) or is only a `planned` idea in `DOC`, and the exact bank/range gaps (spec §1 notes list the likeliest: skills 1, 2, 4, 6, 7, 8, 9 at 11–20). Also confirm the `decomposeFive` bank id, that no stored profile data references `K-*` skill ids, and that `loadIntro(kind, lang, topic)` + `syllabus.ns.md` / `activities.ns.md` (en + fr) exist (FR-006b). Output: the definitive list of banks to write or extend.\n\n## Phase 2: Foundation (blocks all groups)\n\n- [X] T002 Relax the activities-per-skill gate from 2–3 to 2–4 in `SUBJ/scripts/checkSyllabus.ts` and update its test in `SUBJ/tests/syllabus.test.ts`.\n- [X] T003 Rewrite the K NS rows in `DOC` to the 16 skills of spec §1 (new ids per data-model.md remap, en titles and descriptions, activity slugs, `introduce-only` label on skill 16, prerequisites chain, reference rows kept from the old rows). Remove `K-FL-1` and `K-OP-6`; renumber the remaining K-FL (→1..4) and K-OP (→1..10 contiguous). Update the per-topic counts in `docs/syllabus-detailed/README.md` and any K references in `docs/syllabus/K.md`.\n- [X] T004 Re-key `SYL/fr/K.json` with the remap and fill the French titles, descriptions and planned-activity ideas from spec §1 (titles ≤ MAX_TITLE).\n- [X] T005 [P] Re-key `SYL/enrichment/en/K.json` and `SYL/enrichment/fr/K.json` with the remap; rewrite the entries of new skill 3 (see it at a glance) and 13 (parts of a number) for their narrower scope, keeping each at or above MIN_ENRICHMENT_WORDS.\n- [X] T006 Run `npm run syllabus:extract` in `SUBJ`; update app fixtures that use old K ids (`../app/apps/web/src/domain/curriculum/skillEnrichment.test.ts`, `topics.test.ts`, `../app/apps/web/scripts/prerender.thin.test.ts`, `SUBJ/tests/enrichment.test.ts`). Checker may still fail on unbuilt activities until the groups below land.\n\n## Phase 3: US1 — Skills 1–4 (counting words, one-to-one, subitizing, conservation)\n\n**Goal**: counting foundation complete. **Test**: `syllabus:check` shows no error for K-NS-1..4; new banks pass their tests.\n\n- [X] T007 [P] [US1] New bank + test `count-the-teens` (fill the missing word 11–19) in `PKG/src/banks/`, `PKG/tests/`; wire in `PKG/src/content.ts` and `PKG/src/index.ts` (key, en/fr label, icon, competency in `competencies.ts`).\n- [X] T008 [P] [US1] Extend `preschool-how-many-all-together` / `preschool-one-to-one` banks to the spec ranges (to 20; rows / scattered / mixed) if T001 finds a gap; tests updated.\n- [X] T009 [P] [US1] Build `dot-pattern-snap` (dice / finger patterns to 5 → numeral) and `ten-frame-flash` (6–10 as "5 and some") as text-first banks + tests; wire them.\n- [X] T010 [P] [US1] New bank + test `same-in-a-circle` (row / cluster / circle, 11–20); extend `preschool-still-the-same` to 10 if needed.\n- [X] T011 [US1] Set primary / reuse links for skills 1–4 in `DOC` (flash-dots, dot-pattern-snap, ten-frame-flash primary in skill 3 only); run `syllabus:extract`, `syllabus:ids`, `syllabus:check`.\n\n## Phase 4: US2 — Skills 5–9 (zero, compare, give n, numerals, one more/less)\n\n**Test**: `syllabus:check` clean for K-NS-5..9; banks cover 11–20 where the table says so.\n\n- [X] T012 [P] [US2] Extend `preschool-compare-groups` to 20 with items of different sizes; `preschool-same-or-not` check to 10 (tests updated).\n- [X] T013 [P] [US2] Build `grab-a-handful` (n ≤ 20, check by counting) and extend `preschool-take-n` to ≤ 10 + tests; wire.\n- [X] T014 [P] [US2] Extend `preschool-number-hunt` to 0–20 with look-alikes (12/21, 13/31) and `preschool-show-the-number` to 0–10 if needed.\n- [X] T015 [P] [US2] Build `pop-up-one-more` (mixed, to 20, edges 0 / 10 / 20) + test; wire.\n- [X] T016 [US2] Links for skills 5–9 in `DOC`; extract, ids, check.\n\n## Phase 5: US3 — Skills 10–12 (count on/back, order, bigger number)\n\n- [X] T017 [P] [US3] New bank + test `preschool-count-on-from` (count on from 2–9 to 10); build `rocket-countdown` (20 → 0, any start); check `preschool-hidden-bag` reaches 20.\n- [X] T018 [P] [US3] Build `line-up-the-cards` (order 0–10) and new `missing-card-hard` (gap in middle / ends, two gaps, 0–10) + tests; wire.\n- [X] T019 [P] [US3] Build `number-showdown` (close pairs 7 vs 8, 9 vs 10) + test; wire.\n- [X] T020 [US3] Links for skills 10–12 in `DOC` (skill 10 has 4 activities, allowed by T002); extract, ids, check.\n\n## Phase 6: US4 — Skills 13–16 (parts of a number, ordinals, write numerals, skip counting)\n\n- [X] T021 [P] [US4] Link the existing P decompose banks (`preschool-two-hands`, `preschool-another-way`, spec name `preschool-decompose-five`) as primary in skill 13; new bank + test `decompose-to-ten` (two parts of 6–10, missing part).\n- [X] T022 [P] [US4] Build `trace-the-numeral` (0–9) and new `trace-the-teens` (10–20, digit order) as text-first banks (pick the right stroke / digit order) + tests; wire.\n- [X] T023 [P] [US4] Build `tens-staircase` (10 → 100) and `skip-count-hops` (5s, 10s, then 2s to 20–30) + tests; skill 16 labelled `introduce-only` with no accuracy gate (FR-004).\n- [X] T024 [US4] Links for skills 13–16 in `DOC`; confirm K-FL and K-OP skills that lost activities still have ≥ 2 (reuse `↺` links or drop `split-the-beads` per research R5); extract, ids, check.\n\n## Phase 7: Polish and completion\n\n- [X] T025 Verify all K NS activity names, titles and descriptions have fr strings (en + fr together) and that each built activity is primary exactly once (`npm run syllabus:check` → OK).\n- [X] T026 Run `scripts/validate.ps1 -Repo all -Build`; last line must be `ALL PASS`. Fix only failures caused by this feature; report unrelated pre-existing failures instead (see memory: coverage gate is fragile).\n- [X] T027 Update `docs/syllabus-detailed/README.md` coverage table (built vs planned for K) and `docs/features/` entry if one lists K NS.\n- [X] T028 Write the blog post in `../blog` (docs-blog skill) and confirm spec, implementation and blog all exist (completion rule).\n\n## Dependencies\n\n- T001 → everything. Phase 2 (T002–T006) blocks US1–US4. US1–US4 are independent of each other after Phase 2 and can run in separate chats in any order (ranges and `DOC` links per group touch different skill rows; T011 / T016 / T020 / T024 each edit different rows of `DOC`).\n- Phase 7 after all groups.\n\n## Parallel examples\n\n- After Phase 2: US1 T007, T009, T010 in parallel (separate bank files).\n- Within a group, every `[P]` bank task touches its own file; the closing "links" task in each group is sequential.\n\n## Strategy\n\nMVP = Phase 1–2 + US1 (counting foundation). Then US2, US3, US4 incrementally; each group ends with `syllabus:check` clean for its own skills. Task count: 28 (Audit 1, Foundation 5, US1 5, US2 5, US3 4, US4 4, Polish 4).\n',B='---\ndescription: "Task list for Fluid Navigation (060)"\n---\n\n# Tasks: Fluid Navigation (level, topic, skill, activity)\n\n**Input**: [spec.md](spec.md), [plan.md](plan.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/navigation-ui.md](contracts/navigation-ui.md)\n\n**Paths**: all `src/...` paths are under `app/apps/web/src/` in the `app` repo. Tests sit next to the source (`*.test.ts(x)`); the app coverage gate applies, so each task ships its tests.\n\n**Rules**: automated validation only (no dev server / GUI). Every new string ships en + fr together in `src/i18n/strings.ts`. Validate with `scripts/validate.ps1 -Repo app` (last line `ALL PASS`). Work lands on main.\n\n**Format**: `- [ ] T### [P?] [US?] description with file path`. `[P]` = different files, no dependency on an unfinished task.\n\n## Phase 1: Setup\n\n- [X] T001 Create the pure module skeleton `src/domain/curriculum/navContext.ts` exporting the types from data-model.md (`PagePosition`, `NavContext`, `EndScreenAction`) and stub `navContext()` / `endScreenActions()`; add an empty `src/domain/curriculum/navContext.test.ts`.\n\n## Phase 2: Foundational (blocks all stories)\n\n- [X] T002 In `src/domain/curriculum/navContext.ts` implement `parent` per data-model.md (grade→Home, topic→grade, skill→topic, activities→skill, activity→activities), derived from the same URL data the breadcrumb uses (`useCurrentPage` in `src/components/nav/AppNav.tsx`).\n- [X] T003 [P] In `src/domain/curriculum/navContext.ts` implement `easierLevel`/`harderLevel` using `mathTopicIdsForTier` from `src/domain/curriculum/topics.ts`: adjacent grade where the current topic exists, else `{disabled: true, reason}`; first/last grade disabled, never hidden. `topicsAtLevel` in syllabus order with current marked; `siblingSkills` via `syllabusSkillsForTier` (`src/domain/curriculum/syllabusSkills.ts`).\n- [X] T004 In `src/domain/curriculum/navContext.ts` implement `endScreenActions()` per data-model.md: primary = first of nextActivity, nextSkill, anotherTopic, else playAgain; `harderLevel` only if the topic exists at the next grade; `anotherTopic` = next topic of the same grade in existing order and absent for the last topic; `playAgain` and `backToList` always present. Use `activitiesForSkill` (`src/domain/curriculum/subjectSyllabus.ts`) and path builders in `src/domain/curriculum/subjectPaths.ts`.\n- [X] T005 Unit tests in `src/domain/curriculum/navContext.test.ts` for every spec edge case: topic missing at target level (both directions), K has no easier / G6 no harder, only activity of a skill, last skill of a topic, last topic of a level, unknown ids fall back to parent.\n- [X] T006 [P] Add all new string keys for the feature to `src/i18n/strings.ts` (typed in `PlainStringKey`/`ParamsByKey`), en + fr: level switcher labels and "no such level for this topic" note, topic switcher label, live-region announcement, end-screen actions (Next activity, Harder level, Another topic, Play again, Back to list), stars summary, sibling skills heading, all activities link. Keep `subjectPage.backTo` for the ↑ button name. French may be ~50% longer.\n\n**Checkpoint**: navigation rules are pure, tested and translated.\n\n## Phase 3: User Story 1 - One clear way to go up (P1)\n\n**Goal**: exactly one up control per page, matching the breadcrumb parent.\n**Independent test**: render grade/topic/skill/activity pages at wide and phone widths; count up controls; compare targets.\n\n- [X] T007 [US1] In `src/components/nav/AppNav.tsx`: make the breadcrumb a labelled `<nav>` landmark with `aria-current="page"` on the last crumb (FR-002); source its parent from `navContext().parent`.\n- [X] T008 [US1] In `src/components/nav/AppNav.tsx` + `AppNav.css`: add the single icon-first ↑ button for phone width (accessible name from `subjectPage.backTo`, ≥44 px, same target as the breadcrumb\'s parent crumb); hide the breadcrumb trail\'s duplicate on narrow screens as needed. Honour reduced motion.\n- [X] T009 [US1] In `src/components/SubjectPracticePage.tsx`: delete the `backTarget` logic and the `<Link className="btn btn-ghost back-link">`; remove now-dead CSS.\n- [X] T010 [US1] Tests: update `src/components/nav/AppNav.test.tsx` and `src/components/SubjectPracticePage.test.tsx` — one up control per level, equals breadcrumb parent, landmark and `aria-current` present, old text button gone.\n\n## Phase 4: User Story 2 - A next step when an activity ends (P1)\n\n**Goal**: replace the silent return-to-list with an end screen.\n**Independent test**: complete an activity at K in a topic that also exists at G1; check actions and destinations.\n\n- [X] T011 [US2] In `src/hooks/usePracticeSession.ts` and `src/components/PracticeSession.tsx`: expose completion data (stars/score summary) to the caller instead of only calling `onComplete()`; keep scoring logic untouched.\n- [X] T012 [US2] Create `src/components/SessionEndScreen.tsx` + `SessionEndScreen.css`: stars summary above the actions; actions from `endScreenActions()`, each with icon + short label, primary visually dominant, ≥44 px with ≥8 px gaps, wrapped French labels, no animation under reduced motion.\n- [X] T013 [US2] In `src/components/SubjectPracticePage.tsx`: on completion show `SessionEndScreen` as component state (no new URL, no history entry) instead of `navigate(returnPath, {replace:true})`; "Play again" resets the session; "Back to list" does the old return navigation.\n- [X] T014 [P] [US2] Tests `src/components/SessionEndScreen.test.tsx` (every action present/absent rule, primary fallback, last-in-skill case) and extend `src/components/SubjectPracticePage.test.tsx` and `src/components/PracticeSession.test.tsx` for the completion flow.\n\n**Checkpoint (MVP)**: US1 + US2 deliver the owner\'s scenario ("harder level" or "another topic").\n\n## Phase 5: User Story 3 - Level and topic switchers (P2)\n\n**Goal**: sideways movement from any topic/skill/activity page.\n**Independent test**: from a skill page at K switch to G1 and back, then switch topic.\n\n- [X] T015 [US3] Create `src/components/nav/ContextBar.tsx` + `ContextBar.css`: level switcher (◀ K ▶) and topic switcher using `TopicIllustration` icons for `topicsAtLevel`; disabled-not-hidden arrows with a short note (`aria-describedby`); current topic `aria-current`; ≥44 px / 8 px; wraps in French.\n- [X] T016 [US3] Mount `ContextBar` on topic, skill and activity views in `src/components/SubjectPracticePage.tsx` (not on the grade page).\n- [X] T017 [US3] On a switch navigate to the target URL via `subjectSectionPath`, move focus to the page `h1`, and announce the new page in a polite live region (page shell / `RouteMetadata` in `src/App.tsx`); keep the topic unchanged when the level lacks it (FR-006/FR-007).\n- [X] T018 [P] [US3] Tests `src/components/nav/ContextBar.test.tsx`: keep topic across levels, disabled direction + note, topic switch at same level, focus moved to heading, live region text; reduced-motion respected.\n\n## Phase 6: User Story 4 - Explicit URLs; skill is a real page (P2)\n\n**Goal**: every selection navigates to its own path URL; skill page is not a dead end.\n**Independent test**: walk grade → topic → skill → activities → activity; refresh and back/forward return to the same page.\n\n- [X] T019 [US4] Audit (research R2): in `src/components/SubjectPracticePage.test.tsx` and `src/components/SyllabusView.test.tsx` add tests that each skill-selection entry point (syllabus row, breadcrumb, sibling link, switchers) calls `navigate()` to a `subjectSkillPath` URL and that no `useSearchParams` selects a level. Fix any entry point that only changes local `screen` state in `src/components/SubjectPracticePage.tsx`.\n- [X] T020 [US4] Render sibling skills (links via `subjectSkillPath`) and a link to the topic\'s activities (`…/{topic}/activities`) on the skill view in `src/components/SubjectPracticePage.tsx`; test in `SubjectPracticePage.test.tsx`.\n- [X] T021 [P] [US4] Confirm old/bookmarked URLs still resolve: run/extend `src/components/__tests__/syllabusMigration.test.tsx`; if T019 changed any path, regenerate `src/domain/curriculum/legacyRedirects.ts` and update `src/seo/routes.ts` / `sitemap.ts` and `src/seo/sitemap.test.ts`. If no path changed, record "no URL change" in the PR note.\n\n## Phase 7: User Story 5 - Starting an activity loads the page once (P3)\n\n**Goal**: one document load, zero redirects.\n**Independent test**: unit tests prove no hard load; owner checks the network panel.\n\n- [X] T022 [US5] Before coding: ask the owner to confirm the trade-off (research R3) — removing the forced hard load on list→activity navigation vs. the AdSense policy reason for it. Stop and surface if the owner objects.\n- [X] T023 [US5] **Verify** the inferred trailing-slash 301 (research R3): inspect `app/apps/web/scripts/prerender.ts` / `prerenderEntry.ts` output layout and the `distrib` host behaviour; record the finding in `specs/060-fluid-navigation/research.md`.\n- [X] T024 [US5] In `src/ads/adScript.ts` (`useAdNavigationGuard`, `shouldHardLoad`): stop hard-loading for list → activity; remove the `lcs.activityAutostart` marker and `consumeActivityAutostart` effect in `src/components/SubjectPracticePage.tsx` if nothing else uses them. The chosen activity must run immediately after in-app navigation.\n- [X] T025 [US5] If T023 confirmed a 301, make canonical activity links/`withoutTrailingSlash` handling in `src/ads/adScript.ts` and `src/domain/curriculum/subjectPaths.ts` avoid the redirect (match the prerender file layout); keep legacy redirects intact.\n- [X] T026 [P] [US5] Update tests `src/ads/adScript.test.tsx`, `src/ads/adPolicy.test.ts`, `src/components/SubjectPracticePage.test.tsx`: no `window.location.assign` on list→activity, activity running right after navigation, ads blocked / storage blocked still navigates.\n\n## Phase 8: Polish & cross-cutting\n\n- [X] T027 Check en/fr parity (`src/i18n/keyParity.ts` test + `no-missing-french-translation` lint) and 44 px / 8 px / reduced-motion on all new CSS (`ContextBar.css`, `SessionEndScreen.css`, `AppNav.css`).\n- [X] T028 Run `scripts/validate.ps1 -Repo app` from the specs repo; fix to `ALL PASS` (note memory: the coverage gate can fail from unrelated gaps — report these separately).\n- [X] T029 Blog write-up in `../blog` per `blog/CLAUDE.md` (required for feature completion), and set spec Status to Done in `specs/060-fluid-navigation/spec.md`.\n\n## Dependencies & order\n\n- Phase 1 → Phase 2 → stories. T003/T006 parallel after T002; T004 needs T002–T003.\n- US1 (Phase 3) and US2 (Phase 4) can run in parallel after Phase 2 but both edit `SubjectPracticePage.tsx`; do T009 before T013, or split into separate chats per group.\n- US3 needs T015\'s component before T016/T017; best after US1 (shared `AppNav`/page shell).\n- US4 audit (T019) is independent of US3 but its fixes touch `SubjectPracticePage.tsx`, so run after US2.\n- US5 is independent of US1–US4; start with T022/T023 (owner decision + verification).\n- Phase 8 last.\n\n## Parallel examples\n\n- After T002: T003 ∥ T006.\n- Within US2: T014 (tests) ∥ T012 (component) once T011 defines the completion data shape.\n- US5 tests (T026) ∥ US4 URL test updates (T021).\n\n## Implementation strategy\n\n1. **MVP = Phases 1–4** (US1 + US2): the owner\'s scenario works; ship and validate.\n2. Then US3 (switchers), US4 (URL audit + skill siblings), US5 (single load), each as its own chat via `implement-feature-group`.\n3. Each group ends with `validate.ps1 -Repo app` → `ALL PASS`; the feature is done only after T029 (blog).\n',V='# Tasks: Home Page Marketing Content and Contextual Ad\n\n**Input**: [spec.md](spec.md), [plan.md](plan.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/home-ad-eligibility.md](contracts/home-ad-eligibility.md)\n**Paths**: `APP` = `c:\\Dev\\learnCoreSkills\\app\\apps\\web\\src`. Validate with `scripts/validate.ps1 -Repo app` (read the last line). No dev server or browser automation (constitution v1.8.0).\n**Format**: `- [ ] T### [P?] [US?] Description with file path`\n\n## Phase 1: Setup\n\n- [ ] T001 Read `APP/ads/adPolicy.ts`, `APP/components/ListIntro.tsx`, `APP/content/loadIntro.ts` and `APP/App.tsx` (`HomePage`) to confirm the reuse pattern in plan.md before editing.\n\n## Phase 2: Foundational (blocks all stories)\n\n- [ ] T002 Add `"home"` to `IntroKind` in `APP/content/loadIntro.ts` (loads `./intro/<lang>/home.md`; the topic argument is not used for home). Add a case to `APP/content/loadIntro.test.ts` that both `en` and `fr` home text load.\n- [ ] T003 Flip `AD_POLICY.home` from `"none"` to `"list"` in `APP/ads/adPolicy.ts`; update the doc comment above it (home is now eligible; list in the comment the remaining `none` kinds). Update `APP/ads/adPolicy.test.ts`: remove `"home"` from the "never allows an ad" list at line ~37, add a test that `adSlotMode("home", 300, {adsEnabled:true})` is `"list"`, `adSlotMode("home", 299, ...)` is `"none"`, and `adSlotMode("home", 500, {adsEnabled:false})` is `"none"`.\n\n## Phase 3: User Story 1 - Parent learns what the site is (P1)\n\n**Goal**: >= 300 readable words of original en/fr text below the picker. **Independent test**: render `HomeMarketing` in each language; it has >= 300 words and links to About, Privacy, parent area.\n\n- [ ] T004 [P] [US1] Write `APP/content/intro/en/home.md`: original parent-facing text, 350-450 words, with headings; covers what the site offers, grades/subjects, how a child practises, no account needed, progress stored on the device, how it is funded (one non-personalised ad), and links to `/en/about`, `/en/privacy`, `/en/parent`. No text copied from other sites.\n- [ ] T005 [P] [US1] Write `APP/content/intro/fr/home.md`: the French equivalent (same coverage, same links under `/fr/`), natural French, not literal word-for-word; 350-450 words.\n- [ ] T006 [US1] Create `APP/components/HomeMarketing.tsx` mirroring `ListIntro.tsx`: `<section className="card list-intro">` with `MarkdownContent` of `loadIntro("home", lang)`, followed by `<AdSlot kind="home" visibleText={text} />` (the slot belongs to US3 behaviour but lives in this component). Confirm the route prefix of the internal links matches how other markdown content links are written.\n- [ ] T007 [US1] Render `<HomeMarketing />` in `HomePage` in `APP/App.tsx` as the last block inside `<main>` (after `SubjectsList`, before `BuildInfo`), for both the no-kid and active-kid states. Do not move or wrap any existing element above it.\n- [ ] T008 [US1] Add `APP/components/HomeMarketing.test.tsx`: for `en` and `fr` it renders, readable words >= `MIN_AD_CONTENT_WORDS` (use `readableWordCount`), the About/Privacy/parent links exist with the language prefix, and no untranslated English appears in the French render (heading check).\n\n## Phase 4: User Story 2 - Child starts playing first (P1)\n\n**Goal**: picker stays first and unaffected. **Independent test**: DOM order and render with ad blocked.\n\n- [ ] T009 [US2] In the existing `App.test.tsx` (or a new `HomePage` test next to it), assert DOM order on home: the kid card / subjects list appears before the marketing section, and the marketing section before `BuildInfo`; with no kid and with an active kid.\n- [ ] T010 [US2] Assert the marketing section and ad slot add nothing before the picker: with `adsEnabled:false` and with a blocked ad script (AdSlot `blocked` state) home renders the picker and the text, with no empty ad container.\n- [ ] T011 [US2] Check the ad `<aside>` keeps its accessible label ("Advertisement") and is after the picker in focus order; add a test in `APP/ads/AdSlot.test.tsx` if the existing label test does not cover kind `"home"`.\n\n## Phase 5: User Story 3 - One contextual ad below the content (P1)\n\n**Goal**: exactly one labelled, child-directed-treated ad on home when eligible. **Independent test**: AdSlot tests.\n\n- [ ] T012 [US3] Update `APP/ads/AdSlot.test.tsx`: remove `"home"` from the `it.each([...])` list of kinds that never render (line ~91); add tests that kind `"home"` with >= 300 words renders one slot with `data-ad-mode="list"` and `data-tag-for-age-treatment="1"`, renders nothing with < 300 words or `adsEnabled:false`, and issues no ad script when disabled.\n- [ ] T013 [US3] Update `APP/ads/adScript.test.tsx`: `shouldHardLoad("home","activity",true)` and `("home","parent",true)` are `true`; `("home","syllabusList",true)` is `false`; the existing `("home","parent",true) === false` expectation at line ~57 is now `true`. Check `useAdNavigationGuard` tests for home as the starting point.\n- [ ] T014 [US3] Confirm no auto/anchor/overlay ad formats were introduced (no code change expected; note result in the PR/commit message).\n\n## Phase 6: User Story 4 - Consent on home (P2)\n\n**Goal**: consent message loads with the home ad; footer link works. **Independent test**: unit tests.\n\n- [ ] T015 [US4] In `APP/ads/AdSlot.test.tsx`/`APP/ads/consent.test.ts` add a case: mounting an eligible home slot calls `loadConsentManager` once; with ads off it does not.\n- [ ] T016 [US4] In `APP/components/SiteFooter.test.tsx` assert the "Privacy choices" button shows once the consent manager is loaded on a rendered home page and calls `reopenConsent` when clicked.\n- [ ] T017 [US4] In `APP/ads/analytics.test.tsx` update the "loads no GTM on a syllabus list or the child home" test so home is still asserted as having no GTM (FR-016), with a comment that home carries an ad but not analytics.\n\n## Phase 7: User Story 5 - Privacy text and docs match (P2)\n\n- [ ] T018 [P] [US5] Edit `APP/content/legal/en/privacy.md` (Advertising paragraph, line ~26): ads appear below articles, on the skills/activities lists **and on the home page**, still never inside an activity or on practice screens; mention the consent message on first visit for EEA/UK/CH. Keep the rest unchanged.\n- [ ] T019 [P] [US5] Make the same change in `APP/content/legal/fr/privacy.md` (same meaning, natural French).\n- [ ] T020 [US5] Add a test in `APP/components/LegalPage.test.tsx` or `APP/content/loadLegal.test.ts` that the privacy text in both languages names the home page and no longer says ads are limited to articles and lists.\n- [ ] T021 [US5] Amend `c:\\Dev\\learnCoreSkills\\specs\\specs\\058-adsense-compliance\\spec.md` FR-012 (remove "home" from the list, add "amended by 061-home-marketing-ad") and its contract `contracts/ad-eligibility.md` and any "home: none" mention in `checklist-results.md` quickstart lines 272-ish; do not rewrite history, add a dated note.\n- [ ] T022 [US5] Search `specs/docs` for statements that home has no ads (`grep -ri "home" docs/features/seo-and-deployment.md docs/features/BACKLOG.md`) and fix any that are now false.\n\n## Phase 8: Polish and cross-cutting\n\n- [ ] T023 Check prerender/SEO: confirm the home markdown ends up in the prerendered home HTML for en and fr (see how `ListIntro` text is prerendered for list pages and the home entry in `APP/seo/pageMetadata.ts`); refresh the home meta description if it no longer matches the content.\n- [ ] T024 Check CSS: reuse `list-intro` styling; verify no horizontal overflow at 360 px by reading the stylesheet (no browser launch); add a small home-specific rule only if the existing class assumes list pages.\n- [ ] T025 Run `scripts/validate.ps1 -Repo app` and `scripts/validate.ps1 -Repo specs`; fix until the last line is `ALL PASS`. Mind the coverage gate (see memory: it has failed on unrelated gaps before; report them, do not hide them).\n- [ ] T026 Blog (required by the completion rule): write today\'s post in `c:\\Dev\\learnCoreSkills\\blog` (use the `docs-blog` skill) explaining the home page content and ad, the consent behaviour, and the compliance trade-off.\n- [ ] T027 Owner follow-ups (report, do not automate): deploy via `../app/scripts/build.ps1`, check the home page from an EEA location, and consider re-submitting the site to AdSense; keep the `adsEnabled` kill-switch in mind for Quebec.\n\n## Dependencies\n\n- Phase 2 (T002, T003) before everything else. US1 (T004-T008) before US2-US4 tests that render home. US3 tests (T012-T013) depend only on T003. US5 text (T018-T019) is independent. T025 after all code and tests; T026 last.\n\n## Parallel examples\n\n- T004 and T005 (en/fr copy) together; T018 and T019 together; T012 and T013 once T003 is done.\n\n## Implementation strategy\n\nMVP = Phase 2 + US1 + US3 (content, ad on home, tests); then US2/US4 assertions and US5 disclosure/docs, then Polish. US5\'s Privacy text MUST ship in the same deploy as the ad.\n',H='# Tasks: 062 PV Maternelle skills, titles and activities\n\nSpec: [spec.md](spec.md) | Plan: [plan.md](plan.md)\nRepos: app = `c:\\Dev\\learnCoreSkills\\app`, syllabus = `c:\\Dev\\learnCoreSkills\\subjects\\mathematics`, docs = `c:\\Dev\\learnCoreSkills\\specs\\docs\\syllabus-detailed`, blog = `c:\\Dev\\learnCoreSkills\\blog`.\nRules: en + fr strings together; seeded generation only (no `Math.random()`); no dev server or GUI automation; mastery 8/10, level up after 4 in a row (engine defaults).\n\n## Phase 1: Syllabus restructure (US1, independent)\n\nGoal: K keeps only K-PV-1; K-PV-2 merged into G1-PV-3; K-PV-3 removed. Test: `npm run syllabus:check` prints OK.\n\n- [X] T001 [US1] Remove K-PV-2 and K-PV-3 from `c:\\Dev\\learnCoreSkills\\specs\\docs\\syllabus-detailed\\K.md`; ids are not reused.\n- [X] T002 [US1] Add the `teen-towers` idea ("build and say teens as ten and ones") to G1-PV-3 in `c:\\Dev\\learnCoreSkills\\specs\\docs\\syllabus-detailed\\G1.md`.\n- [X] T003 [US1] In `G1.md`, change G1-PV-1 `prerequisites` so it no longer names K-PV-3.\n- [X] T004 [US1] Mirror T001-T003 in the French JSON under `c:\\Dev\\learnCoreSkills\\subjects\\mathematics\\src\\syllabus\\fr\\` (K and G1 files); must match the markdown source.\n- [X] T005 [US1] Re-map activity `preschool-teen-numbers` to G1-PV-3 with a regrade (find it with a repo search; registry is `subjects\\mathematics\\src\\syllabus\\activityIds.ts`).\n- [X] T006 [US1] In `c:\\Dev\\learnCoreSkills\\subjects\\mathematics` run `npm run syllabus:extract`, `npm run syllabus:ids`, `npm run syllabus:check`; fix until `syllabus:check` prints OK.\n\n## Phase 2: K-PV-1 title (US2, independent)\n\nGoal: title "See how numbers to 10 are built" / "Voir comment les nombres jusqu\'à 10 sont construits".\n\n- [X] T007 [US2] Check whether the K-PV-1 title is already applied (built output already contains slug `show-numbers-to-10-on-a-ten-frame`): inspect `K.md` and the FR JSON in `subjects\\mathematics\\src\\syllabus\\fr\\`. Record the finding in a one-line comment in the commit/PR notes; skip T008 if both EN and FR already match.\n- [X] T008 [US2] If not applied, set the EN title in `K.md` and the FR title in the FR JSON; rerun `npm run syllabus:extract`, `syllabus:ids`, `syllabus:check` (OK).\n- [X] T009 [US2] Update spec.md section "Title" to drop the "not applied yet" wording once done.\n\n## Phase 3: Activities (US3)\n\nGoal: three K-PV-1 ten-frame activities. Template: existing ten-frame activity such as `ten-frame-flash`. Pure seeded question generators, unit tests, en + fr strings, descriptions in `app\\apps\\web\\src\\i18n\\activityDescriptions.ts`, ids in `subjects\\mathematics\\src\\syllabus\\activityIds.ts`.\n\n- [X] T010 [US3] Locate the `preschool-ten-frame` source package (repo search across app and subjects\\mathematics, not only registry entries) and read it; diff against the spec brief and list gaps before editing.\n- [X] T011 [P] [US3] Implement `fill-the-frame` (spec progression: 1-5; 6-8 with "spaces left"; 9-10 and random; pre-filled add-missing). Wrong answer: counters counted aloud/animated text, empty cells counted, one retry then show answer. Animals-into-house theme. Register id, description, en + fr strings, unit tests.\n- [X] T012 [P] [US3] Implement `make-ten-friends` (complements of 5, 9, 10; then 6-8; then 1-9), framed on frame structure not fact recall. Wrong answer: frames merge showing the gap. Bus-with-10-seats theme. Register under K-PV-1, en + fr strings, unit tests.\n- [X] T013 [US3] Redesign `preschool-ten-frame` as "Flash and tell" (fixed 3 s flash plus "show again" button; progression 1-5 top row, 6-10 second row, non-standard layouts; distractors N±1 and single-row count; wrong answer reshows frame with "5 and 1 more is 6" highlight, then retry; magician\'s hat, star per correct). Update tests, en + fr strings. Depends on T010.\n- [X] T017 [P] [US3] Implement `which-frame-is-right` (emoji-grid frame options; L1 1-5 single row, L2 5-8, L3 6-10 and empty). Register id, description, en + fr strings, unit tests. FR title "Quel cadre est le bon ?".\n- [X] T018 [P] [US3] Implement `hide-the-counters` as a picture: ten-frame scene with a `hidden` count, leaves cover the unseen cells and lift on an answer (plugin-engine type, TenFrameScene, CSS, renderer test, vendored tgz refreshed); L1 totals 2-5, L2 6-8, L3 7-10 with 0-5 hidden). Feedback for the seen count and for the total. Register, en + fr strings, unit tests. FR title "Cache-cache des jetons".\n- [X] T019 [US3] Move `make-ten-friends` to K-OP-6 in `K.md` and the FR JSON (K-PV-1 would otherwise have 5 activities; the cap is 4). `syllabus:check` OK.\n- [X] T014 [US3] Use the existing speech/audio mechanism for "counted aloud" if present; otherwise animated text (applies to T011-T013).\n\n## Phase 4: Validate and blog (Polish)\n\n- [X] T015 Run `c:\\Dev\\learnCoreSkills\\specs\\scripts\\validate.ps1 -Repo all`; last line must be `ALL PASS` (fix feature-caused failures; report unrelated pre-existing ones).\n- [X] T016 Write the blog post in `c:\\Dev\\learnCoreSkills\\blog` (via `docs-blog` skill) covering the PV Maternelle changes; update spec.md status.\n\n## Dependencies\n\nPhase 1 and 2 are independent of each other (both touch K.md and the FR JSON, so run sequentially). Phase 3 is independent of 1-2 except T005 shares the registry. T010 before T013; T011 and T012 parallel. Phase 4 last.\n\n## Strategy\n\nMVP = Phase 1 (syllabus integrity), then Phase 2, then Phase 3 one activity at a time.\n',U='# Tasks: 063 Single progress store (export/import round-trip)\n\nSpec: [spec.md](spec.md) | Plan: [plan.md](plan.md) | Research: [research.md](research.md) | Contract: [contracts/progress-store.md](contracts/progress-store.md)\nRepos: app = `c:\\Dev\\learnCoreSkills\\app` (store: `packages\\core\\progress-store\\src`, web: `apps\\web\\src`), blog = `c:\\Dev\\learnCoreSkills\\blog`.\nRules: work on main; en + fr strings together; mastery-engine stays pure/unchanged; no dev server or GUI automation; tests alongside code (coverage gate); validate with `scripts\\validate.ps1 -Repo app`.\n\n## Phase 1: Store foundations (blocks all stories)\n\nGoal: `progress-store` keeps exact windows and can hand back a child\'s full retained history.\n\n- [X] T001 Change retention in `app\\packages\\core\\progress-store\\src\\answered-questions.ts`: keep the 50 most recent per (childId, competencyId, grade, activityKey ?? "default"), ordered by timestamp then id (replaces the per-subject `MAX_ENTRIES_PER_SUBJECT`). Update `app\\packages\\core\\progress-store\\tests\\` accordingly (60 answers in one bucket keep latest 50; other buckets untouched).\n- [X] T002 [P] Add `getChildAnswers(childId)` (all retained rows, oldest first) in `app\\packages\\core\\progress-store\\src\\answered-questions.ts`, export it from `index.ts`, with a test.\n- [X] T003 Make `restoreProgress` in `app\\packages\\core\\progress-store\\src\\restore.ts` replace the child\'s existing rows (delete then put, one transaction) and apply the T001 retention to incoming rows; test replace + old per-subject export rows (rows missing grade/activity are bucketed from file contents only, nothing invented).\n- [X] T004 [P] Add `entryToSignal(entry): MasterySignal` (`timeMs = timeTakenMs ?? 0`, keep activityKey) in `app\\apps\\web\\src\\storage\\progressCache.ts` (new) with a unit test.\n\n## Phase 2: Round trip works (US1, P1)\n\nGoal: export → delete → import shows identical report, mastery, radar, activity scores. Test: round-trip test from quickstart step 2.\n\n- [X] T005 [US1] Implement `progressCache` in `app\\apps\\web\\src\\storage\\progressCache.ts`: `hydrateProgress(childId)` (reads `getChildAnswers`), `getSignals(childId)`, `subscribe`, `clear(childId)`; test.\n- [X] T006 [US1] Make `readMasterySignals` in `app\\apps\\web\\src\\storage\\masterySignals.ts` read from the cache; remove `appendMasterySignal`/`writeMasterySignals`/localStorage access there.\n- [X] T007 [US1] In `app\\apps\\web\\src\\domain\\session\\practiceSession.ts` (lines ~80-81) keep only `recordAnswer`, then update the cache with the new signal; adjust its tests.\n- [X] T008 [US1] Make readers re-render on cache change: `hooks\\useMasterySignals.ts`, `hooks\\useMastery.ts`, `hooks\\useMathematicsProgress.ts`, `hooks\\usePracticeSession.ts`, and consumers `components\\parent\\AdvancementReport.tsx`, `components\\TopicMasteryTags.tsx`, `components\\SubjectPracticePage.tsx` (subscribe, show nothing misleading until hydrated); update their tests.\n- [X] T009 [US1] Hydrate the active child at app start and on switch (`hooks\\useProfiles.tsx` / app root), and in `io\\importChild.ts` after `restoreParsedProgress` (all three paths: imported, as new, replace) so the report updates without reload.\n- [X] T010 [US1] Add the end-to-end round-trip test in `app\\apps\\web\\src\\io\\roundTrip.test.ts`: seed via `recordAnswer` (3 competencies × 2 grades × 2 activities, >50 in one bucket), capture mastery + activity score + report tree, `exportChild` → `deleteProfile` → `importChild` → hydrate, assert deep-equal; plus a no-history child still shows "no results".\n- [X] T011 [US1] Old export fixtures test in `app\\packages\\core\\child-export\\src\\` : v1, v2, v3, v4 files import and yield displayed mastery (re-bucketed under the new retention; any row lacking grade or activity info is bucketed from what the file contains, e.g. activityKey "default", with no values invented).\n\n## Phase 3: Existing families keep progress (US2, P1)\n\nGoal: pre-update localStorage progress shows unchanged and is then removed. Test: quickstart step 3.\n\n- [X] T012 [US2] In `app\\packages\\core\\progress-store\\src\\migrate-from-local-storage.ts` add the `signalsV2` step (new `meta` row `signalsV2Migration`): re-import every legacy `<child>:mastery-signals` log with the T001 retention, tolerate missing `correctAnswer`/`submittedAnswer` (store ""), and run even if the earlier `localStorageMigration` marker exists; add the new meta row type in `types.ts`.\n- [X] T013 [US2] Remove each legacy `mastery-signals` localStorage key only after the T012 transaction commits (on failure keep it and leave the marker unset); idempotent second run is a no-op.\n- [X] T014 [US2] Call migration then `hydrateProgress` in order at startup (`app\\apps\\web\\src\\storage\\progressMigration.ts` and its caller) and update `progressMigration.test.ts`: legacy log (with `tier` shape) → identical displays, key gone, rerun no-op.\n\n## Phase 4: Delete leaves nothing behind (US3, P2)\n\nGoal: deleting a child removes all of their progress and a new profile starts empty.\n\n- [X] T015 [US3] In `app\\apps\\web\\src\\hooks\\useProfiles.tsx` `deleteProfile`: `deleteChildProgress`, `progressCache.clear(childId)`, profile removal; drop the now-dead `mastery-signals` localStorage removal; update tests.\n- [X] T016 [US3] Failed-import safety: in `io\\importChild.ts` write progress before the profile (or roll back the profile on failure) and surface a specific en + fr message in `i18n\\strings.ts` and `components\\parent\\ImportChildButton.tsx`; test a simulated IndexedDB failure leaves no half-restored child.\n\n## Phase 5: Validate, docs, blog (Polish)\n\n- [X] T017 Run `scripts\\validate.ps1 -Repo app` until `ALL PASS`.\n- [X] T018 Grep `app` for leftovers of `appendMasterySignal`, `writeMasterySignals`, `mastery-signals` outside migration code; remove.\n- [X] T019 Update `specs\\docs\\` feature doc for progress storage/export (what is stored, retention rule, migration).\n- [X] T020 Write the blog post in `c:\\Dev\\learnCoreSkills\\blog` (use the `docs-blog` skill); confirm spec, app and blog all exist before reporting done.\n\n## Dependencies\n\nPhase 1 → Phase 2 → Phase 3 (T012-T013 depend only on T001, T014 on T005/T009) → Phase 4 → Phase 5. Parallel: T002 ‖ T004; T011 ‖ T010; T015 ‖ T016.\nMVP: Phases 1-2 (the reported bug fixed for new data); Phase 3 is required before release so current users lose nothing.\n',W='# Tasks: Place value (PV) activities, Grade 1\n\n**Spec**: `specs/064-pv-g1-activities/spec.md` | **Plan**: `specs/064-pv-g1-activities/plan.md`\nPaths: app = `C:\\Dev\\learnCoreSkills\\app`, math = `C:\\Dev\\learnCoreSkills\\subjects\\mathematics`, specs = `C:\\Dev\\learnCoreSkills\\specs`.\nRules for every activity: en + fr strings together, seeded generation (no `Math.random`, see `seededLayout.ts`), reduced motion respected, mastery 8/10 with at most 2 hints then advance a level (reuse existing mechanism). Each activity gets a test for seeded determinism, answer validation, and en/fr string presence. No dev server.\n\n## Phase 1: Setup\n\n- [X] T001 Confirm G1-PV-5 already removed and `syllabus:check` passes in `C:\\Dev\\learnCoreSkills\\subjects\\mathematics` (spec task 1, done); note baseline `scripts/validate.ps1 -Repo all` result.\n\n## Phase 2: Foundational (syllabus titles and order)\n\n- [X] T002 Apply EN titles and row order PV-1, PV-2, PV-3, PV-4, PV-6 (IDs unchanged) in `C:\\Dev\\learnCoreSkills\\specs\\docs\\syllabus-detailed\\G1.md`.\n- [X] T003 Apply FR titles and the same row order in `C:\\Dev\\learnCoreSkills\\subjects\\mathematics\\src\\syllabus\\fr\\G1.json`; run `syllabus:check`.\n- [X] T004 Inspect `app/apps/web/src/activity-engine/scenes/` and record in this file (a note under each story phase) which existing scene (drag, numeric/TenFrameScene, puzzle, multiple choice, build, error hunt, game) each new activity reuses; add a new scene only if none fits.\n\n## Phase 3: US1 - G1-PV-1 Ten ones make one ten\n> Scene note (T004): existing scenes: CountPath, Counters, NumberLine, PickGroup, TenFrame; scene-kit has Tray/Slot/useDragTap. bundle-the-sticks reuses CountersScene + scene-kit drag; ten-frame-trade-up reuses TenFrameScene.\n\n**Test**: both activities playable, deterministic, en/fr strings present.\n\n- [X] T005 [P] [US1] Implement `bundle-the-sticks` (drag) with en + fr strings under `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\` and description in `app/apps/web/src/i18n/activityDescriptions.ts`, plus test.\n- [X] T006 [P] [US1] Implement `ten-frame-trade-up` (numeric, reuse TenFrameScene) with en + fr strings, description, and test.\n\n## Phase 4: US2 - G1-PV-2 Whole tens: 10 to 90\n> Scene note (T004): tens-hundred-square-jump reuses CountPathScene, or a small new 100-square scene if none fits; ten-rod-shop reuses PickGroupScene.\n\n- [X] T007 [P] [US2] Implement `tens-hundred-square-jump` (puzzle) with en + fr strings, description, and test.\n- [X] T008 [P] [US2] Implement `ten-rod-shop` (multiple choice) with en + fr strings, description, and test.\n- [X] T009 [US2] Replace slug `syllabus-g1-tens-and-ones-multiples-of-ten` with `bundle-the-sticks` and `tens-hundred-square-jump` in the G1.PV.2 references; remove the old slug from registration, update all references (sitemap/thin-pages inputs), and map any old progress-storage key to `bundle-the-sticks`.\n\n## Phase 5: US3 - G1-PV-3 Build 2-digit numbers from tens and ones\n> Scene note (T004): build-it-with-blocks and teen-towers reuse CountersScene + scene-kit Tray/Slot/useDragTap; a rods-and-cubes art variant may be needed.\n\n- [X] T010 [P] [US3] Implement `build-it-with-blocks` (build) with en + fr strings, description, and test.\n- [X] T011 [P] [US3] Implement `teen-towers` (build) with en + fr strings, description, and test.\n- [X] T012 [US3] In `teen-towers` fr strings, replace placeholder "Un nombre en 1x" with "Un nombre de 11 à 19 a 1 dizaine."\n- [X] T013 [US3] Tweak `preschool-teen-numbers`: add G1.PV.3 as a secondary reference only (no redesign); keep its K.PV.2 slug. (Already satisfied: G1-PV-3 row in G1.md links it as TWEAK, no redesign.)\n\n## Phase 6: US4 - G1-PV-4 Read a number from tens and ones\n> Scene note (T004): read-the-blocks reuses PickGroupScene; place-value-mat-flip needs a small new flip-card scene built with scene-kit.\n\n- [X] T014 [P] [US4] Implement `read-the-blocks` (multiple choice) with en + fr strings, description, and test.\n- [X] T015 [P] [US4] Implement `place-value-mat-flip` (puzzle) with en + fr strings, description, and test.\n\n## Phase 7: US5 - G1-PV-6 Know what each digit is worth\n> Scene note (T004): digit-value-detective and swap-the-digits reuse PickGroupScene.\n\n- [X] T016 [P] [US5] Implement `digit-value-detective` (error hunt) with en + fr strings, description, and test.\n- [X] T017 [P] [US5] Implement `swap-the-digits` (game) with en + fr strings, description, and test.\n\n## Phase 8: Polish and cross-cutting\n\n- [X] T018 Run `competency-coverage-auditor` per new activity against its G1.PV reference row; fix gaps.\n- [X] T019 Run `scripts/validate.ps1 -Repo all` and `syllabus:check`; last line must be `ALL PASS`.\n- [X] T020 Write blog post in `C:\\Dev\\learnCoreSkills\\blog\\` (use `docs-blog` skill) after implementation.\n\n## Dependencies\n\n- T002-T004 before all story phases. Stories US1-US5 are independent of each other, except T009 needs T005 and T007; T012 needs T011.\n- T018-T020 after all stories.\n\n## Parallel opportunities\n\nAll [P] tasks within and across US1-US5 (different files). T002 and T003 can run in parallel.\n\n## Strategy\n\nMVP = Phase 2 + US1 + US2 (including slug replacement T009), then US3-US5 incrementally; each story is shippable on its own.\n',G='# Tasks: Place value (PV) activities, Grade 2\n\n**Input**: `specs/065-pv-g2-activities/spec.md`, `plan.md`\n**Paths**: app = `C:\\Dev\\learnCoreSkills\\app`; math = `C:\\Dev\\learnCoreSkills\\subjects\\mathematics`; specs = `C:\\Dev\\learnCoreSkills\\specs`; blog = `C:\\Dev\\learnCoreSkills\\blog`\n**Rules for every activity**: en + fr strings together; seeded generation (no `Math.random`); ranges inside 0-999; mastery 8 of 10 with at most 2 misses, advance a level after 3 in a row; reduced motion respected; per-activity tests cover seeded determinism, answer validation, range bounds, en/fr string presence. No dev server.\n\n## Phase 1: Setup\n\n- [X] T001 Confirm `syllabus:check` passes on current G2 data in `C:\\Dev\\learnCoreSkills\\subjects\\mathematics` (baseline).\n- [X] T002 [P] Inventory reusable scenes in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\activity-engine\\scenes\\` and record per activity which scene is reused (flag trade mat and odometer as possible new scenes) in a short note at the end of this file.\n\n## Phase 2: Foundational (blocks all stories)\n\n- [X] T003 Apply the EN/FR titles from the spec table to `C:\\Dev\\learnCoreSkills\\subjects\\mathematics\\src\\syllabus\\fr\\G2.json` and `C:\\Dev\\learnCoreSkills\\specs\\docs\\syllabus-detailed\\G2.md` (FR uses "chiffres significatifs" in full where relevant); run `syllabus:check`.\n- [X] T004 Register the new slug `syllabus-g2-adds-subtracts-100` and all 12 new slugs (`block-builder-trade-mat`, `bundle-the-hundred`, `digit-spotlight`, `place-value-mystery-number`, `zero-keeper-game`, `swap-the-zero`, `regroup-shuffle`, `many-ways-to-build`, `partition-swap-puzzle`, `ten-more-ten-less-lift`, `hundred-chart-ten-moves`, `hundred-tower-builder`, `odometer-100-more`) in `C:\\Dev\\learnCoreSkills\\subjects\\mathematics\\src\\syllabus\\activityIds.ts`, mapped to G2-PV-1..7 per spec.\n- [X] T005 Add description entries (en + fr) for every new/redesigned slug in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\i18n\\activityDescriptions.ts`.\n\n## Phase 3: User Story 1 - G2-PV-1 Ten tens make a hundred; build 3-digit numbers (P1)\n\n**Goal**: Kids build 3-digit numbers from blocks and trade 10 tens for 1 hundred.\n**Independent test**: Activities appear under G2-PV-1; ladder L1 whole hundreds 100-300, L2 hundreds+tens, L3 full 3-digit, L4 trades with mixed forms.\n\n- [X] T006 [P] [US1] Implement `block-builder-trade-mat` (new scene if no fit, e.g. trade mat) with 4-level ladder, en/fr, tests, in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\activity-engine\\scenes\\` and `...\\content\\`.\n- [X] T007 [P] [US1] Implement `bundle-the-hundred` with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n- [X] T008 [P] [US1] Redesign `syllabus-g2-partitions-three-digit-numbers` as read-the-blocks multiple choice, en/fr, tests, in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n\n## Phase 4: User Story 2 - G2-PV-2 Value of each digit (P1)\n\n**Goal**: Name the value of each digit in 3-digit numbers.\n**Independent test**: L1 hundreds digit; L2 any digit, no zeros; L3 with zeros; L4 compare digit values.\n\n- [X] T009 [P] [US2] Implement `digit-spotlight` with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n- [X] T010 [P] [US2] Implement `place-value-mystery-number` with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n- [X] T011 [P] [US2] Redesign `syllabus-g2-digit-value-in-three-digit-number` (shared with PV-2), en/fr, tests, in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n\n## Phase 5: User Story 3 - G2-PV-3 Zero holds an empty place (P2)\n\n**Independent test**: L1 spot the empty place; L2 zero in tens; L3 zero in ones or tens; L4 compare like 305 vs 350.\n\n- [X] T012 [P] [US3] Implement `zero-keeper-game` with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n- [X] T013 [P] [US3] Implement `swap-the-zero` with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n\n## Phase 6: User Story 4 - G2-PV-4 Partition a 2-digit number in more than one way (P2)\n\n**Independent test**: L1 one regroup; L2 any regroup; L3 missing part; L4 several ways to one number.\n\n- [X] T014 [P] [US4] Implement `regroup-shuffle` with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n- [X] T015 [P] [US4] Redesign `syllabus-g2-partitions-in-non-standard-ways` as fill-in-the-blank with block hint, en/fr, tests, in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n\n## Phase 7: User Story 5 - G2-PV-5 Show a number in different tens-and-ones ways (P2)\n\n**Independent test**: L1 standard + one alternative; L2 several; L3 find all under a constraint; L4 swap puzzles.\n\n- [X] T016 [P] [US5] Implement `many-ways-to-build` with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n- [X] T017 [P] [US5] Implement `partition-swap-puzzle` with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n\n## Phase 8: User Story 6 - G2-PV-6 Add or subtract 10 in your head (P2)\n\n**Independent test**: L1 no bridging; L2 crossing a hundred (95+10); L3 -10 crossing; L4 mixed, chained. Old slug is ten-only.\n\n- [X] T018 [P] [US6] Implement `ten-more-ten-less-lift` with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n- [X] T019 [P] [US6] Implement `hundred-chart-ten-moves` with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n- [X] T020 [US6] Narrow `syllabus-g2-adds-subtracts-10-or-100` to ten-only (G2-PV-6): remove hundred items, keep slug; update en/fr strings and tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`; keep old competency scoped to ten only in `C:\\Dev\\learnCoreSkills\\subjects\\mathematics\\packages\\syllabus-content-g2\\src\\competencies.ts` (rename id only if tests allow, otherwise keep id and retitle).\n\n## Phase 9: User Story 7 - G2-PV-7 Add or subtract 100 in your head (P2)\n\n**Independent test**: L1 +100 from multiples of 100; L2 any 3-digit +/-100; L3 zeros in tens/ones; L4 chained, never below 0 or above 999.\n\n- [X] T021 [P] [US7] Implement `hundred-tower-builder` with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n- [X] T022 [P] [US7] Implement `odometer-100-more` (new odometer scene if none fits) with ladder, en/fr, tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\activity-engine\\scenes\\` and `...\\content\\`.\n- [X] T023 [US7] Create hundred-only activity `syllabus-g2-adds-subtracts-100` (G2-PV-7) with en/fr strings and tests in `C:\\Dev\\learnCoreSkills\\app\\apps\\web\\src\\content\\`.\n- [X] T024 [US7] Wire the new slug and competency `math.place-value.adds-subtracts-100` in `C:\\Dev\\learnCoreSkills\\subjects\\mathematics\\packages\\syllabus-content-g2\\src\\{content,index,competencies}.ts`; ensure the tracker\'s "one activity primary twice" rule holds.\n\n## Phase 10: Polish and cross-cutting\n\n- [X] T025 Run `scripts/validate.ps1 -Repo all` (read last line: `ALL PASS`) and `syllabus:check`; fix failures.\n- [X] T026 Run competency-coverage-auditor on each G2 PV activity; fix gaps it flags (including any legacy G2 PV activity it flags). Audit run: PV-1..4 covered; PV-5, PV-6, PV-7 partial. Open gaps: all-tens trade-down level (PV-5, `many-ways-to-build`, `partition-swap-puzzle`); 990+10 / 1000-10 and 900+100 / 1000-100 to 1000 (PV-6/PV-7); double-zero numbers 300/700 (PV-3, `zero-keeper-game`); L1 of `block-builder-trade-mat` stops at 300 (PV-1, minor).\n- [X] T027 Verify en/fr parity and reduced-motion behaviour across all new scenes. (Verified: parity PASS for 18 slugs, reduced-motion PASS, determinism tests added for PV-6/PV-7 narrowed slugs. Note: no dedicated en/fr presence test for the two numeric-only activities `syllabus-g2-adds-subtracts-10-or-100` and `syllabus-g2-adds-subtracts-100`; their prompts are identical in en and fr.)\n- [X] T028 Blog write-up in `C:\\Dev\\learnCoreSkills\\blog` (section added to 2026-10-09-grade-1-place-value en+fr); confirm spec -> app -> blog completion rule.\n\n## Dependencies\n\n- Phase 1 -> Phase 2 -> Phases 3-9 (stories independent of each other; T020 before T023/T024 to avoid overlapping edits) -> Phase 10.\n- T008, T011, T015, T020 edit existing slugs; do not run in parallel with other edits to the same file.\n\n## Parallel examples\n\n- After Phase 2: T006, T007, T009, T010, T012, T013, T014, T016, T017, T018, T019, T021 can run in parallel (separate activity files).\n\n## Implementation strategy\n\nMVP = Phase 2 + US1 (PV-1). Then ship each skill as an increment; the split (US6 T020 + US7 T023-T024) ships together. Finish with validation, audit, blog.\n\n## Scene notes (T002)\n\n(to fill during implementation)\n\nBaseline: `syllabus:check` OK.\nExisting scenes live flat in `app/apps/web/src/activity-engine/` (no `scenes/` dir): counters, ten-frame, number-line, count-path, pick-group (registered via `SceneView.tsx`).\n- Reuse counters: bundle-the-hundred, regroup-shuffle, many-ways-to-build, partition-swap-puzzle\n- Reuse number-line: ten-more-ten-less-lift, hundred-chart-ten-moves\n- No scene needed (text/MC): digit-spotlight, place-value-mystery-number, zero-keeper-game, swap-the-zero, hundred-tower-builder\n- NEW scene candidates: trade mat (block-builder-trade-mat, syllabus-g2-partitions-three-digit-numbers), odometer (odometer-100-more)\n',K="# Tasks: Place value (PV) activities, Grade 3\n\n**Input**: spec.md, plan.md. Repos: `M` = `C:\\Dev\\learnCoreSkills\\subjects\\mathematics` (packages/*, src/syllabus/*), `A` = `C:\\Dev\\learnCoreSkills\\app`, `B` = `C:\\Dev\\learnCoreSkills\\blog`.\n**Conventions**: seeded generators; en + fr strings together; unit test per generator/validator; no dev server or GUI automation. Mastery: 5 of 6 at current level, two misses in a row step down (PV-7: none). Validate with `scripts/validate.ps1 -Repo all` and `syllabus:check`. Tests are written alongside each activity (constitution requires per-generator tests).\n\n## Phase 1: Setup\n\n- [ ] T001 Confirm syllabus data state: run `syllabus:check` in M and verify G3-PV-7 is the 4-digit-read row in `M/src/syllabus/fr/G3.json` (done in spec; verification only)\n- [ ] T002 Locate the activity package layout by reading `M/packages/syllabus-content-g3/src/content.ts`, `M/src/syllabus/activityIds.ts` and `M/src/pluginRegistry.ts`; note where to register new slugs and aliases\n\n## Phase 2: Foundational\n\n- [ ] T003 Add a slug alias mechanism (old slug maps to new slug so stored progress carries over) in `M/src/pluginRegistry.ts` or `M/src/syllabus/activityIds.ts`, with a unit test in `M/tests/` (needed by T017)\n\n## Phase 3: US1 - Titles (P1)\n\n**Goal**: FR/EN titles from spec table applied. **Test**: `syllabus:check` passes, titles visible in catalogs.\n\n- [ ] T004 [US1] Apply the 7 FR titles (G3-PV-1..7) in `M/src/syllabus/fr/G3.json` per the spec table\n- [ ] T005 [P] [US1] Apply the 7 EN titles in the en catalog (`M/src/skillsTitles.ts` and/or en syllabus file) per the spec table\n- [ ] T006 [P] [US1] Apply the titles in `C:\\Dev\\learnCoreSkills\\specs\\docs\\syllabus-detailed\\G3.md`\n\n## Phase 4: US2 - PV-1/PV-2 digit value and partitioning (P2)\n\n**Test**: all four new activities plus the tweaked slug pass unit tests; en/fr strings present.\n\n- [ ] T007 [US2] TWEAK `syllabus-g3-digit-value-and-partitioning-4-digit` to a seeded generator in `M/packages/syllabus-content-g3/src/` (shared by PV-1 and PV-2) with test\n- [ ] T008 [P] [US2] New activity `digit-worth-cards` (match-up, PV-1) with generator, validator, en/fr strings, test\n- [ ] T009 [P] [US2] New activity `digit-spotlight` (multiple choice, PV-1) with generator, validator, en/fr strings, test\n- [ ] T010 [P] [US2] New activity `partition-puzzle` (PV-2) with generator, validator, en/fr strings, test\n- [ ] T011 [P] [US2] New activity `zero-placeholder-spot` (PV-2) with generator, validator, en/fr strings, test\n- [ ] T012 [US2] Register PV-1/PV-2 activities in `M/src/syllabus/activityIds.ts` and `M/src/pluginRegistry.ts`\n\n## Phase 5: US3 - PV-3 add/subtract 1, 10, 100, 1000 (P3)\n\n- [ ] T013 [US3] REDESIGN `syllabus-g3-adds-subtracts-1-10-100-1000` in `M/packages/syllabus-content-g3/src/` (seeded, mastery rule)\n- [ ] T014 [P] [US3] New activity `odometer-roll` (dial) with generator, validator, en/fr, test\n- [ ] T015 [P] [US3] New activity `which-digit-changes` with generator, validator, en/fr, test\n- [ ] T016 [P] [US3] New activity `number-hop` with generator, validator, en/fr, test\n- [ ] T016b [US3] Register PV-3 activities in `M/src/syllabus/activityIds.ts` and `M/src/pluginRegistry.ts`\n\n## Phase 6: US4 - PV-4/PV-5 rounding (P4)\n\n- [ ] T017 [US4] Split `syllabus-g3-rounds-to-nearest-10-and-100` into a tens slug (PV-4) and a hundreds slug (PV-5); alias the old slug to the PV-4 one using T003; en + fr strings; test in `M/packages/syllabus-content-g3/src/`\n- [ ] T018 [P] [US4] New activity `round-to-ten-hill` (PV-4) with generator, validator, en/fr, test\n- [ ] T019 [P] [US4] New activity `nearest-ten-sort` (PV-4) with generator, validator, en/fr, test\n- [ ] T020 [P] [US4] New activity `which-hundred-snap` (PV-5) with generator, validator, en/fr, test\n- [ ] T021 [P] [US4] New activity `round-it-right` (PV-5) with generator, validator, en/fr, test\n- [ ] T022 [US4] Register PV-4/PV-5 activities and slugs in `M/src/syllabus/activityIds.ts` and `M/src/pluginRegistry.ts`\n\n## Phase 7: US5 - PV-6 multiply by 10 and 100 (P5)\n\n- [ ] T023 [US5] REDESIGN `syllabus-g3-multiplies-by-10-100-mentally` (flat, x10/x100 on whole numbers only) in `M/packages/syllabus-content-g3/src/`\n- [ ] T024 [US5] REDESIGN `syllabus-g4-multiplies-divides-by-10-100-1000` (flat); re-read the file first, feature 067 may be editing it\n- [ ] T025 [P] [US5] New activity `digit-slide` with generator, validator, en/fr, test\n- [ ] T026 [P] [US5] New activity `where-did-the-zero-go` with generator, validator, en/fr, test\n- [ ] T027 [US5] Register PV-6 activities in `M/src/syllabus/activityIds.ts` and `M/src/pluginRegistry.ts`\n\n## Phase 8: US6 - PV-7 read 4-digit with blocks, introduce-only (P6)\n\n- [ ] T028 [P] [US6] New activity `thousand-block-stack` (explore) with en/fr, test; no mastery gate\n- [ ] T029 [P] [US6] New activity `four-digit-place-peek` (peek) with en/fr, test; no mastery gate\n- [ ] T030 [US6] Completion rule: PV-7 complete after three numbers explored in either activity; register in `M/src/syllabus/activityIds.ts` and `M/src/pluginRegistry.ts`; test\n\n## Phase 9: Polish\n\n- [ ] T031 Run `scripts/validate.ps1 -Repo all` and `syllabus:check`; fix failures\n- [ ] T032 Blog write-up of the feature in `C:\\Dev\\learnCoreSkills\\blog` per `blog/CLAUDE.md`\n\n## Dependencies\n\nT001-T003 first; T003 before T017. US1 independent. US2-US6 independent of each other (separate chats possible); within a story, activities [P] then registration. T032 last.\n\n## Parallel example\n\nT008, T009, T010, T011 together; T018-T021 together; T028 and T029 together.\n\n## Strategy\n\nMVP = US1 (titles) then US2; deliver one story per chat in PV order.\n",q=`# Tasks: 067 — Place value (PV) activities, Grade 4

**Input**: spec.md, plan.md. Repo root: \`C:\\Dev\\learnCoreSkills\\subjects\\mathematics\` (paths below relative to it unless absolute). Strings ship en + fr together. Tests per activity: generator determinism, answer validity, en/fr key parity. Mastery 8/10 default; G4-PV-1 also requires all six places reached.

User stories map to skills: US1 = PV-1, US2 = PV-2, US3 = PV-3, US4 = PV-4, US5 = PV-5, US6 = PV-6.

## Phase 1: Setup

- [X] T001 Confirm syllabus baseline: run \`npm run syllabus:check\` in the mathematics repo and read \`src/syllabus/fr/G4.json\` (PV-3 narrowed, PV-6 replaced).
- [X] T002 Locate where activities are registered: \`src/exerciseDefinitions.ts\`, \`src/pluginRegistry.ts\`, \`skillsTitles.ts\`; note the template used for sort, build, game, matching, error hunt and multiple choice.

## Phase 2: Foundational

- [X] T003 Apply the EN/FR title table from spec.md to \`src/syllabus/fr/G4.json\`, \`src/skillsTitles.ts\` and \`C:\\Dev\\learnCoreSkills\\specs\\docs\\syllabus-detailed\\G4.md\`; regenerate \`syllabus.generated.json\`.
- [X] T004 Move \`thousandths-magnifier\` from G4-PV-3 to G5-PV-6 in \`C:\\Dev\\learnCoreSkills\\specs\\docs\\syllabus-detailed\\G5.md\` and in the G5 syllabus data; remove it from G4.md.
- [X] T005 Add mastery-rule support for G4-PV-1 (8 of 10 with all six places reached); all other skills keep default 8 of 10.

## Phase 3: US1 — G4-PV-1 Digit value to millions

- [X] T006 [P] [US1] Implement new \`digit-value-sort\` (sort) with en/fr strings and tests.
- [X] T007 [P] [US1] Redesign \`syllabus-g4-extends-place-value-to-millions\` as "Digit Detective" multiple choice covering six places, en/fr strings and tests. Digit value only; no order/words (NS owns).

## Phase 4: US2 — G4-PV-2 Expanded form and ten-times rule

- [X] T008 [P] [US2] Implement new \`expanded-form-builder\` (build) with en/fr strings and tests.
- [X] T009 [P] [US2] Implement new \`ten-times-ladder\` (game) with en/fr strings and tests.

## Phase 5: US3 — G4-PV-3 Decimal place value to hundredths

- [ ] T010 [P] [US3] Implement \`decimal-place-value-hundredths\` (G4 version of the G5 slug), hundredths max, en/fr strings and tests.
- [ ] T011 [P] [US3] Implement \`hundredths-magnifier\` trimmed from \`thousandths-magnifier\` (no thousandths zoom), en/fr strings and tests.

## Phase 6: US4 — G4-PV-4 Round whole numbers to any place

- [ ] T012 [P] [US4] Implement new \`round-to-the-landmark\` (game) with en/fr strings and tests.
- [ ] T013 [P] [US4] Implement new \`rounding-place-chooser\` (multiple choice) including rounding to the nearest 1000, en/fr strings and tests.

## Phase 7: US5 — G4-PV-5 Multiply/divide by 10, 100, 1000

- [ ] T014 [P] [US5] Implement new \`digit-slider-machine\` (build) with en/fr strings and tests.
- [ ] T015 [P] [US5] Tweak \`syllabus-g4-multiplies-divides-by-10-100-1000\` into a seeded generator with decimal results (hundredths max, e.g. 4500 ÷ 1000 = 4.5) and zero traps; tests for determinism and no thousandths.

## Phase 8: US6 — G4-PV-6 Divide multiples of 10 and 100 by 10 and 100

- [ ] T016 [P] [US6] Implement new \`undo-the-shift\` (matching) with en/fr strings and tests.
- [ ] T017 [P] [US6] Implement new \`shift-or-zero-trap\` (error hunt) with en/fr strings and tests.

## Phase 9: Polish and cross-cutting

- [ ] T018 Register all new slugs in \`src/exerciseDefinitions.ts\` and \`src/pluginRegistry.ts\`; link each to its skill id in G4 syllabus data and G4.md.
- [ ] T019 Run \`scripts/validate.ps1 -Repo mathematics\` and \`npm run syllabus:check\`; read the last line only. If coverage fails, check for unrelated pre-existing gaps first.
- [ ] T020 Write the blog post in \`C:\\Dev\\learnCoreSkills\\blog\` after implementation (feature is not done without it).

## Dependencies

- Phase 1 then Phase 2 (T003 before T018). T005 before T007.
- Phases 3 to 8 are independent of each other and parallelizable; T018 follows all of them; T019 then T020 last.

## Strategy

MVP: Phase 2 plus US1. Then add stories incrementally, validating after each.

## Auto decisions

- (auto) Tests included as part of each activity task because plan requires per-activity tests.
- (auto) One task per activity slug; user stories map one-to-one to the six skills.
`,J="# Tasks: 068 PV activities, Grade 5\n\n**Input**: `specs/068-pv-g5-activities/spec.md`, `plan.md`\n**Paths**: `M` = `subjects/mathematics`; each activity lives in `M/packages/<slug>/{src,tests}`; registration in `M/src/syllabus/activityIds.ts` and `M/src/syllabus/enrichment/{en,fr}`.\n**Rules for every activity task**: seeded deterministic generator + pure validator with unit tests; levels per mastery (3 correct in a row advances; 8 of 10 at top level); en + fr strings shipped together; register in `activityIds.ts`, enrichment en/fr, and the G5 skill row's activity list. Reuse an existing package or shared generator (digit shift, rounding, number line, comparison) before adding a new package. No dev server launched.\n**Out of scope**: optional `shift-or-zero-trap`, `tenth-twins`.\n\n## Phase 1: Titles and syllabus apply (US1)\n\n- [ ] T001 [US1] Apply the EN/FR title table from spec.md to G5-PV-1..7 in `M/src/syllabus/fr/G5.json` and the G5 md (`specs/docs/syllabus-detailed/G5.md`)\n- [ ] T002 [US1] Confirm `thousandths-magnifier` is listed under G5-PV-6 and absent from G4-PV-3 in the md; run `npm run syllabus:check` in `M` and fix failures\n\n## Phase 2: PV-1 / PV-2 scaling (US2) — independent of phases 3-5\n\n- [ ] T003 [P] [US2] Create `powers-of-ten-slider` (G5-PV-1: multiply/divide decimals by 10, 100, 1000) in `M/packages/powers-of-ten-slider`, with tests, en/fr strings, registration\n- [ ] T004 [P] [US2] Create `digit-shift-machine` (G5-PV-1) in `M/packages/digit-shift-machine`, with tests, en/fr strings, registration\n- [ ] T005 [P] [US2] Create `scale-down-slider` (G5-PV-2: x and / by 0.1 and 0.01) in `M/packages/scale-down-slider`, with tests, en/fr strings, registration\n- [ ] T006 [P] [US2] Create `bigger-or-smaller-sorter` (G5-PV-2) in `M/packages/bigger-or-smaller-sorter`, with tests, en/fr strings, registration\n\n## Phase 3: PV-3 powers of ten (US3)\n\n- [ ] T007 [P] [US3] Create `ten-power-match` (G5-PV-3: read and write powers of 10) in `M/packages/ten-power-match`, with tests, en/fr strings, registration\n- [ ] T008 [P] [US3] Create `exponent-tower-tens` (G5-PV-3) in `M/packages/exponent-tower-tens`, with tests, en/fr strings, registration\n\n## Phase 4: PV-4 / PV-5 rounding (US4)\n\n- [ ] T009 [US4] REDESIGN `syllabus-g5-rounds-decimals-to-given-places` (keep slug): multiple choice with distractors from common errors (truncating, rounding the wrong place); update tests and en/fr strings\n- [ ] T010 [P] [US4] Create `nearest-hundredth-hopper` (G5-PV-4) in `M/packages/nearest-hundredth-hopper`, with tests, en/fr strings, registration\n- [ ] T011 [P] [US4] Create `round-to-fit-the-job` (G5-PV-5) in `M/packages/round-to-fit-the-job`, with tests, en/fr strings, registration\n- [ ] T012 [P] [US4] Create `how-precise-is-enough` (G5-PV-5) in `M/packages/how-precise-is-enough`, with tests, en/fr strings, registration\n\n## Phase 5: PV-6 / PV-7 thousandths (US5)\n\n- [ ] T013 [US5] REDESIGN `syllabus-g5-extends-place-value-right-of-decimal` (keep slug) as the G5-PV-6 home activity; update tests and en/fr strings\n- [ ] T014 [P] [US5] Create `decimal-place-value-chart` (G5-PV-6) in `M/packages/decimal-place-value-chart`, with tests, en/fr strings, registration\n- [ ] T015 [P] [US5] Add a G5 level to `expanded-form-builder` (thousandths) in `M/packages/expanded-form-builder`; reference it from G5-PV-6; tests and en/fr strings\n- [ ] T016 [P] [US5] Add a harder level to `thousandths-magnifier` (same slug) in `M/packages/thousandths-magnifier`; reference from G5-PV-6 only; tests and en/fr strings\n- [ ] T017 [P] [US5] Create `decimal-zoom-line` (G5-PV-7) in `M/packages/decimal-zoom-line`, with tests, en/fr strings, registration\n- [ ] T018 [P] [US5] Create `decimal-order-duel` (G5-PV-7) in `M/packages/decimal-order-duel`, with tests, en/fr strings, registration\n\n## Phase 6: Validate and blog (Polish)\n\n- [ ] T019 Run `scripts/validate.ps1 -Repo all` (lint, typecheck, test, coverage) and `npm run syllabus:check` in `M`; check any failure against the diff before blaming the feature (coverage gate is fragile)\n- [ ] T020 Write the blog post for this feature in `blog/` per `blog/CLAUDE.md` (use the docs-blog skill)\n\n## Dependencies\n\n- T001 -> T002 -> all later phases (titles/registration rows first).\n- Phases 2-5 are independent of each other and can run in separate chats; within phase 4, T009 is independent of T010-T012; within phase 5, T013 should precede T015/T016 (shared G5-PV-6 row).\n- T019 after all of phases 2-5; T020 after T019.\n\n## Implementation strategy\n\nMVP = Phase 1 + Phase 2. Then deliver phases 3, 4, 5 incrementally, one group per chat, running `validate.ps1 -Repo mathematics` at the end of each group.\n",Y='# Tasks: 069 PV G6 activities\n\n**Input**: spec.md, plan.md in this folder. **Repo**: `c:\\Dev\\learnCoreSkills\\subjects\\mathematics` (M) unless stated; blog in `c:\\Dev\\learnCoreSkills\\blog`.\n**Tests**: unit tests per generator are part of the plan (seeded, deterministic, no repeats in a session); coverage gate via `scripts/validate.ps1`.\n**User stories** = the six skills: US1 G6-PV-1, US2 G6-PV-2, US3 G6-PV-3, US6 G6-PV-6, US4 G6-PV-4, US5 G6-PV-5 (practice order PV-1, 2, 3, 6, 4, 5).\nAll strings ship en + fr together. Mastery: 8 of 10 at level 4+, 5 in a row advances a level; five levels per activity.\n\n\n**T002 finding**: G6 skill rows (titles, descriptions, ideas) are read from `src/syllabus/fr/G6.json` plus generated `syllabus.generated.json` (extracted from `specs/docs/syllabus-detailed/G6.md`). No `syllabus-content-g6` package exists. Activities attach via `src/curriculum.ts` (competencies array), `src/exerciseDefinitions.ts` and `src/pluginRegistry.ts`, then `scripts/resolveActivityIds.ts` fills `src/syllabus/activityIds.ts`. FR titles are limited to 60 chars (`syllabus:check`), so G6-PV-3 FR title is "Précision adaptée et estimation à 1 chiffre significatif".\n## Phase 1: Setup\n\n- [X] T001 Apply FR/EN titles from spec.md (full "chiffres significatifs") to M `src/syllabus/fr/G6.json` and `c:\\Dev\\learnCoreSkills\\specs\\docs\\syllabus-detailed\\G6.md`; run `npm run syllabus:check` (must pass, no prerequisite changes)\n- [X] T002 Check how G6 content is read (no `syllabus-content-g6` package exists; g1..g5, p only): confirm activities link to G6 rows via `src/curriculum.ts` / `src/exerciseDefinitions.ts`, and note the finding at the top of this file\n- [X] T003 [P] Scaffold packages `M packages/place-value-sig-figs/` and `M packages/place-value-standard-form/` (`src/{generate,plugin,rng,types,index}.ts`, `tests/`), copying the pattern of `packages/place-value-rounding`\n\n## Phase 2: Foundational (blocks all stories)\n\n- [X] T004 [P] Implement `countSigFigs` and `roundToSigFigs` (decimal-string/BigInt arithmetic, no float) in `M packages/place-value-sig-figs/src/sigfigs.ts` with exhaustive tests in `tests/sigfigs.test.ts` (leading/trailing zeros, ambiguous whole numbers like 1500 avoided or convention stated)\n- [X] T005 [P] Implement `toStandardForm` (large numbers only, A × 10^n, 1 <= A < 10) and formatter in `M packages/place-value-standard-form/src/standardForm.ts` with tests in `tests/standardForm.test.ts`\n- [X] T006 [P] Add shared level bands (L1 whole numbers with obvious zeros ... L5 decimals with leading/trailing zeros and mixed contexts) and seeded no-repeat session helper per package in `src/types.ts` / `src/rng.ts`\n- [X] T007 Check which existing custom activity renderers can be reused (tap-to-select, slider, error hunt, virtual ruler, sort, memory, flashlight) and record in this file before building UI\n  - **T007 finding**: no custom renderers (tap-to-select, slider, error hunt, virtual ruler, sort, memory, flashlight) exist in the mathematics repo; plugins emit presentation data (`kind: "choice"` etc.) and the app renders it. Reuse plan: MC/error-hunt/true-false as `choice`, numeric/fill-in via templates; the other interactions need new presentation kinds, specified when each activity task is built.\n\n## Phase 3: US1 G6-PV-1 Identify significant figures\n\nIndependent test: both activities generate deterministic questions at levels 1-5 with correct sig-fig counts; en + fr strings present.\n\n- [X] T008 [P] [US1] `which-digits-count` (tap-to-select, five levels) generator, plugin, strings, tests in `M packages/place-value-sig-figs/`\n- [X] T009 [P] [US1] `digit-highlighter` (numeric, flashlight) generator, plugin, strings, tests in `M packages/place-value-sig-figs/`\n\n## Phase 4: US2 G6-PV-2 Round to 1, 2 or 3 significant figures\n\nIndependent test: answers equal `roundToSigFigs`; the error-hunt always contains a verifiable mistake.\n\n- [X] T010 [P] [US2] `sf-snap` (slider zoom, numeric) in `M packages/place-value-sig-figs/` with strings and tests\n- [X] T011 [P] [US2] `round-or-wrong` (error hunt) in `M packages/place-value-sig-figs/` with strings and tests\n\n## Phase 5: US3 G6-PV-3 Sensible accuracy, estimate to 1 s.f.\n\nIndependent test: measurement and headline items have one defensible precision; 1 s.f. estimates match `roundToSigFigs`.\n\n- [X] T012 [P] [US3] `measure-to-sf` (multiple choice, virtual ruler) in `M packages/place-value-sig-figs/` with strings and tests\n- [X] T013 [P] [US3] `how-precise-headline` (sort) in `M packages/place-value-sig-figs/` with strings and tests\n\n## Phase 6: US6 G6-PV-6 Zero and negative powers of ten as decimals\n\nIndependent test: only decimals shown for negative powers (no small-number standard form, left for G7); ships without the zoom.\n\n- [X] T014 [P] [US6] `place-value-ladder` (fill-in) in `M packages/place-value-standard-form/` with strings and tests\n- [X] T015 [P] [US6] `exponent-match-up` (memory) in `M packages/place-value-standard-form/` with strings and tests\n\n## Phase 7: US4 G6-PV-4 Write large numbers in standard form\n\n- [X] T016 [P] [US4] `planet-scale-cards` (matching) in `M packages/place-value-standard-form/` with strings and tests\n- [X] T017 [P] [US4] `standard-or-not` (true-false then fix) in `M packages/place-value-standard-form/` with strings and tests\n\n## Phase 8: US5 G6-PV-5 Compare numbers in standard form\n\n- [X] T018 [P] [US5] `biggest-by-exponent` (ordering race) in `M packages/place-value-standard-form/` with strings and tests\n- [X] T019 [P] [US5] `giant-showdown` (multiple choice with reason) in `M packages/place-value-standard-form/` with strings and tests\n\n## Phase 9: Integration\n\n- [X] T020 Register both plugins in M `src/pluginRegistry.ts`, `src/exerciseDefinitions.ts`, `src/curriculum.ts`; link the 11 activities to G6-PV-1..6; run `scripts/resolveActivityIds.ts` and confirm ids appear in `src/syllabus/activityIds.ts`; apply display order PV-1, 2, 3, 6, 4, 5\n- [X] T021 Run `competency-coverage-auditor` per new activity; fix range/sub-skill gaps. Audit run: PV-1, PV-2, PV-5 covered; PV-3, PV-4, PV-6 partial. Open gaps: PV-3 estimate-by-rounding-each + mixed contexts; PV-4 standard form → number (reverse direction); PV-6 fraction form (1/10^n) and 10^0. Proposed: extend `how-precise-headline`, `planet-scale-cards`/`standard-or-not`, `exponent-match-up`. Note: G6 rows live only in `specs/docs/syllabus-detailed/G6.md` (not in MATH-COMPETENCY-REFERENCE.md, which stops at G5).\n- [X] T022 Architect review of module boundaries (new packages, template usage). PASS; advisories (non-blocking): float `Number()` use in `place-value-sig-figs/src/rounding.ts` (distractor shifts) and `place-value-standard-form/src/compare.ts` (mantissa compare); consider string shifts later.\n\n## Phase 10: Deferrable\n\n- [ ] T023 [US6] Build `powers-of-ten-zoom` custom explorable component and activity (en + fr, tests), link to G6-PV-6. May be deferred; PV-6 ships without it\n\n## Phase 11: Polish\n\n- [X] T024 Validate (ran `validate.ps1 -Repo all`: ALL PASS); last line must be `ALL PASS`\n- [X] T025 Blog write-up in `c:\\Dev\\learnCoreSkills\\blog` (section added to 2026-10-09-grade-1-place-value en+fr); spec, implementation and blog exist\n\n## Dependencies\n\n- T001-T003 first; T004-T007 block all story phases.\n- Story phases (3-8) are independent of each other once their package helper exists (sig-figs: T004; standard-form: T005); all marked [P] touch different activity files.\n- T020 after stories; T021-T022 after T020; T024 after T021; T025 last. T023 after T020, optional.\n\n## Strategy\n\nMVP: Phases 1-3 plus T020 (PV-1 shipping end to end), then add stories in practice order. Defer T023 if the component is not ready.\n',ae="# Tasks 070\n\nFormat: [ID] [P] Description. Test = bank, 4 seeded variants/level, en/fr parity.\n\n## Phase 1: Setup\n- [X] T001 Confirm spec 051 F1-F6 scenes are implemented (dependency check only)\n- [X] T002 Reconcile the 27 PK-core skill list against docs/product/maternelle-maths-scope.md; mark skills already at >=3 ludic\n- [X] T003 Check PickGroupScene.tsx:166 44px target, fr scene.pick.groupAria, no-penalty/replay in numeric and MC plugins (FR-5)\n\n- [X] T003a Foundational (spec 051 dependency): new scenes, delivered via spec 051 or mapped to existing scenes before Phase 4: memory-flip (shape-memory, shape-pairs-trail), ramp/race (ramp-race), put-in/on/under (put-it-there)\n- [X] T003b Foundational: cross-scene rules (spec FR-7) in shared scene code: replay-audio button en+fr, aria-labelled icon tiles, static reduced-motion end state, sticker-row reward, tap-to-place on every drag scene, 44px min / 64px aim targets\n\n## Phase 2: OP / ALG (needs 051 F1, F2, F6)\n- [X] T004 [P] Snack Nibbles: pluginId `snack-nibbles`, scene `build-set`, skill K-OP-2 (new). Plugin + en/fr + tests/snack-nibbles.test.ts\n- [X] T005 [P] How Many Left: pluginId `how-many-left`, scene `counters`, skill K-OP-2 (redesign, tap.direction down, tags none). Plugin + en/fr + tests/how-many-left.test.ts\n- [X] T006 [P] One More One Less: pluginId `one-more-one-less`, scene `counters`, skill K-OP-2 (new). Plugin + en/fr + tests/one-more-one-less.test.ts\n- [X] T007 [P] AB Bead String: pluginId `ab-bead-string`, scene `slot-order pattern`, skill K-ALG-1 (new). Plugin + en/fr + tests/ab-bead-string.test.ts\n- [X] T008 [P] Clap Stomp Copy: pluginId `clap-stomp-copy`, scene `slot-order pattern, two tap buttons`, skill K-ALG-1 (new, no mic/motion). Plugin + en/fr + tests/clap-stomp-copy.test.ts\n- [X] T009 [P] Pattern Train: pluginId `pattern-train`, scene `slot-order track`, skill K-ALG-1 (new). Plugin + en/fr + tests/pattern-train.test.ts\n\n## Phase 3: DAT / PSR (needs 051 F1, F4)\n- [X] T010 [P] Odd One Out: pluginId `preschool-odd-one-out`, scene `shape-board`, skill K-DAT-1 (redesign, L3 gated older rung). Plugin + en/fr + tests/preschool-odd-one-out.test.ts\n- [X] T011 [P] Sort the Laundry: pluginId `sort-the-laundry`, scene `build-set sort`, skill K-DAT-1 (new). Plugin + en/fr + tests/sort-the-laundry.test.ts\n- [X] T012 [P] DAT-1 third activity (covered by existing preschool-sort-into-bins, no extra plugin): pluginId `sort-the-laundry`, scene `build-set sort`, skill K-DAT-1 (pick from scope doc). Plugin + en/fr + tests/sort-the-laundry.test.ts\n- [X] T013 [P] Sort and Count: pluginId `preschool-sort-and-count`, scene `build-set sort-into-bins`, skill K-DAT-3 (redesign, MC fallback). Plugin + en/fr + tests/preschool-sort-and-count.test.ts\n- [X] T014 [P] Shoe Shop Pairs: pluginId `shoe-shop-pairs`, scene `build-set pair`, skill K-DAT-3 (new). Plugin + en/fr + tests/shoe-shop-pairs.test.ts\n- [X] T015 [P] DAT-3 third activity (corrected: shoe-shop-pairs is the 2nd; third built as `count-the-groups`): pluginId `count-the-groups`, scene `build-set sort` (tray rows), skill K-DAT-3 (pick from scope doc). Plugin + en/fr + tests/count-the-groups.test.ts\n- [X] T016 [P] Quantity Words: pluginId `preschool-quantity-words`, scene `build-set`, skill K-PSR-1 (keep; verify glyph tap target). Plugin + en/fr + tests/preschool-quantity-words.test.ts\n- [X] T017 [P] Bigger Smaller Basket: pluginId `bigger-smaller-basket`, scene `build-set`, skill K-PSR-1 (new). Plugin + en/fr + tests/bigger-smaller-basket.test.ts\n- [X] T018 [P] PSR-1 third activity (corrected: bigger-smaller-basket is the 2nd; third built as `make-it-fair`): pluginId `make-it-fair`, scene `build-set sort` (two baskets), skill K-PSR-1 (pick from scope doc). Plugin + en/fr + tests/make-it-fair.test.ts\n- [X] T019 [P] Bridge Builder: pluginId `bridge-builder`, scene `grid-moves`, skill K-PSR-4 (new). Plugin + en/fr + tests/bridge-builder.test.ts\n- [X] T020 [P] Build It Again: pluginId `build-it-again`, scene `shape-board`, skill K-PSR-4 (new). Plugin + en/fr + tests/build-it-again.test.ts\n- [X] T021 [P] Puzzle Try Again: pluginId `puzzle-try-again`, scene `shape-board`, skill K-PSR-4 (new). Plugin + en/fr + tests/puzzle-try-again.test.ts\n\n## Phase 4: GEO / POS (needs 051 F3, F4 + T003a; exactly 3 per skill)\n- [X] T22 GEO-1: name-shapes, shape-bingo (pick-group with art keys), shape-sorter-box; tests each\n- [X] T23 GEO-3: match-shapes, shape-memory (2x2 max, memory-flip scene), shape-pairs-trail (4-pair trail, or merge into shape-memory and pick another); exactly 3; tests each\n- [X] T24 GEO-8: choose 3 of roll-or-stack, solids-roll-bins (new: pick-group multi, roll/stack), ramp-race, bigger-shape; tests each\n- [X] T25 GEO-9: tangram-two, fill-the-outline (merge into tangram-two, or 4-piece fill with an outline other than bigger-shape L3 house/boat), plus one existing; exactly 3; tests each\n- [X] T26 POS-1: where-is-the-ball, put-it-there (put-in/on/under scene), teddy-room-tidy (tap-to-place only; hide-the-teddy belongs to K-POS-2); tests each\n- [X] T27 POS-4: robot-says, move-like-me (tap-to-copy sequence, max 3 moves, not a body mirror), robot-dance-moves (3x3 grid-moves route, max 3 moves, tap-to-copy; distinct from K-POS-5 robot-grid-moves); tests each\n\n## Phase 5: MEA / TIM (needs 051 F2, F5; exactly 3 per skill)\n- [X] T028 [P] Size Word Sort: pluginId `size-word-sort`, scene `measure-compare`, skill K-MEA-1 (new). Plugin + en/fr + tests/size-word-sort.test.ts\n- [x] T029 (removed) Which Word Fits moved out to G3; not K-MEA-1\n- [X] T030 [P] Line Up the Ends: pluginId `line-up-the-ends`, scene `measure-compare length align`, skill K-MEA-2 (new; source PK.MEA.2, K.MEA.2). Plugin + en/fr + tests/line-up-the-ends.test.ts\n- [X] T031 [P] Build a Longer: pluginId `build-a-longer`, scene `measure-compare`, skill K-MEA-2 (new; source PK.MEA.2, K.MEA.2). Plugin + en/fr + tests/build-a-longer.test.ts\n- [X] T032 [P] Balance Play: pluginId `balance-play`, scene `measure-compare weight tip`, skill K-MEA-3 (new). Plugin + en/fr + tests/balance-play.test.ts\n- [X] T033 [P] Heavy Light Bins: pluginId `heavy-light-bins`, scene `build-set sort`, skill K-MEA-3 (new; source K.MEA.2 mass). Plugin + en/fr + tests/heavy-light-bins.test.ts\n- [X] T034 [P] Size Train: pluginId `size-train`, scene `slot-order size`, skill K-MEA-6 (new; 3/4/5 items per level, tap-to-place, static end state). Plugin + en/fr + tests/size-train.test.ts\n- [X] T035 [P] Story Strip Order: pluginId `story-strip-order`, scene `slot-order strip`, skill K-TIM-1 (new). Plugin + en/fr + tests/story-strip-order.test.ts\n- [X] T036 [P] What Comes Next: pluginId `what-comes-next`, scene `slot-order strip`, skill K-TIM-1 (new). Plugin + en/fr + tests/what-comes-next.test.ts\n- [X] T037 [P] Before Now Later: pluginId `before-now-later`, scene `slot-order strip`, skill K-TIM-2 (new). Plugin + en/fr + tests/before-now-later.test.ts\n- [X] T038 [P] Before After Pairs: pluginId `before-after-pairs`, scene `slot-order strip`, skill K-TIM-2 (new). Plugin + en/fr + tests/before-after-pairs.test.ts\n- [X] T039 [P] Time Word Sort: pluginId `time-word-sort`, scene `build-set sort`, skill K-TIM-3 (new; source PK.TIM.2). Plugin + en/fr + tests/time-word-sort.test.ts\n- [X] T040 [P] Sun Moon Sort: pluginId `sun-moon-sort`, scene `slot-order sky`, skill K-TIM-3 (new; day/night L1, morning/evening L3). Plugin + en/fr + tests/sun-moon-sort.test.ts\n- [X] T041 [P] Sky Clock Order: pluginId `sky-clock-order`, scene `slot-order sky`, skill K-TIM-3 (new; source PK.TIM.2). Plugin + en/fr + tests/sky-clock-order.test.ts\n\n- [X] T041a [P] MEA-1 third activity (replaces which-word-fits): pluginId `size-word-match`, scene `measure-compare`, skill K-MEA-1 (preschool-what-to-measure + size-word-sort + this = 3; source PK.MEA.1, K.MEA.1)\n- [X] T041b RESOLVED by PM: MEA-2 = longer-or-shorter(redesign)+line-up-the-ends+build-a-longer; MEA-3 = heavy-or-light(redesign)+balance-play+heavy-light-bins; MEA-6 = 2 existing seriation (redesign)+size-train; TIM-1 = routine-order(redesign)+story-strip-order+what-comes-next; TIM-2 = before-now-later+before-after-pairs+time-word-sort; TIM-3 = existing(redesign)+sun-moon-sort+sky-clock-order. No further TBD.\n\n## Phase 6: Polish and release\n- [X] T42 (tests/pkCoreCoverage.test.ts; shoe-shop-pairs and bigger-smaller-basket now the third activities, allowlist removed) Coverage check: each of the 27 skills has >=3 non-MC plugins in registry (one test)\n- [X] T43 scripts/validate.ps1 -Repo all is ALL PASS\n- [X] T44 ../app/scripts/build.ps1 succeeds\n- [X] T45 Blog post in c:\\Dev\\learnCoreSkills\\blog per blog/CLAUDE.md; update docs/activity-sweep/tracker.md Spec column to 070\n\n## Phase 7: Placeholder - spec 071 (not this spec)\n- [ ] T46 Remaining 54 K-only skills move to follow-up spec 071 (owner confirmed keep all K skills); create 071 after 070 ships\n\n## Added by PM 2026-10-10 (third activities)\n- [X] T100 [P] K-GEO-3 `shape-shadow-match` (shape-board match to silhouettes). Plugin + en/fr + bank test (4 seeded variants/level)\n- [X] T101 [P] K-GEO-8 `stack-the-tower` (build-set; rollers fall back). Plugin + en/fr + test\n- [X] T102 [P] K-GEO-9 `two-make-one` (shape-board compose, 2 pieces). Plugin + en/fr + test\n- [X] T103 [P] K-POS-1 `find-the-toy` (pick-group, art keys, position words). Plugin + en/fr + test\n- [X] T104 Add these four slugs to docs/syllabus-detailed/K.md and fr/K.json together; run syllabus:extract, syllabus:ids, syllabus:check (must print OK)\n",oe='# Tasks: Preschool Second Release\n\n**Input**: [spec.md](./spec.md), [plan.md](./plan.md). Paths are relative to `subjects/mathematics`\n(the `mathematics` repo). One group per activity (or merged activity), same convention as\n`045-preschool-first-release/tasks.md`. Validate with\n`scripts/validate.ps1 -Repo mathematics -Quick`, full `scripts/validate.ps1 -Repo mathematics` at\nthe end.\n\n## Phase 0: Dependency + shared-helper check (blocks the matching group, A38-A40)\n\n- [X] T001 Add `@learncoreskills/template-matching` to `packages/syllabus-content-p/package.json`\'s\n      `dependencies` (it is currently missing — verified 2026-09-27; `template-fill-in-the-blank`\n      is already present from 045, unused until this feature). Run `npm install` from the repo root\n      to refresh `package-lock.json`.\n- [X] T002 Read `packages/syllabus-content-p/src/banks/helpers.ts` and confirm it already covers\n      what this batch needs (`mcEntry`, `mcEntryLoc`, `tfEntry`, `numEntry`, `dedupe`, `OBJECTS`,\n      `EM`, `WIDE`, `keycap`, `fives`, `cellRows`, `LEVELS`, `Level`). Add a `fibEntry` helper\n      (grade, `{en,fr}` prompt-with-blank + answer) and a `matchEntry` helper (grade, `{en,fr}`\n      pairs) only if no equivalent exists yet — check `template-fill-in-the-blank`\'s\n      `FillInBlankContentEntry` and `template-matching`\'s `MatchingContentEntry` shapes first,\n      since a thin builder may not be needed if the raw entry object is already simple enough (045\n      never needed FIB/matching helpers because it used neither template).\n\n## Group A22/A23 - E3 A/B Cardinality (MC + TF) `preschool-cardinality`\n\n- [X] T010 [A22] Competency `math.number-sense.preschool-cardinality` in\n      `src/competencies.ts` (gradeCount 3, frameworkSkillId `mathematics.P.0`, using the existing\n      `preschool(...)` helper).\n- [X] T011 [A22] Bank `src/banks/cardinality.ts` `buildHowManyAllTogetherBank()`: count objects,\n      hide them, pick the numeral. L1 1-5, L2 6-10, L3 11-20.\n- [X] T012 [A22] Plugin `preschool-how-many-all-together` (MC) in `src/content.ts`; exercise entry\n      in `src/index.ts`\'s `ACTIVITIES`; tests in `tests/how-many-all-together.test.ts`.\n- [X] T013 [A23] Bank `src/banks/cardinality.ts` `buildHowManyLastTagBank()` (TF): a statement of\n      the total is judged true/false against a highlighted last count-word; false cases are\n      off-by-one, a rearranged row, or an object added after tagging (section 5 rewording — not\n      "is the pile 5?"). Plugin `preschool-how-many-last-tag` (TF) on the same competency;\n      exercise entry; tests in `tests/how-many-last-tag.test.ts`.\n\n## Group A24 - E6 A Hidden Bag (MC) `preschool-count-on`\n\n- [X] T020 [A24] Competency `math.number-sense.preschool-count-on` (`mathematics.P.0`).\n- [X] T021 [A24] Bank `src/banks/countOn.ts`: some objects shown, some under a bag/cloth, "start\n      counting at N, what comes next?". L1 start from 2, L2 start from 4-6, L3 start from any\n      value ≤10.\n- [X] T022 [A24] Plugin `preschool-hidden-bag` (MC); exercise; tests `tests/hidden-bag.test.ts`.\n\n## Group A25 - E7 Neighbour Houses (A+B merged, FIB) `preschool-before-after`\n\n- [X] T030 [A25] Competency `math.number-sense.preschool-before-after` (`mathematics.P.0`).\n- [X] T031 [A25] Bank `src/banks/beforeAfter.ts` `buildNeighbourHousesBank()`: a street of\n      numbered houses, fill in the missing house number. L1 "after" only, houses 1-5. L2 "before"\n      and "after" mixed, houses 1-9. L3 mixed before/after, houses ≤10. B\'s redundant "which comes\n      first" MC is not shipped separately (section 5 "E7 A+B merge").\n- [X] T032 [A25] Plugin `preschool-neighbour-houses` (`createFillInBlankPlugin`); exercise; tests\n      `tests/neighbour-houses.test.ts` (include a case asserting the answer accepts the numeral as\n      a bare string, per `template-fill-in-the-blank`\'s case-insensitive trimmed match).\n\n## Group A26 - E10 B Pick the Right Way (MC) `preschool-numeral-formation`\n\n- [X] T040 [A26] Competency `math.number-sense.preschool-numeral-formation` (`mathematics.P.3`).\n- [X] T041 [A26] Bank `src/banks/numeralFormation.ts`: pick the correctly-oriented numeral among\n      reversed-numeral distractors (candidates for reversal: 2, 3, 5, 7, 9 and mirrored 6/9 pairs).\n      L1 numerals 0-5, L2 0-9, L3 the hardest reversal per digit. Not E10 A (handwriting canvas\n      does not exist — explicitly out of scope, see spec.md).\n- [X] T042 [A26] Plugin `preschool-pick-the-right-way` (MC); exercise; tests\n      `tests/pick-the-right-way.test.ts`.\n\n## Group A27/A28 - E11 A/B Zero (MC + TF) `preschool-zero`\n\n- [X] T050 [A27] Competency `math.number-sense.preschool-zero` (`mathematics.P.0`).\n- [X] T051 [A27] Bank `src/banks/zero.ts` `buildEmptyBasketBank()`: objects removed one by one,\n      pick the numeral for how many remain, down to 0. L1 starts at 3, L2 starts at 5, L3 starts\n      anywhere 0-5.\n- [X] T052 [A27] Plugin `preschool-empty-basket` (MC); exercise; tests\n      `tests/empty-basket.test.ts`.\n- [X] T053 [A28] Bank `src/banks/zero.ts` `buildIsZeroANumberBank()` (TF): empty vs non-empty\n      group / two different empty containers / general "zero is a number" statements. Plugin\n      `preschool-is-zero-a-number` (TF) on the same competency; exercise; tests\n      `tests/is-zero-a-number.test.ts`.\n\n## Group A29/A30 - E13 A/B Conservation (TF + MC) `preschool-conservation`\n\n- [X] T060 [A29] Competency `math.comparing-ordering.preschool-conservation` (`mathematics.P.2`).\n- [X] T061 [A29] Bank `src/banks/conservation.ts` `buildStillTheSameBank()` (TF): two equal-count\n      rows, one visually altered. L1 spread only (statement true). L2 both rows change (mix of\n      true/false). L3 an object is added after the claim (statement false).\n- [X] T062 [A29] Plugin `preschool-still-the-same` (TF); exercise; tests\n      `tests/still-the-same.test.ts`.\n- [X] T063 [A30] Bank `src/banks/conservation.ts` `buildWhichRowHasMoreBank()` (MC): equal counts,\n      different visual lengths; options include "same"/"neither" as the correct answer. L3 MUST\n      include at least one case where the visually longer row has fewer items (length is a trap,\n      per spec.md Edge Cases). Plugin `preschool-which-row-has-more` (MC) on the same competency;\n      exercise; tests `tests/which-row-has-more.test.ts` asserting the L3 length-trap case exists.\n\n## Group A31/A32/A33 - E15 A/B/C Ordinals (MC x3) `preschool-ordinals`\n\n- [X] T070 [A31] Competency `math.number-sense.preschool-ordinals` (no `frameworkSkillId` — no\n      exact P bullet, same pattern as 045\'s `preschoolPatternsCompetency`).\n- [X] T071 [A31] Bank `src/banks/ordinals.ts` `buildWhoIsNthBank()`: row of characters/objects,\n      pick which is in the Nth position. L1 1st-3rd of 3, upright. L2 1st-5th of 5, upright. L3\n      row order flipped (reading direction reversed).\n- [X] T072 [A31] Plugin `preschool-who-is-nth` (MC); exercise; tests `tests/who-is-nth.test.ts`.\n- [X] T073 [A32] Bank `src/banks/ordinals.ts` `buildOrdinalOrCountBank()`: same picture, question\n      alternates between an ordinal-position prompt ("which one is 3rd?") and a cardinal-count\n      prompt ("how many are there?"), options are items/numerals respectively. Plugin\n      `preschool-ordinal-or-count` (MC) on the same competency; exercise; tests\n      `tests/ordinal-or-count.test.ts`.\n- [X] T074 [A33] Bank `src/banks/ordinals.ts` `buildColourTheNthBank()` (section 5 rewording — not\n      the ORD "place the runner" version): "which one would you colour to show the 2nd?" L1 2nd of\n      3, L2 3rd of 5, L3 4th of 5. Plugin `preschool-colour-the-nth` (MC) on the same competency;\n      exercise; tests `tests/colour-the-nth.test.ts`.\n\n## Group A34/A35 - E18 Decompose Five (FIB merged + MC) `preschool-decompose-five`\n\n- [X] T080 [A34] Competency `math.addition.preschool-decompose-five` (`mathematics.P.4`).\n- [X] T081 [A34] Bank `src/banks/decomposeFive.ts` `buildTwoHandsBank()` (FIB; E16 C + E18 A\n      merged per section 5): "_ and 3 make 5" style prompts. L1 one blank, missing part always on\n      the right. L2 one blank, missing part on either side. L3 both blanks unknown (given only the\n      total 5).\n- [X] T082 [A34] Plugin `preschool-two-hands` (`createFillInBlankPlugin`); exercise; tests\n      `tests/two-hands.test.ts`.\n- [X] T083 [A35] Bank `src/banks/decomposeFive.ts` `buildAnotherWayBank()` (MC): given one split of\n      5, pick a *different* valid split; mirror/reversed splits of the same pair (e.g. 2+3 vs 3+2)\n      are excluded as distractors, per section 5. Plugin `preschool-another-way` (MC) on the same\n      competency; exercise; tests `tests/another-way.test.ts` asserting no mirror-split distractor\n      ever appears.\n\n## Group A36/A37 - E19 A/B Story Problems (MC + NUM) `preschool-story-problems`\n\n- [X] T090 [A36] Competency `math.problem-solving.preschool-story-problems` (`mathematics.P.4`,\n      following the `math.problem-solving.*` prefix precedent set by G1\'s\n      `choose-addition-or-subtraction`).\n- [X] T091 [A36] Bank `src/banks/storyProblems.ts` `buildStoryPlusOrMinusBank()`: short join/\n      take-away scenario, pick + or −. L1 join-only. L2 join and take-away scenarios kept clearly\n      separate. L3 mixed, less telegraphed wording.\n- [X] T092 [A36] Plugin `preschool-story-plus-or-minus` (MC); exercise; tests\n      `tests/story-plus-or-minus.test.ts`.\n- [X] T093 [A37] Bank `src/banks/storyProblems.ts` `buildSolveItBank()` (NUM): join or take-away\n      scenario, type the numeric answer (prompt must read correctly with the app\'s appended\n      " = ?", per FR-007). L1 sums/differences ≤5, L2 ≤8, L3 ≤10. Plugin `preschool-solve-it`\n      (NUM) on the same competency; exercise; tests `tests/solve-it.test.ts`.\n\n## Group A38/A39/A40 - E21 Solids (MC + MC + Matching) `preschool-solids`\n\n- [X] T100 [A38] Competency `math.geometry.preschool-solids` (`mathematics.P.8`).\n- [X] T101 [A38] Bank `src/banks/solids.ts` `buildSolidOrFlatBank()`: named/pictured object, pick\n      solid (3D) vs flat (2D). L1 ball vs circle / cube vs square (clear pairs). L2 more pairs\n      (cone vs triangle, cylinder vs rectangle). L3 mixed with distractor words.\n- [X] T102 [A38] Plugin `preschool-solid-or-flat` (MC); exercise; tests\n      `tests/solid-or-flat.test.ts`.\n- [X] T103 [A39] Bank `src/banks/solids.ts` `buildNameTheThingBank()`: picture/description of a\n      solid (ball, dice/cube, party hat/cone, tin/cylinder), pick its name. Plugin\n      `preschool-name-the-thing` (MC) on the same competency; exercise; tests\n      `tests/name-the-thing.test.ts`.\n- [X] T104 [A40] Bank `src/banks/solids.ts` `buildSolidMatchBank()` (`MatchingContentEntry[]`):\n      solid name ↔ example object. L1 4 pairs, L2 5 pairs, L3 6 pairs (each level\'s pairs\n      distinct, per FR-002\'s ≥4-pairs-per-level bar). Plugin `preschool-solid-match`\n      (`createMatchingPlugin`) on the same competency; exercise; tests\n      `tests/solid-match.test.ts` (uses `template-matching`\'s per-pair-choice contract — see\n      `classifiesTriangles` in `packages/syllabus-content-g3/src/content.ts` for the shape to\n      follow).\n\n## Group A41/A42 - E22 A/B Sides & Corners (NUM + MC) `preschool-sides-corners`\n\n- [X] T110 [A41] Competency `math.geometry.preschool-sides-corners` (`mathematics.P.8`).\n- [X] T111 [A41] Bank `src/banks/sidesCorners.ts` `buildCountTheSidesBank()` (NUM): shape with\n      sides marked, count and type how many. L1 3-4 sides (triangle, square). L2 up to 6 (add\n      pentagon, hexagon). L3 circle included as a genuine 0-sides case.\n- [X] T112 [A41] Plugin `preschool-count-the-sides` (NUM); exercise; tests\n      `tests/count-the-sides.test.ts`.\n- [X] T113 [A42] Bank `src/banks/sidesCorners.ts` `buildSidesOrCornersBank()` (MC): does a stated\n      number refer to a shape\'s sides or corners. L1-L2 clear cases across more shapes. L3 circle\n      included as a genuine 0/0 trick option (per spec.md Edge Cases), not merely a distractor\n      name. Plugin `preschool-sides-or-corners` (MC) on the same competency; exercise; tests\n      `tests/sides-or-corners.test.ts` asserting the L3 circle 0/0 case exists.\n\n## Group A43 - E24 A Robot Says (MC) `preschool-movement`\n\n- [X] T120 [A43] Competency `math.geometry.preschool-movement` (`mathematics.P.9`).\n- [X] T121 [A43] Bank `src/banks/movement.ts`: pick the correct instruction to move a robot to a\n      target. L1 forward/back only. L2 up/down only. L3 a two-step instruction (e.g. forward then\n      up). Not E24 B/C (grid-movement component does not exist — explicitly out of scope).\n- [X] T122 [A43] Plugin `preschool-robot-says` (MC); exercise; tests\n      `tests/robot-says.test.ts`.\n\n## Group A44 - E26 B Which Goes in the Middle? (MC) `preschool-order-by-size`\n\n- [X] T130 [A44] Competency `math.measurement.preschool-order-by-size` (`mathematics.P.5`).\n- [X] T131 [A44] Bank `src/banks/orderBySize.ts`: three objects of different sizes, pick which\n      belongs in the middle once ordered by size. L1 clearly different sizes. L2 closer sizes. L3\n      mixed orientation/rotation of the objects (visual size cue less obvious). Not E26 A/C (ORD\n      template unusable — explicitly out of scope).\n- [X] T132 [A44] Plugin `preschool-goes-in-the-middle` (MC); exercise; tests\n      `tests/goes-in-the-middle.test.ts`.\n\n## Group A45 - E27 B Odd One Out (MC) `preschool-sorting`\n\n- [X] T140 [A45] Competency `math.mathematical-reasoning.preschool-sorting` (no\n      `frameworkSkillId` — no exact P bullet).\n- [X] T141 [A45] Bank `src/banks/sorting.ts`: small set of objects, pick the one that doesn\'t\n      belong. L1 odd-one-out by colour. L2 by shape. L3 by size, with more visual distractors.\n      Not E27 A/C (drag-to-bins component does not exist — explicitly out of scope).\n- [X] T142 [A45] Plugin `preschool-odd-one-out` (MC); exercise; tests\n      `tests/odd-one-out.test.ts`.\n\n## Group A46 - E28 Name the Group (MC, reworded from FIB) `preschool-name-the-rule`\n\n- [X] T150 [A46] Competency `math.mathematical-reasoning.preschool-name-the-rule` (no\n      `frameworkSkillId`).\n- [X] T151 [A46] Bank `src/banks/nameTheRule.ts`: a group of objects sharing a rule/attribute, pick\n      (from picture/word options, not typed text — section 5\'s "picture-tap MC" fix) which option\n      best names the group\'s rule. L1 2 options. L2 3 options. L3 word + picture options mixed.\n- [X] T152 [A46] Plugin `preschool-name-the-group` (MC); exercise; tests\n      `tests/name-the-group.test.ts`.\n\n## Group A47 - E30 Fill the Gap (MC, reworded from FIB) `preschool-missing-item`\n\n- [X] T160 [A47] Competency `math.mathematical-reasoning.preschool-missing-item` (no\n      `frameworkSkillId`).\n- [X] T161 [A47] Bank `src/banks/missingItem.ts`: a simple visual pattern with one item missing,\n      pick (from picture options — section 5\'s "picture-tap MC" fix, not typed text) which item\n      fills the gap. L1 AB pattern gap. L2 AAB/ABB pattern gap. L3 ABC pattern gap.\n- [X] T162 [A47] Plugin `preschool-fill-the-gap` (MC); exercise; tests\n      `tests/fill-the-gap.test.ts`.\n\n## Group A48 - E31 When Does It Happen? / Sun or Moon? (MC, A+C merged) `preschool-parts-of-day`\n\n- [X] T170 [A48] Competency `math.time.preschool-parts-of-day` (`mathematics.P.6`).\n- [X] T171 [A48] Bank `src/banks/partsOfDay.ts`: daily-activity picture/description, pick which\n      part of day it happens in. L1 a direct 2-option Sun/Moon choice (folds in former E31 C\'s\n      TF content as a 2-option MC, per section 5\'s "E31 C merge into A"). L2 morning/afternoon/\n      evening (3 options). L3 the full day-part set used at L2 plus night, harder scenarios.\n- [X] T172 [A48] Plugin `preschool-when-does-it-happen` (MC); exercise; tests\n      `tests/when-does-it-happen.test.ts`.\n\n## Group A49/A50 - E33 A/B Yesterday, Today, Tomorrow (MC + FIB) `preschool-yesterday-today-tomorrow`\n\n- [X] T180 [A49] Competency `math.time.preschool-yesterday-today-tomorrow` (`mathematics.P.7`).\n- [X] T181 [A49] Bank `src/banks/yesterdayTodayTomorrow.ts` `buildYtTBank()`: 3-day strip, label a\n      highlighted day/event as yesterday/today/tomorrow. L1 simple strip. L2 strip with a named\n      event on one day. L3 strip presented in reversed order.\n- [X] T182 [A49] Plugin `preschool-yesterday-today-tomorrow` (MC); exercise; tests\n      `tests/yesterday-today-tomorrow.test.ts`.\n- [X] T183 [A50] Bank `src/banks/yesterdayTodayTomorrow.ts` `buildWhatDayWasItBank()` (FIB,\n      section 5: made dependent on E32\'s day-of-week sequence rather than abstract yesterday/\n      today/tomorrow): "today is <weekday>, so yesterday was ___" / "...tomorrow will be ___",\n      using the same Sun-Sat week sequence as the already-shipped `preschool-days-in-order` /\n      `preschool-day-after` banks (`packages/syllabus-content-p/src/banks/days.ts`) so the two\n      features never disagree on the week\'s order. Plugin `preschool-what-day-was-it`\n      (`createFillInBlankPlugin`) on the same competency; exercise; tests\n      `tests/what-day-was-it.test.ts`.\n\n## Final phase\n\n- [X] T900 Run `scripts/validate.ps1 -Repo mathematics` (full, with coverage) and `npm run build`;\n      fix failures. Confirm no existing 045 test, bank, competency id, or `ACTIVITIES` row changed\n      (diff review against `045-preschool-first-release`\'s merged state), per spec.md FR-005 and\n      SC-004.\n\n## Notes for `activity-implementer`\n\n- `packages/syllabus-content-p/src/index.ts`\'s `ACTIVITIES` array: append all 29 new rows after\n  the existing A01-A21 rows (`content.dayAfter` is currently last); keep the `[plugin, label, icon,\n  competency]` tuple shape `source()` expects.\n- No task in this file touches `mathematics/src/curriculum.ts`, `src/pluginRegistry.ts`, or\n  `src/exerciseDefinitions.ts` — verify that stays true; if `npm run build`/tests reveal those DO\n  need a change, stop and re-check plan.md\'s "Verified before scoping this feature" claim before\n  proceeding (it may mean the 045 wiring assumption doesn\'t hold for a new export shape, e.g. the\n  matching plugin\'s answer type).\n- The three must-carry-forward corrections (E8 B, E14 A, E20 A) are already verified compliant in\n  the existing 045 code (spec.md "Verified before scoping this feature") — no task in this file\n  changes `numeralTwins.ts`, `compareNumerals.ts`, or `shapes.ts`; do not add one unless a test\n  written for this feature actually contradicts that verification.\n';function se(e,t){return/^#\s+(.+)$/m.exec(e)?.[1]?.trim()??t}var ce=Object.assign({"../../../../../specs/specs/001-competency-model/spec.md":a,"../../../../../specs/specs/003-mastery-engine/spec.md":o,"../../../../../specs/specs/005-daily-practice/spec.md":s,"../../../../../specs/specs/007-printable-worksheets/spec.md":c,"../../../../../specs/specs/008-teacher-mode/spec.md":l,"../../../../../specs/specs/019-per-topic-grade-progression/spec.md":u,"../../../../../specs/specs/032-indexeddb-persistence/spec.md":d,"../../../../../specs/specs/034-ordering-activity-template/spec.md":f,"../../../../../specs/specs/050-touch-once-redesign/spec.md":p,"../../../../../specs/specs/051-preschool-scene-redesigns/spec.md":m,"../../../../../specs/specs/057-detailed-syllabus-migration/spec.md":h,"../../../../../specs/specs/058-adsense-compliance/spec.md":g,"../../../../../specs/specs/059-k-number-sense-complete/spec.md":_,"../../../../../specs/specs/060-fluid-navigation/spec.md":v,"../../../../../specs/specs/061-home-marketing-ad/spec.md":y,"../../../../../specs/specs/062-pv-maternelle-activities/spec.md":b,"../../../../../specs/specs/063-progress-single-store/spec.md":x,"../../../../../specs/specs/064-pv-g1-activities/spec.md":S,"../../../../../specs/specs/065-pv-g2-activities/spec.md":C,"../../../../../specs/specs/066-pv-g3-activities/spec.md":w,"../../../../../specs/specs/067-pv-g4-activities/spec.md":T,"../../../../../specs/specs/068-pv-g5-activities/spec.md":E,"../../../../../specs/specs/069-pv-g6-activities/spec.md":D,"../../../../../specs/specs/070-maternelle-pk-core-activities/spec.md":O,"../../../../../specs/specs/preschool-second-release/spec.md":k}),le=Object.assign({"../../../../../specs/specs/001-competency-model/tasks.md":A,"../../../../../specs/specs/003-mastery-engine/tasks.md":j,"../../../../../specs/specs/005-daily-practice/tasks.md":M,"../../../../../specs/specs/019-per-topic-grade-progression/tasks.md":ie,"../../../../../specs/specs/032-indexeddb-persistence/tasks.md":N,"../../../../../specs/specs/034-ordering-activity-template/tasks.md":P,"../../../../../specs/specs/050-touch-once-redesign/tasks.md":F,"../../../../../specs/specs/051-preschool-scene-redesigns/tasks.md":I,"../../../../../specs/specs/057-detailed-syllabus-migration/tasks.md":L,"../../../../../specs/specs/058-adsense-compliance/tasks.md":R,"../../../../../specs/specs/059-k-number-sense-complete/tasks.md":z,"../../../../../specs/specs/060-fluid-navigation/tasks.md":B,"../../../../../specs/specs/061-home-marketing-ad/tasks.md":V,"../../../../../specs/specs/062-pv-maternelle-activities/tasks.md":H,"../../../../../specs/specs/063-progress-single-store/tasks.md":U,"../../../../../specs/specs/064-pv-g1-activities/tasks.md":W,"../../../../../specs/specs/065-pv-g2-activities/tasks.md":G,"../../../../../specs/specs/066-pv-g3-activities/tasks.md":K,"../../../../../specs/specs/067-pv-g4-activities/tasks.md":q,"../../../../../specs/specs/068-pv-g5-activities/tasks.md":J,"../../../../../specs/specs/069-pv-g6-activities/tasks.md":Y,"../../../../../specs/specs/070-maternelle-pk-core-activities/tasks.md":ae,"../../../../../specs/specs/preschool-second-release/tasks.md":oe});function X(e){let t=e.split(`/`);return t[t.length-2]??e}function ue(e){return Object.entries(le).find(([t])=>X(t.replace(/tasks\.md$/,`spec.md`))===e)?.[1]??null}function de(){return Object.entries(ce).map(([e,t])=>{let n=X(e);return{id:n,title:se(t,n),category:`spec`,status:i(ue(n)),content:t}})}var Z=de(),Q=[...Z],$;function fe(e){return $===void 0&&($=ne(e).then(e=>e.status===`loaded`?(Q.splice(0,Q.length,...Z,...e.entries),`loaded`):`unavailable`)),$}function pe(){let[e,t]=(0,r.useState)({status:`not-yet-fetched`});return(0,r.useEffect)(()=>{let e=!1;return t({status:`loading`}),fe().then(n=>{e||t(n===`loaded`?{status:`loaded`,entries:Q}:{status:`unavailable`})}),()=>{e=!0}},[]),e}export{Q as n,re as r,pe as t};