import { Dynamic, type DynamicProps } from "@corvu/utils/dynamic";
import { createEffect, onCleanup, splitProps, type ParentProps, type ValidComponent } from "solid-js";
import { useGroupPrivateContext } from "./context";
import styles from "./styles";

export type GroupDescriptionBaseProps = ParentProps;

export type GroupDescriptionSharedProps<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends ValidComponent = "p",
> = {
  /**
   * The `class` attribute of the group description element.
   */
  class: string | undefined;
};

export type GroupDescriptionRenderProps = GroupDescriptionSharedProps & {
  id: string | undefined;
};

export type GroupDescriptionProps<T extends ValidComponent = "p"> = GroupDescriptionBaseProps &
  Partial<GroupDescriptionSharedProps<T>>;

export const GroupDescription = <T extends ValidComponent = "p">(props: DynamicProps<T, GroupDescriptionProps<T>>) => {
  const [variantProps, otherProps] = splitProps(props, ["class"]);

  const context = useGroupPrivateContext();

  createEffect(() => {
    context.registerDescriptionId();
    onCleanup(() => context.unregisterDescriptionId());
  });

  return (
    <Dynamic<GroupDescriptionRenderProps>
      as="p"
      // === SharedProps ===
      class={styles().description(variantProps)}
      // === RenderProps ===
      id={context.descriptionId}
      {...otherProps}
    />
  );
};

export default GroupDescription;
