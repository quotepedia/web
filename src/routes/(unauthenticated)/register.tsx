import { Title } from "~/components";
import { RegistrationStepper } from "~/components/registration/stepper";
import { useI18n } from "~/lib/i18n";

export default function Register() {
  const i18n = useI18n();

  return (
    <>
      <Title>{i18n.t.routes.register.title()}</Title>

      <RegistrationStepper />
    </>
  );
}
