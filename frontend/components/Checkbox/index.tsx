import { InputHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "utils/cn";

const checkboxStyles = cva(
  "shadow-md rounded-md form-checkbox h-5 w-5 text-blue-600",
  {
    variants: {
      checkboxSize: {
        small: "h-4 w-4",
        medium: "h-5 w-5",
        large: "h-6 w-6",
      },
      state: {
        default: "text-blue-600",
        error: "text-red-600",
        success: "text-green-600",
      },
    },
    defaultVariants: {
      checkboxSize: "medium",
      state: "default",
    },
  }
);

export interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxStyles> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, checkboxSize, state, className, ...props }, ref) => {
    return (
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          ref={ref}
          className={cn(checkboxStyles({ checkboxSize, state }), className)}
          {...props}
        />
        {label && <span>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
