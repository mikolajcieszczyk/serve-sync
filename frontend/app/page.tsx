import { LoginForm } from '@components/molecules/Auth/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './lib/authOptions';

export default async function Page() {
  const session = await getServerSession(authOptions as any);

  console.log(`🙈 --> file: page.tsx:10 --> Page --> session:`, session);

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className='mt-auto'>
      <LoginForm />
    </div>
  );
}
