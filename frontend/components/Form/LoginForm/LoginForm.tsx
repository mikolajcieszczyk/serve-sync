'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { CredentialsFormsWrapper } from '../FormWrapper/FormWrapper';
import { Button } from '@/componentsButton';
import { Typography } from '@/componentsTypography';

const loginDescription = {
  header: 'Welcome to ServeSync!',
  description: 'Please sign-in to your account and start the adventure',
  footerDescription: (
    <Typography className='text-text-secondary'>
      New on our platform?{' '}
      <Link href='/register' className='text-primary-500'>
        Create an account
      </Link>
    </Typography>
  ),
};

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard',
    });

    if (result?.error) {
      setError('Login failed. Please check your details.');
    }
  };

  return (
    <CredentialsFormsWrapper description={loginDescription}>
      <div className='flex items-center'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E-mail'
            className='mb-4 w-full rounded border border-gray-300 p-2'
            required
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='mb-4 w-full rounded border border-gray-300 p-2'
            required
          />
          <Button type='submit' className='w-full bg-gray-800'>
            Login
          </Button>
        </form>

        {error && (
          <Typography className='mb-4' color='error'>
            {error}
          </Typography>
        )}
      </div>
    </CredentialsFormsWrapper>
  );
}
