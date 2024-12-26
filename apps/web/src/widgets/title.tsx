import { Title as MetaTitle } from "@solidjs/meta";
import { useCurrentMatches, useLocation } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { useMessage } from "~/shared/i18n";

export const Title = () => {
  const location = useLocation();
  const matches = useCurrentMatches();

  const match = () => matches().find((match) => match.path === location.pathname && match.route.info?.title);
  const [title, setTitle] = createSignal<string>(useMessage("quotepedia"));

  createEffect(() => {
    setTitle(match()?.route.info?.title() ?? useMessage("quotepedia"));
  });

  return <MetaTitle>{title()}</MetaTitle>;
};
