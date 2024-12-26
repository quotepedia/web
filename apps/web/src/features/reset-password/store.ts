import { createStore } from "solid-js/store";

import type { RegisterForm } from "~/entities/auth";

export const createResetPasswordStore = () => {
  return createStore({} as RegisterForm);
};
