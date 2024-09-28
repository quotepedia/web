import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";
import { Show, splitProps } from "solid-js";

import { Transition } from "solid-transition-group";

import type { DynamicProps, RootProps } from "@corvu/otp-field";
import OtpFieldPrimitive from "@corvu/otp-field";

import { cn } from "~/lib/utils/css";
import { Cursor } from "~/components";

type OtpFieldProps<T extends ValidComponent = "div"> = RootProps<T> & JSX.StylableSVGAttributes;

const OtpFieldRoot = <T extends ValidComponent = "div">(props: DynamicProps<T, OtpFieldProps<T>>) => {
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

const OtpFieldInput = OtpFieldPrimitive.Input;

const OtpFieldSlot: Component<ComponentProps<"div"> & { index: number }> = (props) => {
  const [local, others] = splitProps(props, ["class", "index"]);
  const context = OtpFieldPrimitive.useContext();
  const char = () => context.value()[local.index];
  const showCursor = () => context.value().length === local.index && context.isInserting();

  return (
    <div
      class={cn(
        "flex size-8 items-center justify-center rounded-md font-mono ring-1 ring-bg-secondary transition-all overflow-hidden",
        context.activeSlots().includes(local.index) && "ring-blue-600",
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
              duration: showCursor() ? 0 : 300,
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
              duration: showCursor() ? 300 : 0,
              easing: "cubic-bezier(0.68,-0.55,0.27,1.55)",
            },
          );
          a.finished.then(done);
        }}
        mode="outin"
      >
        <Show when={char()}>
          <span>{char()}</span>
        </Show>
        <Show when={showCursor()}>
          <Cursor blink={true} class="h-4 w-px" />
        </Show>
      </Transition>
    </div>
  );
};

export const OtpField = Object.assign(OtpFieldRoot, {
  Input: OtpFieldInput,
  Slot: OtpFieldSlot,
});
