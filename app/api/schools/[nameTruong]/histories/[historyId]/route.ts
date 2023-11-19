import getCurrentUser from "@/actions/get-current-user";
import { formDes1Schema } from "@/constaints-create/constant-history";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { nameTruong: string; historyId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    if (!params.nameTruong) {
      return new NextResponse("Không tìm thấy tên trường học", { status: 404 });
    }

    if (!params.historyId) {
      return new NextResponse("Không tìm thấy mã lịch sử", { status: 404 });
    }

    const school = await db.school.findUnique({
      where: {
        name: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường", { status: 404 });
    }

    const history = await db.history.findUnique({
      where: {
        id: params.historyId,
        schoolId: school.id,
      },
    });

    if (!history) {
      return new NextResponse("Không tìm thấy lịch sử", {
        status: 404,
      });
    }

    const body = await req.json();

    const { ...values } = body;

    const updatedHistory = await db.history.update({
      where: {
        id: history.id,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(updatedHistory);
  } catch (error) {
    console.log("PATCH REQUIREMENT", error);
    return new NextResponse("Lỗi cập nhật yêu cầu nhập học", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { nameTruong: string; historyId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    if (!params.nameTruong) {
      return new NextResponse("Không tìm thấy tên trường học", { status: 404 });
    }

    if (!params.historyId) {
      return new NextResponse("Không tìm thấy mã lịch sử", { status: 404 });
    }

    const school = await db.school.findUnique({
      where: {
        name: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường", { status: 404 });
    }

    const history = await db.history.findUnique({
      where: {
        id: params.historyId,
        schoolId: school.id,
      },
    });

    if (!history) {
      return new NextResponse("Không tìm thấy lịch sử", {
        status: 404,
      });
    }

    await db.history.delete({
      where: {
        id: history.id,
        schoolId: school.id,
      },
    });

    return NextResponse.json("Xóa lịch sử thành công", {
      status: 200,
    });
  } catch (error) {
    console.log("Lỗi xóa lịch sử", { status: 500 });
  }
}
