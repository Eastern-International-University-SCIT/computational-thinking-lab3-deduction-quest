# Deduction Quest · INFO201 Lab 3

Open `index.html` directly in a modern browser. The game does not need an HTTP server, a build command, or an internet connection.

## Activities

1. **Path Finding** — Levels 1–3 are required and Levels 4–5 are optional. Each puzzle displays an undirected weighted graph. Players select adjacent vertices in sequence to construct a minimum-total-weight path from the stated start vertex to the destination.
2. **N-Queens** — Levels 1–3 are the required 4×4, 5×5, and 6×6 boards; Levels 4–7 are the optional 7×7 through 10×10 boards.
3. **0/1 Knapsack** — Levels 1–3 are required and Levels 4–8 are optional. Every level contains three variations. Players choose each item at most once to maximize value without exceeding the weight capacity; items support drag/drop and click/tap.
4. **Argument Validity** — Levels 1–2 are required; Levels 3–5 are optional. This activity tests validity only; it contains no fact checking, sound/unsound classification, or inductive-argument groups.

Progress is saved automatically when the browser permits local storage for local files. **Save work** creates a portable JSON download containing student details, progress, and answers; **Load progress** restores a previously downloaded Deduction Quest save file. Current Version 4 saves restore all games. Version 3 saves retain the original three games and begin Path Finding from Level 1; older saves continue to use the existing migration rules.

## Static data

The source Path Finding dataset is `../dijkstra_pathfinding_game_data.json`. Its offline browser copy is `js/dijkstra-data.js`; both contain the same five levels and 20 puzzles. The JavaScript copy allows the activity to work from `file://` without a server.

The active Argument Validity dataset is generated from `symbolic_forms_new/argument_validity_symbolic_forms.json` into `js/deductive-data.js`. It is loaded as JavaScript rather than fetched at runtime, which avoids the cross-origin restrictions that browsers apply to local JSON files.

Run `symbolic_forms_new/annotate_language_issues.ps1` before regenerating the game data. The annotator marks Level 3+ premises whose symbolic form has the generated pattern `(P OR Q) -> (P AND Q)` with the same signed propositions on both sides. Each marked premise receives a `languageIssue` object containing the detection code, source formula, and a simpler intended reading. The game continues to use the original symbolic form as the formal premise because the simpler reading is not logically equivalent.

Review copies of every Argument Validity symbolic form are stored in `symbolic_forms/` as JSON and Excel files.

After editing the review JSON, regenerate the game data from the `combined_game` folder:

```powershell
./symbolic_forms_new/generate_game_data.ps1
```

## Interaction research

The implementation deliberately uses browser-native APIs so the distributed lab remains self-contained:

- [Pointer Events (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) informed the mouse/touch interaction approach. Click/tap remains available anywhere drag/drop is inconvenient.
- [SortableJS](https://sortablejs.github.io/Sortable/) was evaluated for shared draggable lists, but was not included because the game only needs binary membership rather than arbitrary reordering.
- [canvas-confetti](https://github.com/catdad/canvas-confetti) was evaluated for success feedback. A tiny dependency-free, reduced-motion-aware celebration is used instead.
- [localStorage (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) documents that behavior on `file:` URLs can vary by browser, so the downloadable save record is retained as the portable fallback.

The Vietnamese interface uses locally hosted **Be Vietnam Pro** regular,
semi-bold, bold, and extra-bold WOFF2 subsets from Fontsource. The font is
licensed under the SIL Open Font License 1.1; a copy is stored in
`assets/fonts/OFL.txt`.
