import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';
import cn from 'utils/cn';

export interface BoxProps extends VariantProps<typeof boxVariants> {
  children: ReactNode;
  className?: string;
}

export const boxVariants = cva(
  'flex flex-col items-center rounded-md bg-white px-4 py-2 shadow-md',
  {
    variants: {
      variant: {
        default: '',
        noBoxShadow: 'shadow-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function Box({ children, variant, className }: BoxProps) {
  return (
    <div className={cn(boxVariants({ variant }), className)}>{children}</div>
  );
}
