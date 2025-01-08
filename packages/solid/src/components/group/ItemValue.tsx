import { Dynamic, type DynamicProps } from "@corvu/utils/dynamic";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";
import styles from "./styles";

export type GroupItemValueBaseProps = ParentProps;

export type GroupItemValueSharedProps<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends ValidComponent = "span",
> = {
  /**
   * The `class` attribute of the group label element.
   */
  class: string | undefined;
};

export type GroupItemValueRenderProps = GroupItemValueSharedProps;

export type GroupItemValueProps<T extends ValidComponent = "span"> = GroupItemValueBaseProps &
  Partial<GroupItemValueSharedProps<T>>;

export const GroupItemValue = <T extends ValidComponent = "span">(props: DynamicProps<T, GroupItemValueProps<T>>) => {
  const [variantProps, otherProps] = splitProps(props, ["class"]);

  return (
    <Dynamic<GroupItemValueRenderProps>
      as="span"
      // === SharedProps ===
      class={styles().itemValue(variantProps)}
      // === RenderProps ===
      {...otherProps}
    />
  );
};

export default GroupItemValue;
