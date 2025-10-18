# Copilot Instructions for AlanThinks Portfolio

## Project Overview
This is a personal portfolio website hosted on GitHub Pages (alanthinks.github.io). It's a static site showcasing projects, resume, and contact information for Alan Guevara, a **Senior AI Technical Product Owner** specializing in **AI/MCP agents** and **cloud-native products**.

Alan leads teams that build production-grade AI agents and cloud-native SaaS. He combines 7+ years leading cross‑functional product teams. As a CSM®, PSPO™, and AWS‑certified AI practitioner and Solutions Architect, he's shipped 35+ React web & mobile apps and delivered RAG agent MVPs on AWS Bedrock, raising revenue, automating workflows, and improving task efficiency for Enterprise and Start-Up teams.

## Architecture

### Main Site Structure
- **Root**: Single-page application in vanilla HTML/CSS/JS
- **Projects**: Self-contained subdirectories with compiled React apps (medical-audit-app, product-viewer-app, paper-to-do-list-app)
- **CSS**: Modular CSS architecture via `collection.css` - imports Bootstrap, typography, custom styles, and Material Design Icons
- **JS**: jQuery-based interactions, Isotope for filtering, custom smooth scrolling, gradient backgrounds
- **Data**: JSON Project Descriptions not currently in use (`data/projects.json`) 

### Key Components
- `index.html` - Main portfolio page with embedded modals, project showcase placeholder, and contact section
- `data/projects.json` - Project data with categories, tags, images/videos, and button configurations, this is not currently in use
- `js/main.js` - jQuery-based interactions, smooth scrolling, mobile menu
- `css/collection.css` - CSS import hub (Bootstrap, custom styles, Material Design Icons)
- `projects/*/` - Pre-built React apps (deployed static builds, NOT source code)

## Technology Stack

### Main Site
- **Frontend**: HTML5, CSS3, jQuery 2.2.3, Bootstrap 3.7
- **Animations**: Custom smooth scroll, gradient backgrounds (`js/gradient.js`)
- **Filtering**: Isotope.js for project grid filtering
- **Icons**: Material Design Icons (`materialdesignicons.min.css`)

### Embedded Projects (Pre-Built)
- React apps with Webpack builds (medical-audit-app uses Context API, React Router v4)
- Service workers for offline capabilities
- Static deployments with hashed filenames

## Development Patterns


### CSS Architecture
```css
/* collection.css is the main import file */
@import url("bootstrap.min.css");
@import url("typography.css");
@import url("main.css");
@import url("responsive.css");
@import url("color.css");
```
When editing styles, modify the specific imported CSS file, NOT collection.css itself.

### Smooth Scrolling Convention
Custom jQuery-based smooth scroll to sections. All scroll animations use:
```javascript
$("html, body").animate({ scrollTop: $(target).position().top }, 900)
```
Timing is consistently 900ms. Button IDs match pattern: `#[section]-big-btn`.

### Project Grid Filtering
Uses Isotope with data-filter attributes:
- Filter buttons in `.projects-filter` with `data-filter` attributes (e.g., `data-filter=".ai-agents"`)
- Project items use classes matching filters (automatically generated from JSON `categories` array)
- Isotope is re-initialized in `js/projects.js` after projects load

### Modal Pattern
Bootstrap 3 modals 
 Soccer designs modal (`#project-modal-soccer-designs`)
 resume modal might be duplicated, known issue

## File Organization Principles

### DO NOT EDIT
- `/projects/*/static/` - Pre-built React apps (compiled/minified)
- `/fonts/` - Material Design Icon fonts
- `js/bootstrap.min.js`, `js/jquery-*.min.js` - Vendor libraries
- `js/isotope.pkgd.min.js`, `js/imagesloaded.pkgd.min.js` - Isotope library

### Edit With Care
- `index.html` - Large monolithic file. Section IDs matter for navigation. Projects are now dynamically loaded (empty `.projects-wrapper`).
- `js/main.js` - jQuery spaghetti but functional. Smooth scroll timing is standardized.

### Frequently Modified
- `/css/*.css` (except collection.css - edit imports instead)
- `/img/` - Image assets
- Meta tags and positioning text in index.html

## Current Branch Context
Working on `portfolio-update` branch. The `react-migration` branch is not in use. 

Portfolio positioning: **Senior AI Technical Product Owner** focusing on AI/MCP agents and cloud-native products (AWS Bedrock, RAG agents, HIPAA-compliant healthcare apps).

## Key Conventions

### Branding Colors


### Responsive Breakpoints
Bootstrap 3 breakpoints: xs (<768px), sm (≥768px), md (≥992px), lg (≥1200px)
Mobile menu triggers at <992px (`hidden-md hidden-lg` classes)

### Project Card Button Classes
- `.btn-card` - Base button class for project overlay buttons
- `.btn-card-first` - First button (typical position)
- `.btn-card-second` - Second button (if needed, positioned differently)
- `z-index: 1` - Required for buttons to appear above project content

## GitHub Pages Deployment
- Direct push to `main` (or configured branch) deploys automatically
- CNAME file points to custom domain
- No build process for main site (static HTML/CSS/JS)
- React projects are pre-built before adding to repo

## Common Gotchas

3. **Video vs. Image Projects**: Use `videoUrl` for YouTube embeds, `image` for static images. Never both.

4. **Scroll Padding**: Modal open/close adjusts body padding-right for scrollbar compensation.

## Testing Approach
- Manual browser testing across breakpoints
- Test Isotope filtering after adding new projects
- Test video embeds with proper YouTube URL format
