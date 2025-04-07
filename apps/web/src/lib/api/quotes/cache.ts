import { query, redirect } from "@solidjs/router";
import { client } from "../instance";
import type { operations } from "../types";
import type { QuoteSearchParams } from "./types";

export const getQuotes = query(async (query?: operations["GetQuotes"]["parameters"]["query"]) => {
  "use server";

  const { data } = await client.GET("/quotes/", {
    params: {
      query: { seed: Math.random() * 2 - 1, ...query },
    },
  });

  return data;
}, "quotes");

export const getCollectionQuotes = query(
  async (collection_id: number, query?: operations["GetCollectionQuotes"]["parameters"]["query"]) => {
    "use server";

    const { data } = await client.GET("/collections/{collection_id}/quotes", {
      params: {
        query: query,
        path: {
          collection_id: collection_id,
        },
      },
    });

    return data;
  },
  "collectionQuotes",
);

export const getQuoteCollectionIds = query(async (quote_id: number) => {
  "use server";

  const { data } = await client.GET("/quotes/{quote_id}/collections", {
    params: {
      path: {
        quote_id: quote_id,
      },
    },
  });

  return data;
}, "quoteCollectionIds");

export const getCurrentUserQuotes = query(async (query?: QuoteSearchParams) => {
  "use server";

  const { data } = await client.GET("/users/me/quotes", {
    params: {
      query: query,
    },
  });

  return data;
}, "currentUserQuotes");

export const getQuote = query(async (quote_id: number) => {
  "use server";

  const { data, response } = await client.GET("/quotes/{quote_id}", {
    params: {
      path: {
        quote_id: quote_id,
      },
    },
  });

  if (response.status === 404 || response.status === 422) {
    throw redirect("/library/quotes", { status: 404 });
  }

  return data;
}, "quote");
