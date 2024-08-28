import { ReactNode } from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { PiGithubLogoFill } from 'react-icons/pi';
import { FaGoogle } from 'react-icons/fa6';
import Image from 'next/image';
import Logo from 'public/img/serve_sync_logo.png';
import { Box } from '@/Box';
import { Typography } from '@/Typography';
import { Divider } from '@/Divider';

interface DescriptionProps {
  header: string;
  description: string;
  footerDescription: ReactNode;
}

interface FormWrapperProps {
  children: ReactNode;
  description: DescriptionProps;
}

export function CredentialsFormsWrapper({
  children,
  description,
}: FormWrapperProps) {
  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center'>
      <Box className='relative flex w-full items-center gap-4 p-12 md:w-1/2 lg:w-1/2 xl:w-1/3'>
        <div
          className='absolute -left-8 -top-8 hidden size-48 rounded-md bg-blue-100 md:block'
          style={{ zIndex: -1 }}
        ></div>
        <div
          className='absolute -bottom-8 -right-8 hidden size-48 rounded-md border-2 border-dashed border-primary-opacity-light p-4 md:block'
          style={{ zIndex: -1 }}
        >
          <div className='h-40 rounded-md bg-blue-100'></div>
        </div>

        <div className='flex flex-col md:self-start'>
          <div className='grid items-center md:grid-cols-2'>
            <div className='flex flex-col gap-2'>
              <Typography variant='h2' className='mb-4'>
                ServeSync{' '}
              </Typography>
              <Typography variant='h4'>{description.header} </Typography>
              <Typography variant='p' className='text-text-secondary'>
                {description.description}
              </Typography>
            </div>

            <div className='mx-auto'>
              <Image width={200} src={Logo} alt='serve sync logo' />
            </div>
          </div>
        </div>
        {children}
        <div className='pt-2'>
          {description.footerDescription}
          <Divider title='or' />
          <div className='flex items-center justify-center gap-4'>
            <FaFacebookF className='text-facebook' />
            <FaTwitter className='text-twitter' />
            <PiGithubLogoFill className='text-text-primary' />
            <FaGoogle className='text-error-500' />
          </div>
        </div>
      </Box>
    </div>
  );
}
