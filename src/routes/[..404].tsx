import { A, type RouteDefinition } from "@solidjs/router";

import { Icon } from "solid-heroicons";
import { homeModern } from "solid-heroicons/solid-mini";

import { Button, Heading, LocaleSwitcher, Lottie } from "~/components";
import { useI18n } from "~/lib/i18n";

export const route = {
  info: {
    title: () => useI18n().t.routes[404].title(),
  },
} satisfies RouteDefinition;

export default function Page() {
  const i18n = useI18n();

  return (
    <main class="m-auto flex flex-col items-center justify-center gap-6 px-4 py-6 text-center">
      <Lottie path="tgs/eyes.json" class="size-24" />

      <hgroup class="space-y-4">
        <Heading>{i18n.t.routes[404].heading()}</Heading>
        <p class="text-sm text-fg-muted">{i18n.t.routes[404].description()}</p>
      </hgroup>

      <section class="flex gap-2">
        <Button as={A} href="/">
          <Icon path={homeModern} width={16} />
          {i18n.t.routes[404].home()}
        </Button>
        <LocaleSwitcher />
      </section>
    </main>
  );
}
