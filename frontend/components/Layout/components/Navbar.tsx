import { Box } from "#components/Box/Box.tsx";
import { Typography } from "#components/Typography/Typography.tsx";
import Image from "next/image";
import Logo from "public/img/serve_sync_logo.png";
import { MdDashboard } from "react-icons/md";
import { GiTennisCourt } from "react-icons/gi";
import { NavButton } from "#components/Button/NavButton";
const navButtons = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/dashboard",
  },
  {
    title: "Courts",
    icon: <GiTennisCourt />,
    href: "/courts",
  },
];

export function Navbar() {
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
        <nav className="flex flex-col">
          {navButtons.map((button) => {
            return (
              <NavButton
                key={button.title}
                title={button.title}
                icon={button.icon}
                href={button.href}
              />
            );
          })}
        </nav>
      </aside>
    </Box>
  );
}
