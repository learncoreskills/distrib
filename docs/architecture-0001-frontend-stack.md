# ADR-0001: Frontend Stack

## Status
**Framework choice superseded by ADR-0007 (2026-09-13)** — React replaces Angular as the UI
framework. Kept below as the historical record of the original reasoning and of the
non-framework-specific choices (npm, Vitest, Playwright) that ADR-0007 carries forward unchanged.

Originally accepted — 2026-09-13

## Context
The app needs a responsive PWA (phone/tablet/desktop), internationalized from the start
(`docs/product/vision.md`), built to an enterprise-grade quality bar (typed, heavily tested).

**Updated 2026-09-13 (see ADR-0006)**: there is no backend in V1. This Angular application now
owns all business logic itself, as independent, pluggable TypeScript packages (competency model,
plugin engine, mastery engine, exercise plugins) — not just UI rendering. Framework choice below
was made before that reversal but remains valid: Angular's DI and module system are a good fit for
composing independent packages cleanly, not just for UI structure.

## Decision
* **Language/Framework**: Angular + TypeScript. Angular is fully TypeScript-native, ships
  dependency injection, routing, forms, and an HTTP client as first-party, opinionated tooling —
  a good fit for an "enterprise-grade" bar with a small team, since less is left to
  library-shopping/bikeshedding.
* **Unit testing**: Vitest — the Angular CLI's default unit test runner as of Angular 21 (2026);
  Karma is deprecated/EOL and Jest support is frozen/experimental
  ([source](https://qaskills.sh/blog/karma-to-jest-migration-guide),
  [source](https://javascript.plainenglish.io/angular-unit-testing-in-v20-x-choosing-the-right-test-runner-cafe3f80115e)).
* **Component testing**: Angular Testing Library (`@testing-library/angular`) — behavior-focused
  component tests over implementation-detail-focused ones.
* **End-to-end testing**: Playwright — smoke-tests the actual core loop (start a session, answer
  questions, see a mastery result) against a running build.
* **Internationalization**: Transloco (runtime locale switching) rather than Angular's built-in
  `@angular/localize` (which requires a separate build per locale). A single static deploy that
  can switch language at runtime is simpler to host on GitHub Pages than N locale-specific builds.
* **Package manager**: npm — the default and most friction-free choice for Angular CLI tooling.

## Consequences
* Per ADR-0006, the frontend workspace now contains both the UI app and the independent
  business-logic packages (competency model, plugin engine, mastery engine, exercise plugins).
  Those packages get the 95%+ coverage bar from ADR-0004 (deterministic, pure-function-heavy);
  the Angular app-shell/UI layer itself keeps the lower, non-blocking target.
* Runtime locale switching (Transloco) trades a small amount of bundle size/runtime cost for
  deployment simplicity.
* Angular's opinionated structure reduces flexibility compared to a minimal framework (e.g.
  Svelte/SolidJS), in exchange for consistency and a shallower learning curve for future
  contributors familiar with mainstream enterprise Angular codebases.

## Related
* ADR-0004 (Testing & Quality Gates)
* ADR-0006 (Client-Only Architecture for V1)
