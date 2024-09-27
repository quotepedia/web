import { createEffect, createSignal, mergeProps, on, onCleanup } from "solid-js";

import { createEventListener } from "@solid-primitives/event-listener";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";

import type { AnimationConfigWithPath, AnimationItem, RendererType } from "lottie-web";
import Lottie from "lottie-web/build/player/lottie_light";

export type LottieExpositorProps<R extends RendererType = "svg"> = Omit<AnimationConfigWithPath<R>, "container">;

export const LottieExpositor = (props: LottieExpositorProps) => {
  const defaultedProps = mergeProps(
    {
      loop: false,
    },
    props,
  );

  const [containerRef, setContainerRef] = createSignal<Element>();
  const [animationItem, setAnimationItem] = createSignal<AnimationItem>();

  const useVisibilityObserver = createVisibilityObserver();
  const isContainerVisible = useVisibilityObserver(containerRef);

  createEffect(
    on(containerRef, () => {
      const container = containerRef();
      if (!container) return;

      const animation = Lottie.loadAnimation({ container: container, ...defaultedProps });
      animationItem()?.destroy();
      setAnimationItem(animation);

      createEventListener(container, "click", () => animation.isPaused && animation.goToAndPlay(0));
    }),
  );

  createEffect(() => {
    const animation = animationItem();
    if (!animation) return;

    createEventListener(window, "blur", () => animation.pause());
    createEventListener(window, "focus", () => animation.play());
  });

  createEffect(() => {
    const animation = animationItem();
    if (!animation) return;

    isContainerVisible() ? animation.play() : animation.pause();
  });

  onCleanup(() => {
    animationItem()?.destroy();
  });

  return <span ref={setContainerRef} />;
};

export default LottieExpositor;
