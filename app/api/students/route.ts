import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }
    const { searchParams } = new URL(req.url);

    const schoolId = searchParams.get("schoolId");
    const userId = searchParams.get("userId");

    if (!schoolId) {
      return new NextResponse("Không tìm thấy mã trường học");
    }

    if (!userId) {
      return new NextResponse("Không tìm thấy mã người dùng");
    }

    const school = await db.school.update({
      where: {
        id: schoolId,
      },
      data: {
        students: {
          create: {
            userId,
          },
        },
      },
      include: {
        students: {
          include: {
            user: true,
          },
          orderBy: {
            user: {
              name: "asc",
            },
          },
        },
      },
    });

    return NextResponse.json(school);
  } catch (error) {
    console.log(error);
    return new NextResponse("ADD STUDENT ERROR", { status: 500 });
  }
}
