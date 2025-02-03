import { Button, Placeholder, Stack } from "@quotepedia/solid";
import { useTranslator } from "~/lib/i18n";

export const ErrorBoundaryFallback = (err: any, reset: () => void) => {
  const t = useTranslator();

  return (
    <Placeholder
      heading={"An error occured:"}
      description={
        <code class="bg-bg-default ring-bg-secondary select-all rounded-lg p-1.5 ring-1">{err?.toString()}</code>
      }
      footer={
        <Stack.Horizontal>
          <Button
            as={"a"}
            rel="noopener noreferrer"
            href={import.meta.env.APP_BUGS_URL}
            target="_blank"
            color="secondary"
            spacing="lg"
            leadingIcon="f7:flag"
          >
            {t("settings.about.feedback.heading")}
          </Button>
          <Button onClick={reset} spacing="lg" leadingIcon="f7:arrow-clockwise">
            {t("continue")}
          </Button>
        </Stack.Horizontal>
      }
    />
  );
};
