import type { Meta, StoryObj } from "@storybook/react";
import { MyInputLabel } from "../../components/MyInputLabel/MyInputLabel";

const meta: Meta<typeof MyInputLabel> = {
  title: "MDTV/Inputs",
  parameters: {
    layout: "centered",
  },
  component: MyInputLabel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MyInputLabel>;

export const InputLabel: Story = {
  args: {
    label: "Password",
    type: "password",
    id: "password",
    name: "password",
    error: "",
    idDisabled: false,
  },
};
