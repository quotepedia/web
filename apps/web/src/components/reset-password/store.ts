import { createStore } from "solid-js/store";

import type { RegisterForm } from "~/lib/api/auth";

export const createResetPasswordStore = () => {
  return createStore({} as RegisterForm);
};
