import type { VariantProps } from "tailwind-variants";

import { styles } from "./heading.styles";

export type HeadingRootRenderProps = {
  class?: string;
};

export type HeadingRootVariantProps = VariantProps<typeof styles>;

export type HeadingRootProps = HeadingRootRenderProps & HeadingRootVariantProps;
