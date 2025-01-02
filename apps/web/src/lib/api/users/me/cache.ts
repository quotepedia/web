import { query } from "@solidjs/router";
import { client } from "../../instance";

export const getCurrentUser = query(async () => {
  "use server";

  const { data } = await client.GET("/api/v1/users/me");

  return data;
}, "currentUser");
