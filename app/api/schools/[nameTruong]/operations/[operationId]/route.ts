import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { nameTruong: string; operationId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    if (!params.nameTruong) {
      return new NextResponse("Không tìm thấy mã trường học", { status: 404 });
    }

    if (!params.operationId) {
      return new NextResponse("Không tìm thấy mã cơ sở", { status: 404 });
    }

    const school = await db.school.findUnique({
      where: {
        id: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường học", { status: 404 });
    }

    const body = await req.json();

    const { ...values } = body;

    const operation = await db.operation.update({
      where: {
        id: params.operationId,
        schoolId: school.id,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(operation);
  } catch (error) {
    console.log("OPERATION UPDATE");
    return new NextResponse("Lỗi cập nhật cơ sở", { status: 500 });
  }
}
