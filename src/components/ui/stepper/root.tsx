import { type JSX, type ParentProps, ValidComponent, createMemo, createSignal } from "solid-js";

import { StepperContext } from "./context";
import { Polymorphic, PolymorphicProps } from "@kobalte/core";

export const StepperRoot = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, ParentProps & { index?: number }>,
) => {
  const [previousIndex, setPreviousIndex] = createSignal(-1);
  const [currentIndex, setCurrentIndex] = createSignal(props.index || 0);
  const [stepsCount, setStepsCount] = createSignal(0);
  const canMoveForward = createMemo(() => stepsCount() - 1 > currentIndex());
  const canMoveBackward = createMemo(() => currentIndex() > 0);
  const canMovePrevious = createMemo(() => previousIndex() >= 0 && stepsCount() > previousIndex());
  const moveForward = () => canMoveForward() && updateCurrentIndex((i) => i + 1);
  const moveBackward = () => canMoveBackward() && updateCurrentIndex((i) => i - 1);
  const movePrevious = () => canMovePrevious() && updateCurrentIndex((_) => previousIndex());

  const updateCurrentIndex = (f: (prev: number) => number) => {
    setCurrentIndex((previous) => {
      const next = f(previous);
      setPreviousIndex(previous);
      return next;
    });
  };

  const value = {
    previousIndex,
    currentIndex,
    setCurrentIndex: updateCurrentIndex,
    stepsCount,
    setStepsCount,
    persistentSteps: new Map<number, () => JSX.Element>(),
    canMoveForward,
    canMoveBackward,
    canMovePrevious,
    moveForward,
    moveBackward,
    movePrevious,
  };

  return (
    <StepperContext.Provider value={value}>
      <Polymorphic as={"div"} {...props} />
    </StepperContext.Provider>
  );
};
