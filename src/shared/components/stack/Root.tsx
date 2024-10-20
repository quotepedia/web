import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";
import { tv } from "tailwind-variants";

export const styles = tv({
  base: "flex gap-2 items-center justify-center",
});

export type StackRootRenderProps = { class?: string };

export type StackRootProps = ParentProps<StackRootRenderProps>;

export const StackRoot = <T extends ValidComponent = "div">(props: PolymorphicProps<T, StackRootProps>) => {
  const [scopedProps, otherProps] = splitProps(props, ["class"]);
  return <Polymorphic as="div" class={styles(scopedProps)} {...otherProps} />;
};

export default StackRoot;
