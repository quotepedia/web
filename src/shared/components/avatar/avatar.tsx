import { type ValidComponent, Show, splitProps } from "solid-js";
import { Transition } from "solid-transition-group";

import { Image } from "@kobalte/core/image";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { formatStorageObject } from "~/shared/api";
import { cn } from "~/shared/utils/css";

import type { AvatarImgProps, AvatarRootProps } from "./avatar.props";
import { styles } from "./avatar.styles";

export const AvatarRoot = <T extends ValidComponent = "span">(props: PolymorphicProps<T, AvatarRootProps<T>>) => {
  const [local, others] = splitProps(props as AvatarRootProps<T>, ["class"]);

  return <Image class={cn(styles().root(), local.class)} {...others} />;
};

export const AvatarImg = <T extends ValidComponent = "img">(props: PolymorphicProps<T, AvatarImgProps<T>>) => {
  const [local, others] = splitProps(props as AvatarImgProps<T>, ["class", "src"]);

  return (
    <Transition
      mode="outin"
      enterClass="blur-md"
      enterToClass="blur-0"
      exitClass="blur-0"
      exitToClass="blur-md"
      enterActiveClass="transition-filter"
      exitActiveClass="transition-filter"
    >
      <Show when={local.src} fallback={<span class={styles().alt()}>{props.alt.slice(0, 2)}</span>}>
        {(src) => (
          <span>
            <Image.Img src={formatStorageObject(src())} class={cn(styles().img(), local.class)} {...others} />
            <Image.Fallback class={styles().fallback()} />
          </span>
        )}
      </Show>
    </Transition>
  );
};
