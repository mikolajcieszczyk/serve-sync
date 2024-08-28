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
import { signIn } from "next-auth/react";
import { CredentialsFormsWrapper } from "../CredentialsForms/Wrapper";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Wywołanie funkcji signIn z providerem 'credentials'
    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard", // URL do przekierowania po pomyślnym logowaniu
    });

    if (result?.error) {
      // Obsługa błędu logowania, np. wyświetlenie komunikatu
      alert("Logowanie nie powiodło się. Sprawdź swoje dane.");
    }
  };

  return (
    <CredentialsFormsWrapper description={loginDescription}>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 w-full p-2 rounded text-white"
          >
            Login
          </button>
        </form>
      </div>
    </CredentialsFormsWrapper>
  );
}
