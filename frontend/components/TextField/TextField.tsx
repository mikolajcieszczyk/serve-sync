import cn from "@components/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef } from "react";

const textFieldStyles = cva("border rounded-md p-2 w-full", {
  variants: {
    state: {
      default: "border-gray-300",
      hover: "hover:border-gray-00",
      focus: "focus:border-blue-500 focus:outline-none",
      error: "border-red-500",
      success: "border-green-500",
      disabled: "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textFieldStyles> {
  label?: string;
  error?: string;
  helpText?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, state, className, helpText, disabled, ...props }, ref) => {
    return (
      <>
        {label && (
          <label
            className={cn("block mb-1", {
              "text-red-500": state === "error",
              "text-green-500": state === "success",
              "text-gray-700":
                state !== "error" && state !== "success" && !disabled,
              "text-gray-400": disabled,
            })}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(textFieldStyles({ state }), className)}
          disabled={disabled}
          {...props}
        />
        {helpText && (
          <p
            className={cn("text-sm mt-1", {
              "text-red-500": state === "error",
              "text-green-500": state === "success",
              "text-gray-500":
                state !== "error" && state !== "success" && !disabled,
              "text-gray-400": disabled,
            })}
          >
            {helpText}
          </p>
        )}
      </>
    );
  }
);

TextField.displayName = "TextField";
