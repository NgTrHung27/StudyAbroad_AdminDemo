import getCurrentUser from "@/actions/get-current-user";
import { formCreateRequirementSchema } from "@/constaints-create/constant-requirement";
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

    const { ...values } = formCreateRequirementSchema.parse(body);

    const requirement = await db.requirement.create({
      data: {
        schoolId: school.id,
        ...values,
      },
    });

    return NextResponse.json(requirement, { status: 200 });
  } catch (error) {
    console.log("CREATE REQUIREMENT", error);
    return new NextResponse("Lỗi tạo yêu cầu nhập học", { status: 500 });
  }
}
