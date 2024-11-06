import { createForm, FormError, FormProps, minLength, required, SubmitHandler } from "@modular-forms/solid";
import { Button, Collapse, FormControl, Stack, Text } from "@quotepedia/solid";
import { Show, splitProps } from "solid-js";
import { useI18n } from "~/shared/i18n";

export const MIN_PASSWORD_LENGTH = 8;

export type PasswordFormData = {
  newPassword1: string;
  newPassword2: string;
};

export type PasswordFormProps = Omit<FormProps<PasswordFormData, undefined>, "of" | "children">;

export const PasswordForm = (props: PasswordFormProps) => {
  const [scopedProps, otherProps] = splitProps(props, ["onSubmit"]);

  const i18n = useI18n();
  const t = i18n.t.components.forms.password;

  const [form, { Form, Field }] = createForm<PasswordFormData>({ validateOn: "input" });

  const onSubmit: SubmitHandler<PasswordFormData> = async (values, event) => {
    if (values.newPassword1 !== values.newPassword2) {
      throw new FormError<PasswordFormData>(t.mismatch());
    }
    await scopedProps.onSubmit?.(values, event);
  };

  return (
    <Form onSubmit={onSubmit} {...otherProps} class="w-full">
      <Stack.Vertical as={"fieldset"} class="items-stretch gap-4" disabled={form.submitting}>
        <Field
          name="newPassword1"
          validate={[
            required(t.newPassword1.required()),
            minLength(MIN_PASSWORD_LENGTH, t.newPassword1.minLength({ length: MIN_PASSWORD_LENGTH })),
          ]}
        >
          {(field, props) => (
            <FormControl
              {...props}
              type="password"
              label={t.newPassword1.label()}
              description={t.newPassword1.description()}
              placeholder={t.newPassword1.placeholder()}
              value={field.value}
              error={field.error}
              required
            />
          )}
        </Field>

        <Field
          name="newPassword2"
          validate={[
            required(t.newPassword2.required()),
            minLength(MIN_PASSWORD_LENGTH, t.newPassword2.minLength({ length: MIN_PASSWORD_LENGTH })),
          ]}
        >
          {(field, props) => (
            <FormControl
              {...props}
              type="password"
              label={t.newPassword2.label()}
              description={t.newPassword2.description()}
              placeholder={t.newPassword2.placeholder()}
              value={field.value}
              error={field.error}
              required
            />
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

        <Button
          type="submit"
          color="primary"
          class="w-full"
          aria-busy={form.submitting}
          disabled={form.invalid || !form.dirty}
        >
          {t.submit()}
        </Button>
      </Stack.Vertical>
    </Form>
  );
};
