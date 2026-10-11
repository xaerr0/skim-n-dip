# skim-n-dip

Proposed replacement site for Skim n' Dip (https://www.skimndipllc.com/), a pool service company in Concord, CA. Astro, static output, deployed on Cloudflare Pages.

```
npm install
npm run dev      # local dev server
npm run build    # writes dist/
```

## Deploying

Cloudflare Pages: framework preset "Astro", build command `npm run build`, output directory `dist`. Pages are built as `name.html` so they serve at the same extensionless URLs the Wix site uses. Old Wix URLs that moved are in `public/_redirects`.

## Before launch

- **Quote form:** it does not send anything yet (`src/components/QuoteForm.astro`, handler in `src/layouts/Base.astro`). Connect it to the office inbox, a form service or Podium.
- **Podium:** the Wix site loads Podium's text widget. If the owner wants it kept, add their Podium embed script to `Base.astro`.
- **Photos:** request originals from the owner's Instagram (@skimndipinc) and a larger logo file. Current images came from the Wix site; three likely stock or AI images from it were deliberately left out (see PRODUCT.md).
- **Confirm:** hours (Mon to Fri, 8 AM to 4:30 PM, from Google), the Martinez address on the old contact page, and the reviews used (verbatim from Google, listed in `recon/reviews.md`).

## Files

- `SITE-AUDIT.md`: current site vs. this rebuild, for the pitch.
- `recon/`: audit of the current site, screenshots, Lighthouse report, reviews.
- `lighthouse-new-mobile.report.html`: Lighthouse report for this build.
- `src/data/site.ts`: business facts, plans, reviews, cities. Most copy changes happen here.
