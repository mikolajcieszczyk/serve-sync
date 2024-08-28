import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes, forwardRef } from 'react';
import cn from 'utils/cn';

const textFieldStyles = cva('w-full rounded-md border p-2', {
  variants: {
    state: {
      default: 'border-gray-300',
      hover: 'hover:border-gray-00',
      focus: 'focus:border-blue-500 focus:outline-none',
      error: 'border-red-500',
      success: 'border-green-500',
      disabled: 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400',
    },
  },
  defaultVariants: {
    state: 'default',
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
            className={cn('mb-1 block', {
              'text-red-500': state === 'error',
              'text-green-500': state === 'success',
              'text-gray-700':
                state !== 'error' && state !== 'success' && !disabled,
              'text-gray-400': disabled,
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
            className={cn('mt-1 text-sm', {
              'text-red-500': state === 'error',
              'text-green-500': state === 'success',
              'text-gray-500':
                state !== 'error' && state !== 'success' && !disabled,
              'text-gray-400': disabled,
            })}
          >
            {helpText}
          </p>
        )}
      </>
    );
  }
);

TextField.displayName = 'TextField';
