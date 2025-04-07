import { Dropdown, Icon, toast } from "@quotepedia/solid";
import { useAction, useSubmission, useSubmissions } from "@solidjs/router";
import { Component, createEffect, createMemo, Match, on, Switch, type JSX } from "solid-js";
import type { components } from "~/lib/api";
import { changeCollectionVisibilityAction, CollectionVisibility } from "~/lib/api/collections";
import { useTranslator } from "~/lib/i18n";

export type ToggleCollectionVisibilityDropdownItemProps = {
  collection: components["schemas"]["CollectionResponse"];
};

const ToggleCollectionVisibilityDropdownItem: Component<ToggleCollectionVisibilityDropdownItemProps> = (props) => {
  const t = useTranslator();

  const submit = useAction(changeCollectionVisibilityAction);
  const submission = useSubmission(changeCollectionVisibilityAction);

  const onSelect = async () => {
    const visibility =
      props.collection.visibility === CollectionVisibility.Private
        ? CollectionVisibility.Public
        : CollectionVisibility.Private;

    await submit(props.collection.id, { visibility });
  };

  return (
    <Dropdown.Item onSelect={onSelect} disabled={submission.pending} aria-busy={submission.pending}>
      <Switch>
        <Match when={props.collection.visibility === CollectionVisibility.Private}>
          <Icon icon="f7:lock-open" class="size-6" />
          <Dropdown.ItemLabel>{t("makePublic")}</Dropdown.ItemLabel>
        </Match>
        <Match when={props.collection.visibility === CollectionVisibility.Public}>
          <Icon icon="f7:lock" class="size-6" />
          <Dropdown.ItemLabel>{t("makePrivate")}</Dropdown.ItemLabel>
        </Match>
      </Switch>
    </Dropdown.Item>
  );
};

export default ToggleCollectionVisibilityDropdownItem;
