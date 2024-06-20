import React, { ReactNode } from "react";
import { Button } from "./Button";
import Link from "next/link";

interface NavButtonProps {
  icon: ReactNode;
  title: string;
  href: string;
  isActive?: boolean;
  showNav: boolean;
}

export function NavButton({
  icon,
  title,
  href,
  isActive,
  showNav,
}: NavButtonProps) {
  return (
    <Link
      href={href}
      className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive && `bg-gray-700`}`}
    >
      {icon}
      {showNav && <span className="ms-3">{title}</span>}
    </Link>
  );
}
