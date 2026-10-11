# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, static output (no adapter, no server code), `build.format: "file"` so pages ship at the same extensionless URLs the Wix site uses. Deployed to Cloudflare Pages. Chosen by the user over plain HTML because 25+ pages share a header and footer and 15 of them are city pages from one template.

## Users

- **Primary:** homeowners in Contra Costa County and the Tri-Valley (Concord to Brentwood, Lafayette to Livermore) who own a pool or spa. Most arrive from Google search or the Google Maps listing, usually on a phone, comparing two or three pool companies. Common situations: just bought a house with a pool and are overwhelmed (several reviews say this), unhappy with their current pool service's communication, or have a broken pump, filter or heater.
- **Secondary:** homeowners planning a replaster, remodel or new pool, who compare bids and look for evidence of past work and a contractor license.

## Product Purpose

The marketing site for Skim n' Dip, a pool and spa service company founded in 2013 by Nick Eisenbart. It exists to turn a Google visitor into a phone call, text or quote request for weekly service, repair or remodel work. Success: a visitor can call or text from the first phone screen, sees real proof (reviews, crew, work) before scrolling far, and can tell which weekly package fits them.

This is also a cold pitch: the owner has not asked for a new site. The build must be credibly better than the current Wix site without losing its search rankings.

## Positioning

Communication is the mechanism, confirmed by customers rather than claimed: a text before and after every weekly visit, and a text and email report with photos after service. Customers repeatedly name the owner and specific technicians. The office is staffed weekdays for calls, texts and email. Repair work is done in-house by a Hayward and Pentair warranty station with a licensed contractor (CA lic. 1072978), so the weekly service company is also the repair and remodel company.

## Operating Context

- Weekly service routes; the office (manager Mark Ray) handles calls and texts Monday to Friday, 8 AM to 4:30 PM.
- They pay for Podium (texting and review requests). The website's text-us path must stay compatible with Podium; never suggest replacing it.
- Their Google Business Profile is claimed and strong (4.9 stars, 140 reviews). The site should link to it and match its name, address and phone.

## Capabilities and Constraints

- **Weekly packages (their names):** Chem Plus (most complete: brushing, skimming, baskets and sweep bag, chlorine/pH/alkalinity chemicals included, equipment check), Chems, Bags & Baskets (chemicals, baskets, equipment check), Chem Only (chemicals plus hardness, phosphate and stabilizer monitoring, equipment check). All include filter cleaning 3 times a year, secondary chemical analysis, equipment troubleshooting, and email/text reporting. Vacuuming is separate when a pool has no sweep. Extra chemicals (salt, phosphate, algae) cost extra.
- **Repair and equipment:** plumbing and filtration, heater repair and replacement, pool electrical, automation and wireless, cleaners/robots/autofill, diagnostics, energy-efficient pump upgrades.
- **One-time:** filter cleaning, leaf/blue hose/Vac2Waste vacuuming, pressure wash and acid cleaning, water chemistry check, pool start-ups, solar winterization, green pool recovery, spa water swaps.
- **Construction:** new pools, remodels, resurfacing.
- **Service area:** 15 cities with existing landing pages that must keep their exact URLs (see recon/SITE-AUDIT.md).
- **Undecided / unknown:** prices (none published; do not invent), whether the contact form should post to Podium, email or a form service (demo form does not send), the Martinez address on the old contact page (owner to confirm), legal entity suffix (Inc. vs LLC; site uses "Skim n' Dip" with no suffix).

## Brand Commitments

- Name: **Skim n' Dip**, no legal suffix (user decision 2026-10-11).
- Tagline already in use: "We Skim, You Dip!"
- Logo: hand-drawn tiki figure with wooden-plank lettering (`recon/wix-originals/logo.png`, 267x251, low resolution; a vector or larger original should be requested).
- Address: 3311 Concord Blvd, Concord, CA 94519 (matches Google). Phone (925) 348-5609. Email currently Skimndip@Gmail.com.
- Voice in their own copy and reviews: plain, friendly, a little playful with water puns ("take the plunge", "jump in"). Keep puns rare.

## Evidence on Hand

- 22 real Google reviews with names, quoted verbatim: `recon/reviews.md`. Rating 4.9 from 140 reviews.
- Team portraits of all six staff, matching backdrop and caps: `recon/wix-originals/team-*.jpg` (Nick, owner, founded 2013; Mark Ray, office manager since 2021; Ben, Craig, Jason, service techs; Andrew, repair/install tech).
- Real job photos: green pool before recovery (`one-time.jpg`), leaking pump with leak circled (`equipment-repair.jpg`), finished pool and spa (`new-construction.jpg`), low-res rebar shell (`recent-work-2.jpg`).
- Doubtful assets, do not present as their work: `tech-chem-plus.png` (1408x768, likely AI-generated), `about-kids-pool.jpg` and `pool-service.jpg` (possibly stock), `hayward-equipment.jpg` (manufacturer render).
- Instagram @skimndipinc has 258 posts of their work; originals should be requested from the owner. Not downloaded.
- Absent and must not be fabricated: prices, years-in-business figures beyond "founded 2013", customer counts, awards, guarantees, response-time promises.

## Product Principles

1. Call or text first. Every page puts the phone number and a text option within one thumb reach on mobile.
2. Show proof the business already earned: real reviews, real faces, real jobs. Never stock people or invented claims.
3. Make the three weekly packages easy to compare, because that is the decision a new customer has to make.
4. Keep every URL Google already ranks, and match the Google listing exactly.
5. Stay light. The current site ships 2.2 MB for one paragraph; this one should be a fraction of that.

## Accessibility & Inclusion

WCAG AA contrast (the current form fails it 19 times), 44px tap targets, visible focus states, reduced-motion support. Many customers are older homeowners, so body text stays large and legible.
