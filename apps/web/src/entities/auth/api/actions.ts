import { action, redirect } from "@solidjs/router";

import { client, serializeFormData } from "~/shared/api";
import { clearSession, updateSession } from "~/shared/session";

import type { LoginForm, RegisterForm, UserPasswordResetForm } from "./types";

export const authenticate = action(async (form: LoginForm) => {
  "use server";

  const { data, error } = await client.POST("/api/v1/auth/login", {
    body: {
      scope: "",
      username: form.email,
      password: form.password,
    },
    bodySerializer: serializeFormData,
  });

  if (data) {
    await updateSession(data);
    throw redirect(form.redirect || "/");
  }

  return { error };
});

export const register = action(async (body: RegisterForm) => {
  "use server";

  const { data, error } = await client.POST("/api/v1/auth/register", { body: body });

  if (data) {
    await updateSession(data);
    throw redirect("/");
  }

  return { error };
});

export const unauthenticate = action(async () => {
  "use server";

  await clearSession();

  throw redirect("/");
});

export const resetUserPassword = action(async (body: UserPasswordResetForm) => {
  "use server";

  const { data, error } = await client.PATCH("/api/v1/auth/reset-password", { body: body });

  if (data) {
    await updateSession(data);
  }

  return { error };
});
