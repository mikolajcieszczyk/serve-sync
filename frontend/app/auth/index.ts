import axios from "axios";
import NextAuth, { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "miki" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const { email, password } = credentials;
        let user;
        const response = await fetch("http://sync-api:4000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const tokens = await response.json();

          console.log(
            `🙈 --> file: index.ts:29 --> authorize --> tokens:`,
            tokens.accessToken
          );

          const authMe = await fetch(
            `${process.env.LOCAL_API_URL_INTERNAL}/auth/me`,
            {
              headers: {
                Authorization: `Bearer ${tokens.accessToken}`,
              },
            }
          );

          console.log(
            `🙈 --> file: index.ts:76 --> authorize --> authMe:`,
            authMe
          );

          if (authMe.ok) {
            const userInfo = await authMe.json();

            console.log(
              `🙈 --> file: index.ts:42 --> authorize --> userInfo:`,
              userInfo
            );

            user = {
              ...userInfo,
            };
            return user;
          }

          return null;
        }

        // const users = [
        //   {
        //     id: "1",
        //     email: "asd@asd.pl",
        //     password: "asd",
        //   },
        // ];

        // const user = users.find(
        //   (user) =>
        //     user.email === credentials.email &&
        //     user.password === credentials.password
        // );

        // return user ? { id: "jakies id", email: user.email } : null;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      // Fetch token data
      const response = await fetch("http://sync-api:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: token.email, password: "asd" }),
      });

      if (response.ok) {
        const tokenPayload = await response.json();
        session.accessToken = tokenPayload.accessToken;
        session.refreshToken = tokenPayload.refreshToken;
        session.accessTokenExpiresAt = tokenPayload.accessTokenExpiresAt;
        session.refreshTokenExpiresAt = tokenPayload.refreshTokenExpiresAt;
      }

      return session;
    },

    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        token.email = user.email;
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpiresAt = user.accessTokenExpiresAt;
        token.refreshTokenExpiresAt = user.refreshTokenExpiresAt;
      }

      // Check if the token has expired
      const currentTime = Date.now();
      if (currentTime >= token.accessTokenExpiresAt) {
        try {
          // Fetch a new access token using the refresh token
          const response = await axios.post(
            "http://sync-api:4000/auth/refresh-token",
            {
              refreshToken: token.refreshToken,
            }
          );

          const refreshedTokens = response.data;

          token.accessToken = refreshedTokens.accessToken;
          token.accessTokenExpiresAt = refreshedTokens.accessTokenExpiresAt;
          token.refreshToken =
            refreshedTokens.refreshToken || token.refreshToken; // update only if refresh token is also refreshed
          token.refreshTokenExpiresAt =
            refreshedTokens.refreshTokenExpiresAt ||
            token.refreshTokenExpiresAt;
        } catch (error) {
          console.error("Error refreshing access token", error);
          return { ...token, error: "RefreshAccessTokenError" };
        }
      }

      return token;
    },
  },
  basePath: BASE_PATH,
  secret: process.env.AUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
