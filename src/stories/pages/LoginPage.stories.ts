import type { Meta, StoryObj } from "@storybook/react";
import { LoginPage } from "../../pages/LoginPage";

const meta: Meta<typeof LoginPage> = {
  title: "MDTV/Pages",
  parameters: {
    layout: "fullscreen",
  },
  component: LoginPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {};
