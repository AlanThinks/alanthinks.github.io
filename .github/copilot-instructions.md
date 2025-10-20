# Copilot Instructions for AlanThinks Portfolio

## Overview
This is a personal portfolio website hosted on GitHub Pages (alanthinks.github.io). It's a static site showcasing projects, resume, and contact information for Alan Guevara, a **Senior AI Technical Product Owner** specializing in **AI/MCP agents** and **cloud-native products**.

Alan leads teams that build production-grade AI agents and cloud-native SaaS. He combines 7+ years leading cross‑functional product teams. As a CSM®, PSPO™, and AWS‑certified AI practitioner and Solutions Architect, he's shipped 35+ React web & mobile apps and delivered RAG agent MVPs on AWS Bedrock, raising revenue, automating workflows, and improving task efficiency for Enterprise and Start-Up teams.
---
## Canonical Project List (from index.html)
This is the single source of truth for all projects. Use this list to add, update, or remove projects in the future.

### Project List (as of Oct 2025)

1. Medical Dashboard React App
2. Product Viewer App
3. Paper To-Do List App
4. Client Testimonial Video
5. Sports Management App (OpenField)
6. Responsive Landing Page & Display Ads
7. David Beckham's Soccer Team Vlog
8. Soccer Team Logo & Uniform Designs
9. eMerge Americas Miami Trailer
10. AlanThinks.com
11. Responsive E-Mail Template
12. AlanThinks Content & Interviews
13. Waffles & Beer
14. Motion Graphics Countdown(up)

### New Project Required Data

id: Unique identifier (used in URLs and modals)
title: Project title
description: Short description for project card
image: Thumbnail image path (relative to img/projects/)
categories: Array of category strings for Isotope filtering (e.g., "web-apps", "graphic-design", "video")
buttons: Array of button objects with text, icon, url, type (e.g., "github", "demo")
link: URL to project details page (relative to site root)
tags: Array of technology/skill strings for project details modal
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
