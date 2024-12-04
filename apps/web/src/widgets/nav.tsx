import { Breadcrumbs } from "@kobalte/core/breadcrumbs";
import { Heading, Link } from "@quotepedia/solid";
import { createMediaQuery } from "@solid-primitives/media";
import { A, useCurrentMatches, useMatch, type RouteMatch } from "@solidjs/router";
import { Icon } from "solid-heroicons";
import { chevronLeft, chevronRight } from "solid-heroicons/solid-mini";
import { createMemo, For, Show } from "solid-js";

export const useBreadcrumbs = () => createMemo(() => useCurrentMatches()().filter((match) => match.route.info?.title));

export const ExpansiveNavigationRouteMatch = (props: { match: RouteMatch }) => {
  const href = createMemo(() => props.match.path);
  const title = createMemo(() => props.match.route.info?.title?.());
  const match = useMatch(() => href());
  const current = () => Boolean(match());

  return (
    <li class="text-fg-muted flex items-center gap-1">
      <Breadcrumbs.Link href={href()} current={current()} class="hover:text-fg-body data-[current]:text-fg-body">
        <Heading>{title()}</Heading>
      </Breadcrumbs.Link>
      <Show when={!current()}>
        <Breadcrumbs.Separator />
      </Show>
    </li>
  );
};

export const ExpansiveNavigation = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <Breadcrumbs separator={<Icon class="size-6" path={chevronRight} />} class="mb-4">
      <ol class="flex gap-1">
        <For each={breadcrumbs()}>{(match) => <ExpansiveNavigationRouteMatch match={match} />}</For>
      </ol>
    </Breadcrumbs>
  );
};

export const CompactNavigation = () => {
  const breadcrumbs = createMemo(() => useBreadcrumbs()().slice(-2));

  const current = createMemo(() => breadcrumbs().at(-1));
  const previous = createMemo(() => breadcrumbs().at(-2));

  return (
    <Show when={breadcrumbs().length > 1} fallback={<Heading class="mb-4">{current()?.route.info?.title?.()}</Heading>}>
      <nav class="relative mb-8 flex text-base leading-none max-lg:-mx-4 max-lg:-mt-4">
        <Link as={A} href={previous()?.path} class="absolute inset-y-1/2 left-0 flex items-center justify-center">
          <Icon path={chevronLeft} class="size-8" />
          {previous()?.route.info?.title?.()}
        </Link>
        <Heading size="base" class="mx-auto">
          {current()?.route.info?.title?.()}
        </Heading>
      </nav>
    </Show>
  );
};

export const Navigation = () => {
  const lg = createMediaQuery("(min-width: 1024px)");

  return <>{lg() ? ExpansiveNavigation() : CompactNavigation()}</>;
};
