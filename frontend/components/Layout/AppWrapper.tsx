"use client";

import Loading from "#app/loading.tsx";
import { useCheckToken } from "#hooks/useCheckToken.ts";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import DashboardLayout from "./DashboardLayout";

export const AppWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const loading = useCheckToken();
  const pathname = usePathname();

  if (loading) {
    return <Loading />;
  }

  if (pathname.startsWith("/dashboard")) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return <main>{children}</main>;
};
