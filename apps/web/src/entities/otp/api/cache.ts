import { query } from "@solidjs/router";
import { type components, client } from "@src/shared/api";

export const verifyOtp = query(async (body: components["schemas"]["OTPVerifyRequest"]) => {
  "use server";

  const { error } = await client.POST("/api/v1/otp/verify", {
    body: body,
  });

  return { error };
}, "isCorrectOtp");

export const sendOtp = query(async (email: string) => {
  "use server";

  const { data } = await client.POST("/api/v1/otp/send", {
    body: {
      email: email,
    },
  });

  return data;
}, "otp");
