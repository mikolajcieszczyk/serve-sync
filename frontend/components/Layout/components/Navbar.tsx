import { NavButton } from "#components/Button/NavButton";
import { Typography } from "#components/Typography/Typography.tsx";
import { usePathname } from "next/navigation";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { GiTennisCourt } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";

const navButtons = [
  {
    title: "Dashboard",
    icon: (
      <MdDashboard
        size={24}
        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-label="Dashboard Icon"
      />
    ),
    href: "/dashboard",
  },
  {
    title: "Schedule",
    icon: (
      <AiOutlineSchedule
        size={24}
        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-label="Schedule Icon"
      />
    ),
    href: "/dashboard/schedule",
  },
  {
    title: "Courts",
    icon: (
      <GiTennisCourt
        size={24}
        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-label="Courts Icon"
      />
    ),
    href: "/dashboard/courts",
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
          aria-label="Toggle Navigation"
        />
      </div>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 ${showNav ? `w-64` : `w-18`} h-screen p-4 overflow-y-auto transition-transform  bg-gray-800`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div
          className={`flex items-center  ${showNav ? `flex-row justify-between` : `flex-col items-center`}`}
        >
          <Typography
            variant="h3"
            className={`text-white normal-case ${showNav ? `inline` : `hidden`}`}
          >
            ServeSync
          </Typography>

          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 items-center dark:hover:bg-gray-600 dark:hover:text-white hidden lg:inline-flex"
            onClick={() => setShowNav(!showNav)}
            aria-label={showNav ? "Collapse Navigation" : "Expand Navigation"}
          >
            {showNav ? <FaArrowLeftLong /> : <FaArrowRight />}
          </button>
        </div>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
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
