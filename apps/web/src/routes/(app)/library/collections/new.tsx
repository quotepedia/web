import { createForm, FormError, required, type SubmitHandler } from "@modular-forms/solid";
import { Button, Container, FormControl, NavigationBar, Stack } from "@quotepedia/solid";
import { A, useAction } from "@solidjs/router";
import { type Emoji, fromCodepointToUnicode, fromHexcodeToCodepoint } from "emojibase";
import { createSignal } from "solid-js";
import EmojiPicker from "~/components/emoji-picker";
import { FormResponse } from "~/components/form/FormResponse";
import protect from "~/hoc/session/protect";
import { CollectionVisibility, createCollectionAction, type CreateCollectionFormData } from "~/lib/api/collections";
import { useTranslator } from "~/lib/i18n";

export default protect(() => {
  const t = useTranslator();

  const createCollection = useAction(createCollectionAction);

  const [emoji, setEmoji] = createSignal<Emoji>();
  const [form, { Form, Field }] = createForm<CreateCollectionFormData>();

  const onSubmit: SubmitHandler<CreateCollectionFormData> = async (values) => {
    const emote = emoji();

    if (!emote) {
      throw new FormError<CreateCollectionFormData>(t("routes.collections.new.emoji.required"));
    }

    const result = await createCollection({
      name: values.name,
      emote: fromCodepointToUnicode(fromHexcodeToCodepoint(emote.hexcode)),
      description: values.description,
      visibility: CollectionVisibility.Private,
    });

    result.error?.detail?.forEach((element) => {
      throw new FormError<CreateCollectionFormData>(element.msg.toString());
    });
  };

  return (
    <Form onSubmit={onSubmit} method="post" class="flex h-full w-full grow flex-col">
      <NavigationBar>
        <NavigationBar.Leading>
          <Button as={A} href="/library" style="ghost" class="max-lg:ps-3">
            {t("cancel")}
          </Button>
        </NavigationBar.Leading>
        <NavigationBar.Center>
          <p class="font-semibold">{t("newCollection")}</p>
        </NavigationBar.Center>
        <NavigationBar.Trailing>
          <Button type="submit" style="ghost" loading={form.submitting} disabled={form.invalid} class="max-lg:pe-3">
            {t("create")}
          </Button>
        </NavigationBar.Trailing>
      </NavigationBar>
      <Container size="tight" class="flex grow flex-col items-center justify-center gap-10 py-6">
        <Stack.Vertical as="fieldset" class="items-stretch gap-4" disabled={form.submitting}>
          <EmojiPicker onChange={setEmoji} />

          <Field name="name" validate={[required(t("routes.collections.new.name.required"))]}>
            {(field, props) => (
              <FormControl
                {...props}
                label={t("routes.collections.new.name.label")}
                placeholder={t("routes.collections.new.name.placeholder")}
                value={field.value}
                error={field.error}
                required
                clearable
                autofocus
              />
            )}
          </Field>

          <Field name="description">
            {(field, props) => (
              <FormControl
                {...props}
                label={t("routes.collections.new.description.label")}
                placeholder={t("routes.collections.new.description.placeholder")}
                description={t("routes.collections.new.description.description")}
                value={field.value}
                error={field.error}
                multiline
              />
            )}
          </Field>

          <FormResponse of={form} />

          <Button type="submit" class="w-full" loading={form.submitting} disabled={form.invalid}>
            {t("createCollection")}
          </Button>
        </Stack.Vertical>
      </Container>
    </Form>
  );
});
