import Horizontal, { type StackHorizontalProps as HorizontalProps } from "./Horizontal";
import Root, { type StackRootProps as RootProps } from "./Root";
import Vertical, { type StackVerticalProps as VerticalProps } from "./Vertical";

export type { HorizontalProps, RootProps, VerticalProps };

export { Horizontal, Root, Vertical };

export const Stack = Object.assign(Root, {
  Horizontal,
  Vertical,
});

export default Stack;
