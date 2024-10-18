/**
 * Constructs a complete URL for accessing an uploaded resource on the server.
 *
 * @param id A string representing the unique identifier of the uploaded resource.
 * @returns A string representing the complete URL that points to the uploaded resource.
 */
export const formatResourceURL = (id: string): string => {
  const path = `/media/${id}`;
  const url = new URL(path, import.meta.env.VITE_API_URL);

  return url.href;
};
