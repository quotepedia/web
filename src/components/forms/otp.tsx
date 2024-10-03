import { createEffect, createResource, createSignal, For, on, Show, splitProps, Suspense } from "solid-js";

import { createForm, FormError, FormProps, minLength, submit, SubmitHandler } from "@modular-forms/solid";

import { Button, Heading, Link, Lottie, Motion, OtpField, TextField } from "~/components";
import { isCorrectOtp, sendOtp } from "~/lib/api/otp";
import { useI18n } from "~/lib/i18n";

export const OTP_LENGTH = 6;

export type OtpFormData = {
  otp: string;
};

export type OtpStepProps = Omit<FormProps<OtpFormData, undefined>, "of" | "children"> & {
  recipient: string;
};

export const OtpForm = (props: OtpStepProps) => {
  const [scopedProps, otherProps] = splitProps(props, ["onSubmit"]);

  const i18n = useI18n();
  const t = i18n.t.components.forms.otp;

  const [otpInputRef, setOtpInputRef] = createSignal<HTMLInputElement>();
  const [resourse, { refetch: resend }] = createResource(props.recipient, sendOtp);
  const [form, { Form, Field }] = createForm<OtpFormData>({ validateOn: "input" });

  const onSubmit: SubmitHandler<OtpFormData> = async (values, event) => {
    const otp = Number(values.otp);
    const result = await isCorrectOtp({ email: props.recipient, otp: otp });

    if (!result.error) {
      await scopedProps.onSubmit?.(values, event);
      return;
    }

    resetForm();

    if (result.error.detail) {
      throw new FormError<OtpFormData>({ otp: result.error.detail.toString() });
    }
  };

  const resetForm = () => {
    const input = otpInputRef();
    if (!input) return;

    requestAnimationFrame(() => {
      input.form?.reset();
      input.focus();
    });
  };

  createEffect(on(resourse, resetForm));

  return (
    <Motion class="flex w-full flex-col items-center justify-center gap-6 text-center">
      <Lottie path="/tgs/mailbox.json" class="size-24" />

      <hgroup class="w-full space-y-4">
        <Heading>{t.heading()}</Heading>
        <p>
          <Suspense fallback={t.sending()}>
            <Show when={resourse()}>{t.sent()}</Show>
          </Suspense>{" "}
          <Link href={`mailto:${props.recipient}`}>{props.recipient}</Link>
        </p>
      </hgroup>

      <Suspense>
        <Show when={resourse()} keyed>
          <Form onSubmit={onSubmit} {...otherProps}>
            <fieldset disabled={form.submitting} class="flex flex-col items-center justify-center gap-4 text-center">
              <Field name="otp" validate={minLength(OTP_LENGTH, t.minLength())}>
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

              <Show when={form.response.message}>{(message) => <p class="text-xs text-red-600">{message()}</p>}</Show>

              <Button variant="hyperlink" class="text-xs" onClick={resend}>
                {t.resend()}
              </Button>
            </fieldset>
          </Form>
        </Show>
      </Suspense>
    </Motion>
  );
};
