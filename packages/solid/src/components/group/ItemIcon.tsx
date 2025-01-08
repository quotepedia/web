import { Dynamic, type DynamicProps } from "@corvu/utils/dynamic";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";
import Icon from "../icon";
import styles from "./styles";

export type GroupItemIconBaseProps = ParentProps;

export type GroupItemIconSharedProps<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends ValidComponent = typeof Icon,
> = {
  /**
   * The `class` attribute of the group label element.
   */
  class: string | undefined;
};

export type GroupItemIconRenderProps = GroupItemIconSharedProps;

export type GroupItemIconProps<T extends ValidComponent = typeof Icon> = GroupItemIconBaseProps &
  Partial<GroupItemIconSharedProps<T>>;

export const GroupItemIcon = <T extends ValidComponent = typeof Icon>(
  props: DynamicProps<T, GroupItemIconProps<T>>,
) => {
  const [variantProps, otherProps] = splitProps(props, ["class"]);

  return (
    <Dynamic<GroupItemIconRenderProps>
      as={Icon}
      // === SharedProps ===
      class={styles().itemIcon(variantProps)}
      // === RenderProps ===
      {...otherProps}
    />
  );
};

export default GroupItemIcon;
