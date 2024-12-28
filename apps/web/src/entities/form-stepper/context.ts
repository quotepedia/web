import type { FormStore } from "@modular-forms/solid";
import { createContext, useContext, type Accessor, type Setter } from "solid-js";

export type FormStepperContextValue = {
  form: Accessor<FormStore<any, any> | undefined>;
  setForm: Setter<FormStore<any, any> | undefined>;
};

export const FormStepperContext = createContext<FormStepperContextValue>();

export function useFormStepper() {
  const context = useContext(FormStepperContext);

  if (context === undefined) {
    throw new Error(`The 'useFormStepper' must be used within a <FormStepper> component`);
  }

  return context;
}
