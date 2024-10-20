import { createForm, email, FormError, FormProps, required, SubmitHandler } from "@modular-forms/solid";
import { splitProps } from "solid-js";
import { getUserExists } from "~/shared/api/users";
import { Button, FormControl, Stack } from "~/shared/components";
import { useI18n } from "~/shared/i18n";

export type EmailFormData = {
  email: string;
};

export type EmailFormProps = Omit<FormProps<EmailFormData, undefined>, "of" | "children">;

export const EmailForm = (props: EmailFormProps) => {
  const i18n = useI18n();
  const t = i18n.t.components.forms.email;

  const [form, { Form, Field }] = createForm<EmailFormData>({ validateOn: "input" });

  return (
    <Form {...props} class="w-full">
      <Stack.Vertical as={"fieldset"} class="items-stretch gap-4" disabled={form.submitting}>
        <Field name="email" validate={[required(t.required()), email(t.invalid())]}>
          {(field, props) => (
            <FormControl
              {...props}
              type="email"
              label={t.label()}
              description={t.description()}
              placeholder={t.placeholder()}
              value={field.value}
              error={field.error}
              required
            />
          )}
        </Field>

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

export type RegisteredEmailFormProps = EmailFormProps;

export const RegisteredEmailForm = (props: RegisteredEmailFormProps) => {
  const [scopedProps, otherProps] = splitProps(props, ["onSubmit"]);

  const i18n = useI18n();
  const t = i18n.t.components.forms.email;

  const onSubmit: SubmitHandler<EmailFormData> = async (values, event) => {
    if (!(await getUserExists(values.email))) {
      throw new FormError<EmailFormData>({ email: t.unregistered() });
    }
    await scopedProps.onSubmit?.(values, event);
  };

  return <EmailForm onSubmit={onSubmit} {...otherProps} />;
};

export type UnregisteredEmailFormProps = EmailFormProps;

export const UnregisteredEmailForm = (props: UnregisteredEmailFormProps) => {
  const [scopedProps, otherProps] = splitProps(props, ["onSubmit"]);

  const i18n = useI18n();
  const t = i18n.t.components.forms.email;

  const onSubmit: SubmitHandler<EmailFormData> = async (values, event) => {
    if (await getUserExists(values.email)) {
      throw new FormError<EmailFormData>({ email: t.registered() });
    }
    await scopedProps.onSubmit?.(values, event);
  };

  return <EmailForm onSubmit={onSubmit} {...otherProps} />;
};
