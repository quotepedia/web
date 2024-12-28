import {
  createForm,
  email,
  FormError,
  type FormProps,
  type FormStore,
  required,
  type SubmitHandler,
} from "@modular-forms/solid";
import { Button, FormControl, Stack } from "@quotepedia/solid";
import { createEffect, splitProps } from "solid-js";
import { useScopedTranslator } from "~/shared/i18n";
import { getUserExists } from "../api/cache";

export type EmailFormData = {
  email: string;
};

export type EmailFormProps = Omit<FormProps<EmailFormData, undefined>, "of" | "children"> & {
  ref?: (form: FormStore<EmailFormData>) => void;
};

export const EmailForm = (props: EmailFormProps) => {
  const t = useScopedTranslator("components.forms.email");

  const [form, { Form, Field }] = createForm<EmailFormData>({ validateOn: "input" });

  createEffect(() => props.ref?.(form));

  return (
    <Form {...props} class="w-full">
      <Stack.Vertical as={"fieldset"} class="items-stretch gap-4" disabled={form.submitting}>
        <Field name="email" validate={[required(t("required")), email(t("invalid"))]}>
          {(field, props) => (
            <FormControl
              {...props}
              type="email"
              label={t("label")}
              description={t("description")}
              placeholder={t("placeholder")}
              value={field.value}
              error={field.error}
              required
              clearable
              autofocus
            />
          )}
        </Field>

        <Button type="submit" color="primary" class="w-full" loading={form.submitting} disabled={form.invalid}>
          {t("submit")}
        </Button>
      </Stack.Vertical>
    </Form>
  );
};

export type RegisteredEmailFormProps = EmailFormProps;

export const RegisteredEmailForm = (props: RegisteredEmailFormProps) => {
  const [scopedProps, otherProps] = splitProps(props, ["onSubmit"]);

  const t = useScopedTranslator("components.forms.email");

  const onSubmit: SubmitHandler<EmailFormData> = async (values, event) => {
    if (!(await getUserExists(values.email))) {
      throw new FormError<EmailFormData>({ email: t("unregistered") });
    }
    await scopedProps.onSubmit?.(values, event);
  };

  return <EmailForm onSubmit={onSubmit} {...otherProps} />;
};

export type UnregisteredEmailFormProps = EmailFormProps;

export const UnregisteredEmailForm = (props: UnregisteredEmailFormProps) => {
  const [scopedProps, otherProps] = splitProps(props, ["onSubmit"]);

  const t = useScopedTranslator("components.forms.email");

  const onSubmit: SubmitHandler<EmailFormData> = async (values, event) => {
    if (await getUserExists(values.email)) {
      throw new FormError<EmailFormData>({ email: t("registered") });
    }
    await scopedProps.onSubmit?.(values, event);
  };

  return <EmailForm onSubmit={onSubmit} {...otherProps} />;
};
