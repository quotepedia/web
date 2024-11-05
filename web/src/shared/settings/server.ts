import { getCookie } from "vinxi/http";
import { SETTINGS_COOKIE_NAME } from "./constants";
import { getDefaultSettings, type Settings } from "./store";

export const getPersistedSettings = (): Settings => {
  const cookie = getCookie(SETTINGS_COOKIE_NAME);
  const settings = cookie ? JSON.parse(cookie) : {};

  return settings;
};

export const getSettings = (): Settings => {
  return { ...getDefaultSettings(), ...getPersistedSettings() };
};
