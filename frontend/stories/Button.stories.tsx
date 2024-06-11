import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button/Button";
import { BiCheckShield } from "react-icons/bi";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<ButtonProps>;

const buttonVariants: Array<ButtonProps["variant"]> = [
  "default",
  "label",
  "outline",
  "text",
];
const buttonSizes: Array<ButtonProps["size"]> = ["large", "medium", "small"];
const buttonAccents: Array<ButtonProps["accent"]> = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
];

const generateButtons = (
  size?: ButtonProps["size"],
  accent?: ButtonProps["accent"],
  icon?: ButtonProps["icon"],
  iconPosition?: ButtonProps["iconPosition"]
) => {
  return buttonVariants.map((variant) => (
    <Button
      key={`${variant}-${size}-${accent}-${iconPosition}`}
      variant={variant}
      size={size}
      accent={accent}
      icon={icon}
      iconPosition={iconPosition}
    >
      {variant && variant.charAt(0).toUpperCase() + variant.slice(1)}
    </Button>
  ));
};

export const Sizes: Story = {
  render: () => (
    <div className="mt-4 ml-4 space-y-8">
      {buttonSizes.map((size) => (
        <div key={size}>
          <h1 className="text-xl font-bold">
            {size && size.charAt(0).toUpperCase() + size.slice(1)}
          </h1>
          <div className="flex gap-4">{generateButtons(size)}</div>
        </div>
      ))}
    </div>
  ),
};

export const Accents: Story = {
  render: () => (
    <div className="mt-4 ml-4 space-y-8">
      {buttonAccents.map((accent) => (
        <div key={accent}>
          <h1 className="text-xl font-bold">
            {accent && accent.charAt(0).toUpperCase() + accent.slice(1)}
          </h1>
          <div className="flex gap-4">
            {generateButtons(
              undefined,
              accent === "primary" ? undefined : accent
            )}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Icon: Story = {
  render: () => (
    <div className="mt-4 ml-4 space-y-8">
      {["left", "right"].map((position) => (
        <div key={position}>
          <h1 className="text-xl font-bold">
            Icon {position.charAt(0).toUpperCase() + position.slice(1)}
          </h1>
          <div className="flex gap-4">
            {generateButtons(
              undefined,
              undefined,
              BiCheckShield,
              position as ButtonProps["iconPosition"]
            )}
          </div>
        </div>
      ))}
    </div>
  ),
};
