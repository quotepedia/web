import { createContext, useContext } from "solid-js";

export type GroupContextValue = {
  /**
   * The `role` attribute of the dialog element.
   */
  role: "group" | "region";

  /**
   * The `id` attribute of the dialog element.
   */
  groupId: string;

  /**
   * The `id` attribute of the dialog label element. Is undefined if no `Dialog.Label` is present.
   */
  labelId: string | undefined;

  /**
   * The `id` attribute of the dialog description element. Is undefined if no `Dialog.Description` is present.
   */
  descriptionId: string | undefined;
};

export const GroupContext = createContext<GroupContextValue>();

export const useGroupContext = () => {
  const context = useContext(GroupContext);

  if (context === undefined) {
    throw new Error("The group context must be used within a <Group> component.");
  }

  return context;
};

export type GroupPrivateContextValue = GroupContextValue & {
  registerLabelId: VoidFunction;
  unregisterLabelId: VoidFunction;
  registerDescriptionId: VoidFunction;
  unregisterDescriptionId: VoidFunction;
};

export const GroupPrivateContext = createContext<GroupPrivateContextValue>();

export const useGroupPrivateContext = () => {
  const context = useContext(GroupPrivateContext);

  if (context === undefined) {
    throw new Error("The group context must be used within a <Group> component.");
  }

  return context;
};

export default useGroupContext;
