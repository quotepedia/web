import { cn } from "@quotepedia/solid";
import type { ParentComponent } from "solid-js";

export const SidebarRoot: ParentComponent = (props) => {
  return (
    <nav
      class={cn(
        "border-bg-secondary sticky z-30 flex transition-colors",
        "lg:bg-bg-default lg:top-0 lg:h-dvh lg:min-w-80 lg:flex-col lg:gap-6 lg:border-r lg:px-4 lg:pb-6 lg:pt-1",
        "max-lg:bg-bg-default/75 max-lg:bottom-0 max-lg:w-full max-lg:justify-between max-lg:border-t max-lg:backdrop-blur-lg",
      )}
      {...props}
    />
  );
};

export default SidebarRoot;
