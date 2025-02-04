import { action, json } from "@solidjs/router";
import { client } from "../instance";
import type { components } from "../types";

export const createAuthorAction = action(async (body: components["schemas"]["AuthorCreateRequest"]) => {
  "use server";

  const { data, error } = await client.POST("/authors/", {
    body: body,
  });

  return json({ data, error });
}, "create-author-action");
