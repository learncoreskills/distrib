# ADR-0003: Client/Server Split, Repo Topology & Hosting

## Status
**Superseded by ADR-0006 (2026-09-13)** — on reflection, a fully modular client-side
architecture was judged simpler and sufficient for V1; the backend/hosting split below was never
implemented. Kept as the historical record of the reasoning at the time (notably: the Cloudflare
Containers pricing finding is still accurate and worth keeping for reference).

~~Accepted — 2026-09-13~~

## Context
Two things needed resolving together: (1) how much business logic the Angular frontend should
own versus a new C# backend (product owner preference: keep Angular thin), and (2) how to host
both for free. These interact because the hosting options for "compute" (an API) and "static
files" (a PWA) are different products with different constraints.

A literal reading of "host directly on Cloudflare" turned out not to be free: Cloudflare
Containers require the paid Workers plan (from $5/month) — there is no free tier for running
Docker containers directly on Cloudflare
([source](https://lalatenduswain.medium.com/understanding-cloudflare-containers-a-comprehensive-pricing-guide-for-developers-9f7242a2ac20),
[source](https://northflank.com/blog/top-cloudflare-containers-alternatives)).

## Decision

### Client/server split
* The Angular frontend is a **thin client**: it renders UI and calls the backend API. It does not
  implement the competency model, plugin engine, or mastery formula itself.
* The C# backend (ADR-0002) is **stateless**: it computes (question generation, answer
  validation, mastery calculation) given whatever input the client sends; it stores nothing about
  any child.
* A child's profile and answer/mastery history (specs 003, 006) remain stored **only on the
  child's device** (browser storage). The client sends the relevant data to the API when it needs
  a computation (e.g. "generate a question for this tier" or "here's my recent answer history,
  compute my mastery") and persists whatever comes back, locally.
* **Consequence accepted explicitly**: the core practice loop now requires network connectivity —
  question generation and mastery calculation cannot happen fully offline. This is a real change
  from an implicit "everything runs in the browser" assumption, which is why Constitution
  Principle IV (Local-First Privacy) has been amended to state it governs data **storage**
  ownership, not computation locality — see the constitution's Sync Impact Report for this
  amendment.

### Hosting
* **Frontend**: static Angular build, hosted on **GitHub Pages** (free, matches the product
  owner's preference, zero extra accounts).
* **Backend**: the C# API's Docker image is deployed to **Google Cloud Run**. Cloud Run's
  always-free monthly quota (2M requests, 360,000 GB-seconds, 180,000 vCPU-seconds) comfortably
  covers a small family/early-user load, it scales to zero (an idle API costs nothing beyond the
  free quota), and it natively runs arbitrary Docker containers including .NET — unlike Cloudflare
  Containers, this is free with no paid plan required.
  * Cold starts after scale-to-zero are an accepted tradeoff (explicitly confirmed acceptable).
  * **Render.com** (750 free instance-hours/month) is the fallback if Cloud Run's account setup
    (Google Cloud billing account, even though usage stays within free quota) is undesirable.
* **Cloudflare's free plan** (not Containers) MAY optionally front both GitHub Pages and Cloud
  Run for a unified custom domain, basic WAF, and caching — this is a DNS/proxy layer, not a
  compute host, and is not required for either service to work.

### Repo topology
* Two repositories, split by toolchain: `learncoreskills/app` (Angular/npm) and a new
  `learncoreskills/api` (C#/dotnet/Docker). Kept separate because the two toolchains have
  genuinely different CI/build/deploy pipelines (a Node-based GitHub Pages deploy workflow vs. a
  dotnet-build + Docker-push-to-Cloud-Run workflow); combining them in one repo mostly adds CI
  complexity without a clear benefit at this scale.

## Consequences
* An offline mode for the practice loop is no longer possible without future work (e.g. caching
  a batch of pre-generated questions client-side) — not part of V1, but no longer ruled out
  structurally either, since the client already persists whatever the API returns.
* Free-tier cold starts mean the first request after idle may take longer — acceptable per
  explicit confirmation, but worth surfacing in the UI later (a loading state) rather than as a
  silent delay.
* Two repos means two CI pipelines and two deploy targets to maintain, but each stays simpler
  than a combined one would be.

## Related
* ADR-0001 (Frontend Stack)
* ADR-0002 (Backend Stack)
* ADR-0004 (Testing & Quality Gates)
* `.specify/memory/constitution.md` (Principle IV amendment)
