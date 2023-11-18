import getCurrentUser from "@/actions/get-current-user";
import { formCreateBlogSchema } from "@/constaints-create/constant-blog";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
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
        name: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường học", { status: 404 });
    }

    const body = await req.json();

    const { ...values } = formCreateBlogSchema.parse(body);

    const blog = await db.blog.create({
      data: {
        ...values,
      },
    });

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.log("CREATE HISTORY", error);
    return new NextResponse("Lỗi tạo lịch sử", { status: 500 });
  }
}
