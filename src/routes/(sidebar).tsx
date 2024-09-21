import { type ParentProps } from "solid-js";
import { Sidebar } from "~/components";

export default function Aside(props: ParentProps) {
  return (
    <div class="relative flex w-full max-md:flex-col-reverse">
      <Sidebar />

      <main class="mx-auto size-full max-w-3xl px-3 py-6 md:px-6">{props.children}</main>
    </div>
  );
}
