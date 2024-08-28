"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  // Pobieramy sesję użytkownika, aby sprawdzić, czy jest zalogowany
  const { data: session } = useSession();

  console.log(`🙈 --> file: page.tsx:10 --> Page --> session:`, session);

  return (
    <div className="p-2">
      {session ? (
        <div>
          <p>Welcome, {session.user?.email}</p>
          <button
            className="bg-blue-500 p-2 rounded text-white"
            onClick={() => signOut()}
          >
            Sign out
          </button>
          {/* Możesz dodać tu przycisk wylogowania lub inne elementy */}
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          {/* Przycisk lub formularz logowania */}
          <button
            className="bg-blue-500 p-2 rounded text-white"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
}
