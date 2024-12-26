import { query } from "@solidjs/router";
import { client } from "@src/shared/api";

export const getCurrentUser = query(async () => {
  "use server";

  const { data } = await client.GET("/api/v1/users/me");

  return data;
}, "currentUser");
