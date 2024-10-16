import { Title } from "@solidjs/meta";
import { useCurrentMatches, useLocation } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { capitalize } from "~/lib/utils/string/case";

export const DEFAULT_APP_TITLE = capitalize(import.meta.env.APP_NAME)

export const AppTitle = () => {
  const location = useLocation();
  const matches = useCurrentMatches();

  const match = () => matches().find((match) => match.path === location.pathname && match.route.info?.title);
  const [title, setTitle] = createSignal<string>(DEFAULT_APP_TITLE);

  createEffect(() => {
    setTitle(match()?.route.info?.title() ?? DEFAULT_APP_TITLE);
  });

  return <Title>{title()}</Title>;
};
