# ADR-0007: Frontend Framework — React over Angular

## Status
Accepted — 2026-09-13. Supersedes the framework choice in ADR-0001 (Frontend Stack).

## Context
ADR-0001 chose Angular for its batteries-included, opinionated tooling (DI, router, forms, HTTP
client, CLI, test runner as first-party defaults) — a good fit, it reasoned, for a small team
targeting an "enterprise-grade" bar with minimal library-shopping. Part of that reasoning was that
Angular's DI/module system would help compose the plugin architecture (competency model, plugin
engine, mastery engine, exercise plugins) cleanly.

ADR-0006 (Client-Only Architecture) subsequently made those packages plain, framework-agnostic
TypeScript with no Angular dependency — their independence is enforced by being separate npm
packages with their own tests, not by Angular's DI or module system. That removes ADR-0001's
strongest Angular-specific argument; the framework now only governs the UI shell (`apps/web`), not
the modular business logic.

Weighed against that, the product is a child-facing, exercise/game-first UI — per-exercise custom
widgets, drag-and-drop, animated feedback — where React's larger component/animation ecosystem
(e.g. Framer Motion, react-dnd) and broader hiring pool are a more direct fit than Angular's more
structured, enterprise-CRUD-oriented conventions. The product owner judged this outweighs the
"fewer decisions for a small team" argument that originally favored Angular.

## Decision
* **Language/Framework**: React + TypeScript, scaffolded with Vite (not Create React App, which is
  deprecated).
* **Routing**: React Router.
* **Internationalization**: react-i18next (runtime locale switching) — replaces Transloco, same
  rationale as ADR-0001: a single static deploy that switches language at runtime, rather than a
  separate build per locale, stays simplest to host on GitHub Pages.
* **Unit testing**: Vitest — unchanged from ADR-0001; framework-independent and works the same way
  via Vite with React.
* **Component testing**: React Testing Library (`@testing-library/react`) — replaces Angular
  Testing Library, same behavior-over-implementation-detail philosophy.
* **End-to-end testing**: Playwright — unchanged from ADR-0001.
* **Package manager**: npm — unchanged from ADR-0001.
* **State management**: no global state library adopted upfront. Component-local state plus the
  framework-agnostic core packages (which already hold the real business state/logic per ADR-0006)
  are expected to cover V1; revisit only if prop-drilling or cross-cutting UI state becomes an
  actual problem.

## Consequences
* `apps/web` (per ADR-0006's package layout) is now a React app instead of an Angular app. The
  core packages (`packages/core/*`, `packages/exercises/*`) are unaffected — they were already
  framework-agnostic.
* Angular Testing Library and Transloco are dropped in favor of React Testing Library and
  react-i18next; Vitest and Playwright carry over unchanged, so ADR-0004's coverage gates and CI
  shape are unaffected.
* React's less-opinionated nature means routing/forms/state-management choices that Angular would
  have bundled must now be made explicitly. Accepted as a reasonable tradeoff for the UI
  flexibility this product's exercise-heavy, kid-facing interface needs (see Context).
* No code had been written against Angular at the time of this decision — `apps/web` did not yet
  exist — so this is a zero-cost pivot: a documentation/spec change only, not a rewrite.

## Related
* Supersedes the framework portion of ADR-0001 (Frontend Stack); ADR-0001's non-framework-specific
  choices (npm, Vitest, Playwright) are restated here unchanged.
* ADR-0004 (Testing & Quality Gates) — package/tooling references updated (Angular → React);
  thresholds unchanged.
* ADR-0006 (Client-Only Architecture for V1) — package layout unaffected; `apps/web`'s framework
  updated.
