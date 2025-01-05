import { RadioGroup } from "@kobalte/core/radio-group";
import { For } from "solid-js";
import { CategoriesRadioGroupItem } from "./CategoriesRadioGroupItem";
import { useEmojiPickerContext } from "./context";

export type CategoriesRadioGroupProps = {
  value?: number;
  onChange?: ((value: number) => void) | undefined;
};

export const CategoriesRadioGroup = (props: CategoriesRadioGroupProps) => {
  const context = useEmojiPickerContext();

  const onChange = (value: string) => {
    const group = Number(value);
    const index = context.categories.get(group);

    if (index === undefined) {
      return;
    }

    context.virtualizerHandle()?.scrollToIndex(index);

    props.onChange?.(Number(value));
  };

  return (
    <RadioGroup
      value={props.value?.toString() || "0"}
      onChange={onChange}
      orientation="horizontal"
      class="border-bg-secondary flex flex-row justify-between border-t p-1"
    >
      <For each={context.categories.keys().toArray()}>
        {(category) => <CategoriesRadioGroupItem value={category} />}
      </For>
    </RadioGroup>
  );
};
