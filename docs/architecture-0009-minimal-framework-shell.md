# ADR-0009: Minimal framework shell

## Status
Proposed — 2026-10-21. Feature 078 (`specs/feature/078-framework-modularisation/spec.md`).

## Context
`apps/web` is meant to be a React shell over the `packages/core/*` framework packages, but it still holds
subject and site content: about 15.5k lines of i18n strings, 5.3k of `domain/` (curriculum, mental math,
session), 2.2k of bundled `content/` (guides, intro, legal), plus a math radar and ~63 files that mention
"math". Measured size of `apps/web/src` (excluding tests and `content/`): 29,493 lines. Coupling is hard-coded: `SUBJECT_PUBLISH_FOLDER = { math: "mathematics" }` in
`domain/session/subjectLoader.ts`, `MATH_SUBJECT_ID = "math"` in `domain/session/pluginRegistry.ts`, and a
manually maintained `FRAMEWORK_ACCEPTED_SUBJECT_CONTRACT_VERSION`. Subject structure is duplicated: the
`subjects/mathematics/catalogue/` JSON (ADR-0008 R5) and the `apps/web/src/domain/curriculum` TypeScript.
Meanwhile subject discovery (`/subjects/index.json`), blog (`/blog/index.json`) and docs (`/docs/index.json`)
already load at runtime over HTTP. Every content change forces a framework rebuild, which the owner wants to
do rarely.

## Decisions
- **R1 Shell has no content.** `apps/web` holds composition, routing and layout only. No subject,
  site-content or math-specific code, strings or data lives in it.
- **R2 Ids come from data.** Subject id and publish folder are read from `/subjects/index.json` and the
  subject manifest, never hard-coded. No literal subject id appears in app or core code.
- **R3 Contract version is derived.** The accepted subject-contract version comes from
  `@learncoreskills/subject-contract`, not a duplicated literal.
- **R4 Modules are packages.** Each framework module is an independent package in `packages/core` with a
  small public API (one `index.ts`), its own tests and 95%+ coverage (ADR-0004). No module imports app code
  or another module's internals.
- **R5 Catalogue is the structure source.** `subjects/mathematics/catalogue/` (`subject.json`, `K.json`,
  `G1..G6.json`) is the only definition of levels, topics and skills. Duplicates in
  `apps/web/src/domain/curriculum` (skills framework, titles, syllabus, groups, topics) are deleted after a
  passing parity check.
- **R6 Site content is fetched.** Guides, intro and legal move to runtime fetch with an index, like blog and
  docs. They are not bundled in the app build. Strings that belong to a subject ship with that subject.
- **R7 Still client-only.** Runtime fetch is of static files from the same host, so ADR-0006 (no backend)
  holds. This extends ADR-0008 R9 only for subject and site content; activities stay bundled with their
  subject.
- **R8 Phased, parity-gated.** Follow ADR-0008 R11: build the new path beside the old one, prove parity,
  switch, then delete the legacy code and any fallback. One phase at a time, each green on
  `scripts/validate.ps1 -Repo app -Quick`.

## Consequences
- Content and subject changes ship without rebuilding the framework. A second subject needs no shell change.
- Runtime fetch adds first-load requests and a failure mode (missing or invalid file). Each fetch needs a
  loading state, an error state and a cache strategy. SEO prerender must still emit the fetched content
  (see `specs/domain/seo-and-deployment/spec.md`).
- Saved progress is unchanged: it is keyed by competency and plugin ids, which are preserved. URLs are
  preserved (`specs/domain/navigation-and-urls/spec.md`).
- Temporary duplication (old and new path) until each phase finishes.
- More packages to version and test; mitigated by the small-API rule in R4.

## Migration
Phases P0 to P4 are defined, with exit criteria, in `specs/feature/078-framework-modularisation/spec.md`.
The catalogue parity check (R5) is a required step before any curriculum file is deleted. A phase that fails
its gate is rolled back by reverting its commits on main; the legacy path is kept until the next phase starts.

## Related
ADR-0004 (quality gates), ADR-0006 (client-only), ADR-0008 (activity folders and catalogue).
