import { action, json, redirect } from "@solidjs/router";
import { client } from "../instance";
import type { components } from "../types";
import { getQuote, getCurrentUserQuotes } from "./cache";

export const createQuoteAction = action(async (body: components["schemas"]["QuoteCreateRequest"]) => {
  "use server";

  const { data, error } = await client.POST("/quotes/", {
    body: body,
  });

  if (data) {
    return redirect("/library", {
      revalidate: [getCurrentUserQuotes.key],
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

  return redirect("/library/quotes", {
    revalidate: [getCurrentUserQuotes.key, getQuote.keyFor(quote_id)],
  });
}, "delete-quote-action");
