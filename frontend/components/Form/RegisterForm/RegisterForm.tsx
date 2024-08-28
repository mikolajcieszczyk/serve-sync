'use client';

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';

import { Button } from '@/components/Button';
import { TextField } from '@/components/TextField/TextField';
import { Typography } from '@/components/Typography';
import { loginOrRegisterUser } from 'utils/api';
import { CredentialsFormsWrapper } from '../FormWrapper/FormWrapper';

const loginDescription = {
  header: 'Adventure starts here! 🚀',
  description: 'Make your tennis courts management easy and fun!',
  footerDescription: (
    <Typography className='text-text-secondary'>
      Already have an account?{' '}
      <Link href='/' className='text-primary-500'>
        Sign in instead
      </Link>
    </Typography>
  ),
};

interface ApiError extends Error {
  info?: {
    message?: string;
  };
  status?: number;
}

const formFields = [
  {
    name: 'email',
    type: 'email',
    label: 'E-mail',
    placeholder: 'E-mail',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Password',
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    placeholder: 'Confirm password',
  },
];

const loginUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;

export function RegisterForm() {
  const [apiError, setApiError] = useState<string>('');
  const [apiSuccess, setApiSuccess] = useState<string>('');

  const handleRegister = async (
    email: string,
    password: string,
    resetForm: () => void
  ) => {
    setApiError('');
    try {
      const response = await loginOrRegisterUser(loginUrl, email, password);

      console.log(
        `🙈 --> file: RegisterForm.tsx:67 --> handleRegister --> response:`,
        response
      );

      setApiSuccess('User registered successfully!');
      resetForm();
    } catch (error) {
      const apiError = error as ApiError;

      setApiError(apiError.info?.message || 'Login failed');
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <CredentialsFormsWrapper description={loginDescription}>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(
          values,
          { setSubmitting, resetForm }: FormikHelpers<any>
        ) => {
          handleRegister(values.email, values.password, resetForm);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, touched, errors }) => {
          return (
            <Form className='w-full'>
              {formFields.map((field) => (
                <div key={field.name}>
                  <Field
                    name={field.name}
                    type={field.type}
                    as={TextField}
                    placeholder={field.placeholder}
                    helpText={
                      <ErrorMessage name={field.name} component='div' />
                    }
                    state={
                      touched[field.name] && errors[field.name]
                        ? 'error'
                        : 'default'
                    }
                    className='mb-4 w-full rounded border p-2'
                  />
                </div>
              ))}
              {apiError && (
                <Typography className='mb-4' color='error'>
                  {apiError}
                </Typography>
              )}

              {apiSuccess && (
                <Typography className='mb-4' color='success'>
                  {apiSuccess}
                </Typography>
              )}

              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gray-800'
              >
                Sign Up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </CredentialsFormsWrapper>
  );
}
