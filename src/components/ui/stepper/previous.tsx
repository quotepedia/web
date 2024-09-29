import type { ComponentProps, ValidComponent } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { Polymorphic } from "@kobalte/core/polymorphic";

import { useStepper } from "./context";

export type StepperPreviousProps<T extends ValidComponent = "button"> = ComponentProps<T>;

export const StepperPrevious = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, StepperPreviousProps<T>>,
) => {
  const context = useStepper();

  return <Polymorphic as="button" onClick={context.movePrevious} disabled={!context.canMovePrevious} {...props} />;
};
