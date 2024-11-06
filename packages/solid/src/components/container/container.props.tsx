import type { ParentProps } from "solid-js";
import type { VariantProps } from "tailwind-variants";
import type { styles } from "./container.styles";

export type ContainerVariantProps = VariantProps<typeof styles>;

export type ContainerRenderProps = {
  class?: string;
};

export type ContainerProps = ParentProps<ContainerVariantProps & ContainerRenderProps>;
