import { action, json } from "@solidjs/router";
import { client } from "../../instance";
import { serializeFormData } from "../../serializers";
import type { components } from "../../types";
import { getCurrentUser } from "./cache";

export const removeCurrentUserAvatarAction = action(async () => {
  "use server";

  const { data, error } = await client.DELETE("/users/me/avatar");

  return json({ data, error }, { revalidate: getCurrentUser.key });
}, "remove-current-user-avatar-action");

export const updateCurrentUserAvatarAction = action(async (file: File) => {
  "use server";

  const { data, error } = await client.PATCH("/users/me/avatar", {
    body: { file: file },
    bodySerializer: serializeFormData,
  });

  return json({ data, error }, { revalidate: getCurrentUser.key });
}, "update-current-user-avatar-action");

export const updateCurrentUserEmailAction = action(
  async (body: components["schemas"]["CurrentUserEmailUpdateRequest"]) => {
    "use server";

    const { data, error } = await client.PATCH("/users/me/email", { body: body });

    return json({ data, error }, { revalidate: getCurrentUser.key });
  },
  "update-current-user-email-action",
);

export const updateCurrentUserPasswordAction = action(async (body: components["schemas"]["UserPasswordRequest"]) => {
  "use server";

  const { data, error } = await client.PATCH("/users/me/password", { body: body });

  return json({ data, error }, { revalidate: getCurrentUser.key });
}, "update-current-user-password-action");
