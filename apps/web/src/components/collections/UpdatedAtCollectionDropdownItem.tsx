import { Dropdown, Icon } from "@quotepedia/solid";
import { Component } from "solid-js";
import type { components } from "~/lib/api";
import { createRelative } from "~/utils/date";

export type UpdatedAtCollectionDropdownItemProps = {
  collection: components["schemas"]["CollectionResponse"];
};

const UpdatedAtCollectionDropdownItem: Component<UpdatedAtCollectionDropdownItemProps> = (props) => {
  const [relative] = createRelative(() => props.collection.updated_at);

  return (
    <Dropdown.Item class="text-fg-muted" closeOnSelect={false}>
      <Icon icon="f7:clock" class="size-6" />
      <Dropdown.ItemLabel>{relative()}</Dropdown.ItemLabel>
    </Dropdown.Item>
  );
};

export default UpdatedAtCollectionDropdownItem;
