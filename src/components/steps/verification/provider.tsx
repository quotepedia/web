import { type ParentComponent, createContext, useContext } from "solid-js";
import { type SetStoreFunction, createStore } from "solid-js/store";

// TODO: Add OTP expires_at and check it

export type VerificationStore = {
  email: string;
  otp: number;
};

export type VerificationContextValue = {
  store: VerificationStore;
  setStore: SetStoreFunction<VerificationStore>;
};

const VerificationContext = createContext<VerificationContextValue>();

export const VerificationProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore<VerificationStore>({} as VerificationStore);

  return <VerificationContext.Provider value={{ store, setStore }}>{props.children}</VerificationContext.Provider>;
};

export const useVerification = (): VerificationContextValue => {
  const context = useContext(VerificationContext);

  if (context === undefined) {
    throw new Error(`'useVerification' must be used within a 'VerificationProvider' component.`);
  }

  return context;
};
