import getCurrentUser from "@/actions/get-current-user";
import { formRoleSchema } from "@/constaints-edit/constants-user";
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
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    const existingUser = await db.user.findUnique({
      where: {
        id: params.userId,
      },
    });

    if (!existingUser) {
      return new NextResponse("Không tìm thấy người dung", { status: 404 });
    }

    if (existingUser.email.toLowerCase() === "cigpbubu@gmail.com") {
      return new NextResponse("Không thể cập nhật người dùng này", {
        status: 403,
      });
    }

    const user = await db.user.update({
      where: {
        id: existingUser.id,
        NOT: {
          email: process.env.ADMIN_EMAIL,
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

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    if (!params.userId) {
      return new NextResponse("Không tìm thấy mã người dùng", { status: 404 });
    }

    const user = await db.user.findUnique({
      where: {
        id: params.userId,
      },
    });

    if (!user) {
      return new NextResponse("Không tìm thấy người dùng", { status: 404 });
    }

    if (user.role === "ADMIN") {
      return new NextResponse("Quyền hạn không được phép", { status: 403 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log("FIND USERS ERROR", error);
    return new NextResponse("Lỗi tìm người dùng", { status: 500 });
  }
}
