
export const SUPPORTED_THEMES = ["light", "dark", "night", "system"] as const;
export type Theme = typeof SUPPORTED_THEMES[number];
