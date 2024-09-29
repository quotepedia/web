import { createContext, ParentComponent, useContext } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";
import { CurrentUserEmailUpdateForm } from "~/lib/api/users/me/types";

export type CurrentUserEmailUpdateStoreValue = CurrentUserEmailUpdateForm & {
  previousEmail: string;
};

export type ChangeEmailContextValue = {
  store: Store<CurrentUserEmailUpdateStoreValue>;
  setStore: SetStoreFunction<CurrentUserEmailUpdateStoreValue>;
};

export const ChangeEmailContext = createContext<ChangeEmailContextValue>();

export function useChangeEmail() {
  const context = useContext(ChangeEmailContext);

  if (context === undefined) {
    throw new Error(`'useChangeEmail' must be used within a 'ChangeEmailProvider' component`);
  }

  return context;
}

export const ChangeEmailProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore({} as CurrentUserEmailUpdateStoreValue);

  const context: ChangeEmailContextValue = {
    store,
    setStore,
  };

  return <ChangeEmailContext.Provider value={context}>{props.children}</ChangeEmailContext.Provider>;
};
