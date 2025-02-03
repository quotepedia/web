import { cn, Skeleton } from "@quotepedia/solid";
import { splitProps, type ComponentProps } from "solid-js";

export const CollectionCardSkeleton = (props: ComponentProps<"div">) => {
  const [localProps, otherProps] = splitProps(props, ["class"]);
  return (
    <div
      class={cn(
        "divide-bg-secondary ring-bg-secondary relative flex min-w-56 divide-x rounded-xl ring-1",
        "before:bg-bg-default before:ring-bg-secondary before:absolute before:inset-0",
        "before:-z-10 before:-translate-y-1 before:scale-95 before:rounded-xl before:ring-1",
        localProps.class,
      )}
      {...otherProps}
    >
      <div class="bg-bg-default flex items-center rounded-s-xl p-3">
        <Skeleton opacity={75} class="size-6 rounded-full" />
      </div>
      <div class="bg-bg-body w-full grow space-y-1.5 overflow-hidden rounded-e-xl p-4 ps-3">
        <Skeleton opacity={75} class="h-4 rounded-md" />
        <Skeleton opacity={50} class="h-3.5 w-9/12 rounded-md" />
      </div>
    </div>
  );
};
