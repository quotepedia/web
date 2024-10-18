import { type ParentComponent } from "solid-js";

export const SidebarRoot: ParentComponent = (props) => {
  return (
    <nav
      class="flex w-full gap-1 border-bg-tertiary bg-bg-default/75 py-2 backdrop-blur-xl transition-colors max-md:justify-between max-md:border-t md:flex-col md:px-4 md:py-6"
      {...props}
    />
  );
};
