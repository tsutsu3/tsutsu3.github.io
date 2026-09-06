export const SITE = {
  ogImage: "/feature-image.png",
  ogImageWidth: 1024,
  ogImageHeight: 500,
} as const;

const GITHUB_USER = "tsutsu3";

export const EXTERNAL = {
  githubUser: `https://github.com/${GITHUB_USER}`,
  github: (repo: string) => `https://github.com/${GITHUB_USER}/${repo}`,

  pypiUser: `https://pypi.org/user/${GITHUB_USER}/`,
  pypi: (pkg: string) => `https://pypi.org/project/${pkg}/`,

  playStoreDev: "https://play.google.com/store/apps/dev?id=6361332835436080962",
  playStore: (appId: string) => `https://play.google.com/store/apps/details?id=${appId}`,

  npm: (pkg: string) => `https://www.npmjs.com/package/${pkg}`,

  vscode: (id: string) => `https://marketplace.visualstudio.com/items?itemName=${id}`,
} as const;

/** 各プロジェクトの「正」の URL。ドメイン移行時はここを差し替える。 */
export const PROJECT_HOME = {
  piHoleClient: "https://pi-hole-client.tsutsu3.com/",
  linkifyItPyDemo: "https://linkify-it-py-demo.vercel.app/",
  linkifyItPyDocs: "https://linkify-it-py.readthedocs.io/en/latest/",
} as const;
