import type { ParentComponent } from "solid-js";

export const SidebarItemLabel: ParentComponent = (props) => {
  return <span class="text-xs font-semibold leading-none xl:text-sm xl:font-medium xl:leading-none" {...props} />;
};

export default SidebarItemLabel;
