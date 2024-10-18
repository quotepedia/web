import { Breadcrumbs } from "@kobalte/core/breadcrumbs";
import { useCurrentMatches, useMatch, type RouteMatch } from "@solidjs/router";
import { Icon } from "solid-heroicons";
import { chevronRight } from "solid-heroicons/solid-mini";
import { createMemo, For, Show, type ComponentProps } from "solid-js";
import { Heading } from "../shared/components/heading";

export const BreadcrumbRouteMatchItem = (props: { match: RouteMatch }) => {
  const title = createMemo(() => props.match.route.info?.title?.());
  const match = useMatch(() => props.match.path);
  const current = () => Boolean(match());

  return (
    <li class="flex select-none items-center gap-1 text-fg-muted">
      <Breadcrumbs.Link
        href={props.match.path}
        class="hover:text-fg-body data-[current]:text-fg-body"
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

export const DynamicBreadcrumbs = (props: ComponentProps<"nav">) => {
  const matches = useCurrentMatches();
  const breadcrumbs = () => matches().filter((match) => match.route.info?.title);

  return (
    <Breadcrumbs separator={<Icon class="size-6" path={chevronRight} />} {...props}>
      <ol class="flex gap-1">
        <For each={breadcrumbs()}>{(match) => <BreadcrumbRouteMatchItem match={match} />}</For>
      </ol>
    </Breadcrumbs>
  );
};
