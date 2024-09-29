import type { JSX, ValidComponent } from "solid-js";
import { createMemo, createSignal } from "solid-js";

import { Polymorphic, PolymorphicProps } from "@kobalte/core/polymorphic";

import { StepperContext } from "./context";

export type StepperRootProps = {
  index?: number;
};

export const StepperRoot = <T extends ValidComponent = "ol">(props: PolymorphicProps<T, StepperRootProps>) => {
  const steps = new Map<number, () => JSX.Element>();
  const [length, setLength] = createSignal(0);
  const [currentIndex, setCurrentIndex] = createSignal(props.index || 0);
  const [previousIndex, setPreviousIndex] = createSignal(-1);
  const moveForward = () => canMoveForward() && updateCurrentIndex((i) => i + 1);
  const canMoveForward = createMemo(() => length() - 1 > currentIndex());
  const moveBackward = () => canMoveBackward() && updateCurrentIndex((i) => i - 1);
  const canMoveBackward = createMemo(() => currentIndex() > 0);
  const movePrevious = () => canMovePrevious() && updateCurrentIndex((_) => previousIndex());
  const canMovePrevious = createMemo(() => previousIndex() >= 0 && length() > previousIndex());

  const updateCurrentIndex = (fn: (prev: number) => number) => {
    setCurrentIndex((previous) => {
      const next = fn(previous);
      setPreviousIndex(previous);
      return next;
    });
  };

  const context = {
    steps,
    get length() {
      return length();
    },
    setLength,
    get currentIndex() {
      return currentIndex();
    },
    get previousIndex() {
      return previousIndex();
    },
    moveForward,
    get canMoveForward() {
      return canMoveForward();
    },
    moveBackward,
    get canMoveBackward() {
      return canMoveBackward();
    },
    movePrevious,
    get canMovePrevious() {
      return canMovePrevious();
    },
  };

  return (
    <StepperContext.Provider value={context}>
      <Polymorphic as={"ol"} {...props} />
    </StepperContext.Provider>
  );
};

export default StepperRoot;
