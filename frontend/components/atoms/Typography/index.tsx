// components/Typography.tsx
import { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@components/utils/cn";

export const typographyStyles = cva("font-sans text-text-primary", {
  variants: {
    variant: {
      h1: "text-4xl font-bold font-main-font leading-10",
      h2: "text-3xl font-bold font-main-font",
      h3: "text-2xl font-bold font-main-font",
      h4: "text-xl font-bold font-main-font",
      h5: "text-lg font-bold font-main-font",
      p: "text-base",
      span: "text-sm",
      small: "text-xs",
    },
    color: {
      primary: "text-text-primary",
      secondary: "text-blue-500",
      error: "text-red-500",
      warning: "text-warning-500",
      info: "text-info-500",
      success: "text-green-500",
    },
  },
  defaultVariants: {
    variant: "p",
    color: "primary",
  },
});

export interface TypographyProps extends VariantProps<typeof typographyStyles> {
  className?: string;
  children: ReactNode;
}

export const Typography = ({
  variant = "p",
  color,
  className,
  children,
}: TypographyProps) => {
  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component className={cn(typographyStyles({ variant, color }), className)}>
      {children}
    </Component>
  );
};
