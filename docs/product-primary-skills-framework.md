# The Primary Skills Framework

> **Everything a child could reasonably be expected to master by the end of primary school.**
>
> A cross-subject, country-neutral checklist of competencies, from the pre-school baseline
> through the end of Grade 5 — academic, physical, practical, artistic, social and financial.

---

## Status and scope

This document is a **long-horizon reference**, not a build order.

The product's MVP is deliberately mathematics-only (`docs/product/vision.md`), and the
constitution's multi-subject principle says the architecture must not be *structurally* limited to
mathematics. This file is the answer to "limited to what, then?" — it is the full map of the
territory the platform could eventually cover, written down once so that data-model and curriculum
decisions made today are not quietly shaped around arithmetic alone.

Nothing here is committed scope. Section B (Mathematics) is the only part that feeds the current
roadmap, and it is the source material for turning `docs/product/CURRICULUM.md` from a list of
area names into a real competency tree.

---

## Why this is deliberately demanding

This is a **maximal** checklist, written as an answer to "what would a genuinely well-educated
eleven-year-old be able to do?" — not "what does the average school actually deliver?"

No child ticks every box. Very few tick most of them. That is intentional and it is not a defect:

* A ceiling set at the average is not a ceiling, it is a floor with good marketing.
* Roughly half of what follows — swimming, cycling, cooking, money, first aid, an instrument,
  navigation, emotional regulation — is not taught by any school system anywhere. It is learned at
  home, or it is not learned at all. A checklist that silently omits it makes it invisible.
* Read it as **a menu of ambition and a map of gaps**, never as a pass/fail bar to measure a child
  against. A child who has ticked 60% of this, including things no curriculum tests, is doing
  extremely well.

The framework is also **descriptive of capability, never of worth**. Items are phrased as things a
child can *do*, so that each one is observable and, in principle, checkable — not as traits a child
either has or lacks.

---

## How to read the levels

Each item carries the grade **by the end of which it should be solidly mastered** — meaning
performed reliably, unprompted, and without an adult walking through it step by step.

| Tag | Meaning | Typical age |
| --- | --- | --- |
| **P** | **Pre-school baseline** — already in place when Grade 1 starts | before 6 |
| **G1** | mastered by the end of Grade 1 | 6–7 |
| **G2** | mastered by the end of Grade 2 | 7–8 |
| **G3** | mastered by the end of Grade 3 | 8–9 |
| **G4** | mastered by the end of Grade 4 | 9–10 |
| **G5** | mastered by the end of Grade 5 — the end-of-primary target | 10–11 |

Two conventions matter when reading a tag:

* **A tag is a mastery date, not a start date.** A `G4` item is usually introduced in G2 or G3 and
  practiced for years before it is reliably owned. The tag says when the wobbling should stop.
* **Later tags assume the earlier ones.** Items are not repeated as they deepen; "reads fluently"
  at `G3` is not restated at `G5` with bigger books. Where a skill genuinely changes in kind rather
  than degree, it appears twice with different wording.

Age bands are approximate and vary by country, by school-entry cut-off and by child. Treat a
one-year deviation in either direction as noise, not as a signal.

---

## Design principles

1. **Country-neutral.** No national curriculum, no national syllabus, no single country's history
   or institutions. Where a skill is inherently local ("the political system of your country"), the
   item is phrased generically and marked *local*.
2. **Demonstrable.** Every item is something a child can be observed doing. "Understands
   fractions" is not a competency; "can tell which of 2/3 and 3/5 is larger, and explain why" is.
3. **Whole-child.** Academic knowledge is roughly a third of this document. Physical, practical,
   artistic, emotional and financial competence occupy the rest, because they occupy the rest of a
   life.
4. **Transferable.** Skills that keep their value regardless of era, technology or career are
   preferred over facts that date. Where facts are listed, they are the load-bearing ones that
   everything else attaches to.
5. **Mastery, not exposure.** Having met a topic once in a lesson is not mastery. The bar
   throughout is independent, reliable performance — the same bar the product's mastery engine
   applies to arithmetic.

---

## Contents

| | Domain | | Domain |
| --- | --- | --- | --- |
| **A** | [Language & Literacy](#a--language--literacy) | **K** | [Music](#k--music) |
| **B** | [Mathematics](#b--mathematics) | **L** | [Visual Arts & Making Things](#l--visual-arts--making-things) |
| **C** | [Science & the Natural World](#c--science--the-natural-world) | **M** | [Dance, Drama & Performance](#m--dance-drama--performance) |
| **D** | [Geography & the Planet](#d--geography--the-planet) | **N** | [Practical Life & Household Skills](#n--practical-life--household-skills) |
| **E** | [History & a Sense of Time](#e--history--a-sense-of-time) | **O** | [Outdoors, Nature & Orientation](#o--outdoors-nature--orientation) |
| **F** | [Civics, Society & Ethics](#f--civics-society--ethics) | **P** | [Social & Emotional Skills](#p--social--emotional-skills) |
| **G** | [Money & Financial Literacy](#g--money--financial-literacy) | **Q** | [Learning How to Learn](#q--learning-how-to-learn) |
| **H** | [Digital Literacy & Technology](#h--digital-literacy--technology) | **R** | [A Second Language](#r--a-second-language) |
| **I** | [Physical Skills, Sport & the Body](#i--physical-skills-sport--the-body) | **S** | [Games, Logic & Strategy](#s--games-logic--strategy) |
| **J** | [Health, Safety & First Aid](#j--health-safety--first-aid) | **T** | [General Knowledge & Cultural Literacy](#t--general-knowledge--cultural-literacy) |

Then: [the pre-school baseline](#the-pre-school-baseline-a-readiness-snapshot) ·
[grade-by-grade summary](#appendix-1--grade-by-grade-summary) ·
[the twenty benchmarks](#appendix-2--the-twenty-end-of-primary-benchmarks) ·
[deliberate omissions](#appendix-3--deliberate-omissions)

---

## The pre-school baseline: a readiness snapshot

Everything tagged **P** below is expected to be in place *before* Grade 1 begins. Those items stay
in their own domains — this section is a quick cross-domain readiness check, not a separate
checklist to tick.

A child ready for Grade 1 can typically:

* Speak in full, comprehensible sentences and be understood by a stranger.
* Listen to a story for ten minutes and answer questions about what happened.
* Recognise their own written name, and most letters of the alphabet.
* Count objects accurately to at least 20, and recognise quantities up to 5 without counting.
* Hold a pencil with a functional grip, and draw a recognisable person with a head, body and limbs.
* Use scissors to cut along a line.
* Dress themselves, including shoes; manage the toilet and wash their hands unaided.
* Eat with cutlery at a table.
* Say their own full name, their parents' names, and their age.
* Separate from a parent without distress, and stay with a group of children and one adult.
* Take turns, share, and wait a short while for something they want.
* Ask an adult for help in words when they are stuck, hurt or frightened.
* Name the basic emotions in themselves and recognise them in others.
* Run, jump with two feet, climb, throw and catch a large ball, and pedal (a bike with stabilisers,
  or a balance bike).
* Follow a two-step instruction and tidy up when asked.

A gap in this list at age six is common and closes fast with practice. It is a starting point to
work from, not a verdict.

---

## A — Language & Literacy

*The mother tongue. Everything else in this document is learned through it, which is why it is
first and why it is the longest section.*

### A1. Listening and oral comprehension

- [ ] **P** — Follows a two-step spoken instruction.
- [ ] **P** — Listens to a story for 10 minutes and answers questions about what happened.
- [ ] **G1** — Follows a three-step instruction without repetition.
- [ ] **G1** — Retells a story just heard, in order, with the main characters named.
- [ ] **G2** — Listens to a 15-minute explanation and reports back its main point.
- [ ] **G3** — Takes a simple spoken message (who called, what about, what to do) and passes it on
      accurately.
- [ ] **G3** — Distinguishes a speaker's main point from a supporting detail.
- [ ] **G4** — Listens to an opposing view without interrupting, then restates it fairly before
      replying.
- [ ] **G4** — Takes rough notes from a spoken explanation and reconstructs it later from them.
- [ ] **G5** — Detects when a speaker is stating an opinion as though it were a fact.

### A2. Speaking and oral expression

- [ ] **P** — Speaks in full sentences a stranger can understand.
- [ ] **P** — Says their full name, age, and their parents' names.
- [ ] **G1** — Recounts something that happened to them, in the right order, so a listener follows
      it.
- [ ] **G1** — Asks a question when they do not understand, instead of staying silent.
- [ ] **G2** — Describes an object or a process clearly enough for a listener to picture it.
- [ ] **G2** — Answers the telephone politely, takes the caller's name, and calls an adult.
- [ ] **G3** — Explains how to do something they know well, step by step, to someone who does not.
- [ ] **G3** — Adjusts register between a friend, a teacher and an unfamiliar adult.
- [ ] **G4** — States an opinion and gives at least two reasons for it.
- [ ] **G4** — Disagrees with a peer's idea without attacking the peer.
- [ ] **G5** — Holds a short structured discussion: makes a point, hears the reply, concedes or
      answers it.
- [ ] **G5** — Introduces two people to each other, and introduces themselves to an adult with a
      handshake or local equivalent.

### A3. Speaking to an audience

- [ ] **G1** — Recites a short memorised poem or rhyme in front of the class.
- [ ] **G2** — Shows an object to the class and talks about it for a minute without reading.
- [ ] **G3** — Gives a 2–3 minute prepared talk from notes rather than a script.
- [ ] **G3** — Speaks loudly enough to be heard at the back of a room, facing the audience.
- [ ] **G4** — Uses a simple visual aid (poster, slide, object) without reading from it aloud.
- [ ] **G4** — Takes questions at the end of a talk and answers them, including "I don't know".
- [ ] **G5** — Delivers a 5-minute prepared presentation with a clear opening, middle and close.
- [ ] **G5** — Recites from memory a substantial poem or passage (20+ lines) with expression.

### A4. Reading — decoding and fluency

- [ ] **P** — Recognises their own written name.
- [ ] **P** — Names most letters of the alphabet and knows that print carries meaning, left to
      right.
- [ ] **P** — Hears and produces rhymes; claps the syllables in a word.
- [ ] **G1** — Knows every letter–sound correspondence of the language, including the common
      digraphs.
- [ ] **G1** — Blends sounds to decode an unfamiliar regular word without help.
- [ ] **G1** — Reads a simple sentence aloud and understands what it says.
- [ ] **G2** — Reads an age-appropriate text aloud fluently, respecting full stops and question
      marks.
- [ ] **G2** — Recognises the common irregular/high-frequency words on sight.
- [ ] **G3** — Reads silently and faster than they read aloud.
- [ ] **G3** — Reads aloud with expression, changing voice for dialogue.
- [ ] **G4** — Decodes an unfamiliar long word by breaking it into parts.
- [ ] **G5** — Reads an unfamiliar text aloud at first sight without stumbling.

### A5. Reading — comprehension

- [ ] **G1** — Answers literal questions about a text just read (who, what, where).
- [ ] **G2** — Predicts what will happen next and justifies the prediction from the text.
- [ ] **G2** — Retells a read story in their own words, keeping the sequence.
- [ ] **G3** — Identifies the main idea of a paragraph and of a whole text.
- [ ] **G3** — Infers something the text implies but never states (how a character feels, and why).
- [ ] **G3** — Works out an unknown word's meaning from its context, and checks it afterwards.
- [ ] **G4** — Summarises a chapter in five sentences without copying phrases.
- [ ] **G4** — Distinguishes fact from opinion inside a single text.
- [ ] **G4** — Names the narrator and notices whether the story is told from inside or outside a
      character.
- [ ] **G5** — Compares how two texts treat the same subject and says where they disagree.
- [ ] **G5** — Identifies an author's purpose: to inform, to persuade, to entertain, to sell.
- [ ] **G5** — Reads and follows written instructions of ten or more steps (a recipe, a model kit, a
      game's rules) without an adult.
- [ ] **G5** — Reads a non-fiction page and turns it into their own notes.

### A6. The reading habit

- [ ] **P** — Chooses to look at books; asks to be read to.
- [ ] **G1** — Handles books properly and returns them to their place.
- [ ] **G2** — Chooses their own book from a library or shelf and finishes it.
- [ ] **G2** — Uses a library: finds a section, borrows a book, returns it on time.
- [ ] **G3** — Reads independently for 20 minutes without being asked to.
- [ ] **G3** — Reads a chapter book of 100+ pages to the end.
- [ ] **G4** — Has a favourite author or series, and can say why.
- [ ] **G4** — Reads at least one non-fiction book on a subject that interests them.
- [ ] **G5** — Reads for 30+ minutes by choice, regularly, including books nobody assigned.
- [ ] **G5** — Has read across at least four kinds of text: novel, non-fiction, poetry, myth/legend,
      comic, biography.

### A7. Handwriting and typing

- [ ] **P** — Holds a pencil with a functional grip; draws a recognisable person.
- [ ] **P** — Writes their own first name.
- [ ] **G1** — Forms every lower-case and capital letter correctly, in the right direction.
- [ ] **G1** — Writes on the line, with spaces between words.
- [ ] **G2** — Writes a full page legibly without their hand tiring out.
- [ ] **G3** — Writes fluently in the joined/cursive form used locally, at a usable speed.
- [ ] **G3** — Copies from a board or a book accurately.
- [ ] **G4** — Keeps handwriting legible when writing fast or under time pressure.
- [ ] **G4** — Types with two hands, without hunting for every key.
- [ ] **G5** — Touch-types a short text at a usable speed (roughly 20+ words per minute).
- [ ] **G5** — Writes a page of legible, well-laid-out prose: margins, paragraphs, a title.

### A8. Spelling and word study

- [ ] **G1** — Spells the most frequent words of the language correctly from memory.
- [ ] **G1** — Attempts an unknown word phonetically rather than refusing to write it.
- [ ] **G2** — Applies the language's basic spelling patterns and their common exceptions.
- [ ] **G2** — Uses a picture dictionary or a simple dictionary to check a word.
- [ ] **G3** — Uses an alphabetical dictionary fluently, including guide words.
- [ ] **G3** — Knows the common prefixes and suffixes and what they do to a word's meaning.
- [ ] **G4** — Spells homophones correctly according to the sense of the sentence.
- [ ] **G4** — Builds word families from a root, and guesses an unknown word's meaning from its
      root.
- [ ] **G5** — Proofreads their own writing and finds most of their own spelling errors.
- [ ] **G5** — Uses a thesaurus to find a better word rather than a longer one.

### A9. Grammar and sentence craft

- [ ] **G1** — Starts a sentence with a capital and ends it with a full stop.
- [ ] **G1** — Uses question marks and exclamation marks correctly.
- [ ] **G2** — Identifies nouns, verbs and adjectives in a sentence.
- [ ] **G2** — Makes subject and verb agree; keeps a piece of writing in one tense.
- [ ] **G3** — Uses commas in a list, and apostrophes for possession and contraction.
- [ ] **G3** — Writes in past, present and future deliberately, and switches on purpose.
- [ ] **G3** — Joins two short sentences into one with a conjunction.
- [ ] **G4** — Punctuates direct speech correctly.
- [ ] **G4** — Identifies the subject, the verb and the object of a sentence.
- [ ] **G4** — Varies sentence length deliberately for effect.
- [ ] **G5** — Uses paragraphs correctly: one idea each, and a new one when the idea changes.
- [ ] **G5** — Recognises and repairs a run-on sentence and a fragment.
- [ ] **G5** — Uses pronouns unambiguously, so the reader always knows who "he", "she" or "it" is.

### A10. Writing — composition

- [ ] **P** — Dictates a story to an adult to be written down.
- [ ] **G1** — Writes a few connected sentences about a real event.
- [ ] **G2** — Writes a short story with a beginning, a middle and an end.
- [ ] **G2** — Writes a simple letter or message to a real person, and sends it.
- [ ] **G3** — Writes a description that uses more than sight — sound, smell, texture.
- [ ] **G3** — Writes a set of instructions someone else can actually follow.
- [ ] **G3** — Plans a piece of writing before starting it, on paper.
- [ ] **G4** — Writes a factual report on a topic, organised into sections, in their own words.
- [ ] **G4** — Writes an opinion piece: claim, reasons, conclusion.
- [ ] **G4** — Revises a draft after feedback — rewrites, rather than just fixing spelling.
- [ ] **G5** — Writes a 1–2 page story with a real plot, a problem and a resolution.
- [ ] **G5** — Writes a formal letter or email (complaint, request, thank-you) with the right
      register.
- [ ] **G5** — Writes a poem using a deliberate form or device: rhyme, rhythm, metaphor, repetition.
- [ ] **G5** — Writes a summary of something they read, correctly attributed, without copying it.

### A11. Literary appreciation

- [ ] **G2** — Knows the difference between a true story and an invented one.
- [ ] **G3** — Names the setting, characters and problem in a story.
- [ ] **G3** — Knows what a metaphor and a simile are, and finds one in a text.
- [ ] **G4** — Recognises common story shapes: quest, rescue, rags-to-riches, trickster.
- [ ] **G4** — Says why a character acted as they did, using evidence from the text.
- [ ] **G5** — Discusses a book with others: what they liked, what failed, and why.
- [ ] **G5** — Recognises when a text is trying to make them feel something, and how it does it.

> **End-of-primary benchmark.** Reads a 200-page novel by choice and discusses it; writes two
> pages of clear, correctly punctuated, self-proofread prose on an unfamiliar topic; delivers a
> five-minute talk to an audience without a script.

---

## B — Mathematics

> **Superseded for mathematics** by `docs/product/MATH-COMPETENCY-REFERENCE.md` (PK–G5, 410 rows,
> built from many national curricula). This section is kept as the short cross-subject overview.

*The most detailed section, because it is the one the product actually builds first. This is the
raw material for turning `docs/product/CURRICULUM.md` into a competency tree: each item below is
intended to be small enough to be trainable by a single exercise plugin and checkable by the
mastery engine.*

### B1. Counting and number sense

- [ ] **P** — Counts objects accurately to 20, one number per object.
- [ ] **P** — Recognises quantities up to 5 at a glance, without counting.
- [ ] **P** — Compares two groups and says which has more.
- [ ] **P** — Recognises written digits 0–9.
- [ ] **G1** — Counts forwards and backwards to 100 from any starting number.
- [ ] **G1** — Reads and writes numbers to 100 in digits.
- [ ] **G1** — Counts in 2s, 5s and 10s.
- [ ] **G1** — Knows odd and even, and can test a number.
- [ ] **G1** — Uses ordinal numbers (first, second, tenth).
- [ ] **G2** — Counts to 1,000; reads and writes numbers to 1,000.
- [ ] **G2** — Orders any set of numbers to 1,000 and places them on a number line.
- [ ] **G3** — Reads, writes and orders numbers to 10,000.
- [ ] **G4** — Reads, writes and orders numbers to 1,000,000.
- [ ] **G4** — Understands negative numbers on a number line, and uses them for temperature and
      debt.
- [ ] **G5** — Knows what a prime number is and identifies the primes below 50.
- [ ] **G5** — Finds all factors of a number below 100, and common multiples of two small numbers.
- [ ] **G5** — Recognises square numbers and knows the squares to 12×12.
- [ ] **G5** — Reads and writes Roman numerals to 1,000.

### B2. Place value

- [ ] **G1** — Understands a two-digit number as tens and units.
- [ ] **G2** — Understands hundreds, tens and units; partitions and recombines any three-digit
      number.
- [ ] **G2** — Says what each digit is worth in a three-digit number.
- [ ] **G3** — Extends place value to thousands; adds and subtracts 1, 10, 100, 1,000 to any number
      instantly.
- [ ] **G4** — Extends place value to millions.
- [ ] **G4** — Rounds any number to the nearest 10, 100 or 1,000.
- [ ] **G5** — Extends place value to the right of the decimal point: tenths, hundredths,
      thousandths.
- [ ] **G5** — Rounds decimals to a given number of decimal places.
- [ ] **G5** — Multiplies and divides by 10, 100 and 1,000 and explains what happens to the digits.

### B3. Addition and subtraction

- [ ] **P** — Adds and subtracts small quantities with objects in front of them.
- [ ] **G1** — Knows all number bonds within 10 by heart.
- [ ] **G1** — Adds and subtracts within 20.
- [ ] **G1** — Understands subtraction as both "take away" and "difference between".
- [ ] **G2** — Knows all number bonds within 20 by heart.
- [ ] **G2** — Adds and subtracts two-digit numbers with regrouping, written down.
- [ ] **G2** — Knows that addition is commutative and subtraction is not.
- [ ] **G3** — Adds and subtracts three-digit numbers in columns, fluently and accurately.
- [ ] **G3** — Checks a subtraction with the inverse addition.
- [ ] **G4** — Adds and subtracts four-digit numbers, including across zeros.
- [ ] **G5** — Adds and subtracts any whole numbers and decimals, fluently, in columns.

### B4. Multiplication and division

- [ ] **G1** — Understands multiplication as repeated addition and as an array.
- [ ] **G1** — Shares a quantity equally between 2 and between 4.
- [ ] **G2** — Knows the 2, 5 and 10 times tables by heart, both ways.
- [ ] **G2** — Understands division as both sharing and grouping, and meets remainders.
- [ ] **G3** — Knows the 3, 4 and 8 times tables by heart.
- [ ] **G3** — Multiplies a two-digit number by a one-digit number, written down.
- [ ] **G3** — Knows that multiplication is commutative and division is not.
- [ ] **G4** — **Knows all multiplication tables to 12×12 by heart, and the matching division
      facts.**
- [ ] **G4** — Multiplies a three-digit number by a one-digit number.
- [ ] **G4** — Divides a three-digit number by a one-digit number with a remainder, and says what
      the remainder means in context.
- [ ] **G5** — Multiplies a four-digit number by a two-digit number (long multiplication).
- [ ] **G5** — Divides by a two-digit number (long or short division), expressing the remainder as a
      whole number, a fraction or a decimal as the situation demands.
- [ ] **G5** — Knows the divisibility tests for 2, 3, 4, 5, 9 and 10.
- [ ] **G5** — Applies the order of operations correctly, including brackets.

### B5. Mental mathematics

- [ ] **G1** — Adds and subtracts within 20 mentally, without fingers.
- [ ] **G2** — Adds and subtracts a one-digit number to any two-digit number mentally.
- [ ] **G2** — Doubles and halves any number to 50 mentally.
- [ ] **G3** — Adds and subtracts two two-digit numbers mentally.
- [ ] **G3** — Bridges through 10 and through 100 as a deliberate strategy.
- [ ] **G4** — Uses rounding and compensation mentally (+99 as +100−1).
- [ ] **G4** — Multiplies any table fact instantly, in under three seconds.
- [ ] **G5** — Multiplies a two-digit number by a one-digit number mentally.
- [ ] **G5** — Finds 10%, 25%, 50% and 75% of a quantity mentally.
- [ ] **G5** — Estimates an answer before calculating, and notices when the calculated answer is
      impossible.

### B6. Fractions

- [ ] **G1** — Recognises and finds a half and a quarter of a shape and of a small quantity.
- [ ] **G2** — Recognises thirds, quarters and fifths; knows 2/4 = 1/2.
- [ ] **G3** — Understands a fraction as a number on the number line, not only as part of a cake.
- [ ] **G3** — Finds equivalent fractions and simplifies a simple fraction.
- [ ] **G3** — Adds and subtracts fractions with the same denominator.
- [ ] **G4** — Compares and orders fractions with different denominators.
- [ ] **G4** — Converts between improper fractions and mixed numbers.
- [ ] **G4** — Finds a fraction of a quantity (3/5 of 40).
- [ ] **G5** — Adds and subtracts fractions with different denominators.
- [ ] **G5** — Multiplies a fraction by a whole number, and by another fraction.
- [ ] **G5** — Converts fluently between fractions, decimals and percentages for the common values.

### B7. Decimals, percentages, ratio

- [ ] **G3** — Reads a decimal in a price and in a measurement.
- [ ] **G4** — Understands tenths and hundredths as decimals; places decimals on a number line.
- [ ] **G4** — Adds and subtracts decimals to two places.
- [ ] **G4** — Understands percentage as "out of 100".
- [ ] **G5** — Multiplies and divides decimals by whole numbers.
- [ ] **G5** — Finds any percentage of a quantity.
- [ ] **G5** — Calculates a percentage increase and a percentage decrease (a discount, a price
      rise).
- [ ] **G5** — Understands ratio and shares a quantity in a given ratio (share 20 in 3:1).
- [ ] **G5** — Solves simple scaling problems (if 3 items cost 12, what do 7 cost).

### B8. Measurement

- [ ] **P** — Compares objects directly: longer/shorter, heavier/lighter, holds more/less.
- [ ] **G1** — Measures length in whole centimetres with a ruler, starting from zero.
- [ ] **G1** — Uses the vocabulary of measure correctly across length, mass, capacity and time.
- [ ] **G2** — Measures mass on a scale and capacity in a jug, reading the graduations.
- [ ] **G2** — Knows the metric units and their relationships: mm, cm, m, km; g, kg; ml, l.
- [ ] **G3** — Converts between adjacent metric units (cm↔m, g↔kg, ml↔l).
- [ ] **G3** — Measures and calculates the perimeter of a rectangle and of a compound shape.
- [ ] **G4** — Calculates the area of a rectangle, and of a shape made of rectangles.
- [ ] **G4** — Estimates a length, a mass and a volume before measuring, and is roughly right.
- [ ] **G4** — Reads a scale with unlabelled intermediate divisions.
- [ ] **G5** — Calculates the volume of a cuboid, and knows that 1 litre = 1,000 cm³.
- [ ] **G5** — Converts between metric units across two steps (mm→m, ml→l→cl).
- [ ] **G5** — Knows roughly what an imperial/customary unit is worth in metric, when the local
      context uses one.
- [ ] **G5** — Has a reliable body-ruler: knows their own height, hand span, pace length, and uses
      them to estimate.

### B9. Time

- [ ] **P** — Knows the order of the day: morning, afternoon, evening, night.
- [ ] **P** — Names the days of the week.
- [ ] **G1** — Tells the time to the hour and half-hour on an analogue clock.
- [ ] **G1** — Names the months and the seasons, in order.
- [ ] **G2** — Tells the time to five minutes, and to the quarter hour.
- [ ] **G2** — Knows how many days in a week, weeks in a year, days in each month.
- [ ] **G3** — Tells the time to the minute, analogue and digital, and converts between 12- and
      24-hour clocks.
- [ ] **G3** — Calculates a duration between two times within the hour.
- [ ] **G4** — Calculates durations crossing hours and midnight; reads a timetable and plans a
      journey with it.
- [ ] **G4** — Uses a calendar to work out a date some weeks ahead.
- [ ] **G5** — Converts between seconds, minutes, hours, days and years fluently.
- [ ] **G5** — Handles time-zone differences well enough to schedule a call to another country.

### B10. Geometry — shape

- [ ] **P** — Names circle, square, triangle, rectangle.
- [ ] **G1** — Names common 2D and 3D shapes: circle, triangle, square, rectangle, cube, sphere,
      cylinder, cone.
- [ ] **G1** — Recognises a shape whatever its orientation or size.
- [ ] **G2** — Counts sides, vertices, edges and faces; sorts shapes by their properties.
- [ ] **G2** — Recognises a line of symmetry and completes a symmetrical figure.
- [ ] **G3** — Classifies triangles (equilateral, isosceles, scalene, right-angled).
- [ ] **G3** — Classifies quadrilaterals and knows why a square is also a rectangle.
- [ ] **G3** — Identifies right angles, and angles greater and smaller than a right angle.
- [ ] **G4** — Measures and draws an angle with a protractor, to the nearest degree.
- [ ] **G4** — Knows that angles on a straight line total 180° and around a point 360°, and uses it.
- [ ] **G4** — Knows the angles of a triangle sum to 180°.
- [ ] **G5** — Draws a shape accurately from a specification, with ruler, protractor and compasses.
- [ ] **G5** — Names the parts of a circle: centre, radius, diameter, circumference; knows the
      diameter is twice the radius.
- [ ] **G5** — Identifies the net of a cube and of other simple solids.

### B11. Geometry — position and movement

- [ ] **P** — Uses positional language: on, under, behind, between, next to.
- [ ] **G1** — Describes a route using left, right, forward and turns.
- [ ] **G2** — Describes a position on a grid with letters and numbers (B4).
- [ ] **G3** — Uses the four compass directions, and quarter/half turns as 90° and 180°.
- [ ] **G4** — Plots and reads coordinates in the first quadrant.
- [ ] **G4** — Translates and reflects a shape on a grid.
- [ ] **G5** — Plots coordinates in all four quadrants, with negatives.
- [ ] **G5** — Rotates a shape about a point, and describes the rotation.
- [ ] **G5** — Uses and understands a scale on a plan or map (1 cm : 100 m).

### B12. Data, chance and statistics

- [ ] **G1** — Sorts objects by a chosen criterion and explains the rule used.
- [ ] **G1** — Reads a simple pictogram.
- [ ] **G2** — Collects data with a tally chart and draws a bar chart from it.
- [ ] **G3** — Reads a bar chart and a pictogram with a scale (one symbol = 5).
- [ ] **G3** — Answers comparison questions from a table of data.
- [ ] **G4** — Draws and reads a line graph, and describes the trend it shows.
- [ ] **G4** — Finds the mode and the range of a data set.
- [ ] **G5** — Calculates the mean, and says when it is and is not a useful summary.
- [ ] **G5** — Reads a pie chart and relates its sectors to fractions and percentages.
- [ ] **G5** — Uses the language of chance (impossible, unlikely, even chance, likely, certain) and
      places simple events on a 0–1 scale.
- [ ] **G5** — **Spots a misleading graph** — a truncated axis, a missing scale, cherry-picked
      years.

### B13. Algebraic thinking

- [ ] **G1** — Continues a repeating pattern and describes its rule.
- [ ] **G2** — Finds the missing number in a simple equation (7 + ? = 12).
- [ ] **G3** — Continues a number sequence and states its rule in words.
- [ ] **G4** — Uses a symbol or a box for an unknown and solves for it.
- [ ] **G4** — Describes the relationship between two columns of a table as a rule.
- [ ] **G5** — Uses a letter for an unknown; substitutes a value into a simple formula.
- [ ] **G5** — Solves a one-step equation and checks the solution by substituting it back.
- [ ] **G5** — Expresses a general rule for a sequence in terms of its position.

### B14. Problem solving and reasoning

- [ ] **G1** — Chooses whether a one-step word problem needs addition or subtraction.
- [ ] **G2** — Solves a one-step word problem in any of the four operations and writes the number
      sentence.
- [ ] **G3** — Solves a two-step word problem, doing the steps in the right order.
- [ ] **G3** — Draws a picture, bar model or diagram to represent a problem.
- [ ] **G4** — Solves multi-step problems mixing operations and units.
- [ ] **G4** — Works systematically to find *all* the solutions to a problem, not just one.
- [ ] **G4** — Explains their method aloud so another child can follow it.
- [ ] **G5** — Judges whether an answer is reasonable, by estimating first and by checking against
      the question.
- [ ] **G5** — Finds their own mistake in a wrong answer, rather than starting over blindly.
- [ ] **G5** — Solves a problem with missing or surplus information, and says which is which.
- [ ] **G5** — Tackles an unfamiliar problem with no taught method, and gets somewhere by trying,
      checking and adjusting.
- [ ] **G5** — Uses a calculator correctly *and* knows when not to — checks its output against a
      mental estimate.

> **End-of-primary benchmark.** All tables to 12×12 instant and automatic; long multiplication and
> division reliable; fractions, decimals and percentages interchangeable at will; and an unfamiliar
> multi-step word problem solved independently, with the answer checked and justified.

---

## C — Science & the Natural World

*Half of this is knowledge; the other half is the habit of asking how anyone knows.*

### C1. Working scientifically

- [ ] **P** — Asks "why?" and "what happens if?" about the physical world.
- [ ] **G1** — Observes carefully and describes what they see, without inventing.
- [ ] **G1** — Sorts and groups objects by an observable property.
- [ ] **G2** — Makes a prediction before an experiment and checks it afterwards.
- [ ] **G2** — Records observations in a drawing, a table or a chart.
- [ ] **G3** — Understands a fair test: change one thing, keep everything else the same.
- [ ] **G3** — Uses simple equipment correctly: thermometer, magnifier, measuring cylinder, scales,
      stopwatch.
- [ ] **G4** — Plans a simple investigation to answer a question they posed themselves.
- [ ] **G4** — Repeats a measurement instead of trusting a single reading.
- [ ] **G4** — Draws a conclusion from their results, including "the result didn't show what I
      expected".
- [ ] **G5** — Distinguishes an observation from an inference from an opinion.
- [ ] **G5** — Identifies what could have gone wrong in an experiment and how to improve it.
- [ ] **G5** — Knows that scientific ideas change when evidence changes, and gives one example.

### C2. Living things

- [ ] **P** — Knows living from non-living; names common animals and plants.
- [ ] **G1** — Names the parts of a plant and of the human body.
- [ ] **G1** — Knows what plants and animals need to stay alive.
- [ ] **G2** — Sorts animals into major groups: mammals, birds, fish, reptiles, amphibians, insects.
- [ ] **G2** — Describes a life cycle (butterfly, frog, plant from seed).
- [ ] **G3** — Knows how plants make their own food from light, water and air, and why that matters
      to everything else.
- [ ] **G3** — Knows what a habitat is and how an animal is suited to its own.
- [ ] **G3** — Builds a food chain from producer to top predator, and says what happens if one link
      is removed.
- [ ] **G4** — Classifies a living thing using a branching key.
- [ ] **G4** — Knows the major organ systems and what each does: digestion, circulation, breathing,
      skeleton and muscles, nerves.
- [ ] **G4** — Knows the function of the heart, lungs, stomach, intestines, brain, kidneys and skin.
- [ ] **G5** — Explains reproduction and the life cycle in humans and other mammals, in
      age-appropriate terms.
- [ ] **G5** — Knows that offspring resemble their parents but are not identical, and why.
- [ ] **G5** — Explains, in outline, how species change over long periods and how fossils show it.
- [ ] **G5** — Knows what a microbe is, that most are harmless, and how the harmful ones spread.

### C3. Materials, matter and chemistry

- [ ] **P** — Describes materials: hard, soft, rough, smooth, heavy, light.
- [ ] **G1** — Names common materials and one sensible use for each.
- [ ] **G2** — Sorts materials by property and explains why an object is made of what it is made of.
- [ ] **G2** — Knows solid, liquid and gas, and gives examples of each.
- [ ] **G3** — Explains melting, freezing, boiling and evaporation, with the temperatures water does
      them at.
- [ ] **G3** — Knows the water cycle and can draw it.
- [ ] **G4** — Distinguishes a reversible change (melting, dissolving) from an irreversible one
      (burning, cooking, rusting).
- [ ] **G4** — Separates a mixture by an appropriate method: sieving, filtering, evaporating,
      magnetism.
- [ ] **G4** — Knows what dissolving is and what affects how fast it happens.
- [ ] **G5** — Knows everything is made of particles too small to see, and explains solids, liquids
      and gases that way.
- [ ] **G5** — Recognises that some substances are dangerous and reads a hazard symbol.

### C4. Forces, energy and physics

- [ ] **G1** — Knows pushes and pulls make things start, stop, speed up and change direction.
- [ ] **G2** — Knows that things fall because of gravity.
- [ ] **G2** — Knows a magnet attracts some metals and not other materials; knows poles attract and
      repel.
- [ ] **G3** — Knows friction slows things down, and gives everyday examples of wanting more of it
      and less.
- [ ] **G3** — Knows light travels in straight lines, that we see by reflected light, and how
      shadows are made.
- [ ] **G3** — Knows sound is a vibration, travels through air, and gets quieter with distance.
- [ ] **G4** — Builds a simple electrical circuit with a cell, wires, a bulb and a switch, and fixes
      it when it fails.
- [ ] **G4** — Knows which materials conduct electricity and which insulate.
- [ ] **G4** — Names the main forms of energy and gives an example of each converting into another.
- [ ] **G5** — Knows air resistance and water resistance, and how shape changes them.
- [ ] **G5** — Explains how a lever, a pulley or a gear lets a small force do a big job.
- [ ] **G5** — Knows the difference between renewable and non-renewable energy sources, with
      examples of each.
- [ ] **G5** — Knows electricity is dangerous, why, and the basic rules that follow from it.

### C5. Earth, space and the environment

- [ ] **P** — Knows day and night, sun and moon, and the weather of each season.
- [ ] **G1** — Records the weather and notices the pattern across a season.
- [ ] **G2** — Knows the Earth is a sphere in space, and that the Sun is a star.
- [ ] **G2** — Names the Sun, the Earth and the Moon and how they relate.
- [ ] **G3** — Explains day and night by the Earth's rotation — not by the Sun moving.
- [ ] **G3** — Knows the Earth orbits the Sun once a year, and that this makes the seasons.
- [ ] **G3** — Names the eight planets in order from the Sun.
- [ ] **G4** — Explains the Moon's phases, and knows the Moon orbits the Earth.
- [ ] **G4** — Knows rocks and soil form and change, and what a fossil is.
- [ ] **G4** — Knows what causes an eclipse, and never to look at the Sun directly.
- [ ] **G5** — Explains gravity holding planets and moons in orbit.
- [ ] **G5** — Knows the Earth's structure in outline: crust, mantle, core; knows what causes
      earthquakes and volcanoes.
- [ ] **G5** — Explains, in outline, why the climate is changing and what human activity has to do
      with it.
- [ ] **G5** — Knows why biodiversity matters and what makes a species go extinct.
- [ ] **G5** — Sorts waste correctly, and explains what recycling, reusing and composting each
      achieve.

> **End-of-primary benchmark.** Designs and runs a fair test to answer their own question, records
> the results, draws a conclusion and says how the test could have been better — and can explain
> day/night, the seasons, the water cycle and a food chain from first principles, without reciting.

---

## D — Geography & the Planet

*Where things are, why they are there, and how to find your way without a phone.*

### D1. Maps and spatial skills

- [ ] **P** — Recognises their own home and street; knows their home town's name.
- [ ] **G1** — Draws a rough plan of a room or a route from above.
- [ ] **G1** — Points out their own country on a world map or globe.
- [ ] **G2** — Uses a map key/legend and a simple grid reference.
- [ ] **G2** — Knows the four cardinal directions and uses a compass to face them.
- [ ] **G3** — Uses a scale bar to estimate a real distance on a map.
- [ ] **G3** — Uses the eight compass points, including the intercardinals.
- [ ] **G4** — Reads contour lines well enough to tell a hill from a valley and steep from gentle.
- [ ] **G4** — Finds a place by latitude and longitude, and explains what the Equator and the poles
      are.
- [ ] **G5** — Plans a route on a real map and follows it on the ground.
- [ ] **G5** — Uses a compass with a map to take and walk a bearing.
- [ ] **G5** — Reads a public-transport map and plans a journey with a change.
- [ ] **G5** — Knows what a satellite navigation app is actually doing, and its failure modes.

### D2. The world: physical

- [ ] **G1** — Names land and sea on a map; knows what an island, a river and a mountain are.
- [ ] **G2** — **Names and locates the seven continents.**
- [ ] **G2** — **Names and locates the five oceans.**
- [ ] **G3** — Names the major landform types: mountain, valley, plain, plateau, desert, forest,
      coast, delta.
- [ ] **G3** — Locates the Equator, the two Tropics, the Arctic and Antarctic Circles, and the Prime
      Meridian.
- [ ] **G4** — Names the world's major climate zones and roughly where they are.
- [ ] **G4** — Names several of the longest rivers, highest mountains and largest deserts, and
      locates them.
- [ ] **G4** — Explains how a river works from source to mouth, and what it does to the land on the
      way.
- [ ] **G5** — Explains why climate differs with latitude, altitude and distance from the sea.
- [ ] **G5** — Knows the main biomes and what lives in each: rainforest, savanna, desert, temperate
      forest, taiga, tundra, grassland.
- [ ] **G5** — Explains what causes a volcano, an earthquake and a tsunami, and where they cluster.
- [ ] **G5** — Understands time zones, and why it is a different time on the other side of the
      world.

### D3. The world: human

- [ ] **G2** — Knows their own full address, town, region and country.
- [ ] **G3** — Knows what a country, a capital and a border are.
- [ ] **G3** — Locates their own country's neighbours and names their capitals.
- [ ] **G4** — Names and locates roughly 30 countries across all the continents, with their
      capitals.
- [ ] **G4** — Knows the difference between a city, a town and a village, and between urban and
      rural life.
- [ ] **G4** — Knows several major world languages and roughly where each is spoken.
- [ ] **G5** — Names and locates 50+ countries and their capitals, including several in every
      continent.
- [ ] **G5** — Recognises the flags of 20+ countries.
- [ ] **G5** — Explains why people migrate, with economic, environmental and conflict reasons.
- [ ] **G5** — Traces a familiar product from raw material to shop shelf, across countries.
- [ ] **G5** — Knows what a currency is, that exchange rates exist, and names a few major
      currencies.
- [ ] **G5** — Knows the rough population of their own country and of the world, to the right order
      of magnitude.

### D4. Environment and sustainability

- [ ] **G2** — Knows litter and waste harm animals and places.
- [ ] **G3** — Knows where their household's water comes from and where its waste goes.
- [ ] **G3** — Knows where their electricity comes from.
- [ ] **G4** — Explains deforestation, pollution and their consequences in their own words.
- [ ] **G4** — Names practical things a household can do to use less energy and water.
- [ ] **G5** — Explains the greenhouse effect simply and correctly.
- [ ] **G5** — Discusses a local environmental issue with evidence rather than slogans.
- [ ] **G5** — Understands a trade-off: that an environmental choice can cost money, time or jobs.

> **End-of-primary benchmark.** Given a world map with no labels, places the continents, the
> oceans, the Equator and 50 countries — and given a paper map and a compass, walks an unfamiliar
> route and arrives.

---

## E — History & a Sense of Time

*Chronology first: a child who cannot order the centuries cannot make sense of anything in them.*

### E1. Chronology

- [ ] **P** — Distinguishes yesterday, today and tomorrow.
- [ ] **G1** — Orders events in their own life; knows "when I was a baby" was before now.
- [ ] **G1** — Knows some things happened long before anyone alive was born.
- [ ] **G2** — Orders a handful of events on a simple timeline.
- [ ] **G3** — Knows what a decade, a century and a millennium are.
- [ ] **G3** — Places a date in the right century.
- [ ] **G4** — Uses BC/BCE and AD/CE correctly, and counts backwards across the zero.
- [ ] **G4** — Places the major eras in order: prehistory, ancient civilisations, classical
      antiquity, the Middle Ages, the early modern period, the industrial age, the modern era.
- [ ] **G5** — Builds a timeline spanning several eras with dates in roughly the right places.
- [ ] **G5** — Knows roughly when the big turning points happened: farming, writing, printing,
      industrialisation, electricity, computing.

### E2. Historical knowledge

- [ ] **G2** — Knows how daily life differed for children a century ago: school, work, home, travel.
- [ ] **G3** — Knows how people lived in the Stone, Bronze and Iron Ages, and what changed between
      them.
- [ ] **G3** — Knows what farming did to how humans lived — the shift from following food to growing
      it.
- [ ] **G4** — Knows something substantial about at least three ancient civilisations (e.g. Egypt,
      Mesopotamia, Greece, Rome, China, the Indus Valley, Mesoamerica).
- [ ] **G4** — Knows why writing was invented and what it made possible.
- [ ] **G4** — Knows the outline of their own country's history — *local* — and its main turning
      points.
- [ ] **G5** — Knows the outline of the last 300 years: industrialisation, empire and its end, the
      two world wars, the human-rights era, the digital era.
- [ ] **G5** — Knows several individuals who changed history, in more than one field and more than
      one part of the world, and what each actually did.
- [ ] **G5** — Knows that slavery, empire and genocide happened, in age-appropriate terms, and that
      history includes what was done badly as well as well.
- [ ] **G5** — Knows how one everyday thing was invented and spread: the wheel, writing, printing,
      the engine, vaccination, the internet.

### E3. Thinking historically

- [ ] **G3** — Knows what a historical source is: an object, a picture, a letter, a building.
- [ ] **G3** — Says what an old object or photograph tells us about the people who used it.
- [ ] **G4** — Distinguishes a primary from a secondary source.
- [ ] **G4** — Explains why two accounts of the same event can differ, without either being a lie.
- [ ] **G5** — Asks who made a source, when, and why, before trusting it.
- [ ] **G5** — Explains a historical event in terms of causes and consequences, not just what
      happened.
- [ ] **G5** — Judges a past decision by what was known at the time, not only by what we know now.
- [ ] **G5** — Knows that history is written by people and gets revised — and that whose story gets
      told is itself a question.

> **End-of-primary benchmark.** Places any date in its century and era, tells the story of one
> civilisation in detail, and explains why two sources describing the same event disagree.

---

## F — Civics, Society & Ethics

*How people live together, and what a child owes to and can expect from others.*

### F1. Rules, rights and institutions

- [ ] **P** — Follows the rules of a game and of a room; knows rules apply to everyone.
- [ ] **G1** — Knows why rules exist and helps make class rules.
- [ ] **G2** — Knows what a law is and that it differs from a rule.
- [ ] **G2** — Knows the jobs that keep a community running: doctor, nurse, teacher, firefighter,
      police, refuse collector, farmer, driver.
- [ ] **G3** — Knows what taxes are, in simple terms, and what they pay for.
- [ ] **G3** — Knows children have rights: to be safe, schooled, heard, cared for, and free from
      harm.
- [ ] **G4** — Knows what democracy and voting are, and has voted in a real class decision.
- [ ] **G4** — Knows how their own country is governed — *local* — and who leads it.
- [ ] **G5** — Knows the difference between a democracy and a dictatorship, and why the difference
      matters.
- [ ] **G5** — Knows courts and police exist to apply the law, and that the law applies to those in
      power too.
- [ ] **G5** — Knows what the United Nations is and, roughly, what it is for.
- [ ] **G5** — Knows what a charity, a volunteer and a non-governmental organisation are.

### F2. Living with others

- [ ] **P** — Takes turns; shares; says please and thank you.
- [ ] **G1** — Includes a child who is left out.
- [ ] **G2** — Knows people differ in language, religion, ability, family shape and skin colour, and
      that this is ordinary.
- [ ] **G2** — Knows what bullying is, and tells an adult when they see it.
- [ ] **G3** — Knows what a stereotype is and can spot a simple one.
- [ ] **G3** — Knows that a disabled person may need a different kind of access, not a different
      kind of respect.
- [ ] **G4** — Disagrees with someone's belief while treating the person decently.
- [ ] **G4** — Knows what prejudice and discrimination are, with examples.
- [ ] **G5** — Recognises when they are in a group that is excluding someone, and says so.
- [ ] **G5** — Explains why a rule they personally dislike might still be fair.

### F3. Ethics and judgement

- [ ] **G1** — Tells the truth when owning up costs them something.
- [ ] **G2** — Keeps a promise, or explains why they cannot.
- [ ] **G2** — Returns something found or borrowed.
- [ ] **G3** — Distinguishes an accident from something done on purpose.
- [ ] **G3** — Apologises for the harm caused, not merely to end the conversation.
- [ ] **G4** — Identifies a fair share and an unfair one, and argues the case.
- [ ] **G4** — Notices a conflict between what is easy and what is right, and names it.
- [ ] **G5** — Argues both sides of a moral question before giving their own view.
- [ ] **G5** — Refuses to join something they believe is wrong, even when friends are doing it.
- [ ] **G5** — Knows that consent matters — over their own body, their belongings and their image.

> **End-of-primary benchmark.** Argues both sides of a contested question honestly, then states and
> defends their own position — and has actually voted, campaigned or organised something real.

---

## G — Money & Financial Literacy

*Almost entirely absent from primary curricula worldwide, and among the most consequential things
on this list. Currency amounts below are deliberately generic — substitute the local one.*

### G1. Handling money

- [ ] **P** — Knows money is exchanged for things, and that things cost different amounts.
- [ ] **G1** — Recognises the coins and notes of their own currency and knows what each is worth.
- [ ] **G1** — Makes a small amount with coins in more than one way.
- [ ] **G2** — Pays for something in a shop and checks the change.
- [ ] **G2** — Adds up a short bill mentally and knows whether they have enough.
- [ ] **G3** — Works out the change from a round amount before the till shows it.
- [ ] **G3** — Reads a price label, including price-per-unit, and says which package is better
      value.
- [ ] **G4** — Reads a receipt line by line and spots an overcharge.
- [ ] **G4** — Calculates a discount and knows what "30% off" really saves.
- [ ] **G5** — Handles a small amount of real money over a month without losing track of it.
- [ ] **G5** — Uses a card or a payment app under supervision, and knows it is spending real money.

### G2. Earning, saving, spending

- [ ] **G1** — Knows adults work to earn money.
- [ ] **G2** — Distinguishes a need from a want, and sorts examples correctly.
- [ ] **G2** — Saves up for something instead of spending immediately — and actually gets there.
- [ ] **G3** — Keeps a simple record of money in and money out.
- [ ] **G3** — Sets a savings goal with an amount and a date, and tracks progress.
- [ ] **G4** — Makes a budget for an event or a trip and stays inside it.
- [ ] **G4** — Compares two ways to spend the same money and justifies the choice.
- [ ] **G4** — Has earned money by doing something of value for somebody else.
- [ ] **G5** — Splits income deliberately into spending, saving and giving.
- [ ] **G5** — Waits for a better price or a better option instead of buying immediately.
- [ ] **G5** — Explains opportunity cost: that money spent here cannot be spent there.

### G3. How money works

- [ ] **G3** — Knows what a bank does with money left in it.
- [ ] **G4** — Knows what interest is — that savings grow and debts grow.
- [ ] **G4** — Knows that borrowing money means paying back more than was borrowed.
- [ ] **G4** — Knows what a salary, a bill and a subscription are.
- [ ] **G5** — Knows why prices rise over time, in simple terms.
- [ ] **G5** — Knows the difference between a debit card, a credit card and cash — and who is owed
      what in each case.
- [ ] **G5** — Knows what insurance is for.
- [ ] **G5** — Knows that a business must take in more than it spends, and can sketch that for a
      lemonade stand.
- [ ] **G5** — Knows why a family cannot buy everything it wants, without shame attached to the
      fact.

### G4. Consumer defence

- [ ] **G3** — Knows an advertisement is trying to sell something, and recognises one.
- [ ] **G4** — Identifies the technique an advert is using: a celebrity, a crowd, a fear, a free
      gift.
- [ ] **G4** — Knows an in-game purchase costs real money that someone actually loses.
- [ ] **G5** — Recognises a too-good-to-be-true offer and a pressure tactic ("only 3 left!").
- [ ] **G5** — Knows never to give money, card details or personal information to a stranger online.
- [ ] **G5** — Knows what a scam is, names three common ones, and knows that being targeted is not a
      shameful thing to report.

> **End-of-primary benchmark.** Plans and sticks to a real budget for a real event, and explains —
> correctly — why borrowing money costs more than paying cash.

---

## H — Digital Literacy & Technology

*Fluent with the tools, sceptical about the content, and unhurt by either.*

### H1. Operating a device

- [ ] **G1** — Turns a device on and off, opens and closes an application.
- [ ] **G1** — Uses a mouse, a trackpad or a touchscreen accurately.
- [ ] **G2** — Uses a keyboard: letters, capitals, space, enter, delete, punctuation.
- [ ] **G2** — Adjusts volume and screen brightness; knows what a battery level means.
- [ ] **G3** — Saves a file, names it sensibly, and finds it again tomorrow.
- [ ] **G3** — Organises files into folders and moves files between them.
- [ ] **G4** — Copies, pastes, undoes and uses the common keyboard shortcuts.
- [ ] **G4** — Connects to a network, and knows the difference between online and offline.
- [ ] **G4** — Takes and edits a photo; records a video or an audio clip.
- [ ] **G5** — Uses a word processor to produce a properly formatted document.
- [ ] **G5** — Builds a simple spreadsheet with a formula that adds a column.
- [ ] **G5** — Makes a short presentation or video that communicates something to an audience.
- [ ] **G5** — Solves a routine problem alone before asking: restart, reconnect, check the obvious.

### H2. Finding and judging information

- [ ] **G2** — Knows that a device can answer questions, and that its answers can be wrong.
- [ ] **G3** — Searches with useful keywords rather than a whole sentence.
- [ ] **G3** — Knows a search result at the top is not automatically the truest.
- [ ] **G4** — Checks a surprising claim against a second, independent source.
- [ ] **G4** — Says who wrote a page and whether they have a reason to mislead.
- [ ] **G4** — Puts an answer in their own words rather than pasting it.
- [ ] **G5** — Recognises a sponsored result and an advert dressed up as an article.
- [ ] **G5** — Knows images, video and voices can be faked, including convincingly.
- [ ] **G5** — Knows an AI assistant can state a falsehood fluently and confidently, and checks
      anything that matters.
- [ ] **G5** — Credits a source when using someone else's words, pictures or ideas.

### H3. Safety, privacy and conduct

- [ ] **G1** — Tells an adult about anything online that frightens or upsets them.
- [ ] **G2** — Knows not to share their name, address, school or photo with strangers online.
- [ ] **G3** — Knows a password should be strong, private, and not shared with friends.
- [ ] **G3** — Knows people online can pretend to be someone they are not.
- [ ] **G4** — Knows what a digital footprint is: that posts, photos and messages persist.
- [ ] **G4** — Knows what cyberbullying is; knows to save the evidence and tell an adult.
- [ ] **G4** — Never opens a link or an attachment from an unknown sender.
- [ ] **G5** — Writes a message they would be comfortable having read aloud by anyone.
- [ ] **G5** — Asks before posting a photo of somebody else.
- [ ] **G5** — Recognises a manipulative design: an infinite feed, a streak, a loot box, a
      countdown.
- [ ] **G5** — Notices when they have been on a screen too long, and stops themselves.

### H4. Computational thinking and making

- [ ] **G1** — Gives a precise sequence of instructions to a person or a floor robot.
- [ ] **G2** — Debugs a sequence that went wrong by finding the step that failed.
- [ ] **G3** — Builds a working program in a block-based language, using a loop.
- [ ] **G3** — Understands an algorithm as a recipe: the same steps, the same result, every time.
- [ ] **G4** — Uses conditionals (if/then/else) and variables in a program.
- [ ] **G4** — Breaks a big problem into smaller parts before starting.
- [ ] **G4** — Predicts what a short program will do before running it.
- [ ] **G5** — Builds something genuinely their own: a game, an animation, a quiz, a device.
- [ ] **G5** — Writes a few lines in a text-based language, and reads an error message instead of
      panicking.
- [ ] **G5** — Explains, in outline, what happens when a web page is requested.
- [ ] **G5** — Knows a computer only does what it was told, and that bugs are the programmer's
      doing, not the machine's.

> **End-of-primary benchmark.** Researches an unfamiliar question from more than one source, judges
> which to trust, and produces a document or a presentation of their own — plus one working program
> they designed themselves.

---

## I — Physical Skills, Sport & the Body

*Everything here is a physical capability that has to be built in a body, over years. Several items
are also safety-critical: swimming and cycling save lives.*

### I1. Fundamental movement

- [ ] **P** — Runs, stops and changes direction without falling.
- [ ] **P** — Jumps with two feet; hops on one; climbs; walks up and down stairs with alternating
      feet.
- [ ] **P** — Throws and catches a large ball.
- [ ] **G1** — Runs with coordinated arms; skips; gallops; moves backwards safely.
- [ ] **G1** — Balances on one foot for 10 seconds, either foot.
- [ ] **G2** — Throws overarm with some accuracy; catches a bouncing ball with two hands.
- [ ] **G2** — Skips with a rope, continuously.
- [ ] **G3** — Catches a ball one-handed; kicks a moving ball with either foot.
- [ ] **G3** — Dodges, changes pace and changes direction at speed in a game.
- [ ] **G4** — Strikes a ball with a bat, racket or stick with control.
- [ ] **G4** — Combines movements fluently: run-and-jump, run-and-throw, jump-and-turn.
- [ ] **G5** — Learns an unfamiliar physical skill by watching it and trying it, without
      step-by-step coaching.

### I2. Swimming and water safety

- [ ] **P** — Is comfortable in water; puts their face in willingly.
- [ ] **G1** — Floats on their front and on their back, unaided.
- [ ] **G1** — Submerges fully and opens their eyes underwater.
- [ ] **G2** — Swims 10 m unaided in any recognisable stroke.
- [ ] **G2** — Enters and exits a pool safely; knows the deep end from the shallow.
- [ ] **G3** — **Swims 25 m unaided, continuously.**
- [ ] **G3** — Treads water for one minute.
- [ ] **G3** — Knows the water safety rules: never alone, never dive into unknown water, respect
      currents.
- [ ] **G4** — Swims 50 m; swims competently in two different strokes.
- [ ] **G4** — Retrieves an object from the bottom in water above their head.
- [ ] **G4** — Floats and self-rescues fully clothed.
- [ ] **G5** — **Swims 100 m continuously without stopping or touching the bottom.**
- [ ] **G5** — Knows what to do if someone else is in trouble in water: call for help, reach or
      throw — never swim out.
- [ ] **G5** — Knows the dangers of open water: cold shock, currents, tides, weeds, changing depth.

### I3. Cycling and wheels

- [ ] **P** — Pedals a tricycle or propels a balance bike confidently.
- [ ] **G1** — **Rides a two-wheeled bicycle without stabilisers**, starting and stopping unaided.
- [ ] **G1** — Wears a helmet, fastened, every time, without being told.
- [ ] **G2** — Steers around obstacles; brakes smoothly and in a controlled distance.
- [ ] **G2** — Rides one-handed long enough to signal.
- [ ] **G3** — Looks behind while riding straight; signals a turn.
- [ ] **G3** — Checks their own bike before riding: brakes, tyres, chain.
- [ ] **G4** — Rides on a quiet road with an adult, obeying the traffic rules.
- [ ] **G4** — Mends a puncture or fixes a dropped chain.
- [ ] **G5** — Rides a route of several kilometres, reading traffic and making safe decisions.
- [ ] **G5** — Knows what a helmet does and why the rule is not negotiable.

### I4. Games and sport

- [ ] **G1** — Plays a simple team game and follows the rules.
- [ ] **G2** — Plays a playground game start to finish without an adult refereeing it.
- [ ] **G2** — Loses without a scene and wins without gloating.
- [ ] **G3** — Plays at least one team sport with an understanding of positions and tactics.
- [ ] **G3** — Passes to a teammate in a better position rather than always shooting.
- [ ] **G4** — Plays at least one individual sport or discipline.
- [ ] **G4** — Referees or scores a game for younger children.
- [ ] **G5** — Trains at something regularly across a season and sees the improvement.
- [ ] **G5** — Accepts a referee's decision they believe is wrong, without retaliating.
- [ ] **G5** — Encourages a weaker teammate instead of freezing them out.

### I5. Fitness, gymnastics and body control

- [ ] **G1** — Moves to a beat; copies a sequence of movements.
- [ ] **G2** — Forward roll; balances in several shapes; holds a still position.
- [ ] **G2** — Climbs a frame or a rope to a safe height and descends in control.
- [ ] **G3** — Runs continuously for 10 minutes.
- [ ] **G3** — Performs a short gymnastic or movement sequence from memory.
- [ ] **G4** — Runs continuously for 20 minutes, or covers 2 km.
- [ ] **G4** — Knows how to warm up and cool down, and does it unprompted.
- [ ] **G4** — Lifts and carries something heavy with their legs, not their back.
- [ ] **G5** — Runs 3 km, or exercises hard for 30 minutes, without stopping.
- [ ] **G5** — Knows what exercise does to the heart, lungs and muscles.
- [ ] **G5** — Has a physical activity they choose to do for its own sake, not because they were
      made to.

### I6. Fine motor control

- [ ] **P** — Uses scissors to cut along a line; threads beads; does large buttons.
- [ ] **G1** — **Ties their own shoelaces.**
- [ ] **G1** — Does up buttons, zips and fastenings unaided.
- [ ] **G2** — Uses a ruler to draw an accurate straight line; folds paper precisely.
- [ ] **G3** — Cuts out a complex shape; uses a stapler, a hole punch, sticky tape well.
- [ ] **G3** — Uses a knife and fork properly, including cutting their own food.
- [ ] **G4** — Threads a needle and sews a running stitch.
- [ ] **G4** — Uses a compass, a protractor and a set square accurately.
- [ ] **G5** — Uses a craft knife, a saw or a hot glue gun safely with supervision.
- [ ] **G5** — Ties several knots and knows what each is for.

> **End-of-primary benchmark.** Swims 100 m unaided, rides a bicycle safely on a road, runs 3 km,
> and plays at least one sport well enough to enjoy it.

---

## J — Health, Safety & First Aid

*The section where a missing item has the highest cost.*

### J1. Hygiene and self-care

- [ ] **P** — Washes hands after the toilet and before eating, unprompted.
- [ ] **P** — Uses the toilet independently.
- [ ] **P** — Brushes teeth with help.
- [ ] **G1** — Brushes teeth properly twice a day, unsupervised.
- [ ] **G1** — Covers coughs and sneezes; uses and disposes of a tissue.
- [ ] **G2** — Washes and dries themselves thoroughly in a bath or shower.
- [ ] **G2** — Dresses appropriately for the weather without being told.
- [ ] **G3** — Manages their own hair, nails and general grooming.
- [ ] **G4** — Uses deodorant and manages body odour as puberty approaches.
- [ ] **G5** — Manages the changes of early puberty with accurate information and without shame —
      including periods, for every child, not only girls.
- [ ] **G5** — Knows why washing hands actually works.

### J2. Nutrition, sleep and wellbeing

- [ ] **G1** — Names foods that are everyday foods and foods that are treats.
- [ ] **G2** — Knows the main food groups and what each does for the body.
- [ ] **G2** — Drinks water when thirsty rather than only sugary drinks.
- [ ] **G3** — Builds a balanced plate from what is available.
- [ ] **G3** — Knows sugar harms teeth, and why.
- [ ] **G4** — Reads a food label: sugar, salt, fat, portion size.
- [ ] **G4** — Knows how much sleep they need and what happens to them without it.
- [ ] **G5** — Knows smoking, alcohol and drugs harm a body, and specifically how.
- [ ] **G5** — Recognises that food marketing targets children, and sees it happening.
- [ ] **G5** — Knows that mental health is health: that sadness, worry and stress are real and
      treatable, and who to tell.

### J3. Everyday safety

- [ ] **P** — Holds an adult's hand near a road; stops at the kerb.
- [ ] **P** — Knows not to touch a hot stove, a plug socket or a sharp knife.
- [ ] **G1** — Crosses a quiet road with an adult, looking both ways and listening.
- [ ] **G1** — Knows their own full name, address and a parent's phone number **by heart**.
- [ ] **G2** — Knows the emergency number for their country and when it is right to call it.
- [ ] **G2** — Knows what to do if lost: stay put, find a uniformed adult or a family with children.
- [ ] **G3** — Crosses a road alone, safely, choosing a good place to cross.
- [ ] **G3** — Knows fire safety: get out, stay low, never go back in, meet at the agreed point.
- [ ] **G3** — Recognises hazard symbols on household chemicals and leaves them alone.
- [ ] **G4** — Uses knives, the stove, the oven and the kettle safely.
- [ ] **G4** — Knows never to take medicine unsupervised, including another person's.
- [ ] **G4** — Stays home alone briefly: locks the door, answers nobody, calls if needed.
- [ ] **G5** — Assesses a new situation for risk before joining in — thin ice, a high wall, a fast
      river, a dare.
- [ ] **G5** — Says no to a friend's dangerous idea, and leaves.
- [ ] **G5** — Knows how to get home from an unfamiliar place, with a plan that does not depend on a
      charged phone.

### J4. Personal safety and boundaries

- [ ] **P** — Knows which parts of their body are private.
- [ ] **P** — Knows they may refuse a hug or a kiss from anyone.
- [ ] **G1** — Knows the difference between a safe secret and an unsafe one, and that adults do not
      ask children to keep unsafe secrets.
- [ ] **G1** — Names three trusted adults they could tell anything to.
- [ ] **G2** — Knows nobody may touch them in a way that makes them uncomfortable, including someone
      they know or love.
- [ ] **G2** — Knows not to go anywhere with someone without a parent's agreement.
- [ ] **G3** — Says no loudly, moves away and tells someone — and keeps telling until someone
      listens.
- [ ] **G4** — Knows an adult asking for secrecy, photos or private contact is a warning sign,
      online or off.
- [ ] **G5** — Knows they are never at fault for what an adult did to them.
- [ ] **G5** — Knows how to leave a situation that feels wrong without needing to justify it first.

### J5. First aid

- [ ] **G1** — Tells an adult immediately when someone is hurt.
- [ ] **G2** — Cleans and covers a small cut or graze themselves.
- [ ] **G2** — Knows to run a burn under cool water and then to fetch an adult.
- [ ] **G3** — **Calls the emergency number, says where they are, what happened, and stays on the
      line.**
- [ ] **G3** — Applies pressure to a bleeding wound.
- [ ] **G3** — Deals with a nosebleed: sit, lean forward, pinch the soft part.
- [ ] **G4** — Checks whether someone is responsive and whether they are breathing.
- [ ] **G4** — Puts an unconscious but breathing person into the recovery position.
- [ ] **G4** — Recognises choking and knows what to do about it.
- [ ] **G5** — Knows the basic principle of CPR, and that an attempt is better than nothing.
- [ ] **G5** — Assesses a scene for danger before approaching a casualty.
- [ ] **G5** — Knows what someone's serious allergy, asthma inhaler or epilepsy needs, if a friend
      or a sibling has one.
- [ ] **G5** — Keeps calm enough to be useful, and knows their first job is to get a competent adult
      there.

> **End-of-primary benchmark.** Calls the emergency services correctly and clearly, puts a
> breathing casualty into the recovery position, and can name three adults they would tell anything
> to.

---

## K — Music

*Ambitious on purpose: reading a simple score and playing an instrument are ordinary primary-school
attainments in many countries and absent in others.*

### K1. Singing and voice

- [ ] **P** — Sings familiar songs from memory, roughly in time.
- [ ] **G1** — Sings in a group, starting and stopping together.
- [ ] **G1** — Matches a pitch given by a voice or an instrument.
- [ ] **G2** — Sings a simple song in tune, alone, all the way through.
- [ ] **G3** — Sings loudly and softly on purpose; shapes a phrase.
- [ ] **G3** — Holds their own part in a round or a canon.
- [ ] **G4** — **Sings a song in tune, from memory, in front of an audience.**
- [ ] **G4** — Sings a simple harmony against a melody without being pulled off it.
- [ ] **G5** — Has a repertoire of songs they can sing well, from more than one tradition.
- [ ] **G5** — Warms up their voice and knows not to strain it.

### K2. Rhythm and pulse

- [ ] **P** — Claps along to a beat; copies a short clapped pattern.
- [ ] **G1** — Keeps a steady pulse while others keep a different one.
- [ ] **G2** — Claps back a rhythm of four beats accurately.
- [ ] **G2** — Plays an untuned percussion instrument in time with a group.
- [ ] **G3** — Recognises 2-, 3- and 4-beat metres and counts them.
- [ ] **G3** — Reads and performs simple rhythmic notation.
- [ ] **G4** — Keeps a rhythmic ostinato going under a melody.
- [ ] **G5** — Performs a syncopated rhythm accurately.
- [ ] **G5** — Follows a conductor or a count-in, and comes in on the right beat.

### K3. Reading music

- [ ] **G2** — Knows that music can be written down, and that the dots mean something specific.
- [ ] **G3** — Reads the note values: whole, half, quarter, eighth, and their rests.
- [ ] **G3** — Knows higher on the stave means higher in pitch.
- [ ] **G4** — Names the notes on the treble clef stave and finds them on an instrument.
- [ ] **G4** — Reads a time signature and a bar line; knows what a sharp and a flat do.
- [ ] **G5** — **Sight-reads a simple melody on their instrument and plays it correctly.**
- [ ] **G5** — Follows a score while listening to it being played.
- [ ] **G5** — Writes down a short melody or rhythm they invented, so someone else could play it.

### K4. Playing an instrument

- [ ] **G1** — Plays a simple percussion or tuned instrument with control.
- [ ] **G2** — Plays a short recognisable tune on a recorder, keyboard, xylophone or similar.
- [ ] **G3** — Plays with correct posture and technique for the instrument.
- [ ] **G3** — Practises regularly, and understands practice is what makes the difference.
- [ ] **G4** — Plays a piece of real music from notation, hands or fingers in the right places.
- [ ] **G4** — Plays as part of an ensemble, listening to the others rather than only to themselves.
- [ ] **G5** — **Performs a prepared piece in front of an audience, from a score.**
- [ ] **G5** — Learns a new short piece largely on their own.
- [ ] **G5** — Tunes or sets up their own instrument, and looks after it.

### K5. Listening and creating

- [ ] **G1** — Says whether music is fast or slow, loud or soft, happy or sad.
- [ ] **G2** — Recognises common instruments by their sound.
- [ ] **G3** — Identifies the families of the orchestra: strings, woodwind, brass, percussion.
- [ ] **G3** — Makes up a short tune or rhythm of their own.
- [ ] **G4** — Describes a piece using real vocabulary: tempo, dynamics, pitch, mood,
      instrumentation.
- [ ] **G4** — Composes a short piece with a beginning, a middle and an end.
- [ ] **G5** — Recognises several major styles: classical, folk, jazz, rock, pop, and music from at
      least one other tradition.
- [ ] **G5** — Names several composers or musicians and something they are known for.
- [ ] **G5** — Says why they like a piece, in terms of what is actually happening in it.

> **End-of-primary benchmark.** Plays a prepared piece from a written score on an instrument, in
> front of other people — and sings a song in tune, alone, from memory.

---

## L — Visual Arts & Making Things

### L1. Drawing and painting

- [ ] **P** — Draws a recognisable person with a head, a body and limbs.
- [ ] **P** — Names the primary colours; paints without fear of the paper.
- [ ] **G1** — Draws from life rather than only from imagination.
- [ ] **G1** — Mixes primary colours to make secondary ones.
- [ ] **G2** — Fills a page deliberately instead of drawing small in a corner.
- [ ] **G2** — Uses several media: pencil, crayon, chalk, paint, ink.
- [ ] **G3** — Draws an object in front of them with roughly correct proportions.
- [ ] **G3** — Shades to suggest light and shadow.
- [ ] **G3** — Mixes tints and shades by adding white and black.
- [ ] **G4** — Uses overlap and relative size to show depth.
- [ ] **G4** — Draws a simple portrait with the features in the right places.
- [ ] **G5** — Uses basic one-point perspective.
- [ ] **G5** — Plans a piece in a sketchbook before making the final version.
- [ ] **G5** — Finishes a demanding piece over several sessions instead of abandoning it.

### L2. Making and craft

- [ ] **P** — Cuts, sticks, folds and builds with blocks and junk materials.
- [ ] **G1** — Models a recognisable object in clay or dough.
- [ ] **G2** — Builds a 3D structure from paper, card and tape that stands up.
- [ ] **G2** — Makes a repeating printed or stamped pattern.
- [ ] **G3** — Follows written or diagrammed instructions to build something.
- [ ] **G3** — Sews two pieces of fabric together by hand.
- [ ] **G4** — Designs something to solve a real problem, then builds and tests it.
- [ ] **G4** — Uses a saw, a drill or a glue gun safely with supervision.
- [ ] **G4** — Measures twice and cuts once, because they learned why.
- [ ] **G5** — Builds a working mechanism: a lever, a pulley, a gear train, a simple circuit in an
      object.
- [ ] **G5** — Improves a design after it failed, rather than giving up on it.
- [ ] **G5** — Makes a gift or a useful object good enough that someone wants to keep it.

### L3. Looking at art

- [ ] **G2** — Says what they notice in a picture, beyond liking it.
- [ ] **G3** — Knows painting, drawing, sculpture, photography and printmaking apart.
- [ ] **G4** — Knows several famous artworks and who made them.
- [ ] **G4** — Describes an artwork's colour, shape, line, texture and composition.
- [ ] **G5** — Recognises a few distinct styles or periods and can tell them apart.
- [ ] **G5** — Knows art comes from every culture and era, not one continent.
- [ ] **G5** — Gives another person's work useful feedback: what works, what they would try next.
- [ ] **G5** — Accepts criticism of their own work without dropping the work.

> **End-of-primary benchmark.** Designs, plans and completes a substantial piece of work over
> several sessions — drawn, built or sewn — and talks about someone else's work in real terms.

---

## M — Dance, Drama & Performance

### M1. Dance and movement

- [ ] **P** — Moves freely to music without self-consciousness.
- [ ] **G1** — Keeps time with the beat while moving.
- [ ] **G1** — Copies a short sequence of movements.
- [ ] **G2** — Learns and performs a simple set dance from a tradition.
- [ ] **G2** — Moves in different qualities on request: sharp, smooth, heavy, light.
- [ ] **G3** — Remembers and performs a longer choreography from memory.
- [ ] **G3** — Dances with a partner, matching or mirroring them.
- [ ] **G4** — Makes up their own short sequence with a clear beginning and end.
- [ ] **G4** — Uses the space deliberately: levels, directions, pathways, formations.
- [ ] **G5** — **Performs a rehearsed dance in front of an audience, in time and in formation.**
- [ ] **G5** — Knows dances from more than one culture, including at least one social/partner dance.
- [ ] **G5** — Picks up new choreography quickly by watching.

### M2. Drama and performance

- [ ] **P** — Plays pretend, sustaining a role with others.
- [ ] **G1** — Acts out a known story, taking a part.
- [ ] **G2** — Uses voice and face to show an emotion clearly to an audience.
- [ ] **G2** — Waits offstage for a cue and comes in on it.
- [ ] **G3** — Learns lines and delivers them audibly, without rushing.
- [ ] **G3** — Stays in character when something goes wrong.
- [ ] **G4** — Improvises a short scene from a prompt with others.
- [ ] **G4** — Plays a character unlike themselves, convincingly.
- [ ] **G5** — Takes a real part in a full production, in front of a real audience.
- [ ] **G5** — Contributes behind the scenes too: set, costume, lighting, sound, prompting.
- [ ] **G5** — Handles stage nerves well enough to go on anyway.

> **End-of-primary benchmark.** Performs in front of a real audience — a dance, a play or a piece
> of music — having rehearsed for it, and does it again the following year.

---

## N — Practical Life & Household Skills

*The most reliably overlooked domain in this document, and the one a child will use daily for the
rest of their life.*

### N1. Self-management

- [ ] **P** — Dresses and undresses themselves completely, including shoes.
- [ ] **P** — Eats with cutlery at a table; clears their own plate.
- [ ] **G1** — Ties shoelaces; manages coat, bag and belongings without losing them.
- [ ] **G1** — Packs their own school bag from a list.
- [ ] **G2** — Gets themselves up and ready in the morning with a reminder, not a rescue.
- [ ] **G3** — Keeps their own room and workspace in a usable state.
- [ ] **G4** — Packs their own bag for an overnight stay, with everything they need.
- [ ] **G4** — Manages their own belongings on a trip without losing them.
- [ ] **G5** — Runs their own morning and evening routine unprompted.
- [ ] **G5** — Notices something that needs doing and does it without being asked.

### N2. Food and cooking

- [ ] **P** — Helps in the kitchen: stirs, pours, washes vegetables.
- [ ] **G1** — Lays a table properly and clears it afterwards.
- [ ] **G1** — Spreads, pours a drink, and peels a banana or an orange.
- [ ] **G2** — Makes their own breakfast: cereal, toast, a drink.
- [ ] **G2** — Washes up or loads a dishwasher properly.
- [ ] **G3** — Uses a knife to chop soft food safely, with a proper grip and board.
- [ ] **G3** — Follows a simple recipe from start to finish.
- [ ] **G3** — Grates, whisks, measures ingredients on scales and in jugs.
- [ ] **G4** — Uses a hob and an oven safely, with supervision.
- [ ] **G4** — **Cooks a simple hot meal for themselves** — pasta, eggs, rice, soup, a stir-fry.
- [ ] **G4** — Knows basic food hygiene: raw meat, hand washing, use-by dates, the fridge.
- [ ] **G5** — Cooks a full meal for the family, from a recipe, and gets it on the table hot.
- [ ] **G5** — Adapts a recipe: doubles it, halves it, substitutes a missing ingredient.
- [ ] **G5** — Plans a meal, lists what is needed, and shops for it.
- [ ] **G5** — Stores leftovers correctly and knows what has gone off.

### N3. Home, clothes and repair

- [ ] **P** — Puts toys away where they belong.
- [ ] **G1** — Puts dirty clothes in the basket; hangs up a coat.
- [ ] **G2** — Makes their own bed; tidies a room to a standard, not just out of sight.
- [ ] **G2** — Sweeps, wipes a surface, takes out the rubbish.
- [ ] **G3** — Sorts laundry; hangs it out; folds and puts clothes away.
- [ ] **G3** — Sorts waste correctly: recycling, food waste, general.
- [ ] **G4** — Operates a washing machine.
- [ ] **G4** — Sews on a button; mends a small tear.
- [ ] **G4** — Changes a bulb or a battery; uses a screwdriver, a hammer, a tape measure.
- [ ] **G5** — Cleans a room properly, top to bottom, to a standard someone else would accept.
- [ ] **G5** — Knows where the water stopcock, the fuse box and the fire extinguisher are — and what
      each is for.
- [ ] **G5** — Fixes something broken instead of replacing it, at least once, successfully.
- [ ] **G5** — Waters plants, cares for a pet, or grows something edible from seed to plate.

### N4. Getting around and dealing with the world

- [ ] **G2** — Buys something from a shop alone, with the money counted beforehand.
- [ ] **G3** — Walks a known local route alone or with a friend, safely.
- [ ] **G3** — Asks a stranger for help or directions, politely and clearly.
- [ ] **G4** — Uses public transport on a familiar route: ticket, stop, timing.
- [ ] **G4** — Reads a timetable and works out when to leave.
- [ ] **G5** — Makes a phone call to an organisation and asks for what they need.
- [ ] **G5** — Navigates an unfamiliar journey with a change, with a plan for what to do if it goes
      wrong.
- [ ] **G5** — Fills in a simple form correctly: name, address, date of birth, date.

> **End-of-primary benchmark.** Cooks a hot meal for other people, does a load of laundry start to
> finish, and gets themselves somewhere unfamiliar and back.

---

## O — Outdoors, Nature & Orientation

### O1. Being outside

- [ ] **P** — Plays outdoors in all weathers, comfortably.
- [ ] **G1** — Dresses correctly for cold, wet and hot weather without being told.
- [ ] **G2** — Walks several kilometres without complaint.
- [ ] **G3** — Climbs a tree or a rock safely, and gets down again.
- [ ] **G3** — Knows to leave no trace: take rubbish home, close gates, keep to paths.
- [ ] **G4** — Walks a full day in hill or forest country with a pack.
- [ ] **G4** — Puts up a tent and sleeps outside.
- [ ] **G5** — Packs correctly for a day outdoors: water, food, layers, map, torch.
- [ ] **G5** — Lights and extinguishes a fire safely where it is permitted.
- [ ] **G5** — Knows when weather or terrain means turning back, and turns back.

### O2. Knowing the natural world

- [ ] **P** — Names common animals and knows a tree from a bush.
- [ ] **G1** — Names the seasons and what changes in each.
- [ ] **G2** — Identifies 5+ common local trees, 5+ birds and 5+ flowers by name.
- [ ] **G2** — Knows which plants and animals to leave alone: stings, thorns, bites.
- [ ] **G3** — Identifies 10+ local species; uses a field guide or a key.
- [ ] **G3** — Grows a plant from seed to harvest.
- [ ] **G4** — **Knows which local plants and berries are dangerous, and the rule: never eat
      anything unidentified.**
- [ ] **G4** — Recognises animal tracks, nests and droppings.
- [ ] **G4** — Reads the sky well enough to see rain coming.
- [ ] **G5** — Identifies 20+ local species across plants, birds, insects and mammals.
- [ ] **G5** — Knows the moon phases and finds the Pole Star or the local equivalent.
- [ ] **G5** — Knows which local wildlife is protected, and why it matters.

### O3. Orientation and practical outdoor skills

- [ ] **G2** — Retraces a route they have walked once.
- [ ] **G3** — Finds north without a compass — sun position, time of day.
- [ ] **G3** — Ties a reef knot and a slip knot.
- [ ] **G4** — Ties four useful knots and uses each for its purpose: joining, securing, shortening,
      a loop.
- [ ] **G4** — Navigates a short orienteering course with a map.
- [ ] **G5** — **Navigates an unfamiliar route with a paper map and a compass, and arrives.**
- [ ] **G5** — Knows what to do if lost outdoors: stop, stay put, stay visible, stay warm.
- [ ] **G5** — Judges a natural risk: deep water, loose rock, thin ice, an incoming tide, a coming
      storm.

> **End-of-primary benchmark.** Spends a night camping, navigates an unfamiliar route by map and
> compass, and names twenty living things in their own region on sight.

---

## P — Social & Emotional Skills

*The best predictor on this list of whether the rest of it gets used well.*

### P1. Knowing and managing themselves

- [ ] **P** — Names the basic emotions in themselves: happy, sad, angry, scared.
- [ ] **P** — Separates from a parent without distress.
- [ ] **G1** — Recovers from a small disappointment without a meltdown.
- [ ] **G1** — Waits their turn, including when it is hard.
- [ ] **G2** — Names a wider range of feelings: frustrated, nervous, jealous, proud, embarrassed,
      lonely.
- [ ] **G2** — Uses a calming strategy on purpose: breathing, walking away, asking for a moment.
- [ ] **G3** — Notices their own anger building and does something before it lands on someone.
- [ ] **G3** — Says what is wrong in words instead of acting it out.
- [ ] **G4** — Distinguishes a feeling from a fact — "I feel stupid" is not "I am stupid".
- [ ] **G4** — Tolerates being bored without needing a screen handed to them.
- [ ] **G5** — Names what they are good at and what they find hard, accurately and without drama.
- [ ] **G5** — Recovers from a real failure — a lost match, a bad mark, a rejection — and goes back
      to it.
- [ ] **G5** — Asks for help when it is needed, which is a skill and not a weakness.

### P2. Getting on with others

- [ ] **P** — Shares and takes turns; plays alongside and with other children.
- [ ] **G1** — Makes a friend; joins a group already playing.
- [ ] **G1** — Says sorry and means it.
- [ ] **G2** — Notices when someone is upset and responds to it.
- [ ] **G2** — Listens without interrupting, and waits to speak.
- [ ] **G3** — Resolves a small dispute with a peer without an adult refereeing.
- [ ] **G3** — Gives a genuine compliment.
- [ ] **G3** — Works in a pair or a group and does their share.
- [ ] **G4** — Takes another person's perspective, including one they disagree with.
- [ ] **G4** — Says no to a friend without losing the friendship.
- [ ] **G4** — Leads a group task, and follows someone else leading one.
- [ ] **G5** — Repairs a friendship after a real falling-out.
- [ ] **G5** — Stands up for someone being treated badly, or gets an adult who will.
- [ ] **G5** — Resists group pressure to do something they know is wrong.
- [ ] **G5** — Keeps a confidence — and knows the one exception: when someone is being hurt.

### P3. Character and self-direction

- [ ] **G1** — Tries something new without a guarantee of succeeding at it.
- [ ] **G2** — Finishes something they started, even once it stops being fun.
- [ ] **G2** — Takes care of something that belongs to somebody else.
- [ ] **G3** — Keeps working on something hard after the first failure.
- [ ] **G3** — Owns a mistake rather than blaming someone else for it.
- [ ] **G4** — Practises something deliberately over weeks to get better at it.
- [ ] **G4** — Helps someone with no prospect of anything in return.
- [ ] **G5** — Sets themselves a goal nobody asked for, and reaches it.
- [ ] **G5** — Holds a position under mild social pressure, and changes it when genuinely persuaded.
- [ ] **G5** — Shows up for a commitment — a team, a rehearsal, a promise — on a day they do not
      feel like it.

> **End-of-primary benchmark.** Resolves a real conflict with a peer without an adult, recovers
> from a real failure and returns to the thing, and stands up for somebody at some cost to
> themselves.

---

## Q — Learning How to Learn

*Explicitly taught almost nowhere, and the difference between coping with secondary school and
drowning in it.*

### Q1. Attention and work habits

- [ ] **P** — Sits and attends to one activity for ten minutes.
- [ ] **G1** — Works at a task for 15 minutes without wandering off.
- [ ] **G2** — Starts a task without being told to three times.
- [ ] **G2** — Works quietly beside others without disturbing them.
- [ ] **G3** — Works independently for 30 minutes, asking only when genuinely stuck.
- [ ] **G3** — Removes their own distractions before starting.
- [ ] **G4** — Works for 45 minutes on something difficult and unappealing.
- [ ] **G4** — Checks their own work before handing it in.
- [ ] **G5** — Does the hard task first rather than the easy one.
- [ ] **G5** — Notices when they have stopped concentrating, and takes a break on purpose instead of
      drifting.

### Q2. Organisation and planning

- [ ] **G1** — Keeps their equipment together and brings it back.
- [ ] **G2** — Writes down what they have to do, and reads it later.
- [ ] **G2** — Has a homework routine: a place, a time, a finish.
- [ ] **G3** — Uses a diary, planner or calendar and meets a deadline with it.
- [ ] **G3** — Keeps their books and papers findable.
- [ ] **G4** — Breaks a multi-day task into steps and schedules them.
- [ ] **G4** — Estimates how long something will take, and learns from being wrong.
- [ ] **G5** — Plans a week with several commitments in it, and keeps to it.
- [ ] **G5** — Starts a long task early enough to survive something going wrong.
- [ ] **G5** — Prioritises when there is more to do than time to do it.

### Q3. Study technique

- [ ] **G2** — Memorises a short text, a rhyme or a list deliberately.
- [ ] **G3** — Tests themselves instead of only re-reading.
- [ ] **G3** — Uses a memory aid: a mnemonic, a rhyme, a story, a picture.
- [ ] **G4** — Takes notes in their own words rather than copying.
- [ ] **G4** — Spreads practice over several days instead of cramming.
- [ ] **G4** — Explains what they learned to someone else, and discovers the gaps that way.
- [ ] **G5** — Makes their own summary, mind map or flashcards for a topic.
- [ ] **G5** — Revisits old material deliberately so it is not lost.
- [ ] **G5** — Identifies what they do *not* yet know, rather than assuming they know it.

### Q4. Curiosity and intellectual honesty

- [ ] **P** — Asks questions about everything, constantly.
- [ ] **G1** — Asks a question when confused instead of hiding it.
- [ ] **G2** — Looks something up because they wanted to know, not because they were told to.
- [ ] **G3** — Says "I don't know" comfortably, and then goes and finds out.
- [ ] **G4** — Changes their mind when shown good evidence, and says so.
- [ ] **G4** — Pursues an interest of their own beyond what school asks for.
- [ ] **G5** — Asks how somebody knows what they are claiming.
- [ ] **G5** — Knows the difference between not understanding *yet* and not being able to.
- [ ] **G5** — Prefers being right to having been right.

> **End-of-primary benchmark.** Plans and delivers a multi-week project of their own with no adult
> managing the schedule — and prepares for an assessment using a method they chose deliberately.

---

## R — A Second Language

*Roughly CEFR A1 by the end of primary, reaching towards A2 — and the confidence to use it badly
in public, which matters more than the grammar.*

- [ ] **G1** — Knows some languages sound different from their own, and enjoys the difference.
- [ ] **G1** — Greets, says goodbye, and says their name in the second language.
- [ ] **G2** — Counts to 20; names colours, animals, family members and classroom objects.
- [ ] **G2** — Sings a song or recites a rhyme in the language.
- [ ] **G3** — Says their name, age, where they live and what they like, in full sentences.
- [ ] **G3** — Asks and answers simple questions on familiar topics.
- [ ] **G3** — Understands classroom instructions given in the language.
- [ ] **G4** — Holds a short conversation about themselves, their family and their day.
- [ ] **G4** — Reads a short simple text and understands the gist.
- [ ] **G4** — Writes a few sentences about a familiar topic, correctly spelled.
- [ ] **G4** — Knows the present tense of the most common verbs.
- [ ] **G5** — Understands a slow, clear speaker on a familiar topic and replies appropriately.
- [ ] **G5** — Writes a short letter, postcard or message (5+ sentences).
- [ ] **G5** — Talks about the past and the future, at least roughly.
- [ ] **G5** — Uses a bilingual dictionary and copes with an unknown word without stopping.
- [ ] **G5** — **Speaks the language to a real person and is understood** — the actual point of the
      exercise.
- [ ] **G5** — Knows something real about where the language is spoken and how people there live.

> **End-of-primary benchmark.** Holds a five-minute conversation with a patient native speaker
> about themselves, their family and their interests, and is understood.

---

## S — Games, Logic & Strategy

*Cheap, portable, sociable, and among the best thinking training available.*

- [ ] **P** — Plays a simple board game, follows the rules and takes turns.
- [ ] **G1** — Plays a card game with rules; deals and shuffles.
- [ ] **G1** — Solves a jigsaw appropriate to their age, by strategy rather than trial and error.
- [ ] **G2** — Plays a strategy game and thinks one move ahead.
- [ ] **G2** — Teaches a game they know to someone who does not.
- [ ] **G3** — Knows the rules and moves of chess, draughts or an equivalent, and plays a full game.
- [ ] **G3** — Solves a logic puzzle: a grid puzzle, a riddle, a sudoku.
- [ ] **G3** — Loses a game without quitting the next one.
- [ ] **G4** — Thinks several moves ahead and anticipates an opponent's reply.
- [ ] **G4** — Works out the rules of an unfamiliar game by playing it.
- [ ] **G4** — Spots a pattern in a sequence of shapes, numbers or moves and uses it.
- [ ] **G5** — Plays a strategy game competently: opening ideas, a plan, an endgame.
- [ ] **G5** — Solves a multi-step logic problem by elimination, systematically.
- [ ] **G5** — Recognises a fallacy in an argument, even informally ("everyone says so" is not a
      reason).
- [ ] **G5** — Invents a game with coherent rules and teaches it to others.
- [ ] **G5** — Estimates a chance sensibly, and knows a lucky win is not a good decision.

> **End-of-primary benchmark.** Plays a full strategy game with a plan, and solves an unfamiliar
> logic puzzle by systematic elimination rather than guessing.

---

## T — General Knowledge & Cultural Literacy

*The shared references that make conversation, reading and humour land — drawn from the whole
world, not one corner of it.*

- [ ] **P** — Knows their own family: names, relationships, where they live.
- [ ] **G1** — Knows classic fairy tales and folk stories from their own culture.
- [ ] **G2** — Knows the major festivals celebrated around them and roughly what each marks.
- [ ] **G2** — Knows their own country's flag, name, capital and a famous landmark.
- [ ] **G3** — Knows myths and legends from more than one culture: Greek, Norse, African, Asian,
      Indigenous.
- [ ] **G3** — Knows that the world holds many religions and beliefs, including none, and names
      several.
- [ ] **G4** — Knows what happens in several famous stories everyone alludes to.
- [ ] **G4** — Knows a handful of world-famous buildings and monuments, and where they are.
- [ ] **G4** — Names people who changed the world in science, art, politics, sport and rights — from
      more than one continent, and not all men.
- [ ] **G5** — Knows the main world religions' core ideas and major festivals, factually and
      respectfully.
- [ ] **G5** — Knows several famous quotations, proverbs and idioms, and uses them correctly.
- [ ] **G5** — Follows a news story over time and can explain what it is about.
- [ ] **G5** — Knows enough about the wider world to ask a good question about a country they have
      never visited.
- [ ] **G5** — Knows their own family's story: where the previous generations came from and what
      they did.

> **End-of-primary benchmark.** Holds a real conversation with an adult about something in the
> news, a book, or another country — and asks a question that shows they were actually thinking.

---

## Appendix 1 — Grade-by-grade summary

What each year is fundamentally *for*, across all twenty domains. Use it as a sanity check on
pacing, not as a checklist in itself.

| Grade | The year's centre of gravity |
| --- | --- |
| **Pre-school** | **Independence and communication.** Dresses, feeds, toilets and washes themselves. Speaks in sentences and is understood by strangers. Counts to 20. Knows letters. Separates from a parent. Runs, jumps, climbs, catches. Plays with other children and takes turns. |
| **Grade 1** | **Decoding.** Reading becomes possible: every letter–sound, blending, first real books. Number bonds to 10, addition and subtraction within 20. Ties shoelaces, rides a bike, tells the time to the half hour, knows their address and a phone number by heart. |
| **Grade 2** | **Fluency.** Reading stops being effortful and becomes usable. Bonds to 20, the 2/5/10 tables, place value to 1,000. Writes a story with a shape. Swims 10 m. Saves up for something. Makes their own breakfast. |
| **Grade 3** | **Independence in the basics.** Reads silently and by choice; writes planned pieces. Columns, the 3/4/8 tables, fractions as numbers. Swims 25 m. Calls the emergency number. Cooks from a recipe. Follows a map. Reads simple musical notation. Resolves a dispute without an adult. |
| **Grade 4** | **Consolidation and reach.** All tables by heart; long-form arithmetic; area; angles. Summarises, argues, revises a draft. Cooks a hot meal. Swims 50 m. Builds a circuit and a program with a loop. Keeps a budget. Recovery position. Plans across several days. |
| **Grade 5** | **Ownership.** Learns without being taught, plans without being managed, checks their own work, and performs in public. Long multiplication and division; fractions, decimals and percentages interchangeable. Swims 100 m, navigates by map and compass, performs a piece from a score, holds a conversation in a second language, and argues both sides of a hard question before choosing one. |

---

## Appendix 2 — The twenty end-of-primary benchmarks

One concrete, observable test per domain. If a single page of this document is worth keeping, this
is it.

| | Domain | Benchmark |
| --- | --- | --- |
| A | Language | Reads a 200-page novel by choice; writes two clean, self-proofread pages; speaks for five minutes to an audience without a script. |
| B | Mathematics | Tables to 12×12 automatic; long division reliable; solves and checks an unfamiliar multi-step problem alone. |
| C | Science | Designs and runs their own fair test, concludes from the results, and says how it could have been better. |
| D | Geography | Places continents, oceans and 50 countries on a blank map; walks an unfamiliar route with a paper map. |
| E | History | Places any date in its era; tells one civilisation's story in detail; explains why two sources disagree. |
| F | Civics | Argues both sides of a contested question, then defends their own — and has organised or voted on something real. |
| G | Money | Plans and keeps to a real budget; explains correctly why borrowing costs more than paying cash. |
| H | Digital | Researches from multiple sources, judges which to trust, produces a document — and one program of their own design. |
| I | Physical | Swims 100 m unaided; cycles safely on a road; runs 3 km; plays a sport well enough to enjoy it. |
| J | Safety | Calls emergency services clearly; puts a breathing casualty in the recovery position; names three trusted adults. |
| K | Music | Performs a prepared piece from a written score in front of people; sings in tune, alone, from memory. |
| L | Art | Plans and completes a substantial piece over several sessions; critiques someone else's work usefully. |
| M | Performance | Performs a rehearsed dance, play or piece to a real audience — and goes back the next year. |
| N | Practical life | Cooks a hot meal for others; does laundry start to finish; travels somewhere unfamiliar and back. |
| O | Outdoors | Camps overnight; navigates by map and compass; names twenty local living things on sight. |
| P | Social & emotional | Resolves a real conflict alone; recovers from real failure; stands up for someone at a cost. |
| Q | Learning | Runs a multi-week project with no adult managing the schedule; revises by a method they chose. |
| R | Second language | Holds a five-minute conversation with a patient native speaker and is understood. |
| S | Logic | Plays a full strategy game with a plan; solves an unfamiliar logic puzzle by elimination. |
| T | General knowledge | Discusses a news story, a book or another country with an adult — and asks a good question. |

---

## Appendix 3 — Deliberate omissions

What is **not** here, and why:

* **National curriculum content** — a country's own history, institutions, literary canon,
  set texts and constitutional arrangements. Essential, but by definition local; items that touch
  it are marked *local* and left generic.
* **Religious instruction.** Religions appear in Section T as things to know *about*, factually and
  respectfully. Instruction in a particular faith is a family's decision, not a competency.
* **Sex education beyond the biological and the protective.** Reproduction (C2), puberty (J1) and
  bodily autonomy and consent (J4, F3) are in, because omitting them has real costs. Anything
  beyond that is for families and local norms.
* **Anything requiring a specific technology, product or platform.** "Uses a spreadsheet" is here;
  a named application is not.
* **Talents rather than competencies.** Perfect pitch, athletic ability, artistic gift — a child
  can master everything in this document without any of them.
* **Speed and comparison.** No item is "faster than other children". Every benchmark is absolute:
  the child against the task, never against the class.

---

## Appendix 4 — How this relates to the product

The platform builds mathematics first, and Section B is its curriculum source. The rest of this
document is here for three reasons:

1. **It keeps the data model honest.** A competency model that cannot express "swims 25 m
   unaided", "ties four useful knots" or "performs a piece from a score" is a *mathematics* model
   wearing a general-purpose name. Everything the constitution's multi-subject principle promises
   lives or dies on whether the competency tree can hold Sections C through T as naturally as it
   holds Section B.
2. **Not everything here is exercise-shaped, and that is a design input, not a problem.**
   `2 + 7` can be generated, answered and auto-marked on a device. "Cooks a hot meal for the
   family" cannot: it needs a parent to observe it and tick it. A framework this broad forces the
   question of whether a competency's evidence can be *machine-assessed*, *parent-attested* or
   *self-reported* — and that distinction should exist in the model before a second subject
   arrives, not be retrofitted around it.
3. **It is a genuinely useful artefact on its own**, whether or not the platform ever covers a
   second subject — as a parent's checklist, as a school's audit, and as an answer to "are we
   missing anything important?"

### Related documents

* Product vision: `docs/product/vision.md`
* Mathematics curriculum (Section B is its source material): `docs/product/CURRICULUM.md`
* Constitution — multi-subject principle VII: `.specify/memory/constitution.md`
* Mastery algorithm: `specs/003-mastery-engine/spec.md`
