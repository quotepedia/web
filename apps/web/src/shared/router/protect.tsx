import { createAsync, Navigate, type RouteSectionProps } from "@solidjs/router";
import { JSX, Match, Switch } from "solid-js";
import { getIsLoggedIn } from "~/shared/session";

export function protect(children: (props: RouteSectionProps) => JSX.Element, fallback: string = "/login") {
  return (props: RouteSectionProps) => {
    const redirect = encodeURIComponent(props.location.pathname);
    const isLoggedIn = createAsync(() => getIsLoggedIn(), { deferStream: true });

    return (
      <Switch>
        <Match when={isLoggedIn() === true}>{children(props)}</Match>
        <Match when={isLoggedIn() === false}>
          <Navigate href={`${fallback}?redirect=${redirect}`} />
        </Match>
      </Switch>
    );
  };
}
