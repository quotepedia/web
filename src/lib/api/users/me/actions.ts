import { action } from "@solidjs/router";

import {
  $removeCurrentUserAvatar,
  $updateCurrentUserAvatar,
  $updateCurrentUserEmail,
  $updateCurrentUserPassword,
} from "./service";
import { CurrentUserEmailUpdateForm } from "./types";

export const removeCurrentUserAvatar = action(async () => {
  "use server";

  await $removeCurrentUserAvatar();
});

export const updateCurrentUserAvatar = action(async (file: File) => {
  "use server";

  const { error, status } = await $updateCurrentUserAvatar(file);

  if (error) {
    return { error, status };
  }
});

export const updateCurrentUserEmail = action(async (body: CurrentUserEmailUpdateForm) => {
  "use server";

  const { data, error } = await $updateCurrentUserEmail(body);

  return { data, error };
});

export const updateCurrentUserPassword = action(async (password: string) => {
  "use server";

  const { data, error } = await $updateCurrentUserPassword(password);

  return { data, error };
});
