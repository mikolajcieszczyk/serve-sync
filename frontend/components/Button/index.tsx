import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";
import cn from "utils/cn";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  icon?: IconType;
  iconPosition?: "left" | "right";
}

export const buttonVariants = cva(
  "flex justify-center items-center rounded-md px-4 py-2 text-white bg-primary-500 shadow-md disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-primary-500 active:bg-opacity-70",
  {
    variants: {
      variant: {
        default: "",
        label: "bg-primary-opacity-light text-primary-500",
        outline: "bg-white text-primary-500 border border-primary-500",
        text: "bg-white text-primary-500",
      },
      size: {
        large: "py-3 px-6 text-lg",
        medium: "py-2 px-4 text-base",
        small: "py-1 px-2 text-sm",
      },
      accent: {
        primary:
          "hover:bg-primary-600 hover:text-white active:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-300",
        secondary:
          "bg-secondary-500 hover:text-white hover:bg-secondary-600 active:bg-secondary-700 focus:outline-none focus:ring focus:ring-secondary-300",
        error:
          "bg-error-500 hover:text-white hover:bg-error-600 active:bg-error-700 focus:outline-none focus:ring focus:ring-error-300",
        warning:
          "bg-warning-500 hover:text-white hover:bg-warning-600 active:bg-warning-700 focus:outline-none focus:ring focus:ring-warning-300",
        info: "bg-info-500 hover:text-white hover:bg-info-600 active:bg-info-700 focus:outline-none focus:ring focus:ring-info-300",
        success:
          "bg-success-500 hover:text-white hover:bg-success-600 active:bg-success-700 focus:outline-none focus:ring focus:ring-success-300",
      },
    },
    compoundVariants: [
      // Secondary accents
      {
        accent: "secondary",
        variant: "label",
        className: "bg-secondary-opacity-light text-secondary-500",
      },
      {
        accent: "secondary",
        variant: "outline",
        className: "bg-white border border-secondary-500 text-secondary-500",
      },
      {
        accent: "secondary",
        variant: "text",
        className: "bg-white text-secondary-500",
      },
      // Error accents
      {
        accent: "error",
        variant: "label",
        className: "bg-error-opacity-light text-error-500",
      },
      {
        accent: "error",
        variant: "outline",
        className: "bg-white border border-error-500 text-error-500",
      },
      {
        accent: "error",
        variant: "text",
        className: "bg-white text-error-500",
      },
      // Warning accents
      {
        accent: "warning",
        variant: "label",
        className: "bg-warning-opacity-light text-warning-500",
      },
      {
        accent: "warning",
        variant: "outline",
        className: "bg-white border border-warning-500 text-warning-500",
      },
      {
        accent: "warning",
        variant: "text",
        className: "bg-white text-warning-500",
      },
      // Info accents
      {
        accent: "info",
        variant: "label",
        className: "bg-info-opacity-light text-info-500",
      },
      {
        accent: "info",
        variant: "outline",
        className: "bg-white border border-info-500 text-info-500",
      },
      {
        accent: "info",
        variant: "text",
        className: "bg-white text-info-500",
      },
      // Success accents
      {
        accent: "success",
        variant: "label",
        className: "bg-success-opacity-light text-success-500",
      },
      {
        accent: "success",
        variant: "outline",
        className: "bg-white border border-success-500 text-success-500",
      },
      {
        accent: "success",
        variant: "text",
        className: "bg-white text-success-500",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "medium",
      accent: "primary",
    },
  }
);

export function Button({
  children,
  className,
  variant,
  size,
  accent,
  icon: Icon,
  iconPosition = "left",
  ...props
}: ButtonProps) {
  const shadeClass =
    buttonVariants({ variant, size, className }) +
    " " +
    (accent ? buttonVariants({ accent, variant }) : "");

  return (
    <button className={cn(shadeClass)} {...props} disabled={props.disabled}>
      {Icon && iconPosition === "left" && <Icon className="mr-2" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="ml-2" />}
    </button>
  );
}
