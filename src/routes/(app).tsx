import { Sidebar } from "~/components";

import Resizable from "@corvu/resizable";
import { cookieStorage, makePersisted } from "@solid-primitives/storage";
import type { RouteSectionProps } from "@solidjs/router";
import { createSignal } from "solid-js";
import { DynamicBreadcrumbs } from "~/components/Breadcrumbs";
import { makeBroadcastChannelSync } from "~/lib/utils/storage";

export default function SidebarRouteSection(props: RouteSectionProps) {
  const [sizes, setSizes] = makePersisted(createSignal<number[]>([0.2, 0.8]), {
    storage: cookieStorage,
    name: "sidebar-sizes",
    storageOptions: {
      secure: /true/i.test(import.meta.env.VITE_SECURE_COOKIES),
      sameSite: "Lax",
      path: "/",
    },
    sync: makeBroadcastChannelSync(`sync-sidebar-sizes`),
  });

  return (
    <Resizable
      onSizesChange={(arr) => arr.length && arr[0] >= 0 && arr[1] >= 0 && setSizes(arr)}
      sizes={sizes()}
      class="relative flex w-full max-md:!flex-col-reverse"
    >
      <Resizable.Panel
        as={"aside"}
        initialSize={sizes()[0]}
        minSize={0.15}
        maxSize={0.3}
        collapsible
        class="sticky z-10 flex w-full max-md:bottom-0 max-md:!flex-none md:top-0 md:max-h-dvh md:min-h-dvh md:data-[collapsed]:hidden"
      >
        <Sidebar />
      </Resizable.Panel>
      <Resizable.Handle class="group z-10 -mx-4 basis-px px-4 outline-none max-md:!hidden">
        <div class="relative h-full w-px bg-bg-tertiary transition-colors before:absolute before:right-0 before:z-20 before:h-full before:w-0.5 before:transition-colors after:absolute after:left-0 after:z-20 after:h-full after:w-0.5 after:transition-colors group-hover:bg-ring-accent group-hover:before:bg-ring-accent group-hover:after:bg-ring-accent group-focus-visible:bg-ring-accent group-focus-visible:before:bg-ring-accent group-focus-visible:after:bg-ring-accent group-data-[dragging]:bg-ring-accent/50 group-data-[dragging]:before:bg-ring-accent/50 group-data-[dragging]:after:bg-ring-accent/50" />
      </Resizable.Handle>
      <Resizable.Panel
        initialSize={sizes()[1]}
        minSize={0.2}
        as="main"
        class="mx-auto size-full max-w-3xl px-3 py-6 max-md:!flex-1 md:px-6"
      >
        <DynamicBreadcrumbs class="mb-6" />

        {props.children}
      </Resizable.Panel>
    </Resizable>
  );
}
