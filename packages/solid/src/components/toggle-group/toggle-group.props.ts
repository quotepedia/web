import { JSX } from "solid-js";

export type ToggleGroupOptionProps<T extends string> = {
  value: T;
  before?: JSX.Element;
  after?: JSX.Element;
  label: JSX.Element;
  disabled?: boolean;
  description?: JSX.Element;
};

export type ToggleGroupProps<T extends string> = {
  label?: JSX.Element;
  description?: JSX.Element;
  disabled?: boolean;
  value?: T[];
  defaultValue?: T[];
  onChange?: (value: T[]) => void;
  options: ToggleGroupOptionProps<T>[];
  class?: string;
};
