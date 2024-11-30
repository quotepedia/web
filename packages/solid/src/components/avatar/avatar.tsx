import { type ValidComponent, Show, splitProps } from "solid-js";
import { Transition } from "solid-transition-group";

import { Image } from "@kobalte/core/image";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import type { AvatarImgProps, AvatarRootProps } from "./avatar.props";
import { styles } from "./avatar.styles";

export const AvatarRoot = <T extends ValidComponent = "span">(props: PolymorphicProps<T, AvatarRootProps<T>>) => {
  const [styleProps, otherProps] = splitProps(props as AvatarRootProps<T>, ["class"]);
  return <Image class={styles().root(styleProps)} {...otherProps} />;
};

export const AvatarImg = <T extends ValidComponent = "img">(props: PolymorphicProps<T, AvatarImgProps<T>>) => {
  const [localProps, styleProps, otherProps] = splitProps(props as AvatarImgProps<T>, ["src"], ["class"]);

  return (
    <Transition
      mode="outin"
      enterClass="blur-md"
      enterToClass="blur-0"
      exitClass="blur-0"
      exitToClass="blur-md"
      enterActiveClass="transition"
      exitActiveClass="transition"
    >
      <Show when={localProps.src} fallback={<span class={styles().alt()}>{props.alt.slice(0, 2)}</span>}>
        {(src) => (
          <span>
            <Image.Img src={src()} class={styles().img(styleProps)} {...otherProps} />
            <Image.Fallback class={styles().fallback()} />
          </span>
        )}
      </Show>
    </Transition>
  );
};
