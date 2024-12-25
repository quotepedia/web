import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { Control, Description, ErrorMessage, Input, Label, Root, Thumb } from "@kobalte/core/switch";
import { splitProps, type ValidComponent } from "solid-js";

import type { SwitchRootProps } from "./switch.props";
import { styles } from "./switch.styles";

export const SwitchControl = Control;
export const SwitchDescription = Description;
export const SwitchErrorMessage = ErrorMessage;
export const SwitchInput = Input;
export const SwitchLabel = Label;
export const SwitchThumb = Thumb;

export const SwitchRoot = <T extends ValidComponent = "div">(props: PolymorphicProps<T, SwitchRootProps<T>>) => {
  const [styleProps, otherProps] = splitProps(props as SwitchRootProps, ["class"]);
  return <Root class={styles().root(styleProps)} {...otherProps} />;
};

export const SwitchIndicator = () => {
  return (
    <Control class={styles().control()}>
      <Thumb class={styles().thumb()} />
    </Control>
  );
};
