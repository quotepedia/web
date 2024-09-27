import { clientOnly } from "@solidjs/start";
import { type ValidComponent, splitProps } from "solid-js";

import { type PolymorphicProps, Polymorphic } from "@kobalte/core/polymorphic";
import { type RendererType } from "lottie-web";

import { type LottieExpositorProps } from "./expositor";
import { Motion } from "../motion";

export const LottieExpositor = clientOnly(() => import("./expositor"));

export const LottiePresenter = <T extends ValidComponent = typeof Motion, R extends RendererType = "svg">(
  props: PolymorphicProps<T, LottieExpositorProps<R>>,
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
    <Polymorphic as={Motion} {...others}>
      <LottieExpositor {...options} />
    </Polymorphic>
  );
};
