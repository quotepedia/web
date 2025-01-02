import { createStore } from "solid-js/store";

import type { RegisterForm } from "~/shared/api/auth";

export const createRegistrationStore = () => {
  return createStore({} as RegisterForm);
};
