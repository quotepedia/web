import { action } from "@solidjs/router";
import { type components, client, serializeFormData } from "@src/shared/api";

export const removeCurrentUserAvatar = action(async () => {
  "use server";

  const { data, error } = await client.DELETE("/api/v1/users/me/avatar");

  return { data, error };
});

export const updateCurrentUserAvatar = action(async (file: File) => {
  "use server";

  const { data, error } = await client.PATCH("/api/v1/users/me/avatar", {
    body: { file: file },
    bodySerializer: serializeFormData,
  });

  return { data, error };
});

export const updateCurrentUserEmail = action(async (body: components["schemas"]["CurrentUserEmailUpdateRequest"]) => {
  "use server";

  const { data, error } = await client.PATCH("/api/v1/users/me/email", { body: body });

  return { data, error };
});

export const updateCurrentUserPassword = action(async (body: components["schemas"]["UserPasswordRequest"]) => {
  "use server";

  const { data, error } = await client.PATCH("/api/v1/users/me/password", { body: body });

  return { data, error };
});
