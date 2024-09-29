import { SubmitHandler } from "@modular-forms/solid";
import { OtpForm, OtpFormData } from "~/components/forms/otp";
import { Stepper } from "~/components/ui";
import { useChangeEmail } from "../context";
import { createAsync, useAction } from "@solidjs/router";
import { getCurrentUser, updateCurrentUserEmail } from "~/lib/api/users/me";
import { toast } from "solid-sonner";

export const ChangeEmailOtpStep = () => {
  const stepper = Stepper.useContext();
  const context = useChangeEmail();
  const currentUser = createAsync(() => getCurrentUser());

  const updateEmail = useAction(updateCurrentUserEmail);

  const onSubmit: SubmitHandler<OtpFormData> = async (values) => {
    context.setStore("otp", Number(values.otp));
    const previousEmail = currentUser()?.email || "";
    const result = await updateEmail(context.store);
    if (!result.error) {
      context.setStore("previousEmail", previousEmail);
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
