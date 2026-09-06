import type { Project } from "./types";
import { EXTERNAL, PROJECT_HOME } from "./site";

// ============================================================================
// pi-hole-client: Android アプリ
// ============================================================================
const piHoleClient = {
  id: "pi-hole-client",
  name: "pi-hole-client",
  status: "stable",
  license: "MIT",
  published: true,
  kind: "mobile-app",

  home: PROJECT_HOME.piHoleClient,
  platform: "Android",
  githubRepo: "pi-hole-client",

  summary: {
    en: "An Android client for Pi-hole",
    ja: "Pi-hole の Android クライアント",
  },

  links: [
    {
      label: { en: "Docs", ja: "ドキュメント" },
      href: PROJECT_HOME.piHoleClient,
    },
    {
      label: { en: "Google Play", ja: "Google Play" },
      href: EXTERNAL.playStore("io.github.tsutsu3.pi_hole_client"),
    },
    {
      label: { en: "GitHub", ja: "GitHub" },
      href: EXTERNAL.github("pi-hole-client"),
    },
  ],

  body: {
    en: [
      "An Android client for Pi-hole. It shows the statistics, query logs and domain lists of your resolver, and lets you turn blocking on and off without opening the web admin.",
      "You can register several servers and switch between them. Three home screen widgets are included: statistics, a blocking toggle, and a compact combination of the two.",
      "There are guides for the parts that usually go wrong: getting an API token, and getting TLS to work with self-signed certificates or an incomplete certificate chain.",
    ],
    ja: [
      "Pi-hole の Android クライアントです。統計・クエリログ・ドメインリストを見て、ブロックの有効と無効を切り替えられます。web 管理画面を開く必要はありません。",
      "サーバーを複数登録して切り替えられます。ホーム画面ウィジェットは統計・ブロック切り替え・その二つをまとめたコンパクト版の 3 種類です。",
      "つまずきやすいところにはガイドを用意しています。API トークンの取得と、自己署名証明書や中間証明書が欠けている場合の TLS 設定です。",
    ],
  },

  figures: [
    {
      type: "image",
      src: "/feature-image.png",
      width: 1024,
      height: 500,
      alt: {
        en: "Pi-hole client running on Android, showing the statistics screen",
        ja: "Android で動作する Pi-hole client の統計画面",
      },
    },
  ],
} as const satisfies Project;

// ============================================================================
// Markdown Named CodeBlocks: VS Code 拡張 + npm ライブラリ
// ============================================================================
const markdownNamedCodeBlocks = {
  id: "markdown-named-codeblocks",
  name: "Markdown Named CodeBlocks",
  status: "stable",
  license: "MIT",
  published: true,
  kind: "npm-lib",

  home: EXTERNAL.vscode("tsutsu3.markdown-named-codeblocks"),
  npm: "markdown-it-named-code-blocks",

  summary: {
    en: "Named code blocks in the VS Code Markdown preview",
    ja: "VS Code の Markdown プレビューでコードブロックに名前をつける",
  },

  links: [
    {
      label: { en: "Marketplace", ja: "Marketplace" },
      href: EXTERNAL.vscode("tsutsu3.markdown-named-codeblocks"),
    },
    {
      label: { en: "npm", ja: "npm" },
      href: EXTERNAL.npm("markdown-it-named-code-blocks"),
    },
    {
      label: { en: "GitHub", ja: "GitHub" },
      href: EXTERNAL.github("vscode-named-code-blocks"),
    },
  ],

  body: {
    en: [
      "A VS Code extension that renders named code blocks in the Markdown preview. Write a file name after the language in a code fence and it appears as a caption above the block.",
      "The rendering is done by <code>markdown-it-named-code-blocks</code>, a markdown-it plugin published separately on npm. The same output can be produced outside the editor, anywhere markdown-it runs.",
    ],
    ja: [
      "Markdown のコードブロックに名前をつけて、VS Code のプレビューに表示する拡張です。言語名のあとにファイル名を書くと、ブロックの上にキャプションとして表示されます。",
      "描画は <code>markdown-it-named-code-blocks</code> が担当しています。npm に別途公開している markdown-it プラグインなので、エディタの外でも markdown-it が動く環境なら同じ出力が得られます。",
    ],
  },

  figures: [
    {
      type: "code",
      caption: "example.md",
      lang: "markdown",
      // テンプレートリテラルだとバッククォートの escape が必要になるので配列で組む
      code: ["```js:src/app.js", 'console.log("hello");', "```"].join("\n"),
    },
  ],

  packages: [
    {
      name: "tsutsu3.markdown-named-codeblocks",
      desc: { en: "VS Code extension", ja: "VS Code 拡張" },
      href: EXTERNAL.vscode("tsutsu3.markdown-named-codeblocks"),
    },
    {
      name: "markdown-it-named-code-blocks",
      desc: { en: "markdown-it plugin", ja: "markdown-it プラグイン" },
      href: EXTERNAL.npm("markdown-it-named-code-blocks"),
    },
  ],

  install: "npm i markdown-it-named-code-blocks",
} as const satisfies Project;

// ============================================================================
// linkify-it-py: Python ライブラリ
// ============================================================================
const linkifyItPy = {
  id: "linkify-it-py",
  name: "linkify-it-py",
  status: "stable",
  license: "MIT",
  published: true,
  kind: "python-lib",

  home: EXTERNAL.pypi("linkify-it-py"),
  pypi: "linkify-it-py",
  python: "3.10+",

  summary: {
    en: "Find URLs and email addresses in plain text, in Python",
    ja: "プレーンテキストから URL とメールアドレスを見つける Python ライブラリ",
  },

  links: [
    { label: { en: "Demo", ja: "デモ" }, href: PROJECT_HOME.linkifyItPyDemo },
    {
      label: { en: "Docs", ja: "ドキュメント" },
      href: PROJECT_HOME.linkifyItPyDocs,
    },
    { label: { en: "PyPI", ja: "PyPI" }, href: EXTERNAL.pypi("linkify-it-py") },
    {
      label: { en: "GitHub", ja: "GitHub" },
      href: EXTERNAL.github("linkify-it-py"),
    },
  ],

  body: {
    en: [
      "Finds URLs and email addresses in plain text, with Unicode support. A port of the JavaScript <code>linkify-it</code>, and the autolinking engine behind <code>markdown-it-py</code>.",
      "It catches bare hosts like <code>example.com</code> that have no scheme. The upstream test suite is ported as-is, so behaviour matches the original.",
      `There is a <a href="${PROJECT_HOME.linkifyItPyDemo}">live demo</a> if you want to try it in the browser first.`,
    ],
    ja: [
      "プレーンテキストから URL とメールアドレスを見つけるライブラリです。Unicode に対応しています。JavaScript の <code>linkify-it</code> を移植したもので、<code>markdown-it-py</code> の自動リンク処理にも使われています。",
      "スキームのない <code>example.com</code> のようなホスト名も検出します。上流のテストスイートをそのまま移植しているため、挙動もオリジナルと揃っています。",
      `<a href="${PROJECT_HOME.linkifyItPyDemo}">デモページ</a>で、ブラウザから試すこともできます。`,
    ],
  },

  figures: [
    {
      type: "code",
      caption: "example.py",
      lang: "python",
      code: `from linkify_it import LinkifyIt

linkify = LinkifyIt()

linkify.match("Site tsutsu3.com")
# [linkify_it.main.Match({
#     'schema': '',
#     'index': 5,
#     'last_index': 16,
#     'raw': 'tsutsu3.com',
#     'text': 'tsutsu3.com',
#     'url': 'http://tsutsu3.com'
# })]`,
    },
  ],

  install: "pip install linkify-it-py",
} as const satisfies Project;

// ============================================================================
// unbound-admin: 未公開。一覧行のみ。
// 公開したら published: true にして home / links / body / kind を足す。
// 足りないフィールドは astro check が全部教えてくれる。
// ============================================================================
const unboundAdmin = {
  id: "unbound-admin",
  name: "unbound-admin",
  status: "wip",
  license: "MIT",
  published: false,

  summary: {
    en: "A GUI frontend for Unbound",
    ja: "Unbound の GUI フロントエンド",
  },
  note: {
    en: "in development, not released yet",
    ja: "開発中で未公開",
  },
} as const satisfies Project;

/** 掲載順。index テーブルとセクションの両方がこの順に従う。 */
export const PROJECTS: readonly Project[] = [
  piHoleClient,
  markdownNamedCodeBlocks,
  linkifyItPy,
  unboundAdmin,
];
