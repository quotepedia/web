import type { FormStore, SubmitHandler } from "@modular-forms/solid";
import { Stepper } from "@quotepedia/solid";
import { useAction } from "@solidjs/router";
import { toast } from "solid-sonner";
import { useUpdateEmail } from "../context";
import { createSignal } from "solid-js";
import FormStepper from "~/components/form-stepper";
import { updateCurrentUserEmailAction } from "~/lib/api/users/me";
import { OtpForm, type OtpFormData } from "~/components/OtpForm";

export const UpdateEmailStepperVerificationStep = () => {
  const stepper = Stepper.useContext();
  const context = useUpdateEmail();
  const formStepper = FormStepper.useContext();
  const [form, setForm] = createSignal<FormStore<any, any>>();

  const updateEmail = useAction(updateCurrentUserEmailAction);

  const onSubmit: SubmitHandler<OtpFormData> = async (values) => {
    context.set("otp", Number(values.otp));
    const result = await updateEmail(context.store);
    if (!result.error) {
      stepper.moveForward();
      return;
    }
    if (result.error.detail) {
      toast.error(result.error.detail.toString());
    }
  };

  return (
    <Stepper.Step onEnter={() => formStepper.setForm(form())}>
      <OtpForm ref={setForm} onSubmit={onSubmit} recipient={context.store.email} />
    </Stepper.Step>
  );
};
