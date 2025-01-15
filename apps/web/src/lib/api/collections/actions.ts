import { action, json, redirect } from "@solidjs/router";
import { client } from "../instance";
import type { components } from "../types";
import { getCollection, getCurrentUserCollections, getRecentUserCollections } from "./cache";

export const createCollectionAction = action(async (body: components["schemas"]["CollectionCreateRequest"]) => {
  "use server";

  const { data, error } = await client.POST("/collections/", {
    body: body,
  });

  if (data) {
    return redirect(`/library/collections/${data.id}`, {
      revalidate: [getCurrentUserCollections.key, getRecentUserCollections.key],
    });
  }

  return json({ error });
}, "create-collection-action");

export const deleteCollectionAction = action(async (collection_id: number) => {
  "use server";

  await client.DELETE("/collections/{collection_id}", {
    params: {
      path: {
        collection_id: collection_id,
      },
    },
  });

  return redirect("/library/collections", {
    revalidate: [getCurrentUserCollections.key, getRecentUserCollections.key, getCollection.keyFor(collection_id)],
  });
}, "delete-collection-action");
