import { createForm, FormError, required, type SubmitHandler } from "@modular-forms/solid";
import { Button, Container, FormControl, Heading, Lottie, NavigationBar, Stack, Text } from "@quotepedia/solid";
import { A, useAction } from "@solidjs/router";
import { FormResponse } from "~/components/form/FormResponse";
import protect from "~/hoc/session/protect";
import { createAuthorAction, getAuthor } from "~/lib/api/authors";
import { createQuoteAction, type CreateQuoteFormData } from "~/lib/api/quotes";
import { useTranslator } from "~/lib/i18n";

export default protect(() => {
  const t = useTranslator();

  const createQuote = useAction(createQuoteAction);
  const createAuthor = useAction(createAuthorAction);

  const [form, { Form, Field }] = createForm<CreateQuoteFormData>();

  const onSubmit: SubmitHandler<CreateQuoteFormData> = async (values) => {
    let authorId: number | null = null;

    if (values.author.length) {
      const authorResult = await getAuthor(values.author);
      authorId = authorResult.data?.id ?? null;

      if (authorId === null) {
        const newAuthorResult = await createAuthor({ name: values.author });

        newAuthorResult.error?.detail?.forEach((element) => {
          throw new FormError<CreateQuoteFormData>(element.msg.toString());
        });

        authorId = newAuthorResult.data?.id ?? null;
      }
    }

    const result = await createQuote({
      content: values.content.trim(),
      author_id: authorId,
    });

    result.error?.detail?.forEach((element) => {
      throw new FormError<CreateQuoteFormData>(element.msg.toString());
    });
  };

  return (
    <Form onSubmit={onSubmit} method="post" class="flex h-full w-full grow flex-col">
      <NavigationBar>
        <NavigationBar.Leading>
          <Button as={A} href="/library" style="ghost">
            {t("cancel")}
          </Button>
        </NavigationBar.Leading>
        <NavigationBar.Center>
          <p class="font-semibold">{t("newQuote")}</p>
        </NavigationBar.Center>
        <NavigationBar.Trailing>
          <Button type="submit" style="ghost" loading={form.submitting} disabled={form.invalid}>
            {t("create")}
          </Button>
        </NavigationBar.Trailing>
      </NavigationBar>
      <Container size="tight" class="flex grow flex-col items-center justify-center gap-10 py-6">
        <Stack.Vertical as="fieldset" class="items-stretch gap-4" disabled={form.submitting}>
          <Lottie path="/tgs/memo.json" class="mb-2 size-24 self-center" />

          <Stack.Vertical class="text-center">
            <Heading size="subheading">{t("routes.quotes.new.heading")}</Heading>
            <Text>{t("routes.quotes.new.description")}</Text>
          </Stack.Vertical>

          <Field name="content" validate={[required(t("routes.quotes.new.content.required"))]}>
            {(field, props) => (
              <FormControl
                {...props}
                label={t("routes.quotes.new.content.label")}
                placeholder={t("routes.quotes.new.content.placeholder")}
                description={t("routes.quotes.new.content.description")}
                value={field.value}
                error={field.error}
                required
                multiline
                autofocus
              />
            )}
          </Field>

          <Field name="author">
            {(field, props) => (
              <FormControl
                {...props}
                label={t("routes.quotes.new.author.label")}
                placeholder={t("routes.quotes.new.author.placeholder")}
                description={t("routes.quotes.new.author.description")}
                value={field.value}
                error={field.error}
              />
            )}
          </Field>

          <FormResponse of={form} />

          <Button type="submit" class="w-full" loading={form.submitting} disabled={form.invalid}>
            {t("createQuote")}
          </Button>
        </Stack.Vertical>
      </Container>
    </Form>
  );
});
