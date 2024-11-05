import type { ParentComponent } from "solid-js";
import { RegistrationContext, type RegistrationContextValue } from "./context";
import { createRegistrationStore } from "./store";

export const RegistrationProvider: ParentComponent = (props) => {
  const [store, set] = createRegistrationStore();

  const context: RegistrationContextValue = {
    store,
    set,
  };

  return <RegistrationContext.Provider value={context}>{props.children}</RegistrationContext.Provider>;
};
