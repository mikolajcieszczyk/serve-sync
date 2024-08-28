import { LoginForm } from "@/Form/LoginForm/LoginForm";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "./lib/authOptions";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions as any);

  console.log(`🙈 --> file: page.tsx:10 --> Page --> session:`, session);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="mt-auto">
      <LoginForm />
    </div>
  );
}
