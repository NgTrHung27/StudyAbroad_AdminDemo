import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { nameTruong: string; blogId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    if (!params.nameTruong) {
      return new NextResponse("Không tìm thấy tên trường học", { status: 404 });
    }

    if (!params.blogId) {
      return new NextResponse("Không tìm thấy mã blog", { status: 404 });
    }

    const school = await db.school.findUnique({
      where: {
        id: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường", { status: 404 });
    }

    const blog = await db.blog.findUnique({
      where: {
        id: params.blogId,
        schoolId: school.id,
      },
    });

    if (!blog) {
      return new NextResponse("Không tìm thấy blog", {
        status: 404,
      });
    }

    await db.blog.delete({
      where: {
        id: blog.id,
        schoolId: school.id,
      },
    });

    return NextResponse.json("Xóa blog thành công", {
      status: 200,
    });
  } catch (error) {
    console.log("Lỗi xóa blog", { status: 500 });
  }
}
