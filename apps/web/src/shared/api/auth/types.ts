import type { components } from "../types";

export type LoginForm = {
  email: string;
  password: string;
  redirect: string | undefined;
};

export type RegisterForm = components["schemas"]["UserRegistrationRequest"];

export type UserPasswordResetForm = components["schemas"]["UserPasswordResetRequest"];
