import cn from "@components/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const buttonVariants = cva("rounded-md px-4 py-2", {
  variants: {
    variant: {
      default: "bg-primary-500 text-white",
      label: "bg-opacity-15 text-primary-500",
      outline: "border border-primary-500 text-primary-500 bg-white",
      text: "bg-white text-primary-500",
    },
    size: {
      large: "text-button-large py-3 px-6",
      medium: "text-button-medium py-2 px-4",
      small: "text-button-small py-1 px-2",
    },
    shade: {
      primary: "bg-primary-500",
      secondary: "bg-secondary-500",
      error: "bg-error-500",
      warning: "bg-warning-500",
      info: "bg-info-500",
      success: "bg-success-500",
    },
    state: {
      default: "",
      hover: "hover:bg-opacity-80",
      active: "active:bg-opacity-70",
      focus: "focus:ring-2 focus:ring-primary-500",
      disabled: "opacity-50 cursor-not-allowed",
    },
  },
  compoundVariants: [
    // Default variant states for primary shade
    {
      variant: "default",
      shade: "primary",
      state: "hover",
      className: "hover:bg-primary-dark",
    },
    {
      variant: "default",
      shade: "primary",
      state: "active",
      className: "active:bg-primary-dark",
    },
    {
      variant: "default",
      shade: "primary",
      state: "focus",
      className: "focus:ring-primary-500",
    },
    {
      variant: "default",
      shade: "primary",
      state: "disabled",
      className: "opacity-50 cursor-not-allowed",
    },

    // Label variant states for primary shade
    {
      variant: "label",
      shade: "primary",
      state: "hover",
      className: "hover:bg-primary-light",
    },
    {
      variant: "label",
      shade: "primary",
      state: "active",
      className: "active:bg-primary-light",
    },
    {
      variant: "label",
      shade: "primary",
      state: "focus",
      className: "focus:ring-primary-500",
    },
    {
      variant: "label",
      shade: "primary",
      state: "disabled",
      className: "opacity-50 cursor-not-allowed",
    },

    // Outline variant states for primary shade
    {
      variant: "outline",
      shade: "primary",
      state: "hover",
      className: "hover:bg-primary-light",
    },
    {
      variant: "outline",
      shade: "primary",
      state: "active",
      className: "active:bg-primary-light",
    },
    {
      variant: "outline",
      shade: "primary",
      state: "focus",
      className: "focus:ring-primary-500",
    },
    {
      variant: "outline",
      shade: "primary",
      state: "disabled",
      className: "opacity-50 cursor-not-allowed",
    },

    // Text variant states for primary shade
    {
      variant: "text",
      shade: "primary",
      state: "hover",
      className: "hover:bg-primary-light",
    },
    {
      variant: "text",
      shade: "primary",
      state: "active",
      className: "active:bg-primary-light",
    },
    {
      variant: "text",
      shade: "primary",
      state: "focus",
      className: "focus:ring-primary-500",
    },
    {
      variant: "text",
      shade: "primary",
      state: "disabled",
      className: "opacity-50 cursor-not-allowed",
    },

    // Add similar compound variants for other shades (secondary, error, warning, info, success)
    // For Secondary
    {
      variant: "default",
      shade: "secondary",
      state: "hover",
      className: "hover:bg-secondary-dark",
    },
    {
      variant: "default",
      shade: "secondary",
      state: "active",
      className: "active:bg-secondary-dark",
    },
    {
      variant: "default",
      shade: "secondary",
      state: "focus",
      className: "focus:ring-secondary-500",
    },
    {
      variant: "default",
      shade: "secondary",
      state: "disabled",
      className: "opacity-50 cursor-not-allowed",
    },

    {
      variant: "label",
      shade: "secondary",
      state: "hover",
      className: "hover:bg-secondary-light",
    },
    {
      variant: "label",
      shade: "secondary",
      state: "active",
      className: "active:bg-secondary-light",
    },
    {
      variant: "label",
      shade: "secondary",
      state: "focus",
      className: "focus:ring-secondary-500",
    },
    {
      variant: "label",
      shade: "secondary",
      state: "disabled",
      className: "opacity-50 cursor-not-allowed",
    },

    {
      variant: "outline",
      shade: "secondary",
      state: "hover",
      className: "hover:bg-secondary-light",
    },
    {
      variant: "outline",
      shade: "secondary",
      state: "active",
      className: "active:bg-secondary-light",
    },
    {
      variant: "outline",
      shade: "secondary",
      state: "focus",
      className: "focus:ring-secondary-500",
    },
    {
      variant: "outline",
      shade: "secondary",
      state: "disabled",
      className: "opacity-50 cursor-not-allowed",
    },

    {
      variant: "text",
      shade: "secondary",
      state: "hover",
      className: "hover:bg-secondary-light",
    },
    {
      variant: "text",
      shade: "secondary",
      state: "active",
      className: "active:bg-secondary-light",
    },
    {
      variant: "text",
      shade: "secondary",
      state: "focus",
      className: "focus:ring-secondary-500",
    },
    {
      variant: "text",
      shade: "secondary",
      state: "disabled",
      className: "opacity-50 cursor-not-allowed",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "medium",
    state: "default",
  },
});

export function Button({
  children,
  className,
  variant,
  size,
  shade,
  state,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, shade, state, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
