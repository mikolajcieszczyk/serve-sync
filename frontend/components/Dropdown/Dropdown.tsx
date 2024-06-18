import React, { ReactNode, useEffect, useRef, useState } from "react";

interface DropdownProps {
  dropdownComponent: ReactNode;
  options?: {
    title: string;
    url?: string;
    onClick?: () => void;
  }[];
}

const Dropdown = ({ dropdownComponent, options }: DropdownProps) => {
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
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={toggleDropdown}>{dropdownComponent}</div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options?.map((option) => {
              return (
                <a
                  key={option.title}
                  href={option.url ?? undefined}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  role="menuitem"
                  onClick={() => handleOptionClick(option.onClick)}
                >
                  {option.title}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
