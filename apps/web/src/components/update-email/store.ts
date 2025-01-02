import { createStore } from "solid-js/store";
import type { CurrentUserEmailUpdateStoreValue } from "./context";

export const createUpdateEmailStore = () => createStore({} as CurrentUserEmailUpdateStoreValue);
