import { TextField, TextFieldProps } from "@/components/TextField/TextField";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<TextFieldProps>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <TextField label="Label" placeholder="Placeholder" helpText="Help text" />
      <TextField
        label="Label"
        placeholder="Placeholder"
        helpText="Help text"
        className="hover:border-gray-400"
      />
      <TextField
        label="Label"
        placeholder="Placeholder"
        helpText="Help text"
        state="focus"
      />
      <TextField
        label="Label"
        placeholder="Placeholder"
        helpText="Help text"
        state="error"
        error="Error message"
      />
      <TextField
        label="Label"
        placeholder="Placeholder"
        helpText="Help text"
        state="success"
      />
      <TextField
        label="Label"
        placeholder="Placeholder"
        helpText="Help text"
        state="disabled"
        disabled
      />
    </div>
  ),
};
