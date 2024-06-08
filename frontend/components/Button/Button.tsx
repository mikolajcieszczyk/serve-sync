import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonVariants = cva("");

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={(twMerge("bg-white border-r-6"), className)}>
      {children}
    </button>
  );
}
