import { createContext, useContext } from "solid-js";
import { SetStoreFunction, Store } from "solid-js/store";
import { UserPasswordResetForm } from "~/shared/api/auth";

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
