import { createEventListener } from "@solid-primitives/event-listener";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";

import {
  type ComponentProps,
  type VoidComponent,
  createEffect,
  createSignal,
  mergeProps,
  on,
  onCleanup,
  splitProps,
} from "solid-js";

import type { AnimationConfigWithPath, AnimationItem, RendererType } from "lottie-web/build/player/lottie_light";

export type LottieProps<R extends RendererType = "svg"> = ComponentProps<"div"> & LottieConfigProps<R>;

export type LottieConfigProps<R extends RendererType = "svg"> = Omit<AnimationConfigWithPath<R>, "container">;

export const Lottie: VoidComponent<LottieProps> = (props) => {
  const defaultedProps = mergeProps({ loop: false }, props);

  const [configProps, otherProps] = splitProps(defaultedProps, [
    "assetsPath",
    "audioFactory",
    "autoplay",
    "initialSegment",
    "loop",
    "name",
    "path",
    "renderer",
    "rendererSettings",
  ]);

  const [containerRef, setContainerRef] = createSignal<Element>();
  const [animationItem, setAnimationItem] = createSignal<AnimationItem>();

  const isContainerVisible = createVisibilityObserver()(containerRef);

  const path = () => configProps.path;
  const play = () => animationItem()?.play();
  const pause = () => animationItem()?.pause();

  createEffect(
    on(path, async () => {
      const LottiePlayer = (await import("lottie-web/build/player/lottie_light")).default;

      // NOTE: `requestAnimationFrame` call here is important to ensure that the
      // animation stays in sync with the browser's repaint cycle in all scenarios.
      requestAnimationFrame(() => {
        setAnimationItem((animation) => {
          animation?.destroy();

          const container = containerRef();

          if (container === undefined) {
            throw new Error("Lottie animation container is undefined. Ensure the component is mounted.");
          }

          return LottiePlayer.loadAnimation({ container: container, ...configProps });
        });
      });
    }),
  );

  createEffect(() => {
    isContainerVisible() ? play() : pause();
  });

  createEffect(() => {
    createEventListener(window, "focus", play);
    createEventListener(window, "blur", pause);
  });

  onCleanup(() => {
    setAnimationItem((animation) => {
      animation?.destroy();
      return undefined;
    });
  });

  return <div ref={setContainerRef} {...otherProps} />;
};

export default Lottie;
