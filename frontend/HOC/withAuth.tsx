'use client';
import Loading from 'app/loading';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { ComponentType, useEffect } from 'react';

const withAuth = <TProps extends object>(
  WrappedComponent: ComponentType<TProps>
) => {
  const WithAuthComponent: React.FC<TProps> = (props) => {
    const router = useRouter();
    const { status } = useSession(); // Pobieramy sesję użytkownika

    useEffect(() => {
      if (status === 'unauthenticated') {
        router.push('/');
      }
    }, [status, router]);

    if (status === 'loading') {
      return <Loading />;
    }

    if (status === 'unauthenticated') {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
