# ADR-0005: Client/Server Responsibility Boundary & API Contract

## Status
**Superseded by ADR-0006 (2026-09-13)** — there is no server in V1, so this API contract is not
built. Kept as the historical record of the stateless-regeneration mechanism, which remains a
useful reference if a server is ever reintroduced later.

~~Accepted — 2026-09-13~~

## Context
ADR-0003 established that the Angular frontend is a thin client and the C# backend is a
stateless business-logic API, but didn't pin down *exactly* which piece of data or logic lives on
which side, or how a genuinely stateless server can validate an answer without remembering what
question it handed out. This ADR makes that boundary concrete enough to implement against.

## Decision

### The key mechanism: deterministic regeneration instead of server-side session state
Because `generateQuestion(tier, seed)` MUST be deterministic (spec 004, FR-003), the server never
needs to remember which question it gave out. To validate an answer, the client resends the same
`(competencyId, tier, seed)` it used to generate the question, plus the answer. The server
regenerates the identical question from that seed and checks the answer against it. No session,
no server-side cache, no database — genuinely stateless, by construction rather than by
discipline.

The client generates the `seed` (e.g. `crypto.getRandomValues`-based), and that same seed doubles
as the question's `questionId` throughout — one value, not two, threaded through generation,
validation, and the resulting `MasterySignal`. This isn't a security boundary against a
determined adversary (there's no exam integrity to protect), just enough obscurity that a child
can't trivially read the answer off the network tab.

### Responsibility table

| Concern | Lives on | Notes |
|---|---|---|
| Competency definitions (id, tiers, level, name **key**, prerequisites) | **Server** | Authored/owned in C# (spec 001). Client never holds its own copy. |
| Question generation (operand ranges, carry rules, etc.) | **Server** | Plugin implementation (specs 002/004). Client only knows "tier N of competency X." |
| Answer validation | **Server** | Via deterministic regeneration, above — no server state. |
| Mastery formula (per-tier accuracy, per-competency average, threshold) | **Server** | Spec 003's v1 formula; computed on demand from whatever log slice the client sends. |
| Mastery **signal log** (raw answer history) | **Client** | Persisted in browser storage (IndexedDB), one log per local profile. The server receives a slice of it only as a request payload for a compute call — it is never stored server-side. |
| Cached/last-known mastery percentages | **Client** | Cached locally after each `/mastery/compute` response, so the UI can render without a network round-trip every time; recomputed when new answers are recorded. |
| Child/profile identity (names, which profile is active) | **Client, entirely** | The server never receives a child id, name, or any identifying data — it is completely profile-agnostic. Multi-profile support (spec 006, V1 slice) is a pure client-side concern: one local-storage namespace per profile. This is a direct consequence of statelessness, not a separate design choice. |
| In-session UI state (which question # out of 10, in-progress answer) | **Client**, ephemeral | Each answered question is already durably recorded via the signal log as it happens, so losing this UI state on refresh (spec 002's "abandoned session" edge case) loses no mastery-relevant data. |
| Question generation seed | **Client generates it** | Sent to `/questions/generate`, resent to `/questions/validate`. See mechanism above. |
| i18n resolution | **Client** | The server deals only in stable translation **keys** (e.g. `competency.math.addition.mental.name`), never resolved UI strings. Transloco (ADR-0001) resolves keys to the active locale entirely client-side, so all translation logic stays in one place. |
| Printable worksheet generation (spec 007, later) | **Server** | Reuses the same deterministic plugin generation with a batch of seeds — no new generation logic needed when this phase arrives. |
| PWA app-shell caching | **Client** | The Angular shell itself can still load instantly offline (standard PWA app-shell caching) even though the practice loop's *data* calls require network (ADR-0003's accepted tradeoff). These are two different kinds of "offline" — worth not conflating in UI copy later ("the app opens instantly" vs. "exercises need a connection"). |

### API surface (V1)

```text
GET  /competencies
     → [{ id, subject, targetLevel, tierCount, nameKey }]   // translatable keys, not resolved text

POST /questions/generate
     { competencyId, tier, seed }
     → { questionId, displayPayload }   // e.g. { operandA, operandB } for addition
     // displayPayload NEVER includes the correct answer.

POST /questions/validate
     { competencyId, tier, seed, questionId, answer }
     → { correct: boolean }
     // questionId === seed; included for clarity/logging, server re-derives everything from seed.

POST /mastery/compute
     { competencyId, signalLog: MasterySignal[] }
     → { tierMastery: [{ tier, percentage | "not-started" }], competencyMastery: number }
```

## Consequences
* The server is provably stateless: every endpoint's output is a pure function of its input. This
  makes the 95% coverage bar (ADR-0004) straightforward to hit — every business-logic function is
  trivially unit-testable with fixed inputs.
* Multi-profile support (spec 006) required zero backend work — it falls out of the client owning
  all profile/storage concerns. This wasn't obvious until the boundary was made explicit here.
* Because the seed is client-generated and not cryptographically protected, a technically curious
  user could inspect network calls to see a question before answering it. Explicitly accepted:
  this product has no exam-integrity requirement to defend against.
* `displayPayload`'s shape is plugin-specific and opaque to the engine (per spec 004's Key
  Entities) — the frontend needs a small per-plugin rendering adapter, not a generic renderer.
  For V1 (one plugin), this is a single component; a registry of renderers is a problem for when
  a second plugin exists, not now.

## Related
* ADR-0002 (Backend Stack)
* ADR-0003 (Client/Server Split & Hosting)
* `specs/001-competency-model/spec.md`, `docs/features/_archive/002-mental-addition-exercise/spec.md`,
  `specs/003-mastery-engine/spec.md`, `docs/features/_archive/004-exercise-plugin-engine/spec.md`
