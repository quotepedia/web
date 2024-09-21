import { type Theme } from "~/lib/theme";
import { type Locale } from "~/lib/i18n";

export type Preferences = {
  locale?: Locale;
  theme?: Theme;
};
