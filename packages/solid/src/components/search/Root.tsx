import { debounce } from "@solid-primitives/scheduled";
import { FormControl } from "@src/components/form-control";
import { batch, createEffect, createSignal, mergeProps, splitProps, type JSX } from "solid-js";

export type SearchRootProps = {
  name?: string;
  icon?: string;
  type?: string | undefined;
  label?: string | undefined;
  description?: string | JSX.Element | undefined;
  placeholder?: string | undefined;
  value?: string | undefined;
  error?: string | undefined;
  class?: string | undefined;
  title?: string | undefined;
  loading?: boolean | undefined;
  readonly?: boolean | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  autofocus?: boolean | undefined;
  wait?: number;
  onChange?: (value: string) => any;
  onInput?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, InputEvent>;
  onBlur?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, FocusEvent>;
  onFocus?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, FocusEvent>;
  onKeyDown?: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, KeyboardEvent>;
};

export const SearchRoot = (props: SearchRootProps) => {
  const defaultedProps = mergeProps(
    {
      name: "search",
      type: "search",
    } satisfies Partial<SearchRootProps>,
    props,
  );

  const [localProps, otherProps] = splitProps(defaultedProps, ["autofocus", "onChange", "wait", "value", "onInput"]);

  const [ref, setRef] = createSignal<HTMLInputElement | HTMLTextAreaElement>();
  const [value, setValue] = createSignal<string>(localProps.value ?? "");

  const updateValue = (value: string) => {
    batch(() => {
      setValue(value);
      localProps.onChange?.(value);
    });
  };

  const scheduleUpdateValue = debounce(updateValue, localProps.wait);

  const onInput: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, InputEvent> = (event) => {
    localProps.onInput?.(event);

    if (window?.screenTop !== 0) {
      window?.scrollTo({ top: 0 });
    }

    scheduleUpdateValue.clear();
    scheduleUpdateValue(event.currentTarget.value);
  };

  createEffect(() => {
    if (localProps.autofocus) {
      ref()?.focus();
      ref()?.select();
    }
  });

  return <FormControl ref={setRef} value={value()} onInput={onInput} {...otherProps} />;
};

export default SearchRoot;
