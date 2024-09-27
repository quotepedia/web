import { SubmitHandler } from "@modular-forms/solid";
import { OtpForm, OtpFormData } from "~/components/forms/otp";
import { Stepper } from "~/components/ui";
import { useRegistration } from "../context";

export const RegistrationOtpStep = () => {
  const stepper = Stepper.useContext();
  const context = useRegistration();

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
