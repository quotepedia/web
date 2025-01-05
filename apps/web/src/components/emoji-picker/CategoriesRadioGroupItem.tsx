import { RadioGroup } from "@kobalte/core/radio-group";
import { Icon } from "@quotepedia/solid";
import { Show } from "solid-js";
import { useEmojiPickerContext } from "./context";
import { icons } from "./constants";

export const CategoriesRadioGroupItem = (props: { value: number }) => {
  const context = useEmojiPickerContext();

  return (
    <RadioGroup.Item
      title={context.getGroupName(props.value)}
      value={props.value.toString()}
      class="text-fg-muted hover:bg-bg-secondary/75 data-[checked]:bg-bg-tertiary/75 flex aspect-square size-8 items-center justify-center rounded-md hover:backdrop-blur-xl data-[checked]:backdrop-blur-xl"
    >
      <RadioGroup.ItemControl class="flex size-full cursor-pointer items-center justify-center">
        <RadioGroup.ItemInput />
        <RadioGroup.ItemLabel class="flex cursor-pointer items-center justify-center">
          <Show when={icons[props.value]}>{(icon) => <Icon icon={icon()} class="size-6" />}</Show>
        </RadioGroup.ItemLabel>
      </RadioGroup.ItemControl>
    </RadioGroup.Item>
  );
};
