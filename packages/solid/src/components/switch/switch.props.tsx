import type {
  SwitchControlProps as ControlProps,
  SwitchDescriptionProps as DescriptionProps,
  SwitchErrorMessageProps as ErrorMessageProps,
  SwitchInputProps as InputProps,
  SwitchLabelProps as LabelProps,
  SwitchRootProps as RootProps,
  SwitchThumbProps as ThumbProps,
} from "@kobalte/core/switch";
import type { ValidComponent } from "solid-js";

export type SwitchControlProps = ControlProps;

export type SwitchDescriptionProps = DescriptionProps;

export type SwitchErrorMessageProps = ErrorMessageProps;

export type SwitchInputProps = InputProps;

export type SwitchLabelProps = LabelProps;

export type SwitchRootRenderProps = {
  class?: string;
};

export type SwitchRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = RootProps<T> &
  SwitchRootRenderProps;

export type SwitchThumbProps = ThumbProps;
