'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import * as Yup from 'yup';
import { AuthForm } from './AuthForm';
import { FormikHelpers } from 'formik';

type LoginFormValues = {
  email: string;
  password: string;
};

export function LoginForm() {
  const [apiError, setApiError] = useState<string>('');

  const validationSchema = Yup.object<LoginFormValues>({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const initialValues: LoginFormValues = { email: '', password: '' };

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
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
    <AuthForm<LoginFormValues>
      formType='login'
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
      submitButtonText='Sign in'
      apiError={apiError}
    />
  );
}
