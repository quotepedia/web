import { createEventListener } from "@solid-primitives/event-listener";
import { createSingletonRoot } from "@solid-primitives/rootless";
import { access, arrayEquals, type MaybeAccessor } from "@solid-primitives/utils";
import { Accessor, createEffect, createMemo, createSignal, on, untrack } from "solid-js";
import { isServer } from "solid-js/web";
import { mapKey } from "./utils";

export const equalsKeyHoldSequence = (sequence: string[][], model: string[]): boolean => {
  for (let i = sequence.length - 1; i >= 0; i--) {
    const _model = model.slice(0, i + 1);
    if (!arrayEquals(sequence[i]!, _model)) return false;
  }
  return true;
};

export const useKeyDown = (element: MaybeAccessor<EventTarget | undefined>) => {
  if (isServer) {
    return () => null;
  }

  const [event, setEvent] = createSignal<KeyboardEvent | null>(null);

  createEventListener(element, "keydown", (e) => {
    if (e instanceof KeyboardEvent && !e.defaultPrevented) {
      setEvent(e);
      setTimeout(() => setEvent(null));
    }
  });

  return event;
};

export const useWindowKeyDown = createSingletonRoot<Accessor<KeyboardEvent | null>>(() => useKeyDown(() => window));

export const useKeyDownList = (element: MaybeAccessor<EventTarget | undefined>) => {
  if (isServer) {
    return () => [];
  }

  const [pressedKeys, setPressedKeys] = createSignal<string[]>([]);
  const reset = () => setPressedKeys([]);

  createEventListener(element, "keydown", (e) => {
    if (!(e instanceof KeyboardEvent) || e.repeat || typeof e.code !== "string" || e.defaultPrevented) {
      return;
    }

    const key = mapKey(e.code);
    const currentKeys = pressedKeys();

    if (currentKeys.includes(key)) {
      return;
    }

    const keys = [...currentKeys, key];

    setPressedKeys(keys);
  });

  createEventListener(element, "keyup", (e) => {
    if (!(e instanceof KeyboardEvent) || typeof e.code !== "string" || e.defaultPrevented) {
      return;
    }

    const key = mapKey(e.code);
    setPressedKeys((prev) => prev.filter((_key) => _key !== key));
  });

  createEventListener(element, "blur", reset);
  createEventListener(element, "contextmenu", (e) => {
    e.defaultPrevented || reset();
  });

  return pressedKeys;
};

export const useWindowKeyDownList = createSingletonRoot<Accessor<string[]>>(() => useKeyDownList(() => window));

export const useCurrentlyHeldKey = (element: MaybeAccessor<EventTarget | undefined>) => {
  if (isServer) {
    return () => null;
  }

  const keys = useKeyDownList(element);
  let prevKeys = untrack(keys);

  return createMemo(() => {
    const _keys = keys();
    const prev = prevKeys;
    prevKeys = _keys;
    if (prev.length === 0 && _keys.length === 1) return _keys[0]!;
    return null;
  });
};

export const useWindowCurrentlyHeldKey = createSingletonRoot<Accessor<string | null>>(() =>
  useCurrentlyHeldKey(() => window),
);

export const useKeyDownSequence = (element: MaybeAccessor<EventTarget | undefined>): Accessor<string[][]> => {
  if (isServer) {
    return () => [];
  }

  const keys = useKeyDownList(element);

  return createMemo((prev) => {
    if (keys().length === 0) return [];
    return [...prev, keys()];
  }, []);
};

export const useWindowKeyDownSequence = createSingletonRoot<Accessor<string[][]>>(() =>
  useKeyDownSequence(() => window),
);

export const createKeyHold = (
  key: string,
  element: MaybeAccessor<EventTarget | undefined>,
  options: { preventDefault?: boolean } = {},
): Accessor<boolean> => {
  if (isServer) {
    return () => false;
  }

  const { preventDefault = true } = options,
    event = useKeyDown(element),
    heldKey = useCurrentlyHeldKey(element);

  return createMemo(() => heldKey() === key && (preventDefault && event()?.preventDefault(), true));
};

export const createWindowKeyHold = (key: string, options: { preventDefault?: boolean } = {}): Accessor<boolean> => {
  return createKeyHold(key, () => window, options);
};

export const createShortcut = (
  keys: MaybeAccessor<string[] | undefined>,
  callback: (event: KeyboardEvent | null) => void,
  options: {
    preventDefault?: boolean;
    requireReset?: boolean;
  } = {},
): void => {
  const _keys = createMemo(() => access(keys) || []);

  const { preventDefault = true } = options,
    event = useWindowKeyDown(),
    sequence = useWindowKeyDownSequence();

  let reset = false;
  // allow to check the sequence only once the user has released all keys
  const handleSequenceWithReset = (sequence: string[][]) => {
    if (!sequence.length) return (reset = false);
    if (reset) return;
    const e = event();

    if (sequence.length < _keys().length) {
      // optimistically preventDefault behavior if we yet don't have enough keys
      if (equalsKeyHoldSequence(sequence, _keys().slice(0, sequence.length))) {
        preventDefault && e && e.preventDefault();
      } else {
        reset = true;
      }
    } else {
      reset = true;
      if (equalsKeyHoldSequence(sequence, _keys())) {
        preventDefault && e && e.preventDefault();
        callback(e);
      }
    }
  };

  // allow checking the sequence even if the user is still holding down keys
  const handleSequenceWithoutReset = (sequence: string[][]) => {
    const last = sequence.at(-1);
    if (!last) return;
    const e = event();

    // optimistically preventDefault behavior if we yet don't have enough keys
    if (preventDefault && last.length < _keys().length) {
      if (arrayEquals(last, _keys().slice(0, _keys().length - 1))) {
        e && e.preventDefault();
      }
      return;
    }

    if (arrayEquals(last, _keys())) {
      const prev = sequence.at(-2);
      if (!prev || arrayEquals(prev, _keys().slice(0, _keys().length - 1))) {
        preventDefault && e && e.preventDefault();
        callback(e);
      }
    }
  };

  createEffect(on(sequence, options.requireReset ? handleSequenceWithReset : handleSequenceWithoutReset));
};

export const usePressedKeys = (target: MaybeAccessor<EventTarget | undefined>, value: string[] = []) => {
  const [keys, setKeys] = createSignal<string[]>(value);

  const reset = () => setKeys(value);
  const pop = () => setKeys([...keys().slice(0, keys().length - 1)]);

  createEventListener(target, "keydown", function (event) {
    if (!(event instanceof KeyboardEvent) || event.defaultPrevented) {
      return;
    }

    if (event.key === "Tab" || (event.shiftKey && event.key === "Tab")) {
      return;
    }

    event.preventDefault();

    if (event.key === "Enter") {
      const element = access(target);

      if (element instanceof HTMLElement) {
        return element.blur();
      }
    }
    if (event.key === "Escape") {
      return reset();
    }
    if (event.key === "Delete") {
      return setKeys([]);
    }
    if (event.key === "Backspace") {
      return pop();
    }

    let lettersKeys = [];

    if (
      !keys().includes(mapKey(event.code)) &&
      event.key !== "Control" &&
      event.key !== "Shift" &&
      event.key !== "Alt" &&
      event.key !== "Meta"
    ) {
      lettersKeys.push(mapKey(event.code));
    }

    const modifiers: string[] = [];

    if (event.ctrlKey) {
      modifiers.push(mapKey("Ctrl"));
    }
    if (event.shiftKey) {
      modifiers.push(mapKey("Shift"));
    }
    if (event.altKey) {
      modifiers.push(mapKey("Alt"));
    }
    if (event.metaKey) {
      modifiers.push(mapKey("Meta"));
    }

    setKeys([...modifiers, ...lettersKeys]);
  });

  return keys;
};
