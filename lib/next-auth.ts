import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import db from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token }) => {
      const db_user = await db.user.findFirst({
        where: {
          email: token.email!,
        },
      });

      if (db_user) {
        token.id = db_user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "crendetials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Sai thông tin tài khoản");
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
            role: UserRole.ADMIN,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error(`Sai thông tin tài khoản`);
        }

        if (!user.emailVerified) {
          throw new Error("Người dùng chưa xác thực email");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Sai thông tin tài khoản");
        }

        return user;
      },
    }),
  ],
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
