import Checkbox, { CheckboxProps } from '@/components/Checkbox/Checkbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  render: () => (
    <div className='space-y-4'>
      <Checkbox label='Default Checkbox' />
      <Checkbox label='Small Checkbox' checkboxSize='small' />
      <Checkbox label='Large Checkbox' checkboxSize='large' />
      <Checkbox label='Error Checkbox' state='error' />
      <Checkbox label='Success Checkbox' state='success' />
    </div>
  ),
};
