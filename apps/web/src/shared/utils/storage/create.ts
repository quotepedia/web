import type { Signal } from "solid-js";
import type { SetStoreFunction, Store } from "solid-js/store";

import { cookieStorage, makePersisted } from "@solid-primitives/storage";

import { makeBroadcastChannelSync } from "./sync";

export const createStorage = <T extends Signal<any> | [Store<any>, SetStoreFunction<any>]>(signal: T, name: string) => {
  return makePersisted(signal, {
    name: name,
    storage: cookieStorage,
    storageOptions: {
      path: "/",
      secure: /true/i.test(import.meta.env.VITE_SECURE_COOKIES),
      sameSite: "Lax",
    },
    sync: makeBroadcastChannelSync(`sync-${name}`),
  });
};
