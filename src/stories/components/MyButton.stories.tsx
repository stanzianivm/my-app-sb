// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "../../components/MyButton/MyButton";

const meta: Meta<typeof MyButton> = {
  component: MyButton,
};

export default meta;

type Story = StoryObj<typeof MyButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <>
      <MyButton label="Example 111" onClick={() => console.log(123)} />
      <MyButton label="Example WWW" onClick={() => console.log(123)} />
    </>
  ),
};
