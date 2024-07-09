"use client";

import { Button } from "@/Button";
import { TextField } from "@/TextField/TextField";
import { Typography } from "@/Typography";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginOrRegisterUser } from "utils/api";
import { setToken } from "utils/token";
import * as Yup from "yup";
import { CredentialsFormsWrapper } from "../Wrapper";

const loginDescription = {
  header: "Welcome to ServeSync!",
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

const formFields = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
];

const loginUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

//TODO asasasasas

export function LoginForm() {
  const router = useRouter();
  const [apiError, setApiError] = useState<string>("");

  const handleLogin = async (email: string, password: string) => {
    setApiError("");
    try {
      const response = await loginOrRegisterUser(loginUrl, email, password);

      console.log(
        `🙈 --> file: LoginForm.tsx:68 --> handleLogin --> response:`,
        response
      );

      setToken(response);
      router.push("/dashboard");
    } catch (error) {
      const apiError = error as ApiError;

      setApiError(apiError.info?.message || "Login failed");
    }
  };

  return (
    <CredentialsFormsWrapper description={loginDescription}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }: FormikHelpers<any>) => {
          handleLogin(values.email, values.password);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, touched, errors }) => {
          return (
            <Form className="w-full sm:w-2/3 md:w-full">
              {formFields.map((field) => (
                <div className="mb-4" key={field.name}>
                  <Field
                    name={field.name}
                    type={field.type}
                    as={TextField}
                    label={field.label}
                    placeholder={field.placeholder}
                    helpText={
                      <ErrorMessage name={field.name} component="div" />
                    }
                    state={
                      touched[field.name] && errors[field.name]
                        ? "error"
                        : "default"
                    }
                  />
                </div>
              ))}

              {apiError && (
                <div className="mb-4 text-red-500">
                  <Typography color="error">{apiError}</Typography>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-800"
              >
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </CredentialsFormsWrapper>
  );
}
