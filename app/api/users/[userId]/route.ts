import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { redirect } from "next/navigation";
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

    const values = await req.json();

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

    const user = await db.user.update({
      where: {
        id: params.userId,
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
