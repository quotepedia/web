import client from "~/lib/api/client";
import { formDataSerializer } from "~/lib/api/serializers";

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
