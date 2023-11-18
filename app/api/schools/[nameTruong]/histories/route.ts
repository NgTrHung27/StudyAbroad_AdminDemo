import getCurrentUser from "@/actions/get-current-user";
import { formCreateHistorySchema } from "@/constaints-create/constant-history";
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

    const { ...values } = formCreateHistorySchema.parse(body);

    const history = await db.history.create({
      data: {
        schoolId: school.id,
        ...values,
      },
    });

    return NextResponse.json(history, { status: 200 });
  } catch (error) {
    console.log("CREATE HISTORY", error);
    return new NextResponse("Lỗi tạo lịch sử", { status: 500 });
  }
}
