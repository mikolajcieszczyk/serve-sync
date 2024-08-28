import type { Meta, StoryObj } from '@storybook/react';
import { Typography, TypographyProps } from '../components/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
};

export default meta;

type Story = StoryObj<TypographyProps>;

const typographyVariantsList = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'p',
  'span',
  'small',
] as const;

const typographyColors = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
] as const;

const generateTypographyVariants = (color?: TypographyProps['color']) => {
  return typographyVariantsList.map((variant) => (
    <Typography key={`${variant}-${color}`} variant={variant} color={color}>
      {variant.toUpperCase()} - {color}
      <br />
    </Typography>
  ));
};

export const Colors: Story = {
  render: () => (
    <div className='my-4 ml-4'>
      {typographyColors.map((color, index) => (
        <div key={`${index}-${color}`}>
          <h1 className='mb-10 text-xl font-bold'>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </h1>
          <div className='space-y-2'>{generateTypographyVariants(color)}</div>
        </div>
      ))}
    </div>
  ),
};
