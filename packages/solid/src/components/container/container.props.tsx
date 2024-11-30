import type { ParentProps } from "solid-js";
import type { VariantProps } from "tailwind-variants";
import type { styles } from "./container.styles";

export type ContainerRootRenderProps = {
  class?: string;
};

export type ContainerRootVariantProps = VariantProps<typeof styles>;

export type ContainerRootProps = ParentProps<ContainerRootVariantProps & ContainerRootRenderProps>;
