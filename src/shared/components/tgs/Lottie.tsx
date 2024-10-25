import { clientOnly } from "@solidjs/start";
import { type ValidComponent, splitProps } from "solid-js";

import { type PolymorphicProps, Polymorphic } from "@kobalte/core/polymorphic";
import { type RendererType } from "lottie-web";

import { type LottieProps } from "./Player";

export const LottiePlayer = clientOnly(() => import("./Player"));

export const Lottie = <T extends ValidComponent = "div", R extends RendererType = "svg">(
  props: PolymorphicProps<T, LottieProps<R>>,
) => {
  const [options, others] = splitProps(props, [
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

  return (
    <Polymorphic as="div" {...others}>
      <LottiePlayer {...options} />
    </Polymorphic>
  );
};

export default Lottie;
