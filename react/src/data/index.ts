/* Simple typed data helpers that import JSON files from the
   repository root /data directory. These are not fetched; they are
   imported at build time. If fields are missing, we surface sensible
   fallbacks and warn in the console. */

// Relative paths walk up from /react to repo /data
import resumeJson from "@data/resume.json";
import certificationsJson from "@data/certifications.json";
import projectsJson from "@data/projects.json";

export type Certification = {
  id?: string;
  name?: string;
  issuer?: string;
  date?: string;
  url?: string;
};

export type Project = {
  id?: string;
  title?: string;
  description?: string;
  featured?: boolean;
  tags?: string[];
  url?: string;
};

export type Resume = {
  name?: string;
  title?: string;
  summary?: string;
  experience?: unknown[];
  education?: unknown[];
  skills?: string[];
};

function warnIfMissing<T extends object>(item: T, required: (keyof T)[], context: string) {
  for (const key of required) {
    if (item[key] === undefined || item[key] === null) {
      // eslint-disable-next-line no-console
      console.warn(`[data] ${context} missing field: ${String(key)}`);
    }
  }
}

export function getResume(): Resume {
  const r = (resumeJson as unknown as Resume) ?? {};
  warnIfMissing(r, ["name", "title"], "resume");
  return r;
}

export function getCerts(): Certification[] {
  const list = (certificationsJson as unknown as Certification[]) ?? [];
  return list.map((c) => {
    const item: Certification = {
      id: c.id ?? c.name ?? "cert",
      name: c.name ?? "Untitled Certification",
      issuer: c.issuer ?? "",
      date: c.date ?? "",
      url: c.url ?? "",
    };
    warnIfMissing(item, ["name"], "certification");
    return item;
  });
}

export function getProjects(): Project[] {
  const list = (projectsJson as unknown as Project[]) ?? [];
  return list.map((p, idx) => ({
    id: p.id ?? String(idx),
    title: p.title ?? "Untitled Project",
    description: p.description ?? "",
    featured: Boolean(p.featured),
    tags: p.tags ?? [],
    url: p.url ?? "",
  }));
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured);
}
