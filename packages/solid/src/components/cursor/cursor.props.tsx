import type { VariantProps } from "tailwind-variants";
import type { styles } from "./cursor.styles";

export type CursorRootRenderProps = {
  class?: string;
};

export type CursorRootVariantProps = VariantProps<typeof styles>;

export type CursorRootProps = CursorRootRenderProps & CursorRootVariantProps;
