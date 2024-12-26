import { Container } from "@quotepedia/solid";
import type { RouteSectionProps } from "@solidjs/router";
import { Aside } from "@src/widgets/aside";
import { Navigation } from "@src/widgets/nav";

export default (props: RouteSectionProps) => {
  return (
    <main class="relative flex w-full max-lg:flex-col-reverse">
      <Aside />
      <Container size="wide" class="flex flex-col max-lg:grow">
        <Navigation />
        {props.children}
      </Container>
    </main>
  );
};
