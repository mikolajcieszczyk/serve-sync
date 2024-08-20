"use client";
import { Button } from "@/Button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtonClient() {
  const session = useSession();

  return session?.data?.user ? (
    <Button
      onClick={async () => {
        await signOut();
        await signIn();
      }}
    >
      {session.data?.user?.email} : Sign Out
    </Button>
  ) : (
    <Button
      onClick={async () => {
        await signIn();
      }}
    >
      Sign In
    </Button>
  );
}
