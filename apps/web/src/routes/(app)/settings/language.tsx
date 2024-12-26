import { Heading, Icon, Text } from "@quotepedia/solid";
import { type RouteDefinition } from "@solidjs/router";
import { LocaleToggleGroup } from "@src/features/update-locale";
import { useMessage, useScopedTranslator } from "@src/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("settings.language.title"),
  },
} satisfies RouteDefinition;

export default () => {
  const t = useScopedTranslator("settings.language");

  return (
    <div class="space-y-4">
      <section class="space-y-4 text-center">
        <Icon icon="f7:globe" class="text-fg-accent size-20" />
        <hgroup class="space-y-3">
          <Heading>{t("heading")}</Heading>
          <Text>{t("description")}</Text>
        </hgroup>
      </section>
      <LocaleToggleGroup />
    </div>
  );
};
