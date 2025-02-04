import { query } from "@solidjs/router";
import { client } from "../instance";

export const getAuthor = query(async (name: string) => {
  "use server";

  const { data, error } = await client.GET("/authors/{name}", {
    params: {
      path: {
        name: name,
      },
    },
  });

  return { data, error };
}, "author");
