import { Stepper, Title } from "~/components";
import { NewPasswordStep } from "~/components/steps/new-password";
import { ResetPasswordEmailStep } from "~/components/steps/reset-password/email";
import { Verifier } from "~/components/steps/verification";
import { useI18n } from "~/lib/i18n";

export default function ResetPassword() {
  const i18n = useI18n();

  return (
    <>
      <Title>{i18n.t.routes.resetPassword.title()}</Title>

      <Verifier.Provider>
        <Stepper as={"main"} class="m-auto flex w-full max-w-xs flex-col items-center justify-center py-6">
          <Stepper.Steps>
            <Stepper.Step as={ResetPasswordEmailStep} />
            <Stepper.Step as={Verifier.Steps.Otp} />
            <Stepper.Step as={NewPasswordStep} />
          </Stepper.Steps>
        </Stepper>
      </Verifier.Provider>
    </>
  );
}
