'use client';

import { SessionProvider } from 'next-auth/react';
import { CustomCheckSessionWrapper } from 'providers/CustomCheckSessionWrapper';
import { NextUiProvider } from 'providers/nextui-provider';
import { ReactNode } from 'react';

export const AppWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <SessionProvider>
      <CustomCheckSessionWrapper>
        <NextUiProvider>
          <div>{children}</div>
        </NextUiProvider>
      </CustomCheckSessionWrapper>
    </SessionProvider>
  );
};
