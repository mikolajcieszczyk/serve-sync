import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword, getUserByEmail } from "@/lib/auth"; // Zaktualizuj ścieżkę do swoich funkcji
import { loginOrRegisterUser } from "#utils/api.ts";

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await getUserByEmail(credentials.email);
        const response = await loginOrRegisterUser(loginUrl, email, password);

        if (
          user &&
          (await verifyPassword(credentials.password, user.password))
        ) {
          // Zwróć dane użytkownika z tokenem dostępowym
          return {
            id: user.id,
            email: user.email,
            accessToken: user.accessToken,
          };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
