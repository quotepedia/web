import { query } from "@solidjs/router";
import { client } from "../instance";

export const getUserExists = query(async (email: string): Promise<boolean> => {
  "use server";

  const result = await client.POST("/users/exists", {
    body: {
      email: email,
    },
  });

  return result.data?.exists ?? false;
}, "$getUserExists");
