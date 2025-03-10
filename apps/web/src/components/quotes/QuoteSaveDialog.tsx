import { Button, Dialog, Icon, toast, ToggleGroup } from "@quotepedia/solid";
import { Repeat } from "@solid-primitives/range";
import { createAsync, createAsyncStore, useAction, useSubmission } from "@solidjs/router";
import { createEffect, createSignal, Show, Suspense, type Component, type JSX } from "solid-js";
import type { components } from "~/lib/api";
import { CollectionVisibility, getCurrentUserCollections } from "~/lib/api/collections";
import { getQuoteCollectionIds, updateQuoteCollectionIdsAction } from "~/lib/api/quotes";
import { usePlurarized, useTranslator } from "~/lib/i18n";
import { CollectionCardSkeleton } from "../collections";
import EmojiImg from "../Emoji";

export type QuoteSaveDialogProps = {
  quote: components["schemas"]["QuoteResponse"];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateCollections?: (ids: number[]) => void;
};

export const QuoteSaveDialog: Component<QuoteSaveDialogProps> = (props) => {
  const t = useTranslator();

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <Dialog.Body>
        {
          (() => {
            const updateQuoteCollectionIds = useAction(updateQuoteCollectionIdsAction);
            const updateQuoteCollectionIdsSubmission = useSubmission(updateQuoteCollectionIdsAction);

            const collections = createAsyncStore(() => getCurrentUserCollections());
            const collectionIds = createAsync(() => getQuoteCollectionIds(props.quote.id));

            const [selectedCollectionIds, setSelectedCollectionIds] = createSignal<string[]>([]);

            const setUpdateQuoteCollectionIds = async () => {
              const ids = selectedCollectionIds().map((id) => Number(id));
              await updateQuoteCollectionIds(props.quote.id, ids);

              props.onUpdateCollections?.(ids);

              props.onOpenChange(false);

              toast(t("selectedCollectionsUpdated"));
            };

            createEffect(() => {
              setSelectedCollectionIds(collectionIds()?.map((id) => id.toString()) ?? []);
            });

            return (
              <>
                <Dialog.Header>
                  <Dialog.Title>{t("selectCollections")}</Dialog.Title>
                </Dialog.Header>
                <Suspense
                  fallback={
                    <div class="space-y-4">
                      <Repeat times={3}>
                        <CollectionCardSkeleton />
                      </Repeat>
                    </div>
                  }
                >
                  <Show when={collections()}>
                    {(collections) => (
                      <ToggleGroup
                        class="max-h-72 overflow-y-auto p-px"
                        value={selectedCollectionIds()}
                        onChange={setSelectedCollectionIds}
                        options={collections().map((collection) => ({
                          value: collection.id.toString(),
                          label: (
                            <div class="flex items-center gap-1">
                              <span>{collection.name}</span>
                              <Show when={collection.visibility === CollectionVisibility.Private}>
                                <Icon icon="f7:lock-fill" class="text-fg-muted size-4" />
                              </Show>
                            </div>
                          ),
                          description: usePlurarized("quotes", collection.quotes_count),
                          before: <EmojiImg emoji={collection.emote} class="size-6" />,
                        }))}
                      />
                    )}
                  </Show>
                </Suspense>
                <Dialog.Footer>
                  <Button as={Dialog.Close} color="secondary" spacing="lg" stretched>
                    {t("cancel")}
                  </Button>
                  <Button
                    onClick={setUpdateQuoteCollectionIds}
                    loading={updateQuoteCollectionIdsSubmission.pending}
                    spacing="lg"
                    stretched
                  >
                    {t("save")}
                  </Button>
                </Dialog.Footer>
              </>
            );
          }) as unknown as JSX.Element
        }
      </Dialog.Body>
    </Dialog>
  );
};
