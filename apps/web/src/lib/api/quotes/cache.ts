import { query, redirect } from "@solidjs/router";
import { client } from "../instance";
import type { QuoteSearchParams } from "./types";

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
