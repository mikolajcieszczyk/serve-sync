import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";
import { BiCheckShield } from "react-icons/bi";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Sizes: Story = {
  render: (props) => {
    return (
      <div className="mt-4 ml-4 space-y-8">
        <h1 className="text-xl font-bold">Large</h1>
        <div className="flex gap-4">
          <Button variant="default" size="large">
            Default
          </Button>
          <Button variant="label" size="large">
            Label
          </Button>
          <Button variant="outline" size="large">
            Outline
          </Button>
          <Button variant="text" size="large">
            Text
          </Button>
        </div>

        <h1 className="text-xl font-bold">Medium</h1>
        <div className="flex gap-4">
          <Button variant="default" size="medium">
            Default
          </Button>
          <Button variant="label" size="medium">
            Label
          </Button>
          <Button variant="outline" size="medium">
            Outline
          </Button>
          <Button variant="text" size="medium">
            Text
          </Button>
        </div>

        <h1 className="text-xl font-bold">Small</h1>
        <div className="flex gap-4">
          <Button variant="default" size="small">
            Default
          </Button>
          <Button variant="label" size="small">
            Label
          </Button>
          <Button variant="outline" size="small">
            Outline
          </Button>
          <Button variant="text" size="small">
            Text
          </Button>
        </div>
      </div>
    );
  },
};

export const Accents: Story = {
  render: (props) => {
    return (
      <div className="mt-4 ml-4 space-y-8">
        <h1 className="text-xl font-bold">Primary</h1>
        <div className="flex gap-4">
          <Button variant="default">Default</Button>
          <Button variant="label">Label</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text</Button>
        </div>

        <h1 className="text-xl font-bold">Secondary</h1>
        <div className="flex gap-4">
          <Button variant="default" accent="secondary">
            Default
          </Button>
          <Button variant="label" accent="secondary">
            Label
          </Button>
          <Button variant="outline" accent="secondary">
            Outline
          </Button>
          <Button variant="text" accent="secondary">
            Text
          </Button>
        </div>

        <h1 className="text-xl font-bold">Error</h1>
        <div className="flex gap-4">
          <Button variant="default" accent="error">
            Default
          </Button>
          <Button variant="label" accent="error">
            Label
          </Button>
          <Button variant="outline" accent="error">
            Outline
          </Button>
          <Button variant="text" accent="error">
            Text
          </Button>
        </div>

        <h1 className="text-xl font-bold">Warning</h1>
        <div className="flex gap-4">
          <Button variant="default" accent="warning">
            Default
          </Button>
          <Button variant="label" accent="warning">
            Label
          </Button>
          <Button variant="outline" accent="warning">
            Outline
          </Button>
          <Button variant="text" accent="warning">
            Text
          </Button>
        </div>

        <h1 className="text-xl font-bold">Info</h1>
        <div className="flex gap-4">
          <Button variant="default" accent="info">
            Default
          </Button>
          <Button variant="label" accent="info">
            Label
          </Button>
          <Button variant="outline" accent="info">
            Outline
          </Button>
          <Button variant="text" accent="info">
            Text
          </Button>
        </div>

        <h1 className="text-xl font-bold">Success</h1>
        <div className="flex gap-4">
          <Button variant="default" accent="success">
            Default
          </Button>
          <Button variant="label" accent="success">
            Label
          </Button>
          <Button variant="outline" accent="success">
            Outline
          </Button>
          <Button variant="text" accent="success">
            Text
          </Button>
        </div>
      </div>
    );
  },
};

export const Icon: Story = {
  render: (props) => {
    return (
      <div className="mt-4 ml-4 space-y-8">
        <h1 className="text-xl font-bold">Icon Left</h1>
        <div className="flex gap-4">
          <Button variant="default" icon={BiCheckShield}>
            Default
          </Button>
          <Button variant="label" icon={BiCheckShield}>
            Label
          </Button>
          <Button variant="outline" icon={BiCheckShield}>
            Outline
          </Button>
          <Button variant="text" icon={BiCheckShield}>
            Text
          </Button>
        </div>

        <h1 className="text-xl font-bold">Icon Right</h1>
        <div className="flex gap-4">
          <Button variant="default" icon={BiCheckShield} iconPosition="right">
            Default
          </Button>
          <Button variant="label" icon={BiCheckShield} iconPosition="right">
            Label
          </Button>
          <Button variant="outline" icon={BiCheckShield} iconPosition="right">
            Outline
          </Button>
          <Button variant="text" icon={BiCheckShield} iconPosition="right">
            Text
          </Button>
        </div>
      </div>
    );
  },
};
