import { Box } from '@/Box';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { logout } from 'utils/token';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className='flex h-screen bg-body-bg'>
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <div className='flex flex-1 flex-col overflow-hidden'>
        <Header handleLogout={handleLogout} />
        <main className='flex-1 overflow-y-auto px-4 pb-4 shadow-md'>
          <Box className='min-h-full'>{children}</Box>
        </main>
        <Footer />
      </div>
    </div>
  );
}
