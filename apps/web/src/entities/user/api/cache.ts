import { query } from "@solidjs/router";

import { client } from "~/shared/api";

export const getUserExists = query(async (email: string): Promise<boolean> => {
  "use server";

  const result = await client.POST("/api/v1/users/exists", {
    body: {
      email: email,
    },
  });

  return result.data?.exists ?? false;
}, "$getUserExists");
