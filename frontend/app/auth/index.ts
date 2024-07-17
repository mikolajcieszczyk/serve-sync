import { getToken } from "app/lib/api/auth/login.ts";
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
        // console.log(
        //   `🙈 --> file: index.ts:18 --> authorize --> response:`,
        //   response.accessToken
        // );

        // const credentialDetails = {
        //   email: credentials.email as string,
        //   password: credentials.password as string,
        // };

        // const response = await getToken(
        //   credentialDetails.email,
        //   credentialDetails.password
        // );

        const users = [
          {
            id: "1",
            email: "asd@asd.pl",
            password: "asd",
          },
        ];

        const user = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );

        return user ? { id: user.id, email: user.email } : null;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log(`🙈 --> file: index.ts:44 --> jwt --> getToken:`, getToken);

      return token;
    },
  },
  basePath: BASE_PATH,
  secret: process.env.AUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
