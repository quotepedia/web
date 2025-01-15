import { useSearchParams } from "@solidjs/router";
import { createEffect, createSignal, untrack } from "solid-js";
import { parseSearchQuery } from "./utils";

export const useSearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = createSignal<string>(untrack(() => parseSearchQuery(searchParams.q)));

  createEffect(() => {
    setSearchParams({ q: searchQuery() });
  });

  return [searchQuery, setSearchQuery] as const;
};
