import getCurrentUser from "@/actions/get-current-user";
import { formCreateSchoolSchema } from "@/constaints-create/constants-school";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const currentuser = await getCurrentUser();

    if (!currentuser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    const body = await req.json();

    const { name, colorValue, backgroundUrl, logoUrl } =
      formCreateSchoolSchema.parse(body);

    const school = await db.school.create({
      data: {
        name,
        colorValue,
        backgroundUrl,
        logoUrl,
      },
    });

    return NextResponse.json(school);
  } catch (error) {
    console.log("CREATE USER", error);
    return new NextResponse(`Tạo trường học thất bại ${error}`, {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const schools = await db.school.findMany({
      where: {
        isPublished: true,
      },
      include: {
        students: true,
        blogs: true,
        history: true,
        operations: {
          where: {
            isPublished: true,
          },
        },
        programs: true,
        requirement: true,
      },
    });
    console.log(schools);
    return NextResponse.json(schools);
  } catch (error) {
    console.log(error);
    return new NextResponse("Lấy thông tin trường học thất bại");
  }
}
