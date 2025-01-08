import { Button, Container, Heading, Icon, Link, NavigationBar, RadioGroup, Text } from "@quotepedia/solid";
import { scopedTranslator } from "@solid-primitives/i18n";
import { A } from "@solidjs/router";
import { ThemeSwatch } from "~/components/ThemeSwatch";
import { useMessage, useScopedTranslator } from "~/lib/i18n";
import { CUSTOM_THEMES, useTheme } from "~/lib/theme";

export default () => {
  const context = useTheme();
  const t = useScopedTranslator("settings.theme");
  const o = scopedTranslator(t, "options");

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
          <Icon icon="f7:paintbrush" class="text-fg-accent size-20" />
          <hgroup class="space-y-3">
            <Heading>{t("heading")}</Heading>
            <Text>{t("description")}</Text>
          </hgroup>
        </section>
        <section class="space-y-6">
          <RadioGroup
            value={context.theme()}
            onChange={context.setTheme}
            label={t("suggested.label")}
            items={[
              {
                icon: <ThemeSwatch value="system" />,
                value: "system",
                label: o("system"),
              },
            ]}
          />
          <RadioGroup
            value={context.theme()}
            onChange={context.setTheme}
            label={t("available.label")}
            description={() => (
              <>
                {t("available.description")}{" "}
                <Link href={import.meta.env.APP_BUGS_URL} target="_blank">
                  {useMessage("settings.about.feedback.heading")}
                </Link>
              </>
            )}
            items={CUSTOM_THEMES.map((theme) => ({
              icon: <ThemeSwatch value={theme} />,
              value: theme,
              label: o(theme),
            }))}
          />
        </section>
      </Container>
    </div>
  );
};
