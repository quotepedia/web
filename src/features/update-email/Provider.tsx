import type { ParentComponent } from "solid-js";
import { UpdateEmailContext, type UpdateEmailContextValue } from "./context";
import { createUpdateEmailStore } from "./store";

export const ChangeEmailProvider: ParentComponent = (props) => {
  const [store, set] = createUpdateEmailStore();

  const context: UpdateEmailContextValue = {
    store,
    set,
  };

  return <UpdateEmailContext.Provider value={context}>{props.children}</UpdateEmailContext.Provider>;
};
