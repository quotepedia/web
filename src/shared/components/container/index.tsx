import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";

export const styles = tv({
  base: "container mx-auto",
  variants: {
    size: {
      tight: "max-w-sm",
      wide: "max-w-3xl",
    },
    padding: {
      default: "px-4 py-6",
    },
  },
  defaultVariants: {
    padding: "default",
  },
});

export type ContainerVariantProps = VariantProps<typeof styles>;

export type ContainerRenderProps = {
  class?: string;
};

export type ContainerProps = ParentProps<ContainerVariantProps & ContainerRenderProps>;

export const Container = <T extends ValidComponent = "div">(props: PolymorphicProps<T, ContainerProps>) => {
  const [variantProps, otherProps] = splitProps(props, ["size", "padding", "class"]);

  return <Polymorphic as="div" class={styles(variantProps)} {...otherProps} />;
};
