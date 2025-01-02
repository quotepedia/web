import { makeBroadcastChannel } from "@solid-primitives/broadcast-channel";
import { makeEventListener } from "@solid-primitives/event-listener";
import { createAsync, revalidate } from "@solidjs/router";
import { createEffect, createSignal, on, type ParentComponent } from "solid-js";
import { toast } from "solid-sonner";
import { getCurrentUser } from "~/entities/user";
import { getIsLoggedIn, getSessionExpirationDate } from "~/shared/session";
import { useScopedTranslator } from "~/shared/i18n";

export const SessionExpirationObserver: ParentComponent = (props) => {
  const t = useScopedTranslator("components.sessionExpirationObserver");

  const isLoggedIn = createAsync(() => getIsLoggedIn(), { deferStream: true });
  const sessionExpirationDate = createAsync(() => getSessionExpirationDate(), { deferStream: true });

  const [revalidateTimeout, setRevalidateTimeout] = createSignal<NodeJS.Timeout | undefined>();
  const { onMessage, postMessage } = makeBroadcastChannel("sync-auth");

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

  const toastSessionExpired = (): void => {
    if (isLoggedIn() === false) {
      toast.info(t("expired"));
    }
  };

  onMessage(() => {
    revalidateSession();
  });

  createEffect(
    on(isLoggedIn, () => {
      postMessage(true);

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

  return props.children;
};
