import NextAuth from 'next-auth';
import { authOptions } from '../../../lib/authOptions';

export const handler = NextAuth(authOptions as any) as never;

export { handler as GET, handler as POST };
