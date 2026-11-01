# Adding a write-up

This site is static HTML and CSS. GitHub Pages serves the `main` branch, folder `/` (the repository root). There is no build step. `.nojekyll` is already in the root so Pages will not run Jekyll.

Every page uses `assets/style.css`. A new write-up is a new HTML file plus a link on the homepage.

## 1. Copy the template

Write-ups live one folder below the site root so the stylesheet link stays `../assets/style.css`.

```bash
cp templates/writeup.html nfl/2026-week-09.html
cp templates/writeup.html cfb/2026-11-08.html
cp templates/writeup.html nba/2026-11-03.html
```

Filenames:

- NFL: `nfl/YYYY-week-NN.html` (example: `nfl/2026-week-08.html`)
- CFB: `cfb/YYYY-MM-DD.html` (example: `cfb/2026-11-01.html`)
- NBA: `nba/YYYY-MM-DD.html`

Create the sport folder if it does not exist yet. Do not nest deeper than that.

## 2. Fill the page

Open the copy and replace the bracketed placeholders.

- `<title>` and `<h1>`: the write-up title.
- `.sum`: the summary paragraph.
- `.toc`: one link per section you keep. Point each link at that section's `id`.
- `.warn`: the disclaimer. Say that these are personal picks, not a proven edge, and that no bets were placed.
- Sections: overview, news, the slate, plays, and sources. Delete a section you are not using, and delete its contents link too.
- Tables: **7 columns maximum**. Cells wrap so the table stays on a phone without sideways scrolling. Use the classes already in the template (`standings`, `poll`, `slate slate-nfl`, `slate slate-cfb`, `injuries injuries-weather`, `injuries injuries-report`, `fpi`). For some other table, use `class="data"` and a `<colgroup>` with one `<col>` per column, up to seven.
- Plays: one `.pick` block each. Keep Bet, Stake, and Kickoff, then the write-up, then a `.risk` paragraph.
- Sources: a `.src` list. Each item is a real link, then a `<span class="m">` with the publication name.

Copy lines, odds, totals, records, and units as you have them. Do not invent figures. Do not add fonts, images from a CDN, analytics, or other third-party scripts. Leave the shared tracker markup in place (see below).

## Graded-picks tracker

The record is stored only in `assets/tracker.js`. Each page, including the homepage, has an element the script fills in:

```html
<p class="tracker" data-tracker>Tracker (graded picks)</p>
<script src="../assets/tracker.js" defer></script>
```

That plain text is the no-JavaScript fallback. With JavaScript, every `[data-tracker]` element shows the same line: each sport, its wins-losses, and its net units with a sign and two decimals, in the order NBA, NFL, CFB.

Do not type a record into a write-up. To change the numbers, edit `assets/tracker.js` only. A page in the site root uses `src="assets/tracker.js"`. A page one folder down, which is every write-up, uses `src="../assets/tracker.js"`. The template already includes the second path.

## 3. Link it from the homepage

Edit `index.html`.

- Add a card at the **top** of that sport's section (newest first).
- Use the write-up's title and summary. Label it NBA, NFL, or CFB.
- If that sport's newest piece is now the newest on the site, move its whole section above the others.
- Leave sports with no pieces on the page, marked as empty, so NBA, NFL, and CFB stay visible.

## 4. Publish

Commit on a branch and open a pull request into `main`. After it merges, GitHub Pages serves the file at its path. For this repository that is `https://lummy00.github.io/groks-tips/` plus the file path, for example `nfl/2026-week-08.html`.
