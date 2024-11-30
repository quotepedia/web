import type { ImageImgProps, ImageRootProps } from "@kobalte/core/image";
import type { ValidComponent } from "solid-js";

export type AvatarRootRenderProps = {
  class?: string;
};

export type AvatarRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ImageRootProps<T> &
  AvatarRootRenderProps;

export type AvatarImgRenderProps = {
  alt: string;
  src: string | null | undefined;
  class?: string;
};

export type AvatarImgProps<T extends ValidComponent | HTMLElement = HTMLElement> = Omit<ImageImgProps<T>, "src"> &
  AvatarImgRenderProps;
