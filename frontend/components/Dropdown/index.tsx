import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { BsPersonRaisedHand } from 'react-icons/bs';
import { Button } from '../Button';
import { Typography } from '../Typography';

interface DropdownProps {
  dropdownComponent: ReactNode;
  options?: {
    title?: string;
    icon?: ReactNode;
    url?: string;
    onClick?: () => void;
    horizontalLine?: boolean;
  }[];
  handleLogout: () => void;
}

const Dropdown = ({
  dropdownComponent,
  options,
  handleLogout,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (onClick: (() => void) | undefined) => {
    onClick && onClick();

    setIsOpen(false);
  };

  const handleClickOutside = (event: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <div onClick={toggleDropdown}>{dropdownComponent}</div>
      {isOpen && (
        <div className='absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            <div className='flex gap-2 px-4 py-2'>
              <BsPersonRaisedHand size={48} className='text-gray-800' />
              <div className='flex flex-col gap-2'>
                <Typography className='text-gray-800'>Miki Fiki</Typography>
                <Typography variant='small' className='text-gray-400'>
                  Admin
                </Typography>
              </div>
            </div>
            {options?.map((option) => {
              return option.horizontalLine ? (
                <hr key={Math.random()} className='my-1' />
              ) : (
                <a
                  key={option.title}
                  href={option.url ?? undefined}
                  className='mx-2 flex cursor-pointer items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100'
                  role='menuitem'
                  onClick={() => handleOptionClick(option.onClick)}
                >
                  {option.icon}
                  {option.title}
                </a>
              );
            })}
            <Button onClick={handleLogout} className='mx-auto my-2 w-11/12'>
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;