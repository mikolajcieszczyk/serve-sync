import { usePathname } from 'next/navigation';
import { GrSchedule } from 'react-icons/gr';
import { FaBars } from 'react-icons/fa';
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';
import { GiTennisCourt } from 'react-icons/gi';
import { MdDashboard } from 'react-icons/md';
import { FaUsersBetweenLines } from 'react-icons/fa6';
import { Typography } from '@/Typography';
import { NavButton } from '@/NavButton';

const navButtons = [
  {
    title: 'Dashboard',
    icon: (
      <MdDashboard
        size={24}
        className='size-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
        aria-label='Dashboard Icon'
      />
    ),
    href: '/dashboard',
  },
  {
    title: 'Users',
    icon: (
      <FaUsersBetweenLines
        size={24}
        className='size-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
        aria-label='Users Icon'
      />
    ),
    href: '/dashboard/users',
  },
  {
    title: 'Schedule',
    icon: (
      <GrSchedule
        size={24}
        className='size-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
        aria-label='Schedule Icon'
      />
    ),
    href: '/dashboard/schedule',
  },
  {
    title: 'Courts',
    icon: (
      <GiTennisCourt
        size={24}
        className='size-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
        aria-label='Courts Icon'
      />
    ),
    href: '/dashboard/courts',
  },
];

interface NavProps {
  showNav: boolean;
  // eslint-disable-next-line no-unused-vars
  setShowNav: (showNav: boolean) => void;
}

export function Navbar({ showNav, setShowNav }: NavProps) {
  const pathname = usePathname();

  return (
    <>
      <div className={`flex ${showNav ? `w-64` : `w-16`} h-6`}>
        <FaBars
          onClick={() => setShowNav(!showNav)}
          aria-label='Toggle Navigation'
        />
      </div>

      <div
        id='drawer-navigation'
        className={`fixed left-0 top-0 z-40 ${showNav ? `w-64` : `w-18`} h-screen overflow-y-auto bg-gray-800 p-4 transition-transform`}
        role='navigation'
        aria-label='Main Navigation'
      >
        <div
          className={`flex items-center ${showNav ? `flex-row justify-between` : `flex-col items-center`}`}
        >
          <Typography
            variant='h3'
            className={`normal-case text-white ${showNav ? `inline` : `hidden`}`}
          >
            ServeSync
          </Typography>

          <button
            type='button'
            className='hidden items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 lg:inline-flex dark:hover:bg-gray-600 dark:hover:text-white'
            onClick={() => setShowNav(!showNav)}
            aria-label={showNav ? 'Collapse Navigation' : 'Expand Navigation'}
          >
            {showNav ? <FaArrowLeftLong /> : <FaArrowRight />}
          </button>
        </div>
        <div className='overflow-y-auto py-4'>
          <ul className='space-y-2 font-medium'>
            {navButtons.map((button) => {
              return (
                <li
                  key={button.title}
                  className={`${!showNav && `flex flex-col items-center`}`}
                >
                  <NavButton
                    icon={button.icon}
                    title={button.title}
                    href={button.href}
                    isActive={pathname === button.href}
                    showNav={showNav}
                    aria-label={button.title}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
