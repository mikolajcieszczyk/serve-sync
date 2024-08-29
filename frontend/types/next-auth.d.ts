import 'next-auth';

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    error?: string;
    accessTokenExpiresAt?: number;
    refreshTokenExpiresAt?: number;
  }
}
