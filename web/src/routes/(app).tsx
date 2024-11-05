import Resizable from "@corvu/resizable";
import { cookieStorage, makePersisted } from "@solid-primitives/storage";
import type { RouteSectionProps } from "@solidjs/router";
import { createSignal } from "solid-js";
import { Container } from "~/shared/components";
import { makeBroadcastChannelSync } from "~/shared/utils/storage";
import { Aside } from "~/widgets/aside";
import { DynamicBreadcrumbs } from "~/widgets/breadcrumbs";

export default function SidebarRouteSection(props: RouteSectionProps) {
  const [sizes, setSizes] = makePersisted(createSignal<number[]>([0.2, 0.8]), {
    storage: cookieStorage,
    name: "sidebar-sizes",
    storageOptions: {
      path: "/",
      secure: /true/i.test(import.meta.env.VITE_SECURE_COOKIES),
      sameSite: "Lax",
    },
    sync: makeBroadcastChannelSync(`sync-sidebar-sizes`),
  });

  return (
    <Resizable
      onSizesChange={(arr) => arr.length && arr[0] >= 0 && arr[1] >= 0 && setSizes(arr)}
      sizes={sizes()}
      class="relative flex w-full max-xl:!flex-col-reverse"
    >
      <Resizable.Panel
        as={"aside"}
        initialSize={sizes()[0]}
        minSize={0.15}
        maxSize={0.3}
        collapsible
        class="sticky z-10 flex w-full max-xl:bottom-0 max-xl:!flex-none xl:top-0 xl:max-h-dvh xl:min-h-dvh xl:data-[collapsed]:hidden"
      >
        <Aside />
      </Resizable.Panel>
      <Resizable.Handle class="group z-10 -mx-4 basis-px px-4 outline-none max-xl:!hidden">
        <div class="relative h-full w-px bg-bg-tertiary transition-colors before:absolute before:right-0 before:z-20 before:h-full before:w-0.5 before:transition-colors after:absolute after:left-0 after:z-20 after:h-full after:w-0.5 after:transition-colors group-hover:bg-ring-accent group-hover:before:bg-ring-accent group-hover:after:bg-ring-accent group-focus-visible:bg-ring-accent group-focus-visible:before:bg-ring-accent group-focus-visible:after:bg-ring-accent group-data-[dragging]:bg-ring-accent/50 group-data-[dragging]:before:bg-ring-accent/50 group-data-[dragging]:after:bg-ring-accent/50" />
      </Resizable.Handle>
      <Resizable.Panel initialSize={sizes()[1]} minSize={0.2} class="max-xl:grow">
        <Container size="wide">
          <DynamicBreadcrumbs class="mb-6" />

          {props.children}
        </Container>
      </Resizable.Panel>
    </Resizable>
  );
}
