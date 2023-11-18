import getCurrentUser from "@/actions/get-current-user";
import { formCreateOperationSchema } from "@/constants/create-opeartion-schema";
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

    if (!school) {
      return new NextResponse("Không tìm thấy trường học", { status: 404 });
    }

    const opeartion = await db.operation.findMany({
      where: {
        schoolId: school.id,
      },
    });

    return NextResponse.json(opeartion);
   
  } catch (error) {
    console.log(error);
    return new NextResponse("CREATE OPERATION ERROR", { status: 500 });
  }
}
export async function POST(
  req: Request,
  { params }: { params: { nameTruong: string } }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Chưa xác thực", { status: 404 });
    }

    if (!params.nameTruong) {
      return new NextResponse("Không tìm thấy tên trường", { status: 404 });
    }

    const body = await req.json();
    const { ...values } = formCreateOperationSchema.parse(body);

    const school = await db.school.findUnique({
      where: {
        name: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường học", { status: 404 });
    }

    const opeartion = await db.operation.create({
      data: {
        schoolId: school.id,
        ...values,
      },
    });
    return NextResponse.json(opeartion);
  } 
  catch (error) {
    console.log("CREATE PROGRAM", error);
    return new NextResponse(`Tạo ngành học thất bại ${error}`, 
    {
      status: 500,
    });
  }
}