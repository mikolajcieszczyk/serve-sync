'use client';
import { Button } from '@/Button';
import { signIn } from 'next-auth/react';

export function LoginButton() {
  return (
    <Button onClick={() => signIn()} className='w-full bg-gray-800'>
      Login
    </Button>
  );
}
