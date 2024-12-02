import { Breadcrumbs } from "@kobalte/core/breadcrumbs";
import { Heading } from "@quotepedia/solid";
import { useCurrentMatches, useMatch, type RouteMatch } from "@solidjs/router";
import { Icon } from "solid-heroicons";
import { chevronRight } from "solid-heroicons/solid-mini";
import { createMemo, For, Show, type ComponentProps } from "solid-js";

export const NavRouteMatch = (props: { match: RouteMatch }) => {
  const title = createMemo(() => props.match.route.info?.title?.());
  const match = useMatch(() => props.match.path);
  const current = () => Boolean(match());

  return (
    <li class="text-fg-muted flex select-none items-center gap-1">
      <Breadcrumbs.Link
        href={props.match.path}
        class="hover:text-fg-body data-[current]:text-fg-body transition-colors"
        current={current()}
      >
        <Heading>{title()}</Heading>
      </Breadcrumbs.Link>
      <Show when={!current()}>
        <Breadcrumbs.Separator />
      </Show>
    </li>
  );
};

export const Nav = (props: ComponentProps<"nav">) => {
  const matches = useCurrentMatches();
  const breadcrumbs = () => matches().filter((match) => match.route.info?.title);

  return (
    <Breadcrumbs separator={<Icon class="size-6" path={chevronRight} />} {...props}>
      <ol class="flex gap-1">
        <For each={breadcrumbs()}>{(match) => <NavRouteMatch match={match} />}</For>
      </ol>
    </Breadcrumbs>
  );
};
