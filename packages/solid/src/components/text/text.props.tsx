import type { JSX, ParentProps } from "solid-js";
import type { VariantProps } from "tailwind-variants";

import type { styles } from "./text.styles";

export type TextRootVariantProps = VariantProps<typeof styles>;

export type TextRootProps = ParentProps<TextRootVariantProps & JSX.StylableSVGAttributes>;
