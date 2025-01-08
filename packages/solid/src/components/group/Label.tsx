import { Dynamic, type DynamicProps } from "@corvu/utils/dynamic";
import { createEffect, onCleanup, splitProps, type ParentProps, type ValidComponent } from "solid-js";
import { useGroupPrivateContext } from "./context";
import styles from "./styles";

export type GroupLabelBaseProps = ParentProps;

export type GroupLabelSharedProps<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends ValidComponent = "h2",
> = {
  /**
   * The `class` attribute of the group label element.
   */
  class: string | undefined;
};

export type GroupLabelRenderProps = GroupLabelSharedProps & {
  id: string | undefined;
};

export type GroupLabelProps<T extends ValidComponent = "h2"> = GroupLabelBaseProps & Partial<GroupLabelSharedProps<T>>;

export const GroupLabel = <T extends ValidComponent = "h2">(props: DynamicProps<T, GroupLabelProps<T>>) => {
  const [variantProps, otherProps] = splitProps(props, ["class"]);

  const context = useGroupPrivateContext();

  createEffect(() => {
    context.registerLabelId();
    onCleanup(() => context.unregisterLabelId());
  });

  return (
    <Dynamic<GroupLabelRenderProps>
      as="h2"
      // === SharedProps ===
      class={styles().label(variantProps)}
      // === RenderProps ===
      id={context.labelId}
      {...otherProps}
    />
  );
};

export default GroupLabel;
