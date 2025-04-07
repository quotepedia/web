import { Button, Dropdown, Separator } from "@quotepedia/solid";
import { createAsync } from "@solidjs/router";
import { Component, Show } from "solid-js";
import type { components } from "~/lib/api";
import { getCurrentUser } from "~/lib/api/users/me";
import { DeleteCollectionDropdownItem } from "./DeleteCollectionDropdownItem";
import ToggleCollectionVisibilityDropdownItem from "./ToggleCollectionVisibilityDropdownItem";
import UpdatedAtCollectionDropdownItem from "./UpdatedAtCollectionDropdownItem";

export type CollectionDropdownProps = {
  collection: components["schemas"]["CollectionResponse"];
};

const CollectionDropdown: Component<CollectionDropdownProps> = (props) => {
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <Dropdown>
      <Dropdown.Trigger as={Button} style="ghost" leadingIcon="f7:ellipsis-circle" class="max-lg:pe-3" />
      <Dropdown.Content>
        <Show when={currentUser()?.id === props.collection.created_by_user_id}>
          <DeleteCollectionDropdownItem id={props.collection.id} />
          <ToggleCollectionVisibilityDropdownItem collection={props.collection} />
          <Separator class="my-0.5" />
        </Show>
        <UpdatedAtCollectionDropdownItem collection={props.collection} />
      </Dropdown.Content>
    </Dropdown>
  );
};

export default CollectionDropdown;
