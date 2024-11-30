import OtpField from "corvu/otp-field";
import type { Accessor } from "solid-js";
import type { TransitionProps } from "solid-transition-group";
import easing from "../transition/easing";

export const SLOT_SHOWN_PROPERTIES = {
  scale: 1,
  opacity: 1,
  transform: "translateY(0%)",
};

export const SLOT_HIDDEN_PROPERTIES = {
  scale: 0,
  opacity: 0,
  transform: "translateY(100%)",
};

export const createSlotTransition = (showCursor: Accessor<boolean>): TransitionProps => {
  const context = OtpField.useContext();

  const mode = () => (showCursor() ? undefined : "outin");

  const onExit = (el: Element, done: VoidFunction): void => {
    el.animate([SLOT_SHOWN_PROPERTIES, SLOT_HIDDEN_PROPERTIES], {
      duration: context.value() ? (showCursor() ? 300 : 0) : 300,
      easing: easing.easeInOutBack,
    }).finished.then(done);
  };

  const onEnter = (el: Element, done: VoidFunction): void => {
    el.animate([SLOT_HIDDEN_PROPERTIES, SLOT_SHOWN_PROPERTIES], {
      duration: context.value() ? (showCursor() ? 0 : 300) : 0,
      easing: easing.easeInOutBack,
    }).finished.then(done);
  };

  return {
    mode: mode(),
    onExit,
    onEnter,
  };
};
