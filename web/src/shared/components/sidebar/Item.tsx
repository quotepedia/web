import { A, AnchorProps } from "@solidjs/router";
import { ParentComponent, splitProps } from "solid-js";
import { cn } from "@quotepedia/solid";

export const SidebarItem: ParentComponent<AnchorProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "activeClass"]);
  return (
    <A
      class={cn(
        "flex w-full select-none items-center justify-center gap-1 text-fg-soft",
        "transition-[opacity,color] active:duration-0",
        "max-sm:flex-col",
        "max-xl:pb-safe-or-3 max-xl:pt-2.5",
        "max-xl:hover:opacity-75 max-xl:active:opacity-50",
        "xl:flex-row xl:justify-start xl:gap-2 xl:rounded-lg xl:p-2 xl:hover:bg-bg-secondary",
        local.class,
      )}
      activeClass={cn(
        "!transition-[opacity,color,background-color]",
        "max-xl:text-fg-accent xl:text-fg-body xl:bg-bg-tertiary xl:hover:bg-bg-tertiary",
        "max-xl:[&_span]:ring-fg-accent",
        local.activeClass,
      )}
      end={false}
      {...others}
    />
  );
};

export default SidebarItem;
