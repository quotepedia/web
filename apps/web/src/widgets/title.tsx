import { Title as MetaTitle } from "@solidjs/meta";
import { useCurrentMatches, useLocation } from "@solidjs/router";
import { useMessage } from "@src/shared/i18n";
import { createEffect, createSignal } from "solid-js";

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
