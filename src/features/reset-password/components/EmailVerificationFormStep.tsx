import { SubmitHandler } from "@modular-forms/solid";
import { OtpForm, OtpFormData } from "~/entities/otp/otp";
import { Stepper } from "~/shared/components";
import { useResetPassword } from "../context";

export const EmailVerificationFormStep = () => {
  const stepper = Stepper.useContext();
  const context = useResetPassword();

  const onSubmit: SubmitHandler<OtpFormData> = (values) => {
    context.set("otp", Number(values.otp));
    stepper.moveForward();
  };

  return (
    <Stepper.Step>
      <OtpForm onSubmit={onSubmit} recipient={context.store.email} />
    </Stepper.Step>
  );
};
