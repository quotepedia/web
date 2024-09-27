import { Title } from "~/components";
import { ResetPasswordStepper } from "~/components/reset-password/stepper";
import { useI18n } from "~/lib/i18n";

export default function ResetPassword() {
  const i18n = useI18n();

  return (
    <>
      <Title>{i18n.t.routes.resetPassword.title()}</Title>

      <ResetPasswordStepper />
    </>
  );
}
