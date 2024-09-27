import { createContext, ParentComponent, useContext } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";
import { RegisterForm } from "~/lib/api/auth";

export type RegistrationContextValue = {
  store: Store<RegisterForm>;
  setStore: SetStoreFunction<RegisterForm>;
};

export const RegistrationContext = createContext<RegistrationContextValue>();

export function useRegistration() {
  const context = useContext(RegistrationContext);

  if (context === undefined) {
    throw new Error(`'useRegistration' must be used within a 'RegistrationProvider' component`);
  }

  return context;
}

export const RegistrationProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore({} as RegisterForm);

  const context: RegistrationContextValue = {
    store,
    setStore,
  };

  return <RegistrationContext.Provider value={context}>{props.children}</RegistrationContext.Provider>;
};
