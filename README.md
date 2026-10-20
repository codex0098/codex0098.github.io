# codex0098.github.io

Personal website of Kapil Dewade, published with GitHub Pages at https://codex0098.github.io.

GitHub Pages builds the site with Jekyll on every push to `main`. There is nothing to install, no external fonts, and no tracking scripts.

## Add an article

1. Open `_data/writing.yml` on GitHub and click the pencil icon to edit it.
2. Copy an existing entry and change its fields: `title`, `url`, `date` (YYYY-MM-DD), `venue`, `coauthors`, `topics`, an optional `series`, and a one- or two-sentence `summary`.
3. Commit the change. The site rebuilds within a minute or two.

The article then appears automatically:

- On the home page, if it is one of the three most recent.
- On `/writing/`, grouped by year. Each new topic becomes a filter.
- In the RSS feed at `/feed.xml`. It is not linked on the page; news reader apps find it automatically.

To feature a piece at the top of the home page, set `featured: true` on that entry and remove it from the old one.

## Google Search Console

Paste the verification code from Search Console into `google_site_verification` in `_config.yml` and commit. The site adds the tag automatically.

## Files

| Path | What it is |
| --- | --- |
| `_config.yml` | Name, links, email, and resume path |
| `_data/writing.yml` | All articles and research |
| `_data/reviewing.yml` | Reviewing interests shown on the home page |
| `kapil-dewade.vcf` | "Save contact" card for phones and address books |
| `index.html` | Home page |
| `writing/index.html` | Writing index with search and topic filters |
| `_layouts/default.html` | Shared page layout, metadata, and social preview tags |
| `_includes/writing-row.html` | One row in a writing list |
| `assets/css/site.css` | Styles, light and dark |
| `assets/js/site.js` | Theme toggle, copy-email button, writing filters |
| `assets/fonts/` | Self-hosted fonts (SIL Open Font License) |
| `Kapil-Dewade-Resume.pdf` | Public resume |
| `feed.xml`, `sitemap.xml`, `robots.txt`, `404.html` | Feed, search engine files, and the not-found page |
