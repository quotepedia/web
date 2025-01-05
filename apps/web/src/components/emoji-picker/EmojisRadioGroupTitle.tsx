import { useEmojiPickerContext } from "./context";

export const EmojisRadioGroupTitle = (props: { group: number }) => {
  const context = useEmojiPickerContext();

  return (
    <span class="text-fg-muted flex grow items-center justify-start px-1 py-1 text-xs font-semibold uppercase">
      {context.getGroupName(props.group)}
    </span>
  );
};
