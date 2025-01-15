import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { batch, createEffect, createResource, createSignal, on, onMount, type Accessor, type Setter } from "solid-js";

export type InfinitePaginatorReturn<T> = [
  Accessor<T[]>,
  Setter<Element | undefined>,
  {
    page: Accessor<number>;
    setPage: Setter<number>;
    setPages: Setter<T[]>;
    end: Accessor<boolean>;
    setEnd: Setter<boolean>;
    reset: VoidFunction;
    loading: Accessor<boolean>;
  },
];

export function createInfinitePaginator<T>(
  fetcher: (page: number) => Promise<T[] | undefined>,
  options?: IntersectionObserverInit,
): InfinitePaginatorReturn<T> {
  const [pages, setPages] = createSignal<T[]>([]);
  const [page, setPage] = createSignal<number>(0);
  const [end, setEnd] = createSignal<boolean>(false);
  const [mounted, setMounted] = createSignal<boolean>(false);
  const [triggerRef, setTriggerRef] = createSignal<Element>();
  const [resource, { refetch }] = createResource(page, fetcher);
  const isTriggerVisible = createVisibilityObserver(options)(triggerRef);

  const reset = () => {
    batch(() => {
      setEnd(false);
      setPage(0);
      setPages([]);
      refetch();
    });
  };

  onMount(() => {
    setMounted(true);
  });

  createEffect(() => {
    const next = resource.latest;
    setEnd(next === undefined || next.length === 0);
    if (next !== undefined) {
      setPages((prev) => [...prev, ...next]);
    }
  });

  createEffect(
    on(isTriggerVisible, () => {
      if (isTriggerVisible() && !end() && !resource.loading) {
        setPage((prev) => prev + 1);
      }
    }),
  );

  return [
    pages,
    setTriggerRef,
    {
      page,
      setPage,
      setPages,
      end,
      setEnd,
      reset,
      loading: () => !mounted() || resource.loading,
    },
  ];
}
