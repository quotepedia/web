import { A, useAction, useSearchParams } from "@solidjs/router";
import { JSX, Show } from "solid-js";

import { createForm, email, FormError, minLength, required } from "@modular-forms/solid";

import { Button, FormControl, Heading, Link, LottiePresenter, Title } from "~/components";
import { MIN_PASSWORD_LENGTH } from "~/components/forms/password";
import { authenticate, LoginForm } from "~/lib/api/auth";
import { useI18n } from "~/lib/i18n";

export default function Login() {
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
    <div class="m-auto max-w-xs space-y-6 py-6">
      <Title>{t.title()}</Title>

      <header class="space-y-6 text-center">
        <LottiePresenter path="tgs/wave.json" class="size-24 w-full" />
        <hgroup class="space-y-4">
          <Heading>{t.heading()}</Heading>
          <p>{t.description()}</p>
        </hgroup>
      </header>

      <main>
        <Form onSubmit={onSubmit} method="post">
          <fieldset disabled={form.submitting} class="space-y-4">
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
                  description={
                    (() => (
                      <>
                        <span>{t.form.fields.password.description()}</span>
                        <Link as={A} href="/reset-password">
                          {t.form.fields.password.forgot()}
                        </Link>
                      </>
                    )) as unknown as JSX.Element
                  }
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

            <Show when={form.response.message}>{(message) => <p class="text-xs text-red-600">{message()}</p>}</Show>

            <Button
              color="primary"
              type="submit"
              class="w-full"
              aria-busy={form.submitting}
              disabled={form.invalid || !form.dirty}
            >
              {t.form.submit()}
            </Button>
          </fieldset>
        </Form>
      </main>

      <footer class="text-center text-xs text-fg-muted">
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
      </footer>
    </div>
  );
}
