# A help centre that actually helps: ten plain-language guides for parents and teachers

If you have ever opened a website's help section and found a pile of technical notes written for someone else, you will understand why we rebuilt ours. The Docs area is now a proper guide library: ten short, plain-language guides written for parents and teachers, grouped by topic, searchable, and each one telling you how long it takes to read.

**Why we did it.** Until now, the help area mixed two very different kinds of reading. Some pages were meant for you: how to get started, what a level means. Others were working papers written for the people building the site. A parent looking for "how do I move my child's progress to another device?" should not have to wade through either architecture decisions or curriculum notes. So we separated the two, and gave the first kind the care it deserves.

## The ten guides

Each guide is short and written in everyday language, with no jargon. Together they cover the questions we expect most often:

- **Getting started**, for the first visit.
- **Choosing a level**, for deciding where your child should begin.
- **How activities work**, so you know what your child is doing and why.
- **The printable mental maths sheet**, our one-page daily warm-up.
- **Reading progress**, to understand what the progress display is telling you.
- **Saving and moving progress**, for switching device or browser.
- **Switching language**, between English and French.
- **Privacy at home**, what the site does and does not do with your family's information.
- **Using the site in class**, for teachers working with a group.
- **Troubleshooting**, for when something does not behave as expected.

## Finding your way around

The guides are grouped by topic, so related questions sit together. There is a search box at the top: type a word such as "language" or "progress" and the list narrows to the guides that mention it. Every guide shows an estimate of its reading time, so you can tell at a glance whether you have a minute or need to set aside a coffee break. At the bottom of each guide, previous and next links let you read the whole library in order, the way you might read a short handbook, or simply hop to the neighbouring topic.

```
Docs
 +-- Search box
 +-- Topic: Getting going
 |     Getting started  ->  Choosing a level  ->  How activities work
 +-- Topic: Everyday use
 |     Mental maths sheet  ->  Reading progress  ->  Saving and moving progress
 +-- Topic: Setup and safety
       Switching language  ->  Privacy at home  ->  Using the site in class
       ->  Troubleshooting
```

The sketch is only an illustration of the idea: guides in topics, with a path from one to the next.

## The developer papers have moved out of the way

The site also holds internal documents: architecture decisions and curriculum working papers. They are not hidden, and anyone who has the address can still open them. But they are now marked as not meant for search engines, so they will stop appearing in search results where a parent might stumble on them by accident. They have also been removed from the site map, the list that tells search engines which pages exist. The site map now lists the guides and the articles instead, which is what we would like people to find.

## A tidier blog front page

The blog front page changed too. It now separates two shelves: **Guides for parents and teachers**, and **Project news**, which is where posts like this one live. Each post shows its date, its level and its reading time, so you can pick what suits you without opening everything.

## What did not change: privacy

The new privacy guide describes the same things as the Privacy page. Nothing about how the site handles data changed today; the guide simply explains it in friendlier words, from the point of view of a family at home.

While we were in that area, we also checked something specific for visitors in Quebec. The site gives people in certain regions a consent-first experience by default, meaning that optional features start switched off until the visitor agrees. We looked at the code and confirmed that Quebec, and Canada as a whole, were already on that list. That was the case before today. What we added is a test that proves it, so if anyone ever changes the list by mistake, the check will notice.

## When will you see it?

Not yet. The site has not been redeployed, so the version you can visit right now still shows the previous help area and the previous blog front page. The new version appears as soon as the owner publishes it. We would rather say so plainly than leave you wondering why the page you are reading about is not the page in front of you.

## Why this matters

A help centre is a small thing until you need it. The moment a parent is stuck, or a teacher has a class waiting, a clear answer in two minutes of reading is worth more than a clever feature. Ten guides will not answer every question, and we expect to add and reword them as people tell us what is missing. If you find a gap, that is useful to know: it tells us which eleventh guide to write.
