# Technical Architecture

> Status: stack and architecture for V1 are finalized — see
> `docs/architecture/decisions/0007-frontend-framework-react.md`, `0004-testing-and-quality-gates.md`,
> and `0006-client-only-architecture.md`. This document captures the resulting principles; the
> ADRs are the source of truth for the concrete decisions and their rationale. ADR-0001's
> Angular choice is superseded by ADR-0007 (React); ADR-0002, 0003, and 0005 explored a
> C#-backend architecture and are superseded by ADR-0006 — all kept for historical record only.

## Web first

Initial target:

**Responsive PWA**

The same application should work on:

* phone
* tablet
* desktop

## Client-only architecture (ADR-0006)

There is no backend in V1. Everything runs in the browser:

* **React app** (`apps/web`) — UI, routing, i18n (`docs/architecture/decisions/0007-frontend-framework-react.md`).
* **Independent TypeScript packages** (`packages/core/*`) — competency model, plugin engine,
  mastery engine, and the subject contract, per
  `docs/architecture/decisions/0006-client-only-architecture.md`. These are plain TypeScript with
  no React (or Angular) dependency, each independently unit-tested (95%+ coverage,
  `0004-testing-and-quality-gates.md`).

Per `docs/features/_archive/029-independent-deployment`, the exercise packages (`packages/exercises/*`) are no
longer part of this repo or this build — they moved to their own sibling repo (`subject-math`) as
the mathematics **subject**, discovered and loaded by the framework at runtime rather than
statically imported. The framework (`apps/web`) ships with zero subject code compiled in; the
blog and the docs/parent-facing documentation area (this content) likewise publish and deploy
independently, each fetched by the framework over HTTP rather than bundled into its build:

```text
GitHub (learncoreskills/app)               GitHub (learncoreskills/subject-math)
   ↓ build: framework shell only              ↓ build: mathematics plugins + manifest
   └──────────────┐              ┌────────────┘
                  ↓              ↓
         learncoreskills/distrib (GitHub Pages, one custom domain)
           /            /subjects/math/    /blog/    /docs/
           ↑ framework  ↑ subject-math      ↑ blog     ↑ this docs area
           (each path published independently by its own repo's own CI)
                  ↓
child's browser — shell renders immediately; a subject's code/content, and blog/docs content,
are fetched at runtime (a brief loading state, then content) rather than pre-bundled
```

The core mathematics practice loop (question generation, answer validation, mastery calculation)
remains fully local-first and offline-capable once a subject's code has loaded — only the initial
fetch of a subject's bundle, or of blog/docs content, needs the network; nothing about where or how
progress data is stored on-device changed.

An earlier iteration explored a stateless C# backend (see ADR-0002/0003/0005, superseded) — kept
for reference in case a genuine future need (e.g. server-side aggregation for teacher mode across
many students/devices) makes revisiting a backend worthwhile. Nothing here rules that out later.

## Local-first

Both progress **storage** and the core practice loop's **computation** happen entirely on-device
(see `.specify/memory/constitution.md` Principle IV). There is no server to reach, so no network
connectivity is required for the core loop, and there is no permanent server-side storage of any
kind.

Users should be able to:

* export their progress
* backup their progress
* restore/import their progress

Cloud synchronization (server-side storage, as an explicit opt-in premium feature) remains a
possible later addition, not part of V1.

## Plugin architecture

Exercises must be modular.

Adding an exercise should not require rewriting the core mastery engine.

See `docs/features/_archive/004-exercise-plugin-engine/spec.md` for the plugin contract.

## Testability

Question generation, answer validation and mastery calculations must be
deterministic and heavily tested.

## Privacy & GDPR

The product should minimize personal data.

The system should support:

* child profiles
* parent accounts
* multiple children
* optional username/alias
* country
* age/age band where appropriate

Public profiles must never expose unnecessary identifying information.

Any future public comparison/leaderboard system must use aliases or generated
identifiers rather than children's real names.

The architecture must be designed with GDPR/privacy requirements in mind.

## Open questions / TODO

* [x] Resolved 2026-09-13 (history): the architecture went through two
      iterations the same day — first a stateless C# backend (ADR-0002/0003/0005),
      then reverted to fully client-side (ADR-0006) once the added hosting/repo
      complexity was weighed against the benefit. ADR-0006 is current.
* [x] Resolved 2026-09-13: stack finalized — TypeScript throughout, everything
      (competency model, plugin engine, mastery engine, exercises) as
      independent packages within one workspace, hosted on GitHub Pages only.
      See `docs/architecture/decisions/0001-frontend-stack.md`,
      `0004-testing-and-quality-gates.md`, `0006-client-only-architecture.md`.
* [x] Resolved 2026-09-13: UI framework changed from Angular to React — see
      `docs/architecture/decisions/0007-frontend-framework-react.md`. No code
      existed against Angular yet, so this was a zero-cost pivot.
* [ ] Define local storage format/schema for progress data (export/import) —
      implementation-level choice (e.g. IndexedDB vs. localStorage, JSON
      export shape), not yet a spec-blocking product decision.
* [x] Resolved 2026-09-26 (`docs/features/_archive/029-independent-deployment`): the framework, the mathematics
      subject, the blog, and the docs/parent-facing documentation area are now four
      independently built and deployed units (previously one combined `apps/web` build), each
      published to its own path under `learncoreskills/distrib` by its own repo's own CI. The
      framework discovers and loads subjects/blog/docs content at runtime over HTTP rather than
      compiling any of it in; every existing URL still resolves, and local-first progress storage
      is unchanged.
