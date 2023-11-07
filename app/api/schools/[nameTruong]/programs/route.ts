import getCurrentUser from "@/actions/get-current-user";
import { formCreateNganhHocSchema } from "@/app/(root)/(routes)/nganhhoc/create/constant";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const currentuser = await getCurrentUser();

    if (!currentuser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }

    const body = await req.json();

    const { name, description1, description2, Price, Image1,Image2 } =
      formCreateNganhHocSchema.parse(body);

    const program = await db.program.create({
      data: {
        name,
        description1,
        description2,
        Price,
        Image1,
        Image2,
      },
    });

    return NextResponse.json(program);
  } catch (error) {
    console.log("CREATE USER", error);
    return new NextResponse("Tạo ngành học thất bại", {
      status: 500,
    });
  }
}
