import { DEFAULT_LANG, type Lang } from "./lang";
import { UI, type UIKey } from "./ui";

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => UI[lang][key];
}

/**
 * Create locale path
 *   localizePath("/", "en") -> "/"
 *   localizePath("/", "ja") -> "/ja/"
 */
export function localizePath(path: string, lang: Lang): string {
  return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}

// Only two languages are supported, so return the other one.
export const otherLang = (lang: Lang): Lang => (lang === "ja" ? "en" : "ja");

/** og:locale tag */
export const LOCALE_TAG: Record<Lang, string> = {
  en: "en_US",
  ja: "ja_JP",
};
