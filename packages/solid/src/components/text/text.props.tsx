import type { ParentProps } from "solid-js";
import type { VariantProps } from "tailwind-variants";
import type { styles } from "./text.styles";

export type TextVariantProps = VariantProps<typeof styles>;

export type TextProps = Omit<ParentProps<TextVariantProps>, "class">;
