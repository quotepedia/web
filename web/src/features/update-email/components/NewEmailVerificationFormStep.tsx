import { SubmitHandler } from "@modular-forms/solid";
import { createAsync, useAction } from "@solidjs/router";
import { toast } from "solid-sonner";
import { OtpForm, OtpFormData } from "~/entities/otp";
import { getCurrentUser, updateCurrentUserEmail } from "~/entities/user";
import { Stepper } from "~/shared/components";
import { useUpdateEmail } from "../context";

export const NewEmailVerificationFormStep = () => {
  const stepper = Stepper.useContext();
  const context = useUpdateEmail();
  const currentUser = createAsync(() => getCurrentUser());

  const updateEmail = useAction(updateCurrentUserEmail);

  const onSubmit: SubmitHandler<OtpFormData> = async (values) => {
    context.set("otp", Number(values.otp));
    const previousEmail = currentUser()?.email || "";
    const result = await updateEmail(context.store);
    if (!result.error) {
      context.set("previousEmail", previousEmail);
      stepper.moveForward();
      return;
    }
    if (result.error.detail) {
      toast.error(result.error.detail.toString());
    }
  };

  return (
    <Stepper.Step>
      <OtpForm onSubmit={onSubmit} recipient={context.store.email} />
    </Stepper.Step>
  );
};
