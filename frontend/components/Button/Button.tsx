import cn from "@components/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const buttonVariants = cva("rounded-md bg-primary-main text-white px-4 py-2", {
  variants: {
    variant: {
      label: "bg-opacity-15 text-primary-main text-primary-main",
      outline: "border border-primary-main text-primary-main bg-white",
      text: "bg-white text-primary-main",
    },
    size: {
      large: "text-lg",
      medium: "text-base",
      small: "text-sm",
    },
    shade: {
      primary: "bg-primary-main",
      secondary: "bg-slate-600",
      error: "bg-red-700",
      warning: "bg-orange-700",
      info: "bg-cyan-700",
      success: "bg-green-700",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
