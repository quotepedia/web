import client from "~/lib/api/client";
import { formDataSerializer } from "~/lib/api/serializers";
import type { components } from "~/lib/api/schema";

export const $authenticate = async (username: string, password: string) => {
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

export const $resetPassword = async (body: components["schemas"]["UserPasswordResetRequest"]) => {
  "use server";

  const result = await client.PATCH("/api/v1/auth/reset-password", {
    body: body,
  });

  return { data: result.data, error: result.error };
};
