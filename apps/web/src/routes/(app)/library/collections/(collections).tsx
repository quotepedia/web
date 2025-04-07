import { Button, Container, NavigationBar } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { ErrorBoundary } from "solid-js";
import { CollectionsInfinitePaginator } from "~/components/collections";
import { ErrorBoundaryFallback } from "~/components/ErrorBoundaryFallback";
import { protect } from "~/hoc/session";
import { useTranslator } from "~/lib/i18n";

export default protect(() => {
  const t = useTranslator();

  return (
    <div class="flex h-full w-full grow flex-col">
      <NavigationBar>
        <NavigationBar.Leading>
          <Button as={A} href="/library" style="ghost" leadingIcon="f7:chevron-left">
            {t("routes.library.title")}
          </Button>
        </NavigationBar.Leading>
        <NavigationBar.Center>
          <h2 class="font-semibold">{t("collections")}</h2>
        </NavigationBar.Center>
        <NavigationBar.Trailing>
          <Button
            as={A}
            href="/library/collections/new"
            style="ghost"
            trailingIcon="f7:folder-badge-plus"
            class="max-lg:pe-3"
          />
        </NavigationBar.Trailing>
      </NavigationBar>

      <Container size="wide" class="flex grow flex-col pb-6 pt-2">
        <ErrorBoundary fallback={ErrorBoundaryFallback}>
          <CollectionsInfinitePaginator />
        </ErrorBoundary>
      </Container>
    </div>
  );
});
