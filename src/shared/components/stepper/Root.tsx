import type { JSX, ParentProps } from "solid-js";
import { createMemo, createSignal } from "solid-js";

import { StepperContext } from "./context";

export type StepperRootProps = ParentProps & {
  index?: number;
};

export const StepperRoot = (props: StepperRootProps) => {
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

  return <StepperContext.Provider value={context}>{props.children}</StepperContext.Provider>;
};

export default StepperRoot;
