import { Avatar, Button, Dialog, Dropdown, Icon, Stack, toast } from "@quotepedia/solid";
import { createFileUploader } from "@solid-primitives/upload";
import { useAction, useSubmission } from "@solidjs/router";
import { type Component, createSignal, Show } from "solid-js";
import { type components, formatStorageObject } from "~/lib/api";
import { removeCurrentUserAvatarAction, updateCurrentUserAvatarAction } from "~/lib/api/users/me";
import { useScopedTranslator } from "~/lib/i18n";

export type AvatarEditProps = {
  user: components["schemas"]["CurrentUserResponse"];
};

export const AvatarEdit: Component<AvatarEditProps> = (props) => {
  const t = useScopedTranslator("components.avatarEdit");

  const updateAvatar = useAction(updateCurrentUserAvatarAction);
  const updatingAvatar = useSubmission(updateCurrentUserAvatarAction);
  const uploader = createFileUploader({ accept: "image/*" });

  const removeAvatar = useAction(removeCurrentUserAvatarAction);
  const removingAvatar = useSubmission(removeCurrentUserAvatarAction);
  const [isRemoveAvatarConfirmOpen, setIsRemoveAvatarConfirmOpen] = createSignal(false);
  const openRemoveAvatarConfirm = () => setIsRemoveAvatarConfirmOpen(true);

  const selectAvatar = async () => {
    uploader.selectFiles(async (uploads) => {
      const file = uploads[0]?.file;
      if (!file) {
        return;
      }
      const result = await updateAvatar(file);
      if (result?.error) {
        toast(result.error.detail?.toString());
      }
    });
  };

  return (
    <>
      <Dropdown placement="bottom" gutter={4}>
        <Dropdown.Trigger as={Avatar} aria-busy={updatingAvatar.pending || removingAvatar.pending}>
          <Avatar.Img
            src={props.user.avatar_url && formatStorageObject(props.user.avatar_url)}
            alt={props.user.email}
          />
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 font-semibold text-white opacity-0 transition-opacity hover:opacity-100">
            <Icon icon="f7:camera" class="size-12" />
          </div>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Show when={props.user.avatar_url}>
            {(avatar_url) => (
              <Dropdown.Item onSelect={() => window.open(formatStorageObject(avatar_url()), "_blank")}>
                <Icon icon="f7:link" class="size-6" />
                <Dropdown.ItemLabel>{t("dropdown.open")}</Dropdown.ItemLabel>
              </Dropdown.Item>
            )}
          </Show>
          <Dropdown.Item onSelect={selectAvatar} disabled={updatingAvatar.pending}>
            <Icon icon="f7:cloud-upload" class="size-6" />
            <Dropdown.ItemLabel>{t("dropdown.select")}</Dropdown.ItemLabel>
          </Dropdown.Item>
          <Dropdown.Item
            class="text-red-600"
            onSelect={openRemoveAvatarConfirm}
            disabled={!props.user.avatar_url || removingAvatar.pending}
          >
            <Icon icon="f7:trash" class="size-6" />
            <Dropdown.ItemLabel>{t("dropdown.remove")}</Dropdown.ItemLabel>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Show when={props.user.avatar_url}>
        {(avatar_url) => (
          <Dialog open={isRemoveAvatarConfirmOpen()} onOpenChange={setIsRemoveAvatarConfirmOpen}>
            <Dialog.Body>
              <Dialog.Header>
                <Dialog.Title>{t("confirm.title")}</Dialog.Title>
                <Dialog.Dismiss />
              </Dialog.Header>
              <Stack.Vertical>
                <Avatar>
                  <Avatar.Img src={formatStorageObject(avatar_url())} alt={props.user.email} />
                </Avatar>
                <Dialog.Description class="text-center">{t("confirm.description")}</Dialog.Description>
              </Stack.Vertical>
              <Dialog.Footer>
                <Dialog.Close as={Button} color="secondary" class="w-full">
                  {t("confirm.close")}
                </Dialog.Close>
                <Dialog.Close as={Button} onClick={removeAvatar} color="danger" class="w-full">
                  {t("confirm.remove")}
                </Dialog.Close>
              </Dialog.Footer>
            </Dialog.Body>
          </Dialog>
        )}
      </Show>
    </>
  );
};
