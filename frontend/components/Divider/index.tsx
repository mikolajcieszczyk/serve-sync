import { Typography } from '../Typography';

interface DividerProps {
  title: string;
}

export function Divider({ title }: DividerProps) {
  return (
    <div className='relative flex items-center py-5'>
      <div className='grow border-t border-divider'></div>
      <Typography className='mx-4 shrink'>{title}</Typography>
      <div className='grow border-t border-divider'></div>
    </div>
  );
}
