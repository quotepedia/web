import type { CurrentUserEmailUpdateForm } from "@src/entities/user/api/me/types";
import { createContext, useContext } from "solid-js";
import type { SetStoreFunction, Store } from "solid-js/store";

export type CurrentUserEmailUpdateStoreValue = CurrentUserEmailUpdateForm & {
  previousEmail: string;
};

export type UpdateEmailContextValue = {
  store: Store<CurrentUserEmailUpdateStoreValue>;
  set: SetStoreFunction<CurrentUserEmailUpdateStoreValue>;
};

export const UpdateEmailContext = createContext<UpdateEmailContextValue>();

export function useUpdateEmail() {
  const context = useContext(UpdateEmailContext);

  if (context === undefined) {
    throw new Error(`The 'useUpdateEmail' must be used within a <UpdateEmailProvider> component`);
  }

  return context;
}
