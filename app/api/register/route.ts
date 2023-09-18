import bcrypt from "bcrypt";

import { NextResponse } from "next/server";
import prismadb from "../../../lib/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, username, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prismadb.user.create({
    data: {
      email,
      username,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
