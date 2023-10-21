import bcrypt from "bcrypt";

import { NextResponse } from "next/server";
import prismadb from "../../../lib/prismadb";
import { formRegisterSchema } from "../../(auth)/(routes)/sign-up/constants";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, dob, address, phone, gender, cccd, description } =
    formRegisterSchema.parse(body);

  const hashedPassword = await bcrypt.hash("test", 12);

  const user = await prismadb.user.create({
    data: {
      email,
      hashedPassword,
      name,
      dob,
      address,
      phoneNumber: phone,
      gender,
      cccd,
      description,
    },
  });

  return NextResponse.json(user);
}
