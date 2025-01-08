import { Dynamic, type DynamicProps } from "@corvu/utils/dynamic";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";
import styles from "./styles";

export type GroupItemDescriptionBaseProps = ParentProps;

export type GroupItemDescriptionSharedProps<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends ValidComponent = "p",
> = {
  /**
   * The `class` attribute of the group label element.
   */
  class: string | undefined;
};

export type GroupItemDescriptionRenderProps = GroupItemDescriptionSharedProps;

export type GroupItemDescriptionProps<T extends ValidComponent = "p"> = GroupItemDescriptionBaseProps &
  Partial<GroupItemDescriptionSharedProps<T>>;

export const GroupItemDescription = <T extends ValidComponent = "p">(
  props: DynamicProps<T, GroupItemDescriptionProps<T>>,
) => {
  const [variantProps, otherProps] = splitProps(props, ["class"]);

  return (
    <Dynamic<GroupItemDescriptionRenderProps>
      as="p"
      // === SharedProps ===
      class={styles().itemDescription(variantProps)}
      // === RenderProps ===
      {...otherProps}
    />
  );
};

export default GroupItemDescription;
