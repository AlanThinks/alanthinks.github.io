o# Portfolio Migration & Enhancement Plan

**Repo:** [alanthinks.github.io](https://github.com/AlanThinks/alanthinks.github.io)  
**Site:** main branch: [alanthinks.com](https://alanthinks.com)
old-portfolio

This plan describes how to evolve the static HTML/CSS/JS portfolio into a maintainable React application, while positioning Alan as a **Senior AI Technical Product Owner** specializing in **AI/MCP agents** and **cloud-native products**.

---

## Guardrails

- Incremental migration → small PRs per phase, no breaking changes.
- JSON in `/data` (`certifications.json`, `projects.json`, `resume.json`) will become the single source of truth.
- Emphasize AI agent outcomes, certifications, and clear calls-to-action.

---

## Content Rules

- **Keep & expand**:
  - MDC AI Chatbot (case study)
  - AI Pricing Agent (case study)
  - Quantum ML Research (reframed as “Research-to-MVP”)
  - Neonatal NICU or Team Performance Dashboard
  - AgentKit Agents
  - MindStudio Agents
- **Consolidate**: Group similar work into verticals:
  - AI Agents & Automation
  - Healthcare & HIPAA Apps
  - E-commerce & Growth
  - Platforms & SaaS
- **De-emphasize**: small demos, older travel/personal projects. Place under a Archive link if desired.

---

## Phased Migration Plan

### Phase 0 — Bootstrap React App

- Add `/react` with **Vite + React** scaffold.
- Copy global styles → `legacy.css`.
- Set up `react-router-dom`.
- Add `/react/src/data` layer to import JSON (`certifications.json`, `projects.json`, `resume.json`).
- GitHub Actions: build check only (no deploy yet).
- Sincet his is a professional portfolio site prioritize speed and seo

---

### Phase 1 — Hero Section

- `Hero.tsx`: name, role, tagline.
- CTAs:
  - **See AI Case Studies** (primary)
  - **Book a 20-minute call** (secondary)
  - **Résumé** (Modal)
- `CertBadgeRow.tsx`: map certs from `certifications.json`.
- Responsive layout; reuse legacy styles.

---

### Phase 2 — Project Cards

- Components: `ProjectCard.tsx`, `ProjectGrid.tsx`, `FilterChips.tsx`.
- Data from `projects.json`.
- Start with **featured AI projects**:
  - MDC AI Chatbot
  - AI Pricing Agent
  - Quantum ML Research
  - NICU or Team Performance Dashboard
  - OpenAI AgentKit Agent
  - MindStudio Agent
- Filters: AI Agents, Healthcare, E-commerce, SaaS.
- Stub detail page: `/projects/:id`.

---

### Phase 3 — Résumé Modal

- `ResumeModal.tsx`: timeline from `resume.json`.
- Maintain current style of job timeline currently in modal
- Group by company → role → achievements.
- Education section.
- Button to download PDF résumé.
- Add “How I Work” section (discovery → prototype → iterate → ship → monitor).

---

### Phase 4 — SEO & CTAs

#### Meta & Structured Data
- Add `<title>` and `<meta name="description">` per page (Hero, Projects, About, Contact).
- Configure Open Graph (OG) and Twitter Card meta tags:
  - `og:title`, `og:description`, `og:image`, `og:url`.
  - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- Include a `<link rel="canonical">` tag on each page.
- Add a `favicon.ico` and social preview image (`/assets/og-image.png`).
- Add JSON-LD structured data (`<script type="application/ld+json">`) for:
  - **Person** schema: name, headline, certifications, website, LinkedIn.
  - **Project/CreativeWork** schema for featured case studies (title, description, role, technologies, outcome metrics).

#### Keywords & Copy
- Primary keywords: *AI agent product owner, RAG chatbot, AWS Bedrock, vector database, AI product strategy*.  
- Secondary keywords: *Technical Product Owner React and AWS, AI product manager, product strategy AI agents*.  
- Integrate naturally in page copy, headings, and case study summaries.

#### Technical SEO
- Generate a `sitemap.xml` and `robots.txt` for GitHub Pages deployment.
- Use semantic HTML: `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`.
- Ensure all images have descriptive `alt` attributes.
- Add internal linking: Hero CTA → Projects → Case Studies.
- Optimize performance: lazy-load images, compress thumbnails, and minify assets.

#### Calls-to-Action
- **Hero section**:  
  - Primary CTA: “See AI Case Studies”  
  - Secondary CTA: “Book a 20-minute discovery call” (Calendly link)  
- **Footer**:  
  - Résumé download (PDF)  
  - LinkedIn connect link  
  - Optional GitHub link for credibility  

#### Accessibility
- Ensure headings follow semantic order (H1 → H2 → H3).
- Provide high-contrast text and focus states for buttons/links.
- Use ARIA labels for icon-only buttons (LinkedIn, Calendly, etc.).

---

### Phase 5 — Deployment

- Switch GitHub Pages deployment to React app (`/react/dist`).
- Keep old static site in `/legacy` (not deployed).

---

## Sample Suggested File Structure (React)

/react
/src
/assets
/components
Hero.tsx
CertBadge.tsx
CertBadgeRow.tsx
ProjectCard.tsx
ProjectGrid.tsx
FilterChips.tsx
ResumeModal.tsx
/pages
Home.tsx
Projects.tsx
About.tsx
Contact.tsx
/data
certifications.ts
projects.ts
resume.ts
/styles
legacy.css

---
## JSON-LD Examples

### Person Schema
```<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alan Guevara",
  "alternateName": "AlanThinks",
  "jobTitle": "Senior Technical Product Owner",
  "description": "Technical Product Owner specializing in AI agents, cloud-native solutions, and modern product strategy.",
  "url": "https://alanthinks.com",
  "image": "https://alanthinks.com/assets/hero.png",
  "sameAs": [
    "https://www.linkedin.com/in/alanthinks",
    "https://github.com/AlanThinks",
    "https://calendly.com/alanthinks"
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "RAG Chatbots",
    "AWS Bedrock",
    "Vector Databases",
    "Product Management",
    "Cloud Architecture",
    "Agile Methodologies"
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Miami Dade College"
  },
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "AWS Certified Solutions Architect – Associate" },
    { "@type": "EducationalOccupationalCredential", "name": "AWS Certified AI Practitioner" },
    { "@type": "EducationalOccupationalCredential", "name": "Certified ScrumMaster® (CSM)" },
    { "@type": "EducationalOccupationalCredential", "name": "Professional Scrum Product Owner™ I (PSPO I)" }
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "AlanThinks"
  }
}
</script>
```
### Use Case Schema
```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MDC AI Chatbot",
  "description": "RAG-based chatbot integrated with Canvas LMS, automating syllabus and quiz generation for faculty.",
  "applicationCategory": "Educational Software",
  "creator": {
    "@type": "Person",
    "name": "Alan Guevara",
    "url": "https://alanthinks.com"
  },
  "operatingSystem": "Web",
  "softwareVersion": "1.0",
  "programmingLanguage": ["React", "Node.js"],
  "featureList": [
    "RAG retrieval from course templates",
    "Canvas API integration",
    "Vector database embeddings"
  ],
  "url": "https://alanthinks.com/projects/mdc-ai-chatbot",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0.00",
    "priceCurrency": "USD"
  }
}
</script>
```
### Project Schema
```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AI Pricing Agent",
  "description": "RAG-powered pricing agent for logistics, achieving 95% accuracy in automated quote generation.",
  "applicationCategory": "Logistics Software",
  "creator": {
    "@type": "Person",
    "name": "Alan Guevara",
    "url": "https://alanthinks.com"
  },
  "operatingSystem": "Web",
  "programmingLanguage": ["React", "Node.js"],
  "featureList": [
    "Historical quote ingestion",
    "Carrier rule-based quoting",
    "Human-in-the-loop verification"
  ],
  "url": "https://alanthinks.com/projects/ai-pricing-agent"
}
</script>
```

### React Implementation Example
```import { Helmet } from "react-helmet-async";

export default function SEO() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alan Guevara",
    "jobTitle": "Senior Technical Product Owner",
    "url": "https://alanthinks.com"
  };

  return (
    <Helmet>
      <title>Alan Guevara | AI Product Owner & Strategist</title>
      <meta name="description" content="AI Product Owner specializing in RAG chatbots, AWS Bedrock, and cloud-native applications." />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
}
```
---

## Minimum User Inputs Needed

- Latest résumé PDF.
- Calendly or contact link.
- Final hero tagline.
- Updated metrics for case studies.
- Badge/logo assets.
- Project screenshots and architecture diagrams.
- If using placeholders make sure to update ai_dev_plan.md checklist with pending items
- Certification Badges Images

---

## Definition of Done

- React app renders: Hero + Certs + Project Grid + Résumé Modal.
- Uses `/data/*.json` for content.
- Lighthouse scores ≥ 90 (mobile, perf, SEO).
- Accessible, responsive, no broken links.
