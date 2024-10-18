import type { JSX } from "solid-js";

export type CursorProps = {
  /**
   * Determines whether the cursor should blink.
   */
  blink: boolean;
} & JSX.StylableSVGAttributes;
