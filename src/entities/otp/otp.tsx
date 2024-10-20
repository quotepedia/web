import { createEffect, createResource, createSignal, For, on, Show, splitProps, Suspense } from "solid-js";

import { createForm, FormError, FormProps, minLength, submit, SubmitHandler } from "@modular-forms/solid";

import { isCorrectOtp, sendOtp } from "~/shared/api/otp";
import {
  Button,
  Collapse,
  CollapseGroup,
  Heading,
  Link,
  Lottie,
  OtpField,
  Stack,
  Text,
  TextField,
} from "~/shared/components";
import { useI18n } from "~/shared/i18n";

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
    <Stack.Vertical class="gap-6 text-center">
      <CollapseGroup duration={300}>
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

        <Suspense>
          <Show when={resourse()} keyed>
            <Form onSubmit={onSubmit} {...otherProps}>
              <Stack.Vertical as={"fieldset"} class="gap-4" disabled={form.submitting}>
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

                <Collapse>
                  <Show when={form.response.message}>
                    {(message) => (
                      <Text size="sm" variant="danger">
                        {message()}
                      </Text>
                    )}
                  </Show>
                </Collapse>

                <Button variant="hyperlink" class="text-xs" onClick={resend}>
                  {t.resend()}
                </Button>
              </Stack.Vertical>
            </Form>
          </Show>
        </Suspense>
      </CollapseGroup>
    </Stack.Vertical>
  );
};
