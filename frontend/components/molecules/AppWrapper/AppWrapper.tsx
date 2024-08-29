'use client';

import { NextUiProvider } from 'app/nextui-provider';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export const AppWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <SessionProvider>
      <NextUiProvider>
        <div>{children}</div>
      </NextUiProvider>
    </SessionProvider>
  );
};
