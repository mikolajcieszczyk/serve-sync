"use client";

import { useLoading } from "#context/LoadingContext.tsx";
import React from "react";
import { LoadingSpinner } from "./LoadingSpinner";

const Loader: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <LoadingSpinner />
    </div>
  );
};

export default Loader;
