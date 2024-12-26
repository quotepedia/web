import type { RegisterForm } from "@src/entities/auth";
import { createStore } from "solid-js/store";

export const createRegistrationStore = () => {
  return createStore({} as RegisterForm);
};
