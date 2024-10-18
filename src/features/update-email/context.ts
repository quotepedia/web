import { createContext, useContext } from "solid-js";
import { SetStoreFunction, Store } from "solid-js/store";
import { CurrentUserEmailUpdateForm } from "~/shared/api/users/me/types";

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
