import type { ParentComponent } from "solid-js";

export const SidebarItemLabel: ParentComponent = (props) => {
  return <span class="text-xs font-semibold leading-none lg:text-sm lg:font-medium lg:leading-none" {...props} />;
};

export default SidebarItemLabel;
