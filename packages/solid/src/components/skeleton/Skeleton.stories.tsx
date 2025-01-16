import type { OverrideComponentProps } from "@kobalte/core";
import type { Meta, StoryObj } from "@storybook/html";
import Skeleton, { type RootProps } from "./index";

type Args = OverrideComponentProps<"div", RootProps>;
type Story = StoryObj<Args>;

export default {
  title: "Skeleton",
  argTypes: {
    opacity: {
      options: [25, 50, 75],
      control: { type: "select" },
    },
  },
  render: (props) => <Skeleton {...props} />,
} as Meta<Args>;

export const Playground: Story = {
  args: {
    opacity: 50,
  },
};
