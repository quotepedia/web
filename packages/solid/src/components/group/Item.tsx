import { Dynamic, type DynamicProps } from "@corvu/utils/dynamic";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";
import styles from "./styles";
import { cn } from "@src/utils/css";

export type GroupItemBaseProps = ParentProps<{
  hoverable?: boolean;
}>;

export type GroupItemSharedProps<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends ValidComponent = "div",
> = {
  /**
   * The `class` attribute of the group label element.
   */
  class: string | undefined;
};

export type GroupItemRenderProps = GroupItemSharedProps;

export type GroupItemProps<T extends ValidComponent = "div"> = GroupItemBaseProps & Partial<GroupItemSharedProps<T>>;

export const GroupItem = <T extends ValidComponent = "div">(props: DynamicProps<T, GroupItemProps<T>>) => {
  const [variantProps, localProps, otherProps] = splitProps(props, ["class"], ["hoverable"]);

  return (
    <Dynamic<GroupItemRenderProps>
      as="div"
      // === SharedProps ===
      class={cn(
        styles().item(variantProps),
        props.hoverable && [
          "cursor-pointer outline-none transition-[border-color,background-color,opacity] active:duration-0",
          "hover:bg-bg-secondary active:bg-bg-secondary focus-visible:bg-bg-secondary hover:bg-opacity-50",
          "aria-busy:animate-pulse aria-busy:cursor-progress",
          "disabled:cursor-default disabled:opacity-50 data-[checked]:cursor-default data-[disabled]:cursor-default data-[disabled]:opacity-50",
        ],
      )}
      // === RenderProps ===
      {...otherProps}
    />
  );
};

export default GroupItem;
