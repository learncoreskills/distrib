# Day 12: a first step for the youngest learners

Until now, the app has started at Kindergarten. Today it took a first, careful step further down the ladder, to children of five and six who are not yet in Grade 1: twenty-one small activities, all in mathematics, meant to build the everyday number sense a child needs before formal school begins.

**Starting with a plan, not a pile of games**

Before building anything, we wrote down what "ready for Grade 1" might actually mean. The result is a draft readiness plan listing 34 skills for ages five to six, from counting and recognising numerals, to comparing amounts, to telling one shape from another, to knowing which day follows Tuesday. A plan like that is only a proposal, so it went through a round of challenge from a curriculum-minded reviewer, which trimmed some ideas and reshaped others. Then we picked the pieces that could be built honestly with what the app can already do, and left the rest for later.

**What a child finds now**

Twenty-one activities landed, grouped around a handful of early skills:

- **Numbers:** spotting how many dots are on a dice face or a ten-frame, finding a numeral among look-alikes, and matching a written number to a picture of that many things.
- **More, fewer, same:** which group has more, which has fewer, and whether two groups match. Also which of two numerals is bigger.
- **Adding and taking away with objects:** putting two small groups together, or seeing some go away and saying how many are left. It is always pictures of things, never sums on a page.
- **Shapes and place:** finding circles, squares, triangles and rectangles even when they are tilted, and using words like on, under, in front of and between.
- **Measuring by eye:** which is longer, which is heavier, which holds more.
- **Patterns and days:** what comes next in a pattern, and which day of the week comes first, or after another, including the jump from Sunday back to Monday.

Each activity comes in three difficulty levels. The first is gentle, with obvious differences. The second narrows the gap, for example groups that differ by just one. The third brings in the tricky cases, such as numerals that are easy to mix up, or a shape that is almost, but not quite, a rectangle. Like everything else in the app, all of it works in both English and French.

**Every activity got a second pair of eyes**

The part we care most about is what happened after the first drafts. Each activity was looked at by a reviewer whose only job is to ask whether a small child could actually use it. They found real problems, and each activity was revised:

- **Answers you could guess.** In some questions the right choice stood out for reasons that had nothing to do with the maths, such as being the only one of its kind. Now the wrong choices are believable, so a child has to think.
- **Clues that only work with colour.** Some hints relied on telling colours apart, which leaves out children who see colours differently. They now carry a second clue, such as a shape or a position.
- **Equations for children who cannot read yet.** A five-year-old may not read "3 + 2", so a picture of the groups now leads the way and the written sum is no longer the point.
- **Confusing pictures.** A few images could be read two ways, and the reviewer pointed out where a child would reasonably see something different from what we meant. Those were redrawn or replaced.

**What is honestly not there yet**

This is a first release, and it has real gaps. There is no read-aloud, and for children who cannot yet read, that matters a lot. Nothing can flash on screen and then vanish, which means the "how many dots did you see?" activity is for now a calm look at a picture, not a quick glance. Nothing can be dragged and dropped, so activities that would naturally involve moving things around are waiting. Writing numerals by hand is not built. And roughly twenty of the 34 planned skills still have no activity at all.

We would rather say that plainly than let twenty-one activities pass for the whole picture. These are the first ones, and they should be judged as a start. The gaps are now written down, which makes them the natural next things to build.


**A clearer picture on the parent page**

The parent page also got a reshuffle. Before, the progress charts hid behind a "nothing practised yet" message until a child had done some work, and a long "what your child will learn" list sat above them. The list is gone, since the subject pages already cover it. The charts are now always there.

- **The overall web and one web per subject.** A child who has not practised yet sees the shape their grade expects, so a parent can see at a glance where things are headed. It fills in as practice happens.
- **No grade yet, no guessing.** If we do not know the child's year of birth, the charts still appear, but with no expected shape, and a short prompt asks for the year. We would rather show nothing than invent a target.
- **A short school-report summary.** Under the charts, a plain summary lists what is going well and what needs more practice, alongside the grade and today's date. If nothing has been practised, it says so instead of making something up.

The summary is deliberately simple: it only reads what the app already knows about the child, and nothing new is stored.

**Tidier web addresses**

A smaller piece of work today: the web address for a subject's page got shorter. Where it used to read something like `/en/subjects/mathematics`, it now simply reads `/en/mathematics` — the same idea, with one unnecessary word dropped from the middle. It is a small thing to read about, but it matters every time an address gets typed, bookmarked, or shared: shorter is easier to get right, and easier to remember. Every page that leads into a subject, whether it is the overview, a specific topic, or a single activity, now follows this same shorter pattern, so the address always looks the way you would expect once you have seen it once.

Old-style addresses, the kind that might still be sitting in an old bookmark or an old message, are not quietly swapped for the new ones behind the scenes. Typing one in now shows a plain "page not found" instead of jumping somewhere unexpected — a small, deliberate choice so that what is in the address bar is always trustworthy, rather than something that silently changes underneath you.

**Not just "passed" or "not yet" — how close**

A "Passed" or "Not yet" label answers one question but hides another: how close is close? A child sitting at 9 correct out of 10 and a child just starting out both used to show the same plain "Not yet," which tells a parent nothing about which one is nearly there. So every entry that already carried that status label now carries a score alongside it too — something like "7/10" or "42/50" — the count of recent correct answers out of the attempts that actually counted toward that status.

The fraction is deliberately the same one already used to decide Passed or Not yet, not a second, competing number invented for display. That matters more than it sounds: if the score on screen were computed differently from the pass/fail rule sitting right next to it, the two could disagree — a "Passed" row showing a low fraction, say, or a "Not yet" row showing a suspiciously high one. Reusing the exact same reasoning means the two numbers can never contradict each other, on any of the three places this shows up: the Syllabus tab, the Activities tab where a child picks what to practice next, and the practice screen itself, where the score now updates the moment a new answer is submitted, no page reload needed. An entry nobody has attempted yet still shows nothing after "Not yet" — no invented "0/0," since there is nothing to report.

Alongside this, something invisible starts today: the app has begun quietly noting how long a child takes to answer each question. Nothing on screen changes yet, and nothing needs to be filled in for the questions already answered before today. But from here on, that timing is kept, so that whenever a future report wants to say something about pace, not just correctness, the history will already be there rather than starting from zero.
