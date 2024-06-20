import { Box } from "#components/Box/Box.tsx";
import Dropdown from "#components/Dropdown/Dropdown.tsx";
import { TextField } from "#components/TextField/TextField.tsx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { TbReportMoney } from "react-icons/tb";

interface HeaderProps {
  handleLogout: () => void;
}

export function Header({ handleLogout }: HeaderProps) {
  const dropdownOptions = [
    {
      title: "My profile",
      icon: <RxAvatar size={24} className="text-gray-800 cursor-pointer" />,
      url: "#",
    },
    {
      title: "Settings",
      icon: (
        <IoSettingsOutline size={24} className="text-gray-800 cursor-pointer" />
      ),
      url: "#",
    },
    {
      horizontalLine: true,
    },
    {
      title: "Billing Plan",
      icon: (
        <TbReportMoney size={24} className="text-gray-800 cursor-pointer" />
      ),
      url: "#",
    },
    {
      title: "Log out",
      icon: (
        <RiLogoutBoxLine size={24} className="text-gray-800 cursor-pointer" />
      ),
      onClick: handleLogout,
    },
  ];

  return (
    <header className="p-4">
      <Box className="flex flex-row justify-between items-center content-center gap-4">
        <div className="flex items-center gap-4 w-full">
          <FaMagnifyingGlass />
          <TextField placeholder="Search" className="border-0" />
        </div>

        <Dropdown
          dropdownComponent={
            <RxAvatar size={32} className="text-gray-800 cursor-pointer" />
          }
          options={dropdownOptions}
        />
      </Box>
    </header>
  );
}
