import { Dynamic, type DynamicProps } from "@corvu/utils/dynamic";
import { mergeProps, splitProps, type ParentProps, type ValidComponent } from "solid-js";
import styles from "./styles";

export type GroupItemGroupBaseProps = ParentProps;

export type GroupItemGroupSharedProps<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends ValidComponent = "div",
> = {
  /**
   * The `role` attribute of the group element.
   * @defaultValue `"presentation"`
   */
  role: "group" | undefined;

  /**
   * The `class` attribute of the group content element.
   */
  class: string | undefined;
};

export type GroupItemGroupRenderProps = GroupItemGroupSharedProps;

export type GroupItemGroupProps<T extends ValidComponent = "div"> = GroupItemGroupBaseProps &
  Partial<GroupItemGroupSharedProps<T>>;

export const GroupItemGroup = <T extends ValidComponent = "div">(props: DynamicProps<T, GroupItemGroupProps<T>>) => {
  const defaultedProps = mergeProps(
    {
      role: "group",
    } satisfies Partial<GroupItemGroupProps<T>>,
    props as GroupItemGroupProps<T>,
  );

  const [variantProps, otherProps] = splitProps(defaultedProps, ["class"]);

  return (
    <Dynamic<GroupItemGroupRenderProps>
      as="div"
      // === SharedProps ===
      class={styles().itemGroup(variantProps)}
      // === RenderProps ===
      {...otherProps}
    />
  );
};

export default GroupItemGroup;
