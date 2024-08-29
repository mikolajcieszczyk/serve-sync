'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';

export function LoginForm() {
  const [apiError, setApiError] = useState<string>('');

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = async (
    values: { email: string; password: string },
    // eslint-disable-next-line no-unused-vars
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setApiError('');

    const result = await signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: '/dashboard',
    });

    if (result?.error) {
      setApiError('Login failed. Please check your details.');
    }

    setSubmitting(false);
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-2 bg-gray-100'>
      <div className='w-full max-w-md rounded bg-white p-6 shadow-md'>
        <h2 className='mb-4 text-2xl font-bold'>Sign in</h2>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='mb-4'>
                <Field
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='w-full rounded border p-2'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-red-500'
                />
              </div>

              <div className='mb-4'>
                <Field
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='w-full rounded border p-2'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500'
                />
              </div>

              <button
                type='submit'
                className='w-full rounded bg-blue-500 p-2 text-white'
                disabled={isSubmitting}
              >
                Sign in
              </button>
            </Form>
          )}
        </Formik>

        {apiError && <div className='mt-4 text-red-500'>{apiError}</div>}
      </div>

      <Link href='/register'>
        <h2 className='font-bold text-blue-500 underline'>Sign up here</h2>
      </Link>
    </div>
  );
}
