import { Button, Container, Heading, Icon, Link, NavigationBar, Text } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { RadioGroup } from "~/components/RadioGroup";
import { LOCALES, useI18n, useMessage, useScopedTranslator, type Locale } from "~/lib/i18n";

export default () => {
  const t = useScopedTranslator("settings.language");
  const i18n = useI18n();

  return (
    <div class="flex h-full w-full grow flex-col">
      <NavigationBar>
        <NavigationBar.Leading>
          <Button as={A} href="/settings" style="ghost" leadingIcon="f7:chevron-left">
            {useMessage("settings.title")}
          </Button>
        </NavigationBar.Leading>
        <NavigationBar.Center>
          <p class="font-semibold">{t("heading")}</p>
        </NavigationBar.Center>
        <NavigationBar.Trailing />
      </NavigationBar>
      <Container size="wide" class="flex flex-col gap-10 py-12">
        <section class="space-y-6 text-center">
          <Icon icon="f7:globe" class="text-fg-accent size-20" />
          <hgroup class="space-y-3">
            <Heading>{t("heading")}</Heading>
            <Text>{t("description")}</Text>
          </hgroup>
        </section>
        <RadioGroup
          value={i18n.locale()}
          onChange={(value) => i18n.setLocale(value as Locale)}
          label={t("available.label")}
          description={() => (
            <>
              {t("available.description")}{" "}
              <Link href={import.meta.env.APP_BUGS_URL} target="_blank">
                {useMessage("settings.about.feedback.heading")}
              </Link>
            </>
          )}
          items={LOCALES.map((locale) => ({
            icon: <Icon icon={`circle-flags:${locale}`} class="ring-bg-tertiary size-6 rounded-full ring-1" />,
            value: locale,
            label: new Intl.DisplayNames(locale, { type: "language" }).of(locale),
            description: new Intl.DisplayNames("en", { type: "language" }).of(locale),
          }))}
        />
      </Container>
    </div>
  );
};
