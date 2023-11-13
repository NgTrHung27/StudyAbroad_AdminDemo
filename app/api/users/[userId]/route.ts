import getCurrentUser from "@/actions/get-current-user";
import { formCreateUserSchema } from "@/constants/create-user-schema";
import db from "@/lib/db";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  {
    params,
  }: {
    params: {
      userId: string;
    };
  }
) {
  try {
    const currentUser = await getCurrentUser();

    const body = await req.json();

    const { ...values } = body;

    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const existingUser = await db.user.findUnique({
      where: {
        id: params.userId,
      },
    });

    if (!existingUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    if (existingUser.email.toLowerCase() === "cigpbubu@gmail.com") {
      return new NextResponse("Không thể cập nhật người dùng này");
    }

    const user = await db.user.update({
      where: {
        id: params.userId,
        NOT: {
          role: UserRole.ADMIN,
        },
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log("[USER_ID_PATCH]", error);
    return new NextResponse("Lỗi cập nhật hồ sơ", { status: 500 });
  }
}
