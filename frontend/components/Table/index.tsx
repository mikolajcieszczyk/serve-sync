import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Table: React.FC<Props> = ({ children }) => {
  return (
    <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      {children}
    </table>
  );
};
