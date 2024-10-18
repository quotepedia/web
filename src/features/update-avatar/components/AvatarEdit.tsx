import { createFileUploader } from "@solid-primitives/upload";
import { useAction, useSubmission } from "@solidjs/router";
import { Icon } from "solid-heroicons";
import { arrowTopRightOnSquare, arrowUpTray, camera, trash } from "solid-heroicons/solid-mini";
import { Component, Show } from "solid-js";
import { toast } from "solid-sonner";
import { Avatar, Dropdown, Separator } from "~/shared/components";
import { formatResourceURL } from "~/shared/api/media";
import { components } from "~/shared/api/schema";
import { removeCurrentUserAvatar, updateCurrentUserAvatar } from "~/shared/api/users/me";
import { useI18n } from "~/shared/i18n";

export type AvatarEditProps = {
  user: components["schemas"]["CurrentUserResponse"];
};

export const AvatarEdit: Component<AvatarEditProps> = (props) => {
  const i18n = useI18n();

  const updateAvatar = useAction(updateCurrentUserAvatar);
  const updatingAvatar = useSubmission(updateCurrentUserAvatar);
  const uploader = createFileUploader({ accept: "image/*" });

  const removeAvatar = useAction(removeCurrentUserAvatar);
  const removingAvatar = useSubmission(removeCurrentUserAvatar);

  const selectAvatar = () => {
    uploader.selectFiles(async (uploads) => {
      const result = await updateAvatar(uploads[0].file);
      if (result?.error) {
        toast.error(result.error.detail?.toString());
      }
    });
  };

  return (
    <Dropdown placement="bottom">
      <Dropdown.Trigger as={Avatar} aria-busy={updatingAvatar.pending || removingAvatar.pending}>
        <Avatar.Img src={props.user.avatar_url} alt={props.user.email} />
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 font-semibold text-white opacity-0 transition-opacity hover:opacity-100">
          <Icon path={camera} class="size-8" />
          <span>{i18n.t.components.avatarEdit.update()}</span>
        </div>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Show when={props.user.avatar_url}>
          {(avatar_url) => (
            <>
              <Dropdown.Item onSelect={() => window.open(formatResourceURL(avatar_url()), "_blank")}>
                <Dropdown.ItemIcon path={arrowTopRightOnSquare} class="size-4" />
                <Dropdown.ItemLabel>{i18n.t.components.avatarEdit.open()}</Dropdown.ItemLabel>
              </Dropdown.Item>
              <Separator orientation="horizontal" class="my-0.5" />
            </>
          )}
        </Show>
        <Dropdown.Item onSelect={selectAvatar} disabled={updatingAvatar.pending}>
          <Dropdown.ItemIcon path={arrowUpTray} class="size-4" />
          <Dropdown.ItemLabel>{i18n.t.components.avatarEdit.select()}</Dropdown.ItemLabel>
        </Dropdown.Item>
        <Dropdown.Item
          class="text-red-600"
          onSelect={removeAvatar}
          disabled={!props.user.avatar_url || removingAvatar.pending}
        >
          <Dropdown.ItemIcon path={trash} class="size-4" />
          <Dropdown.ItemLabel>{i18n.t.components.avatarEdit.remove()}</Dropdown.ItemLabel>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};
