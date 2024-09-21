import { For, Show, Suspense, createEffect, createResource, createSignal, on } from "solid-js";

import { createForm, minLength, submit } from "@modular-forms/solid";

import { Icon } from "solid-heroicons";
import { paperAirplane } from "solid-heroicons/solid-mini";

import { toast } from "solid-sonner";

import { Button, Heading, Motion, OtpField, TextField, LottiePresenter, Stepper } from "~/components";
import { useVerification } from "~/components/steps/verification/provider";

import { sendOtp, isCorrectOtp } from "~/lib/api/otp";
import { useI18n } from "~/lib/i18n";

const OTP_LENGTH = 6;

type OtpForm = {
  otp: string;
};

// TODO: extract add props.onComplete (after success verification) for more flexibility
// Also move `stepper.moveForward();` to password reset stepper.
export const OtpStep = () => {
  const i18n = useI18n();
  const stepper = Stepper.useContext();
  const context = useVerification();

  const [form, { Form, Field }] = createForm<OtpForm>();
  const [otpInputRef, setOtpInputRef] = createSignal<HTMLInputElement>();

  const email = () => context.store.email;
  const [resourse, { refetch }] = createResource(email, sendOtp);

  const onSubmit = async (form: OtpForm) => {
    const otp = Number(form.otp);
    const result = await isCorrectOtp({ email: email(), otp: otp });

    if (result.error) {
      toast.error(result.error.detail?.toString());
      reset();
    } else {
      context.setStore("otp", otp);
      stepper.moveForward();
    }
  };

  const reset = () => {
    const input = otpInputRef();
    if (!input) return;

    requestAnimationFrame(() => {
      input.form?.reset();
      input.focus();
    });
  };

  createEffect(on(resourse, reset));

  return (
    <Motion class="flex w-full flex-col items-center justify-center gap-6 text-center">
      <LottiePresenter path="tgs/mailbox.json" class="size-24" />

      <hgroup class="w-full space-y-4">
        <Heading>{i18n.t.steps.verification.otp.heading()}</Heading>
        <p class="text-sm text-fg-muted">
          <Suspense fallback={i18n.t.steps.verification.otp.sending()}>
            <Show when={resourse()}>{i18n.t.steps.verification.otp.sent()}</Show>
          </Suspense>
          <Button variant="hyperlink" onClick={stepper.moveBackward}>
            {email()}
          </Button>
        </p>
      </hgroup>

      <Suspense>
        <Show when={resourse()} keyed>
          <Form onSubmit={onSubmit}>
            <fieldset disabled={form.submitting} class="flex flex-col items-center justify-center gap-4 text-center">
              <Field name="otp" validate={minLength(OTP_LENGTH, i18n.t.steps.verification.otp.uncomplete())}>
                {(field, props) => (
                  <TextField validationState={field.error ? "invalid" : "valid"}>
                    <OtpField maxLength={OTP_LENGTH} onComplete={() => submit(form)}>
                      <TextField.Input as={OtpField.Input} {...props} ref={setOtpInputRef} />
                      <For each={Array(OTP_LENGTH)}>{(_, index) => <OtpField.Slot index={index()} />}</For>
                    </OtpField>
                    <TextField.ErrorMessage>{field.error}</TextField.ErrorMessage>
                  </TextField>
                )}
              </Field>

              <Button color="dark" onClick={refetch}>
                {i18n.t.steps.verification.otp.resend()}
                <Icon path={paperAirplane} class="size-3.5" />
              </Button>
            </fieldset>
          </Form>
        </Show>
      </Suspense>
    </Motion>
  );
};
