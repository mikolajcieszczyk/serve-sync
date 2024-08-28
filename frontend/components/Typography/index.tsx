import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import cn from 'utils/cn';

export interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  className?: string;
  children: ReactNode;
}

export const typographyVariants = cva('font-sans text-text-primary', {
  variants: {
    variant: {
      h1: 'font-main-font text-4xl font-bold leading-10',
      h2: 'font-main-font text-3xl font-bold',
      h3: 'font-main-font text-2xl font-bold',
      h4: 'font-main-font text-xl font-bold',
      h5: 'font-main-font text-lg font-bold',
      p: 'text-base',
      span: 'text-sm',
      small: 'text-xs',
    },
    color: {
      primary: 'text-text-primary',
      secondary: 'text-blue-500',
      error: 'text-red-500',
      warning: 'text-warning-500',
      info: 'text-info-500',
      success: 'text-green-500',
    },
  },
  defaultVariants: {
    variant: 'p',
    color: 'primary',
  },
});

export const Typography = ({
  variant = 'p',
  color,
  className,
  children,
}: TypographyProps) => {
  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={cn(typographyVariants({ variant, color }), className)}
    >
      {children}
    </Component>
  );
};
