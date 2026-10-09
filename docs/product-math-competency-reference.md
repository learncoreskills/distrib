# Mathematics Competency Reference — Pre-K to Grade 5 (worldwide)

> **The authoritative list of mathematics competencies a child should master before leaving primary
> school**, built by cross-reading the major national curricula of the world rather than any single
> one. Every downstream step — `syllabus-research` completeness checks, `activity-designer`
> briefs, spec-kit features, the mastery tree in `mathematics/src/curriculum.ts` — should cite rows
> of this file by **ID**.
>
> Owner: `syllabus-research` agent (keeps it current — see "Maintenance" at the bottom).
> Supersedes `PRIMARY-SKILLS-FRAMEWORK.md` Section B as the mathematics source of truth; Section B
> stays as the short cross-subject overview.

---

## How to read this file

| Column | Meaning |
| --- | --- |
| **ID** | Stable key `<grade>.<TOPIC>.<n>` — never renumber; retire a row by striking it through. |
| **Topic** | One of the 16 strands below — the same list at every grade. |
| **Competency** | A skill cluster inside the topic (what a teacher would call a learning objective). |
| **Sub-competency** | One trainable, checkable skill — small enough for a single activity. |
| **Description** | What the child can *do*, observably, with an example. |
| **Grade** | **End-of-grade mastery** (consensus across curricula): the grade by whose end the skill is reliable and unprompted. Usually introduced a year earlier. |

* **Later rows assume earlier ones.** A skill is not repeated as numbers get bigger unless it
  changes in kind.
* **"Extension"** in a description = core in several systems at this age but taught a year later
  in others (typically the US). Build it, but don't gate progression on it.
* **"Local"** = depends on the country (currency, imperial units, Roman numerals).

### Grade ↔ national systems (by child age)

| Level | Age | US (CCSS) | England | France | Singapore | Japan | Australia | Germany | India |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **PK** | 3–5 | Pre-K | Nursery, Reception | PS, MS | N1, N2, K1 | Yōchien | Preschool | Kita | Balvatika 1–2 |
| **K** | 5–6 | Kindergarten | Year 1 | GS | K2 | Yōchien (final) | Foundation | Vorschule | Balvatika 3 |
| **G1** | 6–7 | Grade 1 | Year 2 | CP | P1 | Grade 1 | Year 1 | Klasse 1 | Class 1 |
| **G2** | 7–8 | Grade 2 | Year 3 | CE1 | P2 | Grade 2 | Year 2 | Klasse 2 | Class 2 |
| **G3** | 8–9 | Grade 3 | Year 4 | CE2 | P3 | Grade 3 | Year 3 | Klasse 3 | Class 3 |
| **G4** | 9–10 | Grade 4 | Year 5 | CM1 | P4 | Grade 4 | Year 4 | Klasse 4 | Class 4 |
| **G5** | 10–11 | Grade 5 | Year 6 | CM2 | P5 | Grade 5 | Year 5 | (Klasse 5) | Class 5 |

England content runs about a year ahead of the US for the same age. That gap explains most of
the disagreements in the variation notes.

### Topics and how they map to the app's areas

| Code | Topic | `mathematicsAreas` in `curriculum.ts` |
| --- | --- | --- |
| NUM | Number & Counting | number-sense, comparing-ordering |
| PV | Place Value | place-value |
| AS | Addition & Subtraction | addition, subtraction |
| MD | Multiplication & Division | multiplication, division |
| MM | Mental Math & Estimation | mental-mathematics |
| FR | Fractions | fractions |
| DEC | Decimals, Percentages & Proportion | decimals, percentages |
| ALG | Patterns & Algebraic Thinking | algebra *(planned dedicated area; today under mathematical-reasoning)* |
| MEA | Measurement | measurement |
| TIM | Time | time |
| MON | Money | money |
| GEO | Geometry — Shapes & Angles | geometry |
| POS | Geometry — Position & Movement | geometry |
| DAT | Data & Statistics | data-graphs |
| PRB | Chance & Probability | probability *(planned dedicated area; today under data-graphs)* |
| PSR | Problem Solving & Reasoning | problem-solving, mathematical-reasoning |

> **Money: arithmetic yes, finance no.** Money is a maths topic **only as calculation with
> currency**: recognising coins and notes, counting and making amounts, decimal notation, totals,
> change, comparing prices, unit price, percentage discounts. **Financial concepts** — loans, debt,
> interest, saving, budgeting, profit and loss, how banks work — are not mathematics competencies.
> They belong to framework section G (Money & Financial Literacy) and must not be added here, even
> where a national curriculum puts them in its maths syllabus.

---

## PK — Pre-school (age 3–5)

| ID | Topic | Competency | Sub-competency | Description | Grade |
| --- | --- | --- | --- | --- | --- |
| PK.NUM.1 | Number & Counting | Verbal counting | Rote count to 10 | Recites number words 1–10 in order without skipping or repeating. | PK |
| PK.NUM.2 | Number & Counting | Counting objects | One-to-one correspondence | Touches or moves each object exactly once while saying one number word (sets up to 10). | PK |
| PK.NUM.3 | Number & Counting | Counting objects | Cardinality | Knows the last number said tells "how many" ("1, 2, 3, 4 — four cars"). | PK |
| PK.NUM.4 | Number & Counting | Counting objects | Count out a quantity | Gives exactly "3 blocks" from a larger pile when asked (up to 5). | PK |
| PK.NUM.5 | Number & Counting | Subitizing | Instant recognition to 3 | Says how many in a group of 1–3 objects at a glance, without counting. | PK |
| PK.NUM.6 | Number & Counting | Numerals | Recognize numerals 1–5 | Names the written numerals 1–5 and matches each to a set of that size. | PK |
| PK.NUM.7 | Number & Counting | Comparing quantities | More / fewer / same | Compares two small sets (by looking or by pairing objects up) and says which has more, fewer, or the same. | PK |
| PK.NUM.8 | Number & Counting | Number sequence | Next number | Says which number comes next when counting up to 5 ("after 3 comes…"). | PK |
| PK.AS.1 | Addition & Subtraction | Joining & separating | One more / one less with objects | Says how many there are after one object is added to or taken from a small set (≤5), by recounting. | PK |
| PK.AS.2 | Addition & Subtraction | Joining & separating | Combine two small groups | Puts two small groups together and finds the total by counting all (total ≤5). | PK |
| PK.ALG.1 | Patterns & Algebraic Thinking | Repeating patterns | Copy and continue AB | Copies and extends a simple AB pattern (red-blue-red-blue) with objects, sounds or movements. | PK |
| PK.MEA.1 | Measurement | Size vocabulary | Describe size | Uses big/small, long/short, tall/short, heavy/light, full/empty to describe objects. | PK |
| PK.MEA.2 | Measurement | Direct comparison | Compare two objects | Compares two objects side by side (length, height) or in the hands (weight) and says which is longer/heavier. | PK |
| PK.MEA.3 | Measurement | Ordering by size | Seriation of 3 | Orders three objects from smallest to biggest (nesting cups, sticks). | PK |
| PK.TIM.1 | Time | Sequence of events | Daily routine order | Orders 3 pictures of a routine (wake up, eat, sleep) using first / next / last. | PK |
| PK.TIM.2 | Time | Time vocabulary | Day and night | Distinguishes day/night and morning/evening; uses "now", "later", "before". | PK |
| PK.GEO.1 | Geometry — Shapes & Angles | 2D shapes | Name basic shapes | Recognizes and names circle, square and triangle. | PK |
| PK.GEO.2 | Geometry — Shapes & Angles | Shape matching | Match and fit shapes | Matches a shape to an identical one whatever its colour; completes 3–5-piece inset puzzles. | PK |
| PK.GEO.3 | Geometry — Shapes & Angles | 3D objects | Explore solids | Builds with blocks; notices that some solids roll and others stack. | PK |
| PK.POS.1 | Geometry — Position & Movement | Positional words | in / on / under | Places an object as told: in, on, under, next to, behind, in front of. | PK |
| PK.POS.2 | Geometry — Position & Movement | Body movement | Follow movement words | Moves as told: up/down, forwards/backwards, towards/away. | PK |
| PK.DAT.1 | Data & Statistics | Sorting | Sort by one attribute | Sorts objects into groups by colour, shape or size and says the rule. | PK |
| PK.DAT.2 | Data & Statistics | Matching | Pair related objects | Matches identical items or items that go together (cup–saucer, sock pairs). | PK |
| PK.PSR.1 | Problem Solving & Reasoning | Math talk | Use math words in play | Uses quantity and comparison words spontaneously ("I have more", "it's too big"). | PK |
| PK.PSR.2 | Problem Solving & Reasoning | Persistence | Trial and adjustment | Tries different ways to fit a puzzle piece or build a tower instead of giving up. | PK |

## K — Kindergarten / Reception (age 5–6)

| ID | Topic | Competency | Sub-competency | Description | Grade |
| --- | --- | --- | --- | --- | --- |
| K.NUM.1 | Number & Counting | Verbal counting | Count by ones and tens | Counts aloud by ones to at least 30 (US: 100) and by tens to 100. | K |
| K.NUM.2 | Number & Counting | Verbal counting | Count on from any number | Counts forward from a given number within 20 (starts at 7, not at 1). | K |
| K.NUM.3 | Number & Counting | Verbal counting | Count backward | Counts backward from 10, then from 20. | K |
| K.NUM.4 | Number & Counting | Counting objects | Count sets to 20 | Counts up to 20 objects in a line, array or scattered, and knows the count doesn't change when they are rearranged (conservation). | K |
| K.NUM.5 | Number & Counting | Counting objects | Count out to 20 | Takes exactly n objects (n ≤ 20) from a larger set. | K |
| K.NUM.6 | Number & Counting | Subitizing | Perceptual to 5, conceptual to 10 | Recognizes dice/finger/ten-frame patterns to 5 instantly; sees 7 as "5 and 2". | K |
| K.NUM.7 | Number & Counting | Numerals | Read numerals 0–20 | Reads any numeral 0–20 and matches it to a quantity. | K |
| K.NUM.8 | Number & Counting | Numerals | Write numerals 0–20 | Writes numerals 0–20 with correct formation (no reversals by year end). | K |
| K.NUM.9 | Number & Counting | Number relationships | One more / one less | Says the number one more and one less than any number to 20 without counting from 1. | K |
| K.NUM.10 | Number & Counting | Comparing numbers | Compare sets to 10 | Says whether one group is greater than, less than or equal to another (≤10 objects), by matching or counting. | K |
| K.NUM.11 | Number & Counting | Comparing numbers | Compare numerals 1–10 | Says which of two written numerals 1–10 is greater. | K |
| K.NUM.12 | Number & Counting | Ordering | Order 0–10 | Puts numeral cards 0–10 in order and finds a missing one on a number track. | K |
| K.NUM.13 | Number & Counting | Zero | Zero as none | Uses 0 for an empty set and puts it before 1. | K |
| K.NUM.14 | Number & Counting | Ordinal numbers | First to fifth | Uses first, second, third… fifth, and last, for positions in a line. | K |
| K.PV.1 | Place Value | Ten as a unit | Ten-frame | Shows numbers to 10 on a ten-frame and says how many more make 10. | K |
| K.PV.2 | Place Value | Teen numbers | Ten and some ones | Builds and decomposes 11–19 as ten ones and some more ones (14 = 10 + 4). | K |
| K.AS.1 | Addition & Subtraction | Meaning of operations | Add as joining, subtract as removing | Acts out "add to / put together" and "take from / take apart" with objects, fingers or drawings. | K |
| K.AS.2 | Addition & Subtraction | Word problems | Story problems within 10 | Solves spoken add/subtract stories within 10 using objects or drawings. | K |
| K.AS.3 | Addition & Subtraction | Composition | Decompose to 10 | Splits a number ≤10 into pairs in more than one way (5 = 4 + 1 = 3 + 2) and records it. | K |
| K.AS.4 | Addition & Subtraction | Composition | Make 10 | For any number 1–9, finds the number that makes 10. | K |
| K.AS.5 | Addition & Subtraction | Fluency | Facts within 5 | Adds and subtracts within 5 from memory (number bonds to 5). | K |
| K.AS.6 | Addition & Subtraction | Fluency | Doubles to 5 + 5 | Recalls doubles up to 5 + 5. | K |
| K.AS.7 | Addition & Subtraction | Symbols | Write + − = sentences | Reads and writes a simple number sentence with +, − and = (3 + 2 = 5). | K |
| K.MD.1 | Multiplication & Division | Fair sharing | Share equally | Shares a set fairly between 2 (or 3) people and notices when the shares are unequal. | K |
| K.ALG.1 | Patterns & Algebraic Thinking | Repeating patterns | AB, ABB, ABC patterns | Continues, creates and corrects repeating patterns, and names the repeating unit. | K |
| K.ALG.2 | Patterns & Algebraic Thinking | Repeating patterns | Translate patterns | Represents the same pattern in another form (clap-stomp = red-blue = AB). | K |
| K.ALG.3 | Patterns & Algebraic Thinking | Number patterns | Evens and odds intuition | Sees which numbers ≤10 can be made from pairs (no one left over). | K |
| K.MEA.1 | Measurement | Attributes | Describe measurable attributes | Names what can be measured on an object: length, height, weight, capacity. | K |
| K.MEA.2 | Measurement | Direct comparison | Compare length, mass, capacity | Compares two objects, lining up the ends for length, using a balance for mass, or pouring for capacity. | K |
| K.MEA.3 | Measurement | Ordering | Order by length or mass | Orders 3–5 objects by length or weight. | K |
| K.TIM.1 | Time | Sequencing | Before / after / next | Sequences 4–5 events of a story or day; uses before, after, then, yesterday, today, tomorrow. | K |
| K.TIM.2 | Time | Calendar words | Days of the week | Says the days of the week in order. | K |
| K.TIM.3 | Time | Duration | Longer / shorter time | Compares two activities by how long they take. | K |
| K.MON.1 | Money | Coins and notes | Recognize money | Knows money buys things; recognizes local coins and notes in role-play shopping. Local. | K |
| K.GEO.1 | Geometry — Shapes & Angles | 2D shapes | Name 2D shapes in any orientation | Names circle, triangle, square, rectangle (and hexagon) whatever their size or orientation. | K |
| K.GEO.2 | Geometry — Shapes & Angles | 3D shapes | Name 3D shapes | Names cube, sphere, cylinder, cone; says whether a shape is flat or solid. | K |
| K.GEO.3 | Geometry — Shapes & Angles | Shape attributes | Sides and corners | Counts sides and corners; tells straight edges from curved ones. | K |
| K.GEO.4 | Geometry — Shapes & Angles | Composition | Compose shapes | Builds larger shapes from smaller ones (two triangles make a square; simple tangram outlines). | K |
| K.GEO.5 | Geometry — Shapes & Angles | Shapes in the world | Spot shapes | Finds and names shapes in the environment (a wheel is a circle, a box is a cuboid). | K |
| K.POS.1 | Geometry — Position & Movement | Positional language | Above / below / between | Describes and follows positions: above, below, beside, between, in front of, behind. | K |
| K.POS.2 | Geometry — Position & Movement | Simple routes | Follow and give directions | Follows and gives a short route in play (forward 3 steps, turn). | K |
| K.POS.3 | Geometry — Position & Movement | Reproduction | Copy an arrangement | Rebuilds a block construction or tile layout from a model. | K |
| K.DAT.1 | Data & Statistics | Classification | Sort, count, compare | Sorts objects into categories, counts each, and orders the categories by count. | K |
| K.DAT.2 | Data & Statistics | Object graphs | Real-object graph | Makes a graph with real objects or pictures and says which group has more. | K |
| K.PSR.1 | Problem Solving & Reasoning | Explaining | Say how you know | Explains an answer ("I counted", "I matched them"). | K |
| K.PSR.2 | Problem Solving & Reasoning | Practical problems | Enough for everyone? | Solves everyday matching problems (enough cups for each child?). | K |
| K.PSR.3 | Problem Solving & Reasoning | Estimation | Estimate then count | Guesses a small quantity ("about 10") and then counts to check. | K |

## G1 — Grade 1 (age 6–7)

| ID | Topic | Competency | Sub-competency | Description | Grade |
| --- | --- | --- | --- | --- | --- |
| G1.NUM.1 | Number & Counting | Counting | Count to 100 (120) | Counts forward and backward within 100 (US: 120) from any number. | G1 |
| G1.NUM.2 | Number & Counting | Reading & writing numbers | Numerals to 100 | Reads and writes numbers to 100 in digits. | G1 |
| G1.NUM.3 | Number & Counting | Reading & writing numbers | Number words to 20 | Reads and writes number words zero to twenty. | G1 |
| G1.NUM.4 | Number & Counting | Skip counting | Count in 2s, 5s, 10s | Counts in 2s, 5s and 10s from 0. | G1 |
| G1.NUM.5 | Number & Counting | Number relationships | One / ten more or less | Finds 1 more, 1 less, 10 more and 10 less than any number to 100. | G1 |
| G1.NUM.6 | Number & Counting | Comparing | Compare with < > = | Compares two 2-digit numbers and records the result with <, > or =. | G1 |
| G1.NUM.7 | Number & Counting | Ordering | Number line and 100-square | Orders numbers to 100 and places them on a number line or 100-square. | G1 |
| G1.NUM.8 | Number & Counting | Ordinal numbers | First to tenth | Uses ordinal numbers to tenth (and 20th) for position. | G1 |
| G1.NUM.9 | Number & Counting | Estimation | Estimate a collection | Estimates a collection of up to 50 objects and checks by grouping in tens. | G1 |
| G1.PV.1 | Place Value | Tens and ones | 2-digit as tens and ones | Says that 43 is 4 tens and 3 ones and shows it with base-ten blocks or bundles. | G1 |
| G1.PV.2 | Place Value | Ten as a unit | Bundle ten ones | Knows 10 ones = 1 ten, and that 10, 20 … 90 are 1–9 tens with 0 ones. | G1 |
| G1.AS.1 | Addition & Subtraction | Number bonds | Bonds to 10 by heart | Recalls every pair that makes 10 instantly. | G1 |
| G1.AS.2 | Addition & Subtraction | Facts within 20 | Add/subtract within 20 | Adds and subtracts within 20 using strategies (count on, make ten, doubles, near doubles); fluent within 10. | G1 |
| G1.AS.3 | Addition & Subtraction | Fact families | Inverse relationship | Writes related facts (3 + 4 = 7, 7 − 4 = 3) and uses addition to solve subtraction. | G1 |
| G1.AS.4 | Addition & Subtraction | Properties | Commutativity and three addends | Uses 3 + 8 = 8 + 3 as a strategy; adds three 1-digit numbers by grouping friendly pairs. | G1 |
| G1.AS.5 | Addition & Subtraction | Adding within 100 | 2-digit + 1-digit and + tens | Adds a 1-digit number or a multiple of 10 to a 2-digit number using place value (34 + 5, 34 + 20). | G1 |
| G1.AS.6 | Addition & Subtraction | Subtracting tens | Multiple of 10 minus multiple of 10 | Subtracts multiples of 10 within 100 (70 − 30). | G1 |
| G1.AS.7 | Addition & Subtraction | Meaning of subtraction | Take away, difference, missing part | Recognizes subtraction as taking away, finding the difference and finding a missing part. | G1 |
| G1.MD.1 | Multiplication & Division | Equal groups | Repeated addition | Counts equal groups and writes them as repeated addition (3 groups of 2 = 2 + 2 + 2), with objects, pictures and arrays. | G1 |
| G1.MD.2 | Multiplication & Division | Division concepts | Sharing and grouping | Solves sharing and grouping problems with objects (12 sweets shared by 3; how many bags of 2). | G1 |
| G1.MD.3 | Multiplication & Division | Doubling & halving | Doubles and halves to 20 | Doubles numbers to 10 and halves even numbers to 20. | G1 |
| G1.MM.1 | Mental Math & Estimation | Mental facts | Within 20 without fingers | Adds and subtracts within 20 mentally, without fingers or objects. | G1 |
| G1.MM.2 | Mental Math & Estimation | Doubles | Doubles and near doubles | Recalls doubles to 10 + 10 and uses them for near doubles (6 + 7). | G1 |
| G1.MM.3 | Mental Math & Estimation | Adding 10 | ±10 mentally | Adds or subtracts 10 to/from any 2-digit number mentally. | G1 |
| G1.FR.1 | Fractions | Equal parts | Halves and quarters of shapes | Splits circles and rectangles into 2 or 4 equal parts, names them half/quarter, and rejects unequal splits. | G1 |
| G1.FR.2 | Fractions | Fraction of a quantity | Half and quarter of a set | Finds half and a quarter of a small set of objects (half of 8). | G1 |
| G1.ALG.1 | Patterns & Algebraic Thinking | Equality | Meaning of = | Treats = as "the same as"; judges equations true or false (7 = 8 − 1, 6 = 6). | G1 |
| G1.ALG.2 | Patterns & Algebraic Thinking | Unknowns | Missing number within 20 | Finds the missing number in any position of an add/subtract equation (8 + ? = 11, ? − 3 = 5). | G1 |
| G1.ALG.3 | Patterns & Algebraic Thinking | Patterns | Number and growing patterns | Extends number patterns (2, 4, 6, …) and growing shape patterns, and describes the rule. | G1 |
| G1.MEA.1 | Measurement | Comparing length | Indirect comparison | Orders three objects by length; compares two lengths indirectly using a third object (string, stick). | G1 |
| G1.MEA.2 | Measurement | Non-standard units | Measure with units | Measures length by laying identical units end to end with no gaps or overlaps (cubes, paper clips). | G1 |
| G1.MEA.3 | Measurement | Mass | Balance comparison | Compares masses on a balance (heavier, lighter, balances) and measures with uniform non-standard units. | G1 |
| G1.MEA.4 | Measurement | Capacity | Compare by pouring | Compares capacities by pouring; uses full, half full, empty. | G1 |
| G1.TIM.1 | Time | Telling time | Hour and half hour | Reads and writes time to the hour and half hour on analog and digital clocks. | G1 |
| G1.TIM.2 | Time | Calendar | Days, months, seasons | Names days of the week, months of the year and seasons in order. | G1 |
| G1.TIM.3 | Time | Units of time | Compare durations | Compares and orders durations; knows rough units (seconds, minutes, hours, days, weeks). | G1 |
| G1.TIM.4 | Time | Calendar | Read a calendar | Finds a date and its weekday on a monthly calendar. | G1 |
| G1.MON.1 | Money | Coins and notes | Name and value | Recognizes and names local coins and notes and knows their values. Local. | G1 |
| G1.MON.2 | Money | Counting money | Totals within 20 | Counts small collections of coins (same and mixed values) totalling up to 20 units. | G1 |
| G1.MON.3 | Money | Buying | Pay for an item | Pays for an item priced under 20 units and says whether there is enough money. | G1 |
| G1.GEO.1 | Geometry — Shapes & Angles | 2D shapes | Name common 2D shapes | Names circle, triangle, square, rectangle, pentagon, hexagon in any orientation or size. | G1 |
| G1.GEO.2 | Geometry — Shapes & Angles | 3D shapes | Name common 3D shapes | Names cube, cuboid, sphere, cylinder, cone, pyramid and matches them to everyday objects. | G1 |
| G1.GEO.3 | Geometry — Shapes & Angles | Attributes | Defining vs non-defining | Says what makes a triangle a triangle (3 straight sides, closed) and what doesn't matter (colour, size, orientation). | G1 |
| G1.GEO.4 | Geometry — Shapes & Angles | Composition | Compose 2D and 3D shapes | Builds composite shapes and new shapes from existing ones (tangrams, block models). | G1 |
| G1.GEO.5 | Geometry — Shapes & Angles | Drawing | Reproduce on a grid | Copies a simple figure on square or dot paper. | G1 |
| G1.GEO.6 | Geometry — Shapes & Angles | Lines | Straight lines with a ruler | Tells straight lines from curved ones; draws a straight line between two points with a ruler. | G1 |
| G1.POS.1 | Geometry — Position & Movement | Orientation | Left and right | Uses left and right relative to self and follows them in instructions. | G1 |
| G1.POS.2 | Geometry — Position & Movement | Movement | Whole, half, quarter turns | Describes movement as forward/backward steps and whole/half/quarter turns; programs a floor robot along a path. | G1 |
| G1.POS.3 | Geometry — Position & Movement | Location | Simple maps | Locates objects on a simple map or plan of a familiar room. | G1 |
| G1.DAT.1 | Data & Statistics | Sorting | Sort by one or two criteria | Sorts by one or two criteria (e.g., in a simple Venn or Carroll layout) and explains the rule. | G1 |
| G1.DAT.2 | Data & Statistics | Representing data | Pictogram and block graph | Organizes data in up to 3 categories as a 1:1 pictogram or block graph and answers "how many more/less". | G1 |
| G1.PRB.1 | Chance & Probability | Chance language | Will / might / won't happen | Classifies everyday events as certain, possible or impossible. Australia/Ontario; absent in England/US. | G1 |
| G1.PSR.1 | Problem Solving & Reasoning | Word problems | Choose + or − | Solves one-step stories within 20 (add to, take from, put together, compare), choosing the operation. | G1 |
| G1.PSR.2 | Problem Solving & Reasoning | Word problems | Unknown in any position | Solves problems where the start, change or result is unknown. | G1 |
| G1.PSR.3 | Problem Solving & Reasoning | Representation | Objects, drawings, number sentence | Represents a problem with objects, a drawing and a number sentence. | G1 |
| G1.PSR.4 | Problem Solving & Reasoning | Reasoning | Explain and check | Explains how the answer was found and checks it with another method. | G1 |

## G2 — Grade 2 (age 7–8)

| ID | Topic | Competency | Sub-competency | Description | Grade |
| --- | --- | --- | --- | --- | --- |
| G2.NUM.1 | Number & Counting | Counting | Count within 1000 | Counts within 1000; skip-counts by 5s, 10s and 100s from any number. | G2 |
| G2.NUM.2 | Number & Counting | Skip counting | 2s, 3s, 5s, 10s | Counts in steps of 2, 3, 5 and 10 forwards and backwards from any number. | G2 |
| G2.NUM.3 | Number & Counting | Reading & writing numbers | Numerals, words, expanded form to 1000 | Reads and writes numbers to 1000 in digits, words and expanded form (352 = 300 + 50 + 2). | G2 |
| G2.NUM.4 | Number & Counting | Comparing & ordering | Compare 3-digit numbers | Compares and orders 3-digit numbers using <, >, =. | G2 |
| G2.NUM.5 | Number & Counting | Number line | Place to 1000 | Places and estimates the position of numbers on a partially labelled number line 0–1000. | G2 |
| G2.NUM.6 | Number & Counting | Parity | Odd and even | Decides whether a number is odd or even (pairing, last digit) and writes an even number as a double. | G2 |
| G2.PV.1 | Place Value | Hundreds, tens, ones | 3-digit place value | Knows 100 = 10 tens and shows any 3-digit number as hundreds, tens and ones. | G2 |
| G2.PV.2 | Place Value | Digit value | Value of each digit, zero placeholder | Says what each digit is worth, including zero as a placeholder (305). | G2 |
| G2.PV.3 | Place Value | Partitioning | Flexible partitioning | Partitions in non-standard ways (352 = 34 tens + 12 ones) as a basis for regrouping. | G2 |
| G2.PV.4 | Place Value | Adding powers of ten | ±10 and ±100 | Adds or subtracts 10 or 100 to/from any number to 1000 mentally. | G2 |
| G2.AS.1 | Addition & Subtraction | Fluency | All facts within 20 | Knows all addition and subtraction facts within 20 from memory. | G2 |
| G2.AS.2 | Addition & Subtraction | Within 100 | Place-value strategies | Adds and subtracts within 100 fluently using place value and properties of operations. | G2 |
| G2.AS.3 | Addition & Subtraction | Written method | 2-digit with regrouping | Adds and subtracts 2-digit numbers with regrouping in a written method. | G2 |
| G2.AS.4 | Addition & Subtraction | Several addends | Up to four 2-digit numbers | Adds up to four 2-digit numbers. | G2 |
| G2.AS.5 | Addition & Subtraction | Within 1000 | 3-digit with models | Adds and subtracts within 1000 using base-ten models and drawings, and relates them to a written method. | G2 |
| G2.AS.6 | Addition & Subtraction | Properties | Commutativity and inverse | Knows addition is commutative and subtraction is not; checks a subtraction with addition. | G2 |
| G2.MD.1 | Multiplication & Division | Meaning of multiplication | Groups, arrays, × sign | Writes equal groups and arrays as multiplication (4 × 3) and as repeated addition. | G2 |
| G2.MD.2 | Multiplication & Division | Times tables | 2, 5 and 10 tables | Recalls the 2, 5 and 10 times tables and their division facts. (Singapore adds 3 and 4; Japan all tables to 9 × 9.) | G2 |
| G2.MD.3 | Multiplication & Division | Meaning of division | Sharing vs grouping, ÷ sign | Tells sharing from grouping problems, writes them with ÷, and links ÷ to ×. | G2 |
| G2.MD.4 | Multiplication & Division | Properties | Commutativity of × | Shows with arrays that 3 × 5 = 5 × 3. | G2 |
| G2.MD.5 | Multiplication & Division | Remainders | Leftovers | Meets remainders in sharing contexts and says what is left over. | G2 |
| G2.MM.1 | Mental Math & Estimation | Bridging 10 | 2-digit ± 1-digit | Adds or subtracts a 1-digit number to/from a 2-digit number mentally, crossing tens (47 + 8). | G2 |
| G2.MM.2 | Mental Math & Estimation | Multiples of 10 | ± tens | Adds and subtracts multiples of 10 mentally (46 + 30, 90 − 40). | G2 |
| G2.MM.3 | Mental Math & Estimation | Doubling & halving | Doubles to 50, halves to 100 | Doubles numbers to 50 and halves even numbers to 100 mentally. | G2 |
| G2.MM.4 | Mental Math & Estimation | Derived facts | Scale known facts | Uses 3 + 7 = 10 to know 30 + 70 = 100. | G2 |
| G2.MM.5 | Mental Math & Estimation | Estimation | Round to check | Estimates a sum to the nearest 10 to check an answer. | G2 |
| G2.FR.1 | Fractions | Equal shares | Halves, thirds, quarters | Splits shapes into 2, 3 or 4 equal shares; knows equal shares of identical wholes need not look alike. | G2 |
| G2.FR.2 | Fractions | Notation | ½, ⅓, ¼, ¾, 2/4 | Reads and writes ½, ⅓, ¼, 2/4, ¾ and matches them to pictures. | G2 |
| G2.FR.3 | Fractions | Fraction of a quantity | Unit and simple non-unit | Finds ⅓ of 6, ¼ of 12, ¾ of 12 with objects. | G2 |
| G2.FR.4 | Fractions | Equivalence | 2/4 = ½ | Recognizes that two quarters make a half. | G2 |
| G2.FR.5 | Fractions | Counting in fractions | Halves and quarters | Counts in halves and quarters (¼, ½, ¾, 1, 1¼…). | G2 |
| G2.ALG.1 | Patterns & Algebraic Thinking | Unknowns | Missing numbers within 100 | Finds missing numbers in +, −, × equations using inverse operations (? − 7 = 15). | G2 |
| G2.ALG.2 | Patterns & Algebraic Thinking | Sequences | Step rules | Continues sequences with steps of ±2, 3, 5, 10, 100, finds missing terms and states the rule. | G2 |
| G2.ALG.3 | Patterns & Algebraic Thinking | Relational thinking | Compare without computing | Uses <, >, = between expressions by reasoning (8 + 5 ☐ 7 + 6) rather than calculating both. | G2 |
| G2.MEA.1 | Measurement | Length | cm and m | Measures lengths in cm and m with a ruler, metre stick or tape, choosing the right tool and unit. | G2 |
| G2.MEA.2 | Measurement | Length | Estimate lengths | Estimates lengths in cm and m and checks by measuring. | G2 |
| G2.MEA.3 | Measurement | Length | Compare lengths | Works out how much longer one object is than another in standard units. | G2 |
| G2.MEA.4 | Measurement | Mass & capacity | kg, g, l, ml on scales | Measures mass (kg, g) and capacity (l, ml) and reads scales to the nearest labelled division. | G2 |
| G2.MEA.5 | Measurement | Temperature | °C on a thermometer | Reads temperature in °C on a thermometer. | G2 |
| G2.MEA.6 | Measurement | Number-line model | Ruler as number line | Represents lengths and differences on a number-line diagram. | G2 |
| G2.TIM.1 | Time | Telling time | Quarter hours and 5 minutes | Reads and writes time to the quarter hour and to 5 minutes; uses a.m./p.m. | G2 |
| G2.TIM.2 | Time | Time facts | Units and calendar facts | Knows 60 min = 1 h, 24 h = 1 day, 7 days = 1 week, 12 months = 1 year, and the number of days in each month. | G2 |
| G2.TIM.3 | Time | Duration | Whole-hour durations | Finds durations in whole and half hours (start 3:00, end 5:30). | G2 |
| G2.MON.1 | Money | Symbols & notation | Read and write amounts | Uses the currency symbols (€/c, $/¢, £/p) and writes amounts correctly. Local. | G2 |
| G2.MON.2 | Money | Making amounts | Combinations of coins | Makes the same amount with different coin combinations and finds the fewest coins. | G2 |
| G2.MON.3 | Money | Transactions | Total and change within 100 | Finds totals and gives change from simple amounts within 100 cents/pence. | G2 |
| G2.GEO.1 | Geometry — Shapes & Angles | 2D properties | Sides and vertices | Describes triangles, quadrilaterals, pentagons, hexagons, octagons by their number of sides and vertices. | G2 |
| G2.GEO.2 | Geometry — Shapes & Angles | 3D properties | Faces, edges, vertices | Counts faces, edges and vertices and names the 2D faces of 3D shapes. | G2 |
| G2.GEO.3 | Geometry — Shapes & Angles | Classification | Sort by properties | Compares and sorts 2D and 3D shapes by their properties. | G2 |
| G2.GEO.4 | Geometry — Shapes & Angles | Drawing | Draw with given attributes | Draws shapes with given attributes (a shape with 5 sides) on a grid with a ruler. | G2 |
| G2.GEO.5 | Geometry — Shapes & Angles | Partitioning | Rows and columns | Splits a rectangle into rows and columns of equal squares and counts them (lead-in to area). | G2 |
| G2.GEO.6 | Geometry — Shapes & Angles | Symmetry | Vertical line of symmetry | Recognizes symmetrical shapes by folding and finds a vertical line of symmetry. | G2 |
| G2.GEO.7 | Geometry — Shapes & Angles | Angles | Right angle | Recognizes right angles ("square corners") using a set square or paper template. | G2 |
| G2.GEO.8 | Geometry — Shapes & Angles | Lines | Segments and alignment | Draws and measures line segments; checks whether points lie on a straight line. | G2 |
| G2.POS.1 | Geometry — Position & Movement | Turns | Clockwise / anticlockwise | Describes turns as quarter, half, three-quarter, clockwise or anticlockwise. | G2 |
| G2.POS.2 | Geometry — Position & Movement | Grids | Grid references | Gives and finds a cell on a grid by its reference (B4). | G2 |
| G2.POS.3 | Geometry — Position & Movement | Algorithms | Sequence of moves | Writes a sequence of moves to take a token to a target on a grid (early coding). | G2 |
| G2.DAT.1 | Data & Statistics | Collecting | Tally charts | Collects data with tallies grouped in fives. | G2 |
| G2.DAT.2 | Data & Statistics | Representing data | Pictograms, block graphs, bar graphs | Draws pictograms (1 symbol = 1, 2, 5 or 10), block graphs and bar graphs with up to 4 categories, and simple tables. | G2 |
| G2.DAT.3 | Data & Statistics | Interpreting data | Totals and differences | Answers total, comparison and "how many more" questions from a graph. | G2 |
| G2.DAT.4 | Data & Statistics | Line plots | Plot measurements | Records measurements as a line plot (dot plot) in whole units. | G2 |
| G2.PRB.1 | Chance & Probability | Chance language | Likely / unlikely | Describes events as certain, likely, unlikely or impossible and lists the outcomes of a coin or die. | G2 |
| G2.PSR.1 | Problem Solving & Reasoning | Word problems | One step, four operations | Solves one-step problems with any of the four operations and writes the number sentence. | G2 |
| G2.PSR.2 | Problem Solving & Reasoning | Word problems | Two-step within 100 | Solves two-step addition and subtraction problems within 100. | G2 |
| G2.PSR.3 | Problem Solving & Reasoning | Representation | Part–whole bar model | Draws a part–whole or comparison bar model to represent a problem. | G2 |
| G2.PSR.4 | Problem Solving & Reasoning | Checking | Inverse and estimate | Checks answers with the inverse operation and by estimating. | G2 |
| G2.PSR.5 | Problem Solving & Reasoning | Systematic work | All possibilities | Finds all combinations in small problems (outfits from 2 shirts × 3 trousers). | G2 |
| G2.PSR.6 | Problem Solving & Reasoning | Generalising | Spot a general rule | Notices and tests general statements ("odd + odd is always even"). | G2 |

## G3 — Grade 3 (age 8–9)

| ID | Topic | Competency | Sub-competency | Description | Grade |
| --- | --- | --- | --- | --- | --- |
| G3.NUM.1 | Number & Counting | Reading & writing numbers | To 10,000 | Reads, writes, compares and orders numbers to 10,000. | G3 |
| G3.NUM.2 | Number & Counting | Skip counting | Multiples of 4, 6, 8, 25, 50, 100, 1000 | Counts in multiples of 4, 6, 7, 8, 9, 25, 50, 100 and 1000. | G3 |
| G3.NUM.3 | Number & Counting | Number line | To 10,000 | Places numbers on a partially labelled number line to 10,000. | G3 |
| G3.NUM.4 | Number & Counting | Roman numerals | I–C | Reads Roman numerals to XII on clocks and to C (100). Local (England, France). | G3 |
| G3.PV.1 | Place Value | Thousands | 4-digit place value | Says what each digit in a 4-digit number is worth and partitions it. | G3 |
| G3.PV.2 | Place Value | Adding powers of ten | ±1, 10, 100, 1000 | Adds or subtracts 1, 10, 100 or 1000 to/from any number instantly. | G3 |
| G3.PV.3 | Place Value | Rounding | Nearest 10 and 100 | Rounds any number to the nearest 10 and 100 (and to the nearest 1000 in England). | G3 |
| G3.PV.4 | Place Value | Scaling by 10 | ×/÷ 10 and 100 | Multiplies whole numbers by 10 and 100 (and divides multiples of 10/100 by them), explaining that digits shift places. | G3 |
| G3.AS.1 | Addition & Subtraction | Written method | 3-digit fluency | Adds and subtracts 3-digit numbers in columns fluently, including regrouping across zero. | G3 |
| G3.AS.2 | Addition & Subtraction | Checking | Estimate and inverse | Estimates by rounding and checks with the inverse operation. | G3 |
| G3.MD.1 | Multiplication & Division | Times tables | 3, 4, 8 tables | Recalls the 3, 4 and 8 tables and their division facts. | G3 |
| G3.MD.2 | Multiplication & Division | Times tables | 6, 7, 9 tables | Recalls the 6, 7 and 9 tables and their division facts. | G3 |
| G3.MD.3 | Multiplication & Division | Times tables | All facts to 10 × 10 | Knows all multiplication and division facts to 10 × 10 fluently. | G3 |
| G3.MD.4 | Multiplication & Division | Properties | ×0, ×1, commutative, associative, distributive | Uses ×0 and ×1 facts and the properties of multiplication as strategies (8 × 7 = 8 × 5 + 8 × 2; 2 × 3 × 5 = 2 × 15). | G3 |
| G3.MD.5 | Multiplication & Division | Multiples of 10 | 1-digit × tens | Multiplies a 1-digit number by a multiple of 10 (4 × 60). | G3 |
| G3.MD.6 | Multiplication & Division | Written multiplication | 2/3-digit × 1-digit | Multiplies a 2- or 3-digit number by a 1-digit number (grid, partial products, short multiplication). | G3 |
| G3.MD.7 | Multiplication & Division | Written division | ÷ 1-digit with remainder | Divides a 2- or 3-digit number by a 1-digit number, with a remainder. | G3 |
| G3.MD.8 | Multiplication & Division | Division as unknown factor | Use × to divide | Solves 32 ÷ 8 by asking "8 × ? = 32". | G3 |
| G3.MM.1 | Mental Math & Estimation | Mental addition | 2-digit ± 2-digit | Adds and subtracts two 2-digit numbers mentally (partitioning, compensation). | G3 |
| G3.MM.2 | Mental Math & Estimation | Strategies | Bridge through 10 and 100 | Deliberately bridges through 10 or 100 (68 + 7 = 68 + 2 + 5). | G3 |
| G3.MM.3 | Mental Math & Estimation | Fact recall | Instant tables to 10 × 10 | Answers any table fact to 10 × 10 within about 3 seconds. | G3 |
| G3.MM.4 | Mental Math & Estimation | Scaling | ×10, ×100 mentally | Multiplies by 10, 100 and multiples of 10 mentally. | G3 |
| G3.MM.5 | Mental Math & Estimation | Estimation | Estimate by rounding | Estimates sums, differences and simple products by rounding. | G3 |
| G3.FR.1 | Fractions | Meaning | Unit fraction and a/b | Understands 1/b as one of b equal parts and a/b as a parts of size 1/b (denominators 2, 3, 4, 6, 8, 10). | G3 |
| G3.FR.2 | Fractions | Number line | Fractions as numbers | Places fractions on a number line from 0 to 1 and beyond. | G3 |
| G3.FR.3 | Fractions | Equivalence | Simple equivalents | Finds simple equivalent fractions with models (½ = 2/4 = 3/6); writes whole numbers as fractions (3 = 3/1, 4/4 = 1). | G3 |
| G3.FR.4 | Fractions | Comparing | Same numerator or denominator | Compares two fractions with the same numerator or the same denominator and justifies the answer. | G3 |
| G3.FR.5 | Fractions | Tenths | Count in tenths | Counts up and down in tenths; knows tenths come from dividing by 10. | G3 |
| G3.FR.6 | Fractions | Operations | Add/subtract like denominators within 1 | Adds and subtracts fractions with the same denominator within one whole (2/7 + 3/7). | G3 |
| G3.FR.7 | Fractions | Fraction of a quantity | Unit and non-unit fractions | Finds ¼ of 20 and ¾ of 20, and solves problems with them. | G3 |
| G3.DEC.1 | Decimals, Percentages & Proportion | Decimal notation in context | Prices and measures | Reads decimals in prices and measures (€3.45, 1.5 m), knowing the point separates whole units from parts. | G3 |
| G3.ALG.1 | Patterns & Algebraic Thinking | Unknowns | Symbol for unknown in × and ÷ | Solves equations like ☐ × 6 = 42 and 56 ÷ ☐ = 8. | G3 |
| G3.ALG.2 | Patterns & Algebraic Thinking | Arithmetic patterns | Patterns in tables | Explains patterns in addition and multiplication tables (even × any number = even). | G3 |
| G3.ALG.3 | Patterns & Algebraic Thinking | Functions | Input–output machines | Completes function-machine tables with a one-operation rule and finds the rule. | G3 |
| G3.ALG.4 | Patterns & Algebraic Thinking | Sequences | State the rule in words | Continues a number sequence and states its rule in words. | G3 |
| G3.MEA.1 | Measurement | Metric units | mm, cm, m, g, kg, ml, l | Measures, compares, adds and subtracts lengths, masses and capacities in metric units. | G3 |
| G3.MEA.2 | Measurement | Conversion | Adjacent units and compound measures | Converts between adjacent units (1 m = 100 cm, 1 kg = 1000 g, 1 l = 1000 ml, 1 cm = 10 mm), including 1 m 25 cm = 125 cm. | G3 |
| G3.MEA.3 | Measurement | Reading scales | Intervals of 2, 5, 10, 100 | Reads scales whose intervals are 2, 5, 10 or 100, including unlabelled divisions. | G3 |
| G3.MEA.4 | Measurement | Perimeter | Perimeter of polygons | Measures and calculates the perimeter of polygons and finds an unknown side. | G3 |
| G3.MEA.5 | Measurement | Area | Area by unit squares | Understands area as covering; measures it by counting cm² and m² squares; finds a rectangle's area as rows × columns. | G3 |
| G3.MEA.6 | Measurement | Estimation | Benchmarks | Estimates measures using known benchmarks (a door is about 2 m; a litre bottle). | G3 |
| G3.TIM.1 | Time | Telling time | To the minute | Reads and writes time to the minute on analog clocks (including Roman-numeral faces) and digital clocks. | G3 |
| G3.TIM.2 | Time | Elapsed time | Durations and end times | Solves start/end/duration problems in minutes, within and across the hour (using a number line). | G3 |
| G3.TIM.3 | Time | Units of time | Seconds, minutes, hours | Converts hours ↔ minutes ↔ seconds; knows about leap years. | G3 |
| G3.MON.1 | Money | Decimal notation | Units and subunits | Writes amounts in decimal notation ($4.05) and converts between units and cents/pence. | G3 |
| G3.MON.2 | Money | Transactions | Add, subtract, change | Adds and subtracts amounts of money and gives change by counting on. | G3 |
| G3.MON.3 | Money | Decisions | Compare prices | Compares prices and decides what can be afforded. | G3 |
| G3.GEO.1 | Geometry — Shapes & Angles | Quadrilaterals | Classify quadrilaterals | Classifies squares, rectangles, rhombuses, parallelograms, trapeziums/trapezoids and kites; knows a square is also a rectangle and a rhombus. | G3 |
| G3.GEO.2 | Geometry — Shapes & Angles | Angles | Angle as turn; compare with right angle | Sees an angle as an amount of turn; tells angles smaller than, equal to or larger than a right angle. | G3 |
| G3.GEO.3 | Geometry — Shapes & Angles | Lines | Parallel, perpendicular, horizontal, vertical | Identifies and draws parallel, perpendicular, horizontal and vertical lines. | G3 |
| G3.GEO.4 | Geometry — Shapes & Angles | Partitioning | Equal areas as fractions | Splits shapes into parts with equal area and names each part as a unit fraction. | G3 |
| G3.GEO.5 | Geometry — Shapes & Angles | 3D models | Build 3D shapes | Makes 3D shapes from modelling materials and recognizes them from different views. | G3 |
| G3.POS.1 | Geometry — Position & Movement | Directions | Four compass points | Uses N, E, S, W to give and follow directions. | G3 |
| G3.POS.2 | Geometry — Position & Movement | Turns | Turns as right angles | Relates turns to right angles: a quarter turn = 1 right angle, a half turn = 2, a full turn = 4. | G3 |
| G3.POS.3 | Geometry — Position & Movement | Maps | Grid references and routes | Uses grid references on maps and describes a route. | G3 |
| G3.DAT.1 | Data & Statistics | Representing data | Scaled pictograms and bar charts | Draws and reads pictograms and bar charts with scales (1 symbol = 2, 5, 10). | G3 |
| G3.DAT.2 | Data & Statistics | Tables | Read and use tables | Reads and interprets data tables, including simple two-way tables. | G3 |
| G3.DAT.3 | Data & Statistics | Interpreting data | One- and two-step questions | Answers "how many more/fewer" and total questions that need one or two steps. | G3 |
| G3.DAT.4 | Data & Statistics | Line plots | Halves and quarters | Draws line plots of measurements in halves and quarters. | G3 |
| G3.DAT.5 | Data & Statistics | Investigation | Statistical cycle | Plans a simple investigation: question → collect → represent → interpret. | G3 |
| G3.PRB.1 | Chance & Probability | Experiments | Dice, spinners, outcomes | Runs chance experiments, lists outcomes and compares how likely each one is. | G3 |
| G3.PSR.1 | Problem Solving & Reasoning | Word problems | Two-step, four operations | Solves two-step problems with all four operations, writing an equation with a symbol for the unknown. | G3 |
| G3.PSR.2 | Problem Solving & Reasoning | Representation | Comparison and multiplicative bar models | Draws bar models for comparison and for "times as many" situations. | G3 |
| G3.PSR.3 | Problem Solving & Reasoning | Reasonableness | Estimate to judge | Judges whether an answer makes sense using rounding and mental estimates. | G3 |
| G3.PSR.4 | Problem Solving & Reasoning | Information | Missing / surplus data | Spots which information in a problem is missing or not needed. | G3 |
| G3.PSR.5 | Problem Solving & Reasoning | Communication | Compare strategies | Explains a method and compares it with a classmate's. | G3 |
| G3.PSR.6 | Problem Solving & Reasoning | Systematic work | Organised lists | Uses organised lists or tables to find all solutions. | G3 |

## G4 — Grade 4 (age 9–10)

| ID | Topic | Competency | Sub-competency | Description | Grade |
| --- | --- | --- | --- | --- | --- |
| G4.NUM.1 | Number & Counting | Large numbers | To 1,000,000 | Reads, writes, compares and orders numbers to 1,000,000. | G4 |
| G4.NUM.2 | Number & Counting | Negative numbers | In context | Uses negative numbers in context (temperature, floors below ground) and counts through zero. | G4 |
| G4.NUM.3 | Number & Counting | Factors & multiples | Factor pairs to 100 | Finds all factor pairs of a number to 100 and recognizes multiples. | G4 |
| G4.NUM.4 | Number & Counting | Primes | Prime vs composite | Decides whether a number to 100 is prime or composite. | G4 |
| G4.NUM.5 | Number & Counting | Roman numerals | To M | Reads Roman numerals to 1000 (M) and recognizes years written in them. Local. | G4 |
| G4.PV.1 | Place Value | Millions | Value of each digit | Says what each digit to the millions is worth; knows each place is worth 10× the place to its right. | G4 |
| G4.PV.2 | Place Value | Rounding | Any power of 10 | Rounds to the nearest 10, 100, 1000, 10,000 and 100,000. | G4 |
| G4.PV.3 | Place Value | Scaling by 10 | ×/÷ 10, 100, 1000 | Multiplies and divides whole numbers by 10, 100 and 1000. | G4 |
| G4.AS.1 | Addition & Subtraction | Written method | Multi-digit fluency | Adds and subtracts multi-digit whole numbers with the standard column method, including across zeros (5003 − 2768). | G4 |
| G4.AS.2 | Addition & Subtraction | Checking | Estimate and inverse | Checks results by rounding and by using the inverse operation. | G4 |
| G4.MD.1 | Multiplication & Division | Times tables | To 12 × 12 | Recalls all facts to 12 × 12 instantly, with their division facts (11s and 12s: England/Commonwealth practice). | G4 |
| G4.MD.2 | Multiplication & Division | Written multiplication | 4-digit × 1-digit, 2-digit × 2-digit | Multiplies up to 4-digit × 1-digit and 2-digit × 2-digit (area model, partial products, column). | G4 |
| G4.MD.3 | Multiplication & Division | Written division | 4-digit ÷ 1-digit | Divides up to 4-digit by 1-digit numbers with remainders (short division). | G4 |
| G4.MD.4 | Multiplication & Division | Remainders | Interpret remainders | Decides whether to round a remainder up or down or keep it, depending on the context (buses needed vs full boxes). | G4 |
| G4.MD.5 | Multiplication & Division | Multiplicative comparison | "Times as many" | Solves "3 times as many / as long" problems and tells them apart from additive comparison. | G4 |
| G4.MD.6 | Multiplication & Division | Properties | Use properties to calculate | Uses distributive and associative properties for efficient calculation (25 × 4 × 7 = 100 × 7). | G4 |
| G4.MD.7 | Multiplication & Division | Divisibility | Rules for 2, 5, 10 | Uses the divisibility rules for 2, 5 and 10. | G4 |
| G4.MM.1 | Mental Math & Estimation | Compensation | Round and adjust | Uses rounding and compensation mentally (+99 as +100 − 1). | G4 |
| G4.MM.2 | Mental Math & Estimation | Powers of 10 | Mental ×/÷ with multiples of 10 | Calculates 30 × 40 and 2400 ÷ 6 mentally. | G4 |
| G4.MM.3 | Mental Math & Estimation | Double and halve | Doubling–halving strategy | Uses doubling and halving to simplify (16 × 25 = 8 × 50). | G4 |
| G4.MM.4 | Mental Math & Estimation | Estimation | Estimate products and quotients | Estimates products and quotients before calculating. | G4 |
| G4.FR.1 | Fractions | Equivalence | Generate equivalents | Generates equivalent fractions by multiplying/dividing numerator and denominator by the same number; simplifies. | G4 |
| G4.FR.2 | Fractions | Comparing | Different denominators | Compares and orders fractions with different denominators (common denominator, benchmark ½). | G4 |
| G4.FR.3 | Fractions | Mixed numbers | Improper ↔ mixed | Converts between improper fractions and mixed numbers. | G4 |
| G4.FR.4 | Fractions | Operations | Add/subtract like and related denominators | Adds and subtracts fractions with the same or related denominators, including mixed numbers (⅔ + ⅙). | G4 |
| G4.FR.5 | Fractions | Decomposition | Fraction as a sum | Decomposes a fraction into a sum of fractions (⅜ = ⅛ + 2/8). | G4 |
| G4.FR.6 | Fractions | Multiplication | Fraction × whole number | Multiplies a fraction by a whole number (3 × 2/5). | G4 |
| G4.FR.7 | Fractions | Fraction of a quantity | Problems | Finds a fraction of a quantity (3/5 of 40) in word problems. | G4 |
| G4.FR.8 | Fractions | Fraction–decimal link | Tenths and hundredths | Writes tenths and hundredths as decimals and knows ¼ = 0.25, ½ = 0.5, ¾ = 0.75. | G4 |
| G4.DEC.1 | Decimals, Percentages & Proportion | Decimal place value | Tenths and hundredths | Says what each decimal digit is worth, to hundredths. | G4 |
| G4.DEC.2 | Decimals, Percentages & Proportion | Comparing | Order to 2 places | Compares and orders decimals to 2 places and places them on a number line. | G4 |
| G4.DEC.3 | Decimals, Percentages & Proportion | Rounding | To nearest whole | Rounds decimals with one or two places to the nearest whole number. | G4 |
| G4.DEC.4 | Decimals, Percentages & Proportion | Operations | Add/subtract to 2 places | Adds and subtracts decimals to 2 places, in money and measures. | G4 |
| G4.ALG.1 | Patterns & Algebraic Thinking | Patterns | Generate from a rule | Generates a number or shape pattern from a rule and notices features the rule doesn't state. | G4 |
| G4.ALG.2 | Patterns & Algebraic Thinking | Unknowns | Letter or symbol for unknown | Uses a letter or symbol for an unknown in multi-step problems and solves for it. | G4 |
| G4.ALG.3 | Patterns & Algebraic Thinking | Functions | Two-column relationships | Describes the relationship between two columns of a table as a rule, including two-step rules. | G4 |
| G4.MEA.1 | Measurement | Units | Relative sizes within a system | Knows km, m, cm, mm; kg, g; l, ml relationships and builds conversion tables. | G4 |
| G4.MEA.2 | Measurement | Area | Rectangle formula | Calculates area as length × width in cm² and m², including shapes made of rectangles. | G4 |
| G4.MEA.3 | Measurement | Perimeter | Formula and unknown sides | Uses perimeter formulas; finds a missing side from the area or perimeter; shows that shapes with the same area can have different perimeters. | G4 |
| G4.MEA.4 | Measurement | Problems | Measurement word problems | Solves measurement problems with the four operations, including simple fractions and decimals. | G4 |
| G4.MEA.5 | Measurement | Estimation | Estimate then measure | Estimates a length, mass or capacity before measuring and is roughly right. | G4 |
| G4.MEA.6 | Measurement | Scales | Unlabelled divisions | Reads scales with unlabelled intermediate divisions accurately. | G4 |
| G4.TIM.1 | Time | Clock systems | 12 ↔ 24-hour | Reads and converts between 12-hour and 24-hour times. | G4 |
| G4.TIM.2 | Time | Timetables | Read and plan | Reads timetables and schedules and plans a journey with them. | G4 |
| G4.TIM.3 | Time | Durations | Across hours and days | Calculates durations that cross hours or midnight. | G4 |
| G4.TIM.4 | Time | Calendar | Dates ahead | Uses a calendar to find a date some weeks ahead or behind. | G4 |
| G4.MON.1 | Money | Operations | Four operations with money | Solves multi-step shopping problems with all four operations on decimal amounts. | G4 |
| G4.MON.2 | Money | Estimation | Estimate a bill | Estimates a total cost by rounding and checks the change. | G4 |
| G4.GEO.1 | Geometry — Shapes & Angles | Lines | Points, segments, rays | Identifies and draws points, lines, segments and rays, and parallel and perpendicular lines. | G4 |
| G4.GEO.2 | Geometry — Shapes & Angles | Angles | Classify angles | Names acute, right, obtuse, straight and reflex angles. | G4 |
| G4.GEO.3 | Geometry — Shapes & Angles | Angles | Protractor | Measures and draws angles to the nearest degree with a protractor. | G4 |
| G4.GEO.4 | Geometry — Shapes & Angles | Angle facts | Straight line and full turn | Uses the facts that angles on a straight line total 180° and around a point 360° to find missing angles. | G4 |
| G4.GEO.5 | Geometry — Shapes & Angles | Triangles | Classify triangles | Classifies triangles by sides (equilateral, isosceles, scalene) and by angles (right, acute, obtuse). | G4 |
| G4.GEO.6 | Geometry — Shapes & Angles | Polygons | Regular vs irregular | Distinguishes regular from irregular polygons by reasoning about sides and angles. | G4 |
| G4.GEO.7 | Geometry — Shapes & Angles | Symmetry | Lines of symmetry | Finds all lines of symmetry of a 2D shape and completes a figure symmetric about a line, including a diagonal line. | G4 |
| G4.GEO.8 | Geometry — Shapes & Angles | Circles | Draw with compasses | Draws a circle of a given radius with compasses; names centre, radius and diameter. | G4 |
| G4.GEO.9 | Geometry — Shapes & Angles | 3D shapes | Prisms and pyramids | Identifies and describes prisms and pyramids by their faces, edges and vertices. | G4 |
| G4.POS.1 | Geometry — Position & Movement | Coordinates | First quadrant | Reads and plots coordinates in the first quadrant and draws a polygon from given vertices. | G4 |
| G4.POS.2 | Geometry — Position & Movement | Translation | Describe a translation | Translates a shape on a grid and describes the move (left 2, up 3). | G4 |
| G4.POS.3 | Geometry — Position & Movement | Reflection | Reflect in a mirror line | Reflects a shape in a horizontal or vertical mirror line on a grid. | G4 |
| G4.POS.4 | Geometry — Position & Movement | Directions | 8 compass points and degrees | Uses the 8 compass points and turns of 90°, 180°, 270°, clockwise or anticlockwise. | G4 |
| G4.DAT.1 | Data & Statistics | Bar charts | Scales and grouped data | Draws and reads bar charts with labelled scales, including double bar charts. | G4 |
| G4.DAT.2 | Data & Statistics | Line graphs | Change over time | Draws and reads line graphs and describes the trend they show. | G4 |
| G4.DAT.3 | Data & Statistics | Tables | Two-way tables and timetables | Extracts and compares information from two-way tables and timetables. | G4 |
| G4.DAT.4 | Data & Statistics | Line plots | Fractional data | Draws line plots of measurements in fractions of a unit and solves problems from them. | G4 |
| G4.DAT.5 | Data & Statistics | Investigation | Choose a representation | Poses a question, collects data and picks the graph type that best fits it. | G4 |
| G4.PRB.1 | Chance & Probability | Likelihood | Equally likely outcomes | Lists all outcomes of an experiment and decides whether they are equally likely. | G4 |
| G4.PSR.1 | Problem Solving & Reasoning | Multi-step problems | Mixed operations and units | Solves multi-step problems that mix operations and units. | G4 |
| G4.PSR.2 | Problem Solving & Reasoning | Representation | Bar models for × comparison | Uses bar models for multiplicative comparison and fraction problems. | G4 |
| G4.PSR.3 | Problem Solving & Reasoning | Systematic work | Find all solutions | Works systematically (tables, tree diagrams) to find every solution and knows when all have been found. | G4 |
| G4.PSR.4 | Problem Solving & Reasoning | Communication | Explain so others can follow | Explains a method aloud or in writing so another child can follow it, and critiques someone else's reasoning. | G4 |
| G4.PSR.5 | Problem Solving & Reasoning | Conjecture | Examples and counterexamples | Makes and tests conjectures with examples and finds a counterexample to a false claim. | G4 |

## G5 — Grade 5 / end of primary (age 10–11)

| ID | Topic | Competency | Sub-competency | Description | Grade |
| --- | --- | --- | --- | --- | --- |
| G5.NUM.1 | Number & Counting | Large numbers | To 10,000,000 | Reads, writes, compares and orders numbers to 10,000,000 and knows how big a billion is. | G5 |
| G5.NUM.2 | Number & Counting | Primes | Primes below 100 | Lists the primes below 50 and tests numbers below 100 for primality. Extension: prime factor decomposition. | G5 |
| G5.NUM.3 | Number & Counting | Factors & multiples | Common factors and multiples | Finds common factors and common multiples of two numbers (lead-in to HCF and LCM). | G5 |
| G5.NUM.4 | Number & Counting | Powers | Squares and cubes | Knows the square numbers to 12² and the cubes to 5³, with ² and ³ notation. | G5 |
| G5.NUM.5 | Number & Counting | Divisibility | Rules for 3, 4, 6, 9 | Uses the divisibility tests for 2, 3, 4, 5, 6, 9 and 10. | G5 |
| G5.NUM.6 | Number & Counting | Negative numbers | Order and intervals | Orders negative numbers and calculates intervals across zero (from −4 °C to 7 °C). | G5 |
| G5.PV.1 | Place Value | Decimal place value | To thousandths | Says what each digit to thousandths is worth; writes decimals in expanded form (3.47 = 3 + 4/10 + 7/100). | G5 |
| G5.PV.2 | Place Value | Powers of 10 | Digit shifts | Multiplies and divides whole numbers and decimals by 10, 100 and 1000, explains the digit shift, and uses 10³ notation. | G5 |
| G5.PV.3 | Place Value | Rounding | Any degree of accuracy | Rounds whole numbers to any place and decimals to 1 or 2 decimal places. | G5 |
| G5.AS.1 | Addition & Subtraction | Written method | Whole numbers and decimals | Adds and subtracts any whole numbers and decimals (to thousandths) in columns, lining up the decimal point. | G5 |
| G5.AS.2 | Addition & Subtraction | Method choice | Mental, written or calculator | Picks a mental, written or calculator method to suit the numbers. | G5 |
| G5.MD.1 | Multiplication & Division | Long multiplication | 4-digit × 2-digit | Multiplies up to 4-digit by 2-digit numbers with the standard algorithm. | G5 |
| G5.MD.2 | Multiplication & Division | Long division | ÷ 2-digit | Divides by a 2-digit number and gives the remainder as a whole number, fraction or decimal, as the context requires. | G5 |
| G5.MD.3 | Multiplication & Division | Order of operations | Brackets | Applies the order of operations, including brackets; writes and evaluates expressions with brackets. | G5 |
| G5.MD.4 | Multiplication & Division | Decimals | × and ÷ decimals by whole numbers | Multiplies and divides decimals (to hundredths) by whole numbers. Extension: decimal × decimal (US). | G5 |
| G5.MM.1 | Mental Math & Estimation | Mental multiplication | 2-digit × 1-digit | Multiplies a 2-digit number by a 1-digit number mentally, and calculates 70 × 300. | G5 |
| G5.MM.2 | Mental Math & Estimation | Percentages | 1%, 10%, 25%, 50%, 75% | Finds 1%, 10%, 25%, 50% and 75% of an amount mentally. | G5 |
| G5.MM.3 | Mental Math & Estimation | Estimation | Order of magnitude | Estimates before calculating and spots answers that are out by a factor of 10 or otherwise impossible. | G5 |
| G5.MM.4 | Mental Math & Estimation | Decimals | Mental decimal facts | Calculates simple decimal sums and products mentally (0.6 + 0.7, 2.5 × 4). | G5 |
| G5.FR.1 | Fractions | Operations | Unlike denominators | Adds and subtracts fractions and mixed numbers with unlike denominators using a common denominator. | G5 |
| G5.FR.2 | Fractions | Fraction as division | a/b = a ÷ b | Interprets ¾ as 3 ÷ 4 and writes a division remainder as a fraction. | G5 |
| G5.FR.3 | Fractions | Multiplication | Fraction × fraction | Multiplies a fraction by a fraction (area model) and knows multiplying by a fraction less than 1 makes a number smaller. | G5 |
| G5.FR.4 | Fractions | Division | Unit fraction ÷ whole | Divides a unit fraction by a whole number and a whole number by a unit fraction (⅓ ÷ 2, 4 ÷ ⅓). | G5 |
| G5.FR.5 | Fractions | Simplifying | Lowest terms | Simplifies fractions to lowest terms using common factors. | G5 |
| G5.FR.6 | Fractions | Comparing | Including > 1 | Compares and orders fractions and mixed numbers, including ones greater than 1. | G5 |
| G5.DEC.1 | Decimals, Percentages & Proportion | Decimals | To 3 places | Compares, orders and places decimals to 3 places on a number line. | G5 |
| G5.DEC.2 | Decimals, Percentages & Proportion | Equivalence | Fraction ↔ decimal ↔ percent | Converts fluently between fractions, decimals and percentages for common values (½, ¼, ¾, ⅕, 1/10, 1/100). | G5 |
| G5.DEC.3 | Decimals, Percentages & Proportion | Percent | Per hundred | Understands percent as "out of 100" (shading a 100-square) and writes it as a fraction and a decimal. | G5 |
| G5.DEC.4 | Decimals, Percentages & Proportion | Percent | Percentage of a quantity | Finds any percentage of a quantity (15% of 80). | G5 |
| G5.DEC.5 | Decimals, Percentages & Proportion | Percent | Increase and decrease | Calculates a discount or a price rise. Extension (Singapore P5–6, England Y6; US G7). | G5 |
| G5.DEC.6 | Decimals, Percentages & Proportion | Proportion | Scaling / unitary method | Solves "if 3 cost 12, what do 7 cost?" via the unit value or scaling. | G5 |
| G5.DEC.7 | Decimals, Percentages & Proportion | Ratio | Notation and sharing | Uses a:b notation and shares a quantity in a ratio (share 20 in 3:1). Extension (Singapore P5, England Y6; US G6). | G5 |
| G5.ALG.1 | Patterns & Algebraic Thinking | Expressions | Letters for numbers | Writes expressions with a letter (n + 5, 3 × n) for a described situation. | G5 |
| G5.ALG.2 | Patterns & Algebraic Thinking | Formulae | Substitute into a formula | Substitutes values into a simple formula (P = 2 × (l + w)). | G5 |
| G5.ALG.3 | Patterns & Algebraic Thinking | Equations | Solve and check | Solves one-step (and simple two-step) equations and checks by substituting the answer back. | G5 |
| G5.ALG.4 | Patterns & Algebraic Thinking | Sequences | Position-to-term rule | States the general rule of a sequence in terms of position ("4 times the position, plus 1"). | G5 |
| G5.ALG.5 | Patterns & Algebraic Thinking | Two unknowns | Pairs that satisfy | Finds pairs of numbers that satisfy an equation with two unknowns (a + b = 10, a > b). | G5 |
| G5.ALG.6 | Patterns & Algebraic Thinking | Patterns | Two rules, ordered pairs | Generates two numerical patterns from two rules, pairs the terms and graphs them. | G5 |
| G5.MEA.1 | Measurement | Conversion | Multi-step and decimal | Converts across two steps and with decimals (2.35 km = 2350 m; mm → m; ml → l). | G5 |
| G5.MEA.2 | Measurement | Volume | Cuboid volume | Understands volume as unit cubes and calculates V = l × w × h in cm³ and m³, including compound cuboids. | G5 |
| G5.MEA.3 | Measurement | Volume–capacity | 1 l = 1000 cm³ | Knows 1 ml = 1 cm³ and 1 l = 1000 cm³ and converts between them. | G5 |
| G5.MEA.4 | Measurement | Area | Triangles and parallelograms | Calculates the area of triangles and parallelograms. Extension (Singapore P5, England Y6; US G6). | G5 |
| G5.MEA.5 | Measurement | Area & perimeter | Compound shapes | Finds the area and perimeter of compound rectilinear shapes and reasons about how they relate. | G5 |
| G5.MEA.6 | Measurement | Customary units | Imperial/customary equivalents | Knows the approximate metric equivalents of inch, foot, mile, pound and pint. Local (core in US). | G5 |
| G5.MEA.7 | Measurement | Estimation | Body benchmarks | Uses personal benchmarks (hand span, pace, own height) to estimate. | G5 |
| G5.TIM.1 | Time | Conversion | All units of time | Converts between seconds, minutes, hours, days, weeks, months, years, decades and centuries, including multi-step. | G5 |
| G5.TIM.2 | Time | Planning | Multi-leg journeys | Plans a multi-leg journey from timetables, with durations that cross midnight. | G5 |
| G5.TIM.3 | Time | Time zones | Time difference | Works out the time in another time zone to schedule a call. Extension. | G5 |
| G5.MON.1 | Money | Value for money | Best buy / unit price | Compares offers by unit price (2 for €3 vs €1.75 each). | G5 |
| G5.MON.2 | Money | Shopping calculations | Spend within a fixed amount | Chooses items whose total, after any percentage discount, stays within a given sum (€20 to spend). | G5 |
| ~~G5.MON.3~~ | ~~Money~~ | ~~Profit and loss~~ | ~~Cost vs selling price~~ | ~~Retired 2026-10-02: a financial concept, not currency arithmetic → framework section G.~~ | ~~G5~~ |
| G5.GEO.1 | Geometry — Shapes & Angles | Classification | Hierarchy of shapes | Classifies 2D shapes in a hierarchy by their properties (every square is a rectangle; every rectangle is a parallelogram). | G5 |
| G5.GEO.2 | Geometry — Shapes & Angles | Angle facts | Triangle and quadrilateral sums | Uses angle sums (triangle 180°, quadrilateral 360°) and vertically opposite angles to find unknown angles. | G5 |
| G5.GEO.3 | Geometry — Shapes & Angles | Circles | Parts of a circle | Names centre, radius, diameter and circumference and knows d = 2r. | G5 |
| G5.GEO.4 | Geometry — Shapes & Angles | Construction | Draw to specification | Constructs shapes accurately from given sides and angles with a ruler, protractor and compasses. | G5 |
| G5.GEO.5 | Geometry — Shapes & Angles | 3D shapes | Nets and views | Identifies and draws nets of cubes, cuboids, prisms and pyramids; matches a solid to its top, front and side views. | G5 |
| G5.POS.1 | Geometry — Position & Movement | Coordinates | Real-world first-quadrant problems | Uses first-quadrant coordinates to represent and solve real-world problems. | G5 |
| G5.POS.2 | Geometry — Position & Movement | Coordinates | Four quadrants | Plots and reads coordinates in all four quadrants. Extension (England Y6; US G6). | G5 |
| G5.POS.3 | Geometry — Position & Movement | Transformations | Transform on coordinate grid | Translates and reflects shapes on a coordinate grid and describes the moves with coordinates. | G5 |
| G5.POS.4 | Geometry — Position & Movement | Rotation | Rotate about a point | Rotates a shape 90° or 180° about a point and describes the rotation. Extension. | G5 |
| G5.POS.5 | Geometry — Position & Movement | Scale | Maps and plans | Uses a scale (1 cm : 100 m) to find real distances on a map or plan. | G5 |
| G5.DAT.1 | Data & Statistics | Averages | Mean | Calculates the mean and says when it is a useful summary and when it isn't. | G5 |
| G5.DAT.2 | Data & Statistics | Averages | Median, mode, range | Finds the median, mode and range of a small data set. Extension (US G6). | G5 |
| G5.DAT.3 | Data & Statistics | Pie charts | Read and interpret | Reads pie charts and relates their sectors to fractions and percentages. Extension for drawing them. | G5 |
| G5.DAT.4 | Data & Statistics | Graphs | Compare series, choose graph | Reads line graphs with two series, estimates values between data points, and picks the right graph type. | G5 |
| G5.DAT.5 | Data & Statistics | Critical reading | Misleading graphs | Spots a misleading graph: truncated axis, missing scale, biased sample, cherry-picked range. | G5 |
| G5.PRB.1 | Chance & Probability | Probability scale | 0 to 1 | Places events on a 0–1 scale and writes simple probabilities as fractions. | G5 |
| G5.PRB.2 | Chance & Probability | Experiment vs expectation | Compare results to predictions | Repeats an experiment, compares the observed frequencies with the predictions, and sees that more trials get closer. | G5 |
| G5.PSR.1 | Problem Solving & Reasoning | Non-routine problems | Heuristics | Tackles an unfamiliar problem with heuristics (work backwards, simplify, guess-check-improve, look for a pattern). | G5 |
| G5.PSR.2 | Problem Solving & Reasoning | Multi-step problems | Fractions, decimals, percentages | Solves multi-step problems with fractions, decimals and percentages and justifies the answer. | G5 |
| G5.PSR.3 | Problem Solving & Reasoning | Information | Missing or surplus data | Solves problems with missing or surplus information and says which is which. | G5 |
| G5.PSR.4 | Problem Solving & Reasoning | Error analysis | Find own mistake | Finds the error in a wrong answer instead of starting again blindly. | G5 |
| G5.PSR.5 | Problem Solving & Reasoning | Tools | Calculator judgment | Uses a calculator correctly, checks its output against a mental estimate, and knows when not to use one. | G5 |
| G5.PSR.6 | Problem Solving & Reasoning | Argument | "Always, sometimes, never" | Justifies general statements with reasons and refutes them with counterexamples. | G5 |
| G5.PSR.7 | Problem Solving & Reasoning | Representation | Models for ratio and percent | Uses bar models and diagrams for fraction, ratio and percentage problems. | G5 |

> **End-of-primary benchmark.** Tables to 12 × 12 automatic; long multiplication and division
> reliable; fractions, decimals and percentages interchangeable; area, perimeter and volume of simple
> shapes; data read critically; and an unfamiliar multi-step problem solved independently, with
> the answer checked and justified.

---

## Where curricula disagree (and why the grade above was chosen)

| Skill | Earliest | Latest | Chosen |
| --- | --- | --- | --- |
| All tables to 9×9 / 10×10 | Japan G2 | US G3 (fluency), France CE2 | **G3** (G2 for 2, 5, 10) |
| Tables 11 × and 12 × | England Y4 (= G3) | not required in US, France, Japan | **G4**, noted as Commonwealth |
| Column method for 3-digit + / − | England Y3, Singapore P2 (= G2) | US G3–G4 (standard algorithm G4) | **G3** fluency (G2 with models) |
| Area of a rectangle by formula | US G3, Singapore P3 | England Y5, Japan G4, France CM1–CM2 | **G3** counting / rows × columns, **G4** formula |
| Decimals (tenths, hundredths) | England Y4 (= G3), Singapore P4 | US G4–G5, France CM1 | **G4** |
| Percentages | England Y5 (= G4) | US G6 | **G5** |
| Ratio | Singapore P5, England Y6 | US G6 | **G5 extension** |
| Negative numbers | England Y4–Y5 | US G6, Singapore secondary | **G4** in context, **G5** intervals |
| First-quadrant coordinates | England Y4 (= G3) | US G5 | **G4** |
| Angle sum of a triangle | Singapore P5, England Y6 | US G8 | **G5** |
| Mean | Singapore P5, England Y6 | US G6 | **G5** |
| Probability / chance | Australia Y1, Ontario G1 | England and Singapore: none in primary | Language **G1–G2**, 0–1 scale **G5** |
| Money | US, England, Singapore, Australia, India G1–G3 | France: no separate strand | **K–G5**, currency arithmetic only (no finance) |
| Roman numerals | England Y3–Y5, France CM | most others: none | Kept, marked **Local** |

---

## Sources surveyed

National and international curricula (current versions as of 2026):

* **USA** — Common Core State Standards for Mathematics (K–5, 2010); Head Start ELOF (2015) for PK; NCTM Curriculum Focal Points.
* **England** — National Curriculum: Mathematics programmes of study KS1–KS2 (2014, with non-statutory guidance 2020); EYFS Statutory Framework (2024) for Reception.
* **France** — Programmes de l'école maternelle (2021, revised 2025), cycle 2 (CP–CE2) and cycle 3 (CM1–CM2) 2024–2025 mathematics programmes, attendus de fin d'année.
* **Singapore** — MOE Primary Mathematics Syllabus P1–P6 (2021); Nurturing Early Learners framework (2022).
* **Japan** — MEXT Course of Study for Elementary School Mathematics (2017).
* **Australia** — Australian Curriculum: Mathematics v9.0 (2022), Foundation–Year 6.
* **Canada** — Ontario Mathematics Curriculum Grades 1–8 (2020); Ontario Kindergarten Program (2016).
* **Germany** — KMK Bildungsstandards Mathematik Primarbereich (2022).
* **Finland** — National Core Curriculum for Basic Education (2014), grades 1–2 and 3–6.
* **India** — NCF for Foundational Stage (2022), NCF for School Education (2023), NCERT textbooks Classes 1–5.
* **China** — Compulsory Education Mathematics Curriculum Standards (2022), stages 1–3.
* **International** — Cambridge Primary Mathematics curriculum framework (2020); IB PYP mathematics scope and sequence; TIMSS 2023 Grade 4 assessment framework.

Method: each competency in each source was matched to a row here. A row exists if **at least
three sources** require the skill by the end of G5 (or by the end of K for PK/K rows). Its grade is
the **median** mastery grade across those sources, converted to the age-based levels in the table at
the top.

---

## Maintenance

* **Owner**: `syllabus-research` (see `.claude/agents/syllabus-research.md` → "Reference upkeep").
* **IDs are permanent.** Add new rows with the next free number for that grade and topic. If a
  skill moves grade, strike the old row through, add a new row, and note it in the changelog.
* Every change goes in the changelog with the source that triggered it.

### Changelog

| Date | Change | Trigger |
| --- | --- | --- |
| 2026-10-02 | Initial worldwide reference: PK–G5, 16 topics, 410 rows. | Cross-reading the curricula listed above. |
| 2026-10-02 | Money limited to currency arithmetic: retired G5.MON.3 (profit/loss); G5.MON.2 reworded from "budgeting" to "spend within a fixed amount". ALG and PRB mapped to planned dedicated areas `algebra` and `probability`. | Product decision (user). |
