import type { ParentComponent } from "solid-js";

export const SidebarItemLabel: ParentComponent = (props) => {
  return <span class="text-xs font-semibold leading-none md:text-sm md:font-medium md:leading-none" {...props} />;
};

export default SidebarItemLabel;
