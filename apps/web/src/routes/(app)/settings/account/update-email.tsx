import { Container } from "@quotepedia/solid";
import type { RouteDefinition } from "@solidjs/router";
import { UpdateEmailStepper } from "~/features/update-email";
import { useMessage } from "~/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("routes.change-email.title"),
  },
} satisfies RouteDefinition;

export default () => {
  return (
    <Container size="tight" class="my-auto">
      <UpdateEmailStepper />
    </Container>
  );
};
