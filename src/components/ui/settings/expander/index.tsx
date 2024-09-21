import {
  SettingsExpanderContent,
  SettingsExpanderIndicator,
  SettingsExpanderRoot,
  SettingsExpanderTrigger,
} from "./expander";

export * from "./expander";
export * from "./expander.props";

export const SettingsExpander = Object.assign(SettingsExpanderRoot, {
  Trigger: SettingsExpanderTrigger,
  Content: SettingsExpanderContent,
  Indicator: SettingsExpanderIndicator,
});
