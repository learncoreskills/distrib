# ADR-0006: Client-Only Architecture for V1

## Status
Accepted — 2026-09-13. Supersedes ADR-0002 (Backend Stack), ADR-0003 (Client/Server Split &
Hosting), and ADR-0005 (Client/Server Responsibility Boundary & API Contract).

## Context
ADR-0002/0003/0005 designed a stateless C# backend, on the reasoning that the Angular frontend
should stay thin and business logic should live server-side. On reflection, the product owner
judged that a fully modular client-side architecture — independent, pluggable TypeScript packages
— would be simpler and sufficient for V1, as long as each module stays independent (satisfying
Constitution Principle V, Plugin Architecture, regardless of which side of a network boundary the
modules run on).

This is a deliberate reversal, not a drift: the C#-backend ADRs are kept (marked Superseded) as
the historical record of that reasoning, in case a genuine future need (e.g. a teacher-mode
feature that must aggregate data across many students/devices server-side) makes revisiting a
backend worthwhile. Nothing here rules that out later — it just isn't part of V1.

## Decision

### Everything runs client-side
Competency model (spec 001), exercise plugin engine (spec 004), mastery engine (spec 003), and
the mental-addition exercise (spec 002) are all implemented as independent TypeScript packages
that run in the browser, inside the React app (ADR-0007, formerly Angular per ADR-0001). There is
no network boundary between
"UI" and "business logic" — Constitution Principle VI's determinism/testability requirement is
enforced by unit tests (Vitest, ADR-0004's 95% gate), not by a client/server split.

### Package layout (single `learncoreskills/app` repo, npm workspace)
```text
apps/
  web/                        React application (UI, routing, i18n, calls into core packages directly)
packages/
  core/competency-model/      Spec 001 — competency definitions, tiers, prerequisites
  core/plugin-engine/         Spec 004 — plugin interface + static registry
  core/mastery-engine/        Spec 003 — v1 mastery formula
  exercises/mental-addition/  Spec 002 — the first plugin, implementing core/plugin-engine's interface
```
Each `packages/*` module is independently unit-testable and has no dependency on React (or
Angular) itself — they are plain TypeScript, importable by the React app (or, later, by a
Node-based worksheet
generator for spec 007, or a future backend, without rewriting them). This is what "modular" means
concretely here: independence is enforced by these being separate packages with their own
`package.json`/test suite, not just separate folders.

### What moves from "server" to "client" relative to ADR-0005's table
* **Competency definitions, question generation, answer validation, mastery formula**: now
  in-browser (TypeScript) instead of a C# API. Determinism (spec 004 FR-003) is still required and
  still tested the same way — just via Vitest instead of xUnit.
  Answer validation no longer needs the seed-regeneration trick from ADR-0005 — that trick existed
  specifically to let a *stateless server* validate without remembering the question; an in-process
  client function can just hold the question and its correct answer in memory directly, no
  smuggling and no seed round-trip needed. Determinism is still required (same seed/tier →
  same question) for testability, not for this concern.
* **Mastery signal log, cached mastery, profile/child identity**: unchanged from ADR-0005 — these
  were already client-side and stay that way.
* **i18n**: unchanged in approach — react-i18next (ADR-0007; was Transloco under ADR-0001) resolves
  translation keys client-side; competency name keys are
  just imported from `core/competency-model` directly rather than fetched over HTTP.

### Hosting
Only GitHub Pages is needed — a static React build, nothing else. No Cloud Run, no Docker, no
second repo, no Cloudflare consideration required (though it remains an option later for a custom
domain/CDN in front of GitHub Pages, per the original ARCHITECTURE.md diagram).

## Consequences
* **Offline works again.** The practice loop no longer requires network connectivity — the
  tradeoff explicitly accepted in ADR-0003 is gone. This restores the constitution's Local-First
  Privacy principle (IV) to its more natural reading (see the constitution amendment accompanying
  this ADR).
* **One language, one repo, one CI pipeline.** No `learncoreskills/api` repo is needed;
  `docs/architecture/decisions/0003-client-server-split-and-hosting.md`'s repo-topology decision
  does not apply.
* **No cold starts, no hosting cost/complexity, no Google Cloud account needed.**
* If a genuine future need for server-side logic arises (cross-device teacher-mode aggregation,
  premium cloud sync storage), it can be introduced then as a new ADR — the core packages'
  plain-TypeScript, framework-agnostic design (no Angular or React dependency) means they could in
  principle be reused in a future Node-based backend without a rewrite, even though none is
  planned now.
* The enterprise "Angular + C#" pairing originally requested is dropped for V1 (and Angular itself
  was later replaced by React per ADR-0007). "Enterprise-grade
  quality" is still delivered via the same rigor (strict typing, 95% coverage on core packages,
  deterministic testing, CI-enforced gates) — just in one language rather than two.

## Related
* ADR-0001 (Frontend Stack) / ADR-0007 (Frontend Framework — React over Angular) — updated to
  reflect this
* ADR-0004 (Testing & Quality Gates) — updated to reflect this
* ADR-0002, ADR-0003, ADR-0005 — superseded, kept as historical record
* `.specify/memory/constitution.md` Principle IV (Local-First Privacy) — amendment accompanying
  this ADR
