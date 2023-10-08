import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import db from "@/lib/db";
import { UserRole } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";

export const authOptions: AuthOptions = {
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
          toast.error("Sai thông tin tài khoản");
          throw new Error("Sai thông tin tài khoản");
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
            role: UserRole.ADMIN,
          },
        });

        if (!user || !user?.hashedPassword) {
          toast.error("Sai thông tin tài khoản");
          throw new Error(`Sai thông tin tài khoản`);
        }

        if (!user.emailVerified) {
          toast.error("Email chưa xác thực");
          throw new Error("Người dùng chưa xác thực email");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          toast.error("Sai thông tin tài khoản");
          throw new Error("Sai thông tin tài khoản");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
