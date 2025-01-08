import { Dynamic, type DynamicProps } from "@corvu/utils/dynamic";
import type { IconifyIcon } from "@iconify-icon/solid";
import { mergeProps, splitProps, type ParentProps, type ValidComponent } from "solid-js";
import Icon from "../icon";
import styles from "./styles";

export type GroupItemChevronBaseProps = ParentProps;

export type GroupItemChevronSharedProps<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends ValidComponent = typeof Icon,
> = {
  /**
   * The `class` attribute of the group label element.
   */
  class: string | undefined;
  icon: string | IconifyIcon;
};

export type GroupItemChevronRenderProps = GroupItemChevronSharedProps;

export type GroupItemChevronProps<T extends ValidComponent = typeof Icon> = GroupItemChevronBaseProps &
  Partial<GroupItemChevronSharedProps<T>>;

export const GroupItemChevron = <T extends ValidComponent = typeof Icon>(
  props: DynamicProps<T, GroupItemChevronProps<T>>,
) => {
  const defaultedProps = mergeProps(
    {
      icon: "f7:chevron-right",
    } satisfies Partial<GroupItemChevronProps<T>>,
    props as GroupItemChevronProps<T>,
  );

  const [variantProps, otherProps] = splitProps(defaultedProps, ["class"]);

  return (
    <Dynamic<GroupItemChevronRenderProps>
      as={Icon}
      // === SharedProps ===
      class={styles().itemChevron(variantProps)}
      // === RenderProps ===
      {...otherProps}
    />
  );
};

export default GroupItemChevron;
