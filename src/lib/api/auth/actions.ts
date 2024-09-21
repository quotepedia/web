import { action, redirect } from "@solidjs/router";

import { resetSession, updateSession } from "~/lib/http";
import type { components } from "~/lib/api/schema";

import type { LoginForm } from "./types";
import { $authenticate, $resetPassword } from "./service";

export const authenticate = action(async (form: LoginForm) => {
  "use server";

  const { data, error } = await $authenticate(form.email, form.password);

  if (data) {
    await updateSession(data);
  } else if (error) {
    return { error };
  }

  throw redirect(form.redirect || "/");
});

export const unauthenticate = action(async () => {
  "use server";

  await resetSession();

  throw redirect("/");
});

export const resetPassword = action(async (body: components["schemas"]["UserPasswordResetRequest"]) => {
  "use server";

  const { data, error } = await $resetPassword(body);

  if (data) {
    await updateSession(data);
  } else if (error) {
    return { error };
  }
});
