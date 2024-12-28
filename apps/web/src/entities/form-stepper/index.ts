import { useFormStepper } from "./context";
import { FormStepperNavigationBar } from "./NavigationBar";
import { FormStepperRoot } from "./Root";

export const FormStepper = Object.assign(FormStepperRoot, {
  NavigationBar: FormStepperNavigationBar,
  useContext: useFormStepper,
});

export default FormStepper;
