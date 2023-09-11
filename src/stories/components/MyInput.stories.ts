import type { Meta, StoryObj } from "@storybook/react";
import { MDTVInput } from "../../components/Inputs/MDTVInput";

const meta: Meta<typeof MDTVInput> = {
  title: "MDTV/Inputs",
  parameters: {
    layout: "centered",
  },
  component: MDTVInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MDTVInput>;

export const Input: Story = {
  args: {
    label: "Password",
    type: "password",
    id: "password",
    name: "password",
    error: "",
    idDisabled: false,
  },
};

export const InputDisabled: Story = {
  args: {
    label: "Password",
    type: "password",
    id: "password",
    name: "password",
    error: "",
    idDisabled: true,
  },
};

export const InputError: Story = {
  args: {
    label: "Password",
    type: "password",
    id: "password",
    name: "password",
    error: "Este campo es obligatorio",
    idDisabled: false,
  },
};
