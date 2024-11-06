import { type PolymorphicProps } from "@kobalte/core/polymorphic";
import { splitProps, type ValidComponent } from "solid-js";
import { cn } from "@quotepedia/solid";
import { StackRoot, type StackRootProps } from "./Root";

export type StackVerticalProps = StackRootProps;

export const StackVertical = <T extends ValidComponent = "div">(props: PolymorphicProps<T, StackVerticalProps>) => {
  const [scopedProps, otherProps] = splitProps(props as StackVerticalProps, ["class"]);
  return <StackRoot class={cn("flex-col", scopedProps.class)} {...otherProps} />;
};

export default StackVertical;
