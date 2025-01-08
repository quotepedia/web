import { Button, Container, Heading, Icon, NavigationBar, RadioGroup, Text } from "@quotepedia/solid";
import { A } from "@solidjs/router";
import EmojiImg from "~/components/Emoji";
import { EMOJI_STYLES } from "~/lib/emoji";
import { useMessage, useScopedTranslator } from "~/lib/i18n";
import { useSettings } from "~/lib/settings";

export default () => {
  const settings = useSettings();
  const t = useScopedTranslator("settings.emoji");

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
          <Icon icon="f7:smiley" class="text-fg-accent size-20" />
          <hgroup class="space-y-3">
            <Heading>{t("heading")}</Heading>
            <Text>{t("description")}</Text>
          </hgroup>
        </section>
        <RadioGroup
          value={settings.store.emojiStyle}
          onChange={(value) => settings.set("emojiStyle", value)}
          label={t("available.label")}
          items={EMOJI_STYLES.map((style) => ({
            icon: <EmojiImg emoji="😀" style={style} class="size-6" />,
            value: style,
            label: style,
          }))}
        />
      </Container>
    </div>
  );
};
