import { Button } from "@components/components/Button/Button";

export default function Page() {
  return (
    <div className="flex flex-col ml-4">
      <div className="space-x-4 space-y-4">
        <Button size="large">Button</Button>
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

      <div className="space-x-4 space-y-4">
        <Button>Button</Button>
        <Button variant="label">Label</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text</Button>
      </div>

      <div className="space-x-4 space-y-4">
        <Button size="small">Button</Button>
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

      <div className="space-x-4 space-y-4">
        <Button size="small">Button</Button>
        <Button variant="label" size="small">
          Label
        </Button>
        <Button variant="outline" size="small">
          Outline
        </Button>
        <Button variant="text" size="small" shade="success">
          Text
        </Button>
      </div>
    </div>
  );
}
