import { Button, Container, Heading, Icon, NavigationBar, Text } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import { LanguageRadioGroup } from "~/components/update-language";
import { useMessage, useScopedTranslator } from "~/lib/i18n";

export default () => {
  const t = useScopedTranslator("settings.language");

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
      <Container size="wide" class="flex flex-col space-y-6 max-lg:grow">
        <section class="space-y-4 text-center">
          <Icon icon="f7:globe" class="text-fg-accent size-20" />
          <hgroup class="space-y-3">
            <Heading>{t("heading")}</Heading>
            <Text>{t("description")}</Text>
          </hgroup>
        </section>
        <LanguageRadioGroup />
      </Container>
    </div>
  );
};
