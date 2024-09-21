import { Icon } from "solid-heroicons";

import {
  SettingsCardDescription,
  SettingsCardHeader,
  SettingsCardHeaderGroup,
  SettingsCardRoot,
  SettingsCardValue,
} from "./card";

export * from "./card";
export * from "./card.props";
export * from "./card.styles";

export const SettingsCard = Object.assign(SettingsCardRoot, {
  Icon: Icon,
  HeaderGroup: SettingsCardHeaderGroup,
  Header: SettingsCardHeader,
  Description: SettingsCardDescription,
  Value: SettingsCardValue,
});
