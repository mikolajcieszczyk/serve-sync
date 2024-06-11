"use client";

import { Button } from "#components/Button/Button.tsx";
import { TextField } from "#components/TextField/TextField.tsx";
import { Typography } from "#components/Typography/Typography.tsx";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import { FormWrapper } from "./FormWrapper";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetcher("/auth/login", { email, password });
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      localStorage.setItem(
        "accessTokenExpiresAt",
        response.accessTokenExpiresAt.toString()
      );
      localStorage.setItem(
        "refreshTokenExpiresAt",
        response.refreshTokenExpiresAt.toString()
      );
      router.push("/dashboard");
    } catch (err) {
      setError("Login failed");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <FormWrapper description={loginDescription}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting, touched, errors }) => {
          return (
            <Form className="w-full sm:w-2/3 md:w-full" onSubmit={handleLogin}>
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

              <Button type="submit" disabled={isSubmitting} className="w-full">
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </FormWrapper>
  );
}

const fetcher = async (url: string, data?: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: data ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  });
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    (error as any).info = await res.json();
    (error as any).status = res.status;
    throw error;
  }
  return res.json();
};

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
