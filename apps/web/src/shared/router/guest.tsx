import { createAsync, Navigate, RouteSectionProps, useSearchParams } from "@solidjs/router";
import { JSX, Match, Switch } from "solid-js";
import { getIsLoggedIn } from "~/shared/http";

export function guest(children: (props: RouteSectionProps) => JSX.Element, fallback: string = "/settings") {
  return (props: RouteSectionProps) => {
    const [params] = useSearchParams();
    const redirect = params.redirect;
    const isLoggedIn = createAsync(() => getIsLoggedIn(), { deferStream: true });

    return (
      <Switch>
        <Match when={isLoggedIn() === false}>{children(props)}</Match>
        <Match when={isLoggedIn() === true}>
          <Navigate href={typeof redirect === "string" && redirect.startsWith("/") ? redirect : fallback} />
        </Match>
      </Switch>
    );
  };
}
