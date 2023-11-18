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

    const programs = await db.program.findMany({
    });


    return NextResponse.json(programs);
  } catch (error) {
    console.log("FIND PROGRAMS", error);
    return new NextResponse(`Lấy ngành học thất bại ${error}`, {
      status: 500,
    });
  }
}
