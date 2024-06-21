import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const TableHeader: React.FC<Props> = ({ children }) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      {children}
    </thead>
  );
};
