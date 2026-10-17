GIFcommit00014

# Layout study — Nvidia, as GIFvidia

**Live:** [`https://gregoryedgerton.github.io/golden-grids-study-15-nvidia/`](https://gregoryedgerton.github.io/golden-grids-study-15-nvidia/)

An unaffiliated layout study. It rebuilds four pages of
[nvidia.com](https://www.nvidia.com/en-us/) (the home page, industries, the RTX
Spark laptop marketplace and drivers) as stacked golden grids under a parody
name, GIFvidia. GIFvidia is not a chipmaker. Every story, laptop and driver is
invented, nothing can be bought or downloaded, no form sends anything, and none
of the reference's sentences, photographs or marks is reproduced. Built with
[Golden Grids](https://github.com/gregoryedgerton/golden-grids) from the
[study template](https://github.com/gregoryedgerton/golden-grids-study-template).

## Reference

Read on 2026-10-09 in a desktop browser at about 1,024px wide, signed out; text
and computed styles were taken from the pages, and the marketplace's filters and
the drivers form were read for their options. No screenshot is kept.

- **Home:** a hero story with a row of five tabs under it, a registration
  banner, and four sections (Artificial Intelligence, Design and Simulation,
  High-Performance Computing, Gaming and Creating), each a heading, a line and a
  row of eight to ten story cards (a kicker, a title, a line), then a footer of
  three lists.
- **Industries:** a black hero with a headline and five in-page tabs, fourteen
  industries, four "State of AI" reports, three get-started modules.
- **RTX Spark marketplace:** a filter column (category, GPU, manufacturer,
  system memory, screen size), a pager with a per-page choice, and twenty-two
  laptops as cards with six spec lines each.
- **Drivers:** a hero with three tabs, a manual search of four dependent selects
  and a language, news, Linux and additional drivers.

**Measured register:** one green, `#76b900`, on black and white; a black header
and footer; black and dark-grey tiles; bold humanist headings (Barlow stands in
for the reference's own); square corners; a green rule over each card. The
reference has one scheme on the web; dark is the study's own.

## Approach

The reference sets each module as a row of equal cards. The study sets each as
one grid: the first card in the largest square, the rest in descending squares,
with figures about the subject as large type among them. A card's type is set
from its square's side (`10px + 1.5%`, held between 12 and 20px) and what a
square cannot hold is left out whole: the body line first, then the title and
kicker, leaving the photograph with a black label on it.

## The pages

Four Vite entries, plain relative links, no router. `GridBand`
([`src/bands/bands.tsx`](src/bands/bands.tsx)) draws every band from cells;
`lib/plan.ts` chooses each grid. Below 1100px a band of five is dealt into two
grids, and a skip grid that would leave a square under 104px falls back to a
plain one.

| Page | Band | Cells |
| --- | --- | --- |
| Home | Featured | the chosen story and four tabs; choosing a tab swaps it into the hero |
| | Conference | a banner, two figures, a figure in the strip |
| | AI / Simulation / HPC / Gaming | each a band of four to five cards, then a second band of the rest, with figures among them |
| Industries | Our Industries | fourteen photographs in three bands; each opens to what it covers |
| | State of AI Reports | four reports as flat tiles and a figure |
| | Surveys in numbers | three figures and a strip |
| | Get Started | three modules |
| Marketplace | Laptops | twenty-two laptops, filtered, paged and dealt five to a band |
| | In numbers | three figures and a strip |
| Drivers | Automatic updates | four tiles |
| | Manual search | flat: four dependent selects, a result |
| | News | four stories and a strip |

**What answers back.** Every photograph opens its square in place. On the
marketplace the filters narrow the twenty-two laptops, each filter's counts
follow the others, the pager changes page and size, and the grids are re-dealt
from the new count. On the drivers page the selects wait on one another (a
series needs a product type, a product a series), choosing a type resets what
follows it, and Find returns a driver the study works out from the choices:
the same choices give the same version and date. The header's search finds
industries, laptops and drivers.

## Content and provenance

- **The structure and the lists are real; the words are not.** Each story is the
  study's own wording of a subject the reference covers; no partner's name is
  used. The five laptop makers do not exist. Every driver's version, date and
  size is computed from the choices.
- **The reference's own product names carry the parody name:** GIFvidia RTX
  Spark, GIFvidia Blackwell, GIFvidia Grace, GIFvidia GeForce and so on, as the
  program's brand rule asks.
- **Photographs** are in [`src/photos.json`](src/photos.json), each with its
  author, licence, page and alt text: all from Unsplash under the Unsplash
  License (free to use; not a Creative Commons licence). Each shows a kind of
  thing and says so when opened.
- **Icons** are the study's own drawings. **Text** is the study's own.

## Notes for review

Observations for whoever reviews this study, recorded without a verdict.
Whether the layout suits the page is assessed separately, after every study
has been reviewed.

- **Laptop photographs repeat.** There are three pictures of laptops among the
  forty-one photographs, so the twenty-two cards share them.
- **Card sizes.** In a band of five at 1440 the squares are about 850, 520,
  330, 200 and 200px; the two smallest show a photograph and a black label.
- **Spec lines.** A laptop card shows its six lines from about 360px square;
  below that they are in the opened card.
- **The driver finder's result** has no button: it names a version, a date and
  a size the study invented, and says that nothing is downloaded.
- **Accessibility.** `captures/scan.cjs` reports no overflow, no fitted line
  under 12px and no axe violations in Chrome and WebKit at 390, 820 and 1440,
  light and dark. No screen-reader user has tested it.
- **Not rebuilt.** The mega menus, sign-in, the other marketplace categories,
  the story pages the cards lead to, and the downloads.
- **Changes after the Safe Browsing flag (2026-10-17).** Google Safe Browsing
  flagged the address these studies share, gregoryedgerton.github.io, as
  deceptive (pages that trick visitors into sharing personal information or
  downloading software). Nothing was ever collected or offered here, but
  controls that look like a download or a sign-in were removed. The drivers
  page's app square ("Download Now") now ends in a plain note that the study
  offers no software, its band reads "Automatic Driver Updates", and the driver
  finder's result lost its Download button. The header's Sign In is gone; the
  search and the region hold the right of the bar. The paragraph on virtual GPU
  drivers no longer speaks of signing in to a download portal. The conference
  banner and story no longer say Register or Get Your Pass Now, the hero story
  no longer says Preorder now, and the driver notes no longer mention an
  installer. The shop page had no Buy, cart, checkout or payment control and
  no input but its filters and pager; it is unchanged.

## Disclosure

Every page says it is a study in three places, all read from
[`src/study.json`](src/study.json): the page's metadata, a sticky notice at the
top, and "About this layout study", the last element on the page.

## Running it

```bash
npm install
npm run dev
NODE_PATH=<a node_modules with playwright> node captures/scan.cjs http://localhost:5173/ index industries shop drivers
```

Pushing to `main` deploys to GitHub Pages.
