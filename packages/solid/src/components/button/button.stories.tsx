import type { OverrideComponentProps } from "@kobalte/core";
import type { Meta, StoryObj } from "@storybook/html";
import { For } from "solid-js";
import { Button, type RootProps } from "./index";

type Story = StoryObj<OverrideComponentProps<"button", RootProps>>;

export const Default: Story = {
  args: {
    children: "Play",
    leadingIcon: "f7:play-fill",
  },
};

export const Colors: Story = {
  args: {
    children: "Play",
    leadingIcon: "f7:play-fill",
  },
  // @ts-ignore
  render: (props) => (
    <div class="flex flex-col gap-4">
      <For each={["default", "bezeled", "ghost"] as const}>
        {(style) => (
          <div class="flex items-center space-x-4">
            <For each={["primary", "success", "secondary", "danger"] as const}>
              {(color) => <Button {...props} style={style} color={color} />}
            </For>
          </div>
        )}
      </For>
    </div>
  ),
};

export default {
  title: "Button",
  argTypes: {
    style: {
      options: ["default", "bezeled", "ghost"],
      control: { type: "select" },
    },
    spacing: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    shape: {
      options: ["circle", "default"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "secondary", "success", "danger"],
      control: { type: "select" },
    },
    stretched: {
      control: { type: "boolean" },
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
