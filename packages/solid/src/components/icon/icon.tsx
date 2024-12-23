import { Icon as Root, type IconifyIconProps } from "@iconify-icon/solid";

export type IconProps = IconifyIconProps;

export const Icon = (props: IconProps) => {
  return <Root width="100%" height="100%" {...props} />;
};

export default Icon;
