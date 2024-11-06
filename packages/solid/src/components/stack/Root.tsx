import { Polymorphic, type PolymorphicProps } from "@kobalte/core/polymorphic";
import { children, For, Show, splitProps, type JSX, type ParentProps, type ValidComponent } from "solid-js";
import { tv } from "tailwind-variants";

export const styles = tv({
  base: "flex w-full gap-2 items-center justify-center",
});

export type StackRootRenderProps = { class?: string; separator?: JSX.Element };

export type StackRootProps = ParentProps<StackRootRenderProps>;

export const StackRoot = <T extends ValidComponent = "div">(props: PolymorphicProps<T, StackRootProps>) => {
  const [scopedProps, variantProps, otherProps] = splitProps(props, ["separator", "children"], ["class"]);

  const c = children(() => scopedProps.children);

  return (
    <Polymorphic as="div" class={styles(variantProps)} {...otherProps}>
      <For each={c.toArray()}>
        {(child, index) => (
          <>
            <Show when={scopedProps.separator && index() !== 0 && index() !== c.length}>{scopedProps.separator}</Show>

            {child}
          </>
        )}
      </For>
    </Polymorphic>
  );
};

export default StackRoot;
