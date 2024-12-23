import { Icon, Avatar, Button, Dialog, Dropdown, Separator, Stack } from "@quotepedia/solid";
import { createFileUploader } from "@solid-primitives/upload";
import { useAction, useSubmission } from "@solidjs/router";
import { Component, createSignal, Show } from "solid-js";
import { toast } from "solid-sonner";
import { removeCurrentUserAvatar, updateCurrentUserAvatar } from "~/entities/user";
import { type components, formatStorageObject } from "~/shared/api";
import { useScopedTranslator } from "~/shared/i18n";

export type AvatarEditProps = {
  user: components["schemas"]["CurrentUserResponse"];
};

export const AvatarEdit: Component<AvatarEditProps> = (props) => {
  const t = useScopedTranslator("components.avatarEdit");

  const updateAvatar = useAction(updateCurrentUserAvatar);
  const updatingAvatar = useSubmission(updateCurrentUserAvatar);
  const uploader = createFileUploader({ accept: "image/*" });

  const removeAvatar = useAction(removeCurrentUserAvatar);
  const removingAvatar = useSubmission(removeCurrentUserAvatar);
  const [isRemoveAvatarConfirmOpen, setIsRemoveAvatarConfirmOpen] = createSignal(false);
  const openRemoveAvatarConfirm = () => setIsRemoveAvatarConfirmOpen(true);

  const selectAvatar = async () => {
    uploader.selectFiles(async (uploads) => {
      const result = await updateAvatar(uploads[0].file);
      if (result?.error) {
        toast.error(result.error.detail?.toString());
      }
    });
  };

  return (
    <>
      <Dropdown placement="bottom">
        <Dropdown.Trigger as={Avatar} aria-busy={updatingAvatar.pending || removingAvatar.pending}>
          <Avatar.Img
            src={props.user.avatar_url && formatStorageObject(props.user.avatar_url)}
            alt={props.user.email}
          />
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 font-semibold text-white opacity-0 transition-opacity hover:opacity-100">
            <Icon icon="heroicons:camera-16-solid" class="size-8" />
            <span>{t("update")}</span>
          </div>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Show when={props.user.avatar_url}>
            {(avatar_url) => (
              <>
                <Dropdown.Item onSelect={() => window.open(formatStorageObject(avatar_url()), "_blank")}>
                  <Icon icon="heroicons:arrow-top-right-on-square-16-solid" class="size-4" />
                  <Dropdown.ItemLabel>{t("dropdown.open")}</Dropdown.ItemLabel>
                </Dropdown.Item>
                <Separator orientation="horizontal" class="my-0.5" />
              </>
            )}
          </Show>
          <Dropdown.Item onSelect={selectAvatar} disabled={updatingAvatar.pending}>
            <Icon icon="heroicons:arrow-up-tray-16-solid" class="size-4" />
            <Dropdown.ItemLabel>{t("dropdown.select")}</Dropdown.ItemLabel>
          </Dropdown.Item>
          <Dropdown.Item
            class="text-red-600"
            onSelect={openRemoveAvatarConfirm}
            disabled={!props.user.avatar_url || removingAvatar.pending}
          >
            <Icon icon="heroicons:trash-16-solid" class="size-4" />
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
                <Dialog.Close as={Button} class="w-full">
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
