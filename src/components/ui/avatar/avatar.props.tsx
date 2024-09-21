import type { JSX, ValidComponent } from "solid-js";
import type { ImageRootProps, ImageImgProps } from "@kobalte/core/image";

export type AvatarRootProps<T extends ValidComponent = "span"> = ImageRootProps<T> & JSX.StylableSVGAttributes;
export type AvatarImgProps<T extends ValidComponent = "img"> = Omit<ImageImgProps<T>, "src"> &
  JSX.StylableSVGAttributes & {
    alt: string;
    src: string | null | undefined;
  };
