import { Dropdown, Icon } from "@quotepedia/solid";
import { useAction, useSubmission } from "@solidjs/router";
import { deleteCollectionAction } from "~/lib/api/collections";
import { useMessage } from "~/lib/i18n";

export type DeleteCollectionDropdownItemProps = {
  id: number;
};

export const DeleteCollectionDropdownItem = (props: DeleteCollectionDropdownItemProps) => {
  const submit = useAction(deleteCollectionAction);
  const submitting = useSubmission(deleteCollectionAction);

  const onSelect = () => {
    submit(props.id);
  };

  return (
    <Dropdown.Item
      class="text-red-600"
      disabled={submitting.pending}
      aria-busy={submitting.pending}
      onSelect={onSelect}
    >
      <Icon icon="f7:trash" class="size-6" />
      <Dropdown.ItemLabel>{useMessage("delete")}</Dropdown.ItemLabel>
    </Dropdown.Item>
  );
};
