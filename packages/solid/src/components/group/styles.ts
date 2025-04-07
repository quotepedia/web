import { tv, type VariantProps } from "tailwind-variants";

const styles = tv({
  slots: {
    root: ["select-none space-y-1.5 w-full"],
    label: ["uppercase"],
    content: [
      "group/group overflow-hidden",
      "bg-bg-default w-full rounded-lg",
      "divide-y divide-bg-secondary",
      "ring-1 ring-bg-secondary",
      "transition-[background-color,box-shadow]",
    ],
    description: [""],
    item: ["flex w-full items-center justify-center gap-3", "py-2.5"],
    itemLabel: ["text-base leading-none"],
    itemDescription: [""],
    itemValue: ["transition"],
    itemIcon: ["text-fg-accent", "size-6", "shrink-0"],
    itemChevron: ["text-fg-muted stroke-current", "-ms-1.5 size-4"],
    itemGroup: ["min-w-0 grow space-y-0.5 text-start"],
  },
  compoundSlots: [
    {
      slots: ["label", "description", "item"],
      class: ["px-3"],
    },
    {
      slots: ["label", "description", "itemValue", "itemDescription"],
      class: ["text-sm text-fg-muted"],
    },
    {
      slots: ["itemLabel", "itemDescription"],
      class: ["overflow-x-clip overflow-y-visible overflow-ellipsis whitespace-nowrap"],
    },
  ],
});

export type GroupVariantProps = VariantProps<typeof styles>;

export default styles;
