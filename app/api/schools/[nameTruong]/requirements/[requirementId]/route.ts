import getCurrentUser from "@/actions/get-current-user";
import { formCreateRequirementSchema } from "@/constaints-create/constant-requirement";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { nameTruong: string; requirementId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    if (!params.nameTruong) {
      return new NextResponse("Không tìm thấy tên trường học", { status: 404 });
    }

    if (!params.requirementId) {
      return new NextResponse("Không tìm thấy mã yêu cầu", { status: 404 });
    }

    const school = await db.school.findUnique({
      where: {
        name: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường", { status: 404 });
    }

    const requirement = await db.requirement.findUnique({
      where: {
        id: params.requirementId,
        schoolId: school.id,
      },
    });

    if (!requirement) {
      return new NextResponse("Không tìm thấy yêu cầu nhập học", {
        status: 404,
      });
    }

    const body = await req.json();

    const { ...values } = formCreateRequirementSchema.parse(body);

    const updatedRequirement = await db.requirement.update({
      where: {
        id: requirement.id,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(updatedRequirement);
  } catch (error) {
    console.log("PATCH REQUIREMENT", error);
    return new NextResponse("Lỗi cập nhật yêu cầu nhập học", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { nameTruong: string; requirementId: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    if (!params.nameTruong) {
      return new NextResponse("Không tìm thấy tên trường học", { status: 404 });
    }

    if (!params.requirementId) {
      return new NextResponse("Không tìm thấy mã yêu cầu", { status: 404 });
    }

    const school = await db.school.findUnique({
      where: {
        name: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường", { status: 404 });
    }

    const requirement = await db.requirement.findUnique({
      where: {
        id: params.requirementId,
        schoolId: school.id,
      },
    });

    if (!requirement) {
      return new NextResponse("Không tìm thấy yêu cầu nhập học", {
        status: 404,
      });
    }

    await db.requirement.delete({
      where: {
        id: requirement.id,
        schoolId: school.id,
      },
    });

    return NextResponse.json("Xóa yêu cầu nhập học thành công", {
      status: 200,
    });
  } catch (error) {
    console.log("Lỗi xóa yêu cầu nhập học", { status: 500 });
  }
}
