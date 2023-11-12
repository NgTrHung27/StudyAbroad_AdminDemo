import getCurrentUser from "@/actions/get-current-user";
import { formCreateSchoolSchema } from "@/constants/create-school-schema";
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
    console.log("CREATE SCHOOL", error);
    return new NextResponse("Tạo trường học thất bại", {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const schools = await db.school.findMany();
    console.log(schools);
    return NextResponse.json(schools);
  } catch (error) {
    console.log(error);
    return new NextResponse("Lấy thông tin trường học thất bại");
  }
}
