import type { JSX } from "solid-js";

export type CursorProps = {
  /**
   * Determines whether the cursor should flash.
   */
  flash: boolean;
} & JSX.StylableSVGAttributes;
