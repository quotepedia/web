import {
  createForm,
  FormError,
  type FormProps,
  type FormStore,
  minLength,
  required,
  type SubmitHandler,
} from "@modular-forms/solid";
import { Button, FormControl } from "@quotepedia/solid";
import { createEffect, splitProps } from "solid-js";
import { FormResponse } from "~/components/form/FormResponse";
import type { NewPasswordFormFieldValues } from "~/lib/api/users";
import { MIN_PASSWORD_LENGTH } from "~/lib/api/users/constants";
import { useScopedTranslator } from "~/lib/i18n";

export type NewPasswordFormProps = Omit<FormProps<NewPasswordFormFieldValues, undefined>, "of" | "children"> & {
  ref?: (form: FormStore<NewPasswordFormFieldValues>) => void;
};

export const NewPasswordForm = (props: NewPasswordFormProps) => {
  const [scopedProps, otherProps] = splitProps(props, ["onSubmit"]);

  const t = useScopedTranslator("components.forms.password");

  const [form, { Form, Field }] = createForm<NewPasswordFormFieldValues>();

  createEffect(() => props.ref?.(form));

  const onSubmit: SubmitHandler<NewPasswordFormFieldValues> = async (values, event) => {
    if (values.newPassword1 !== values.newPassword2) {
      throw new FormError<NewPasswordFormFieldValues>(t("mismatch"));
    }
    await scopedProps.onSubmit?.(values, event);
  };

  return (
    <Form onSubmit={onSubmit} {...otherProps} class="w-full">
      <fieldset class="flex flex-col items-stretch gap-4" disabled={form.submitting}>
        <Field
          name="newPassword1"
          validate={[
            required(t("newPassword1.required")),
            minLength(MIN_PASSWORD_LENGTH, t("newPassword1.minLength", { length: MIN_PASSWORD_LENGTH })),
          ]}
        >
          {(field, props) => (
            <FormControl
              {...props}
              type="password"
              label={t("newPassword1.label")}
              description={t("newPassword1.description")}
              placeholder={t("newPassword1.placeholder")}
              value={field.value}
              error={field.error}
              required
            />
          )}
        </Field>

        <Field
          name="newPassword2"
          validate={[
            required(t("newPassword2.required")),
            minLength(MIN_PASSWORD_LENGTH, t("newPassword2.minLength", { length: MIN_PASSWORD_LENGTH })),
          ]}
        >
          {(field, props) => (
            <FormControl
              {...props}
              type="password"
              label={t("newPassword2.label")}
              description={t("newPassword2.description")}
              placeholder={t("newPassword2.placeholder")}
              value={field.value}
              error={field.error}
              required
            />
          )}
        </Field>

        <FormResponse of={form} />

        <Button type="submit" class="w-full" loading={form.submitting} disabled={form.invalid}>
          {t("submit")}
        </Button>
      </fieldset>
    </Form>
  );
};
