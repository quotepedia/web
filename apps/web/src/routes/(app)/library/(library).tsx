import { Container, Heading, Stack } from "@quotepedia/solid";
import { EmojiPicker } from "~/components/emoji-picker/EmojiPicker";
import { protect } from "~/hoc/session";
import { useTranslator } from "~/lib/i18n";

export default protect(() => {
  const t = useTranslator();

  return (
    <Container size="wide" class="pt-safe-offset-12 grow">
      <Heading>{t("routes.library.title")}</Heading>
      <Stack.Vertical class="items-center text-center">
        <EmojiPicker />
      </Stack.Vertical>
    </Container>
  );
});
