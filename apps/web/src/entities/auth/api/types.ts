import type { components } from "@src/shared/api";

export type LoginForm = {
  email: string;
  password: string;
  redirect: string | undefined;
};

export type RegisterForm = components["schemas"]["UserRegistrationRequest"];

export type UserPasswordResetForm = components["schemas"]["UserPasswordResetRequest"];
