'use client';

import { SessionProvider } from 'next-auth/react';
import { NextUiProvider } from 'providers/nextui-provider';
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
