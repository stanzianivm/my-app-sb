import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "../../components/MyButton/MyButton";

const meta: Meta<typeof MyButton> = {
  title: "MDTV/Buttons",
  parameters: {
    layout: "centered",
  },
  component: MyButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    label: "Ingresar a MIDirecTV",
    isLoading: false,
    isDisabled: false,
    // background: "dark",
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
    // background: "light",
    onClick() {
      console.log(123);
    },
  },
};

export const Loading: Story = {
  args: {
    // label: "",
    isLoading: true,
    isDisabled: false,
    // background: "light",
    onClick() {
      console.log(123);
    },
  },
};
