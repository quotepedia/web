import client from "~/shared/api/client";
import { formDataSerializer } from "~/shared/api/serializers";
import { CurrentUserEmailUpdateForm } from "./types";
import { UserPasswordResetForm } from "../../auth";

export const $getCurrentUser = async () => {
  "use server";

  const result = await client.GET("/api/v1/users/me");
  return { data: result.data };
};

export const $removeCurrentUserAvatar = async () => {
  "use server";

  const result = await client.DELETE("/api/v1/users/me/avatar");
  return { data: result.data };
};

export const $updateCurrentUserAvatar = async (file: File) => {
  "use server";

  const result = await client.PATCH("/api/v1/users/me/avatar", {
    body: {
      file: file,
    },
    bodySerializer: formDataSerializer,
  });
  return { data: result.data, error: result.error, status: result.response.status };
};

export const $updateCurrentUserEmail = async (body: CurrentUserEmailUpdateForm) => {
  "use server";

  const result = await client.PATCH("/api/v1/users/me/email", {
    body: body,
  });
  return { data: result.data, error: result.error };
};

export const $updateCurrentUserPassword = async (password: string) => {
  "use server";

  const result = await client.PATCH("/api/v1/users/me/password", {
    body: {
      password: password,
    },
  });
  return { data: result.data, error: result.error };
};
