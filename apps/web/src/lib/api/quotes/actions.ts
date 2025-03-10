import { action, json, redirect, revalidate } from "@solidjs/router";
import { client } from "../instance";
import type { components } from "../types";
import { getQuote, getCurrentUserQuotes, getQuotes, getCollectionQuotes, getQuoteCollectionIds } from "./cache";
import { getCollection, getCollections, getRecentCollections, getRecentUserCollections } from "../collections";

export const createQuoteAction = action(async (body: components["schemas"]["QuoteCreateRequest"]) => {
  "use server";

  const { data, error } = await client.POST("/quotes/", {
    body: body,
  });

  if (data) {
    return redirect("/library", {
      revalidate: [getCurrentUserQuotes.key, getQuotes.key, getCollectionQuotes.key],
    });
  }

  return json({ error });
}, "create-quote-action");

export const deleteQuoteAction = action(async (quote_id: number) => {
  "use server";

  await client.DELETE("/quotes/{quote_id}", {
    params: {
      path: {
        quote_id: quote_id,
      },
    },
  });

  return revalidate([getCurrentUserQuotes.key, getQuote.keyFor(quote_id), getQuotes.key, getCollectionQuotes.key]);
}, "delete-quote-action");

export const updateQuoteCollectionIdsAction = action(async (quote_id: number, collection_ids: number[]) => {
  "use server";

  await client.PATCH("/quotes/{quote_id}/collections", {
    params: {
      path: {
        quote_id: quote_id,
      },
    },
    body: {
      collection_ids: collection_ids,
    },
  });

  return revalidate([
    getQuoteCollectionIds.key,
    getRecentCollections.key,
    getRecentUserCollections.key,
    getCollection.key,
    getCollections.key,
  ]);
}, "update-quote-collection-ids-action");
