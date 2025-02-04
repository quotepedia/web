import type { components, operations } from "../types";

export type CreateQuoteFormData = {
  content: string;
  author: string;
};

export type Quote = components["schemas"]["QuoteResponse"];

export type QuoteSearchParams = operations["GetCurrentUserQuotes"]["parameters"]["query"];
