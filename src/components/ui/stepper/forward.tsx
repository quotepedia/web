import type { ComponentProps, ValidComponent } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { Polymorphic } from "@kobalte/core/polymorphic";

import { useStepper } from "./context";

export type StepperForwardProps<T extends ValidComponent = "button"> = ComponentProps<T>;

export const StepperForward = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, StepperForwardProps<T>>,
) => {
  const context = useStepper();

  return <Polymorphic as="button" onClick={context.moveForward} disabled={!context.canMoveForward} {...props} />;
};
