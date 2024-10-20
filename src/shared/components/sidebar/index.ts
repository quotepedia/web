import Item from "./Item";
import ItemIcon from "./ItemIcon";
import ItemLabel from "./ItemLabel";
import Root from "./Root";

export { Item, ItemIcon, ItemLabel, Root };

export const Sidebar = Object.assign(Root, {
  Item,
  ItemIcon,
  ItemLabel,
});
