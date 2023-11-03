import bcrypt from "bcrypt";

import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { formCreateUserSchema } from "@/app/(root)/(routes)/taikhoan/create/constants";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const body = await req.json();
  const { ...values } = formCreateUserSchema.parse(body);

  const hashedPassword = await bcrypt.hash(randomUUID(), 12);

  const user = await prisma.user.create({
    data: {
      hashedPassword,
      ...values,
    },
  });

  return NextResponse.json(user);
}
