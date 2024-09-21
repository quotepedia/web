import { JSX, ParentProps, type ValidComponent, splitProps } from "solid-js";

import { type PolymorphicProps, Polymorphic } from "@kobalte/core";
import { TransitionGroup } from "solid-transition-group";

export const Motion = <T extends ValidComponent = "div">(props: PolymorphicProps<T, JSX.StylableSVGAttributes & ParentProps>) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <Polymorphic as="div" class={local.class} {...others}>
      <TransitionGroup
        moveClass="transition-transform duration-300"
        enterClass="opacity-0"
        enterActiveClass="transition-all duration-300"
        exitActiveClass="transition-all duration-300"
        exitToClass="opacity-0"
        onBeforeExit={(el) => el.remove()}
      >
        {props.children}
      </TransitionGroup>
    </Polymorphic>
  );
};
