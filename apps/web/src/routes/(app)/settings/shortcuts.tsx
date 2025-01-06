import {
  Button,
  Container,
  FormControl,
  Heading,
  Icon,
  NavigationBar,
  SettingsCard,
  SettingsGroup,
  Text,
} from "@quotepedia/solid";
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
    if (settings.store.shortcuts?.[key] !== value) {
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
              const [ref, setRef] = createSignal<EventTarget>();
              const keys = usePressedKeys(ref, settings.store.shortcuts?.[key]);
              const value = createMemo(() => keys().join(" + "));

              return (
                <SettingsCard>
                  <SettingsCard.HeaderGroup>
                    <SettingsCard.Header>{scopedTranslator(options, key)("heading")}</SettingsCard.Header>
                    <SettingsCard.Description>{scopedTranslator(options, key)("description")}</SettingsCard.Description>
                  </SettingsCard.HeaderGroup>
                  <FormControl
                    ref={setRef}
                    name={key}
                    onBlur={() => updateShortcut(key, keys())}
                    value={value()}
                    title={value()}
                    readonly
                    placeholder={t("press")}
                    class="font-mono text-sm"
                  />
                </SettingsCard>
              );
            }}
          </For>
        </SettingsGroup>
      </Container>
    </div>
  );
};
