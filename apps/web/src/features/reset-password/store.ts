import type { RegisterForm } from "@src/entities/auth";
import { createStore } from "solid-js/store";

export const createResetPasswordStore = () => {
  return createStore({} as RegisterForm);
};
