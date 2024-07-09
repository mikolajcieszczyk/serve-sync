"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import DashboardLayout from "./DashboardLayout";

export const AppWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return <main>{children}</main>;
};
