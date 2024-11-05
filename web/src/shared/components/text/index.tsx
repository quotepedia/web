import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import { splitProps, type ParentProps, type ValidComponent } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";

export const styles = tv({
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    variant: {
      default: "text-fg-body",
      soft: "text-fg-soft",
      muted: "text-fg-muted",
      success: "text-green-600",
      danger: "text-red-600",
      accent: "text-fg-accent",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export type TextVariantProps = VariantProps<typeof styles>;

export type TextProps = Omit<ParentProps<TextVariantProps>, "class">;

export const Text = <T extends ValidComponent = "p">(props: PolymorphicProps<T, TextProps>) => {
  const [variantProps, otherProps] = splitProps(props, ["variant", "size"]);
  return <Polymorphic as="p" class={styles(variantProps)} {...otherProps} />;
};
