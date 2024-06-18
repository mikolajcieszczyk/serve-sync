import { Box } from "#components/Box/Box.tsx";
import { NavButton } from "#components/Button/NavButton";
import { Typography } from "#components/Typography/Typography.tsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "public/img/serve_sync_logo.png";
import { GiTennisCourt } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";

const navButtons = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/dashboard",
  },
  // {
  //   title: "Schedule",
  //   icon: <AiOutlineSchedule />,
  //   href: "/dashboard/schedule",
  // },
  // {
  //   title: "Courts",
  //   icon: <GiTennisCourt />,
  //   href: "/dashboard/courts",
  // },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <Box className="w-64 p-4 flex flex-col bg-white items-start">
      <aside className="w-full">
        <div className="flex items-center">
          <Image
            src={Logo}
            width={40}
            height={40}
            alt="serve sync logo"
            placeholder="blur"
          />
          <Typography variant="h3">ServeSync</Typography>
        </div>
        <nav className="flex flex-col gap-1.5 mt-2">
          {navButtons.map((button) => {
            return (
              <NavButton
                key={button.title}
                title={button.title}
                icon={button.icon}
                href={button.href}
                //todo FIX FOR NESTED ROUTES
                isActive={pathname.includes(button.href)}
              />
            );
          })}
        </nav>
      </aside>
    </Box>
  );
}
