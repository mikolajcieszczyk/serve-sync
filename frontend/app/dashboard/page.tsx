'use client';
import { Button } from '@nextui-org/react';
import { signOut } from 'next-auth/react';

export default function Page() {
  return (
    <div className='flex w-1/4 flex-col'>
      <span>/dashboard </span>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
