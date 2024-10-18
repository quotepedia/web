import type { JSX, ParentProps } from "solid-js";

import type { CollapsibleContentProps, CollapsibleRootProps, CollapsibleTriggerProps } from "@kobalte/core/collapsible";
import type { SettingsCardProps } from "../card/card.props";

export type SettingsExpanderRootProps = CollapsibleRootProps & JSX.StylableSVGAttributes & ParentProps;
export type SettingsExpanderTriggerProps = CollapsibleTriggerProps & SettingsCardProps & ParentProps;
export type SettingsExpanderContentProps = CollapsibleContentProps & JSX.StylableSVGAttributes & ParentProps;
