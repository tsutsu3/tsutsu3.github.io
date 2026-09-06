export const LOCALES = ["en", "ja"] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LANG: Lang = "en";

export type Localized<T> = Record<Lang, T>;
