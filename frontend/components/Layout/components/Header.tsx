import { Box } from "#components/Box/Box.tsx";
import Dropdown from "#components/Dropdown/Dropdown.tsx";
import { TextField } from "#components/TextField/TextField.tsx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";

interface HeaderProps {
  handleLogout: () => void;
}

export function Header({ handleLogout }: HeaderProps) {
  const dropdownOptions = [
    {
      title: "My profile",
      url: "/dashboard/my-profile",
    },
    {
      title: "Log out",
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
            <RxAvatar size={32} className="text-primary-500 cursor-pointer" />
          }
          options={dropdownOptions}
        />
      </Box>
    </header>
  );
}
