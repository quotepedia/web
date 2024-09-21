import { Locale } from "~/lib/i18n";

export const DEFAULT_LOCALE: Locale = "en" as const;

export const SUPPORTED_CULTURES: Record<string, string> = {
  en: "US",
  ru: "RU",
};

export * from "./dict";
export * from "./provider";
export * from "./reactive";
export * from "./types";
export * from "./utils";
