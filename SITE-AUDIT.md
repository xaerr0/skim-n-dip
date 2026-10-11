# Skim n' Dip website: current site vs. proposed rebuild

Prepared 2026-10-11. The current site is https://www.skimndipllc.com/ (Wix). The proposed site is the demo in this repository, tested from a local build before deployment. All speed numbers are Lighthouse lab tests (mobile, simulated slow 4G), not field data from real visitors. The detailed audit of the current site, with screenshots, is in `recon/SITE-AUDIT.md`.

## The short version

The current site scores well on Google's tests, and its city pages are probably earning search traffic. The problem is what's on it, not whether Google can find it. A homeowner who clicks through from your 4.9-star Google listing lands on a page with one paragraph, a form, no photos, no reviews and no call button until the bottom. The new site keeps every page address Google already ranks and puts your reviews, your crew and your phone number in front of them.

## Speed and technical scores (mobile)

| | Current (Wix) | Proposed | Google "good" |
|---|---|---|---|
| Lighthouse performance | 90 to 94 (two runs) | **99** | 90+ |
| Accessibility | 96 | **100** | |
| Best practices | 96 | **100** | |
| SEO | 100 | 100 | |
| First Contentful Paint | 1.8 to 1.9 s | **1.2 s** | 1.8 s or less |
| Largest Contentful Paint | 1.8 to 2.7 s | **1.9 s** | 2.5 s or less |
| Speed Index | 4.7 to 4.8 s | **1.2 s** | 3.4 s or less |
| Time to Interactive | 12.5 to 13.1 s | **1.9 s** | 3.8 s or less |
| Total Blocking Time | 140 to 160 ms | **0 ms** | 200 ms or less |
| Page weight | 2,116 to 2,190 KB | **151 KB** (about 14x lighter) | |
| Requests | 139 to 188 | **17** | |
| JavaScript run time | 1.4 to 1.5 s | **0.01 s** | |

Honest note: the current site's headline speed score is already good. The difference a visitor feels is the 13-second wait before a 2 MB page stops loading, which matters on a phone with a weak signal in a backyard.

## What changed for someone on a phone

| | Current | Proposed |
|---|---|---|
| Call button | Only in the footer, at the very bottom of the page | Red call button on the first screen, plus a call / text / quote bar fixed to the bottom of every page |
| Text option | Podium popup covering the intro text | "Text us" button and bar link that open the phone's messages app |
| Reviews | None of your 140 Google reviews shown | 13 real reviews quoted with names across the site, and a link to all of them |
| Your crew | Not on the home page | All six of you on the first scroll, by name and role |
| Photos of pools | 0 on the home page | Real job photos: the green pool, the leaking pump, the finished pool and spa |
| Which plan do I need? | Three package pages, three clicks deep | Side-by-side comparison of Chem Plus, Chems Bags & Baskets and Chem Only on the home page |
| License number | On 3 of 26 pages | In the footer of every page, linked to the state license lookup |

## Search: what was kept, what was fixed

**Kept exactly:** all 15 city pages (`/concord-weekly-pool-service` through `/discovery-bay-weekly-pool-service`) and `/about`, `/meet-the-team`, `/services`, `/chem-plus`, `/chems-bags-baskets`, `/chemical-only`, `/recent-work` and `/contact` keep their addresses, so their Google rankings carry over.

**Redirected (301):** `/services-5` to `/service-areas`, the broken `/copy-of-services` to `/chem-plus`, the Wix booking and package duplicates to the matching plan or service page.

**Removed:** 12 placeholder "I'm a product" store pages, the fake-client `/clients` page, the "Open 7 days a week" `/features` page and the empty `/blog`. They return "not found" so Google drops them.

| | Current | Proposed |
|---|---|---|
| Broken menu links | 1 (`/copy-of-services` shows a 404 page) | 0 |
| City pages with a main heading (H1) | 0 of 15 | 15 of 15 |
| Home page heading | "Why we make a splash" | "We skim. You dip." with the cities and services in the first paragraph |
| Business name | "Inc." and "LLC" mixed | "Skim n' Dip" everywhere, matching Google |
| Address | Two different addresses | 3311 Concord Blvd everywhere, matching Google |
| Structured data | Business name, address and phone | Adds hours, map coordinates, the 15 cities served, founding year, Instagram and Google links, plus a service entry for each plan and city page |
| Sitemap | 49 URLs including template junk | 25 real pages |
| Social share preview | Wix default | A photo of a finished pool and spa, with title and description |
| Template placeholder text | 4 pages ("This is a Paragraph...", "lic.00000000") | None |

## Accessibility

The current quote form fails color contrast 19 times (light text on mid-blue). The new site has no contrast failures, keeps tap targets at least 44 px, shows a visible focus outline on every link and button, and uses Atkinson Hyperlegible, a typeface designed for low-vision readers, for body text.

## What the owner would need to provide or confirm

- Where quote requests should go (email inbox, Podium, or a form service). The demo form explains that it is not connected yet and points people to call or text.
- Whether the Martinez address (251 Arthur Rd) should appear anywhere.
- Original photos from Instagram (258 posts) and a higher-resolution logo file.
- Whether to keep the Podium chat widget on the site. It can be added back as one script.
