'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

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
    <div className='flex min-h-screen flex-col items-center justify-center gap-2 bg-gray-100'>
      <div className='w-full max-w-md rounded bg-white p-6 shadow-md'>
        <h2 className='mb-4 text-2xl font-bold'>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='mb-4 w-full rounded border p-2'
            required
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='mb-4 w-full rounded border p-2'
            required
          />
          <button
            type='submit'
            className='w-full rounded bg-blue-500 p-2 text-white'
          >
            Sign in
          </button>
        </form>
        {error && (
          <span className='mb-4' color='error'>
            {error}
          </span>
        )}
      </div>

      <Link href='/register'>
        <h2 className='font-bold text-blue-500 underline'>Sign up here</h2>
      </Link>
    </div>
  );
}
