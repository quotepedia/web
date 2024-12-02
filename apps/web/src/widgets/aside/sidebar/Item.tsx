import { A, type AnchorProps } from "@solidjs/router";
import { type ParentComponent, splitProps } from "solid-js";
import { cn } from "@quotepedia/solid";

export const SidebarItem: ParentComponent<AnchorProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "activeClass"]);
  return (
    <A
      class={cn(
        "flex w-full select-none items-center justify-center gap-1 text-fg-soft",
        "transition-[opacity,color] active:duration-0",
        "max-sm:flex-col",
        "max-lg:pb-safe-or-3 max-lg:pt-2.5",
        "max-lg:hover:opacity-75 max-lg:active:opacity-50",
        "lg:flex-row lg:justify-start lg:gap-2 lg:rounded-lg lg:p-2 lg:hover:bg-bg-secondary",
        local.class,
      )}
      activeClass={cn(
        "lg:!transition-[opacity,color,background-color]",
        "max-lg:!transition-[opacity,color]",
        "max-lg:text-fg-accent lg:text-fg-body lg:bg-bg-tertiary lg:hover:bg-bg-tertiary",
        "max-lg:[&_span]:ring-fg-accent",
        local.activeClass,
      )}
      end={false}
      {...others}
    />
  );
};

export default SidebarItem;
