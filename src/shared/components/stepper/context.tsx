import type { Accessor, JSX, Setter } from "solid-js";
import { createContext, useContext } from "solid-js";

/**
 * The context value for the Stepper component.
 */
export type StepperContextValue = {
  /**
   * A map that holds persistent steps, where the key is the step index
   * and the value is an accessor for the corresponding JSX element.
   */
  steps: Map<number, Accessor<JSX.Element>>;

  /**
   * The total number of steps.
   */
  length: number;

  /**
   * A setter function to update the total number of steps.
   */
  setLength: Setter<number>;

  /**
   * The index of the current step.
   */
  currentIndex: number;

  /**
   * The index of the previous step.
   */
  previousIndex: number;

  /**
   * A function to move forward to the next step.
   */
  moveForward: VoidFunction;

  /**
   * Indicates whether the user can move forward to the next step.
   */
  canMoveForward: boolean;

  /**
   * A function to move backward to the previous step.
   */
  moveBackward: VoidFunction;

  /**
   * Indicates whether the user can move backward to the previous step.
   */
  canMoveBackward: boolean;

  /**
   * A function to move to the previous step.
   */
  movePrevious: VoidFunction;

  /**
   * Indicates whether the user can move to the previous step.
   */
  canMovePrevious: boolean;
};

/**
 * The context for the Stepper component, providing access to the stepper state and actions.
 */
export const StepperContext = createContext<StepperContextValue>();

/**
 * A hook to access the stepper context.
 *
 * @throws If used outside of a `<StepperRoot>` component.
 * @returns The current stepper context value.
 */
export const useStepperContext = (): StepperContextValue => {
  const context = useContext(StepperContext);

  if (context === undefined) {
    throw new Error("The 'useStepperContext' must be used within a <StepperRoot> component.");
  }

  return context;
};

export default useStepperContext;
