import Center, {
  type NavigationBarCenterProps as CenterProps,
  type NavigationBarCenterRenderProps as CenterRenderProps,
} from "./Center";
import Leading, {
  type NavigationBarLeadingProps as LeadingProps,
  type NavigationBarLeadingRenderProps as LeadingRenderProps,
} from "./Leading";
import Root, {
  type NavigationBarRootProps as RootProps,
  type NavigationBarRootRenderProps as RootRenderProps,
} from "./Root";
import Trailing, {
  type NavigationBarTrailingProps as TrailingProps,
  type NavigationBarTrailingRenderProps as TrailingRenderProps,
} from "./Trailing";

export type {
  CenterProps,
  CenterRenderProps,
  LeadingProps,
  LeadingRenderProps,
  RootProps,
  RootRenderProps,
  TrailingProps,
  TrailingRenderProps,
};

export { Center, Leading, Root, Trailing };

export const NavigationBar = Object.assign(Root, {
  Leading,
  Trailing,
  Center,
});

export default NavigationBar;
