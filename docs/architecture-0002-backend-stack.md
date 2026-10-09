# ADR-0002: Backend Stack

## Status
**Superseded by ADR-0006 (2026-09-13)** — V1 dropped the backend entirely in favor of a fully
client-side architecture. Kept below as the historical record of why C#/ASP.NET Core was chosen
at the time; none of it applies to V1 as currently planned.

~~Accepted — 2026-09-13~~

## Context
Per ADR-0003, the backend owns the competency model, the exercise plugin engine, and the mastery
calculation as a **stateless** API — it computes given input, it does not store child data. It
must be enterprise-grade: strongly typed, deterministic where required by the constitution
(Principle VI), and heavily unit-tested.

## Decision
* **Language/Framework**: C# on ASP.NET Core (Web API). Chosen directly per product owner
  preference for an enterprise C# backend.
* **Statelessness**: no database. Every endpoint is a pure function of its request payload (e.g.
  a tier + seed, or a child's locally-held answer history) — see ADR-0003 for why.
* **Unit testing**: xUnit, with FluentAssertions for readable assertions — the standard modern
  choice for .NET test suites.
* **Coverage tooling**: coverlet for coverage collection, reportgenerator for CI-readable
  coverage reports, enforced per the thresholds in ADR-0004.
* **Determinism**: question generation and mastery calculation MUST be pure functions of their
  inputs (including any random seed) per Constitution Principle VI — this is directly testable
  with xUnit given the stateless design.
* **Packaging**: the API ships as a Docker image (see ADR-0003 for where it runs).

## Consequences
* All of specs 001 (Competency Model), 003 (Mastery Engine), and 004 (Exercise Plugin Engine) are
  implemented as C# code inside this API. Their spec.md files describe the contract
  (language-agnostic); this ADR fixes the concrete implementation language.
* The exercise plugin engine's "static manifest/registry" (spec 004, FR-007) becomes a C#
  module/DI registration list — adding a plugin means adding one C# class and one registry entry,
  no other code changes, preserving spec 004's SC-001.
* No ORM/database driver dependencies are needed, keeping the backend's dependency surface small
  — consistent with the "no unnecessary abstraction" quality bar.
* Because there is no database, there is nothing to migrate/back up on the server side; all
  durable child data remains local per Constitution Principle IV (as amended — see the
  constitution's Sync Impact Report for this amendment).

## Related
* ADR-0001 (Frontend Stack)
* ADR-0003 (Client/Server Split & Hosting)
* ADR-0004 (Testing & Quality Gates)
