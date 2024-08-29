'use client';

import { SessionProvider, signOut, useSession } from 'next-auth/react';
import { NextUiProvider } from 'providers/nextui-provider';
import { ReactNode, useEffect } from 'react';

export const CustomCheckSessionWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const { data: session } = useSession();

  console.log(session);

  useEffect(() => {
    if (session?.error === 'RefreshTokenExpired') {
      signOut();
    }
  }, [session]);
  return (
    <SessionProvider>
      <NextUiProvider>
        <div>{children}</div>
      </NextUiProvider>
    </SessionProvider>
  );
};
