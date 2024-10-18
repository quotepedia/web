import { cache } from "@solidjs/router";

import { $getCurrentUser } from "./service";

export const getCurrentUser = cache(async () => {
  "use server";

  const { data } = await $getCurrentUser();

  return data;
}, "currentUser");
