import { action, redirect } from "@solidjs/router";

import { clearSession, updateSession } from "~/shared/session";

import type { LoginForm, RegisterForm, UserPasswordResetForm } from "./types";
import { client } from "../instance";
import { serializeFormData } from "../serializers";

export const loginAction = action(async (form: LoginForm) => {
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

export const registerAction = action(async (body: RegisterForm) => {
  "use server";

  const { data, error } = await client.POST("/api/v1/auth/register", { body: body });

  if (data) {
    await updateSession(data);
    throw redirect("/");
  }

  return { error };
});

export const logoutAction = action(async () => {
  "use server";

  await clearSession();

  throw redirect("/");
});

export const resetPasswordAction = action(async (body: UserPasswordResetForm) => {
  "use server";

  const { data, error } = await client.PATCH("/api/v1/auth/reset-password", { body: body });

  if (data) {
    await updateSession(data);
  }

  return { error };
});
