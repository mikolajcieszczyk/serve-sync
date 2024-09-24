'use client';
import { Button } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();

  if (!session || session.role !== 'client') {
    return <p>access denied</p>;
  }

  return (
    <div className='flex w-1/4 flex-col'>
      <span>/dashboard </span>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
