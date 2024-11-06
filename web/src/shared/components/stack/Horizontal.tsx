import { type PolymorphicProps } from "@kobalte/core/polymorphic";
import { splitProps, type ValidComponent } from "solid-js";
import { cn } from "@quotepedia/solid";
import { StackRoot, type StackRootProps } from "./Root";

export type StackHorizontalProps = StackRootProps;

export const StackHorizontal = <T extends ValidComponent = "div">(props: PolymorphicProps<T, StackHorizontalProps>) => {
  const [scopedProps, otherProps] = splitProps(props as StackHorizontalProps, ["class"]);
  return <StackRoot class={cn("flex-row", scopedProps.class)} {...otherProps} />;
};

export default StackHorizontal;
