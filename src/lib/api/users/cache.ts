import { cache } from "@solidjs/router";

import { $getUserExists } from "./service";

export const getUserExists = cache(async (email: string): Promise<boolean> => {
  "use server";

  const result = await $getUserExists(email);

  return result.data?.exists ?? false;
}, "$getUserExists");
