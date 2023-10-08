import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const currentuser = await getCurrentUser();

    if (!currentuser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { name, role, password, email } = await req.json();

    const hasRole = role === UserRole.ADMIN || role === UserRole.USER;

    if (!hasRole) {
      return new NextResponse("Role not found", { status: 404 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await db.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role,
      },
    });

    const token = await db.activateToken.create({
      data: {
        token: `${randomUUID()}${randomUUID()}`.replace("/-/g", ""),
        userId: user.id,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("CREATE USER", error);
    return new NextResponse("Tạo tài khoản người dùng thất bại", {
      status: 500,
    });
  }
}
