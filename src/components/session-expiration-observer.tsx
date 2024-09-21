import { createAsync, revalidate } from "@solidjs/router";
import { createEffect, createSignal, on, onCleanup, onMount, ParentComponent } from "solid-js";

import { toast } from "solid-sonner";

import { makeEventListener } from "@solid-primitives/event-listener";
import { getCurrentUser } from "~/lib/api/users/me";
import { getIsLoggedIn, getSessionExpirationDate } from "~/lib/http";
import { useI18n } from "~/lib/i18n";

export const SessionExpirationObserver: ParentComponent = (props) => {
  const sync = new BroadcastChannel("auth_sync");

  const i18n = useI18n();

  const isLoggedIn = createAsync(() => getIsLoggedIn(), { deferStream: true });
  const sessionExpirationDate = createAsync(() => getSessionExpirationDate(), { deferStream: true });

  const [revalidateTimeout, setRevalidateTimeout] = createSignal<NodeJS.Timeout | undefined>();

  const rewriteRevalidateTimeout = (timeout: NodeJS.Timeout): void => {
    clearRevalidateTimeout();
    setRevalidateTimeout(timeout);
  };

  const clearRevalidateTimeout = (): void => {
    const timeout = revalidateTimeout();
    if (timeout) {
      clearTimeout(timeout);
      setRevalidateTimeout(undefined);
    }
  };

  const invalidateSession = (): void => {
    revalidateSession();
    toastSessionExpired();
  };

  const revalidateSession = (): void => {
    revalidate([getIsLoggedIn.key, getSessionExpirationDate.key, getCurrentUser.key]);
  };

  // BUG: When logging out, toast infinitely shows up on mobile until logged in.
  const toastSessionExpired = (): void => {
    if (isLoggedIn() === false) {
      toast.info(i18n.t.components.sessionExpirationObserver.expired());
    }
  };

  onMount(() => {
    sync.onmessage = () => {
      revalidateSession();
    };
  });

  createEffect(
    on(isLoggedIn, () => {
      sync.postMessage(true);

      if (isLoggedIn() === false && revalidateTimeout() !== undefined) {
        clearRevalidateTimeout();
        if (document.hidden) {
          makeEventListener(document, "visibilitychange", toastSessionExpired, { once: true });
        }
      }
    }),
  );

  createEffect(
    on(sessionExpirationDate, () => {
      const expirationDate = sessionExpirationDate();
      if (!expirationDate) return;

      const expiresAfterMs = expirationDate - Date.now();
      if (expiresAfterMs <= 0) return;

      const timeout = setTimeout(invalidateSession, expiresAfterMs);
      rewriteRevalidateTimeout(timeout);
    }),
  );

  onCleanup(() => {
    sync.close();
  });

  return props.children;
};
