import { type ParentComponent } from "solid-js";
import { SettingsContext, type SettingsContextValue } from "./context";
import { createSettingsPersistence } from "./store";

export const SettingsProvider: ParentComponent = (props) => {
  const [store, set] = createSettingsPersistence();

  const context: SettingsContextValue = {
    store,
    set,
  };

  return <SettingsContext.Provider value={context}>{props.children}</SettingsContext.Provider>;
};
