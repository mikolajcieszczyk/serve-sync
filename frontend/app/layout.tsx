import { AppWrapper } from '@components/molecules/AppWrapper/AppWrapper';
import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';

const publicSans = Public_Sans({
  variable: '--main-font',
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ServeSync - Tennis Courts Management Application',
  description:
    'Manage tennis court reservations, tournament scheduling, and real-time court status tracking with ServeSync.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-screen w-screen text-base'>
      <body className={publicSans.className} suppressHydrationWarning={true}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
