import { Fade } from "@quotepedia/solid";
import { clientOnly } from "@solidjs/start";
import { createSignal, onMount, Show } from "solid-js";
import { isServer } from "solid-js/web";
import { useSettings } from "~/shared/settings";

// @ts-ignore
const Root = clientOnly(() => import("solid-snowfall"));

export const Snowfall = () => {
  const settings = useSettings();

  const [mounted, setMounted] = createSignal();
  const [images, setImages] = createSignal<Array<HTMLImageElement>>();

  onMount(() => {
    const img = document.createElement("img");
    img.src = "/img/snowflake.png";

    img.onload = () => {
      setImages([img]);

      requestAnimationFrame(() => {
        setMounted(true);
      });
    };
  });

  return (
    <Fade duration={300}>
      <Show when={!isServer && mounted() && settings.store.snowfall}>
        <Root
          images={images()}
          snowflakeCount={50}
          radius={[10, 30]}
          speed={[0, 3.0]}
          wind={[-0.5, 2.0]}
          rotationSpeed={[-0.5, 1.0]}
          style={{ "z-index": 9999, position: "fixed", inset: 0 }}
        />
      </Show>
    </Fade>
  );
};

export default Snowfall;
