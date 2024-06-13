"use client";

import React, { createContext, useContext, useState } from "react";

interface LoadingContextProps {
  isLoading: boolean;
  setLoadingSpinner: (state: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined
);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setLoadingSpinner = (state: boolean) => {
    setIsLoading(state);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoadingSpinner }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextProps => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
