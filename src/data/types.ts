import type { Localized } from "@/i18n/lang";

/** 「今すぐ使えるか」だけを表す。活動度は扱わない。 */
export type Status = "stable" | "wip";

export interface LinkRef {
  label: Localized<string>;
  href: string;
}

export interface SubPackage {
  name: string;
  desc: Localized<string>;
  href?: string;
}

export type CodeLang = "python" | "markdown" | "shellsession" | "json" | "js" | "ts";

export interface CodeBlock {
  type: "code";
  caption: string;
  lang: CodeLang;
  code: string;
}

export interface ImageBlock {
  type: "image";
  src: string;
  width: number;
  height: number;
  alt: Localized<string>;
}

export type Figure = CodeBlock | ImageBlock;

interface ProjectCore {
  id: string;
  name: string;
  status: Status;
  license: string;
  summary: Localized<string>;
}

interface UnpublishedProject extends ProjectCore {
  published: false;
  note: Localized<string>;
}

interface PublishedCore extends ProjectCore {
  published: true;
  home: string;
  links: readonly LinkRef[];
  body: Localized<readonly string[]>;
  figures: readonly Figure[];
}

interface MobileApp extends PublishedCore {
  kind: "mobile-app";
  platform: string;
  /** https://api.github.com/repos/tsutsu3/<githubRepo>/releases/latest */
  githubRepo: string;
}

interface PythonLib extends PublishedCore {
  kind: "python-lib";
  /** https://pypi.org/pypi/<pypi>/json */
  pypi: string;
  python: string;
  install: string;
}

interface NpmLib extends PublishedCore {
  kind: "npm-lib";
  /** https://registry.npmjs.org/<npm>/latest */
  npm: string;
  packages: readonly SubPackage[];
  install: string;
}

export type PublishedProject = MobileApp | PythonLib | NpmLib;
export type Project = UnpublishedProject | PublishedProject;
