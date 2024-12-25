import { Icon, Heading, Link } from "@quotepedia/solid";
import { A, useCurrentMatches } from "@solidjs/router";
import { createMemo, Show } from "solid-js";

export const Navigation = () => {
  const breadcrumbs = createMemo(() =>
    useCurrentMatches()()
      .filter((match) => match.route.info?.title)
      .slice(-2),
  );

  const current = createMemo(() => breadcrumbs().at(-1));
  const previous = createMemo(() => breadcrumbs().at(-2));

  return (
    <Show when={breadcrumbs().length > 1} fallback={<Heading class="mb-4">{current()?.route.info?.title?.()}</Heading>}>
      <nav class="relative mb-8 flex leading-none max-lg:-mx-4 max-lg:-mt-4">
        <Link as={A} href={previous()?.path} class="absolute inset-y-1/2 left-0 flex items-center justify-center">
          <Icon icon="f7:chevron-left" class="size-6" />
          {previous()?.route.info?.title?.()}
        </Link>
        <Heading size="base" class="mx-auto">
          {current()?.route.info?.title?.()}
        </Heading>
      </nav>
    </Show>
  );
};
