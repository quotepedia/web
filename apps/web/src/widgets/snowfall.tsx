import { createSignal, onMount, Show } from "solid-js";

import { Fade } from "@quotepedia/solid";
import { clientOnly } from "@solidjs/start";
import { useSettings } from "~/shared/settings";

// @ts-ignore
const Root = clientOnly(() => import("solid-snowfall"));

export const Snowfall = () => {
  const settings = useSettings();

  const [images, setImages] = createSignal<Array<HTMLImageElement>>();

  onMount(() => {
    const img = document.createElement("img");
    img.src = "/img/snowflake.png";

    setImages([img]);
  });

  return (
    <Fade duration={300}>
      <Show when={settings.store.snowfall}>
        <Root
          images={images()}
          snowflakeCount={50}
          radius={[10, 30]}
          speed={[0, 3.0]}
          wind={[-0.5, 2.0]}
          rotationSpeed={[-0.5, 1.0]}
          style={{ "z-index": 9999, position: "fixed", top: 0, bottom: 0, right: 0, left: 0 }}
        />
      </Show>
    </Fade>
  );
};

export default Snowfall;
