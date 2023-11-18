import getCurrentUser from "@/actions/get-current-user";
import { formCreateProgramSchema } from "@/constaints-create/constants-program";
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

    const programs = await db.program.findMany({});

    return NextResponse.json(programs);
  } catch (error) {
    console.log("FIND PROGRAMS", error);
    return new NextResponse(`Lấy ngành học thất bại ${error}`, {
      status: 500,
    });
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
    const { ...values } = formCreateProgramSchema.parse(body);

    const school = await db.school.findUnique({
      where: {
        name: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường học", { status: 404 });
    }

    const program = await db.program.create({
      data: {
        schoolId: school.id,
        ...values,
      },
    });

    return NextResponse.json(program);
  } catch (error) {
    console.log("CREATE PROGRAM", error);
    return new NextResponse(`Tạo ngành học thất bại ${error}`, {
      status: 500,
    });
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
    const { ...values } = formCreateProgramSchema.parse(body);

    const school = await db.school.findUnique({
      where: {
        name: params.nameTruong,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường học", { status: 404 });
    }

    const program = await db.program.create({
      data: {
        schoolId: school.id,
        ...values,
      },
    });

    return NextResponse.json(program);
  } catch (error) {
    console.log("CREATE PROGRAM", error);
    return new NextResponse(`Tạo ngành học thất bại ${error}`, {
      status: 500,
    });
  }
}
