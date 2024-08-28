import type { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps } from '../components/Box/Box';

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
};

export default meta;

type Story = StoryObj<BoxProps>;

const boxVariants: Array<BoxProps['variant']> = ['default', 'noBoxShadow'];

export const Default: Story = {
  render: () => (
    <div className='space-y-4'>
      {boxVariants.map((variant) => (
        <Box key={variant} variant={variant} className='bg-gray-200'>
          <p>This is a {variant} box.</p>
        </Box>
      ))}
    </div>
  ),
};
