# Export a child's progress, import it back, and nothing is lost

A parent who exported a child's progress, deleted the profile and imported the file again could find the report looking different from before. That is fixed: progress now lives in one place, so what you export is exactly what comes back.

**What was wrong.** Practice results used to be kept in two separate places on the device. The report read from one, and the export file was built from the other. Each kept a slightly different amount of history, so a round trip could quietly drop answers, and the scores shown afterwards did not always match.

**What changed.** There is now a single store for each child's answers. The report, the mastery percentages, the radar chart and the activity scores are all drawn from it, and the export file is made from the same data.

```
practice -> one progress store -> report, radar, scores
                              \-> export file -> import -> same store
```

**How much history is kept.** For each skill, grade and activity, the app keeps the 50 most recent answers. This is a fixed rule, so exporting and importing never changes what is kept.

**Families who already use the app.** Progress saved before this update is carried over automatically the first time the app opens, and the old copy is removed only once the move has fully succeeded. Older export files, from every earlier version, still import.

**Deleting and importing are safer.** Deleting a child now removes all of their progress, so a new profile starts clean. If an import fails part-way, no half-restored child is left behind, and a clear message in English or French explains what happened.
