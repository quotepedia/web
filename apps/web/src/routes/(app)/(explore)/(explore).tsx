import { Container, Heading } from "@quotepedia/solid";
import { createAsync } from "@solidjs/router";
import { CollectionsRecentList } from "~/components/collections/CollectionsRecentList";
import { QuoteList } from "~/components/quotes/QuoteList";
import { getCollections } from "~/lib/api/collections";
import { getQuotes } from "~/lib/api/quotes";
import { useTranslator } from "~/lib/i18n";

export default () => {
  const t = useTranslator();
  const collections = createAsync(() => getCollections());

  return (
    <Container size="wide" class="pt-safe-offset-12 flex grow flex-col gap-6">
      <Heading>{t("routes.explore.title")}</Heading>

      <section>
        <Heading size="subheading" class="leading-none">
          {t("collections")}
        </Heading>

        <CollectionsRecentList collections={collections} />
      </section>

      <section>
        <Heading size="subheading" class="leading-none">
          {t("quotes")}
        </Heading>

        <QuoteList fetcher={getQuotes} />
      </section>
    </Container>
  );
};
