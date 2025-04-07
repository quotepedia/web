import { Button, Container, Heading, Icon, NavigationBar } from "@quotepedia/solid";
import { A, createAsyncStore } from "@solidjs/router";
import { CollectionsRecentList } from "~/components/collections/CollectionsRecentList";
import { QuoteList } from "~/components/quotes/QuoteList";
import { protect } from "~/hoc/session";
import { getRecentUserCollections } from "~/lib/api/collections";
import { getCurrentUserQuotes } from "~/lib/api/quotes";
import { useTranslator } from "~/lib/i18n";

export default protect(() => {
  const t = useTranslator();
  const collections = createAsyncStore(() => getRecentUserCollections());

  return (
    <div class="flex h-full w-full grow flex-col">
      <NavigationBar>
        <NavigationBar.Leading class="max-lg:ps-3">
          <Button as={A} href="/library/collections/new" style="ghost" leadingIcon="f7:folder-badge-plus" />
        </NavigationBar.Leading>
        <NavigationBar.Center>
          <p class="font-semibold">{t("routes.library.title")}</p>
        </NavigationBar.Center>
        <NavigationBar.Trailing class="max-lg:pe-3">
          <Button as={A} href="/library/quotes/new" style="ghost" leadingIcon="f7:square-pencil" />
        </NavigationBar.Trailing>
      </NavigationBar>
      <Container size="wide" class="flex flex-col gap-8 py-6">
        <Heading>{t("routes.library.title")}</Heading>
        <section>
          <A
            href="/library/collections"
            class="flex items-center gap-1 transition-opacity hover:opacity-75 active:opacity-50 active:duration-0"
          >
            <Heading size="subheading" class="leading-none">
              {t("collections")}
            </Heading>
            <Icon icon="f7:chevron-right" class="text-fg-muted size-6 stroke-current stroke-2" />
          </A>
          <CollectionsRecentList collections={collections} />
        </section>

        <section>
          <Heading size="subheading" class="leading-none">
            {t("quotes")}
          </Heading>

          <QuoteList fetcher={getCurrentUserQuotes} />
        </section>
      </Container>
    </div>
  );
});
