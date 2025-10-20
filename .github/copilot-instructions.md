# Copilot Instructions for AlanThinks Portfolio

## Overview
This is a personal portfolio website hosted on GitHub Pages (alanthinks.github.io). It's a static site showcasing projects, resume, and contact information for Alan Guevara, a **Senior AI Technical Product Owner** specializing in **AI/MCP agents** and **cloud-native products**.

Alan leads teams that build production-grade AI agents and cloud-native SaaS. He combines 7+ years leading cross‑functional product teams. As a CSM®, PSPO™, and AWS‑certified AI practitioner and Solutions Architect, he's shipped 35+ React web & mobile apps and delivered RAG agent MVPs on AWS Bedrock, raising revenue, automating workflows, and improving task efficiency for Enterprise and Start-Up teams.
---
## Canonical Project List (from index.html)
This is the single source of truth for all projects. Use this list to add, update, or remove projects in the future.

### Project List (as of Oct 2025)

1. MDC AI Chatbot
2. AI Pricing & Quoting Agent
3. Envision Healthcare Apps
4. E-commerce Shopify Store Launch
5. Medical Dashboard React App
6. Product Viewer App
7. Paper To-Do List App
8. Client Testimonial Video
9. Sports Management App (OpenField)
10. Responsive Landing Page & Display Ads
11. David Beckham's Soccer Team Vlog
12. Soccer Team Logo & Uniform Designs
13. eMerge Americas Miami Trailer
14. AlanThinks.com
15. Responsive E-Mail Template
16. AlanThinks Content & Interviews
17. Waffles & Beer
18. Motion Graphics Countdown(up)

### New Project Required Data

id: Unique identifier (used in URLs and modals)
title: Project title
description: Short description for project card
image: Thumbnail image path (relative to img/projects/)
categories: Array of category strings for Isotope filtering (e.g., "web-apps", "graphic-design", "video")
buttons: Array of button objects with text, icon, url, type (e.g., "github", "demo")
link: URL to project details page (relative to site root)
tags: Array of technology/skill strings for project details modal

### New Project Data Template
id: 
title:
description: 
image: 
categories: 
buttons: 
link: 
tags: 

### Example Project Card HTML
```html
<div class="col-sm-6 col-xs-12 project-item web-apps graphic-design">
  <a style="z-index: 1" target="_blank" class="site-btn btn-theme-blue-tr btn-github"
      href="https://github.com/alanthinks/example-project">
      <i class="fab fa-github"></i>&nbsp Code
  </a>
  <a href="projects/example-project/" class="project">
      <div class="project-name">
          <h5>Example Project Title</h5>
          <em>Short description of the project.</em>
      </div>
      <div class="project-img">
          <img src="img/projects/example-project.jpg" alt="">
      </div>
      <div class="project-single-desc">
          <ul class="tags">
              <li>React</li>
              <li>Javascript</li>
              <li>HTML5/CSS3</li>
          </ul>
      </div>
  </a>
</div>
```

### Example Modal HTML (for project details)
```html
<div class="modal fade" id="project-modal-example" tabindex="-1" role="dialog" aria-labelledby="#project-modal-example" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <i class="fas fa-times x-close-icon" data-dismiss="modal" aria-hidden="true"></i>
        <div class="about-me">
          <div class="about-title">
            <h3>Example Project Modal Title</h3>
          </div>
          <div class="opacity-box">
            <p>Project details and description go here.</p>
          </div>
        </div>
        <div class="modal-buttons">
          <a class="site-btn btn-theme-blue btn-small-width" data-dismiss="modal" aria-hidden="true">Close</a>
        </div>
      </div>
    </div>
  </div>
</div>
```
---

## Architecture

### Main Site (Static)
- **Entry**: `index.html` - Single-page application with inline project cards, modals (resume, project details)
- **CSS**: `css/collection.css` imports Bootstrap 3.7, custom styles, Material Design Icons
- **JS**: jQuery 2.2.3 + Isotope.js for filtering, custom smooth scroll (900ms animations)
- **Projects**: Hardcoded in `index.html` - `data/projects.json` exists but is NOT used

### Embedded React Projects (Pre-Built)
Located in `/projects/*/` - these are **production builds only**, NOT source code:
- `medical-audit-app/` - Context API, React Router v4, service worker
- `product-viewer-app/` - E-commerce demo
- `paper-to-do-list-app/` - To-do app with cookies easter egg
- Static builds with hashed filenames in `/static/js/` and `/static/css/`

## Critical Workflows

### Adding a New Project
1. Add HTML block to `.projects-wrapper` in `index.html` (see existing pattern)
2. Include category classes for Isotope filtering: `.web-apps`, `.graphic-design`, `.video`
3. Position buttons with `.btn-github` class - uses absolute positioning with specific coordinates
4. Images go in `/img/projects/`, videos use YouTube embed URLs
5. Manually test Isotope filter buttons

### Editing Styles
**Never edit `collection.css` directly** - it only contains imports:
```css
@import url("bootstrap.min.css");
@import url("typography.css");
@import url("main.css");
@import url("responsive.css");
@import url("color.css");
@import url("custom.css");
```
Edit the specific imported file instead.

### Smooth Scroll Pattern
Every smooth scroll button follows this exact pattern in `js/main.js`:
```javascript
$("#section-big-btn").on("click", function() {
  const targetSection = $("#section-name").position().top
  $("html, body").animate({ scrollTop: targetSection }, 900)
})
```
- Timing is always 900ms
- Uses `.position().top` not `.offset().top`
- Button ID format: `#[section]-big-btn`

## Project-Specific Patterns

### Isotope Filtering
Filter buttons must match project card classes:
```html
<!-- Filter Button -->
<li data-filter=".web-apps">Web Apps</li>

<!-- Project Card -->
<div class="col-sm-6 project-item web-apps graphic-design">
```
Isotope is initialized in `js/main.js` with masonry layout, 0→1 opacity transitions.

### Modal Management
Bootstrap 3 modals with scroll compensation:
- On open: adjusts `body` padding-right to account for scrollbar width
- On close: resets padding
- Multiple modals stack properly (see `js/main.js` lines ~218-233)
- Resume modal ID: `#resume-modal`, Soccer designs: `#project-modal-soccer-designs`

### Mobile Menu
Toggle with `.mobile-btn` and `.close-mob-menu` in `js/main.js`. Hidden on `lg` and `md` breakpoints (`hidden-md hidden-lg` classes).

## File Organization

### DO NOT EDIT
- `/projects/*/static/` - Compiled React builds
- `/fonts/` - Material Design Icons
- `js/bootstrap.min.js`, `js/jquery-*.min.js`, `js/isotope.pkgd.min.js` - Vendor libs
- `data/projects.json` - Not connected to site

### Edit With Care  
- `index.html` - 600+ lines, tightly coupled section IDs
- `js/main.js` - Legacy jQuery but functional

### Safe to Modify
- `css/main.css`, `css/custom.css`, `css/responsive.css`
- `/img/projects/` - Project thumbnails

## Bootstrap 3 Responsive Classes
- `xs` <768px, `sm` ≥768px, `md` ≥992px, `lg` ≥1200px
- Mobile menu shows at `<992px`
- Use `hidden-sm hidden-xs` or `hidden-md hidden-lg` for responsive hiding

## Button Styling Classes
```css
.btn-github /* Absolute positioned, top-right of project cards */
.btn-card /* Overlay buttons on project hover */
.btn-theme-blue-tr /* Transparent blue theme button */
.site-btn /* Base button class */
```
GitHub buttons require `z-index: 1` and specific positioning: `top: -5px; right: 37px`

## Deployment
- **Method**: Direct push to `main` branch → GitHub Pages auto-deploys
- **Domain**: CNAME file points to custom domain
- **No CI/CD**: Changes go live immediately on push
- **React Projects**: Pre-build locally before committing to `/projects/*/`

## Common Issues

### Isotope Not Working
- Check `.projects-wrapper` has `imagesLoaded()` called before `isotope('layout')`
- Verify filter `data-filter` values match project card classes exactly

### Smooth Scroll Broken
- Ensure button ID exists and section ID exists  
- Check timing is 900ms consistently
- Verify `.position().top` not `.offset().top`

### Modal Scroll Jump
- Bootstrap 3 auto-compensates with padding-right
- Custom handler in `js/main.js` manages multiple modals

## Testing Checklist
- [ ] Test all Isotope filters (`All projects`, `Video`, `Web Apps`, etc.)
- [ ] Verify smooth scroll from top section to all anchors
- [ ] Check mobile menu toggle `<992px` breakpoint
- [ ] Test modals (resume, project details) open/close without scroll jump
- [ ] Validate responsive layout at all Bootstrap breakpoints

## Branch Context
- **Current**: `portfolio-update` (active working branch)
- Portfolio focus: AI/MCP agents, cloud-native SaaS, AWS Bedrock RAG agents, HIPAA healthcare apps

# Future Plans

## jQuery/Isotope Upgrade
- Plan to upgrade jQuery and Isotope.js to latest stable versions.
- Before upgrading, refactor all `$(window).load()` to `$(window).on('load')` and test Isotope filtering and all custom jQuery code for compatibility.

## Slideshow Refactor
- Refactor the current global slideshow implementation (used in soccer modal) into a reusable module or class.
- Goal: Allow multiple slideshows for different project cards/modals, each with their own state.
- Example: `SoccerSlideshow.init('#project-modal-soccer-designs .slideshow-container')`.

## Isotope Filters

### How the Isotope filters work

**Initialization (`js/main.js`):**
- The grid is initialized on the element with class `.projects-wrapper`
- Each project card must have the class `.project-item` (this is Isotope's `itemSelector`)
- Masonry layout is used, with `columnWidth` equal to a `.project-item`
- Hidden/visible styles use opacity transitions (0→1)

**Filter click handler (`js/main.js`):**
- Clicking a filter button inside `.projects-filter ul li`:
  1. Removes `.active` class from all filter buttons
  2. Adds `.active` to the clicked button
  3. Reads the clicked element's `data-filter` attribute value (e.g., `"*"` or `".video"`)
  4. Calls Isotope with `{ filter: <data-filter> }`

**ImagesLoaded integration:**
- After images load, Isotope is told to re-layout so cards position correctly
- Pattern: `$grid.imagesLoaded().progress(() => $grid.isotope("layout"))`

**The exact code in `js/main.js`:**
```javascript
// Grid initialization
var $grid = $(".projects-wrapper").isotope({
  itemSelector: ".project-item",
  hiddenStyle: { opacity: 0 },
  visibleStyle: { opacity: 1 },
  masonry: { columnWidth: ".project-item" }
})

// Click handler
$(".projects-filter ul li").on("click", function() {
  $(".projects-filter ul li").removeClass("active")
  $(this).addClass("active")
  var filterValue = $(this).attr("data-filter")
  $(".projects-wrapper").isotope({ filter: filterValue })
})
```

### Where to update filters

**Filter buttons location (`index.html`):**
- In the "Early Projects" section under the div with class `.projects-filter`
- Inside `<ul class="list-inline">`

**Current filter markup pattern:**
```html
<li class="active" data-filter="*">All projects</li>
<li data-filter=".ai-ml-agents">AI/ML Agents</li>
<li data-filter=".hipaa-healthcare">HIPAA Compliant Apps</li>
<li data-filter=".e-commerce">E-Commerce</li>
<li data-filter=".ux-ui-design">UX/UI & Design</li>
<li data-filter=".archive">Archive</li>
```

**How to add a new filter category:**
1. Add a new list item inside `.projects-filter ul`:
   ```html
   <li data-filter=".ai-agents">AI Agents</li>
   ```
2. Ensure project cards that should show for that filter include the class `ai-agents` on their outer `.project-item` container

**How to rename a category:**
- Update both:
  1. The filter button's `data-filter` value (e.g., from `.web-apps` to `.apps`)
  2. All project cards' category class from `web-apps` to `apps`

**Important:** The `data-filter` uses CSS selectors (leading dot for classes). The class on the card should NOT include a dot.
- Filter: `data-filter=".web-design"`
- Card class: `class="project-item web-design"` (no dot in class name)

### How project cards are updated

**Required class:**
- Every card must include `project-item` (Isotope's itemSelector)

**Category classes:**
- Add one or more category classes to the same element so they can be filtered
- Supported categories: `ai-ml-agents`, `hipaa-healthcare`, `e-commerce`, `ux-ui-design`, `archive`
- Legacy categories still in use: `video`, `web-apps`, `web-design`, `graphic-design`

**Example correct structure:**
```html
<div class="col-sm-6 col-xs-12 project-item web-apps graphic-design">
  <!-- Card content -->
</div>
```

**Multi-category cards:**
- A card can have multiple category classes
- Example: `project-item web-apps graphic-design web-design`
- This card will show when filtering for "Web Apps" OR "Web Design" OR "UX/UI & Design"

### What happens when you click a filter

**Filter behavior:**
- `data-filter="*"` shows everything (all `.project-item` elements)
- `data-filter=".video"` shows only items whose `.project-item` also has the class `video`
- `data-filter=".web-apps"` shows only items with class `web-apps`

**Combine categories:**
- You can add multiple category classes to a single card
- The card will appear when ANY of its categories match the active filter

**Visual feedback:**
- The active filter gets the `.active` class (highlighted in UI)
- Non-matching cards fade out (opacity: 0)
- Matching cards fade in (opacity: 1)
- Isotope animates the layout transition

### Where everything lives

**Isotope behavior:**
- `js/main.js` - initialization and click handler (lines ~120-145)

**Filter definitions:**
- `index.html` - inside the `.projects-filter` list (around line 445-452)

**Card categories:**
- `index.html` - under the `.projects-wrapper` grid
- Each card is a column like: `<div class="col-sm-6 col-xs-12 project-item ...category-classes...">`

**Assets:**
- Project thumbnails: `/img/projects/`
- YouTube embeds: Direct URLs in iframe `src` attributes

### How to update, step by step

**Add a new category:**
1. In `index.html`, find `.projects-filter ul` (around line 447)
2. Add: `<li data-filter=".my-category">My Category</li>`
3. Add `my-category` class to any project cards you want included
4. Test by clicking the new filter button

**Remove a category:**
1. Remove the `<li>` for that category from `.projects-filter ul`
2. Optionally remove the category class from cards (not required if filter is gone)

**Add a new project card:**
1. Duplicate an existing `.project-item` block in `index.html`
2. Assign appropriate category classes (e.g., `project-item web-apps`)
3. Update title, description, image path, and button URLs
4. Place image in `/img/projects/`
5. Test all relevant filter buttons

**Rename a category:**
1. Change the `data-filter` value in the filter button (e.g., `.web-design` → `.design`)
2. Update the class on ALL affected `.project-item` cards (e.g., `web-design` → `design`)
3. Test filter to ensure cards still appear

**Change filter order:**
- Reorder the `<li>` elements in `.projects-filter ul`
- No JavaScript changes needed

### Notable Quirks

**imagesLoaded dependency:**
- Already wired: `$grid.imagesLoaded().progress(() => $grid.isotope("layout"))`
- If you add heavy images, this ensures the layout recalculates as they finish loading
- Without this, cards may overlap before images load

**Active filter class:**
- The UI shows which filter is active by toggling `.active` on the clicked filter `<li>`
- CSS styles the `.active` class differently (usually highlighted or underlined)

**CSS selector syntax:**
- Filter `data-filter` attributes use CSS selector syntax (dot prefix for classes)
- Card `class` attributes use standard HTML class names (no dot prefix)
- Mismatch will cause filter to fail silently

**Column widths:**
- Isotope uses `.project-item` as the `columnWidth` for masonry layout
- All cards should be the same width for consistent layout
- Current: `col-sm-6` (2 columns on tablets/desktop), `col-xs-12` (1 column on mobile)

**Multiple categories per card:**
- Powerful feature: one card can belong to multiple filters
- Use case: "Medical Dashboard" is both `web-apps` AND `graphic-design` AND `web-design`
- Appears in all three category filters

**Filter persistence:**
- Active filter does NOT persist across page reloads
- Always defaults to "All projects" (`data-filter="*"`) with `.active` class
- To change default: move `.active` class to a different `<li>` in HTML

**Performance:**
- Isotope is fast for small/medium grids (< 100 items)
- Current portfolio has ~14 items (very performant)
- No pagination or lazy loading needed


