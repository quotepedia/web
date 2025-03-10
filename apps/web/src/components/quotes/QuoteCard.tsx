import { Button, Dropdown, Icon, Separator, toast } from "@quotepedia/solid";
import { writeClipboard } from "@solid-primitives/clipboard";
import { createAsync, useAction, useSubmission } from "@solidjs/router";
import { createSignal, Show, splitProps, Suspense, type Component, type ComponentProps } from "solid-js";
import { tv } from "tailwind-variants";
import type { components } from "~/lib/api";
import { deleteQuoteAction } from "~/lib/api/quotes";
import { getCurrentUser } from "~/lib/api/users/me";
import { useTranslator } from "~/lib/i18n";
import { QuoteSaveDialog } from "./QuoteSaveDialog";

export const styles = tv({
  slots: {
    root: [
      "relative flex flex-col gap-2 rounded-xl",
      "border border-border-quote/75 bg-bg-quote p-4",
      "font-serif text-fg-quote shadow-quote",
      "before:absolute before:inset-0 before:-z-10 before:rotate-1 before:rounded-xl",
      "before:border before:border-border-quote/50 before:bg-bg-quote",
      "before:shadow-quote after:absolute after:inset-0 after:bg-quote md:before:rotate-2 lg:before:rotate-2",
    ],
    wrapper: "z-[1]",
    content: [
      "select-all",
      "before:me-0.5 before:font-black before:leading-none before:text-border-quote before:content-['“']",
      "after:ms-0.5 after:font-black after:leading-none after:text-border-quote after:content-['”']",
    ],
    footer: "flex justify-between items-center gap-1",
    author: "text-border-quote before:me-1 before:content-['—']",
  },
});

export type QuoteCardProps = ComponentProps<"article"> & {
  quote: components["schemas"]["QuoteResponse"];
  onSave?: VoidFunction;
  onDelete?: VoidFunction;
  onUpdateCollections?: (ids: number[]) => void;
};

export const QuoteCard: Component<QuoteCardProps> = (props) => {
  const [rootVariantProps, otherProps] = splitProps(props, ["class"]);

  const t = useTranslator();
  const deleteQuote = useAction(deleteQuoteAction);
  const deleteQuoteSubmission = useSubmission(deleteQuoteAction);

  const currentUser = createAsync(() => getCurrentUser());

  const [saveDialogOpen, setSaveDialogOpen] = createSignal<boolean>(false);

  return (
    <>
      <article class={styles().root(rootVariantProps)} {...otherProps}>
        <div class={styles().wrapper()}>
          <p class={styles().content()}>{props.quote.content}</p>
          <div class={styles().footer()}>
            <Show when={props.quote.author}>
              <p class={styles().author()}>{props.quote.author?.name}</p>
            </Show>
            <Dropdown placement="bottom">
              <Button
                as={Dropdown.Trigger}
                leadingIcon="f7:ellipsis-vertical"
                color="secondary"
                style="ghost"
                size="sm"
                class="ms-auto"
              />
              <Dropdown.Content>
                <Dropdown.Item
                  onSelect={async () => {
                    await writeClipboard(props.quote.content);
                    toast(t("quoteCopied"));
                  }}
                >
                  <Icon icon="f7:doc-on-clipboard" class="size-6" />
                  <Dropdown.ItemLabel>{t("copy")}</Dropdown.ItemLabel>
                </Dropdown.Item>
                <Suspense>
                  <Show when={currentUser()}>
                    {(currentUser) => (
                      <>
                        <Separator class="my-0.5" />
                        <Dropdown.Item onSelect={() => setSaveDialogOpen(true)}>
                          <Icon icon="f7:bookmark" class="size-6" />
                          <Dropdown.ItemLabel>{t("save")}</Dropdown.ItemLabel>
                        </Dropdown.Item>
                        <Show when={props.quote.created_by_user_id === currentUser().id}>
                          <Separator class="my-0.5" />
                          <Dropdown.Item
                            class="text-red-600"
                            onSelect={async () => {
                              await deleteQuote(props.quote.id);
                              props.onDelete?.();
                            }}
                            disabled={deleteQuoteSubmission.pending}
                          >
                            <Icon icon="f7:trash" class="size-6" />
                            <Dropdown.ItemLabel>{t("delete")}</Dropdown.ItemLabel>
                          </Dropdown.Item>
                        </Show>
                      </>
                    )}
                  </Show>
                </Suspense>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
      </article>
      <QuoteSaveDialog
        quote={props.quote}
        open={saveDialogOpen()}
        onOpenChange={setSaveDialogOpen}
        onUpdateCollections={props.onUpdateCollections}
      />
    </>
  );
};
