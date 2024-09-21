import { A, useAction, useSearchParams, useSubmission } from "@solidjs/router";
import { JSX, Show } from "solid-js";

import { createForm, email, minLength, required } from "@modular-forms/solid";
import { toast } from "solid-sonner";

import { Button, FormControl, Heading, Link, LottiePresenter, Title } from "~/components";
import { authenticate, LoginForm } from "~/lib/api/auth";
import { useI18n } from "~/lib/i18n";

export default function Login() {
  const [searchParams] = useSearchParams();

  const i18n = useI18n();

  const [, Login] = createForm<LoginForm>();
  const action = useAction(authenticate);
  const submission = useSubmission(authenticate);

  const submit = async (form: LoginForm) => {
    const result = await action(form);
    if (result.error) {
      toast.error(result.error.detail?.toString())
    }
  }

  return (
    <div class="m-auto max-w-xs space-y-6 py-6">
      <Title>{i18n.t.routes.login.title()}</Title>

      <header class="space-y-6 text-center">
        <LottiePresenter path="tgs/wave.json" class="size-24 w-full" />
        <hgroup class="space-y-4">
          <Heading>{i18n.t.routes.login.heading()}</Heading>
          <p>{i18n.t.routes.login.paragraph()}</p>
        </hgroup>
      </header>

      <main>
        <Login.Form onSubmit={submit} method="post">
          <fieldset disabled={submission.pending} class="space-y-4">
            <Login.Field
              name="email"
              validate={[
                required(i18n.t.routes.login.form.fields.email.required()),
                email(i18n.t.routes.login.form.fields.email.error()),
              ]}
            >
              {(field, props) => (
                <FormControl
                  {...props}
                  type="email"
                  label={i18n.t.routes.login.form.fields.email.label()}
                  placeholder={i18n.t.routes.login.form.fields.email.placeholder()}
                  description={i18n.t.routes.login.form.fields.email.description()}
                  value={field.value}
                  error={field.error}
                  required
                />
              )}
            </Login.Field>

            <Login.Field
              name="password"
              validate={[
                required(i18n.t.routes.login.form.fields.password.required()),
                minLength(8, i18n.t.routes.login.form.fields.password.minLength({ length: 8 })),
              ]}
            >
              {(field, props) => (
                <FormControl
                  {...props}
                  type="password"
                  label={i18n.t.routes.login.form.fields.password.label()}
                  placeholder={i18n.t.routes.login.form.fields.password.placeholder()}
                  description={
                    (() => (
                      <>
                        <span>{i18n.t.routes.login.form.fields.password.description()}</span>
                        <Link as={A} href="/reset-password">
                          {i18n.t.routes.login.form.fields.password.forgot()}
                        </Link>
                      </>
                    )) as unknown as JSX.Element
                  }
                  value={field.value}
                  error={field.error}
                  required
                />
              )}
            </Login.Field>

            <Show when={searchParams.redirect}>
              <Login.Field name="redirect">
                {(_field, props) => <input type="hidden" value={searchParams.redirect} {...props} />}
              </Login.Field>
            </Show>

            <Button color="primary" type="submit" class="w-full" aria-busy={submission.pending}>
              {i18n.t.routes.login.form.submit()}
            </Button>
          </fieldset>
        </Login.Form>
      </main>

      <footer class="text-center text-xs text-fg-muted">
        {i18n.t.routes.login.footer()}
        <Link as={A} href="/">
          {i18n.t.routes.login.signup()}
        </Link>
      </footer>
    </div>
  );
}
