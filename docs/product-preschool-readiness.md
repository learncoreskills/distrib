# Preschool readiness (pre-Grade-1) — syllabus & activity proposals

Status: **DRAFT proposal** (2026-09-27). Produced by `syllabus-expert` (list + challenge of the
existing `baseline-*` set) and three `activity-designer` runs, then reviewed by `syllabus-expert`.
First release implemented in mathematics on branch (uncommitted); the rest is not implemented
or in the framework yet.

Conventions for every activity: seeded/deterministic generation, all text as en+fr keys with
read-aloud audio, image/emoji/counter visuals, big tap targets. Ladder = L1 / L2 / L3.
Templates: MC multiple-choice, NUM numeric-answer, TF true-false, MAT matching, ORD ordering,
FIB fill-in-blank. **NEW** = needs a template that does not exist yet.

## 1. Challenge of the existing baseline set

Existing: 10 P-tier competencies in `curriculum.ts` (P.0–P.9), 6 `baseline-*` packages.

| Existing | Verdict | Why |
|---|---|---|
| counting (P.0) | SPLIT → E1–4, 6–7 | "counting quantities" is unobservable as scoped |
| subitizing (P.1) | KEEP (E5) | cap at 5 |
| compare-groups (P.2) | KEEP + REWORD | add "same" and conservation (E12–13) |
| digits (P.3) | SPLIT → E8, E9, E10 | recognising alone is weak: add quantity link + writing |
| concrete-addition (P.4) | SPLIT → E16, E17, E18 | keep id (prerequisite of mental-addition), add sub-skills |
| measurement-comparison (P.5) | KEEP + add E26 | ordering 3 objects |
| time-day-order (P.6), days-of-week (P.7) | KEEP (or merge in UI) + add E33 | yesterday/today/tomorrow has no competency |
| shapes (P.8) | REWORD | orientation, sizes; solids as extension (E21) |
| position (P.9) | KEEP | add in front of/above/below; left/right out of scope |

**Missing:** patterns (E29–30), sorting (E27–28), ordinals (E15), conservation (E13), composition of
5 (E18), one-to-one vs cardinality (E2–3), count-on / before-after (E6–7), numeral writing (E10),
zero (E11), ordering by size (E26).
**Too advanced for this tier:** counting to 100 / by 2s,5s, place value, number bonds as recall,
written equations, clock reading, left/right, coin values.

## 2. Entries and activities

### Counting & number symbols
- **E1 recite 1–20** — A *Missing Step* ORD: drag missing cards into the row (1–10 one gap / 1–20 two gaps / teens shuffled). B *Count Along* FIB: frog on lily pads, next number (1–10 / 10–20 / random start).
- **E2 count a set, one word per object** — A *Tag Each One* MC + **NEW tap-to-tag counter**: tap marks each object, pick total (line ≤10 / scattered ≤10 / scattered ≤20). B *Movable Count* NUM: drag objects into a box, type total (fixed 10 / movable 10 / movable 20).
- **E3 cardinality** — A *How Many All Together?* MC: count, objects hidden, pick numeral (1–5 / 6–10 / 11–20). B *Last Word Trap* TF: "is the pile 5?" after counting (last tag = total / rearranged / object added).
- **E4 give n objects** — A *Feed the Animals* **NEW drag-n-into-container**: "give the cow 6 apples" (1–5 / 6–10 / 10 + distractors). B *Stop at n* NUM: pile deals objects, tap Stop at n.
- **E5 subitize 1–5** — A *Flash Dots* MC: 1.5 s flash, pick numeral (dice / ten-frame / odd layouts). B *Match Pattern* MAT: dot cards to same quantity in other layouts.
- **E6 count on** — A *Hidden Bag* MC: 4 shown + 3 hidden, "start at 4, what next?" (from 2 / from 4–6 / any ≤10). B *Number Path* ORD: numbers onto a path from a start number.
- **E7 before/after** — A *Neighbour Houses* FIB: street of numbered houses (after 1–5 / before+after 1–9 / mixed ≤10). B *Which Comes First* MC: pick the one that is one bigger.
- **E8 recognise numerals 0–9** — A *Number Hunt* MC: hear number, tap numeral in grid (0–5 / 0–9 / similar pairs). B *Numeral Twins* TF: "is this a 6?" rotated/mirrored (6/9 / 2/5 / mixed).
- **E9 numeral ↔ quantity 0–10** — A *Match Cards* MAT (0–5 / 0–10 / distractor sets). B *Show the Number* MC: pick the set matching the numeral (distinct / n±1 / similar layouts).
- **E10 write numerals 0–9** — A *Trace and Write* **NEW handwriting canvas** (trace / fading guide / free write). B *Pick the Right Way* MC: choose the correctly written numeral among reversals.
- **E11 zero** — A *Empty Basket* MC: apples removed one by one, pick numeral. B *Is Zero a Number?* TF (empty vs one / vs other empty container / statements).

### Comparison, ordinals, add/subtract
- **E12 more/fewer/same** — A *Which has MORE?* MC (differ ≥3 / differ 1, spread / "fewer"). B *Same or not?* TF. C *Line them up* MAT: draw pairing lines, then tap more/fewer/same.
- **E13 conservation** — A *Still the same?* TF: row bunched by animation (spread / both rows change / object added → "no"). B *Which row has more?* MC: equal counts, different lengths (last level: longer row has fewer).
- **E14 compare numerals ≤10** — A *Bigger number* MC (mixed font sizes + dot cards). B *Bigger, smaller or same* MC. C *Number line* ORD: 3–5 numerals smallest→biggest.
- **E15 ordinals 1st–5th** — A *Who is 3rd?* MC (row flipped at L3). B *Ordinal or count?* MC: "tap the 3rd cat" vs "tap 3 cats". C *Place the runner* ORD.
- **E16 combine** — A *All together* NUM (≤5 / ≤8 / ≤10, sometimes under a cloth). B *How many altogether?* MC (distractors = each single group). C *Push together* FIB: "_ and _ make _".
- **E17 take away** — A *How many left?* NUM (crossed-out objects stay visible). B *Which picture?* MC (distractor = number taken). C *Number left* TF: "6 birds, 2 fly away, now 8?".
- **E18 decompose 5** — A *Two hands* FIB: "_ and 3". B *Another way* MC: pick a different split (mirror splits excluded). C *Split it yourself* **NEW drag-into-two-containers**: find 1 then 3 different splits.
- **E19 story problems ≤10** — A *Story + objects* MC: choose + or − (join only / join+take-away separate / mixed). B *Solve it* NUM with counter tray. C *Fingers* TF.

### Geometry, position, measurement
- **E20 2-D shapes** — A *Shape Hunt* MC (upright / rotated+sized / thin rectangles, tilted squares). B *Shape Match* MAT. C *Is it a rectangle?* TF (near-misses: trapezoid, rhombus). "Diamond" is not used as a name.
- **E21 solids** — A *Solid or Flat?* MC. B *Name the Thing* MC (ball, dice, party hat, tin). C *Solid Match* MAT.
- **E22 sides & corners** — A *Count the Sides* NUM (sides red, corners blue dots). B *Sides or Corners?* MC (circle included at L3). C *Which Shape Has 4 Corners?* MC.
- **E23 position words** — A *Where Is the Ball?* MC (on/under → in front/behind/next to → between/above/below). B *Put It There* **drag-to-target**. C *Say Where* FIB. No left/right; scene always from child's view.
- **E24 movement** — A *Robot Says* MC (forward/back → up/down → two-step). B *Be the Robot* ORD arrows to a star. C *Which Way Did It Go?* MC. (Designer suggests dropping B/C to MC/ORD in a first release.)
- **E25 direct comparison** — A *Longer or Shorter?* MC (ends aligned; staggered at L3). B *Heavy or Light?* MC (balloon vs stone). C *Holds More?* MC (tall thin vs short wide, pour animation).
- **E26 order 3 by size** — A *Small to Big* ORD. B *Which Goes in the Middle?* MC. C *Fix the Line* ORD.

### Patterns, sorting, time, data
- **E27 sort by one attribute** — A *Sort It* (drag to 2–3 bins, colour→shape→size). B *Odd One Out* MC. C *Keep the Rule* (items vary on several attributes). Needs **drag-to-bins** (multi-item targets).
- **E28 name the rule** — A *What's the Rule?* MC. B *Name the Group* FIB. C *Rule Detective* MC: rule separating two groups.
- **E29 copy/extend patterns** — A *Copy the Pattern* ORD (AB → AAB/ABB → longer). B *What Comes Next?* MC. C *Build Two More* ORD (open slots).
- **E30 missing item** — A *Missing Bead* MC. B *Fill the Gap* FIB. C *Find the Mistake* MC. Feedback brackets the whole repeat unit.
- **E31 parts of the day** — A *When Does It Happen?* MC (sun/moon icons). B *Line Up My Day* ORD. C *Sun or Moon?* TF.
- **E32 days of week** — A *Days in Order* ORD (weekend cards coloured differently). B *Day After* MC (Sun→Mon wraparound at L3). C *Weekend or School Day?* TF.
- **E33 yesterday/today/tomorrow** — A *Yesterday, Today, Tomorrow* MC on a 3-day strip. B *What Day Was It?* FIB. C *Put Them in Order* ORD.
- **E34 simple object graphs** — A *Which Has More?* MC (tap-and-count feedback). B *How Many?* NUM. C *How Many More?* NUM. Needs a shared pictograph presentation component.

## 3. New templates / components required

| Need | Used by | Note |
|---|---|---|
| tap-to-tag counter | E2 A | |
| drag-n-into-container | E4 A, E18 C | one template likely covers both |
| drag items to targets (bins + scene spots) | E23 B, E27 A/C | designer's advice: build one, reuse |
| handwriting canvas | E10 A | largest new piece; consider deferring |
| grid movement | E24 B/C | fall back to MC/ORD first |
| pictograph presentation | E34 | presentation, existing templates |

## 4. Open decisions
- Mastery rule (designers disagree: 5-in-a-row vs 4-of-5; drop after 2 misses vs 2 in a row).
- Counting mastery: one-to-one to 10 only, or all of 20?
- Update the framework's P list or only the product baseline?
- Is E33 (yesterday/today/tomorrow) in scope as a competency?
- Designers did not read the code: template names/capabilities unverified (checked in section 5).

## 5. Syllabus-expert review of the activities (2026-09-27)

Reviewer's judgment, not yet applied to sections 2–3. Verdict: list is sound; ~6 activities are
off-target; template claims need one correction.

**Template check.** The 6 existing templates (fill-in-the-blank, matching, multiple-choice,
numeric-answer, ordering, true-false) have no drag/bin/target/container support; every row of
section 3 is genuinely NEW. Two undeclared gaps: `template-matching` renders pairs as a
choice-per-pair sequence, so **line-drawing (E12 C) and drag matching (E5 B, E9 A, E21 C) degrade
to per-pair multiple choice**. `template-ordering` has no `toPresentation`; drag-to-order (E1 A,
E26, E29) is **unverified** in the app.

**Off-target → fix**
- E3 B: "is the pile 5?" confuses age 5–6 → ask "how many?" with the last tag highlighted.
- E8 B: mirrored numerals test reversal perception → only after E10, no mirrors at L1–2.
- E12 C: needs line drawing → animated pairing, then MC.
- E14 A: mixed font sizes invite size-based answers → keep font size fixed.
- E19 C: intent unclear → replace.
- E20 A: keep, but limit the tilted-square level to an orientation contrast.
- E24 B/C: robot programming too hard for 5–6 → keep only A.
- E28, E30: FIB adds reading/spelling load → picture-tap MC.
- E33 B: depends on the day sequence → make it depend on E32.

**Redundant → change**: E1 keep A, drop B; E5 B → "how many dots, no flash" MC; E7 A+B merge;
E15 C → "colour the 2nd"; E16 C + E18 A merge; E22 C drop; E26 keep A + one of B/C; E31 C merge
into A; E34 tallying facet uncovered (defer).

**Open decisions (reviewer's recommendation)**
- Mastery: 4 of 5 correct advances; drop a level after 2 misses in a row.
- Counting: master one-to-one to 10; 20 is a stretch level.
- Framework: update the product baseline only for now; touch the framework P list once entries are stable.
- E33: keep in scope.

**First release, existing templates only (MC/NUM):** E5 A, E8, E9 B, E12 A/B, E14, E16 A/B,
E17 A/B, E20, E23 A, E25, E29 B, E32 A/B.
