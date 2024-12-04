import { Container } from "@quotepedia/solid";
import type { RouteSectionProps } from "@solidjs/router";
import { Aside } from "~/widgets/aside";
import { Navigation } from "~/widgets/nav";

export default (props: RouteSectionProps) => {
  return (
    <main class="relative flex w-full max-lg:flex-col-reverse">
      <Aside />
      <Container size="wide" class="max-lg:grow">
        <Navigation />
        {props.children}
      </Container>
    </main>
  );
};
