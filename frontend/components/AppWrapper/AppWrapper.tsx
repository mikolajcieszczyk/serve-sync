'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export const AppWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <SessionProvider>
      <div>{children}</div>
    </SessionProvider>
  );
};
