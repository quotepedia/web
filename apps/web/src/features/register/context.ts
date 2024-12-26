import type { RegisterForm } from "@src/entities/auth";
import { createContext, useContext } from "solid-js";
import type { SetStoreFunction, Store } from "solid-js/store";

export type RegistrationContextValue = {
  store: Store<RegisterForm>;
  set: SetStoreFunction<RegisterForm>;
};

export const RegistrationContext = createContext<RegistrationContextValue>();

export function useRegistration() {
  const context = useContext(RegistrationContext);

  if (context === undefined) {
    throw new Error(`The 'useRegistration' must be used within a <RegistrationProvider> component`);
  }

  return context;
}
