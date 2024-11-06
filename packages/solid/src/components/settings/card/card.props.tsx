import type { JSX, ParentProps } from "solid-js";
import type { VariantProps } from "tailwind-variants";

import { styles } from "./card.styles";

export type SettingsCardVariantProps = VariantProps<typeof styles>;
export type SettingsCardProps = ParentProps & JSX.StylableSVGAttributes & SettingsCardVariantProps;
export type SettingsCardHeaderGroupProps = ParentProps & JSX.StylableSVGAttributes;
export type SettingsCardHeaderProps = ParentProps & JSX.StylableSVGAttributes;
export type SettingsCardDescriptionProps = ParentProps & JSX.StylableSVGAttributes;
export type SettingsCardValueProps = ParentProps & JSX.StylableSVGAttributes;
