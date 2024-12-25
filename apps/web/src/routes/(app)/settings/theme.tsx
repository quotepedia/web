import { Heading, Icon, Text } from "@quotepedia/solid";
import { type RouteDefinition } from "@solidjs/router";
import { ThemeRadioGroup } from "~/features/update-theme";
import { useMessage, useScopedTranslator } from "~/shared/i18n";

export const route = {
  info: {
    title: () => useMessage("settings.theme.title"),
  },
} satisfies RouteDefinition;

export default () => {
  const t = useScopedTranslator("settings.theme");

  return (
    <div class="space-y-4">
      <section class="space-y-4 text-center">
        <Icon icon="f7:paintbrush" class="size-20 text-fg-accent" />
        <hgroup class="space-y-3">
          <Heading>{t("heading")}</Heading>
          <Text>{t("description")}</Text>
        </hgroup>
      </section>
      <ThemeRadioGroup />
    </div>
  );
};
