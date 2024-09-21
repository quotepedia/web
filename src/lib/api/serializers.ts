/**
 * Serializes the given object into form data.
 * @param body The object to be serialized into form data.
 * @returns The form data object containing the serialized data.
 */
export function formDataSerializer(body: any): FormData {
  const data = new FormData();
  for (const name in body) {
    data.append(name, body[name]);
  }
  return data;
}
