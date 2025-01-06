const map: Record<string, string> = {
  esc: "escape",
  return: "enter",
  ".": "period",
  ",": "comma",
  "-": "slash",
  " ": "space",
  "`": "backquote",
  "#": "backslash",
  "+": "bracketright",
  ShiftLeft: "shift",
  ShiftRight: "shift",
  AltLeft: "alt",
  AltRight: "alt",
  MetaLeft: "meta",
  MetaRight: "meta",
  OSLeft: "meta",
  OSRight: "meta",
  ControlLeft: "ctrl",
  ControlRight: "ctrl",
};

export function mapKey(key?: string): string {
  return ((key && map[key]) || key || "")
    .trim()
    .toLowerCase()
    .replace(/key|digit|numpad|arrow/, "");
}
