'use client';

import React from 'react';
import { useLoading } from 'context/LoadingContext';
import { LoadingSpinner } from './LoadingSpinner/LoadingSpinner';

const Loader: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <LoadingSpinner />
    </div>
  );
};

export default Loader;
