import getCurrentUser from "@/actions/get-current-user";
import { formCreateHistorySchema } from "@/constaints-create/constant-history";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { nameTruong: string } }
) {
  try {

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
export async function GET(
  req: Request,
  { params }: { params: { nameTruong: string } }
) {
  try {
    if (!params.nameTruong) {
      return new NextResponse("Không tìm thấy tên trường", { status: 404 });
    }

    const school = await db.school.findUnique({
      where: {
        name: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường học", { status: 404 });
    }

    const historys = await db.history.findMany({
      where: {
        schoolId: school.id,
      },
    });
    return NextResponse.json(historys);
  } catch (error) {
    return new NextResponse(`Lấy lịch sử thất bại thất bại `, {
      status: 500,
    });
  }
  
}