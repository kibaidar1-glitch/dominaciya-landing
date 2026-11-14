
# PLAN — Implementation Roadmap

## Phase 1 — Audit and setup
- [x] Inspect repository and existing assets.
- [x] Establish the framework (Vite + React + TypeScript) and package manager (pnpm).
- [x] Review PROJECT.md, DESIGN.md, CONTENT.md and the game materials.
- [x] Identify missing content and resolve distribution, copy and download details with the owner.
- [x] Establish the development environment.

## Phase 2 — Art direction
- [x] Define design tokens and typography.
- [x] Create the page structure.
- [x] Build the hero section with the real landscape banner.
- [x] Confirm the visual direction with the owner before expanding.

## Phase 3 — Landing page
- [x] Implement navigation and hero.
- [x] Implement game introduction.
- [x] Implement the gameplay overview and real card gallery.
- [x] Implement the verified component list and Print & Play section.
- [x] Implement FAQ and final download/community links.
- [x] Add responsive layouts and mobile navigation.

## Phase 4 — Polish
- [x] Create optimized WebP display copies while preserving source assets; lazy-load below-the-fold images.
- [x] Add page metadata and a social preview image.
- [ ] Verify accessibility and keyboard navigation in a browser.
- [x] Verify page anchors and local image/PDF routes; the owner confirmed the Telegram URL.
- [x] Review the rendered page at mobile and desktop sizes; refine the gameplay section, component image route, header links, scroll reveals, approved copy, spacing, and section numbering from browser feedback.

## Phase 5 — Release
- [x] Check lint availability (no lint command is configured).
- [x] Run the TypeScript check.
- [x] Run the production build.
- [x] Check the production output and local asset routes.
- [x] Configure the published Netlify URL and connect download CTAs to the verified v1.0.0 game release.
- [x] Add a dedicated game page with verified edition, preparation and component information.
- [ ] Publish the game listing on Russian distribution platforms; account access, platform choice and listing approval are still required.
- [x] Document generic static-host deployment steps and file-size requirements.

## Definition of done
The site builds successfully, matches DESIGN.md,
uses verified product information, works on mobile and desktop,
and has functional navigation and download actions.
