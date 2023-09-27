import bcrypt from "bcrypt";

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, username, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      username,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
