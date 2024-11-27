import { isFunction } from "@corvu/utils";
import createOnce from "@corvu/utils/create/once";
import { untrack, type JSX } from "solid-js";

export const createChildrenProps = <T extends any = any>(
  children: JSX.Element | ((props: T) => JSX.Element),
  props: T,
): JSX.Element => {
  const memoizedChildren = createOnce(() => children);

  const resolveChildren = () => {
    const children = memoizedChildren()();
    if (isFunction(children)) {
      return children(props);
    }
    return children;
  };

  return untrack(() => resolveChildren());
};
