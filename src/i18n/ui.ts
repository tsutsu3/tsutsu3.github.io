import type { Lang } from "./lang";

/**
 * ページ共通の文言。
 */
export const UI = {
  en: {
    "site.title": "tsutsu3 | small tools for DNS, Markdown and plain text",
    "site.description":
      "Small tools for DNS, Markdown and plain text. Everything here started as something I needed myself, and stayed small enough to keep maintaining.",
    "site.brand": "tsutsu3",

    "intro.heading": "I make small tools.",
    "intro.lead":
      "Everything here started as something I needed myself, and stayed small enough to keep maintaining. Source, docs and downloads are linked on each one.",

    "notfound.heading": "Page not found",
    "notfound.lead":
      "The page you are looking for could not be found. It may have moved, or the URL may be incorrect.",
    "notfound.home": "Back to the top page",

    "meta.version": "version",
    "meta.status": "status",
    "meta.license": "license",
    "meta.platform": "platform",
    "meta.python": "python",
    "meta.packages": "packages",

    "status.stable": "stable",
    "status.wip": "in development",

    "action.copy": "copy",
    "action.copied": "copied",

    "nav.github": "GitHub",
    "nav.pypi": "PyPI",
    "nav.play": "Google Play",
    "lang.switch": "日本語",

    "footer.note":
      "Bugs and requests go in the issues of each repository. Japanese or English is fine.",
  },

  ja: {
    "site.title": "tsutsu3 | DNS と Markdown、テキストのための小さな道具",
    "site.description":
      "DNS、Markdown、プレーンテキストのための小さなツール。どれも自分で必要になって作り始めたもので、無理なくメンテナンスを続けられる規模に保っています。",
    "site.brand": "tsutsu3",

    "intro.heading": "小さな道具をつくっています。",
    "intro.lead":
      "ここにあるものはすべて、自分自身が必要として作り始めたものです。無理なくメンテナンスを続けられる規模に保っています。各プロジェクトのページから、ソースコード、ドキュメント、ダウンロード先を確認できます。",

    "notfound.heading": "ページが見つかりません",
    "notfound.lead":
      "お探しのページは見つかりませんでした。ページが移動したか、URLが間違っている可能性があります。",
    "notfound.home": "トップページへ戻る",

    "meta.version": "version",
    "meta.status": "status",
    "meta.license": "license",
    "meta.platform": "platform",
    "meta.python": "python",
    "meta.packages": "packages",

    "status.stable": "安定",
    "status.wip": "開発中",

    "action.copy": "コピー",
    "action.copied": "コピーしました",

    "nav.github": "GitHub",
    "nav.pypi": "PyPI",
    "nav.play": "Google Play",
    "lang.switch": "English",

    "footer.note": "不具合や要望は各リポジトリの Issue へ。日本語でも英語でもかまいません。",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof UI)["en"];
