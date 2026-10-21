# ADR-0008: Activity folders and a subject catalogue

## Status
Accepted — 2026-10-18. Feature 072 (`specs/domain/activity-engine-and-plugins/spec.md` section 15 (merged from 072)).

## Context
About 1000 activities live in ~25 topic packages and 7 grade bundles, each with its own copy of session
and mastery-signal code, and the subject structure (levels, topics, skills) is spread over generated
JSON, enrichment files and code. Adding or testing one activity means touching shared registries.

## Decisions
- **R1 Folder, not package.** An activity is a folder `activities/<id>/` (`activity.json`, `index.ts`,
  `strings.en.json`, `strings.fr.json`, tests). Not an npm workspace package: ~1000 packages would make
  install, typecheck and the workspace graph slow.
- **R2 Base activity and format kits.** New core package `@learncoreskills/activity-kit` provides
  `defineActivity` (session, mastery signal, i18n, seeded rng) and answer-format bases `choice`,
  `numeric`, `scene`, replacing the `template-*` packages. Plain functions with config, not classes.
  Shared React scenes move to `@learncoreskills/activity-ui`.
- **R4 Discovery, no registry.** The subject entry uses `import.meta.glob` over
  `activities/*/index.ts` and `activity.json`; a Node script does the same for tests and the
  playground. Folder name must equal `manifest.id`.
- **R5 Catalogue.** `catalogue/` (`subject.json` plus one JSON per level) is the single source of
  structure, validated by JSON Schema and cross-checks. It evolves `syllabus.generated.json`; the
  syllabus markdown becomes generated from it.
- **R6 Shared UI.** Scenes are extracted to `activity-ui`; activities return scene data and never
  import React.
- **R9 Versioning.** `activity.json` carries `version` (semver) and `interfaceVersion`; discovery fails
  the build on incompatibility. A changed-files helper runs validation only for changed activities.
  Activities are still bundled at build time (ADR-0006, no runtime fetch).
- **R11 Migration.** Incremental and parity-gated: build kit, catalogue and discovery alongside the
  legacy code; dual-path loader (folder first, legacy registry fallback); migrate topic packages then
  grade bundles with a single idempotent tool; finally delete legacy code and the fallback.

## Consequences
- Runtime shape stays `Plugin`, so engines and saved progress (keyed by competency and plugin ids) are
  unchanged. Ids, competency ids and URLs are preserved.
- Adding an activity is a folder plus a catalogue entry, with no engine change (constitution V).
- Temporary duplication (legacy plus new path) until the migration finishes.
