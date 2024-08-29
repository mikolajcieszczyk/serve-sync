import { NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const response = await fetch(
      `${process.env.LOCAL_API_URL_INTERNAL}/auth/refresh-token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken: token.refreshToken }),
      }
    );

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      accessTokenExpiresAt: refreshedTokens.accessTokenExpiresAt,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Refresh token error', error);
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.LOCAL_API_URL_INTERNAL}/auth/login`,
          {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          }
        );

        const user = await res.json();

        if (res.ok && user) {
          return {
            ...user,
            accessTokenExpiresAt: user.accessTokenExpiresAt,
            refreshTokenExpiresAt: user.refreshTokenExpiresAt,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpiresAt = user.accessTokenExpiresAt;
        token.refreshTokenExpiresAt = user.refreshTokenExpiresAt;
        return token;
      }

      if (Date.now() > (token.refreshTokenExpiresAt as number)) {
        return { ...token, error: 'RefreshTokenExpired' };
      }

      if (Date.now() < (token.accessTokenExpiresAt as number)) {
        return token;
      }

      return await refreshAccessToken(token);
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.error === 'RefreshTokenExpired') {
        session.error = 'Your session has expired. Please log in again.';
      }

      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.error = token.error;
      session.accessTokenExpiresAt = token.accessTokenExpiresAt as number;
      session.refreshTokenExpiresAt = token.refreshTokenExpiresAt as number;
      return session;
    },
  },
  pages: {
    signIn: '/',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // Maximum session duration (7 days)
  },
  jwt: {
    maxAge: 7 * 24 * 60 * 60, // Maximum JWT token lifetime (7 days)
  },
};
