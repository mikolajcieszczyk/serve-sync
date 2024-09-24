import { authOptions } from 'app/lib/authOptions';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const session = await getServerSession(authOptions as any);

  if (!session || session.role !== 'admin') {
    return (
      <div className='flex flex-col'>
        <p>/protected access denied</p>
      </div>
    );
  }

  return <div className='mt-auto'>/protected</div>;
}
