import { action } from "@solidjs/router";
import { client } from "../../instance";
import { serializeFormData } from "../../serializers";
import type { components } from "../../types";

export const removeCurrentUserAvatarAction = action(async () => {
  "use server";

  const { data, error } = await client.DELETE("/users/me/avatar");

  return { data, error };
});

export const updateCurrentUserAvatarAction = action(async (file: File) => {
  "use server";

  const { data, error } = await client.PATCH("/users/me/avatar", {
    body: { file: file },
    bodySerializer: serializeFormData,
  });

  return { data, error };
});

export const updateCurrentUserEmailAction = action(async (body: components["schemas"]["CurrentUserEmailUpdateRequest"]) => {
  "use server";

  const { data, error } = await client.PATCH("/users/me/email", { body: body });

  return { data, error };
});

export const updateCurrentUserPasswordAction = action(async (body: components["schemas"]["UserPasswordRequest"]) => {
  "use server";

  const { data, error } = await client.PATCH("/users/me/password", { body: body });

  return { data, error };
});
