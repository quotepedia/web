import client from "~/lib/api/client";
import type { components } from "~/lib/api/schema";

export const $sendOtp = async (email: string) => {
  "use server";

  const result = await client.POST("/api/v1/otp/send", {
    body: {
      email: email,
    },
  });
  return { data: result.data };
};

export const $verifyOtp = async (body: components["schemas"]["OTPVerifyRequest"]) => {
  "use server";

  const result = await client.POST("/api/v1/otp/verify", {
    body: body,
  });
  return { data: result.data, error: result.error };
};
