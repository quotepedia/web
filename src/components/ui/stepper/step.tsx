import { type JSX, type ValidComponent, ParentProps } from "solid-js";
import createPersistent from "~/lib/utils/create/persistent";

import { Polymorphic, PolymorphicProps } from "@kobalte/core";

import { Stepper } from ".";

export const StepperStep = <T extends ValidComponent = "div">(props: PolymorphicProps<T, ParentProps>) => {
  const stepper = Stepper.useContext();

  const getPersistentStep = () => stepper.persistentSteps.get(stepper.currentIndex());

  const createPersistentStep = () => {
    const step = createPersistent(() => <Polymorphic as={"div"} {...props} />);

    stepper.persistentSteps.set(stepper.currentIndex(), step);

    return step;
  };

  const ref = () => getPersistentStep() ?? createPersistentStep();

  return {
    ref: ref,
  } as unknown as JSX.Element;
};
