"use client";

import Loading from "#app/loading.tsx";
import { useCheckToken } from "#hooks/useCheckToken.ts";
import { ReactNode } from "react";

export const AppWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const loading = useCheckToken();

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
};
