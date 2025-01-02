import { submit } from "@modular-forms/solid";
import { Button, NavigationBar, Stepper } from "@quotepedia/solid";
import { useNavigate } from "@solidjs/router";
import { useTranslator } from "~/shared/i18n";
import { useFormStepper } from "./context";

export type FormStepperNavigationBarProps = {
  title: string;
  href: string;
};

export const FormStepperNavigationBar = (props: FormStepperNavigationBarProps) => {
  const t = useTranslator();
  const navigate = useNavigate();
  const stepper = Stepper.useContext();
  const context = useFormStepper();

  const back = () => {
    if (stepper.canMoveBackward) {
      stepper.moveBackward();
    } else {
      navigate(props.href);
    }
  };

  const next = () => {
    if (stepper.canMoveForward) {
      context.form ? submit(context.form) : stepper.moveForward();
    } else {
      navigate(props.href);
    }
  };

  return (
    <NavigationBar>
      <NavigationBar.Leading>
        <Button onClick={back} style="ghost" leadingIcon="f7:chevron-left">
          {t("back")}
        </Button>
      </NavigationBar.Leading>
      <NavigationBar.Center>
        <p class="font-semibold">{props.title}</p>
      </NavigationBar.Center>
      <NavigationBar.Trailing>
        <Button
          style="ghost"
          trailingIcon={stepper.canMoveForward ? "f7:chevron-right" : undefined}
          type={context.form ? "submit" : "button"}
          form={context.form?.element?.id}
          disabled={context.form?.invalid}
          loading={context.form?.submitting}
          onClick={next}
        >
          {stepper.canMoveForward ? t("next") : t("done")}
        </Button>
      </NavigationBar.Trailing>
    </NavigationBar>
  );
};
