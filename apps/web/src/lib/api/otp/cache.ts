import { query } from "@solidjs/router";
import type { components } from "../types";
import { client } from "../instance";

export const verifyOTP = query(async (body: components["schemas"]["OTPVerifyRequest"]) => {
  "use server";

  const { error } = await client.POST("/api/v1/otp/verify", {
    body: body,
  });

  return { error };
}, "isCorrectOtp");

export const sendOTP = query(async (email: string) => {
  "use server";

  const { data } = await client.POST("/api/v1/otp/send", {
    body: {
      email: email,
    },
  });

  return data;
}, "otp");
