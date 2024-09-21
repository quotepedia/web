import { createForm, email, required } from "@modular-forms/solid";
import { toast } from "solid-sonner";
import { Button, FormControl, Stepper } from "~/components";
import { useI18n } from "~/lib/i18n";
import { Verifier } from ".";
import { getUserExists } from "~/lib/api/users";

export function EmailStep() {
  const i18n = useI18n();

  const stepper = Stepper.useContext();
  const verifier = Verifier.useContext();

  const [form, { Form, Field }] = createForm<{ email: string }>();

  const onSubmit = async (data: { email: string }) => {
    if (verifier.store.otp && verifier.store.email === data.email) {
      stepper.movePrevious();
      return;
    }

    const exists = await getUserExists(data.email);
    if (!exists) {
      toast.error(i18n.t.steps.verification.email.notExists());
      return;
    }

    verifier.setStore("email", data.email);
    stepper.moveForward();
  };

  return (
    <Form onSubmit={onSubmit}>
      <fieldset disabled={form.submitting} class="space-y-6">
        <Field
          name="email"
          validate={[
            required(i18n.t.steps.verification.email.required()),
            email(i18n.t.steps.verification.email.error()),
          ]}
        >
          {(field, props) => (
            <FormControl
              {...props}
              type="email"
              label={i18n.t.steps.verification.email.label()}
              placeholder={i18n.t.steps.verification.email.placeholder()}
              description={i18n.t.steps.verification.email.description()}
              value={field.value}
              error={field.error}
              required
            />
          )}
        </Field>

        <Button type="submit" color="primary" class="w-full" aria-busy={form.submitting} disabled={form.invalid}>
          {i18n.t.steps.verification.email.submit()}
        </Button>
      </fieldset>
    </Form>
  );
}
