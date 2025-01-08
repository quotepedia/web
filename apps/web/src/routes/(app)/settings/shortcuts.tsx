import { Button, Container, Group, Heading, Icon, Link, NavigationBar, Text } from "@quotepedia/solid";
import { scopedTranslator } from "@solid-primitives/i18n";
import { A } from "@solidjs/router";
import { createMemo, createSignal, For } from "solid-js";
import { useMessage, useScopedTranslator } from "~/lib/i18n";
import { useSettings } from "~/lib/settings";
import { SHORTCUT_KEYS } from "~/lib/shortcuts";
import { usePressedKeys } from "~/utils/keyboard";

export default () => {
  const t = useScopedTranslator("settings.shortcuts");
  const options = scopedTranslator(t, "options");
  const settings = useSettings();

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
          <Icon icon="f7:keyboard" class="text-fg-accent size-20" />
          <hgroup class="space-y-3">
            <Heading>{t("heading")}</Heading>
            <Text>{t("description")}</Text>
          </hgroup>
        </section>
        <Group>
          <Group.Label>{t("available.label")}</Group.Label>
          <Group.Content>
            <For each={SHORTCUT_KEYS}>
              {(key) => {
                const [ref, setRef] = createSignal<HTMLElement>();
                const keys = usePressedKeys(ref, settings.store.shortcuts?.[key]);
                const value = createMemo(() => keys().join(" + "));

                const updateShortcut = () => {
                  if (!settings.store.shortcuts) {
                    settings.set("shortcuts", {});
                  }
                  if (settings.store.shortcuts![key] !== keys()) {
                    settings.set("shortcuts", key, keys());
                  }
                };

                return (
                  <Group.Item>
                    <Group.ItemGroup>
                      <Group.ItemLabel>{options(key)}</Group.ItemLabel>
                    </Group.ItemGroup>
                    <Group.ItemValue
                      as="code"
                      ref={setRef}
                      tabindex={0}
                      onBlur={updateShortcut}
                      class="hover:text-fg-soft focus:text-fg-body hover:bg-bg-secondary focus:bg-bg-tertiary cursor-text rounded-md px-2 py-1.5 outline-none"
                    >
                      {value() || t("press")}
                    </Group.ItemValue>
                  </Group.Item>
                );
              }}
            </For>
          </Group.Content>
          <Group.Description>
            {t("available.description")}{" "}
            <Link href={import.meta.env.APP_BUGS_URL} target="_blank">
              {useMessage("settings.about.feedback.heading")}
            </Link>
          </Group.Description>
        </Group>
      </Container>
    </div>
  );
};
