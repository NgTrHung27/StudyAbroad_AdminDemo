import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    const user = await db.user.findUnique({
      where: {
        id: params.userId,
      },
    });

    if (!user) {
      return new NextResponse("Không tìm thấy tài khoản người dùng", {
        status: 404,
      });
    }

    await db.student.delete({
      where: {
        userId: user.id,
      },
    });

    const publishedUser = await db.user.update({
      where: {
        id: params.userId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedUser);
  } catch (error) {
    console.log("STUDENT PUBLISH", error);
    return new NextResponse("Lỗi xét duyệt tài khoản", { status: 500 });
  }
}
