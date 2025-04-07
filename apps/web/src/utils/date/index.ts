import { createTimeAgo, HOUR, MINUTE, SECOND, WEEK } from "@solid-primitives/date";
import { DateTime } from "luxon";
import type { Accessor } from "solid-js";
import { useI18n } from "~/lib/i18n";

export const createRelative = (iso: Accessor<string>) => {
  const i18n = useI18n();

  return createTimeAgo(() => DateTime.fromISO(iso(), { zone: "UTC", locale: i18n.locale() }).toISO()!, {
    min: 0,
    max: WEEK * 2,
    interval: (diff) => (diff <= MINUTE ? SECOND : diff <= HOUR ? MINUTE / 2 : HOUR / 2),
    dateFormatter: (date) => DateTime.fromJSDate(date).toFormat("dd.MM.yy HH:mm", { locale: i18n.locale() }),
    relativeFormatter: (now, target) =>
      DateTime.fromJSDate(target).toRelative({ base: DateTime.fromJSDate(now), locale: i18n.locale() })!,
  });
};
