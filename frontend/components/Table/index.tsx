import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Table: React.FC<Props> = ({ children }) => {
  return (
    <table className='w-full table-auto text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400'>
      {children}
    </table>
  );
};
