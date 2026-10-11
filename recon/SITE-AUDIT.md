# Site audit: Skim n' Dip (skimndipllc.com)

Scanned https://www.skimndipllc.com/ on 2026-10-10 with Lighthouse 12.8.2 (mobile, simulated slow 4G), Playwright (desktop 1280x800 and iPhone 390x844 with a mobile user agent), and a Google Maps lookup. Platform: **Wix** (`<meta name="generator" content="Wix.com Website Builder">`, footer reads "Proudly created with Wix.com").

Note: Wix serves phones a separate mobile layout chosen by user agent, so the mobile screenshots were taken with an iPhone user agent, not just a narrow desktop window.

## Lighthouse scores (mobile)

| Category | Score |
|---|---|
| Performance | 94 |
| Accessibility | 96 |
| Best practices | 96 |
| SEO | 100 |

| Metric | Value (lab) | Google "good" threshold |
|---|---|---|
| First Contentful Paint | 1.8 s | 1.8 s or less |
| Largest Contentful Paint | 1.8 s | 2.5 s or less |
| Speed Index | 4.7 s | 3.4 s or less |
| Total Blocking Time | 160 ms | 200 ms or less |
| Cumulative Layout Shift | 0 | 0.1 or less |
| Time to Interactive | 12.5 s | 3.8 s or less |
| Total page weight | 2,190 KiB | (no threshold; a one-screen page like this can ship in under 300 KiB) |
| JavaScript execution | 1.5 s | |
| Main-thread work | 3.1 s | |

These are lab numbers from one simulated run, not field data from real visitors.

**Honest read:** the headline Lighthouse scores are good. Do not pitch this site as "slow" or "bad for SEO". The case for a rebuild is content, conversion and polish, plus the weight behind a page that has almost nothing on it.

## Performance

- **2.19 MB to show one paragraph and a form.** The home page has 181 words, zero `<img>` elements, and one contact form, yet Lighthouse measured 2,190 KiB transferred. Playwright counted 139 requests and 83 `<script>` tags; 100 of the requests go to `static.parastorage.com` (Wix's own runtime).
- **Time to Interactive 12.5 s (lab).** The text paints fast (LCP 1.8 s, the LCP element is the intro paragraph `#comp-kiyp6txr p.font_8`), but the page keeps loading and running script for another ~10 s. Speed Index is 4.7 s against a 3.4 s target.
- **Third-party weight:** Wix 1,016 KB, Podium chat widget 452 KB, LaunchDarkly (a feature-flag service Wix or Podium loads) 445 KB, Sentry 42 KB.
- Lighthouse estimates 232 KiB of unused JavaScript, 31 KiB of legacy JavaScript, and 102 files served without long cache lifetimes. None of this is fixable from inside Wix.

## Mobile experience

Evidence: `mobile-fold.png`, `mobile-full.png`.

- **No call button anywhere a phone user would see it.** The only `tel:` link on the mobile page sits in the footer at y=1843 px of a 1928 px page. On the desktop layout the phone number in the header is a plain `<span>` with no link (0 `tel:` links on desktop). For a service business whose leads call or text, this is the biggest conversion gap.
- **The Podium "Text us" popup covers the intro text on the first screen.** On a 390x844 screen, the bubble ("Hi there, have a question? Text us here.") and the "Text us" button cover the bottom third of the first screen, over the paragraph that explains the business.
- **The first screen is a heading and a block of text.** No photo of a pool, no service list, no prices, no reviews, no call button. The quote form starts below the fold.
- Header is 54 px tall on mobile (fine), and there is no horizontal scroll in the mobile layout.

## Desktop layout

Evidence: `desktop-fold.png`, `desktop-full-scrolled.png`.

- **Menu overlaps the contact line.** At 1280 px wide the "Contact" menu item renders on top of the email address, so the header reads "Construction and RemodelSkimContact@Gmail.com".
- **The H1 "WHY WE MAKE A SPLASH" runs into the left edge of the window** at 1280 px.
- **The Podium popup sits on top of the form's service checkboxes**, cutting off "Initial Water Treatment / Start Up" and "Equipment Installation/ Repair".
- The entire home page is 1,219 px tall: one heading, two paragraphs, a form, a footer.

## Accessibility

- 19 color-contrast failures, all in the quote form: the labels and inputs (`#comp-lfirvcck1` name, `#comp-lfirvccs` email, `#comp-lfirvccy` phone, and the rest) use white or light text on a mid-blue background.
- Otherwise the score is 96. Not a strong pitch point on its own.

## Best practices

- 0 console errors on load. The 5 warnings come from Wix, Podium and Sentry scripts, not the business's content.
- Lighthouse flags "Browser errors were logged to the console" from its own run; these trace to third-party scripts.

## SEO

### Strengths (a rebuild must keep these)

- Lighthouse SEO 100. Title, meta description, canonical, `lang="en"` and viewport tags are all present on the home page.
- `LocalBusiness` JSON-LD with full address (3311 Concord Blvd, Concord, CA 94519) and phone, plus a `WebSite` block.
- **15 city landing pages**, each with its own title and meta description and 243 to 273 words of text. These are probably doing real work in local search and must keep their exact URLs:

```
/concord-weekly-pool-service
/clayton-weekly-pool-service
/pleasant-hill-weekly-pool-service
/martinez-weekly-pool-service
/walnut-creek-weekly-pool-service
/alamo-weekly-pool-service
/lafayette-weekly-pool-service
/danville-weekly-pool-service
/san-ramon-weekly-pool-service
/pleasanton-weekly-pool-service
/livermore-weekly-pool-service
/antioch-weekly-pool-service
/oakley-weekly-pool-service
/brentwood-weekly-pool-service
/discovery-bay-weekly-pool-service
```

Other URLs to keep or 301-redirect: `/about`, `/meet-the-team`, `/services-5` (service areas), `/services`, `/chems-bags-baskets`, `/chem-plus`, `/chemical-only`, `/recent-work`, `/contact`.

### Problems

- **A menu link goes to a 404 page.** "Chemical Plus" under Pool Service and Maintenance Packages points to `/copy-of-services`, which renders Wix's 404 page (title "404 | Skim n' Dip, LLC"). Wix returns HTTP 200 for it, so it is a soft 404 that search engines may still index. The menu also lists "Chemical Plus" twice; the second one (`/chem-plus`) works. Evidence: `menu-link-404.png`.
- **None of the 15 city pages has an H1.** Neither do `/meet-the-team` or `/recent-work`. The three package pages each have four H1s ("Weekly Service", "Long Term Maintenance and Care", "Customer Support", "One Time Services").
- **The home page H1 is "WHY WE MAKE A SPLASH"** and there are no other headings on the page. Nothing in the heading says pool service or names a city.
- **The business name isn't consistent.** The home title, Open Graph title, logo and About-page H1 say "Skim n' Dip **Inc.**"; the JSON-LD, footer, domain and every other page title say "Skim n' Dip, **LLC**"; Google Maps says "Skim N Dip". Inconsistent names weaken the match between the site and the Google listing.
- Messy slugs left over from Wix page duplication: `/services-5` for Service Areas, `/copy-of-services`. `/meet-the-team` and `/contact` use the title "We Skim, You Dip!" and have no meta description; `/services-5` has none either.
- Contact email is a Gmail address (`Skimndip@Gmail.com`), not one on the business domain.

## Google Business Profile

Checked on Google Maps (search "Skim n Dip pool Concord CA").

| Item | Result |
|---|---|
| Found | Yes, "Skim N Dip", category Pool cleaning service |
| Claimed | Yes (no "Own this business?" prompt; "Updated by this business 12 weeks ago") |
| Rating | **4.9 stars, 140 reviews** |
| Owner posts | None seen ("From the owner" not present) |
| Hours | Listed (closed weekends, opens 8 AM Mon) |
| Website link | skimndipllc.com |
| Address / phone | 3311 Concord Blvd, Concord, CA 94519 / (925) 348-5609. Matches the site's JSON-LD and footer. |

**This is a strength, not a pitch point.** The owner manages the listing and has a strong review base. Two consequences for the pitch:

1. **140 reviews at 4.9 stars, and the website shows none of them.** No review count, no quotes, no stars anywhere on the home page. Review snippets on Maps include "We are new to a pool and they guided us on settings and equipment choice" and 27 reviews tagged "knowledgeable staff". This is the strongest content argument for a rebuild.
2. **They pay for Podium** (`connect.podium.com/widget.js`), a texting and review-request platform. A rebuild should keep the Podium widget or link to it, not suggest replacing it. It is also likely how they collected 140 reviews.

## Design and content

- **A pool company's home page with no photos of pools.** Zero images on the home page; the background is a flat blue gradient. Other pages have 1 to 6 images each.
- No prices or package comparison on the home page. Packages (Chems Bags & Baskets, Chemical Plus, Chem Only) live three clicks deep, on separate pages that share one template.
- No service list on the home page beyond the form's checkboxes (weekly maintenance, one-time cleaning, green pool recovery, start-up, equipment repair, remodel).
- The home copy is generic ("exceptional service begins and ends with experienced, friendly professionals"). The one specific, differentiating claim, a detailed report after every visit, is buried mid-paragraph.
- `/recent-work` (Construction and Remodel) has 45 words and 2 images, which is thin for a page selling remodels.
- Copyright reads ©2025.

### Content they already have (Instagram)

- **@skimndipinc on Instagram: 258 posts, 740 followers**, bio "Swimming Pool and Spa: Service, Construction, Repair. Lic: 1072978. Bay Area, California". Per the owner, most posts are job photos and videos. The site uses almost none of it.
- The website links to Instagram (and Facebook) only from `/contact`. The home page and footer have no social links.
- **The contractor license number (lic. 1072978) appears only on the three package pages** (`/chems-bags-baskets`, `/chem-plus`, `/chemical-only`), not on the home page, the city pages or the remodel page. For a company selling construction and remodels, the license belongs on every page.
- For the build, get the original files from the owner instead of downloading from Instagram. Instagram compresses to about 1080 px and adds re-encoding artifacts. Short videos can work as muted, looping clips, as long as they load only when scrolled into view.

## Current vs. rebuild target

| | Current | Rebuild target |
|---|---|---|
| Lighthouse performance (mobile) | 94 | 95+ (keep parity, don't promise a big jump) |
| Page weight | 2,190 KiB | under 400 KiB including Podium |
| Requests | 139 | under 30 |
| Time to Interactive (lab) | 12.5 s | under 3.8 s |
| Tap-to-call on first mobile screen | No (only in footer) | Yes, in the header |
| Reviews shown on site | 0 of 140 | Rating, count and real quotes on the home page |
| Pool photos on home page | 0 | Real job photos from their 258 Instagram posts |
| License number shown | 3 of 26 pages | Every page (footer) |
| Broken menu links | 1 (`/copy-of-services`) | 0 |
| City pages with an H1 | 0 of 15 | 15 of 15, same URLs |
| Business name | Inc. and LLC mixed | One name everywhere, matching Google |
| Form contrast failures | 19 | 0 |
| Podium texting | Yes | Keep |

## Files in this folder

- `SITE-AUDIT.md`: this report
- `lighthouse-mobile.report.html`: full Lighthouse report (open this in front of the client)
- `lighthouse-mobile.report.json`: raw Lighthouse data
- `desktop-fold.png`: first screen at 1280x800
- `desktop-full.png`: full page before scrolling
- `desktop-full-scrolled.png`: full page after scroll-through (shows the menu overlap and the popup over the form)
- `mobile-fold.png`: first screen on an iPhone-size screen (Podium popup over the intro text)
- `mobile-full.png`: full mobile page (tap-to-call only in the footer)
- `menu-link-404.png`: the "Chemical Plus" menu link landing on a 404 page
