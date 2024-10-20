import { createForm, email, FormError, minLength, required } from "@modular-forms/solid";
import { A, useAction, useSearchParams } from "@solidjs/router";
import { Show } from "solid-js";
import { MIN_PASSWORD_LENGTH } from "~/entities/user/password";
import { authenticate, LoginForm } from "~/shared/api/auth";
import { Button, Collapse, Container, FormControl, Heading, Link, Lottie, Stack, Text } from "~/shared/components";
import { useI18n } from "~/shared/i18n";

export const UserLoginForm = () => {
  const i18n = useI18n();
  const t = i18n.t.routes.login;

  const login = useAction(authenticate);
  const [searchParams] = useSearchParams();

  const [form, { Form, Field }] = createForm<LoginForm>({ validateOn: "input" });

  const onSubmit = async (form: LoginForm) => {
    const result = await login(form);
    if (result.error && result.error.detail) {
      throw new FormError<LoginForm>(result.error.detail.toString());
    }
  };

  return (
    <Container size="tight" class="self-center">
      <Stack.Vertical class="gap-6">
        <Lottie path="tgs/wave.json" class="size-24" />

        <Stack.Vertical class="text-center">
          <Heading>{t.heading()}</Heading>
          <Text>{t.description()}</Text>
        </Stack.Vertical>

        <Form onSubmit={onSubmit} method="post">
          <Stack.Vertical as="fieldset" class="items-stretch gap-4" disabled={form.submitting}>
            <Field
              name="email"
              validate={[required(t.form.fields.email.required()), email(t.form.fields.email.invalid())]}
            >
              {(field, props) => (
                <FormControl
                  {...props}
                  type="email"
                  label={t.form.fields.email.label()}
                  placeholder={t.form.fields.email.placeholder()}
                  description={t.form.fields.email.description()}
                  value={field.value}
                  error={field.error}
                  required
                />
              )}
            </Field>

            <Field
              name="password"
              validate={[
                required(t.form.fields.password.required()),
                minLength(MIN_PASSWORD_LENGTH, t.form.fields.password.minLength({ length: MIN_PASSWORD_LENGTH })),
              ]}
            >
              {(field, props) => (
                <FormControl
                  {...props}
                  type="password"
                  label={t.form.fields.password.label()}
                  placeholder={t.form.fields.password.placeholder()}
                  description={(() => (
                    <>
                      <span>{t.form.fields.password.description()}</span>
                      <Link as={A} href="/reset-password">
                        {t.form.fields.password.forgot()}
                      </Link>
                    </>
                  ))()}
                  value={field.value}
                  error={field.error}
                  required
                />
              )}
            </Field>

            <Show when={searchParams.redirect}>
              <Field name="redirect">
                {(_field, props) => <input type="hidden" value={searchParams.redirect} {...props} />}
              </Field>
            </Show>

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
              color="primary"
              type="submit"
              class="w-full"
              aria-busy={form.submitting}
              disabled={form.invalid || !form.dirty}
            >
              {t.form.submit()}
            </Button>
          </Stack.Vertical>
        </Form>

        <Stack.Horizontal class="gap-1 text-xs">
          <Link as={A} href="/">
            {t.home()}
          </Link>
          {" · "}
          <Link as={A} href="/settings">
            {t.settings()}
          </Link>
          {" · "}
          <Link as={A} href="/register">
            {t.register()}
          </Link>
        </Stack.Horizontal>
      </Stack.Vertical>
    </Container>
  );
};
