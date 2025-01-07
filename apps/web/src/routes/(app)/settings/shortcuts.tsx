import { Button, Container, Heading, Icon, NavigationBar, SettingsCard, SettingsGroup, Text } from "@quotepedia/solid";
import { scopedTranslator } from "@solid-primitives/i18n";
import { A } from "@solidjs/router";
import { createMemo, createSignal, For } from "solid-js";
import { useMessage, useScopedTranslator } from "~/lib/i18n";
import { useSettings } from "~/lib/settings";
import { SHORTCUT_KEYS, type ShortcutKey } from "~/lib/shortcuts";
import { usePressedKeys } from "~/utils/keyboard";

export default () => {
  const t = useScopedTranslator("settings.shortcuts");
  const options = scopedTranslator(t, "options");
  const settings = useSettings();

  const updateShortcut = (key: ShortcutKey, value: string[]) => {
    if (!settings.store.shortcuts) {
      settings.set("shortcuts", {});
    }
    if (settings.store.shortcuts![key] !== value) {
      settings.set("shortcuts", key, value);
    }
  };

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
          <Icon icon="f7:keyboard" class="text-fg-accent size-20" />
          <hgroup class="space-y-3">
            <Heading>{t("heading")}</Heading>
            <Text>{t("description")}</Text>
          </hgroup>
        </section>
        <SettingsGroup>
          <For each={SHORTCUT_KEYS}>
            {(key) => {
              const [ref, setRef] = createSignal<HTMLElement>();
              const keys = usePressedKeys(ref, settings.store.shortcuts?.[key]);
              const value = createMemo(() => keys().join(" + "));

              return (
                <SettingsCard>
                  <SettingsCard.HeaderGroup>
                    <SettingsCard.Header>{options(key)}</SettingsCard.Header>
                  </SettingsCard.HeaderGroup>
                  <SettingsCard.Value
                    ref={setRef}
                    tabindex={0}
                    onBlur={() => updateShortcut(key, keys())}
                    class="hover:text-fg-soft focus:text-fg-body hover:bg-bg-secondary focus:bg-bg-tertiary cursor-text rounded-md p-2 font-mono outline-none"
                  >
                    {value() || t("press")}
                  </SettingsCard.Value>
                </SettingsCard>
              );
            }}
          </For>
        </SettingsGroup>
      </Container>
    </div>
  );
};
