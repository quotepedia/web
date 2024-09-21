import { createAsync, Navigate, useSearchParams, type RouteDefinition, type RouteSectionProps } from "@solidjs/router";
import { Match, Show, Switch } from "solid-js";
import { getIsLoggedIn } from "~/lib/http";

export const route = {
  preload: () => {
    getIsLoggedIn();
  },
} satisfies RouteDefinition;

export default function Unauthenticated(props: RouteSectionProps) {
  const [searchParams] = useSearchParams();

  const isLoggedIn = createAsync(() => getIsLoggedIn(), { deferStream: true });

  return (
    <Switch>
      <Match when={isLoggedIn() === false || isLoggedIn() === undefined}>{props.children}</Match>
      <Match when={isLoggedIn() === true}>
        <Show when={searchParams.redirect} fallback={<Navigate href="/" />}>
          {(pathname) => <Navigate href={pathname()} />}
        </Show>
      </Match>
    </Switch>
  );
}
