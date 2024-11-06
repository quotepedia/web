import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";
import { Show, splitProps } from "solid-js";

import { Transition } from "solid-transition-group";

import type { DynamicProps, RootProps } from "corvu/otp-field";
import OtpFieldPrimitive, { type InputProps } from "corvu/otp-field";

import { cn } from "@src/utils/css";

import { Cursor } from "../cursor";

type OtpFieldProps<T extends ValidComponent = "div"> = RootProps<T> & JSX.StylableSVGAttributes;

export const OtpFieldRoot = <T extends ValidComponent = "div">(props: DynamicProps<T, OtpFieldProps<T>>) => {
  const [local, others] = splitProps(props as OtpFieldProps, ["class"]);
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

type OtpFieldInputProps<T extends ValidComponent = "input"> = InputProps<T> & {
  class?: string;
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
      <Transition
        onEnter={(el, done) => {
          const a = el.animate(
            [
              {
                scale: 0,
                opacity: 0,
                transform: "translateY(100%)",
              },
              {
                scale: 1,
                opacity: 1,
                transform: "translateY(0%)",
              },
            ],
            {
              duration: context.value() ? (showCursor() ? 0 : 300) : 0,
              easing: "cubic-bezier(0.68,-0.55,0.27,1.55)",
            },
          );
          a.finished.then(done);
        }}
        onExit={(el, done) => {
          const a = el.animate(
            [
              {
                scale: 1,
                opacity: 1,
                transform: "translateY(0%)",
              },
              {
                scale: 0,
                opacity: 0,
                transform: "translateY(100%)",
              },
            ],
            {
              duration: context.value() ? (showCursor() ? 300 : 0) : 300,
              easing: "cubic-bezier(0.68,-0.55,0.27,1.55)",
            },
          );
          a.finished.then(done);
        }}
        mode={showCursor() ? undefined : "outin"}
      >
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
