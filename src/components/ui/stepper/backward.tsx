import type { ComponentProps, ValidComponent } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { Polymorphic } from "@kobalte/core/polymorphic";

import useStepperContext from "./context";

export type StepperBackwardProps<T extends ValidComponent = "button"> = ComponentProps<T>;

export const StepperBackward = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, StepperBackwardProps<T>>,
) => {
  const context = useStepperContext();

  return <Polymorphic as="button" onClick={context.moveBackward} disabled={!context.canMoveBackward} {...props} />;
};

export default StepperBackward;
