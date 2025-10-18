/* Simple typed data helpers that import JSON files from the
   repository root /data directory. These are not fetched; they are
   imported at build time. If fields are missing, we surface sensible
   fallbacks and warn in the console. */

// Relative paths walk up from /react to repo /data
import resumeJson from "@data/resume.json";
import certificationsJson from "@data/certifications.json";
import projectsJson from "@data/projects.json";

export type Certification = {
  id: string;
  name: string;
  issuer?: string;
  date?: string;
  credential_url?: string;
  image?: string;
  description?: string;
  category?: string;
};

export type Project = {
  id: string;
  title: string;
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  tech_stack?: string[];
  featured?: boolean;
  category?: string;
  role?: string;
  url?: string;
};

export type Resume = {
  work_history: unknown[];
  education: unknown[];
};

type CertificationsFile = {
  certifications?: Certification[];
};

type ProjectsFile = {
  featured_projects?: Project[];
  legacy_projects?: Project[];
};

type ResumeFile = Partial<Resume>;

function warnIfMissing<T extends object>(item: T, field: keyof T, context: string) {
  if (item[field] === undefined || item[field] === null) {
    // eslint-disable-next-line no-console
    console.warn(`[data] ${context} missing field: ${String(field)}`);
  }
}

export function getResume(): Resume {
  const raw = (resumeJson as ResumeFile) ?? {};
  const resume: Resume = {
    work_history: Array.isArray(raw.work_history) ? raw.work_history : [],
    education: Array.isArray(raw.education) ? raw.education : [],
  };

  if (!resume.work_history.length) {
    warnIfMissing(resume, "work_history", "resume");
  }
  if (!resume.education.length) {
    warnIfMissing(resume, "education", "resume");
  }

  return resume;
}

export function getCerts(): Certification[] {
  const raw = certificationsJson as CertificationsFile | Certification[] | undefined;
  const collection = Array.isArray(raw)
    ? raw
    : Array.isArray(raw?.certifications)
      ? raw?.certifications
      : [];

  if (!collection.length) {
    // eslint-disable-next-line no-console
    console.warn("[data] certification list is empty");
  }

  return collection.map((cert, index) => ({
    id: cert.id ?? cert.name ?? `cert-${index}`,
    name: cert.name ?? "Untitled Certification",
    issuer: cert.issuer ?? "",
    date: cert.date ?? "",
    credential_url: cert.credential_url ?? cert.url ?? "",
    image: cert.image ?? "",
    description: cert.description ?? "",
    category: cert.category ?? "",
  }));
}

export function getProjects(): Project[] {
  const raw = projectsJson as ProjectsFile | Project[] | undefined;

  if (Array.isArray(raw)) {
    return raw.map((project, index) => ({
      id: project.id ?? `project-${index}`,
      title: project.title ?? "Untitled Project",
      description: project.description ?? "",
      challenge: project.challenge ?? "",
      solution: project.solution ?? "",
      results: project.results ?? [],
      tech_stack: project.tech_stack ?? [],
      featured: Boolean(project.featured),
      category: project.category ?? "",
      role: project.role ?? "",
      url: project.url ?? "",
    }));
  }

  const featured = Array.isArray(raw?.featured_projects) ? raw?.featured_projects ?? [] : [];
  const legacy = Array.isArray(raw?.legacy_projects) ? raw?.legacy_projects ?? [] : [];
  const featuredItems = new Set(featured);
  const combined = [...featured, ...legacy];

  if (!combined.length) {
    // eslint-disable-next-line no-console
    console.warn("[data] project list is empty");
  }

  return combined.map((project, index) => ({
    id: project.id ?? `project-${index}`,
    title: project.title ?? "Untitled Project",
    description: project.description ?? "",
    challenge: project.challenge ?? "",
    solution: project.solution ?? "",
    results: project.results ?? [],
    tech_stack: project.tech_stack ?? [],
    featured: project.featured ?? featuredItems.has(project),
    category: project.category ?? "",
    role: project.role ?? "",
    url: project.url ?? "",
  }));
}

export function getFeaturedProjects(): Project[] {
  const raw = projectsJson as ProjectsFile | Project[] | undefined;

  if (Array.isArray(raw)) {
    return raw
      .map((project, index) => ({
        id: project.id ?? `featured-${index}`,
        title: project.title ?? "Untitled Project",
        description: project.description ?? "",
        challenge: project.challenge ?? "",
        solution: project.solution ?? "",
        results: project.results ?? [],
        tech_stack: project.tech_stack ?? [],
        featured: Boolean(project.featured),
        category: project.category ?? "",
        role: project.role ?? "",
        url: project.url ?? "",
      }))
      .filter((project) => project.featured);
  }

  const featured = Array.isArray(raw?.featured_projects) ? raw?.featured_projects ?? [] : [];

  if (!featured.length) {
    // eslint-disable-next-line no-console
    console.warn("[data] featured project list is empty");
  }

  return featured.map((project, index) => ({
    id: project.id ?? `featured-${index}`,
    title: project.title ?? "Untitled Project",
    description: project.description ?? "",
    challenge: project.challenge ?? "",
    solution: project.solution ?? "",
    results: project.results ?? [],
    tech_stack: project.tech_stack ?? [],
    featured: true,
    category: project.category ?? "",
    role: project.role ?? "",
    url: project.url ?? "",
  }));
}
