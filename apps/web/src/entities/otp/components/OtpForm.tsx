import { createForm, FormError, FormProps, reset, submit, SubmitHandler } from "@modular-forms/solid";
import { Repeat } from "@solid-primitives/range";
import { createEffect, createResource, createSignal, on, Show, splitProps, Suspense } from "solid-js";

import { Collapse, Heading, Link, Lottie, OtpField, Stack, Text, TextField } from "@quotepedia/solid";
import { useI18n } from "~/shared/i18n";

import { sendOtp, verifyOtp } from "../api/cache";

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

  const [isCorrect, setIsCorrect] = createSignal(false);
  const [otpInputRef, setOtpInputRef] = createSignal<HTMLInputElement>();
  const [resourse, { refetch }] = createResource(props.recipient, sendOtp);
  const [form, { Form, Field }] = createForm<OtpFormData>();

  const onSubmit: SubmitHandler<OtpFormData> = async (values, event) => {
    const otp = Number(values.otp);
    const result = await verifyOtp({ email: props.recipient, otp: otp });

    if (!result.error) {
      setIsCorrect(true);
      setTimeout(async () => await scopedProps.onSubmit?.(values, event), 1000);
      return;
    }

    resetInput();

    if (result.error.detail) {
      throw new FormError<OtpFormData>({ otp: result.error.detail.toString() });
    }
  };

  const resetInput = () => {
    const input = otpInputRef();
    if (!input) return;

    requestAnimationFrame(() => {
      input.form?.reset();
      input.focus();
    });
  };

  const resend = () => {
    reset(form);
    resetInput();
    refetch();
  };

  createEffect(on(resourse, () => otpInputRef()?.focus()));

  return (
    <Stack.Vertical class="gap-6 text-center">
      <Lottie path="/tgs/mailbox.json" class="size-24" />

      <Stack.Vertical>
        <Heading>{t.heading()}</Heading>
        <Text>
          <Suspense fallback={t.sending()}>
            <Show when={resourse()}>{t.sent()}</Show>
          </Suspense>{" "}
          <Link href={`mailto:${props.recipient}`}>{props.recipient}</Link>
        </Text>
      </Stack.Vertical>

      <Form onSubmit={onSubmit} {...otherProps}>
        <Stack.Vertical as={"fieldset"} class="gap-4" disabled={form.submitting || resourse.loading}>
          <Field name="otp" validateOn="submit" revalidateOn="submit">
            {(field, props) => (
              <TextField validationState={isCorrect() ? "valid" : field.error ? "invalid" : undefined}>
                <OtpField maxLength={OTP_LENGTH} onComplete={() => submit(form)}>
                  <TextField.Input as={OtpField.Input} {...props} ref={setOtpInputRef} autofocus />
                  <Repeat times={OTP_LENGTH}>{(index) => <OtpField.Slot index={index} />}</Repeat>
                </OtpField>
                <Collapse>
                  <TextField.ErrorMessage>{field.error}</TextField.ErrorMessage>
                </Collapse>
              </TextField>
            )}
          </Field>

          <Link as={"button"} type="reset" class="text-xs" onClick={resend}>
            {t.resend()}
          </Link>
        </Stack.Vertical>
      </Form>
    </Stack.Vertical>
  );
};
