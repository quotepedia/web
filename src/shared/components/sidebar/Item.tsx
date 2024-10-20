import { A, AnchorProps } from "@solidjs/router";
import { ParentComponent, splitProps } from "solid-js";
import { cn } from "~/shared/utils/css";

export const SidebarItem: ParentComponent<AnchorProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "activeClass"]);
  return (
    <A
      class={cn(
        "flex w-full select-none items-center justify-center gap-1 text-fg-soft",
        "transition-[opacity,color] active:duration-0",
        "max-md:hover:opacity-75 max-md:active:opacity-50",
        "max-sm:flex-col",
        "md:flex-row md:justify-start md:gap-2 md:rounded-lg md:p-2 md:hover:bg-bg-secondary",
        local.class,
      )}
      activeClass={cn(
        "max-md:text-fg-accent md:text-fg-body md:bg-bg-tertiary md:hover:bg-bg-tertiary !transition-[opacity,color,background-color]",
        "[&_span]:max-md:ring-fg-accent",
        local.activeClass,
      )}
      end={false}
      {...others}
    />
  );
};

export default SidebarItem;
