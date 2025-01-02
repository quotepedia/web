import { makeBroadcastChannel } from "@solid-primitives/broadcast-channel";
import { createTimer } from "@solid-primitives/timer";
import { createAsync, revalidate } from "@solidjs/router";
import { createEffect } from "solid-js";
import { getCurrentUser } from "~/shared/api/users/me";
import { getIsLoggedIn, getSessionExpirationTimeout } from "./cache";
import { SESSION_VALIDATOR_SYNC_NAME } from "./constants";

export const createSessionValidator = () => {
  const isLoggedIn = createAsync(() => getIsLoggedIn());
  const sessionExpirationTimeout = createAsync(() => getSessionExpirationTimeout());

  const { onMessage, postMessage } = makeBroadcastChannel(SESSION_VALIDATOR_SYNC_NAME);

  const revalidateSession = () => {
    revalidate([getIsLoggedIn.key, getSessionExpirationTimeout.key, getCurrentUser.key]);
  };

  onMessage(() => {
    revalidateSession();
  });

  createEffect(() => {
    postMessage(isLoggedIn());
  });

  createTimer(revalidateSession, () => sessionExpirationTimeout() || false, setTimeout);
};
