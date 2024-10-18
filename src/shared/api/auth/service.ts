import client from "~/shared/api/client";
import { formDataSerializer } from "~/shared/api/serializers";
import type { components } from "~/shared/api/schema";

export const $login = async (username: string, password: string) => {
  "use server";

  const result = await client.POST("/api/v1/auth/login", {
    body: {
      scope: "auth",
      username: username,
      password: password,
    },
    bodySerializer: formDataSerializer,
  });

  return { data: result.data, error: result.error };
};

export const $register = async (email: string, otp: number, password: string) => {
  "use server";

  const result = await client.POST("/api/v1/auth/register", {
    body: {
      email: email,
      otp: otp,
      password: password,
    },
  });

  return { data: result.data, error: result.error };
};

export const $resetUserPassword = async (body: components["schemas"]["UserPasswordResetRequest"]) => {
  "use server";

  const result = await client.PATCH("/api/v1/auth/reset-password", {
    body: body,
  });

  return { data: result.data, error: result.error };
};
