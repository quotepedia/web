import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { AvatarEdit } from "~/features/update-avatar";
import { getCurrentUser } from "~/shared/api/users/me";
import { Heading } from "~/shared/components";

export const AccountInfoSection = () => {
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <Show when={currentUser()}>
      {(user) => (
        <section class="flex flex-col items-center justify-center gap-3 px-2 py-1 text-center">
          <AvatarEdit user={user()} />
          <hgroup>
            <Heading as="h3" size="subheading">
              {user().email}
            </Heading>
            <p class="text-base text-fg-muted">ID: {user().id}</p>
          </hgroup>
        </section>
      )}
    </Show>
  );
};
