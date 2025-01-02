import type { ParentComponent } from "solid-js";

export const SidebarItemLabel: ParentComponent = (props) => {
  return <span class="font-semibold leading-none max-lg:text-sm lg:font-medium lg:leading-none" {...props} />;
};

export default SidebarItemLabel;
