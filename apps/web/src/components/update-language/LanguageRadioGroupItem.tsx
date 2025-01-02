import { RadioGroup } from "@kobalte/core/radio-group";
import { Fade, Icon, SettingsCard } from "@quotepedia/solid";
import { useI18n, type Locale } from "~/lib/i18n";

export const LanguageRadioGroupItem = (props: { locale: Locale }) => {
  const i18n = useI18n();

  const nativeLanguageName = () => new Intl.DisplayNames(props.locale, { type: "language" }).of(props.locale);
  const languageName = () => new Intl.DisplayNames("en", { type: "language" }).of(props.locale);

  return (
    <RadioGroup.Item value={props.locale} class="transition">
      <RadioGroup.ItemInput />
      <RadioGroup.ItemControl as={SettingsCard} variant="hover" aria-busy={i18n.isSettingLocale()}>
        <Icon icon={`circle-flags:${props.locale}`} class="ring-bg-tertiary size-6 rounded-full ring-1" />
        <SettingsCard.HeaderGroup>
          <RadioGroup.ItemLabel as={SettingsCard.Header} class="capitalize">
            {nativeLanguageName()}
          </RadioGroup.ItemLabel>
          <RadioGroup.ItemDescription as={SettingsCard.Description} class="capitalize">
            {languageName()}
          </RadioGroup.ItemDescription>
        </SettingsCard.HeaderGroup>
        <Fade>
          <RadioGroup.ItemIndicator as={Icon} icon="f7:checkmark" class="text-fg-accent size-5" />
        </Fade>
      </RadioGroup.ItemControl>
    </RadioGroup.Item>
  );
};
