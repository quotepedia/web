import { createAsync, Navigate, type RouteDefinition, type RouteSectionProps } from "@solidjs/router";
import { Match, Switch } from "solid-js";
import { getIsLoggedIn } from "~/lib/http";

export const route = {
  preload: () => {
    getIsLoggedIn();
  },
} satisfies RouteDefinition;

export default function Authenticated(props: RouteSectionProps) {
  const isLoggedIn = createAsync(() => getIsLoggedIn(), { deferStream: true });

  return (
    <Switch>
      <Match when={isLoggedIn() === true}>{props.children}</Match>
      <Match when={isLoggedIn() === false}>
        <Navigate href={`/login?redirect=${encodeURIComponent(props.location.pathname)}`} />
      </Match>
    </Switch>
  );
}
