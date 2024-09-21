import client from "~/lib/api/client";

export const $getUserExists = async (email: string) => {
  "use server";

  const result = await client.POST("/api/v1/users/exists", {
    body: {
      email: email,
    },
  });
  return { data: result.data };
};
