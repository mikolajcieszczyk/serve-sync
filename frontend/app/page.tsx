import { Button } from "@components/components/Button/Button";
import { BiCheckShield } from "react-icons/bi";

export default function Page() {
  const variants = ["default", "label", "outline", "text"];
  const sizes = ["large", "medium", "small"];
  const shades = [
    "primary",
    "secondary",
    "error",
    "warning",
    "info",
    "success",
  ];
  const states = ["default", "hover", "active", "focus", "disabled"];
  return (
    <div className="mt-4 ml-4 space-y-8">
      <h1 className="text-xl font-bold">Variants</h1>
      <div className="flex gap-4 w-1/12">
        <Button variant="default">Default</Button>
        <Button variant="label">Label</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text</Button>
      </div>

      <h1 className="text-xl font-bold">Sizes</h1>
      <div className="flex gap-4 w-1/12">
        Large:
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
      <div className="flex gap-4 w-1/12">
        Medium:
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
      <div className="flex gap-4 w-1/12">
        Small:
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

      <h1 className="text-xl font-bold">Accents</h1>
      <div className="flex gap-4 w-1/12">
        Primary:
        <Button variant="default">Default</Button>
        <Button variant="label">Label</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text</Button>
      </div>
      <div className="flex gap-4 w-1/12">
        Secondary:
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

      <div className="flex gap-4 w-1/12">
        Error:
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

      <div className="flex gap-4 w-1/12">
        Warning:
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

      <div className="flex gap-4 w-1/12">
        Info:
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

      <div className="flex gap-4 w-1/12">
        Success:
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

      <h1 className="text-xl font-bold">Icons TODO</h1>
      <div className="flex gap-4 w-1/12">
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
      <div className="flex gap-4 w-1/12">
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
      <hr />
    </div>
  );
}
