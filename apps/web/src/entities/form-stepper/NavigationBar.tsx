import { submit } from "@modular-forms/solid";
import { Button, NavigationBar, Stepper } from "@quotepedia/solid";
import { Match, Switch } from "solid-js";
import { useFormStepper } from "./context";
import { A } from "@solidjs/router";
import { useTranslator } from "~/shared/i18n";

export type FormStepperNavigationBarProps = {
  title: string;
  href: string;
};

export const FormStepperNavigationBar = (props: FormStepperNavigationBarProps) => {
  const stepper = Stepper.useContext();
  const context = useFormStepper();
  const t = useTranslator();

  return (
    <NavigationBar>
      <NavigationBar.Leading>
        <Switch>
          <Match when={stepper.canMoveBackward === true}>
            <Button as={Stepper.Backward} style="ghost" leadingIcon="f7:chevron-left">
              {t("back")}
            </Button>
          </Match>
          <Match when={stepper.canMoveBackward === false}>
            <Button as={A} href={props.href} style="ghost" leadingIcon="f7:chevron-left">
              {t("back")}
            </Button>
          </Match>
        </Switch>
      </NavigationBar.Leading>
      <NavigationBar.Center>
        <p class="font-semibold">{props.title}</p>
      </NavigationBar.Center>
      <NavigationBar.Trailing>
        <Switch>
          <Match when={stepper.canMoveForward === true}>
            <Button
              style="ghost"
              trailingIcon="f7:chevron-right"
              type={context.form() ? "submit" : "button"}
              form={context.form()?.element?.id}
              disabled={context.form()?.invalid || !stepper.canMoveForward}
              loading={context.form()?.submitting}
              onClick={() => (context.form() ? submit(context.form()!) : stepper.moveForward())}
            >
              {t("next")}
            </Button>
          </Match>
          <Match when={stepper.canMoveForward === false}>
            <Button as={A} href={props.href} style="ghost">
              {t("done")}
            </Button>
          </Match>
        </Switch>
      </NavigationBar.Trailing>
    </NavigationBar>
  );
};
