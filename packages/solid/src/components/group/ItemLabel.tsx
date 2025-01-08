import { Dynamic, type DynamicProps } from "@corvu/utils/dynamic";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";
import styles from "./styles";

export type GroupItemLabelBaseProps = ParentProps;

export type GroupItemLabelSharedProps<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends ValidComponent = "h3",
> = {
  /**
   * The `class` attribute of the group label element.
   */
  class: string | undefined;
};

export type GroupItemLabelRenderProps = GroupItemLabelSharedProps;

export type GroupItemLabelProps<T extends ValidComponent = "h3"> = GroupItemLabelBaseProps &
  Partial<GroupItemLabelSharedProps<T>>;

export const GroupItemLabel = <T extends ValidComponent = "h3">(props: DynamicProps<T, GroupItemLabelProps<T>>) => {
  const [variantProps, otherProps] = splitProps(props, ["class"]);

  return (
    <Dynamic<GroupItemLabelRenderProps>
      as="h3"
      // === SharedProps ===
      class={styles().itemLabel(variantProps)}
      // === RenderProps ===
      {...otherProps}
    />
  );
};

export default GroupItemLabel;
