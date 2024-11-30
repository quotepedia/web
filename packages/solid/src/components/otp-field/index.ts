import { OtpFieldInput as Input, OtpFieldRoot as Root, OtpFieldSlot as Slot } from "./otp-field";

import type {
  OtpFieldInputProps as InputProps,
  OtpFieldInputRenderProps as InputRenderProps,
  OtpFieldRootProps as RootProps,
  OtpFieldRootRenderProps as RootRenderProps,
} from "./otp-field.props";

export type {
  InputProps,
  InputRenderProps,
  RootProps,
  RootRenderProps,
};

export {
  Input,
  Root,
  Slot,
};

export const OtpField = Object.assign(Root, {
  Input,
  Slot,
});

export default OtpField;
