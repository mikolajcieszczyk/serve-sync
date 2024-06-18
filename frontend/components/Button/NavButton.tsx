import React, { ReactNode } from "react";
import { Button } from "./Button";
import Link from "next/link";

interface NavButtonProps {
  icon: ReactNode;
  title: string;
  href: string;
  isActive?: boolean;
}

export function NavButton({ icon, title, href, isActive }: NavButtonProps) {
  return (
    <Link href={href} className="w-full">
      <Button
        variant="text"
        className={`w-full justify-start gap-2 text-primary hover:bg-secondary-100 hover:text-primary focus:ring-0 shadow-none focus:bg-secondary-100 active:bg-secondary-200 ${isActive && `text-white bg-primary-500 hover:bg-primary-400 focus:bg-primary-400 active:bg-primary-500 `}`}
      >
        <div style={{ color: `${isActive ? `white` : `black`}` }}>{icon}</div>
        {title}
      </Button>
    </Link>
  );
}
