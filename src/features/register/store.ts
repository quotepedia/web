import { createStore } from "solid-js/store";

import type { RegisterForm } from "~/entities/auth";

export const createRegistrationStore = () => {
  return createStore({} as RegisterForm);
};
