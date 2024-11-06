import { type ParentComponent } from "solid-js";

export const SidebarRoot: ParentComponent = (props) => {
  return (
    <nav
      class="flex w-full gap-1 border-bg-tertiary xl:bg-bg-default max-xl:bg-bg-default/75 backdrop-blur-xl transition-colors max-xl:justify-between max-xl:border-t xl:flex-col xl:px-4 xl:py-6"
      {...props}
    />
  );
};

export default SidebarRoot;