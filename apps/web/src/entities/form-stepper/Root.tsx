import type { FormStore } from "@modular-forms/solid";
import { Stepper } from "@quotepedia/solid";
import { createSignal, type ParentComponent } from "solid-js";
import { FormStepperContext, type FormStepperContextValue } from "./context";

export const FormStepperRoot: ParentComponent = (props) => {
  const [form, setForm] = createSignal<FormStore<any, any>>();

  const context: FormStepperContextValue = {
    form,
    setForm,
  };

  return (
    <Stepper>
      <FormStepperContext.Provider value={context}>
        <div class="flex size-full flex-col">{props.children}</div>
      </FormStepperContext.Provider>
    </Stepper>
  );
};
