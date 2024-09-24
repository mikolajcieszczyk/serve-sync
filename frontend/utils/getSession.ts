import { authOptions } from 'app/lib/authOptions';
import { getServerSession } from 'next-auth';

export async function getSession() {
  const session = await getServerSession(authOptions);
  return session;
}
