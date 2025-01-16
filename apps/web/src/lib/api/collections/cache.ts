import { query, redirect } from "@solidjs/router";
import { client } from "../instance";
import { RECENT_COLLECTIONS_COUNT } from "./constants";
import type { CollectionSearchParams } from "./types";

export const getCurrentUserCollections = query(async (query?: CollectionSearchParams) => {
  "use server";

  const { data } = await client.GET("/users/me/collections", {
    params: {
      query: query,
    },
  });

  return data;
}, "currentUserCollections");

export const getRecentUserCollections = query(
  async (
    query: CollectionSearchParams = {
      limit: RECENT_COLLECTIONS_COUNT,
    },
  ) => {
    "use server";

    const collections = await getCurrentUserCollections(query);

    return collections?.sort((a, b) => Date.parse(a.updated_at) - Date.parse(b.updated_at));
  },
  "currentUserRecentCollections",
);

export const getCollection = query(async (collection_id: number) => {
  "use server";

  const { data, response } = await client.GET("/collections/{collection_id}", {
    params: {
      path: {
        collection_id: collection_id,
      },
    },
  });

  if (response.status === 404 || response.status === 422) {
    throw redirect("/library/collections", { status: 404 });
  }

  return data;
}, "collection");
