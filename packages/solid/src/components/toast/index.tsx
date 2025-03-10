import { type JSX } from "solid-js";
import { toast as sonner, Toaster, type ExternalToast } from "solid-sonner";
import Icon from "../icon";
import Button from "../button";

export const toast = (children: JSX.Element, data?: ExternalToast) => {
  sonner.custom(
    (id) => (
      <div class="border-bg-secondary bg-bg-default relative flex w-full min-w-[356px] select-none items-center gap-1 rounded-xl border px-3 py-2 shadow-md lg:max-w-[356px]">
        <span class="text-fg-soft text-sm font-semibold">{children}</span>
        <Button onClick={() => sonner.dismiss(id)} class="ms-auto" color="secondary" style="ghost">
          <Icon icon="f7:xmark" class="size-4 stroke-current" />
        </Button>
      </div>
    ),
    data,
  );
};

export { Toaster };
