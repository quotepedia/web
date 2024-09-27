import { createContext, ParentComponent, useContext } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";
import { RegisterForm, UserPasswordResetForm } from "~/lib/api/auth";

export type ResetPasswordContextValue = {
  store: Store<UserPasswordResetForm>;
  setStore: SetStoreFunction<UserPasswordResetForm>;
};

export const ResetPasswordContext = createContext<ResetPasswordContextValue>();

export function useResetPassword() {
  const context = useContext(ResetPasswordContext);

  if (context === undefined) {
    throw new Error(`'useRecover' must be used within a 'RecoverProvider' component`);
  }

  return context;
}

export const ResetPasswordProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore({} as RegisterForm);

  const context: ResetPasswordContextValue = {
    store,
    setStore,
  };

  return <ResetPasswordContext.Provider value={context}>{props.children}</ResetPasswordContext.Provider>;
};
