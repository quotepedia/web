import { cn } from "@quotepedia/solid";
import { splitProps, type ParentProps } from "solid-js";

export type SidebarGroupLabelProps = ParentProps<{
  class?: string;
}>;

export const SidebarGroupLabel = (props: SidebarGroupLabelProps) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <span
      class={cn(
        "text-fg-muted w-full select-none self-start p-2 text-xs font-semibold leading-none max-xl:hidden",
        local.class,
      )}
      {...others}
    />
  );
};

export default SidebarGroupLabel;
