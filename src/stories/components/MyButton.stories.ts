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
    label: "Ingresar a MIDirecTV",
    isLoading: false,
    isDisabled: false,
    className: "primary-blue",
    onClick() {
      alert("Entering the system...");
    },
  },
};

export const Secondary: Story = {
  args: {
    label: "Ingresar a MIDirecTV",
    isLoading: false,
    isDisabled: false,
    className: "secondary-outline",
    onClick() {
      alert("Entering the system...");
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Ingresar a MIDirecTV",
    isLoading: false,
    isDisabled: true,
    className: "disabled",
  },
};

export const Loading: Story = {
  args: {
    // label: "",
    isLoading: true,
    isDisabled: false,
    className: "disabled",
  },
};

export const Link: Story = {
  args: {
    label: "¿Olvidaste tu contraseña?",
    isLoading: false,
    isDisabled: false,
    isLink: true,
    className: "link",
    onClick() {
      alert("Entering the system...");
    },
  },
};
