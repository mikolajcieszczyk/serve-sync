'use client';
import { Button } from '@nextui-org/react';
import withAuth from 'HOC/withAuth';
import { signOut } from 'next-auth/react';

async function Page() {
  return (
    <div className='flex w-1/4 flex-col'>
      <span>/dashboard </span>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}

export default withAuth(Page);
