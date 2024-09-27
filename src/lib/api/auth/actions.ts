import { action, redirect } from "@solidjs/router";

import { resetSession, updateSession } from "~/lib/http";
import type { components } from "~/lib/api/schema";

import type { LoginForm, RegisterForm } from "./types";
import { $login, $register, $resetUserPassword } from "./service";

export const authenticate = action(async (form: LoginForm) => {
  "use server";

  const { data, error } = await $login(form.email, form.password);

  if (data) {
    await updateSession(data);
  } else if (error) {
    return { error };
  }

  throw redirect(form.redirect || "/");
});

export const register = action(async (form: RegisterForm) => {
  "use server";

  const { data, error } = await $register(form.email, form.otp, form.password);

  if (data) {
    await updateSession(data);
  } else if (error) {
    return { error };
  }

  throw redirect("/");
});

export const unauthenticate = action(async () => {
  "use server";

  await resetSession();

  throw redirect("/");
});

export type UserPasswordResetForm = components["schemas"]["UserPasswordResetRequest"];

export const resetUserPassword = action(async (body: UserPasswordResetForm) => {
  "use server";

  const { data, error } = await $resetUserPassword(body);

  if (data) {
    await updateSession(data);
  } else if (error) {
    return { error };
  }
});
