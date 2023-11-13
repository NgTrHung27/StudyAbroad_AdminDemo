import { User } from "@prisma/client";

export interface School {
  logoUrl: string;
  backgroundUrl: string;
  name: string;
  description: string;
  colorValue: string;
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
