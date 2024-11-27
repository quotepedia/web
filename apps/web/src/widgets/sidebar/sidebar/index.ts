import Group from "./Group";
import GroupLabel from "./GroupLabel";
import Item from "./Item";
import ItemIcon from "./ItemIcon";
import ItemLabel from "./ItemLabel";
import Root from "./Root";

export { Item, ItemIcon, ItemLabel, Root };

export const Sidebar = Object.assign(Root, {
  Group,
  GroupLabel,
  Item,
  ItemIcon,
  ItemLabel,
});
