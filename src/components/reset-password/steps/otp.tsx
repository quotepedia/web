import { SubmitHandler } from "@modular-forms/solid";
import { OtpForm, OtpFormData } from "~/components/forms/otp";
import { Stepper } from "~/components/ui";
import { useResetPassword } from "../context";

export const ResetPasswordOtpStep = () => {
  const stepper = Stepper.useContext();
  const context = useResetPassword();

  const onSubmit: SubmitHandler<OtpFormData> = (values) => {
    context.setStore("otp", Number(values.otp));
    stepper.moveForward();
  };

  return (
    <Stepper.Step>
      <OtpForm onSubmit={onSubmit} recipient={context.store.email} />
    </Stepper.Step>
  );
};
