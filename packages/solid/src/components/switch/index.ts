import {
  SwitchControl as Control,
  SwitchDescription as Description,
  SwitchErrorMessage as ErrorMessage,
  SwitchIndicator as Indicator,
  SwitchInput as Input,
  SwitchLabel as Label,
  SwitchRoot as Root,
  SwitchThumb as Thumb,
} from "./switch";

import type {
  SwitchControlProps as ControlProps,
  SwitchDescriptionProps as DescriptionProps,
  SwitchErrorMessageProps as ErrorMessageProps,
  SwitchInputProps as InputProps,
  SwitchLabelProps as LabelProps,
  SwitchRootProps as RootProps,
  SwitchRootRenderProps as RootRenderProps,
  SwitchThumbProps as ThumbProps,
} from "./switch.props";

export type {
  ControlProps,
  DescriptionProps,
  ErrorMessageProps,
  InputProps,
  LabelProps,
  RootProps,
  RootRenderProps,
  ThumbProps,
};

export {
  Control,
  Description,
  ErrorMessage,
  Indicator,
  Input,
  Label,
  Root,
  Thumb
};

export const Switch = Object.assign(Root, {
  Control,
  Description,
  ErrorMessage,
  Indicator,
  Input,
  Label,
  Thumb,
});
