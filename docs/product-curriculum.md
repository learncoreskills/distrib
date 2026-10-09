# Mathematics Curriculum (MVP)

> Status: the competency tree is now fully built out in code. `PRIMARY-SKILLS-FRAMEWORK.md`
> section B lists 162 individual, grade-tagged mathematics competencies (P through G5); as of
> 2026-09-26 every one of those 162 has a matching implemented competency in the `mathematics`
> repo (`src/curriculum.ts` plus `packages/syllabus-content-g1..g5/`), each with a `targetGrade`
> and at least one activity plugin wired to it. This file's area list below still describes the
> product-facing groupings.
>
> **Since 2026-10-02 the authoritative competency list is `MATH-COMPETENCY-REFERENCE.md`**
> (worldwide, PK–G5, 410 rows, IDs like `G3.FR.4`), replacing Section B. It includes Money as a
> maths strand **limited to currency arithmetic** (counting, totals, change, prices). Financial
> concepts (loans, interest, saving, budgeting, profit) stay outside mathematics, in framework
> section G. This narrows the Money note below rather than reversing it. The "162 of 162 covered" status above was
> measured against Section B and must be re-measured against the new reference.

The initial mathematics curriculum should cover the major primary-school
competencies, including:

* Number sense
* Place value
* Comparing and ordering numbers
* Addition
* Subtraction
* Multiplication
* Division
* Mental mathematics
* Fractions
* Decimals
* Percentages
* Measurement
* Money
* Time
* Geometry
* Data and graphs
* Mathematical reasoning
* Problem solving

The curriculum should be designed so that the platform can later support
different national curricula.

> **Note on "Money" in the list above**: `PRIMARY-SKILLS-FRAMEWORK.md` Section B (Mathematics) has
> no money-related bullet at any grade — "Money & Financial Literacy" is a distinct top-level
> framework section (G), a separate subject domain entirely, not a mathematics competency. The
> "Money" bullet above is this document's own product-facing area label (matching
> `mathematicsAreas` in `src/curriculum.ts`, kept for the radar-chart axis list), not a claim that
> Section B covers it. Confirmed by the `syllabus-research` skill's grade-by-grade G1 pass
> (2026-09-26): zero `math.money.*` competencies exist anywhere in the tree, by design, not by gap.

## TODO

* [x] Break each competency area into a tree of individual, testable competencies — done: all 162
      Section B framework items are implemented as individual competencies across
      `src/curriculum.ts` and `packages/syllabus-content-g1..g5/` (confirmed by the
      `syllabus-research` skill's 2026-09-26 run, cross-checking every `frameworkSkillId` against
      the framework document).
* [x] Assign each competency to a target Level (1–5) — done: every competency's `targetGrade`
      (`"P"` or `1`–`5`) maps directly onto the framework's tag on the same item; no divergence
      found.
* [x] Cross-reference each competency with which exercise plugin(s) train it — done: every
      competency has at least one `scoreInputs` entry naming an activity plugin (see
      `docs/features/_archive/004-exercise-plugin-engine/spec.md` for the plugin contract).
* [ ] Decide whether curriculum is age-banded, level-banded, or both. Still open — not something
      the syllabus-research skill can resolve on its own; needs a product decision.
* [ ] Activity *quality*, not just coverage, is an ongoing concern: several competencies whose
      framework wording implies classification/ordering/sequencing were built as multiple-choice
      or numeric-answer quizzes rather than a more fitting interaction. See
      `specs/improvements/` for specific tickets (e.g. `classifies-triangles-activity-format.md`,
      `orders-numbers-to-1000-activity-format.md`) — this is a recurring daily review, not a
      one-time fix, since new gaps surface as new activities get built.
