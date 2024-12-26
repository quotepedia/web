import { Container } from "@quotepedia/solid";
import type { RouteDefinition } from "@solidjs/router";
import { UpdatePasswordStepper } from "~/features/update-password";
import { useMessage } from "~/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("routes.change-password.title"),
  },
} satisfies RouteDefinition;

export default () => {
  return (
    <Container size="tight" class="my-auto">
      <UpdatePasswordStepper />
    </Container>
  );
};
