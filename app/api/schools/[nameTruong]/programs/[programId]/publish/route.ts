import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { programId: string; nameTruong: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    if (!params.nameTruong) {
      return new NextResponse("Không tìm thấy mã trường học", { status: 404 });
    }

    if (!params.programId) {
      return new NextResponse("Không tìm thấy mã ngành học", { status: 404 });
    }

    const program = await db.program.findUnique({
      where: {
        id: params.programId,
        schoolId: params.nameTruong,
      },
    });

    if (!program) {
      return new NextResponse("Không tìm thấy ngành học", { status: 404 });
    }

    const publishedProgram = await db.program.update({
      where: {
        id: params.programId,
        schoolId: params.nameTruong,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedProgram);
  } catch (error) {
    console.log("PROGRAM PUBLISH", error);
    return new NextResponse("Lỗi hiển thị ngành học", { status: 500 });
  }
}
