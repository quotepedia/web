import type { InputProps, RootProps } from "corvu/otp-field";
import type { ValidComponent } from "solid-js";

export type OtpFieldRootRenderProps = {
  class?: string;
};

export type OtpFieldRootProps<T extends ValidComponent = "div"> = RootProps<T> & OtpFieldRootRenderProps;

export type OtpFieldInputRenderProps = {
  class?: string;
};

export type OtpFieldInputProps<T extends ValidComponent = "input"> = InputProps<T> & OtpFieldInputRenderProps;
