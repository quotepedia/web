import { useNavigate } from "@solidjs/router";
import { useSettings } from "~/lib/settings";
import { createShortcut } from "~/utils/keyboard";

export function createAppShortcuts() {
  const settings = useSettings();
  const navigate = useNavigate();

  createShortcut(
    () => settings.store?.shortcuts?.explore,
    () => navigate("/"),
  );

  createShortcut(
    () => settings.store?.shortcuts?.library,
    () => navigate("/library"),
  );

  createShortcut(
    () => settings.store?.shortcuts?.settings,
    () => navigate("/settings"),
  );
}
