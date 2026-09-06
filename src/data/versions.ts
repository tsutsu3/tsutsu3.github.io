import { PROJECTS } from "./projects";
import type { Project } from "./types";

const TIMEOUT_MS = 5000;

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

async function getVersion(project: Project): Promise<string | null> {
  if (!project.published) return null;

  switch (project.kind) {
    case "python-lib": {
      const json = await fetchJson<{ info?: { version?: string } }>(
        `https://pypi.org/pypi/${project.pypi}/json`,
      );
      return json?.info?.version ?? null;
    }
    case "npm-lib": {
      const json = await fetchJson<{ version?: string }>(
        `https://registry.npmjs.org/${project.npm}/latest`,
      );
      return json?.version ?? null;
    }
    case "mobile-app": {
      const json = await fetchJson<{ name?: string; tag_name?: string }>(
        `https://api.github.com/repos/tsutsu3/${project.githubRepo}/releases/latest`,
      );
      // Prefer name because tag_name may include a build number, such as "1.10.0_(107)".
      // Remove the leading "v" and trailing "_(NNN)".
      const raw = json?.name || json?.tag_name;
      return raw?.replace(/^v/, "").replace(/_\(\d+\)$/, "") ?? null;
    }
  }
}

let cache: Promise<Record<string, string | null>> | null = null;

export function versions(): Promise<Record<string, string | null>> {
  if (cache !== null) {
    return cache;
  }

  cache = (async () => {
    const entries = await Promise.all(
      PROJECTS.map(async (project) => {
        const version = await getVersion(project);
        return [project.id, version] as const;
      }),
    );

    return Object.fromEntries(entries);
  })();

  return cache;
}
