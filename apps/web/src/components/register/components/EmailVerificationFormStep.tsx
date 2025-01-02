import type { SubmitHandler } from "@modular-forms/solid";
import { OtpForm, type OtpFormData } from "~/components/OtpForm";
import { Stepper } from "@quotepedia/solid";
import { useRegistration } from "../context";

export const EmailVerificationFormStep = () => {
  const stepper = Stepper.useContext();
  const context = useRegistration();

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
