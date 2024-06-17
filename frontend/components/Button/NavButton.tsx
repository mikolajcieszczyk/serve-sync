import React, { ReactNode } from "react";
import { Button } from "./Button";
import Link from "next/link";

interface NavButtonProps {
  icon: ReactNode;
  title: string;
  href: string;
}

export function NavButton({ icon, title, href }: NavButtonProps) {
  return (
    <Link href={href} className="w-full">
      <Button
        variant="text"
        className="w-full justify-start gap-2 shadow-none text-black"
      >
        <div style={{ color: "black" }}>{icon}</div>
        {title}
      </Button>
    </Link>
  );
}
