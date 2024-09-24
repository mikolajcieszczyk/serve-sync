import { LoginForm } from '@components/molecules/Auth/LoginForm';
import { authOptions } from 'app/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSession(authOptions as any);

  if (session) {
    redirect('/dashboard');
  }

  // if (!session || session.role !== 'client') {
  //   return <p>Access Denied. You do not have permission to view this page.</p>;
  // }

  return (
    <div className='mt-auto'>
      <LoginForm />
    </div>
  );
}
