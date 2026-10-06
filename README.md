# Zaipeng Xie's academic website

Personal website: [zach82.github.io](https://zach82.github.io/).

## Current site

The production site is plain HTML, CSS, and browser-side JavaScript. Edit the static files directly; no site-generation step is required.

| File | Purpose |
| --- | --- |
| `index.html` | Homepage, news, research, static publication markup, mentoring summary, service, and contact information. |
| `student-achievements.html` | Standalone student awards and mentoring page. |
| `publications.js` | Publication records and homepage rendering, year/type filters, venue badges, author markers, and BibTeX display/copy. The `overview` field links a record to its detail page. |
| `publications/*.html` | Standalone paper overview pages, maintained directly in HTML. |
| `.nojekyll` | Tells GitHub Pages to serve the static files without Jekyll processing. Keep this file in the publishing root. |

The retained Jekyll configuration, layouts, includes, Markdown collections, and Ruby dependencies are legacy template files, outside the current production workflow. Editing them does not regenerate the formal static pages.

## Local preview and publishing

With Python 3 installed, run this command from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/). Refresh after editing; stop the server with Ctrl+C. No Ruby, Bundler, or Jekyll installation is needed.

Commit and push the static files to the GitHub Pages publishing branch. The current repository uses `master` and the root-level site files; retain `.nojekyll`. Check the Pages deployment status in GitHub after publishing.

## Updating publications

1. Edit or add the relevant `publications/<slug>.html`. Keep its document title, description, heading, authors, venue/year, summary, and paper/DOI links consistent.
2. Update the matching record in `publications.js` when bibliographic details or links change. Keep its `key` unique and set `overview` to the correct relative path. `displayYear`, when present, controls grouping; `year` remains the BibTeX publication year.
3. Synchronize any corresponding static publication entry in `index.html`, including its citation, author markers, Overview link, and embedded BibTeX. JavaScript replaces the initial list in the browser; changing only one copy can leave the initial HTML and rendered list inconsistent. Update homepage news or research text only if it repeats information that changed.
4. Add any referenced images or downloads with the page, and check relative paths. Detail pages link back through `../index.html#publications`. If renaming a page, update all incoming links. A summary-only edit generally needs only the detail page.
5. Preserve the existing page navigation, styles, and single Umami tracking script when copying a detail page. Preview the homepage, filters, BibTeX controls, Overview links, detail-page return links, and student achievements page before publishing; check that assets load and the browser console shows no errors.

## Source and license

This repository originated from [AcademicPages](https://github.com/academicpages/academicpages.github.io), forked and detached by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/). The original theme is © 2016 Michael Rose and released under the MIT License. See [LICENSE](LICENSE), and retain its copyright and permission notice when reusing covered code.
