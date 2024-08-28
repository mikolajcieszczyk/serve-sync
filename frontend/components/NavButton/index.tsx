import Link from 'next/link';
import { ReactNode } from 'react';

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
      className={`group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${isActive && `bg-gray-700`}`}
    >
      {icon}
      {showNav && <span className='ms-3'>{title}</span>}
    </Link>
  );
}
