import { mapFromEntries } from "@src/utils/entries";
import type { PluginCreator } from "tailwindcss/types/config";

export default (({ matchUtilities }) => {
  matchUtilities(
    {
      "container": (value: any) => ({
        containerType: value,
      }),
    },
    {
      values: mapFromEntries("normal", "size", "inline-size", "inherit", "initial"),
    },
  );
  matchUtilities(
    {
      "text-cqi": (value: any) => ({
        fontSize: `${value}cqi`,
      }),
    },
    {
      values: mapFromEntries(25, 50, 75),
    },
  );
}) satisfies PluginCreator;
