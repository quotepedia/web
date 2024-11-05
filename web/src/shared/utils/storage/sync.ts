import { makeBroadcastChannel } from "@solid-primitives/broadcast-channel";
import type { PersistenceSyncAPI, PersistenceSyncCallback, PersistenceSyncData } from "@solid-primitives/storage";

/**
 * Creates storage persistence synchronization API using the broadcast channel interface.
 *
 * @param name The name of the broadcast channel to use for synchronization.
 * @returns An array containing `subscribe` and `update` synchronization functions.
 */
export const makeBroadcastChannelSync = (name: string): PersistenceSyncAPI => {
  const { onMessage, postMessage } = makeBroadcastChannel<PersistenceSyncData>(name);

  const subscribe = (subscriber: PersistenceSyncCallback): void => {
    onMessage((event) => subscriber(event.data));
  };

  const update = (key: string, newValue: string | null | undefined): void => {
    postMessage({
      key,
      newValue,
      timeStamp: Date.now(),
    });
  };

  return [subscribe, update];
};
