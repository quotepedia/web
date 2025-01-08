import { Dynamic, type DynamicProps } from "@corvu/utils/dynamic";
import { mergeProps, splitProps, type ParentProps, type ValidComponent } from "solid-js";
import styles from "./styles";

export type GroupContentBaseProps = ParentProps;

export type GroupContentSharedProps<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends ValidComponent = "div",
> = {
  /**
   * The `role` attribute of the group element.
   * @defaultValue `"presentation"`
   */
  role: "presentation" | undefined;

  /**
   * The `class` attribute of the group content element.
   */
  class: string | undefined;
};

export type GroupContentRenderProps = GroupContentSharedProps;

export type GroupContentProps<T extends ValidComponent = "div"> = GroupContentBaseProps &
  Partial<GroupContentSharedProps<T>>;

export const GroupContent = <T extends ValidComponent = "div">(props: DynamicProps<T, GroupContentProps<T>>) => {
  const defaultedProps = mergeProps(
    {
      role: "presentation",
    } satisfies Partial<GroupContentProps<T>>,
    props as GroupContentProps<T>,
  );

  const [variantProps, otherProps] = splitProps(defaultedProps, ["class"]);

  return (
    <Dynamic<GroupContentRenderProps>
      as="div"
      // === SharedProps ===
      class={styles().content(variantProps)}
      // === RenderProps ===
      {...otherProps}
    />
  );
};

export default GroupContent;
