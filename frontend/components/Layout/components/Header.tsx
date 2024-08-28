import { Box } from '@/Box';
import Dropdown from '@/Dropdown';
import { TextField } from '@/TextField/TextField';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoSettingsOutline } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';
import { TbReportMoney } from 'react-icons/tb';

interface HeaderProps {
  handleLogout: () => void;
}

export function Header({ handleLogout }: HeaderProps) {
  const dropdownOptions = [
    {
      title: 'My profile',
      icon: <RxAvatar size={24} className='cursor-pointer text-gray-800' />,
      url: '#',
    },
    {
      title: 'Settings',
      icon: (
        <IoSettingsOutline size={24} className='cursor-pointer text-gray-800' />
      ),
      url: '#',
    },
    {
      horizontalLine: true,
    },
    {
      title: 'Billing Plan',
      icon: (
        <TbReportMoney size={24} className='cursor-pointer text-gray-800' />
      ),
      url: '#',
    },
  ];

  return (
    <header className='p-4'>
      <Box className='flex flex-row content-center items-center justify-between gap-4'>
        <div className='flex w-full items-center gap-4'>
          <FaMagnifyingGlass />
          <TextField placeholder='Search' className='border-0' />
        </div>

        <Dropdown
          dropdownComponent={
            <RxAvatar size={32} className='cursor-pointer text-gray-800' />
          }
          options={dropdownOptions}
          handleLogout={handleLogout}
        />
      </Box>
    </header>
  );
}
