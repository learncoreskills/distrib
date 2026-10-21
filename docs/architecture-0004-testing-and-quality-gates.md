# ADR-0004: Testing & Quality Gates

## Status
Accepted — 2026-09-13. **Updated 2026-09-13 following ADR-0006**: the split below now applies to
packages within the single TypeScript workspace, not to a separate backend repo. The coverage
philosophy and thresholds are unchanged; only "which repo/language" changed. **Updated 2026-09-13
following ADR-0007**: the app-shell/UI layer is React, not Angular; the coverage split and
thresholds are unaffected.

## Context
The product owner asked for "enterprise-level quality" software. Per ADR-0006, all
determinism-critical logic (Constitution Principle VI) — competency model, plugin engine, mastery
formula, exercise plugins — lives in independent TypeScript packages inside the workspace, separate
from the React app-shell/UI code (ADR-0007) that consumes them.

## Decision

### Coverage gates (enforced in CI, blocks merge on failure)
* **Core logic packages** (competency model, exercise plugin engine, mastery engine, individual
  exercise plugins — e.g. `packages/core/*`, `packages/exercises/*`) — **95%+ line and branch
  coverage**, hard gate. These are pure, deterministic functions (Principle VI) and are cheap to
  test exhaustively; there is no excuse for gaps here.
* **React app-shell/UI code** (`apps/web`) — **70%+ coverage**, tracked but not hard-blocking
  initially. Most of this layer is rendering/wiring rather than business logic; a hard 95% gate
  here would incentivize low-value tests (e.g. testing that a template renders a string) rather
  than useful ones.

### CI
* GitHub Actions, free for this scale of usage, in the single `learncoreskills/app` repo.
* Every PR runs: lint, type-check/build, unit tests with coverage, and the coverage gate above.
  A failing gate blocks merge (branch protection).

### Linting & formatting
* ESLint + Prettier across the whole workspace, TypeScript strict mode (`strict: true`, no
  implicit `any`) — applies equally to core packages and the React app.

### Determinism testing
* Every question-generation and mastery-calculation function gets at minimum a same-input →
  same-output repeat-call test (per specs 003/004's acceptance criteria). Property-based testing
  (e.g. fast-check) is encouraged for these functions but not mandated for V1.

## Consequences
* The 95% core-package bar means new exercise plugins (beyond the first) inherit a real, checked
  quality bar from day one rather than "we'll add tests later."
* The lower, non-blocking UI bar keeps app iteration fast; it should be revisited upward once the
  UI stabilizes past V1, not left permanently soft by default.
* No coverage target is set for end-to-end (Playwright) tests — e2e tests are judged by scenario
  coverage of the core loop, not a percentage metric.
* Because core packages and the app now share one repo/toolchain, there is only one CI pipeline to
  maintain (simpler than the two-repo setup ADR-0003 would have required).

## Related
* ADR-0001 (Frontend Stack) / ADR-0007 (Frontend Framework — React over Angular)
* ADR-0006 (Client-Only Architecture for V1)
* `.specify/memory/constitution.md` Principle VI (Determinism & Testability)
