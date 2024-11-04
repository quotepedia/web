import { type ParentComponent } from "solid-js";

export const SidebarRoot: ParentComponent = (props) => {
  return (
    <nav
      class="flex w-full gap-1 border-bg-tertiary md:bg-bg-default max-md:bg-bg-default/75 py-2 backdrop-blur-xl transition-colors max-md:justify-between max-md:border-t md:flex-col md:px-4 md:pt-6 max-md:pb-safe-or-3"
      {...props}
    />
  );
};

export default SidebarRoot;
