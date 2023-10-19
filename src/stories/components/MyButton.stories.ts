import type { Meta, StoryObj } from "@storybook/react";
import { MDTVButton } from "../../components/Buttons/MDTVButton";

const meta: Meta<typeof MDTVButton> = {
  title: "MDTV/Buttons",
  parameters: {
    layout: "centered",
  },
  component: MDTVButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MDTVButton>;

export const Primary: Story = {
  args: {
    label: "Ingresar",
    isLoading: false,
    isDisabled: false,
    primary: "primary",
    onClick() {
      alert("Entering the system...");
    },
  },
};

export const Secondary: Story = {
  args: {
    label: "Ingresar",
    isLoading: false,
    isDisabled: false,
    primary: "secondary",
    onClick() {
      alert("Entering the system...");
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Ingresar",
    isLoading: false,
    isDisabled: true,
    primary: "disabled",
  },
};

export const Loading: Story = {
  args: {
    // label: "pepe",
    isLoading: true,
    isDisabled: false,
    primary: "disabled",
  },
};

export const Link: Story = {
  args: {
    label: "¿Olvidaste tu contraseña?",
    isLoading: false,
    isDisabled: false,
    isLink: true,
    primary: "link",
    onClick() {
      alert("Entering the system...");
    },
  },
};
