import type { JSX } from "solid-js";
import type { VariantProps } from "tailwind-variants";
import { styles } from "./heading.styles";

export type HeadingVariantProps = VariantProps<typeof styles>;

export type HeadingProps = HeadingVariantProps & JSX.StylableSVGAttributes;
