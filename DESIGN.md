---
name: Skim n' Dip
description: Weekly pool service site built as the pool deck itself, walked from the shallow end to the deep end.
colors:
  deck: "#d8d5cc"
  deck-edge: "#c4c0b4"
  plaster: "#e4f0f1"
  plaster-line: "#c9dcdf"
  tile: "#f6f7f4"
  grout: "#e2e5e1"
  ink: "#0b2230"
  ink-soft: "#3b4c56"
  water: "#0c5070"
  water-deep: "#083b55"
  water-abyss: "#052a3d"
  water-text: "#d3e8ee"
  water-soft: "#a9cfdb"
  cobalt: "#1f4fa3"
  turq: "#2aa0b6"
  red: "#c3352b"
  red-dark: "#9f2820"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 11vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0"
  headline:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0"
  title:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.05
  numeral:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontWeight: 900
    lineHeight: 0.85
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
rounded:
  none: "0"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  band: "clamp(3.5rem, 8vw, 6.5rem)"
  max: "74rem"
  grout-thin: "4px"
  grout-frame: "6px"
components:
  button-call:
    backgroundColor: "{colors.red}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.4rem"
    height: "3.5rem"
  button-call-hover:
    backgroundColor: "{colors.red-dark}"
  button-tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.4rem"
    height: "3.5rem"
  depth-tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    size: "5rem"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.8rem"
    height: "3rem"
  action-bar-cell:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "3.4rem"
  action-bar-call:
    backgroundColor: "{colors.red}"
    textColor: "#ffffff"
    height: "3.4rem"
---

# Design System: Skim n' Dip

## Overview

**Creative North Star: "Depth Markers"**

The site is the pool deck. The visitor stands on warm coping-grey stone, crosses a glazed waterline tile band, and walks into the water from the shallow end to the deep end. Square white depth tiles with condensed numerals mark where they are, and those numbers are real depths: weekly service is 3 FT, the deep end is remodels and new pools at 8 FT. The palette darkens as the visitor goes deeper, until the footer sits in the darkest water.

Everything is built from pool materials: coping, plaster, glazed tile, grout, and water. Surfaces are flat and corners are square because tile is flat and square. The only warm accent is the red of a NO DIVING marker, and it marks the call action. Density is generous: whole bands of water, big condensed numerals, body copy sized for a phone held at arm's length.

**Key Characteristics:**
- Fields darken with depth: deck, then plaster, then water, deep water, and abyss.
- Depth tiles label real depth, never a section number.
- Flat material: grout lines carry every edge. No bevels, no drop shadows, no rounded corners.
- Marker red belongs to the call action and nothing else.
- A depth gauge tracks the visitor's current depth: a sticky side rail on desktop, the first cell of the action bar on phones.

## Colors

The palette is a real pool, read top to bottom: stone deck, pale plaster floor, glazed cobalt and turquoise tile, and water that darkens toward the deep end.

### Primary
- **Pool Water** (water): The main water field, the brand's theme color, and the first band below the waterline. It owns whole bands, never small chips.
- **Deep Water** (water-deep): The deeper water band. Used for the quote section and as the backing behind crew portraits.
- **Abyss** (water-abyss): The deepest water. Reserved for the footer and the far end of the "going deeper" gradient.

### Secondary
- **Glazed Cobalt** (cobalt): Waterline tile glaze. In the interface it marks current nav, confirmed plan features, the active gauge tile, input focus borders, and the form status border.
- **Glazed Turquoise** (turq): The second tile glaze. Used for focus outlines and text selection.

### Tertiary
- **NO DIVING Red** (red), with **Marker Red Dark** (red-dark) for its border and hover: the call action only.

### Neutral
- **Coping Deck** (deck): The dry ground of every page, with a fine stone-grain texture laid over it. Contact and service-area content sits back on the deck.
- **Deck Edge** (deck-edge): The coping edge. Header rule, action bar top edge, and dividers on the deck.
- **Plaster** (plaster): The pool-floor field for the shallow 3 FT band (weekly plans), and the form status fill.
- **Plaster Line** (plaster-line): Rules and the table border inside plaster fields.
- **Glazed White Tile** (tile): Depth tiles, secondary buttons, the plan table, form panels, and action bar cells.
- **Grout** (grout): Every tile joint. Depth tile borders, photo frames, gauge and action bar gutters, and the waterline joint.
- **Deep Ink** (ink): Text on dry and light fields. Also the plan table header fill.
- **Soft Ink** (ink-soft): Captions, fine print, and secondary text on light fields.
- **Water Text** (water-text) and **Water Soft** (water-soft): Body text and secondary text on water fields. Headings on water are pure white.

### Named Rules
**The Depth Scale Rule.** Fields darken with depth, in a fixed order: deck (lightest, dry), then plaster (3 FT shallow floor), then water, water-deep, and water-abyss. A later section never uses a lighter water than the one above it, and the footer is always abyss.

**The NO DIVING Rule.** Marker red is used only for the call action: the call button, the call cell of the action bar, and the red call tile. It is never used for decoration, errors, or emphasis.

## Typography

**Display Font:** Big Shoulders Display (with Arial Narrow, sans-serif), weights 700, 800 and 900
**Body Font:** Atkinson Hyperlegible (with system-ui, sans-serif), weights 400 and 700

**Character:** A condensed, stencil-adjacent display face that reads like the numerals painted on a pool coping, paired with a body face designed for low-vision legibility. The display face does the signage. The body face does the explaining.

### Hierarchy
- **Display** (800, clamp(3.5rem, 11vw, 6rem), 0.95; the home hero runs up to clamp(4rem, 13vw, 6rem) at 0.88): Page headlines, uppercase.
- **Headline** (800, clamp(2.4rem, 6vw, 4rem), 0.95): Section headings, uppercase.
- **Title** (700 to 800, clamp(1.5rem, 3vw, 2rem), 1.05): Sub-section and step headings, uppercase where they label a depth or a group. Also the display-set pull quotes.
- **Numeral** (900 for the depth figure, 800 for the "FT" unit, line-height 0.85): Depth tiles only. The figure is 56% of the tile size and the unit is 20%.
- **Body** (400, 1.125rem, 1.6): All running text, capped at 65ch.
- **Label** (700, 1rem): Nav links, form labels, button text on secondary buttons, and action bar cells.

### Named Rules
**The Signage Rule.** Big Shoulders Display is for headings, numerals, phone numbers, and the call button. It is set uppercase for headings and never used for running text.

**The Readable Body Rule.** Body text never drops below 1.125rem for running copy (captions and fine print may go to 0.9rem). Atkinson Hyperlegible carries all instructions, prices, and form text.

## Layout

A single centered column, at most 74rem wide, with side gutters of clamp(1rem, 4vw, 3rem). Sections are full-bleed horizontal bands with vertical padding of clamp(3.5rem, 8vw, 6.5rem). Each band is one field (deck, plaster, or a water depth). The waterline tile band (74px: a 14px bullnose coping lip, a 4px grout joint, then two courses of 28px tile) marks every crossing between dry deck and water.

A section that has a depth opens with a marker head: depth tile on the left, heading beside it. The "going deeper" sequence lays out three steps (5, 6 and 8 FT) that step down the page in a stair profile. Each later step starts lower, like the floor of a pool falling away. On screens under 52rem the steps stack.

Two-column splits collapse to one column at 52rem. The header nav gives way to a Menu button at 64rem. Below 64rem, a fixed bottom action bar (Call / Text / Quote) appears and the footer pads its bottom so the bar never covers it. The depth gauge appears only at 79rem and wider. Between 79rem and 92rem, the main column narrows by 7rem to make room for it.

## Elevation & Depth

The system is flat. There are no drop shadows and no bevels. Depth is literal: it is carried by field color (the Depth Scale Rule) and by depth tiles, not by z-axis lift. Edges are grout lines (2 to 6px solid grout or deck-edge), the way tile is set in mortar. Photos sit in a 6px grout frame on light fields, or a 6px frame of white at 85% opacity on water.

The only motion that suggests elevation is a 2px lift on button hover. Water fields carry a slow caustic shimmer: two layered turbulence textures at 6% and 4% opacity, drifting over 38s and 55s. It turns off under reduced motion.

### Named Rules
**The Grout Not Shadow Rule.** If an element needs to separate from its ground, give it a grout line or a different field. Never a box-shadow.

## Shapes

Square corners throughout (radius 0), including inputs, buttons, tiles, tables, and photo frames. Every container is a tile or a slab. The one repeated silhouette is the square depth tile: a square tile with a 3px grout border and a stacked figure and unit. The 10px top rule on steps and pull quotes reads as a pool-floor ledge.

## Components

### Buttons
Tiles you press. Firm, square, and plain.
- **Shape:** square (radius 0), 3px solid border, min-height 3.5rem.
- **Call (primary):** NO DIVING Red fill, Marker Red Dark border, white Big Shoulders Display 800 at 1.6rem, with an inline phone SVG. Hover darkens the fill to Marker Red Dark.
- **Tile (secondary):** Glazed White Tile fill, Deep Ink 3px border and text, Atkinson 700 at 1.1rem. On water, the border switches to tile white.
- **Hover / Active:** lifts 2px on hover and presses down 1px on active, eased with cubic-bezier(0.16, 1, 0.3, 1) over 0.2s. Focus shows a 3px turquoise outline offset 3px.

### Depth Tile (signature)
A white square tile (5rem by default; 4rem in steps, clamp(8rem, 14vw, 12rem) in the hero, 2.4rem in the gauge) with a 3px grout border and a stacked ink numeral and "FT". On the home page, depths map to content: 3 FT weekly service (the shallow end), 4 reviews, 5 one-time cleanups, 6 repairs, 8 remodels and new pools (the deep end). Subpages reuse the same depth as their topic. Contact and service-area content sits back on the deck with no tile. The 404 page uses 0 FT.

### Depth Gauge (signature)
A fixed vertical rail at the right edge of the column, on desktop (79rem and wider) only. It is a grout strip, 4px gutters and 4px gaps, holding one small depth tile per section. It fades in once the hero scrolls away. Inactive tiles sit at 55% opacity. The current tile goes white, at full opacity, with a 3px inset cobalt outline, and shifts 6px toward the content. On phones, the current depth appears instead as a borderless 3.4rem depth tile in the first cell of the action bar.

### Action Bar (phone)
A fixed bottom grout strip (4px gutters, 2px deck-edge top) with three tile cells: Call (marker red, display 800 at 1.3rem), Text, and Quote (tile white, Atkinson 700). Each cell has an inline SVG icon and a minimum height of 3.4rem. It is hidden at 64rem and wider.

### Waterline Band
A full-width 74px band: a pale coping lip, a grout joint, then two courses of cobalt and turquoise glazed tile with a soft glaze highlight. It is decorative (role="presentation") and appears wherever deck meets water.

### Cards / Containers
- **Corner Style:** square (0).
- **Background:** tile white for the plan table and form panel; whole-band fields for sections.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 3px grout or plaster-line.
- **Internal Padding:** clamp(1.25rem, 3vw, 2rem) for the form panel. Table cells use 0.85rem by 1rem.

### Plan Table
A tile-white table with a 3px plaster-line border and a Deep Ink header row (plan names in white display 800 at 1.5rem, uppercase). Even rows get a faint plaster tint. Included features show as cobalt check SVGs. Under 40rem, each row reflows into a full-width feature label above a three-column grid of marks.

### Inputs / Fields
- **Style:** white fill, 2px solid border (#8a979d), square, min-height 3rem, Atkinson at 1.05rem.
- **Focus:** the border turns cobalt, plus a 3px turquoise outline at 45% opacity.
- **Status:** plaster fill with a 2px cobalt border and bold text.

### Navigation
Atkinson 700 at 1rem, ink on deck. Hover and the current page show a 3px cobalt bottom rule. The phone number sits at the right of the header in display 800. Below 64rem, a square 2px-ink Menu button opens a full-width deck drop panel with rows separated by deck-edge lines.

## Do's and Don'ts

### Do:
- **Do** assign every new section a field by its depth: deck for dry and contact content, plaster for the 3 FT shallow end, then water, water-deep, and water-abyss as content gets heavier.
- **Do** give a section a depth tile only when its content has a real depth on the 3 to 8 FT scale. Leave contact and service-area content on the deck without one.
- **Do** put a waterline band at every crossing between deck and water.
- **Do** separate surfaces with grout lines (2 to 6px) and keep corners square (0).
- **Do** keep the caustic shimmer on water fields only, and switch it off under prefers-reduced-motion.
- **Do** use inline SVG icons inside buttons and action bar cells.

### Don't:
- **Don't** use depth tiles as section numbers or step counters. A tile is a depth in feet.
- **Don't** use marker red (red) for anything except the call action.
- **Don't** add drop shadows, bevels, gradients on tiles, or rounded corners.
- **Don't** place a lighter water field below a deeper one, or put the footer on anything but abyss.
- **Don't** set running text in Big Shoulders Display, or body copy below 1.125rem.
