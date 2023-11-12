import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { NextResponse } from "next/server";

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

    return NextResponse.json(school);
  } catch (error) {
    console.log(error);
    return new NextResponse("Lỗi tìm trường học", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { nameTruong: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }
    const body = await req.json();
    const { ...values } = body;

    const school = await db.school.update({
      where: {
        name: params.nameTruong,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(school);
  } catch (error) {
    console.log("UPDATE_SCHOOL_BACKGROUND", error);
    return new NextResponse("Update error", { status: 500 });
  }
}
