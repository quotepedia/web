import { getDefaultLocale } from "~/lib/i18n";
import type { Preferences } from "~/lib/preferences";

export const getDefaultSettings = (): Preferences => ({
  locale: getDefaultLocale(),
  theme: "system",
});
