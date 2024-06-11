import cn from "@components/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ReactNode } from "react";

export interface BoxProps extends VariantProps<typeof boxVariants> {
  children: ReactNode;
  className?: string;
}

export const boxVariants = cva(
  "flex flex-col items-center rounded-md px-4 py-2 shadow-md bg-white",
  {
    variants: {
      variant: {
        default: "",
        noBoxShadow: "shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function Box({ children, variant, className, ...props }: BoxProps) {
  return (
    <div className={cn(boxVariants({ variant }), className)}>{children}</div>
  );
}
