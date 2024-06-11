import { Typography } from "../Typography/Typography";

interface DividerProps {
  title: string;
}

export function Divider({ title }: DividerProps) {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-divider"></div>
      <Typography className="flex-shrink mx-4">{title}</Typography>
      <div className="flex-grow border-t border-divider"></div>
    </div>
  );
}
