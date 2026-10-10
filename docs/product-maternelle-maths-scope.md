# Maternelle (K) mathematics: scope and work list

Status: scope recommendation for owner sign-off. Generated 2026-10-10 from code, not from the markdown: the syllabus `subjects/mathematics/src/syllabus/syllabus.generated.json`, the activity registry `subjects/mathematics/packages/syllabus-content-p` (`pExercises`, 109 exercises), and a throwaway test that generated sessions (levels 1-5, 40 seeds) and read each question's scene and en/fr fields. Other sources: `docs/product/MATH-COMPETENCY-REFERENCE.md`, `docs/syllabus-detailed/K.md`, `docs/activity-sweep/{tracker,notes}.md`, specs 051, 059, 062, preschool-second-release.

## 1. Scope decision

**Recommended scope: the Maternelle section is app level K** (ages 4-6, gating), which already carries the former pre-school ("p") tier: the activities live in the package `syllabus-content-p` and every PK reference row is mapped to a K skill.
- **Core (source of truth):** the 25 PK rows PK.NUM.1 to PK.PSR.2 in the competency reference. All 25 are covered by at least one K skill (section 3).
- **Also in the app K syllabus, beyond the PK reference:** the K.* rows (counting to 30, numerals to 20, bonds to 10, ordinals, picture graphs, days of the week and so on) plus introduce-only G1.* ideas. **54 of 81 K skills cite no PK row at all**: K-NS-4, K-NS-5, K-NS-10, K-NS-11, K-NS-12, K-NS-13, K-NS-14, K-NS-15, K-NS-16, K-FL-1, K-FL-2, K-FL-3, K-FL-4, K-PV-1, K-OP-3, K-OP-4, K-OP-5, K-OP-6, K-OP-7, K-OP-8, K-OP-9, K-OP-10, K-FR-1, K-FR-2, K-FR-3, K-FR-4, K-NT-1, K-NT-2, K-ALG-2, K-ALG-3, K-ALG-4, K-ALG-5, K-MEA-4, K-MEA-5, K-TIM-4, K-TIM-5, K-TIM-6, K-TIM-7, K-MON-1, K-MON-2, K-GEO-2, K-GEO-4, K-GEO-5, K-GEO-6, K-GEO-7, K-GEO-10, K-POS-2, K-POS-3, K-POS-5, K-POS-6, K-DAT-2, K-DAT-4, K-PSR-2, K-PSR-3. This exceeds the PK reference. It matches the app K level and `docs/syllabus-detailed/K.md` ("fluent by year end" versus "introduce-only, never a gate"), so the recommendation is to keep it, but it is an owner decision (question 1 in section 6).
- **Out of scope for K:** RP and PRB have no K content. K-PV-2 and K-PV-3 were moved or removed by spec 062 (PV in K is only K-PV-1). `preschool-teen-numbers` still exists in code but is re-mapped to G1-PV-3, so it is not counted here. `preschool-count-in-order-5` is a sibling exercise of `preschool-count-in-order` (the syllabus links the -10 one).

Headline numbers (K only): **81 skills, 14 topics, 184 activities listed, 108 implemented in code, 76 planned only.** Every built syllabus link resolves to an exercise in code.

## 2. Topics and skills

Listed = activities in the syllabus; Impl = resolved to a real exercise in code; Plan = marked planned (idea only, no code). Rows = reference rows cited by the skill.

### NS Number sense

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-NS-1 | Count to 30 | Compter jusqu'à 30 | PK.NUM.1, K.NUM.1 | 3 | 3 | 0 |
| K-NS-2 | One word per object | Un objet, un mot | PK.NUM.2, PK.NUM.3 | 3 | 3 | 0 |
| K-NS-3 | See it at a glance | Voir d'un coup d'œil | PK.NUM.5, K.NUM.6 | 3 | 3 | 0 |
| K-NS-4 | Same count, moved around | Le nombre ne change pas | K.NUM.4 | 3 | 3 | 0 |
| K-NS-5 | Zero means none | Zéro, c'est rien | K.NUM.13 | 2 | 2 | 0 |
| K-NS-6 | More, fewer, same | Plus, moins, pareil | PK.NUM.7, K.NUM.10 | 3 | 3 | 0 |
| K-NS-7 | Give exactly n | Donne-m'en n | PK.NUM.4, K.NUM.5 | 3 | 3 | 0 |
| K-NS-8 | Numerals 0–20 | Reconnaître les chiffres | PK.NUM.6, K.NUM.7 | 3 | 3 | 0 |
| K-NS-9 | One more, one less | Un de plus, un de moins | PK.NUM.8, K.NUM.9 | 3 | 3 | 0 |
| K-NS-10 | Count on and back | Compter en avant et à rebours | K.NUM.2, K.NUM.3 | 4 | 4 | 0 |
| K-NS-11 | Order 0–10, find the gap | Ranger les nombres | K.NUM.12 | 3 | 3 | 0 |
| K-NS-12 | Which number is bigger? | Quel nombre est le plus grand ? | K.NUM.11 | 3 | 3 | 0 |
| K-NS-13 | Parts of a number | Les parties d'un nombre | K.AS.3 | 3 | 3 | 0 |
| K-NS-14 | 1st to 5th | Premier à cinquième | K.NUM.14 | 3 | 3 | 0 |
| K-NS-15 | Write numerals | Écrire les chiffres | K.NUM.8 | 3 | 3 | 0 |
| K-NS-16 | Count by 10s, 2s, 5s | Compter de 10 en 10 | K.NUM.1 | 2 | 2 | 0 |

### FL Mental fluency

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-FL-1 | Estimate "about how many" | Estimer « environ combien » | K.PSR.3 | 2 | 1 | 1 |
| K-FL-2 | Doubles to 5 + 5 | Les doubles jusqu'à 5 + 5 | K.AS.6, G1.MD.3 | 2 | 1 | 1 |
| K-FL-3 | Halves of even numbers to 20 | Moitiés des nombres pairs jusqu'à 20 | G1.MD.3 | 2 | 0 | 2 |
| K-FL-4 | Quick facts within 10 | Calculs rapides dans la limite de 10 | K.AS.2, G1.MM.1 | 2 | 0 | 2 |

### PV Place value

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-PV-1 | See how numbers to 10 are built | Voir comment les nombres jusqu'à 10 sont construits | K.PV.1 | 4 | 4 | 0 |

### OP Operations

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-OP-1 | Join stories: act out and put together | Histoires de réunion : jouer et mettre ensemble | PK.AS.2, K.AS.1 | 3 | 3 | 0 |
| K-OP-2 | Separate stories: take away and how many left | Histoires de retrait : enlever et dire combien il reste | PK.AS.1, K.AS.1 | 2 | 1 | 1 |
| K-OP-3 | Choose plus or minus for a story | Choisir plus ou moins pour une histoire | K.AS.1, K.AS.2 | 2 | 2 | 0 |
| K-OP-4 | Solve a story within 10 | Résoudre une histoire dans la limite de 10 | K.AS.2, K.AS.7 | 2 | 1 | 1 |
| K-OP-5 | Write a number sentence | Écrire une phrase mathématique | K.AS.7 | 2 | 1 | 1 |
| K-OP-6 | Find the partner that makes 10 | Trouver le complément à 10 | K.AS.4 | 3 | 2 | 1 |
| K-OP-7 | Facts within 5 | Calculs dans la limite de 5 | K.AS.5 | 2 | 1 | 1 |
| K-OP-8 | First look at bridging into 11–20 | Premier regard sur le passage de la dizaine (11 à 20) | G1.AS.2 | 2 | 0 | 2 |
| K-OP-9 | Share fairly between 2 or 3 | Partager équitablement entre 2 ou 3 | K.MD.1, G1.MD.2 | 2 | 1 | 1 |
| K-OP-10 | Make equal groups | Former des groupes égaux | G1.MD.1 | 2 | 0 | 2 |

### FR Fractions

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-FR-1 | Equal and unequal parts | Parts égales et parts inégales | G1.FR.1 | 2 | 1 | 1 |
| K-FR-2 | Halves of shapes | Moitiés de formes | G1.FR.1 | 2 | 0 | 2 |
| K-FR-3 | Quarters of shapes | Quarts de formes | G1.FR.1, G1.FR.2 | 2 | 0 | 2 |
| K-FR-4 | Half of a set | Moitié d'un ensemble | G1.FR.2 | 2 | 0 | 2 |

### NT Number theory

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-NT-1 | Make pairs with none left over | Former des paires sans reste | K.ALG.3 | 2 | 1 | 1 |
| K-NT-2 | Even and odd by feel | Pair et impair à l'intuition | K.ALG.3 | 2 | 0 | 2 |

### ALG Patterns and algebra

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-ALG-1 | Continue an AB pattern | Continuer une suite AB | PK.ALG.1 | 2 | 1 | 1 |
| K-ALG-2 | Name the unit and fix a mistake | Nommer le motif et corriger une erreur | K.ALG.1 | 2 | 1 | 1 |
| K-ALG-3 | ABB and ABC patterns | Suites ABB et ABC | K.ALG.1 | 2 | 0 | 2 |
| K-ALG-4 | Create your own pattern | Créer sa propre suite | K.ALG.1, K.ALG.2 | 2 | 0 | 2 |
| K-ALG-5 | Translate a pattern into another form | Traduire une suite sous une autre forme | K.ALG.2 | 2 | 1 | 1 |

### MEA Measurement

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-MEA-1 | Size words and which attribute to measure | Mots de grandeur et choix de ce qu'on mesure | PK.MEA.1, K.MEA.1 | 2 | 1 | 1 |
| K-MEA-2 | Compare two lengths | Comparer deux longueurs | PK.MEA.2, K.MEA.2 | 2 | 1 | 1 |
| K-MEA-3 | Compare two weights | Comparer deux masses | PK.MEA.2, K.MEA.2 | 2 | 1 | 1 |
| K-MEA-4 | Compare two capacities | Comparer deux capacités | K.MEA.2 | 2 | 1 | 1 |
| K-MEA-5 | Choose a tool | Choisir un outil | K.MEA.1 | 2 | 1 | 1 |
| K-MEA-6 | Order 3–5 objects | Ranger 3 à 5 objets | PK.MEA.3, K.MEA.2, K.MEA.3 | 3 | 2 | 1 |

### TIM Time

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-TIM-1 | Order events with first, next, last | Ordonner des événements : d'abord, ensuite, enfin | PK.TIM.1, K.TIM.1 | 2 | 1 | 1 |
| K-TIM-2 | Before, after, now, later | Avant, après, maintenant, plus tard | PK.TIM.2, K.TIM.1 | 2 | 0 | 2 |
| K-TIM-3 | Day, night, morning and evening | Jour, nuit, matin et soir | PK.TIM.2 | 2 | 1 | 1 |
| K-TIM-4 | Yesterday, today, tomorrow | Hier, aujourd'hui, demain | K.TIM.1 | 2 | 1 | 1 |
| K-TIM-5 | Which takes longer | Ce qui dure le plus longtemps | K.TIM.3 | 2 | 1 | 1 |
| K-TIM-6 | Days of the week in order | Les jours de la semaine dans l'ordre | K.TIM.2 | 2 | 1 | 1 |
| K-TIM-7 | The day before and after | Le jour d'avant et le jour d'après | K.TIM.2 | 2 | 2 | 0 |

### MON Money

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-MON-1 | Money buys things | L'argent sert à acheter | K.MON.1 | 2 | 1 | 1 |
| K-MON-2 | Recognise local coins and pay with one | Reconnaître les pièces locales et payer avec l'une d'elles | K.MON.1 | 2 | 0 | 2 |

### GEO Shapes and angles

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-GEO-1 | Name circle, triangle, square | Nommer cercle, triangle, carré | PK.GEO.1, K.GEO.1 | 2 | 1 | 1 |
| K-GEO-2 | Rectangle and hexagon in any orientation | Rectangle et hexagone dans toute orientation | K.GEO.1 | 2 | 1 | 1 |
| K-GEO-3 | Match identical shapes | Associer des figures identiques | PK.GEO.2 | 2 | 1 | 1 |
| K-GEO-4 | Count sides | Compter les côtés | K.GEO.3 | 2 | 1 | 1 |
| K-GEO-5 | Corners and curved edges | Coins et bords courbes | K.GEO.3 | 3 | 1 | 2 |
| K-GEO-6 | Name solid shapes | Nommer les solides | K.GEO.2 | 3 | 2 | 1 |
| K-GEO-7 | Flat or solid | Figure plane ou solide | K.GEO.2 | 2 | 1 | 1 |
| K-GEO-8 | Roll or stack | Rouler ou empiler | PK.GEO.3 | 2 | 1 | 1 |
| K-GEO-9 | Build bigger shapes from smaller ones | Construire de grandes figures avec de plus petites | PK.GEO.2, K.GEO.4 | 2 | 1 | 1 |
| K-GEO-10 | Spot shapes around us | Repérer les formes autour de nous | K.GEO.5 | 2 | 2 | 0 |

### POS Position and movement

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-POS-1 | In, on, under, next to | Dans, sur, sous, à côté de | PK.POS.1 | 2 | 1 | 1 |
| K-POS-2 | Above, below, beside, between, behind, in front of | Au-dessus, en dessous, près de, entre, derrière, devant | K.POS.1 | 2 | 0 | 2 |
| K-POS-3 | Copy an arrangement | Copier une disposition | K.POS.3 | 2 | 1 | 1 |
| K-POS-4 | Movement words | Mots de déplacement | PK.POS.2 | 2 | 1 | 1 |
| K-POS-5 | Follow a short route | Suivre un court trajet | K.POS.2 | 2 | 1 | 1 |
| K-POS-6 | Give a short route | Donner un court trajet | K.POS.2 | 2 | 0 | 2 |

### DAT Data

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-DAT-1 | Sort by one attribute | Trier selon un critère | PK.DAT.1 | 2 | 1 | 1 |
| K-DAT-2 | Name the sorting rule | Nommer la règle de tri | K.DAT.1 | 2 | 1 | 1 |
| K-DAT-3 | Count and order the groups | Compter et ordonner les groupes | PK.DAT.2, K.DAT.1 | 2 | 1 | 1 |
| K-DAT-4 | Build and read a picture graph | Construire et lire un graphique en images | K.DAT.2 | 2 | 1 | 1 |

### PSR Problem solving

| ID | EN title | FR title | Rows | Listed | Impl | Plan |
|---|---|---|---|---|---|---|
| K-PSR-1 | Math words in play | Les mots de maths pendant le jeu | PK.PSR.1 | 2 | 1 | 1 |
| K-PSR-2 | Say how you know | Dire comment on le sait | K.PSR.1 | 2 | 1 | 1 |
| K-PSR-3 | Enough for everyone? | Y en a-t-il assez pour tous ? | K.PSR.2 | 2 | 1 | 1 |
| K-PSR-4 | Keep trying another way | Essayer autrement | PK.PSR.2 | 2 | 0 | 2 |

Per topic: NS 16 skills / 47 impl / 0 planned; FL 4 skills / 2 impl / 6 planned; PV 1 skills / 4 impl / 0 planned; OP 10 skills / 12 impl / 10 planned; FR 4 skills / 1 impl / 7 planned; NT 2 skills / 1 impl / 3 planned; ALG 5 skills / 3 impl / 7 planned; MEA 6 skills / 7 impl / 6 planned; TIM 7 skills / 7 impl / 7 planned; MON 2 skills / 1 impl / 3 planned; GEO 10 skills / 12 impl / 10 planned; POS 6 skills / 4 impl / 8 planned; DAT 4 skills / 4 impl / 4 planned; PSR 4 skills / 3 impl / 5 planned.

## 3. PK row coverage map

| PK row | Description | K skill(s) | Impl activities in those skills |
|---|---|---|---|
| PK.NUM.1 | Rote count to 10 | K-NS-1 | 3 |
| PK.NUM.2 | One-to-one correspondence | K-NS-2 | 3 |
| PK.NUM.3 | Cardinality | K-NS-2 | 3 |
| PK.NUM.4 | Count out a quantity | K-NS-7 | 3 |
| PK.NUM.5 | Instant recognition to 3 | K-NS-3 | 3 |
| PK.NUM.6 | Recognize numerals 1–5 | K-NS-8 | 3 |
| PK.NUM.7 | More / fewer / same | K-NS-6 | 3 |
| PK.NUM.8 | Next number | K-NS-9 | 3 |
| PK.AS.1 | One more / one less with objects | K-OP-2 | 1 |
| PK.AS.2 | Combine two small groups | K-OP-1 | 3 |
| PK.ALG.1 | Copy and continue AB | K-ALG-1 | 1 |
| PK.MEA.1 | Describe size | K-MEA-1 | 1 |
| PK.MEA.2 | Compare two objects | K-MEA-2, K-MEA-3 | 2 |
| PK.MEA.3 | Seriation of 3 | K-MEA-6 | 2 |
| PK.TIM.1 | Daily routine order | K-TIM-1 | 1 |
| PK.TIM.2 | Day and night | K-TIM-2, K-TIM-3 | 1 |
| PK.GEO.1 | Name basic shapes | K-GEO-1 | 1 |
| PK.GEO.2 | Match and fit shapes | K-GEO-3, K-GEO-9 | 2 |
| PK.GEO.3 | Explore solids | K-GEO-8 | 1 |
| PK.POS.1 | in / on / under | K-POS-1 | 1 |
| PK.POS.2 | Follow movement words | K-POS-4 | 1 |
| PK.DAT.1 | Sort by one attribute | K-DAT-1 | 1 |
| PK.DAT.2 | Pair related objects | K-DAT-3 | 1 |
| PK.PSR.1 | Use math words in play | K-PSR-1 | 1 |
| PK.PSR.2 | Trial and adjustment | K-PSR-4 | 0 |

**PK gaps (row with no K skill): none.** Caveats from `docs/activity-sweep/notes.md`: the mapping of NS-4..6 and NS-10..12 to rows was a best guess; "behind / in front of" (PK.POS.1) is covered only by a planned activity (`behind-or-in-front` under K-POS-2), not by an implemented one; capacity comparison (`preschool-holds-more`) goes beyond PK.MEA.2.

## 4. Activities per skill: implemented, and how they play

How "ludic" was decided (engine: `app/apps/web/src/activity-engine/SceneView.tsx`): only 5 scene types have renderers. `pick-group` and `count-path` are **answering scenes** (the child taps objects or a path inside the picture); `counters`, `ten-frame`, `number-line` are **display scenes** (a picture, then ordinary answer buttons). `build-set`, `slot-order`, `shape-board`, `grid-moves`, `measure-compare` exist as types in plugin-engine but have **no renderer**, and there is no drag, tracing or balance scene anywhere yet (`trace-the-numeral` is multiple choice). Categories: **TAP** = at least half the questions are answering scenes; **PIC** = display scene plus buttons; **TXT** = no scene on most questions (text or emoji prompt with multiple-choice, true/false, numeric or fill-in answer).

Bilingual check: for all 109 exercises, every generated question has an `fr` block with the same keys as `en`, and no question has English text identical to its French text, so none is untranslated at structure level. Translation quality was not reviewed; notes.md lists known wrong French strings (empty-basket, how-many-last-tag, neighbour-houses). True/false labels are localised ("Vrai"/"Faux") in the current template. All activities therefore show "yes" in the en+fr column.

| Skill | Activity (syllabus slug) | Answer type | Scene mix | Cat | Distinct variants | Sweep decision | en+fr |
|---|---|---|---|---|---|---|---|
| K-NS-1 | `preschool-count-in-order` (as `preschool-count-in-order-10`) | multiple choice | count-path 100% | TAP | 346 | KEEP | yes |
| K-NS-1 | `count-the-teens` | multiple choice | none 100% | TXT | 411 | - | yes |
| K-NS-1 | `preschool-count-to-thirty` | multiple choice | none 100% | TXT | 470 | REDESIGN | yes |
| K-NS-2 | `preschool-one-to-one` | multiple choice | none 100% | TXT | 411 | REDESIGN | yes |
| K-NS-2 | `preschool-how-many-last-tag` | true/false | none 100% | TXT | 65 | REDESIGN | yes |
| K-NS-2 | `preschool-how-many-all-together` | multiple choice | none 100% | TXT | 429 | REDESIGN | yes |
| K-NS-3 | `preschool-flash-dots` | multiple choice | counters 75%, ten-frame 25% | PIC | 927 | REDESIGN | yes |
| K-NS-3 | `dot-pattern-snap` | multiple choice | none 100% | TXT | 509 | - | yes |
| K-NS-3 | `ten-frame-flash` | multiple choice | ten-frame 100% | PIC | 527 | - | yes |
| K-NS-4 | `preschool-still-the-same` | multiple choice | counters 100% | PIC | 84 | REDESIGN | yes |
| K-NS-4 | `preschool-which-row-has-more` | multiple choice | pick-group 100% | TAP | 1200 | REDESIGN | yes |
| K-NS-4 | `same-in-a-circle` | multiple choice | none 100% | TXT | 617 | - | yes |
| K-NS-5 | `preschool-empty-basket` | multiple choice | none 100% | TXT | 689 | REDESIGN | yes |
| K-NS-5 | `preschool-is-zero-a-number` | multiple choice | pick-group 52%, counters 15%, number-line 33% | TAP | 718 | REDESIGN | yes |
| K-NS-6 | `preschool-which-has-more` | multiple choice | pick-group 100% | TAP | 1188 | KEEP | yes |
| K-NS-6 | `preschool-same-or-not` | multiple choice | counters 100% | PIC | 170 | REDESIGN | yes |
| K-NS-6 | `preschool-compare-groups` | multiple choice | none 100% | TXT | 190 | REDESIGN | yes |
| K-NS-7 | `preschool-give-n` | multiple choice | none 100% | TXT | 209 | REDESIGN | yes |
| K-NS-7 | `preschool-take-n` | multiple choice | none 100% | TXT | 221 | REDESIGN | yes |
| K-NS-7 | `grab-a-handful` | multiple choice | none 100% | TXT | 770 | - | yes |
| K-NS-8 | `preschool-numeral-twins` | true/false | none 71%, counters 29% | TXT | 91 | TWEAK | yes |
| K-NS-8 | `preschool-show-the-number` | multiple choice | pick-group 100% | TAP | 1200 | TWEAK | yes |
| K-NS-8 | `preschool-number-hunt` | multiple choice | counters 33%, none 67% | TXT | 843 | TWEAK | yes |
| K-NS-9 | `preschool-neighbour-houses` | fill-in | none 100% | TXT | 15 | REDESIGN | yes |
| K-NS-9 | `preschool-one-more-less` | multiple choice | none 100% | TXT | 608 | REDESIGN | yes |
| K-NS-9 | `pop-up-one-more` | multiple choice | none 100% | TXT | 599 | - | yes |
| K-NS-10 | `preschool-count-on-from` | multiple choice | none 100% | TXT | 487 | - | yes |
| K-NS-10 | `preschool-count-backward` | multiple choice | none 100% | TXT | 411 | REDESIGN | yes |
| K-NS-10 | `rocket-countdown` | multiple choice | none 100% | TXT | 764 | - | yes |
| K-NS-10 | `preschool-hidden-bag` | multiple choice | none 100% | TXT | 423 | REDESIGN | yes |
| K-NS-11 | `preschool-number-track` | multiple choice | none 100% | TXT | 356 | REDESIGN | yes |
| K-NS-11 | `line-up-the-cards` | multiple choice | none 100% | TXT | 411 | - | yes |
| K-NS-11 | `missing-card-hard` | multiple choice | none 100% | TXT | 456 | - | yes |
| K-NS-12 | `preschool-bigger-number` | multiple choice | counters 33%, none 33%, number-line 33% | PIC | 204 | REDESIGN | yes |
| K-NS-12 | `preschool-bigger-smaller-same` | multiple choice | counters 50%, number-line 50% | PIC | 286 | REDESIGN | yes |
| K-NS-12 | `number-showdown` | multiple choice | none 100% | TXT | 442 | - | yes |
| K-NS-13 | `preschool-two-hands` | fill-in | none 100% | TXT | 18 | REDESIGN | yes |
| K-NS-13 | `preschool-another-way` | multiple choice | none 100% | TXT | 137 | REDESIGN | yes |
| K-NS-13 | `decompose-to-ten` | multiple choice | none 100% | TXT | 791 | - | yes |
| K-NS-14 | `preschool-who-is-nth` | multiple choice | counters 100% | PIC | 565 | TWEAK | yes |
| K-NS-14 | `preschool-ordinal-or-count` | multiple choice | counters 100% | PIC | 198 | REDESIGN | yes |
| K-NS-14 | `preschool-colour-the-nth` | multiple choice | counters 100% | PIC | 269 | REDESIGN | yes |
| K-NS-15 | `preschool-pick-the-right-way` | multiple choice | none 100% | TXT | 130 | TWEAK | yes |
| K-NS-15 | `trace-the-numeral` | multiple choice | none 100% | TXT | 482 | - | yes |
| K-NS-15 | `trace-the-teens` | multiple choice | none 100% | TXT | 627 | - | yes |
| K-NS-16 | `tens-staircase` | multiple choice | none 100% | TXT | 629 | - | yes |
| K-NS-16 | `skip-count-hops` | multiple choice | none 100% | TXT | 545 | - | yes |
| K-FL-1 | `preschool-estimate` | multiple choice | none 100% | TXT | 100 | REDESIGN | yes |
| K-FL-2 | `preschool-doubles` | multiple choice | none 100% | TXT | 469 | REDESIGN | yes |
| K-PV-1 | `preschool-ten-frame` | multiple choice | ten-frame 67%, none 33% | PIC | 682 | REDESIGN | yes |
| K-PV-1 | `fill-the-frame` | multiple choice | ten-frame 100% | PIC | 660 | - | yes |
| K-PV-1 | `which-frame-is-right` | multiple choice | none 100% | TXT | 616 | - | yes |
| K-PV-1 | `hide-the-counters` | multiple choice | ten-frame 100% | PIC | 816 | - | yes |
| K-OP-1 | `preschool-act-out-add-take` | multiple choice | none 100% | TXT | 108 | REDESIGN | yes |
| K-OP-1 | `preschool-how-many-altogether` | multiple choice | none 100% | TXT | 719 | REDESIGN | yes |
| K-OP-1 | `preschool-all-together` | numeric | none 100% | TXT | 45 | REDESIGN | yes |
| K-OP-2 | `preschool-how-many-left` | numeric | none 100% | TXT | 45 | REDESIGN | yes |
| K-OP-3 | `preschool-which-picture` | multiple choice | none 100% | TXT | 719 | TWEAK | yes |
| K-OP-3 | `preschool-story-plus-or-minus` | multiple choice | none 100% | TXT | 204 | REDESIGN | yes |
| K-OP-4 | `preschool-solve-it` | numeric | none 100% | TXT | 104 | REDESIGN | yes |
| K-OP-5 | `preschool-number-sentences` | multiple choice | none 100% | TXT | 264 | REDESIGN | yes |
| K-OP-6 | `preschool-make-ten` | multiple choice | none 100% | TXT | 422 | REDESIGN | yes |
| K-OP-6 | `make-ten-friends` | multiple choice | ten-frame 100% | PIC | 563 | - | yes |
| K-OP-7 | `preschool-facts-within-five` | multiple choice | counters 67%, none 33% | PIC | 707 | REDESIGN | yes |
| K-OP-9 | `preschool-fair-shares` | multiple choice | none 100% | TXT | 292 | - | yes |
| K-FR-1 | `preschool-fair-shares` | multiple choice | none 100% | TXT | 292 | - | yes |
| K-NT-1 | `preschool-pairs` | multiple choice | none 100% | TXT | 173 | REDESIGN | yes |
| K-ALG-1 | `preschool-what-comes-next` | multiple choice | none 100% | TXT | 1041 | TWEAK | yes |
| K-ALG-2 | `preschool-fill-the-gap` | multiple choice | none 100% | TXT | 96 | TWEAK | yes |
| K-ALG-5 | `preschool-pattern-translate` | multiple choice | none 100% | TXT | 102 | REDESIGN | yes |
| K-MEA-1 | `preschool-what-to-measure` | multiple choice | pick-group 100% | TAP | 1200 | REDESIGN | yes |
| K-MEA-2 | `preschool-longer-or-shorter` | multiple choice | none 100% | TXT | 96 | REDESIGN | yes |
| K-MEA-3 | `preschool-heavy-or-light` | multiple choice | none 100% | TXT | 84 | TWEAK | yes |
| K-MEA-4 | `preschool-holds-more` | multiple choice | none 100% | TXT | 84 | REDESIGN | yes |
| K-MEA-5 | `preschool-measuring-tools` | multiple choice | none 100% | TXT | 64 | REDESIGN | yes |
| K-MEA-6 | `preschool-order-objects` | multiple choice | none 100% | TXT | 608 | REDESIGN | yes |
| K-MEA-6 | `preschool-goes-in-the-middle` | multiple choice | none 100% | TXT | 72 | REDESIGN | yes |
| K-TIM-1 | `preschool-routine-order` | multiple choice | none 100% | TXT | 209 | REDESIGN | yes |
| K-TIM-3 | `preschool-when-does-it-happen` | multiple choice | none 100% | TXT | 220 | REDESIGN | yes |
| K-TIM-4 | `preschool-yesterday-today-tomorrow` | multiple choice | none 100% | TXT | 286 | REDESIGN | yes |
| K-TIM-5 | `preschool-how-long` | multiple choice | none 100% | TXT | 48 | REDESIGN | yes |
| K-TIM-6 | `preschool-days-in-order` | multiple choice | none 100% | TXT | 876 | REDESIGN | yes |
| K-TIM-7 | `preschool-day-after` | multiple choice | none 100% | TXT | 822 | REDESIGN | yes |
| K-TIM-7 | `preschool-what-day-was-it` | fill-in | none 100% | TXT | 14 | REDESIGN | yes |
| K-MON-1 | `preschool-money-play` | multiple choice | none 100% | TXT | 88 | REDESIGN | yes |
| K-GEO-1 | `preschool-name-shapes` | multiple choice | pick-group 100% | TAP | 1200 | TWEAK | yes |
| K-GEO-2 | `preschool-is-it-a-rectangle` | true/false | none 100% | TXT | 45 | REDESIGN | yes |
| K-GEO-3 | `preschool-match-shapes` | multiple choice | none 100% | TXT | 102 | REDESIGN | yes |
| K-GEO-4 | `preschool-count-the-sides` | numeric | none 100% | TXT | 12 | REDESIGN | yes |
| K-GEO-5 | `preschool-sides-or-corners` | multiple choice | none 100% | TXT | 24 | REDESIGN | yes |
| K-GEO-6 | `preschool-name-the-thing` | multiple choice | pick-group 100% | TAP | 1200 | REDESIGN | yes |
| K-GEO-6 | `preschool-solid-match` | multiple choice | pick-group 100% | TAP | 1200 | REDESIGN | yes |
| K-GEO-7 | `preschool-solid-or-flat` | multiple choice | none 100% | TXT | 64 | REDESIGN | yes |
| K-GEO-8 | `preschool-roll-or-stack` | multiple choice | none 100% | TXT | 108 | REDESIGN | yes |
| K-GEO-9 | `preschool-bigger-shape` | multiple choice | none 100% | TXT | 108 | REDESIGN | yes |
| K-GEO-10 | `preschool-shapes-around` | multiple choice | none 100% | TXT | 341 | REDESIGN | yes |
| K-GEO-10 | `preschool-shape-hunt` | multiple choice | none 100% | TXT | 876 | TWEAK | yes |
| K-POS-1 | `preschool-where-is-the-ball` | multiple choice | none 100% | TXT | 580 | REDESIGN | yes |
| K-POS-3 | `preschool-copy-build` | multiple choice | none 100% | TXT | 108 | REDESIGN | yes |
| K-POS-4 | `preschool-robot-says` | multiple choice | none 100% | TXT | 68 | REDESIGN | yes |
| K-POS-5 | `preschool-routes` | multiple choice | none 100% | TXT | 292 | REDESIGN | yes |
| K-DAT-1 | `preschool-odd-one-out` | multiple choice | pick-group 100% | TAP | 1200 | REDESIGN | yes |
| K-DAT-2 | `preschool-name-the-group` | multiple choice | pick-group 100% | TAP | 1200 | REDESIGN | yes |
| K-DAT-3 | `preschool-sort-and-count` | multiple choice | none 100% | TXT | 411 | REDESIGN | yes |
| K-DAT-4 | `preschool-picture-graph` | multiple choice | none 100% | TXT | 156 | REDESIGN | yes |
| K-PSR-1 | `preschool-quantity-words` | multiple choice | pick-group 67%, counters 33% | TAP | 872 | REDESIGN | yes |
| K-PSR-2 | `preschool-explain-answer` | multiple choice | counters 100% | PIC | 144 | REDESIGN | yes |
| K-PSR-3 | `preschool-enough-for-all` | multiple choice | none 100% | TXT | 240 | REDESIGN | yes |

Totals over 108 implemented K activities: **TAP 12, PIC 15, TXT (text-only) 81**. Variants are distinct (prompt, scene) pairs seen over 200 sessions of 10; values under about 50 mean a session repeats questions.

### Planned-only activities (no code)

- K-FL-1: `jar-guess`
- K-FL-2: `mirror-doubles`
- K-FL-3: `mirror-halves`, `two-plates-halves`
- K-FL-4: `quick-twenty`, `fact-flash-cards`
- K-OP-2: `snack-nibbles`
- K-OP-4: `draw-the-story`
- K-OP-5: `sentence-builder`
- K-OP-6: `ten-pairs-match`
- K-OP-7: `five-fact-fishing`
- K-OP-8: `bridge-to-twenty`, `teen-train`
- K-OP-9: `fair-or-not-plates`
- K-OP-10: `equal-groups-bags`, `groups-of-snap`
- K-FR-1: `fair-cut-or-not`
- K-FR-2: `fold-the-half`, `half-or-not`
- K-FR-3: `fold-halves-quarters`, `pizza-quarters`
- K-FR-4: `half-the-set`, `half-of-my-toys`
- K-NT-1: `pair-up-partners`
- K-NT-2: `left-over-sock`, `even-odd-sort`
- K-ALG-1: `ab-bead-string`
- K-ALG-2: `fix-the-pattern`
- K-ALG-3: `abc-parade`, `abb-clap-stomp`
- K-ALG-4: `pattern-maker`, `pattern-gallery`
- K-ALG-5: `sound-to-colour`
- K-MEA-1: `size-word-sort`
- K-MEA-2: `line-up-the-ends`
- K-MEA-3: `balance-play`
- K-MEA-4: `pour-and-see`
- K-MEA-5: `tool-match`
- K-MEA-6: `size-train`
- K-TIM-1: `story-strip-order`
- K-TIM-2: `before-now-later`, `before-after-pairs`
- K-TIM-3: `sun-moon-sort`
- K-TIM-4: `calendar-corner`
- K-TIM-5: `race-the-timer`
- K-TIM-6: `week-song`
- K-MON-1: `what-can-i-buy`
- K-MON-2: `coin-match-shop`, `coin-memory`
- K-GEO-1: `shape-bingo`
- K-GEO-2: `tilted-shapes`
- K-GEO-3: `shape-memory`
- K-GEO-4: `side-tapper`
- K-GEO-5: `corners-and-curves`, `corner-pop`
- K-GEO-6: `solid-bingo`
- K-GEO-7: `shadow-guess`
- K-GEO-8: `ramp-race`
- K-GEO-9: `tangram-two`
- K-POS-1: `put-it-there`
- K-POS-2: `hide-the-teddy`, `behind-or-in-front`
- K-POS-3: `copy-my-layout`
- K-POS-4: `move-like-me`
- K-POS-5: `robot-grid-moves`
- K-POS-6: `tell-the-robot`, `treasure-map-route`
- K-DAT-1: `preschool-sort-into-bins`
- K-DAT-2: `guess-my-rule`
- K-DAT-3: `match-pairs`
- K-DAT-4: `real-object-graph`
- K-PSR-1: `word-of-the-day`
- K-PSR-2: `show-me-how`
- K-PSR-3: `party-table`
- K-PSR-4: `build-it-again`, `puzzle-try-again`

## 5. Work list

**Skills with fewer than 3 implemented activities: 65 of 81** (15 have none: K-FL-3, K-FL-4, K-OP-8, K-OP-10, K-FR-2, K-FR-3, K-FR-4, K-NT-2, K-ALG-3, K-ALG-4, K-TIM-2, K-MON-2, K-POS-2, K-POS-6, K-PSR-4). See the Impl column in section 2. **Text-only (TXT) implemented activities: 81 of 108.**

Two independent lists: A builds new activities, B reworks existing ones.

### A. Build new activities (target: 3 implemented per skill)

Takes the first planned slugs of each short skill until it reaches 3. Total **76** activities (= every planned idea). **Even then 61 skills stay one activity short of 3**, because the syllabus lists only 2 activities for them: K-NS-5, K-NS-16, K-FL-1, K-FL-2, K-FL-3, K-FL-4, K-OP-2, K-OP-3, K-OP-4, K-OP-5, K-OP-7, K-OP-8, K-OP-9, K-OP-10, K-FR-1, K-FR-2, K-FR-3, K-FR-4, K-NT-1, K-NT-2, K-ALG-1, K-ALG-2, K-ALG-3, K-ALG-4, K-ALG-5, K-MEA-1, K-MEA-2, K-MEA-3, K-MEA-4, K-MEA-5, K-TIM-1, K-TIM-2, K-TIM-3, K-TIM-4, K-TIM-5, K-TIM-6, K-TIM-7, K-MON-1, K-MON-2, K-GEO-1, K-GEO-2, K-GEO-3, K-GEO-4, K-GEO-7, K-GEO-8, K-GEO-9, K-GEO-10, K-POS-1, K-POS-2, K-POS-3, K-POS-4, K-POS-5, K-POS-6, K-DAT-1, K-DAT-2, K-DAT-3, K-DAT-4, K-PSR-1, K-PSR-2, K-PSR-3, K-PSR-4. Reaching 3 everywhere needs 61 further activity ideas from `activity-designer` (not counted in the batches), or the target should be 2. Ordered by topic as in K.md. The only answering scenes are pick-group and count-path, so most of these need new scene renderers (drag, build, order, tracing) from spec 051 F1-F6 first, or they will ship as text multiple choice.

**Batch A1 (8 activities; FL, OP)**

- K-FL-1 `jar-guess`
- K-FL-2 `mirror-doubles`
- K-FL-3 `mirror-halves`
- K-FL-3 `two-plates-halves`
- K-FL-4 `quick-twenty`
- K-FL-4 `fact-flash-cards`
- K-OP-2 `snack-nibbles`
- K-OP-4 `draw-the-story`

**Batch A2 (8 activities; OP)**

- K-OP-5 `sentence-builder`
- K-OP-6 `ten-pairs-match`
- K-OP-7 `five-fact-fishing`
- K-OP-8 `bridge-to-twenty`
- K-OP-8 `teen-train`
- K-OP-9 `fair-or-not-plates`
- K-OP-10 `equal-groups-bags`
- K-OP-10 `groups-of-snap`

**Batch A3 (8 activities; FR, NT)**

- K-FR-1 `fair-cut-or-not`
- K-FR-2 `fold-the-half`
- K-FR-2 `half-or-not`
- K-FR-3 `fold-halves-quarters`
- K-FR-3 `pizza-quarters`
- K-FR-4 `half-the-set`
- K-FR-4 `half-of-my-toys`
- K-NT-1 `pair-up-partners`

**Batch A4 (8 activities; NT, ALG)**

- K-NT-2 `left-over-sock`
- K-NT-2 `even-odd-sort`
- K-ALG-1 `ab-bead-string`
- K-ALG-2 `fix-the-pattern`
- K-ALG-3 `abc-parade`
- K-ALG-3 `abb-clap-stomp`
- K-ALG-4 `pattern-maker`
- K-ALG-4 `pattern-gallery`

**Batch A5 (8 activities; ALG, MEA, TIM)**

- K-ALG-5 `sound-to-colour`
- K-MEA-1 `size-word-sort`
- K-MEA-2 `line-up-the-ends`
- K-MEA-3 `balance-play`
- K-MEA-4 `pour-and-see`
- K-MEA-5 `tool-match`
- K-MEA-6 `size-train`
- K-TIM-1 `story-strip-order`

**Batch A6 (8 activities; TIM, MON)**

- K-TIM-2 `before-now-later`
- K-TIM-2 `before-after-pairs`
- K-TIM-3 `sun-moon-sort`
- K-TIM-4 `calendar-corner`
- K-TIM-5 `race-the-timer`
- K-TIM-6 `week-song`
- K-MON-1 `what-can-i-buy`
- K-MON-2 `coin-match-shop`

**Batch A7 (8 activities; MON, GEO)**

- K-MON-2 `coin-memory`
- K-GEO-1 `shape-bingo`
- K-GEO-2 `tilted-shapes`
- K-GEO-3 `shape-memory`
- K-GEO-4 `side-tapper`
- K-GEO-5 `corners-and-curves`
- K-GEO-5 `corner-pop`
- K-GEO-6 `solid-bingo`

**Batch A8 (8 activities; GEO, POS)**

- K-GEO-7 `shadow-guess`
- K-GEO-8 `ramp-race`
- K-GEO-9 `tangram-two`
- K-POS-1 `put-it-there`
- K-POS-2 `hide-the-teddy`
- K-POS-2 `behind-or-in-front`
- K-POS-3 `copy-my-layout`
- K-POS-4 `move-like-me`

**Batch A9 (12 activities; POS, DAT, PSR)**

- K-POS-5 `robot-grid-moves`
- K-POS-6 `tell-the-robot`
- K-POS-6 `treasure-map-route`
- K-DAT-1 `preschool-sort-into-bins`
- K-DAT-2 `guess-my-rule`
- K-DAT-3 `match-pairs`
- K-DAT-4 `real-object-graph`
- K-PSR-1 `word-of-the-day`
- K-PSR-2 `show-me-how`
- K-PSR-3 `party-table`
- K-PSR-4 `build-it-again`
- K-PSR-4 `puzzle-try-again`

### B. Redesign text-only activities (81)

The sweep decision for most of these is already REDESIGN or TWEAK, owned by spec 051 (`051-preschool-scene-redesigns`, in progress: F0 foundation and F7 pick-group done; groups F1-F6 not built). Recommendation: do not open a new spec for B; schedule 051's groups in the order below and use this as the checklist. Grouped by topic, about 9 per batch.

**Batch B1 (9; NS)**

- K-NS-1 `count-the-teens` (multiple choice, -)
- K-NS-1 `preschool-count-to-thirty` (multiple choice, REDESIGN)
- K-NS-2 `preschool-one-to-one` (multiple choice, REDESIGN)
- K-NS-2 `preschool-how-many-last-tag` (true/false, REDESIGN)
- K-NS-2 `preschool-how-many-all-together` (multiple choice, REDESIGN)
- K-NS-3 `dot-pattern-snap` (multiple choice, -)
- K-NS-4 `same-in-a-circle` (multiple choice, -)
- K-NS-5 `preschool-empty-basket` (multiple choice, REDESIGN)
- K-NS-6 `preschool-compare-groups` (multiple choice, REDESIGN)

**Batch B2 (9; NS)**

- K-NS-7 `preschool-give-n` (multiple choice, REDESIGN)
- K-NS-7 `preschool-take-n` (multiple choice, REDESIGN)
- K-NS-7 `grab-a-handful` (multiple choice, -)
- K-NS-8 `preschool-numeral-twins` (true/false, TWEAK)
- K-NS-8 `preschool-number-hunt` (multiple choice, TWEAK)
- K-NS-9 `preschool-neighbour-houses` (fill-in, REDESIGN, only 15 variants)
- K-NS-9 `preschool-one-more-less` (multiple choice, REDESIGN)
- K-NS-9 `pop-up-one-more` (multiple choice, -)
- K-NS-10 `preschool-count-on-from` (multiple choice, -)

**Batch B3 (9; NS)**

- K-NS-10 `preschool-count-backward` (multiple choice, REDESIGN)
- K-NS-10 `rocket-countdown` (multiple choice, -)
- K-NS-10 `preschool-hidden-bag` (multiple choice, REDESIGN)
- K-NS-11 `preschool-number-track` (multiple choice, REDESIGN)
- K-NS-11 `line-up-the-cards` (multiple choice, -)
- K-NS-11 `missing-card-hard` (multiple choice, -)
- K-NS-12 `number-showdown` (multiple choice, -)
- K-NS-13 `preschool-two-hands` (fill-in, REDESIGN, only 18 variants)
- K-NS-13 `preschool-another-way` (multiple choice, REDESIGN)

**Batch B4 (9; NS, FL, PV)**

- K-NS-13 `decompose-to-ten` (multiple choice, -)
- K-NS-15 `preschool-pick-the-right-way` (multiple choice, TWEAK)
- K-NS-15 `trace-the-numeral` (multiple choice, -)
- K-NS-15 `trace-the-teens` (multiple choice, -)
- K-NS-16 `tens-staircase` (multiple choice, -)
- K-NS-16 `skip-count-hops` (multiple choice, -)
- K-FL-1 `preschool-estimate` (multiple choice, REDESIGN)
- K-FL-2 `preschool-doubles` (multiple choice, REDESIGN)
- K-PV-1 `which-frame-is-right` (multiple choice, -)

**Batch B5 (9; OP)**

- K-OP-1 `preschool-act-out-add-take` (multiple choice, REDESIGN)
- K-OP-1 `preschool-how-many-altogether` (multiple choice, REDESIGN)
- K-OP-1 `preschool-all-together` (numeric, REDESIGN, only 45 variants)
- K-OP-2 `preschool-how-many-left` (numeric, REDESIGN, only 45 variants)
- K-OP-3 `preschool-which-picture` (multiple choice, TWEAK)
- K-OP-3 `preschool-story-plus-or-minus` (multiple choice, REDESIGN)
- K-OP-4 `preschool-solve-it` (numeric, REDESIGN)
- K-OP-5 `preschool-number-sentences` (multiple choice, REDESIGN)
- K-OP-6 `preschool-make-ten` (multiple choice, REDESIGN)

**Batch B6 (9; OP, FR, NT, ALG, MEA)**

- K-OP-9 `preschool-fair-shares` (multiple choice, -)
- K-FR-1 `preschool-fair-shares` (multiple choice, -)
- K-NT-1 `preschool-pairs` (multiple choice, REDESIGN)
- K-ALG-1 `preschool-what-comes-next` (multiple choice, TWEAK)
- K-ALG-2 `preschool-fill-the-gap` (multiple choice, TWEAK)
- K-ALG-5 `preschool-pattern-translate` (multiple choice, REDESIGN)
- K-MEA-2 `preschool-longer-or-shorter` (multiple choice, REDESIGN)
- K-MEA-3 `preschool-heavy-or-light` (multiple choice, TWEAK)
- K-MEA-4 `preschool-holds-more` (multiple choice, REDESIGN)

**Batch B7 (9; MEA, TIM)**

- K-MEA-5 `preschool-measuring-tools` (multiple choice, REDESIGN)
- K-MEA-6 `preschool-order-objects` (multiple choice, REDESIGN)
- K-MEA-6 `preschool-goes-in-the-middle` (multiple choice, REDESIGN)
- K-TIM-1 `preschool-routine-order` (multiple choice, REDESIGN)
- K-TIM-3 `preschool-when-does-it-happen` (multiple choice, REDESIGN)
- K-TIM-4 `preschool-yesterday-today-tomorrow` (multiple choice, REDESIGN)
- K-TIM-5 `preschool-how-long` (multiple choice, REDESIGN, only 48 variants)
- K-TIM-6 `preschool-days-in-order` (multiple choice, REDESIGN)
- K-TIM-7 `preschool-day-after` (multiple choice, REDESIGN)

**Batch B8 (9; TIM, MON, GEO)**

- K-TIM-7 `preschool-what-day-was-it` (fill-in, REDESIGN, only 14 variants)
- K-MON-1 `preschool-money-play` (multiple choice, REDESIGN)
- K-GEO-2 `preschool-is-it-a-rectangle` (true/false, REDESIGN, only 45 variants)
- K-GEO-3 `preschool-match-shapes` (multiple choice, REDESIGN)
- K-GEO-4 `preschool-count-the-sides` (numeric, REDESIGN, only 12 variants)
- K-GEO-5 `preschool-sides-or-corners` (multiple choice, REDESIGN, only 24 variants)
- K-GEO-7 `preschool-solid-or-flat` (multiple choice, REDESIGN)
- K-GEO-8 `preschool-roll-or-stack` (multiple choice, REDESIGN)
- K-GEO-9 `preschool-bigger-shape` (multiple choice, REDESIGN)

**Batch B9 (9; GEO, POS, DAT, PSR)**

- K-GEO-10 `preschool-shapes-around` (multiple choice, REDESIGN)
- K-GEO-10 `preschool-shape-hunt` (multiple choice, TWEAK)
- K-POS-1 `preschool-where-is-the-ball` (multiple choice, REDESIGN)
- K-POS-3 `preschool-copy-build` (multiple choice, REDESIGN)
- K-POS-4 `preschool-robot-says` (multiple choice, REDESIGN)
- K-POS-5 `preschool-routes` (multiple choice, REDESIGN)
- K-DAT-3 `preschool-sort-and-count` (multiple choice, REDESIGN)
- K-DAT-4 `preschool-picture-graph` (multiple choice, REDESIGN)
- K-PSR-3 `preschool-enough-for-all` (multiple choice, REDESIGN)

### C. Other defects found

- Low variety (under 50 distinct questions): `preschool-neighbour-houses` (15), `preschool-two-hands` (18), `preschool-all-together` (45), `preschool-how-many-left` (45), `preschool-how-long` (48), `preschool-what-day-was-it` (14), `preschool-is-it-a-rectangle` (45), `preschool-count-the-sides` (12), `preschool-sides-or-corners` (24). These need seeded generators, not only a new presentation.
- Known content bug (notes.md): `preschool-sides-or-corners` has no single correct answer (for polygons sides equal corners). French strings flagged in empty-basket, how-many-last-tag.

## 6. Owner questions

1. Is K scope "PK core plus the K.* rows already in the app syllabus (54 skills beyond the PK reference)", or should Maternelle be trimmed to PK-referenced skills only?
2. Is a skill "done" at 3 implemented activities, and must they be ludic (TAP or a new interactive scene) rather than text multiple choice? The numbers above assume yes to both.
3. Is the scene work of spec 051 (F1-F6) approved as the prerequisite for batches A and B?
