import type { Component, ComponentProps, ValidComponent } from "solid-js";
import { Show, splitProps } from "solid-js";

import { Transition } from "solid-transition-group";

import type { DynamicProps } from "corvu/otp-field";
import OtpFieldPrimitive from "corvu/otp-field";

import { cn } from "@src/utils/css";

import { Cursor } from "../cursor";
import type { OtpFieldInputProps, OtpFieldRootProps } from "./otp-field.props";
import { createSlotTransition } from "./transition";

export const OtpFieldRoot = <T extends ValidComponent = "div">(props: DynamicProps<T, OtpFieldRootProps<T>>) => {
  const [local, others] = splitProps(props as OtpFieldRootProps, ["class"]);
  return (
    <OtpFieldPrimitive
      class={cn(
        "flex items-center justify-center gap-2 disabled:cursor-not-allowed has-[:disabled]:opacity-75",
        local.class,
      )}
      {...others}
    />
  );
};

export const OtpFieldInput = <T extends ValidComponent = "input">(props: DynamicProps<T, OtpFieldInputProps<T>>) => {
  const [local, others] = splitProps(props as OtpFieldInputProps, ["class"]);
  return <OtpFieldPrimitive.Input class={cn("peer", local.class)} {...others} />;
};

export const OtpFieldSlot: Component<ComponentProps<"div"> & { index: number }> = (props) => {
  const [local, others] = splitProps(props, ["class", "index"]);
  const context = OtpFieldPrimitive.useContext();
  const char = () => context.value()[local.index];
  const showCursor = () => context.value().length === local.index && context.isInserting();

  return (
    <div
      class={cn(
        "bg-bg-body flex size-8 items-center justify-center overflow-hidden rounded-md font-mono transition-all",
        "ring-bg-secondary peer-hover:ring-bg-tertiary ring-1 peer-data-[valid]:ring-green-600",
        "peer-disabled:bg-bg-default peer-disabled:ring-bg-tertiary",
        context.activeSlots().includes(local.index) && "ring-ring-accent peer-hover:ring-ring-accent",
        local.class,
      )}
      {...others}
    >
      <Transition {...createSlotTransition(showCursor)}>
        <Show when={char()}>
          <span>{char()}</span>
        </Show>
        <Show when={showCursor()}>
          <Cursor flash={true} class="h-4 w-px rounded" />
        </Show>
      </Transition>
    </div>
  );
};
