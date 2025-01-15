export const parseSearchQuery = (value: string | string[] | undefined): string => {
  return Array.isArray(value) ? "" : value || "";
};
