import { type Accessor, type JSX, type Setter, createContext, useContext } from "solid-js";

/**
 * The context value for the Stepper component.
 */
export type StepperContextValue = {
  /**
   * An accessor for the index of the previous step.
   */
  previousIndex: Accessor<number>;

  /**
   * An accessor for the index of the current step.
   */
  currentIndex: Accessor<number>;

  /**
   * A setter function to update the current step index.
   */
  setCurrentIndex: Setter<number>;

  /**
   * An accessor for the total number of steps.
   */
  stepsCount: Accessor<number>;

  /**
   * A setter function to update the total number of steps.
   */
  setStepsCount: Setter<number>;

  /**
   * A map that holds persistent steps, where the key is the step index
   * and the value is an accessor for the corresponding JSX element.
   */
  persistentSteps: Map<number, Accessor<JSX.Element>>;

  /**
   * An accessor that indicates whether the user can move forward to the next step.
   */
  canMoveForward: Accessor<boolean>;

  /**
   * An accessor that indicates whether the user can move backward to the previous step.
   */
  canMoveBackward: Accessor<boolean>;

  /**
   * An accessor that indicates whether the user can move to the previous step.
   */
  canMovePrevious: Accessor<boolean>;

  /**
   * A function to move forward to the next step.
   */
  moveForward: () => void;

  /**
   * A function to move backward to the previous step.
   */
  moveBackward: () => void;

  /**
   * A function to move to the previous step.
   */
  movePrevious: () => void;
};

/**
 * The context for the Stepper component, providing access to the stepper state and actions.
 */
export const StepperContext = createContext<StepperContextValue>();

/**
 * A custom hook to access the Stepper context.
 *
 * @throws If used outside of a Stepper component.
 * @returns The current Stepper context value.
 */
export const useStepper = (): StepperContextValue => {
  const context = useContext(StepperContext);

  if (context === undefined) {
    throw new Error(`'useStepper' must be used within a 'Stepper' component.`);
  }

  return context;
};
