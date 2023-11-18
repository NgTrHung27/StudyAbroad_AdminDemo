import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { nameTruong: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    if (!params.nameTruong) {
      return new NextResponse("Không tìm thấy mã trường học", { status: 404 });
    }

    const school = await db.school.findUnique({
      where: {
        id: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường học", { status: 404 });
    }

    const publishedSchool = await db.school.update({
      where: {
        id: params.nameTruong,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedSchool);
  } catch (error) {
    console.log("SCHOOL PUBLISH", error);
    return new NextResponse("Lỗi hiển thị trường học", { status: 500 });
  }
}
