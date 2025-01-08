import Content, {
  type GroupContentBaseProps as ContentBaseProps,
  type GroupContentProps as ContentProps,
  type GroupContentRenderProps as ContentRenderProps,
  type GroupContentSharedProps as ContentSharedProps,
} from "./Content";
import Description, {
  type GroupDescriptionBaseProps as DescriptionBaseProps,
  type GroupDescriptionProps as DescriptionProps,
  type GroupDescriptionRenderProps as DescriptionRenderProps,
  type GroupDescriptionSharedProps as DescriptionSharedProps,
} from "./Description";
import Item, {
  type GroupItemBaseProps as ItemBaseProps,
  type GroupItemProps as ItemProps,
  type GroupItemRenderProps as ItemRenderProps,
  type GroupItemSharedProps as ItemSharedProps,
} from "./Item";
import ItemChevron, {
  type GroupItemChevronBaseProps as ItemChevronBaseProps,
  type GroupItemChevronProps as ItemChevronProps,
  type GroupItemChevronRenderProps as ItemChevronRenderProps,
  type GroupItemChevronSharedProps as ItemChevronSharedProps,
} from "./ItemChevron";
import ItemDescription, {
  type GroupItemDescriptionBaseProps as ItemDescriptionBaseProps,
  type GroupItemDescriptionProps as ItemDescriptionProps,
  type GroupItemDescriptionRenderProps as ItemDescriptionRenderProps,
  type GroupItemDescriptionSharedProps as ItemDescriptionSharedProps,
} from "./ItemDescription";
import ItemGroup, {
  type GroupItemGroupBaseProps as ItemGroupBaseProps,
  type GroupItemGroupProps as ItemGroupProps,
  type GroupItemGroupRenderProps as ItemGroupRenderProps,
  type GroupItemGroupSharedProps as ItemGroupSharedProps,
} from "./ItemGroup";
import ItemIcon, {
  type GroupItemIconBaseProps as ItemIconBaseProps,
  type GroupItemIconProps as ItemIconProps,
  type GroupItemIconRenderProps as ItemIconRenderProps,
  type GroupItemIconSharedProps as ItemIconSharedProps,
} from "./ItemIcon";
import ItemLabel, {
  type GroupItemLabelBaseProps as ItemLabelBaseProps,
  type GroupItemLabelProps as ItemLabelProps,
  type GroupItemLabelRenderProps as ItemLabelRenderProps,
  type GroupItemLabelSharedProps as ItemLabelSharedProps,
} from "./ItemLabel";
import ItemValue, {
  type GroupItemValueBaseProps as ItemValueBaseProps,
  type GroupItemValueProps as ItemValueProps,
  type GroupItemValueRenderProps as ItemValueRenderProps,
  type GroupItemValueSharedProps as ItemValueSharedProps,
} from "./ItemValue";
import Label, {
  type GroupLabelBaseProps as LabelBaseProps,
  type GroupLabelProps as LabelProps,
  type GroupLabelRenderProps as LabelRenderProps,
  type GroupLabelSharedProps as LabelSharedProps,
} from "./Label";
import Root, {
  type GroupRootBaseProps as RootBaseProps,
  type GroupRootProps as RootProps,
  type GroupRootRenderProps as RootRenderProps,
  type GroupRootSharedProps as RootSharedProps,
} from "./Root";
import useContext, { type GroupContextValue as ContextValue } from "./context";
import styles, { type GroupVariantProps as VariantProps } from "./styles";

export type {
  ContentBaseProps,
  ContentProps,
  ContentRenderProps,
  ContentSharedProps,
  ContextValue,
  DescriptionBaseProps,
  DescriptionProps,
  DescriptionRenderProps,
  DescriptionSharedProps,
  ItemBaseProps,
  ItemChevronBaseProps,
  ItemChevronProps,
  ItemChevronRenderProps,
  ItemChevronSharedProps,
  ItemDescriptionBaseProps,
  ItemDescriptionProps,
  ItemDescriptionRenderProps,
  ItemDescriptionSharedProps,
  ItemGroupBaseProps,
  ItemGroupProps,
  ItemGroupRenderProps,
  ItemGroupSharedProps,
  ItemIconBaseProps,
  ItemIconProps,
  ItemIconRenderProps,
  ItemIconSharedProps,
  ItemLabelBaseProps,
  ItemLabelProps,
  ItemLabelRenderProps,
  ItemLabelSharedProps,
  ItemProps,
  ItemRenderProps,
  ItemSharedProps,
  ItemValueBaseProps,
  ItemValueProps,
  ItemValueRenderProps,
  ItemValueSharedProps,
  LabelBaseProps,
  LabelProps,
  LabelRenderProps,
  LabelSharedProps,
  RootBaseProps,
  RootProps,
  RootRenderProps,
  RootSharedProps,
  VariantProps,
};

export {
  Content,
  Description,
  Item,
  ItemChevron,
  ItemDescription,
  ItemGroup,
  ItemIcon,
  ItemLabel,
  ItemValue,
  Label,
  Root,
  styles,
  useContext,
};

// TODO: Separate and abstract the item component from here

export const Group = Object.assign(Root, {
  Content,
  Description,
  Item,
  ItemChevron,
  ItemDescription,
  ItemGroup,
  ItemIcon,
  ItemLabel,
  ItemValue,
  Label,
  useContext,
});

export default Group;
