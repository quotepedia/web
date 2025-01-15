import type { OverrideComponentProps } from "@kobalte/core";
import type { Meta, StoryObj } from "@storybook/html";
import { Button, type RootProps } from "./index";

type Story = StoryObj<OverrideComponentProps<"button", RootProps>>;

export const Default: Story = {
  args: {
    children: "Play",
    leadingIcon: "f7:play-fill",
  },
};

export default {
  title: "Button",
  argTypes: {
    style: {
      options: ["default", "bezeled", "ghost"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "secondary", "success", "danger"],
      control: { type: "select" },
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
    leadingIcon: {
      control: { type: "text" },
    },
    trailingIcon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  render: (props: RootProps) => <Button {...props} />,
} as Meta<OverrideComponentProps<"button", RootProps>>;
