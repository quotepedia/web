import { Title as MetaTitle } from "@solidjs/meta";
import { useCurrentMatches, useLocation } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { capitalize } from "~/shared/utils/string/case";

export const DEFAULT_APP_TITLE = capitalize(import.meta.env.APP_NAME);

export const Title = () => {
  const location = useLocation();
  const matches = useCurrentMatches();

  const match = () => matches().find((match) => match.path === location.pathname && match.route.info?.title);
  const [title, setTitle] = createSignal<string>(DEFAULT_APP_TITLE);

  createEffect(() => {
    setTitle(match()?.route.info?.title() ?? DEFAULT_APP_TITLE);
  });

  return <MetaTitle>{title()}</MetaTitle>;
};
