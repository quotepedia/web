import type { Accessor, Component, JSX } from "solid-js";
import { createMemo, createSignal } from "solid-js";

import { createChildrenProps } from "@src/utils/children";
import { StepperContext, type StepperContextValue } from "./context";

export type StepperRootProps = {
  index?: number;
  children: JSX.Element | ((context: StepperContextValue) => JSX.Element);
};

export const StepperRoot: Component<StepperRootProps> = (props) => {
  const steps = new Map<number, Accessor<JSX.Element>>();
  const [length, setLength] = createSignal(0);
  const register = () => setLength((prev) => prev + 1);
  const unregister = () => setLength((prev) => prev - 1);
  const [currentIndex, setCurrentIndex] = createSignal(props.index || 0);
  const [previousIndex, setPreviousIndex] = createSignal(-1);
  const moveForward = () => canMoveForward() && updateCurrentIndex((i) => i + 1);
  const canMoveForward = createMemo(() => length() - 1 > currentIndex());
  const moveBackward = () => canMoveBackward() && updateCurrentIndex((i) => i - 1);
  const canMoveBackward = createMemo(() => currentIndex() > 0);
  const movePrevious = () => canMovePrevious() && updateCurrentIndex((_) => previousIndex());
  const canMovePrevious = createMemo(() => previousIndex() >= 0 && length() > previousIndex());
  const children = () => createChildrenProps(props.children, context);

  const updateCurrentIndex = (fn: (prev: number) => number) => {
    setCurrentIndex((previous) => {
      const next = fn(previous);
      setPreviousIndex(previous);
      return next;
    });
  };

  const context: StepperContextValue = {
    steps,
    get length() {
      return length();
    },
    setLength,
    register,
    unregister,
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

  return <StepperContext.Provider value={context}>{children()}</StepperContext.Provider>;
};

export default StepperRoot;
