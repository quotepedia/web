import type { UserPasswordResetForm } from "@src/entities/auth";
import { createContext, useContext } from "solid-js";
import type { SetStoreFunction, Store } from "solid-js/store";

export type ResetPasswordContextValue = {
  store: Store<UserPasswordResetForm>;
  set: SetStoreFunction<UserPasswordResetForm>;
};

export const ResetPasswordContext = createContext<ResetPasswordContextValue>();

export function useResetPassword() {
  const context = useContext(ResetPasswordContext);

  if (context === undefined) {
    throw new Error(`The 'useResetPassword' must be used within a <ResetPasswordProvider> component`);
  }

  return context;
}
