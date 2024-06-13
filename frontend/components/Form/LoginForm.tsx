"use client";

import { Button } from "#components/Button/Button.tsx";
import { TextField } from "#components/TextField/TextField.tsx";
import { Typography } from "#components/Typography/Typography.tsx";
import { checkToken, setToken } from "#utils/token.ts";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { FormWrapper } from "./FormWrapper";
import { loginUser } from "#utils/api.ts";
import { useLoading } from "#Context/LoadingContext.tsx";

const loginDescription = {
  header: "Welcome to ServeSync! 🎾",
  description: "Please sign-in to your account and start the adventure",
  footerDescription: (
    <Typography className="text-text-secondary">
      New on our platform?{" "}
      <Link href="/register" className="text-primary-500">
        Create an account
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

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleLogin = async (email: string, password: string) => {
    setError("");
    try {
      const response = await loginUser(email, password);
      setToken(response);
      router.push("/dashboard");
    } catch (error) {
      const apiError = error as ApiError;

      setError(apiError.info?.message || "Login failed");
    }
  };

  useEffect(() => {
    checkToken(router);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <FormWrapper description={loginDescription}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }: FormikHelpers<any>) => {
          handleLogin(values.email, values.password);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, touched, errors, values }) => {
          const areValuesEmpty = !values.email && !values.password;
          const disableSubmit = areValuesEmpty || isSubmitting;

          return (
            <Form className="w-full sm:w-2/3 md:w-full">
              <div className="mb-4">
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email"
                  placeholder="Enter your email"
                  helpText={<ErrorMessage name="email" component="div" />}
                  state={touched.email && errors.email ? "error" : "default"}
                />
              </div>

              <div className="mb-4">
                <Field
                  name="password"
                  type="password"
                  as={TextField}
                  label="Password"
                  placeholder="Enter your password"
                  helpText={<ErrorMessage name="password" component="div" />}
                  state={
                    touched.password && errors.password ? "error" : "default"
                  }
                />
              </div>

              {error && (
                <div className="mb-4 text-red-500">
                  <Typography color="error">{error}</Typography>
                </div>
              )}

              <Button
                type="submit"
                disabled={!!disableSubmit}
                className="w-full"
              >
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </FormWrapper>
  );
}
