import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { studentId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    if (!params.studentId) {
      return new NextResponse("Không tìm thấy mã học sinh", { status: 404 });
    }

    const { searchParams } = new URL(req.url);
    const { name } = await req.json();

    const school = await db.school.findUnique({
      where: {
        name: name,
      },
    });

    if (!school) {
      return new NextResponse("Trường học không tồn tại", { status: 404 });
    }

    const student = await db.student.update({
      where: {
        id: params.studentId,
      },
      data: {
        schoolId: school.id,
      },
    });

    return NextResponse.json(student);
  } catch (error) {
    console.log(error);
    return new NextResponse("PATCH STUDENT ERROR", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { studentId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    const { searchParams } = new URL(req.url);

    const schoolId = searchParams.get("schoolId");

    if (!schoolId) {
      return new NextResponse("Không tìm thấy mã trường học");
    }

    if (!params.studentId) {
      return new NextResponse("Không tìm thấy mã học sinh");
    }

    const school = await db.school.update({
      where: {
        id: schoolId,
      },
      data: {
        students: {
          delete: {
            id: params.studentId,
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
    return new NextResponse("DELETE USER ERROR", { status: 500 });
  }
}
