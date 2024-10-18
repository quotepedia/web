import { Polymorphic, PolymorphicProps } from "@kobalte/core";
import { A, AnchorProps } from "@solidjs/router";
import { Icon } from "solid-heroicons";
import { JSX, ParentComponent, splitProps, ValidComponent } from "solid-js";
import { cn } from "~/shared/utils/css";

export const SidebarItemRoot: ParentComponent<AnchorProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "activeClass"]);
  return (
    <A
      class={cn(
        "flex w-full select-none items-center justify-center gap-1 text-fg-soft",
        "transition-[opacity,color] active:duration-0",
        "max-md:hover:opacity-75 max-md:active:opacity-50",
        "max-sm:flex-col",
        "md:flex-row md:justify-start md:gap-2 md:rounded-lg md:p-2 md:hover:bg-bg-secondary",
        local.class,
      )}
      activeClass={cn(
        "max-md:text-fg-accent md:text-fg-body md:bg-bg-tertiary md:hover:bg-bg-tertiary !transition-[opacity,color,background-color]",
        "[&_span]:max-md:ring-fg-accent",
        local.activeClass,
      )}
      end={false}
      {...others}
    />
  );
};

export const SidebarItemLabel: ParentComponent = (props) => {
  return <span class="text-xs font-semibold leading-none md:text-sm md:font-medium md:leading-none" {...props} />;
};

export type IconProps = {
  path?: {
    path?: JSX.Element;
    outline?: boolean;
    mini?: boolean;
  };
};

export type SidebarIconProps = IconProps & JSX.StylableSVGAttributes;

export const SidebarItemIcon = <T extends ValidComponent>(props: PolymorphicProps<T, SidebarIconProps>) => {
  const [local, others] = splitProps(props, ["class"]);
  return <Polymorphic as={Icon} class={cn("size-6 md:size-4", local.class)} {...others} />;
};

export const SidebarItem = Object.assign(SidebarItemRoot, {
  Icon: SidebarItemIcon,
  Label: SidebarItemLabel,
});
