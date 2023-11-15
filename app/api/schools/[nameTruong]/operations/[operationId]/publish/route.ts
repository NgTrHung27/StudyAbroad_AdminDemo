import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { operationId: string; nameTruong: string } }
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

    const operation = await db.operation.findUnique({
      where: {
        id: params.operationId,
        schoolId: params.nameTruong,
      },
    });

    if (!operation) {
      return new NextResponse("Không tìm thấy cơ sở", { status: 404 });
    }

    const publishedOperation = await db.operation.update({
      where: {
        id: params.operationId,
        schoolId: params.nameTruong,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedOperation);
  } catch (error) {
    console.log("OPERATION PUBLISH", error);
    return new NextResponse("Lỗi hiển thị cơ sở", { status: 500 });
  }
}
