import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { getCurrentUser } from "~/entities/user";
import { AvatarEdit } from "~/features/update-avatar";
import { Heading, Stack, Text } from "~/shared/components";

export const AccountInfoSection = () => {
  const currentUser = createAsync(() => getCurrentUser());

  return (
    <Show when={currentUser()}>
      {(user) => (
        <Stack.Vertical class="gap-3 text-center">
          <AvatarEdit user={user()} />
          <Stack.Vertical class="gap-1">
            <Heading as="h3" size="subheading">
              {user().email}
            </Heading>
            <Text size="lg" variant="muted">
              ID: {user().id}
            </Text>
          </Stack.Vertical>
        </Stack.Vertical>
      )}
    </Show>
  );
};
