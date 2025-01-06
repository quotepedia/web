import { Container, Heading, Stack } from "@quotepedia/solid";
import { EmojiPicker } from "~/components/emoji-picker/EmojiPicker";
import { useTranslator } from "~/lib/i18n";
import { protect } from "~/utils/router";

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
