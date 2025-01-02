import type { ParentComponent } from "solid-js";
import { ResetPasswordContext, type ResetPasswordContextValue } from "./context";
import { createResetPasswordStore } from "./store";

export const ResetPasswordProvider: ParentComponent = (props) => {
  const [store, set] = createResetPasswordStore();

  const context: ResetPasswordContextValue = {
    store,
    set,
  };

  return <ResetPasswordContext.Provider value={context}>{props.children}</ResetPasswordContext.Provider>;
};
