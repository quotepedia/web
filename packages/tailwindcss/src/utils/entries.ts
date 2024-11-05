import type { KeyValuePair } from "tailwindcss/types/config";

export const mapFromEntries = (...entries: any[]): KeyValuePair<string, any> => {
  return Object.fromEntries(entries.map((value) => [value, value]));
};
